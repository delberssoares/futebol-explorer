import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { BackHandler, Button, FlatList, Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import teams from './times/times';

type Team = {
    name: string;
    shield: ImageSourcePropType;
};

teams.sort((a, b) => a.name.localeCompare(b.name));

const handlePress = (team: Team) => {
    router.push({ pathname: "/teamDetail", params: { team: JSON.stringify(team) } });
};

const SelectTeamScreen: React.FC = () => {
    const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
    const [longPressTimeout, setLongPressTimeout] = useState<number | null>(null);

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
        const selectedIndex = selectedTeams.findIndex((team) => team.name === item.name);
        const isSelected = selectedIndex !== -1;

        return (
            <TouchableOpacity
                onPress={() => handleSelectTeam(item)}
                onLongPress={() => handleLongPress(item)}
                onPressOut={handlePressOut}
                style={[styles.item, isSelected && styles.selectedItem]}
            >
                <View style={styles.itemContent}>
                    <View style={styles.itemLeft}>
                        <Image source={item.shield} style={styles.shield} />
                        <Text style={styles.name}>{item.name}</Text>
                    </View>
                    {isSelected && (
                        <Text style={styles.selectionNumber}>{selectedIndex + 1}</Text>
                    )}
                </View>
            </TouchableOpacity>
        );
    };


    useEffect(() => {
        const onBackPress = () => {
            if (selectedTeams.length > 0) {
                setSelectedTeams([]);
                return true; // impede o comportamento padrão (fechar o app)
            }
            return false; // permite o comportamento padrão (sair do app)
        };

        const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

        return () => subscription.remove();
    }, [selectedTeams]);
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
        backgroundColor: '#d0e8ff', // azul claro
        borderColor: '#007AFF',     // azul iOS padrão
        borderWidth: 0.2,
        borderRadius: 8,
        shadowColor: '#007AFF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5, // para Android
    },

    shield: {
        width: 50,
        height: 50,
        marginRight: 16,
        resizeMode: 'contain',
    },
    name: {
        fontSize: 18,
    },
    itemContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    selectionNumber: {
        width: 28,
        height: 28,
        borderRadius: 14, // deixa a borda arredondada (metade do width/height)
        backgroundColor: '#007AFF', // cor de fundo (azul padrão iOS)
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
    },

});

export default SelectTeamScreen;
