import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';

type Artilheiro = {
  nome: string;
  gols: number;
};

type Team = {
  name: string;
  shield: string;
  artilheiros: Artilheiro[];
  updateArtilheiros: string;
};

const TeamArtilheiros: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState<Team | null>(null);
  const params = useLocalSearchParams();
  const teamString = params.team;

  useEffect(() => {
    if (teamString) {
      const parsedTeam = Array.isArray(teamString) ? JSON.parse(teamString[0]) : JSON.parse(teamString);
      setTeam(parsedTeam);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [teamString]);

  const showToast = (message: string) => {
    Toast.show({
      type: 'info',
      text1: message,
      position: 'bottom',
      visibilityTime: 2000,
    });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />;
  }

  if (!team) {
    return <Text style={styles.errorText}>Erro ao carregar dados do time.</Text>;
  }

  const artilheiros = team.artilheiros;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: team.shield }} style={styles.shield} />
      <Text style={styles.updateText}>Última atualização no dia {team.updateArtilheiros}</Text>
      <View style={styles.titlesHeader}>
        <TouchableOpacity onPress={() => showToast('Posição')}>
          <MaterialCommunityIcons name="trophy" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showToast('Nome do jogador')}>
          <MaterialCommunityIcons name="account" size={24} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showToast('Quantidade de gols')}>
          <MaterialCommunityIcons name="soccer" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>
      {artilheiros?.length > 0 ? (
        artilheiros.map((item, index) => (
          <View key={index.toString()} style={styles.titleItem}>
            <Text>{index + 1}</Text>
            <Text style={styles.titleCompetition}>{item.nome}</Text>
            <Text style={styles.titleYear}>{`${item.gols}`}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noDataText}>Em breve</Text>
      )}
      <Toast />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 16,
  },
  shield: {
    width: 100,
    height: 100,
    marginVertical: 16,
    resizeMode: 'contain',
  },
  titlesHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    padding: 10,
  },
  icon: {
    fontSize: 24,
  },
  titleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  titleCompetition: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
  },
  titleYear: {
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 20,
    color: '#000',
  },
  updateText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  noDataText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default TeamArtilheiros;
