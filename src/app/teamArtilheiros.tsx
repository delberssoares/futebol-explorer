import { MaterialIcons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
    ActivityIndicator,
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

type Artilheiro = {
    nome: string;
    gols: number;
};

type Team = {
    name: string;
    shield: string;
    artilheiros: Artilheiro[];
};

const MEDAL: Record<number, string> = { 0: '🥇', 1: '🥈', 2: '🥉' };

const TeamArtilheiros: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [team, setTeam] = useState<Team | null>(null);
    const [hasPermission, setHasPermission] = useState(false);

    // ✅ Ref no View interno, dentro do ScrollView
    const contentRef = useRef<View>(null);
    const params = useLocalSearchParams();

    useEffect(() => {
        (async () => {
            const { status } = await MediaLibrary.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    useEffect(() => {
        const teamString = params.team;
        if (teamString) {
            const parsed = Array.isArray(teamString) ? JSON.parse(teamString[0]) : JSON.parse(teamString);
            setTeam(parsed);
        }
        setLoading(false);
    }, [params.team]);

    const handleCaptureAndSave = async () => {
        if (!hasPermission) {
            Alert.alert('Permissão necessária', 'É necessário permitir o acesso à galeria para salvar a imagem.');
            return;
        }
        try {
            const uri = await captureRef(contentRef, { format: 'png', quality: 1, result: 'tmpfile' });
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

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#16A34A" />
            </View>
        );
    }

    if (!team) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>Erro ao carregar dados do time.</Text>
            </View>
        );
    }

    const artilheiros = team.artilheiros ?? [];
    const maxGols = artilheiros[0]?.gols ?? 1;

    return (
        <View style={styles.root}>
            <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />

            {/* Botão câmera fora do conteúdo capturado */}
            <TouchableOpacity style={styles.captureBtn} onPress={handleCaptureAndSave}>
                <MaterialIcons name="camera-alt" size={22} color="#FFF" />
            </TouchableOpacity>

            {/* ✅ ScrollView faz o scroll da tela */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* ✅ View com ref e collapsable={false} envolve TODO o conteúdo */}
                <View ref={contentRef} collapsable={false}>

                    {/* ── HERO ── */}
                    <View style={styles.hero}>
                        <Image
                            source={getShieldSource(team.shield)}
                            style={styles.shield}
                            resizeMode="contain"
                        />
                        <Text style={styles.teamName}>{team.name}</Text>
                        <View style={styles.subtitleBadge}>
                            <Text style={styles.subtitleText}>⚽ {artilheiros.length} maiores goleadores</Text>
                        </View>
                    </View>

                    {/* ── LISTA renderizada diretamente (sem FlatList) ── */}
                    <View style={styles.listContent}>
                        {artilheiros.length === 0 ? (
                            <View style={styles.centered}>
                                <Text style={styles.emptyText}>Em breve</Text>
                            </View>
                        ) : (
                            artilheiros.map((item, index) => {
                                const isTop3 = index < 3;
                                const barWidth = `${Math.round((item.gols / maxGols) * 100)}%`;
                                return (
                                    <View key={index} style={[styles.card, isTop3 && styles.cardTop3]}>
                                        <View style={styles.rankBox}>
                                            {isTop3
                                                ? <Text style={styles.medal}>{MEDAL[index]}</Text>
                                                : <Text style={styles.rankNum}>{index + 1}</Text>
                                            }
                                        </View>
                                        <View style={styles.info}>
                                            <View style={styles.infoRow}>
                                                <Text style={styles.playerName} numberOfLines={1}>{item.nome}</Text>
                                                <View style={styles.golsBadge}>
                                                    <Text style={styles.golsText}>⚽ {item.gols}</Text>
                                                </View>
                                            </View>
                                            <View style={styles.barTrack}>
                                                <View style={[styles.barFill, { width: barWidth as any }]} />
                                            </View>
                                        </View>
                                    </View>
                                );
                            })
                        )}
                    </View>

                    <View style={{ height: 32 }} />

                </View>{/* fim do contentRef */}
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
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    errorText: {
        color: '#EF4444',
        fontSize: 16,
    },
    emptyText: {
        fontSize: 16,
        color: '#9CA3AF',
        marginTop: 32,
    },
    hero: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        paddingTop: 36,
        paddingBottom: 20,
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
    subtitleBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    subtitleText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#374151',
    },
    listContent: {
        paddingBottom: 0,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: 14,
        marginBottom: 10,
        gap: 12,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 3,
        borderWidth: 1,
        borderColor: '#F3F4F6',
        marginHorizontal: 16,
    },
    cardTop3: {
        borderColor: '#D1FAE5',
        backgroundColor: '#F0FDF4',
    },
    rankBox: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    medal: {
        fontSize: 20,
    },
    rankNum: {
        fontSize: 14,
        fontWeight: '700',
        color: '#6B7280',
    },
    info: {
        flex: 1,
        gap: 8,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 8,
    },
    playerName: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
    },
    golsBadge: {
        backgroundColor: '#DCFCE7',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    golsText: {
        fontSize: 13,
        fontWeight: '700',
        color: '#16A34A',
    },
    barTrack: {
        height: 5,
        backgroundColor: '#E5E7EB',
        borderRadius: 4,
        overflow: 'hidden',
    },
    barFill: {
        height: 5,
        backgroundColor: '#16A34A',
        borderRadius: 4,
    },
});

export default TeamArtilheiros;