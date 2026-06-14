import { router, useFocusEffect } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
    Animated,
    BackHandler,
    Easing,
    FlatList,
    Image,
    PanResponder,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getShieldSource } from './times/shields';
import teams from './times/times';

type Team = { name: string; shield: string };
type Serie = 'A' | 'B';

const SERIE_A_NAMES = [
    'Athletico', 'Atlético-MG', 'Bahia', 'Bragantino', 'Botafogo',
    'Chapecoense', 'Corinthians', 'Coritiba', 'Cruzeiro', 'Flamengo',
    'Fluminense', 'Grêmio', 'Internacional', 'Mirassol', 'Palmeiras',
    'Remo', 'Santos', 'São Paulo', 'Vasco', 'Vitória',
];

const SERIE_B_NAMES = [
    'América-MG', 'Athletic', 'Atlético-GO', 'Avaí', 'Botafogo-SP',
    'Ceará', 'CRB', 'Criciúma', 'Cuiabá', 'Fortaleza',
    'Goiás', 'Juventude', 'Londrina', 'Náutico', 'Novorizontino',
    'Operário-PR', 'Ponte Preta', 'São Bernardo', 'Sport', 'Vila Nova',
];

const SWIPE_THRESHOLD = 50;
const VERTICAL_THRESHOLD = 25;

teams.sort((a, b) => a.name.localeCompare(b.name));

const SelectTeamScreen: React.FC = () => {
    const [selectedTeams, setSelectedTeams] = useState<Team[]>([]);
    const [activeSerie, setActiveSerie] = useState<Serie>('A');
    const insets = useSafeAreaInsets();

    const tabWidthRef = useRef(0);
    const [tabBarWidth, setTabBarWidth] = useState(0);

    useFocusEffect(
        React.useCallback(() => {
            const sub = BackHandler.addEventListener('hardwareBackPress', () => true);
            return () => sub.remove();
        }, [])
    );

    const slideAnim = useRef(new Animated.Value(0)).current;

    const activeSerieRef = useRef<Serie>('A');
    const serieAtGestureStart = useRef<Serie>('A');

    // ─── Animação principal ───────────────────────────────────────────────────
    const animateTo = (toSerie: Serie) => {
        activeSerieRef.current = toSerie;
        setActiveSerie(toSerie);
        Animated.timing(slideAnim, {
            toValue: toSerie === 'A' ? 0 : 1,
            duration: 260,
            easing: Easing.out(Easing.cubic),
            useNativeDriver: true,
        }).start();
    };

    const snapTo = (toSerie: Serie) => {
        activeSerieRef.current = toSerie;
        setActiveSerie(toSerie);
        Animated.timing(slideAnim, {
            toValue: toSerie === 'A' ? 0 : 1,
            duration: 200,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true,
        }).start();
    };

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (_, { dx, dy }) =>
                Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8,

            onPanResponderGrant: () => {
                serieAtGestureStart.current = activeSerieRef.current;
                slideAnim.stopAnimation();
            },

            onPanResponderMove: (_, { dx, dy }) => {
                if (Math.abs(dy) > VERTICAL_THRESHOLD) return;
                const base = serieAtGestureStart.current === 'A' ? 0 : 1;
                const next = Math.max(0, Math.min(1, base + -dx / 160));
                slideAnim.setValue(next);
            },

            onPanResponderRelease: (_, { dx, dy, vx }) => {
                if (Math.abs(dy) > VERTICAL_THRESHOLD) {
                    snapTo(serieAtGestureStart.current);
                    return;
                }
                const isFlick = Math.abs(vx) > 0.4;
                const toB = serieAtGestureStart.current === 'A' && (dx < -SWIPE_THRESHOLD || (isFlick && vx < 0));
                const toA = serieAtGestureStart.current === 'B' && (dx > SWIPE_THRESHOLD  || (isFlick && vx > 0));

                if (toB) snapTo('B');
                else if (toA) snapTo('A');
                else snapTo(serieAtGestureStart.current);
            },

            onPanResponderTerminate: () => snapTo(serieAtGestureStart.current),
        })
    ).current;

    // ─── Dados ────────────────────────────────────────────────────────────────
    const filteredTeams = teams.filter((t) =>
        activeSerie === 'A' ? SERIE_A_NAMES.includes(t.name) : SERIE_B_NAMES.includes(t.name)
    );
    const pairedTeams: Team[][] = [];
    for (let i = 0; i < filteredTeams.length; i += 2) {
        pairedTeams.push(filteredTeams.slice(i, i + 2));
    }

    const handleToggleSelect = (team: Team) => {
        setSelectedTeams((prev) => {
            const already = prev.some((t) => t.name === team.name);
            if (already) return prev.filter((t) => t.name !== team.name);
            if (prev.length === 2) return [prev[0], team];
            return [...prev, team];
        });
    };

    // ─── Indicador: translateX em pixels absolutos ────────────────────────────
    // tabBarWidth é a largura total da tabBar; cada aba ocupa metade exata.
    // O indicador também tem width = 50% = tabBarWidth / 2.
    // Para ir da aba A (x=0) para a aba B (x = tabBarWidth/2) basta:
    //   translateX = slideAnim * (tabBarWidth / 2)
    const indicatorTranslateX = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, tabBarWidth / 2],
        extrapolate: 'clamp',
    });

    // Cor do texto das abas sincronizada com o indicador
    const colorA = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#1B5E20', '#9E9E9E'],
        extrapolate: 'clamp',
    });
    const colorB = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['#9E9E9E', '#1B5E20'],
        extrapolate: 'clamp',
    });

    // ─── Render ───────────────────────────────────────────────────────────────
    const renderPair = ({ item }: { item: Team[] }) => (
        <View style={styles.row}>
            {item.map((team) => {
                const isSelected = selectedTeams.some((t) => t.name === team.name);
                return (
                    <TouchableOpacity
                        key={team.name}
                        onPress={() =>
                            router.push({ pathname: '/teamDetail', params: { team: JSON.stringify(team) } })
                        }
                        style={[styles.card, isSelected && styles.cardSelected]}
                        activeOpacity={0.7}
                    >
                        <TouchableOpacity
                            style={[styles.checkbox, isSelected && styles.checkboxSelected]}
                            onPress={() => handleToggleSelect(team)}
                            hitSlop={{ top: 6, right: 6, bottom: 6, left: 6 }}
                        >
                            {isSelected && <Text style={styles.checkText}>✓</Text>}
                        </TouchableOpacity>
                        <View style={[styles.shieldWrapper, isSelected && styles.shieldWrapperSelected]}>
                            <Image source={getShieldSource(team.shield)} style={styles.shield} resizeMode="contain" />
                        </View>
                        <Text style={[styles.teamName, isSelected && styles.teamNameSelected]} numberOfLines={2}>
                            {team.name}
                        </Text>
                    </TouchableOpacity>
                );
            })}
            {item.length === 1 && <View style={styles.cardEmpty} />}
        </View>
    );

    return (
        <View style={styles.container}>

            {/* ── Tab bar ────────────────────────────────────────────────────── */}
            <View
                style={styles.tabBar}
                onLayout={(e) => setTabBarWidth(e.nativeEvent.layout.width)}
            >
                {(['A', 'B'] as Serie[]).map((serie) => (
                    <TouchableOpacity
                        key={serie}
                        style={styles.tab}
                        onPress={() => animateTo(serie)}
                        activeOpacity={0.75}
                    >
                        <Animated.Text style={[styles.tabText, { color: serie === 'A' ? colorA : colorB }]}>
                            Série {serie}
                        </Animated.Text>
                    </TouchableOpacity>
                ))}

                {/*
                  * Indicador verde.
                  * width: '50%' garante que ocupa exatamente metade da tabBar.
                  * translateX move de 0 (aba A) até tabBarWidth/2 (aba B).
                  * Como width já é 50% e left:0, as contas fecham perfeitamente.
                */}
                <Animated.View
                    style={[
                        styles.tabIndicator,
                        { transform: [{ translateX: indicatorTranslateX }] },
                    ]}
                />
            </View>

            {/* ── Dica ───────────────────────────────────────────────────────── */}
            <View style={styles.hintContainer}>
                <Text style={styles.hint}>
                    ⚽ Toque para detalhes · Marque para comparar (máx. 2) · Deslize para trocar série
                </Text>
            </View>

            {/* ── Lista com PanResponder ─────────────────────────────────────── */}
            <View style={styles.listWrapper} {...panResponder.panHandlers}>
                <FlatList
                    data={pairedTeams}
                    renderItem={renderPair}
                    keyExtractor={(_, i) => i.toString()}
                    contentContainerStyle={[
                        styles.listContent,
                        selectedTeams.length === 2 && { paddingBottom: 140 },
                    ]}
                    showsVerticalScrollIndicator={false}
                />
            </View>

            {/* ── Barra de comparação ────────────────────────────────────────── */}
            {selectedTeams.length === 2 && (
                <View style={[styles.compareBar, { paddingBottom: Math.max(insets.bottom, 12) }]}>
                    <View style={styles.comparePreview}>
                        {selectedTeams.map((team, i) => (
                            <View key={i} style={styles.chip}>
                                <Image source={getShieldSource(team.shield)} style={styles.chipShield} resizeMode="contain" />
                                <Text style={styles.chipName} numberOfLines={1}>{team.name}</Text>
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity
                        style={styles.compareButton}
                        onPress={() =>
                            router.push({ pathname: '/compareTeams', params: { teams: JSON.stringify(selectedTeams) } })
                        }
                        activeOpacity={0.85}
                    >
                        <Text style={styles.compareButtonText}>⚡ Comparar</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#F2F4F7' },

    // ── Tab bar ───────────────────────────────────────────────────────────────
    tabBar: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingTop: 6,
        // SEM paddingHorizontal — as abas encostam nas bordas
        // O indicador usa position:absolute e depende disso
        position: 'relative',
    },
    tab: {
        flex: 1,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabText: {
        fontSize: 15,
        fontWeight: '700',
        letterSpacing: 0.2,
    },
    tabIndicator: {
        position: 'absolute',
        bottom: 0,
        left: 0,          // âncora no canto esquerdo da tabBar (sem padding)
        width: '50%',     // metade da tabBar = largura de uma aba
        height: 3,
        backgroundColor: '#1B5E20',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
    },

    // ── Dica ──────────────────────────────────────────────────────────────────
    hintContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#EFEFEF',
    },
    hint: { fontSize: 12, color: '#888', textAlign: 'center' },

    // ── Lista ─────────────────────────────────────────────────────────────────
    listWrapper: { flex: 1 },
    listContent: {
        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 20,
    },
    row: { flexDirection: 'row', gap: 10, marginBottom: 10 },
    card: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: 14,
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: 'transparent',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.06,
        shadowRadius: 3,
    },
    cardSelected: { backgroundColor: '#EBF5EB', borderColor: '#2E7D32' },
    cardEmpty: { flex: 1 },
    shieldWrapper: {
        width: 64, height: 64, borderRadius: 32,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center', alignItems: 'center',
        marginBottom: 10,
    },
    shieldWrapperSelected: { backgroundColor: '#C8E6C9' },
    shield: { width: 50, height: 50 },
    teamName: { fontSize: 14, fontWeight: '600', color: '#1A1A1A', textAlign: 'center' },
    teamNameSelected: { color: '#1B5E20', fontWeight: '700' },
    checkbox: {
        position: 'absolute', top: 8, right: 8,
        width: 22, height: 22, borderRadius: 11,
        borderWidth: 2, borderColor: '#BDBDBD',
        backgroundColor: '#FFF',
        justifyContent: 'center', alignItems: 'center',
    },
    checkboxSelected: { backgroundColor: '#2E7D32', borderColor: '#2E7D32' },
    checkText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },

    // ── Comparar ──────────────────────────────────────────────────────────────
    compareBar: {
        position: 'absolute', bottom: 0, left: 0, right: 0,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16, paddingTop: 12,
        borderTopWidth: 1, borderTopColor: '#E0E0E0',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1, shadowRadius: 6,
    },
    comparePreview: { flexDirection: 'row', gap: 8, marginBottom: 10 },
    chip: {
        flex: 1, flexDirection: 'row', alignItems: 'center',
        backgroundColor: '#F1F8E9', borderRadius: 8,
        paddingVertical: 6, paddingHorizontal: 10,
        gap: 6, borderWidth: 1, borderColor: '#AED581',
    },
    chipShield: { width: 24, height: 24 },
    chipName: { flex: 1, fontSize: 13, fontWeight: '600', color: '#33691E' },
    compareButton: {
        backgroundColor: '#2E7D32', borderRadius: 12,
        paddingVertical: 14, alignItems: 'center',
    },
    compareButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700', letterSpacing: 0.5 },
});

export default SelectTeamScreen;