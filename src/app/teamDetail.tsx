import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Linking } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

type RedeSocial = {
    nome: string;
    link: string;
};

type Team = {
    name: string;
    shield: string;
    fundacao: string;
    redes: RedeSocial[];
};

const TeamDetailScreen: React.FC = () => {
    const params = useLocalSearchParams();
    const teamString = Array.isArray(params.team) ? params.team[0] : params.team;
    const team: Team | null = teamString ? JSON.parse(teamString) : null;

    if (!team) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Erro ao carregar os detalhes do time.</Text>
            </View>
        );
    }

    const topics = [
        { id: '1', title: 'Títulos' },
        { id: '2', title: 'Artilheiros da história' },
    ];

    const handlePress = (topic: string) => {
        if (team) {
            if (topic === 'Títulos') {
                router.push({ pathname: "/teamTitles", params: { team: JSON.stringify(team) } });
            } else if (topic === 'Artilheiros da história') {
                router.push({ pathname: "/teamArtilheiros", params: { team: JSON.stringify(team) } });
            }
        }
    };

    const renderTopic = ({ item }: { item: { id: string; title: string } }) => (
        <TouchableOpacity style={styles.topicItem} onPress={() => handlePress(item.title)}>
            <Text style={styles.topicTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    const handleSocialPress = (url: string) => {
        if (url) {
            Linking.openURL(url);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.teamName}>{team.name}</Text>
            <Image source={{ uri: team.shield }} style={styles.shield} />
            <Text>Fundação: {team.fundacao}</Text>
            <FlatList
                data={topics}
                keyExtractor={(item) => item.id}
                renderItem={renderTopic}
                style={styles.list}
            />
            <View style={styles.socialContainer}>
                {team.redes.length > 0 && (
                    <TouchableOpacity onPress={() => handleSocialPress(team.redes[0].link)}>
                        <FontAwesome6 name="facebook" size={40} color="#4267B2" style={styles.socialIcon} />
                    </TouchableOpacity>
                )}
                {team.redes.length > 1 && (
                    <TouchableOpacity onPress={() => handleSocialPress(team.redes[1].link)}>
                        <FontAwesome6 name="instagram" size={40} color="#C13584" style={styles.socialIcon} />
                    </TouchableOpacity>
                )}
                {team.redes.length > 2 && (
                    <TouchableOpacity onPress={() => handleSocialPress(team.redes[2].link)}>
                        <FontAwesome6 name="x-twitter" size={40} color="black" style={styles.socialIcon} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 0,
        marginLeft: 0,
        marginRight: 0,
    },
    shield: {
        width: 100,
        height: 100,
        marginVertical: 16,
        resizeMode: 'contain',
    },
    teamName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 16,
    },
    list: {
        width: '100%',
    },
    topicItem: {
        padding: 16,
        marginLeft: 16,
        marginRight: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    topicTitle: {
        fontSize: 18,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
    socialContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 0,
        width: '100%',
        backgroundColor: '#eae8e8b7', // Light gray to complement the icon colors
        height: '15%',
    },
    socialIcon: {
        marginHorizontal: 10,
    },
});

export default TeamDetailScreen;
