import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
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

    // Monta mapa de títulos por categoria → título → [count time A, count time B]
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

    // Total por time
    const totals = teams.map((_, ti) =>
        CATEGORY_ORDER.flatMap(cat => allTitlesByCategory[cat])
            .reduce((sum, t) => sum + (t.counts[ti] ?? 0), 0)
    );

    const winner = totals[0] > totals[1] ? 0 : totals[1] > totals[0] ? 1 : -1; // -1 = empate

    return (
        <View style={styles.root}>
            <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

                {/* ── HERO com os dois times ── */}
                <View style={styles.hero}>
                    {teams.map((team, i) => (
                        <React.Fragment key={i}>
                            {i === 1 && (
                                <View style={styles.vsContainer}>
                                    <Text style={styles.vsText}>VS</Text>
                                </View>
                            )}
                            <View style={[styles.teamHero, winner === i && styles.teamHeroWinner]}>
                                {winner === i && (
                                    <View style={styles.winnerBadge}>
                                        <Text style={styles.winnerBadgeText}>👑 Mais títulos</Text>
                                    </View>
                                )}
                                <Image
                                    source={getShieldSource(team.shield)}
                                    style={styles.shield}
                                    resizeMode="contain"
                                />
                                <Text style={styles.teamName} numberOfLines={2}>{team.name}</Text>
                                <View style={styles.totalBadge}>
                                    <Text style={styles.totalText}>🏆 {totals[i]}</Text>
                                </View>
                            </View>
                        </React.Fragment>
                    ))}
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
                                {/* Cabeçalho */}
                                <View style={[styles.categoryHeader, { backgroundColor: config.accentLight }]}>
                                    <Text style={styles.categoryIcon}>{config.icon}</Text>
                                    <Text style={[styles.categoryLabel, { color: config.accent }]}>{config.label}</Text>
                                    {/* Totais da categoria lado a lado */}
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

                                {/* Linhas de título */}
                                {rows.map((row, ri) => {
                                    const [a, b] = row.counts;
                                    const aWins = a > b, bWins = b > a;
                                    return (
                                        <View key={ri} style={styles.titleRow}>
                                            {/* Placar time A */}
                                            <View style={[
                                                styles.scoreBox,
                                                aWins && { backgroundColor: config.accentLight },
                                            ]}>
                                                <Text style={[styles.scoreText, aWins && { color: config.accent }]}>
                                                    {a}
                                                </Text>
                                            </View>

                                            {/* Nome do título */}
                                            <Text style={styles.titleName} numberOfLines={2}>{row.name}</Text>

                                            {/* Placar time B */}
                                            <View style={[
                                                styles.scoreBox,
                                                bWins && { backgroundColor: config.accentLight },
                                            ]}>
                                                <Text style={[styles.scoreText, bWins && { color: config.accent }]}>
                                                    {b}
                                                </Text>
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
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: 32,
        paddingBottom: 36,
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
        gap: 8,
    },
    teamHero: {
        flex: 1,
        alignItems: 'center',
        gap: 10,
        padding: 12,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: 'transparent',
    },
    teamHeroWinner: {
        borderColor: '#F59E0B',
        backgroundColor: '#FFFBEB',
    },
    winnerBadge: {
        backgroundColor: '#F59E0B',
        borderRadius: 12,
        paddingHorizontal: 8,
        paddingVertical: 3,
    },
    winnerBadgeText: {
        fontSize: 10,
        fontWeight: '800',
        color: '#FFF',
        letterSpacing: 0.3,
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
    totalText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#374151',
    },
    vsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    },
    vsText: {
        fontSize: 14,
        fontWeight: '900',
        color: '#D1D5DB',
        letterSpacing: 1,
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