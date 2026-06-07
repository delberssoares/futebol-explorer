import { MaterialIcons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, Image, Platform, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { captureRef } from 'react-native-view-shot';
import { getShieldSource } from './times/shields';

type TitleCategory = {
    mundiais?: { name: string; count: number }[];
    internacionais?: { name: string; count: number }[];
    nacionais?: { name: string; count: number }[];
    estaduais?: { name: string; count: number }[];
};

type Team = {
    name: string;
    shield: string;
    fundacao: string;
    titles: TitleCategory[];
};

const CATEGORY_ORDER = ['mundiais', 'internacionais', 'nacionais', 'estaduais'];

const CATEGORY_CONFIG: Record<string, { label: string; icon: string; accent: string; accentLight: string }> = {
    mundiais:       { label: 'Mundiais',       icon: '🌍', accent: '#7C3AED', accentLight: '#EDE9FE' },
    internacionais: { label: 'Internacionais', icon: '🌎', accent: '#2563EB', accentLight: '#DBEAFE' },
    nacionais:      { label: 'Nacionais',      icon: '🇧🇷', accent: '#16A34A', accentLight: '#DCFCE7' },
    estaduais:      { label: 'Estaduais',      icon: '📍', accent: '#F59E0B', accentLight: '#FEF3C7' },
};

const CompareTeamsScreen: React.FC = () => {
    const params = useLocalSearchParams();
    const teamsString = Array.isArray(params.teams) ? params.teams[0] : params.teams;
    const teams: Team[] = teamsString ? JSON.parse(teamsString) : [];
    const viewRef = useRef<React.ElementRef<typeof View>>(null);
    const [hasPermission, setHasPermission] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleCaptureAndSave = async () => {
        try {
            if (!hasPermission) {
                Alert.alert('Permissão necessária', 'É necessário permitir o acesso à galeria para salvar a imagem.');
                return;
            }
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
            Alert.alert('Atenção', 'Para salvar imagens, use o app instalado (não o Expo Go).');
        }
    };

    const allTitlesByCategory: Record<string, { name: string; counts: number[] }[]> = {};
    CATEGORY_ORDER.forEach(cat => (allTitlesByCategory[cat] = []));

    CATEGORY_ORDER.forEach(cat => {
        const titleMap: Record<string, number[]> = {};
        teams.forEach((team, ti) => {
            team.titles?.forEach((block: any) => {
                (block[cat] ?? []).forEach((t: { name: string; count: number }) => {
                    if (!titleMap[t.name]) titleMap[t.name] = teams.map(() => 0);
                    titleMap[t.name][ti] = t.count;
                });
            });
        });
        allTitlesByCategory[cat] = Object.entries(titleMap).map(([name, counts]) => ({ name, counts }));
    });

    const totals = teams.map((_, ti) =>
        CATEGORY_ORDER.flatMap(cat => allTitlesByCategory[cat])
            .reduce((sum, t) => sum + (t.counts[ti] ?? 0), 0)
    );

    const winner = totals[0] > totals[1] ? 0 : totals[1] > totals[0] ? 1 : -1;

    return (
        <View style={styles.root} ref={viewRef}>
            <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* ── HERO com os dois times ── */}
                <View style={styles.hero}>

                    {/* Times lado a lado */}
                    <View style={styles.heroTeamsRow}>

                        {/* Time A */}
                        <View style={styles.teamHero}>
                            <Image
                                source={getShieldSource(teams[0]?.shield)}
                                style={styles.shield}
                                resizeMode="contain"
                            />
                            <Text style={styles.teamName} numberOfLines={2}>{teams[0]?.name}</Text>
                            <View style={[styles.totalBadge, winner === 0 && styles.totalBadgeWinner]}>
                                <Text style={[styles.totalText, winner === 0 && styles.totalTextWinner]}>
                                    🏆 {totals[0]}
                                </Text>
                            </View>
                        </View>

                        {/* Centro: VS + botão print */}
                        <View style={styles.centerCol}>
                            <Text style={styles.vsText}>VS</Text>
                            <TouchableOpacity style={styles.captureBtn} onPress={handleCaptureAndSave}>
                                <MaterialIcons name="camera-alt" size={20} color="#FFF" />
                            </TouchableOpacity>
                        </View>

                        {/* Time B */}
                        <View style={styles.teamHero}>
                            <Image
                                source={getShieldSource(teams[1]?.shield)}
                                style={styles.shield}
                                resizeMode="contain"
                            />
                            <Text style={styles.teamName} numberOfLines={2}>{teams[1]?.name}</Text>
                            <View style={[styles.totalBadge, winner === 1 && styles.totalBadgeWinner]}>
                                <Text style={[styles.totalText, winner === 1 && styles.totalTextWinner]}>
                                    🏆 {totals[1]}
                                </Text>
                            </View>
                        </View>

                    </View>
                </View>

                {/* ── CATEGORIAS ── */}
                <View style={styles.body}>
                    {CATEGORY_ORDER.map(cat => {
                        const rows = allTitlesByCategory[cat];
                        if (!rows.length) return null;
                        const config = CATEGORY_CONFIG[cat];
                        const catTotals = teams.map((_, ti) => rows.reduce((s, r) => s + r.counts[ti], 0));

                        return (
                            <View key={cat} style={styles.categoryBlock}>
                                <View style={[styles.categoryHeader, { backgroundColor: config.accentLight }]}>
                                    <Text style={styles.categoryIcon}>{config.icon}</Text>
                                    <Text style={[styles.categoryLabel, { color: config.accent }]}>{config.label}</Text>
                                    <View style={styles.catTotalsRow}>
                                        {catTotals.map((ct, i) => (
                                            <React.Fragment key={i}>
                                                <View style={[styles.catTotalBadge, { backgroundColor: config.accent }]}>
                                                    <Text style={styles.catTotalText}>{ct}</Text>
                                                </View>
                                                {i === 0 && <Text style={[styles.catVs, { color: config.accent }]}>×</Text>}
                                            </React.Fragment>
                                        ))}
                                    </View>
                                </View>

                                {rows.map((row, ri) => {
                                    const [a, b] = row.counts;
                                    const aWins = a > b, bWins = b > a;
                                    return (
                                        <View key={ri} style={styles.titleRow}>
                                            <View style={[styles.scoreBox, aWins && { backgroundColor: config.accentLight }]}>
                                                <Text style={[styles.scoreText, aWins && { color: config.accent }]}>{a}</Text>
                                            </View>
                                            <Text style={styles.titleName} numberOfLines={2}>{row.name}</Text>
                                            <View style={[styles.scoreBox, bWins && { backgroundColor: config.accentLight }]}>
                                                <Text style={[styles.scoreText, bWins && { color: config.accent }]}>{b}</Text>
                                            </View>
                                        </View>
                                    );
                                })}
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

    // ── HERO
    hero: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingTop: 32,
        paddingBottom: 28,
        paddingHorizontal: 16,
        overflow: 'hidden',
        position: 'relative',
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
        marginBottom: 20,
    },
    heroTeamsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        gap: 8,
    },
    teamHero: {
        flex: 1,
        alignItems: 'center',
        gap: 10,
        padding: 12,
        borderRadius: 16,
    },
    shield: {
        width: 72,
        height: 72,
    },
    teamName: {
        fontSize: 14,
        fontWeight: '800',
        color: '#111827',
        textAlign: 'center',
    },
    totalBadge: {
        backgroundColor: '#F3F4F6',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    totalBadgeWinner: {
        backgroundColor: '#FEF3C7',
        borderColor: '#F59E0B',
    },
    totalText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#374151',
    },
    totalTextWinner: {
        color: '#B45309',
    },

    // Centro VS + câmera
    centerCol: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    vsText: {
        fontSize: 14,
        fontWeight: '900',
        color: '#D1D5DB',
        letterSpacing: 1,
    },
    captureBtn: {
        backgroundColor: '#6200EA',
        padding: 9,
        borderRadius: 22,
        elevation: 6,
        shadowColor: '#6200EA',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.35,
        shadowRadius: 6,
    },

    // ── BODY
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
        paddingHorizontal: 14,
        gap: 8,
    },
    categoryIcon: {
        fontSize: 16,
    },
    categoryLabel: {
        flex: 1,
        fontSize: 14,
        fontWeight: '800',
        letterSpacing: 0.3,
    },
    catTotalsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    catTotalBadge: {
        borderRadius: 10,
        paddingHorizontal: 9,
        paddingVertical: 3,
    },
    catTotalText: {
        color: '#FFF',
        fontSize: 13,
        fontWeight: '700',
    },
    catVs: {
        fontSize: 12,
        fontWeight: '700',
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 11,
        paddingHorizontal: 14,
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
        gap: 8,
    },
    titleName: {
        flex: 1,
        fontSize: 13,
        fontWeight: '500',
        color: '#374151',
        textAlign: 'center',
    },
    scoreBox: {
        width: 34,
        height: 34,
        borderRadius: 10,
        backgroundColor: '#F9FAFB',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    scoreText: {
        fontSize: 15,
        fontWeight: '800',
        color: '#9CA3AF',
    },
});

export default CompareTeamsScreen;