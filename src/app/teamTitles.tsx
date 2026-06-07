import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, Alert, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { captureRef } from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getShieldSource } from './times/shields';

const TeamTitles: React.FC = () => {
  const teamString = useLocalSearchParams().team;
  const team = teamString ? (Array.isArray(teamString) ? JSON.parse(teamString[0]) : JSON.parse(teamString)) : null;
  const titles = team ? team.titles : [];

  const viewRef = useRef<View>(null);
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
      const uri = await captureRef(viewRef.current, {
        format: 'png',
        quality: 1,
      });

      if (Platform.OS === 'android' && Platform.Version >= 30) {
        // Para Android 11 ou superior, use Storage Access Framework (SAF)
        const permissions = await MediaLibrary.requestPermissionsAsync();
        if (!permissions.granted) {
          Alert.alert('Permissão necessária', 'É necessário permitir o acesso ao armazenamento para salvar a imagem.');
          return;
        }
      }

      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert('Sucesso', 'Imagem salva na galeria com sucesso!');
    } catch (error) {
      console.error('Erro ao capturar e salvar a tela:', error);
      Alert.alert('Erro', 'Não foi possível salvar a imagem.');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Image source={getShieldSource(team.shield)} style={styles.shield} resizeMode="contain" />
      <FlatList
        data={Object.entries(item)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <>
            <Text style={styles.categoryTitle}>
              {item[0]?.charAt(0).toUpperCase() + item[0].slice(1)}
            </Text>
            {item[1]?.map((title, index) => (
              <View key={index} style={styles.titleItem}>
                <Text style={styles.titleCompetition}>{title.name}</Text>
                <Text style={styles.titleYear}>{`${title.count}`}</Text>
              </View>
            ))}
          </>
        )}
        style={styles.list}
      />
    </View>
  );

  if (!team) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Erro ao carregar os detalhes do time.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }} ref={viewRef}>
      <TouchableOpacity style={styles.captureIcon} onPress={handleCaptureAndSave}>
        <Icon name="camera-alt" size={30} color="#fff" />
      </TouchableOpacity>
      <FlatList
        data={titles}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingVertical: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  shield: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  list: {
    width: '100%',
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
  },
  titleCompetition: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
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
