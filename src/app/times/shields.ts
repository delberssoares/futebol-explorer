import { ImageSourcePropType } from 'react-native';

export type ShieldKey =
    | 'athletico'
    | 'atletico-go'
    | 'atletico-mg'
    | 'bahia'
    | 'botafogo'
    | 'bragantino'
    | 'corinthians'
    | 'criciuma'
    | 'cruzeiro'
    | 'cuiaba'
    | 'flamengo'
    | 'fluminense'
    | 'fortaleza'
    | 'gremio'
    | 'internacional'
    | 'juventude'
    | 'palmeiras'
    | 'sao-paulo'
    | 'vasco'
    | 'vitoria';

const shields: Record<ShieldKey, ImageSourcePropType> = {
    athletico: require('../../../assets/shields/athletico.png'),
    'atletico-go': require('../../../assets/shields/atletico-go.png'),
    'atletico-mg': require('../../../assets/shields/atletico-mg.png'),
    bahia: require('../../../assets/shields/bahia.png'),
    botafogo: require('../../../assets/shields/botafogo.png'),
    bragantino: require('../../../assets/shields/bragantino.png'),
    corinthians: require('../../../assets/shields/corinthians.png'),
    criciuma: require('../../../assets/shields/criciuma.png'),
    cruzeiro: require('../../../assets/shields/cruzeiro.png'),
    cuiaba: require('../../../assets/shields/cuiaba.png'),
    flamengo: require('../../../assets/shields/flamengo.png'),
    fluminense: require('../../../assets/shields/fluminense.png'),
    fortaleza: require('../../../assets/shields/fortaleza.png'),
    gremio: require('../../../assets/shields/gremio.png'),
    internacional: require('../../../assets/shields/internacional.png'),
    juventude: require('../../../assets/shields/juventude.png'),
    palmeiras: require('../../../assets/shields/palmeiras.png'),
    'sao-paulo': require('../../../assets/shields/sao-paulo.png'),
    vasco: require('../../../assets/shields/vasco.png'),
    vitoria: require('../../../assets/shields/vitoria.png'),
};

export function getShieldSource(key: string): ImageSourcePropType {
    return shields[key as ShieldKey] ?? shields.corinthians;
}
