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

type Serie = 'A' | 'B';

const SERIE_A_NAMES = [
    'Athletico',      
    'Atlético-MG',
    'Bahia',
    'Bragantino',  
    'Botafogo',
    'Chapecoense',
    'Corinthians',
    'Coritiba',
    'Cruzeiro',
    'Flamengo',
    'Fluminense',
    'Grêmio',
    'Internacional',
    'Mirassol',
    'Palmeiras',
    'Remo',
    'Santos',
    'São Paulo',
    'Vasco',
    'Vitória'
];

const SERIE_B_NAMES = [
    'América-MG',
    'Athletic',
    'Atlético-GO',
    'Avaí',
    'Botafogo-SP',
    'Ceará',
    'CRB',
    'Criciúma',
    'Cuiabá',
    'Fortaleza',
    'Goiás',
    'Juventude',
    'Londrina',
    'Náutico',
    'Novorizontino',
    'Operário-PR',
    'Ponte Preta',
    'São Bernardo',
    'Sport',
    'Vila Nova'
];

teams.sort((a, b) => a.name.localeCompare(b.name));

const handlePress = (team: Team) => {
    router.push({ pathname: '/teamDetail', params: { team: JSON.stringify(team) } });
};

const SelectTeamScreen: React.FC = () => {
    const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
    const [activeSerie, setActiveSerie] = useState<Serie>('A');
    const insets = useSafeAreaInsets();

    const filteredTeams = teams.filter((t) =>
        activeSerie === 'A' ? SERIE_A_NAMES.includes(t.name) : SERIE_B_NAMES.includes(t.name)
    );

    // Agrupa de 2 em 2 para exibir em pares
    const pairedTeams: Team[][] = [];
    for (let i = 0; i < filteredTeams.length; i += 2) {
        pairedTeams.push(filteredTeams.slice(i, i + 2));
    }

    const handleSelectTeam = (team: Team) => {
        handlePress(team);
    };

    const handleToggleSelect = (team: Team) => {
        setSelectedTeams((prev) => {
            const alreadySelected = prev.some((t) => t.name === team.name);
            if (alreadySelected) return prev.filter((t) => t.name !== team.name);
            if (prev.length === 2) return [prev[0], team];
            return [...prev, team];
        });
    };

    const handleComparePress = () => {
        router.push({ pathname: '/compareTeams', params: { teams: JSON.stringify(selectedTeams) } });
    };

    const renderPair = ({ item }: { item: Team[] }) => (
        <View style={styles.row}>
            {item.map((team) => {
                const isSelected = selectedTeams.some((t) => t.name === team.name);
                return (
                    <TouchableOpacity
                        key={team.name}
                        onPress={() => handleSelectTeam(team)}
                        style={[styles.card, isSelected && styles.cardSelected]}
                        activeOpacity={0.7}
                    >
                        {/* Checkbox no canto superior direito */}
                        <TouchableOpacity
                            style={[styles.checkbox, isSelected && styles.checkboxSelected]}
                            onPress={() => handleToggleSelect(team)}
                            hitSlop={{ top: 6, right: 6, bottom: 6, left: 6 }}
                        >
                            {isSelected && <Text style={styles.checkText}>✓</Text>}
                        </TouchableOpacity>

                        <View style={[styles.shieldWrapper, isSelected && styles.shieldWrapperSelected]}>
                            <Image source={getShieldSource(team.shield)} style={styles.shield} resizeMode="contain" />
                        </View>
                        <Text style={[styles.teamName, isSelected && styles.teamNameSelected]} numberOfLines={2}>
                            {team.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
            {/* Célula vazia se o par tiver só 1 time */}
            {item.length === 1 && <View style={styles.cardEmpty} />}
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Abas Série A / Série B */}
            <View style={styles.tabBar}>
                {(['A', 'B'] as Serie[]).map((serie) => (
                    <TouchableOpacity
                        key={serie}
                        style={[styles.tab, activeSerie === serie && styles.tabActive]}
                        onPress={() => setActiveSerie(serie)}
                        activeOpacity={0.8}
                    >
                        <Text style={[styles.tabText, activeSerie === serie && styles.tabTextActive]}>
                            Série {serie}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <View style={styles.hintContainer}>
                <Text style={styles.hint}>⚽ Toque para detalhes · Marque para comparar (máx. 2)</Text>
            </View>

            <FlatList
                data={pairedTeams}
                renderItem={renderPair}
                keyExtractor={(_, index) => index.toString()}
                contentContainerStyle={[
                    styles.listContent,
                    selectedTeams.length === 2 && { paddingBottom: 140 },
                ]}
                showsVerticalScrollIndicator={false}
            />

            {selectedTeams.length === 2 && (
                <View style={[styles.compareBar, { paddingBottom: Math.max(insets.bottom, 12) }]}>
                    <View style={styles.comparePreview}>
                        {selectedTeams.map((team, i) => (
                            <View key={i} style={styles.chip}>
                                <Image source={getShieldSource(team.shield)} style={styles.chipShield} resizeMode="contain" />
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
        backgroundColor: '#F2F4F7',
    },
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingHorizontal: 16,
        paddingTop: 10,
        gap: 8,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: 'transparent',
        marginBottom: -1,
    },
    tabActive: {
        borderBottomColor: '#1B5E20',
    },
    tabText: {
        fontSize: 15,
        fontWeight: '600',
        color: '#999',
    },
    tabTextActive: {
        color: '#1B5E20',
    },
    hintContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
    },
    hint: {
        fontSize: 12,
        color: '#888',
        textAlign: 'center',
    },
    listContent: {
        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10,
    },
    card: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: 14,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: 'transparent',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 3,
    },
    cardSelected: {
        backgroundColor: '#EBF5EB',
        borderColor: '#2E7D32',
    },
    cardEmpty: {
        flex: 1,
    },
    shieldWrapper: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    shieldWrapperSelected: {
        backgroundColor: '#C8E6C9',
    },
    shield: {
        width: 50,
        height: 50,
    },
    teamName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#1A1A1A',
        textAlign: 'center',
    },
    teamNameSelected: {
        color: '#1B5E20',
        fontWeight: '700',
    },
    checkbox: {
        position: 'absolute',
        top: 8,
        right: 8,
        width: 22,
        height: 22,
        borderRadius: 11,
        borderWidth: 2,
        borderColor: '#BDBDBD',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxSelected: {
        backgroundColor: '#2E7D32',
        borderColor: '#2E7D32',
    },
    checkText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
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
    comparePreview: {
        flexDirection: 'row',
        gap: 8,
        marginBottom: 10,
    },
    chip: {
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
    },
    compareButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
        letterSpacing: 0.5,
    },
});

export default SelectTeamScreen;