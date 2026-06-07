import { ImageSourcePropType } from 'react-native';

export type ShieldKey =
    | 'america-mg'
    | 'athletic'
    | 'athletico'
    | 'atletico-go'
    | 'atletico-mg'
    | 'avai'
    | 'bahia'
    | 'botafogo'
    | 'botafogo-sp'
    | 'bragantino'
    | 'ceara'
    | 'chapecoense'
    | 'corinthians'
    | 'coritiba'
    | 'crb'
    | 'criciuma'
    | 'cruzeiro'
    | 'cuiaba'
    | 'flamengo'
    | 'fluminense'
    | 'fortaleza'
    | 'goias'
    | 'gremio'
    | 'internacional'
    | 'juventude'
    | 'londrina'
    | 'mirassol'
    | 'nautico'
    | 'novorizontino'
    | 'operario-pr'
    | 'palmeiras'
    | 'ponte-preta'
    | 'remo'
    | 'santos'
    | 'sao-bernardo'
    | 'sao-paulo'
    | 'sport'
    | 'vasco'
    | 'vila-nova'
    | 'vitoria';

const shields: Record<ShieldKey, ImageSourcePropType> = {
    'america-mg': require('../../../assets/shields/america-mg.webp'),
    athletic: require('../../../assets/shields/athletic.webp'),
    athletico: require('../../../assets/shields/athletico.webp'),
    'atletico-go': require('../../../assets/shields/atletico-go.webp'),
    'atletico-mg': require('../../../assets/shields/atletico-mg.webp'),
    avai: require('../../../assets/shields/avai.webp'),
    bahia: require('../../../assets/shields/bahia.webp'),
    botafogo: require('../../../assets/shields/botafogo.webp'),
    'botafogo-sp': require('../../../assets/shields/botafogo-sp.webp'),
    bragantino: require('../../../assets/shields/bragantino.webp'),
    ceara: require('../../../assets/shields/ceara.webp'),
    chapecoense: require('../../../assets/shields/chapecoense.webp'),
    corinthians: require('../../../assets/shields/corinthians.webp'),
    coritiba: require('../../../assets/shields/coritiba.webp'),
    crb: require('../../../assets/shields/crb.webp'),
    criciuma: require('../../../assets/shields/criciuma.webp'),
    cruzeiro: require('../../../assets/shields/cruzeiro.webp'),
    cuiaba: require('../../../assets/shields/cuiaba.webp'),
    flamengo: require('../../../assets/shields/flamengo.webp'),
    fluminense: require('../../../assets/shields/fluminense.webp'),
    fortaleza: require('../../../assets/shields/fortaleza.webp'),
    goias: require('../../../assets/shields/goias.webp'),
    gremio: require('../../../assets/shields/gremio.webp'),
    internacional: require('../../../assets/shields/internacional.webp'),
    juventude: require('../../../assets/shields/juventude.webp'),
    londrina: require('../../../assets/shields/londrina.webp'),
    mirassol: require('../../../assets/shields/mirassol.webp'),
    nautico: require('../../../assets/shields/nautico.webp'),
    novorizontino: require('../../../assets/shields/novorizontino.webp'),
    'operario-pr': require('../../../assets/shields/operario-pr.webp'),
    palmeiras: require('../../../assets/shields/palmeiras.webp'),
    'ponte-preta': require('../../../assets/shields/ponte-preta.webp'),
    remo: require('../../../assets/shields/remo.webp'),
    santos: require('../../../assets/shields/santos.webp'),
    'sao-bernardo': require('../../../assets/shields/sao-bernardo.webp'),
    'sao-paulo': require('../../../assets/shields/sao-paulo.webp'),
    sport: require('../../../assets/shields/sport.webp'),
    vasco: require('../../../assets/shields/vasco.webp'),
    'vila-nova': require('../../../assets/shields/vila-nova.webp'),
    vitoria: require('../../../assets/shields/vitoria.webp'),
};

export function getShieldSource(key: string): ImageSourcePropType {
    return shields[key as ShieldKey] ?? shields.corinthians;
}