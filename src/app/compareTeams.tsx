import { MaterialIcons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ViewShot from 'react-native-view-shot';
import capitalizeFirstLetter from '../functions/formatText';

type TitleCategory = {
  mundiais: { name: string; count: number }[];
  internacionais: { name: string; count: number }[];
  nacionais: { name: string; count: number }[];
  estaduais: { name: string; count: number }[];
};

type Team = {
  name: string;
  shield: string;
  fundacao: string;
  titles: TitleCategory[];
};

const CompareTeamsScreen: React.FC = () => {
  const params = useLocalSearchParams();
  const teamsString = Array.isArray(params.teams) ? params.teams[0] : params.teams;
  const teams: Team[] = teamsString ? JSON.parse(teamsString) : [];

  const categoryOrder = ['mundiais', 'continentais', 'nacionais', 'inter-regionais', 'regionais', 'interestaduais','estaduais'];
  const [isCapturing, setIsCapturing] = useState(false);


  const extractTitlesByCategory = (teams: Team[]) => {
    const titlesByCategory: { [category: string]: { name: string }[] } = {};
    categoryOrder.forEach(category => titlesByCategory[category] = []);

    teams?.forEach(team => {
      team?.titles?.forEach(category => {
        Object.entries(category).forEach(([categoryName, titleList]) => {
          if (titlesByCategory[categoryName]) {
            titleList.forEach(title => {
              if (!titlesByCategory[categoryName].some(t => t.name === title.name)) {
                titlesByCategory[categoryName].push({ name: title.name });
              }
            });
          }
        });
      });
    });

    return titlesByCategory;
  };

  const allTitlesByCategory = extractTitlesByCategory(teams);

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
      setIsCapturing(true);
      await new Promise(resolve => setTimeout(resolve, 100));

      const viewShot = viewShotRef.current;

      if (viewShot && typeof viewShot.capture === 'function') {
        const uri = await viewShot.capture();
        if (uri) {
          await MediaLibrary.saveToLibraryAsync(uri);
          Alert.alert('Sucesso', 'Imagem salva na galeria com sucesso!');
        }
      } else {
        throw new Error('Referência do ViewShot ou método capture está indefinida.');
      }
    } catch (error) {
      console.error('Erro ao capturar e salvar a tela:', error);
      Alert.alert('Erro', 'Não foi possível salvar a imagem.');
    } finally {
      setIsCapturing(false);
    }
  };

  const isHighestCount = (titleName: string, index: number): boolean => {
  const counts = teams.map(team =>
    team.titles?.flatMap(category => Object.values(category).flat())
      .find(t => t.name === titleName)?.count || 0
  );

  const max = Math.max(...counts);
  return counts[index] === max && counts.filter(c => c === max).length === 1;
};

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 1 }} style={styles.container}>
        <View style={styles.teams}>
          {teams.map((team, index) => (
            <View key={index} style={styles.perfilTeam}>
              <Text style={styles.teamName}>{team.name}</Text>
              <Image source={{ uri: team?.shield }} style={styles.shield} />
              <Text>Fundação: {team.fundacao}</Text>
            </View>
          ))}
        </View>

        {/* Ícone de captura entre os escudos */}
        {!isCapturing && (
          <TouchableOpacity style={styles.captureIcon} onPress={handleCaptureAndSave}>
            <MaterialIcons name="camera-alt" size={30} color="#FFF" background='#000' />
          </TouchableOpacity>
        )}


        <View style={styles.tableContainer}>
          <View style={styles.table}>
            {categoryOrder.map((category, categoryIndex) => (
              <View key={categoryIndex} style={styles.categoryContainer}>
                {allTitlesByCategory[category].length > 0 && (
                  <>
                    <Text style={styles.categoryTitle}>{capitalizeFirstLetter(category)}</Text>
                    {allTitlesByCategory[category].map((title, titleIndex) => (
                      <View key={titleIndex} style={styles.row}>
                        <View style={styles.titleContainer}>
                          <Text style={styles.typeTitle}>{title.name}</Text>
                        </View>

                        <View style={styles.valueContainer}>
                          {teams.map((team, teamIndex) => {
                            const titleObj = team.titles?.flatMap(category => Object.values(category).flat())
                              .find(t => t.name === title.name);
                            return (
                              <React.Fragment key={teamIndex}>
                                <Text
                                  style={[
                                    styles.valueText,
                                    isHighestCount(title.name, teamIndex) && styles.highlightedValue
                                  ]}
                                >
                                  {titleObj?.count || '0'}
                                </Text>

                                {teamIndex !== teams.length - 1 && <Text> X </Text>}
                              </React.Fragment>
                            );
                          })}
                        </View>
                      </View>
                    ))}
                  </>
                )}
              </View>
            ))}
          </View>
        </View>
      </ViewShot>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  teams: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  shield: {
    width: 80,
    height: 80,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  tableContainer: {
    flex: 1,
    width: '100%',
    marginBottom: 20,
  },
  table: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
  },
  titleContainer: {
    marginBottom: 5,
    padding: 5,
    borderRadius: 5,
  },
  row: {
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: 2, 
  paddingHorizontal: 10, 
  paddingVertical: 2,
},
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  categoryContainer: {},
  categoryTitle: {
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.600)',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    padding: 0,
    margin: 0,
  },
  valueText: {
    fontSize: 14,
    fontWeight: 'bold',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.100)',
    color: '#000',
  },
  perfilTeam: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
  },
  typeTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  captureIcon: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    backgroundColor: '#8929B3',
    padding: 10,
    borderRadius: 30,
    zIndex: 1,
  },
  highlightedValue: {
  backgroundColor: '#FFD700', // amarelo ouro para destaque
  color: '#000',
},

});

export default CompareTeamsScreen;
