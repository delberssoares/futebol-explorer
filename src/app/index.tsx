import { router } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getShieldSource } from './times/shields';
import teams from './times/times';

type Team = {
    name: string;
    shield: string;
};

teams.sort((a, b) => a.name.localeCompare(b.name));

const handlePress = (team: Team) => {
    router.push({ pathname: "/teamDetail", params: { team: JSON.stringify(team) } });
};

const SelectTeamScreen: React.FC = () => {
    const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
    const [longPressTimeout, setLongPressTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);
    const insets = useSafeAreaInsets();

    const handleSelectTeam = (team: Team) => {
        if (selectedTeams.length === 0) {
            handlePress(team);
            return;
        }
        setSelectedTeams((prev) => {
            const alreadySelected = prev.some((t) => t.name === team.name);
            if (alreadySelected) {
                return prev.filter((t) => t.name !== team.name);
            } else if (prev.length === 2) {
                return [prev[0], team];
            } else {
                return [...prev, team];
            }
        });
    };

    const handleLongPress = (team: Team) => {
        setLongPressTimeout(
            setTimeout(() => {
                setSelectedTeams((prev) => {
                    const alreadySelected = prev.some((t) => t.name === team.name);
                    if (!alreadySelected && prev.length < 2) {
                        return [...prev, team];
                    }
                    return prev;
                });
            }, 100)
        );
    };

    const handlePressOut = () => {
        if (longPressTimeout) {
            clearTimeout(longPressTimeout);
        }
    };

    const handleComparePress = () => {
        router.push({ pathname: "/compareTeams", params: { teams: JSON.stringify(selectedTeams) } });
    };

    const renderItem = ({ item }: { item: Team }) => {
        const isSelected = selectedTeams.some((team) => team.name === item.name);
        return (
            <TouchableOpacity
                onPress={() => handleSelectTeam(item)}
                onLongPress={() => handleLongPress(item)}
                onPressOut={handlePressOut}
                style={[styles.item, isSelected && styles.selectedItem]}
                activeOpacity={0.7}
            >
                <View style={[styles.shieldContainer, isSelected && styles.shieldContainerSelected]}>
                    <Image source={getShieldSource(item.shield)} style={styles.shield} resizeMode="contain" />
                </View>
                <Text style={[styles.name, isSelected && styles.nameSelected]}>{item.name}</Text>
                {isSelected && (
                    <View style={styles.checkBadge}>
                        <Text style={styles.checkText}>✓</Text>
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.hintContainer}>
                <Text style={styles.hintIcon}>⚽</Text>
                <Text style={styles.mainTitle}>
                    Toque para ver detalhes · Segure para comparar (máx. 2 times)
                </Text>
            </View>

            <FlatList
                data={teams}
                renderItem={renderItem}
                keyExtractor={(item) => item?.name}
                contentContainerStyle={[
                    styles.listContent,
                    // Garante espaço no final da lista para o botão de comparar não sobrepor
                    selectedTeams.length === 2 && { paddingBottom: 80 },
                ]}
                showsVerticalScrollIndicator={false}
            />

            {selectedTeams.length === 2 && (
                <View style={[styles.compareBar, { paddingBottom: Math.max(insets.bottom, 12) }]}>
                    <View style={styles.compareTeamsPreview}>
                        {selectedTeams.map((team, i) => (
                            <View key={i} style={styles.selectedTeamChip}>
                                <Image
                                    source={getShieldSource(team.shield)}
                                    style={styles.chipShield}
                                    resizeMode="contain"
                                />
                                <Text style={styles.chipName} numberOfLines={1}>{team.name}</Text>
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.compareButton} onPress={handleComparePress} activeOpacity={0.85}>
                        <Text style={styles.compareButtonText}>⚡ Comparar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    hintContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E8E8E8',
        gap: 8,
    },
    hintIcon: {
        fontSize: 18,
    },
    mainTitle: {
        flex: 1,
        color: '#555',
        fontSize: 13,
        lineHeight: 18,
    },
    listContent: {
        paddingHorizontal: 12,
        paddingTop: 10,
        paddingBottom: 16,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 8,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 3,
        borderWidth: 1.5,
        borderColor: 'transparent',
    },
    selectedItem: {
        backgroundColor: '#EBF5EB',
        borderColor: '#2E7D32',
    },
    shieldContainer: {
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 14,
    },
    shieldContainerSelected: {
        backgroundColor: '#C8E6C9',
    },
    shield: {
        width: 40,
        height: 40,
    },
    name: {
        flex: 1,
        fontSize: 17,
        fontWeight: '500',
        color: '#1A1A1A',
    },
    nameSelected: {
        color: '#1B5E20',
        fontWeight: '700',
    },
    checkBadge: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#2E7D32',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkText: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: 'bold',
    },

    // Barra de comparação — fica sempre acima dos botões virtuais
    compareBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
        paddingTop: 12,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
    },
    compareTeamsPreview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        gap: 8,
    },
    selectedTeamChip: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F1F8E9',
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 10,
        gap: 6,
        borderWidth: 1,
        borderColor: '#AED581',
    },
    chipShield: {
        width: 24,
        height: 24,
    },
    chipName: {
        flex: 1,
        fontSize: 13,
        fontWeight: '600',
        color: '#33691E',
    },
    compareButton: {
        backgroundColor: '#2E7D32',
        borderRadius: 12,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
    compareButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});

export default SelectTeamScreen;