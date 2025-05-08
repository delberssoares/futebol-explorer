import { MaterialIcons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ViewShot from 'react-native-view-shot';

type Title = {
  name: string;
  count: number;
};

type Category = {
  [categoryName: string]: Title[];
};

const TeamTitles: React.FC = () => {
  const teamString = useLocalSearchParams().team;
  const team = teamString
    ? Array.isArray(teamString)
      ? JSON.parse(teamString[0])
      : JSON.parse(teamString)
    : null;

  const titles: Category[] = team ? team.titles : [];

  const viewShotRef = useRef<ViewShot>(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(status === 'granted');
    })();
  }, []);

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

  if (!team) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro ao carregar os detalhes do time.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.captureIcon} onPress={handleCaptureAndSave}>
        <MaterialIcons name="camera-alt" size={30} color="#fff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        <ViewShot
          ref={viewShotRef}
          options={{ format: 'png', quality: 1 }}
          style={styles.viewShot}
        >
          <View style={styles.container}>
            <Image source={{ uri: team?.shield }} style={styles.shield} />
            {titles.map((category: Category, index: number) => (
              <View key={index} style={{ width: '100%' }}>
                {Object.entries(category).map(([categoryName, titleList]) => (
                  <View key={categoryName}>
                    <Text style={styles.categoryTitle}>
                      {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
                    </Text>
                    {titleList.map((title: Title, i: number) => (
                      <View key={i} style={styles.titleItem}>
                        <Text style={styles.titleCompetition}>{title.name}</Text>
                        <Text style={styles.titleYear}>{`${title.count}`}</Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ViewShot>
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
    paddingBottom: 20,
  },
  shield: {
    width: 100,
    height: 100,
    marginVertical: 20,
    resizeMode: 'contain',
  },
  titleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingHorizontal: 25,
  },
  titleYear: {
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 40,
    paddingHorizontal: 12,
    marginLeft: 10,
    paddingVertical: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: '#000',
    justifyContent: 'flex-end',
  },
  titleCompetition: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTitle: {
    backgroundColor: 'rgba(0, 0, 0, 0.582)',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    marginVertical: 10,
    width: '100%',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  captureIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#6200ea',
    padding: 10,
    borderRadius: 30,
    zIndex: 1,
  },
});

export default TeamTitles;
