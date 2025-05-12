import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Alert, Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import ViewShot from 'react-native-view-shot';

type Artilheiro = {
  nome: string;
  gols: number;
};

type Team = {
  name: string;
  shield: string;
  artilheiros: Artilheiro[];
  updateArtilheiros: string;
  cores?: { main: string; secondary: string; third: string }[];
};

const TeamArtilheiros: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState<Team | null>(null);
  const params = useLocalSearchParams();
  const teamString = params.team;

  const viewShotRef = useRef<ViewShot>(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(false);
  const screenHeight = Dimensions.get('window').height;

  const [scrollEnabled, setScrollEnabled] = useState(false);

  const handleContentSizeChange = (contentWidth: number, contentHeight: number) => {
    setScrollEnabled(contentHeight > screenHeight);
  };

  useEffect(() => {
    if (teamString) {
      const parsedTeam = Array.isArray(teamString) ? JSON.parse(teamString[0]) : JSON.parse(teamString);
      setTeam(parsedTeam);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [teamString]);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(status === 'granted');
    })();
  }, []);

  const showToast = (message: string) => {
    Toast.show({
      type: 'info',
      text1: message,
      position: 'bottom',
      visibilityTime: 2000,
    });
  };

  const handleCaptureAndSave = async () => {
    if (!hasMediaLibraryPermission) {
      Alert.alert('Permissão necessária', 'É necessário permitir o acesso à galeria para salvar a imagem.');
      return;
    }

    try {
      const viewShot = viewShotRef.current;

      if (viewShot && typeof viewShot.capture === 'function') {
        const uri = await viewShot.capture();
        if (uri) {
          await MediaLibrary.saveToLibraryAsync(uri);
          Alert.alert('Sucesso', 'Imagem salva na galeria com sucesso!');
        }
      } else {
        Alert.alert('Erro', 'Referência inválida para o componente de captura.');
      }
    } catch (error) {
      console.error('Erro ao capturar e salvar a tela:', error);
      Alert.alert('Erro', 'Não foi possível salvar a imagem.');
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />;
  }

  if (!team) {
    return <Text style={styles.errorText}>Erro ao carregar dados do time.</Text>;
  }

  const artilheiros = team.artilheiros;
  const teamColors = team?.cores?.[0] || { main: '#FFFFFF', secondary: '#000000', third: '#000000' };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={[styles.captureIcon, { backgroundColor: teamColors.secondary }]} onPress={handleCaptureAndSave}>
        <MaterialIcons name="camera-alt" size={30} color={teamColors.main} />
      </TouchableOpacity>

      <ScrollView
        scrollEnabled={scrollEnabled}
        onContentSizeChange={handleContentSizeChange}
        contentContainerStyle={{ flexGrow: 1 }}
      >

        <ViewShot
          ref={viewShotRef}
          options={{ format: 'png', quality: 1 }}
          style={styles.viewShot}
        >

          <View style={[styles.container, { backgroundColor: teamColors.main, minHeight: screenHeight }]}>
            <Image source={{ uri: team?.shield }} style={styles.shield} />
            <Text
              style={[styles.updateText, { color: teamColors.third ? teamColors.third : teamColors.secondary }]}
            >
              Última atualização no dia {team.updateArtilheiros}
            </Text>

            <View style={styles.titlesHeader}>
              <TouchableOpacity onPress={() => showToast('Posição')}>
                <MaterialCommunityIcons name="trophy" size={24} style={styles.icon} color={teamColors.third ? teamColors.third : teamColors.secondary} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => showToast('Nome do jogador')}>
                <MaterialCommunityIcons name="account" size={24} style={styles.icon} color={teamColors.third ? teamColors.third : teamColors.secondary} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => showToast('Quantidade de gols')}>
                <MaterialCommunityIcons name="soccer" size={24} style={styles.icon} color={teamColors.third ? teamColors.third : teamColors.secondary} />
              </TouchableOpacity>
            </View>
            {artilheiros?.length > 0 ? (
              artilheiros.map((item, index) => (
                <View key={index.toString()} style={styles.titleItem}>
                  <Text style={{ color: teamColors.secondary }}>{index + 1}</Text>
                  <Text style={[styles.titleCompetition, { color: teamColors.secondary }]}>{item.nome}</Text>
                  <Text style={[styles.titleYear, { color: teamColors.secondary }]}>{`${item.gols}`}</Text>
                </View>
              ))
            ) : (
              <Text style={[styles.noDataText, { color: teamColors.secondary }]}>Em breve</Text>
            )}
          </View>
        </ViewShot>
        <Toast />
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  viewShot: {
    backgroundColor: '#ffffff',
  },
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  shield: {
    width: 100,
    height: 100,
    marginVertical: 16,
    resizeMode: 'contain',
    alignSelf: 'center', // Centraliza horizontalmente
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
    alignSelf: 'center',

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
  captureIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    borderRadius: 30,
    zIndex: 1,
  },
});

export default TeamArtilheiros;
