import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
    Image,
    Linking, ScrollView, StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { getShieldSource } from './times/shields';

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

const TOPICS = [
    {
        id: '1',
        title: 'Títulos',
        route: 'teamTitles',
        icon: '🏆',
        description: 'Conquistas e troféus',
        accent: '#F59E0B',
        accentLight: '#FEF3C7',
    },
    {
        id: '2',
        title: 'Artilheiros da história',
        route: 'teamArtilheiros',
        icon: '⚽',
        description: 'Maiores goleadores',
        accent: '#16A34A',
        accentLight: '#DCFCE7',
    },
];

const TeamDetailScreen: React.FC = () => {
    const params = useLocalSearchParams();
    const teamString = Array.isArray(params.team) ? params.team[0] : params.team;
    const team: Team | null = teamString ? JSON.parse(teamString) : null;

    if (!team) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Erro ao carregar os detalhes do time.</Text>
            </View>
        );
    }

    const handleTopicPress = (title: string) => {
        if (title === 'Títulos') {
            router.push({ pathname: '/teamTitles', params: { team: JSON.stringify(team) } });
        } else {
            router.push({ pathname: '/teamArtilheiros', params: { team: JSON.stringify(team) } });
        }
    };

    const socialConfig = [
        { icon: 'facebook',  color: '#1877F2', bg: '#EBF5FF', label: 'Facebook' },
        { icon: 'instagram', color: '#E1306C', bg: '#FDF0F5', label: 'Instagram' },
        { icon: 'x-twitter', color: '#0F0F0F', bg: '#F3F4F6', label: 'Twitter/X' },
    ];

    return (
        <View style={styles.root}>
            <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                {/* ── HERO ── */}
                <View style={styles.hero}>
                    <View style={styles.shieldContainer}>
                        <Image
                            source={getShieldSource(team.shield)}
                            style={styles.shield}
                            resizeMode="contain"
                        />
                    </View>

                    <Text style={styles.teamName}>{team.name}</Text>

                    <View style={styles.foundedBadge}>
                        <Text style={styles.foundedLabel}>FUNDADO EM</Text>
                        <Text style={styles.foundedYear}>{team.fundacao}</Text>
                    </View>
                </View>

                {/* ── CORPO ── */}
                <View style={styles.body}>

                    {/* Divisor */}
                    <View style={styles.divider}>
                        <View style={styles.dividerLine} />
                        <Text style={styles.dividerText}>EXPLORAR</Text>
                        <View style={styles.dividerLine} />
                    </View>

                    {/* Cards de tópicos */}
                    <View style={styles.topicsContainer}>
                        {TOPICS.map((topic) => (
                            <TouchableOpacity
                                key={topic.id}
                                style={styles.topicCard}
                                onPress={() => handleTopicPress(topic.title)}
                                activeOpacity={0.75}
                            >
                                <View style={[styles.topicIconBox, { backgroundColor: topic.accentLight }]}>
                                    <Text style={styles.topicIcon}>{topic.icon}</Text>
                                </View>
                                <View style={styles.topicTexts}>
                                    <Text style={styles.topicTitle}>{topic.title}</Text>
                                    <Text style={styles.topicDescription}>{topic.description}</Text>
                                </View>
                                <View style={[styles.topicArrowBox, { backgroundColor: topic.accentLight }]}>
                                    <Text style={[styles.topicArrow, { color: topic.accent }]}>›</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Redes sociais */}
                    {team.redes?.length > 0 && (
                        <View style={styles.socialSection}>
                            <View style={styles.divider}>
                                <View style={styles.dividerLine} />
                                <Text style={styles.dividerText}>REDES SOCIAIS</Text>
                                <View style={styles.dividerLine} />
                            </View>
                            <View style={styles.socialRow}>
                                {team.redes.map((rede, index) => {
                                    const config = socialConfig[index];
                                    if (!config) return null;
                                    return (
                                        <TouchableOpacity
                                            key={index}
                                            style={styles.socialButton}
                                            onPress={() => Linking.openURL(rede.link)}
                                            activeOpacity={0.8}
                                        >
                                            <View style={[styles.socialIconWrapper, { backgroundColor: config.bg }]}>
                                                <FontAwesome6 name={config.icon} size={24} color={config.color} />
                                            </View>
                                            <Text style={styles.socialName}>{config.label}</Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>
                        </View>
                    )}

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
    scroll: { flex: 1 },
    scrollContent: { flexGrow: 1 },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: { color: '#EF4444', fontSize: 16 },

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
    },
    shieldContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#F8F9FA',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 18,
        elevation: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 8,
        borderWidth: 3,
        borderColor: '#FFFFFF',
    },
    shield: {
        width: 92,
        height: 92,
    },
    teamName: {
        fontSize: 26,
        fontWeight: '800',
        color: '#111827',
        letterSpacing: 0.3,
        textAlign: 'center',
        marginBottom: 14,
    },
    foundedBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#F3F4F6',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    foundedLabel: {
        fontSize: 10,
        fontWeight: '700',
        color: '#9CA3AF',
        letterSpacing: 1.5,
    },
    foundedYear: {
        fontSize: 14,
        fontWeight: '800',
        color: '#111827',
    },

    // ── BODY
    body: {
        paddingTop: 24,
        paddingHorizontal: 16,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        gap: 10,
    },
    dividerLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#E5E7EB',
    },
    dividerText: {
        fontSize: 11,
        fontWeight: '700',
        color: '#9CA3AF',
        letterSpacing: 2,
    },

    // ── TOPIC CARDS
    topicsContainer: {
        gap: 12,
        marginBottom: 28,
    },
    topicCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        gap: 14,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 4,
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    topicIconBox: {
        width: 52,
        height: 52,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topicIcon: {
        fontSize: 26,
    },
    topicTexts: {
        flex: 1,
    },
    topicTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 2,
    },
    topicDescription: {
        fontSize: 13,
        color: '#9CA3AF',
    },
    topicArrowBox: {
        width: 32,
        height: 32,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    topicArrow: {
        fontSize: 22,
        fontWeight: '600',
        lineHeight: 26,
    },

    // ── SOCIAL
    socialSection: {
        marginBottom: 8,
    },
    socialRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    socialButton: {
        alignItems: 'center',
        gap: 8,
    },
    socialIconWrapper: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
    },
    socialName: {
        fontSize: 12,
        color: '#6B7280',
        fontWeight: '500',
    },
});

export default TeamDetailScreen;