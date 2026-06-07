import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import teams from './times/times';
import { getShieldSource } from './times/shields';
import { router } from 'expo-router';

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
    const [longPressTimeout, setLongPressTimeout] = useState<NodeJS.Timeout | null>(null);

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
            >
                <Image source={getShieldSource(item.shield)} style={styles.shield} resizeMode="contain" />
                <Text style={styles.name}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>
                Toque em um time para visualizar detalhes ou pressione e segure para selecioná-lo para comparação. (Máximo de 2 times)
            </Text>
            <FlatList
                data={teams}
                renderItem={renderItem}
                keyExtractor={(item) => item?.name}
            />
            {selectedTeams?.length === 2 && (
                <Button title="Comparar" onPress={handleComparePress} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    mainTitle: {
        paddingVertical: 10,
        color: '#003300',
        fontSize: 16,
        textAlign: 'center',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
    },
    selectedItem: {
        backgroundColor: '#CDCDCD',
        borderColor: '#ADD8E6',
    },
    shield: {
        width: 50,
        height: 50,
        marginRight: 16,
    },
    name: {
        fontSize: 18,
    },
});

export default SelectTeamScreen;
