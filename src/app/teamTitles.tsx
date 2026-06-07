import { MaterialIcons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { captureRef } from 'react-native-view-shot';
import { getShieldSource } from './times/shields';

const CATEGORY_CONFIG: Record<string, { label: string; icon: string; accent: string; accentLight: string }> = {
  mundiais: { label: 'Mundiais', icon: '🌍', accent: '#7C3AED', accentLight: '#EDE9FE' },
  internacionais: { label: 'Internacionais', icon: '🌎', accent: '#2563EB', accentLight: '#DBEAFE' },
  nacionais: { label: 'Nacionais', icon: '🇧🇷', accent: '#16A34A', accentLight: '#DCFCE7' },
  estaduais: { label: 'Estaduais', icon: '📍', accent: '#F59E0B', accentLight: '#FEF3C7' },
};

const CATEGORY_ORDER = ['mundiais', 'internacionais', 'nacionais', 'estaduais'];

const TeamTitles: React.FC = () => {
  const teamString = useLocalSearchParams().team;
  const team = teamString
    ? (Array.isArray(teamString) ? JSON.parse(teamString[0]) : JSON.parse(teamString))
    : null;

  const viewRef = useRef<React.ElementRef<typeof View>>(null);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleCaptureAndSave = async () => {
    if (!hasPermission) {
      Alert.alert('Permissão necessária', 'É necessário permitir o acesso à galeria para salvar a imagem.');
      return;
    }
    try {
      const uri = await captureRef(viewRef, { format: 'png', quality: 1 });
      if (Platform.OS === 'android' && Platform.Version >= 30) {
        const permissions = await MediaLibrary.requestPermissionsAsync();
        if (!permissions.granted) {
          Alert.alert('Permissão necessária', 'Acesso ao armazenamento negado.');
          return;
        }
      }
      await MediaLibrary.saveToLibraryAsync(uri);
      Alert.alert('Sucesso', 'Imagem salva na galeria!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a imagem.');
    }
  };

  if (!team) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Erro ao carregar os detalhes do time.</Text>
      </View>
    );
  }

  // Achata todos os títulos organizados por categoria
  const titlesByCategory: Record<string, { name: string; count: number }[]> = {};
  CATEGORY_ORDER.forEach(cat => (titlesByCategory[cat] = []));

  team.titles?.forEach((block: any) => {
    Object.entries(block).forEach(([cat, list]: [string, any]) => {
      if (titlesByCategory[cat]) {
        titlesByCategory[cat].push(...list);
      }
    });
  });

  const totalTitles = Object.values(titlesByCategory)
    .flat()
    .reduce((acc, t) => acc + t.count, 0);

  return (
    <View style={styles.root} ref={viewRef}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

      {/* Botão câmera */}
      <TouchableOpacity style={styles.captureBtn} onPress={handleCaptureAndSave}>
        <MaterialIcons name="camera-alt" size={22} color="#FFF" />
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* ── HERO ── */}
        <View style={styles.hero}>
          <Image
            source={getShieldSource(team.shield)}
            style={styles.shield}
            resizeMode="contain"
          />
          <Text style={styles.teamName}>{team.name}</Text>
          <View style={styles.totalBadge}>
            <Text style={styles.totalIcon}>🏆</Text>
            <Text style={styles.totalLabel}>{totalTitles} títulos no total</Text>
          </View>
        </View>

        {/* ── CATEGORIAS ── */}
        <View style={styles.body}>
          {CATEGORY_ORDER.map((cat) => {
            const list = titlesByCategory[cat];
            if (!list || list.length === 0) return null;
            const config = CATEGORY_CONFIG[cat];
            return (
              <View key={cat} style={styles.categoryBlock}>
                {/* Cabeçalho da categoria */}
                <View style={[styles.categoryHeader, { backgroundColor: config.accentLight }]}>
                  <Text style={styles.categoryIcon}>{config.icon}</Text>
                  <Text style={[styles.categoryLabel, { color: config.accent }]}>
                    {config.label}
                  </Text>
                  <View style={[styles.categoryCount, { backgroundColor: config.accent }]}>
                    <Text style={styles.categoryCountText}>
                      {list.reduce((a, t) => a + t.count, 0)}
                    </Text>
                  </View>
                </View>

                {/* Linhas de título */}
                {list.map((title, i) => (
                  <View
                    key={i}
                    style={[
                      styles.titleRow,
                      i === list.length - 1 && styles.titleRowLast,
                    ]}
                  >
                    <Text style={styles.titleName}>{title.name}</Text>
                    <View style={[styles.countBadge, { backgroundColor: config.accentLight }]}>
                      <Text style={[styles.countText, { color: config.accent }]}>
                        {title.count}×
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            );
          })}
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContent: {
    flexGrow: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#EF4444',
    fontSize: 16,
  },

  // Botão câmera
  captureBtn: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#6200EA',
    padding: 10,
    borderRadius: 24,
    zIndex: 10,
    elevation: 6,
    shadowColor: '#6200EA',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.35,
    shadowRadius: 6,
  },

  // ── HERO
  hero: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingTop: 36,
    paddingBottom: 40,
    overflow: 'hidden',
    position: 'relative',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    marginBottom: 24,
  },
  heroBlob: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: '#F0F4FF',
    top: -40,
    alignSelf: 'center',
  },
  shield: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
  teamName: {
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 14,
    letterSpacing: 0.3,
  },
  totalBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  totalIcon: {
    fontSize: 14,
  },
  totalLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#374151',
    letterSpacing: 0.2,
  },

  // ── CATEGORIAS
  body: {
    paddingHorizontal: 16,
    gap: 14,
  },
  categoryBlock: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 10,
  },
  categoryIcon: {
    fontSize: 18,
  },
  categoryLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: '800',
    letterSpacing: 0.3,
  },
  categoryCount: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  categoryCountText: {
    color: '#FFF',
    fontSize: 13,
    fontWeight: '700',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  titleRowLast: {
  },
  titleName: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#374151',
    marginRight: 12,
  },
  countBadge: {
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  countText: {
    fontSize: 13,
    fontWeight: '800',
  },
});

export default TeamTitles;