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
    'america-mg': require('../../../assets/shields/america-mg.png'),
    athletic: require('../../../assets/shields/athletic.png'),
    athletico: require('../../../assets/shields/athletico.png'),
    'atletico-go': require('../../../assets/shields/atletico-go.png'),
    'atletico-mg': require('../../../assets/shields/atletico-mg.png'),
    avai: require('../../../assets/shields/avai.png'),
    bahia: require('../../../assets/shields/bahia.png'),
    botafogo: require('../../../assets/shields/botafogo.png'),
    'botafogo-sp': require('../../../assets/shields/botafogo-sp.png'),
    bragantino: require('../../../assets/shields/bragantino.png'),
    ceara: require('../../../assets/shields/ceara.png'),
    chapecoense: require('../../../assets/shields/chapecoense.png'),
    corinthians: require('../../../assets/shields/corinthians.png'),
    coritiba: require('../../../assets/shields/coritiba.png'),
    crb: require('../../../assets/shields/crb.png'),
    criciuma: require('../../../assets/shields/criciuma.png'),
    cruzeiro: require('../../../assets/shields/cruzeiro.png'),
    cuiaba: require('../../../assets/shields/cuiaba.png'),
    flamengo: require('../../../assets/shields/flamengo.png'),
    fluminense: require('../../../assets/shields/fluminense.png'),
    fortaleza: require('../../../assets/shields/fortaleza.png'),
    goias: require('../../../assets/shields/goias.png'),
    gremio: require('../../../assets/shields/gremio.png'),
    internacional: require('../../../assets/shields/internacional.png'),
    juventude: require('../../../assets/shields/juventude.png'),
    londrina: require('../../../assets/shields/londrina.png'),
    mirassol: require('../../../assets/shields/mirassol.png'),
    nautico: require('../../../assets/shields/nautico.png'),
    novorizontino: require('../../../assets/shields/novorizontino.png'),
    'operario-pr': require('../../../assets/shields/operario-pr.png'),
    palmeiras: require('../../../assets/shields/palmeiras.png'),
    'ponte-preta': require('../../../assets/shields/ponte-preta.png'),
    remo: require('../../../assets/shields/remo.png'),
    santos: require('../../../assets/shields/santos.png'),
    'sao-bernardo': require('../../../assets/shields/sao-bernardo.png'),
    'sao-paulo': require('../../../assets/shields/sao-paulo.png'),
    sport: require('../../../assets/shields/sport.png'),
    vasco: require('../../../assets/shields/vasco.png'),
    'vila-nova': require('../../../assets/shields/vila-nova.png'),
    vitoria: require('../../../assets/shields/vitoria.png'),
};

export function getShieldSource(key: string): ImageSourcePropType {
    return shields[key as ShieldKey] ?? shields.corinthians;
}