import atletico from '../../../assets/images/shields/atletico.png';
import bahia from '../../../assets/images/shields/bahia.png';
import botafogo from '../../../assets/images/shields/botafogo.png';
import bragantino from '../../../assets/images/shields/bragantino.png';
// import ceara from '../../../assets/images/shields/ceara.png';
import corinthians from '../../../assets/images/shields/corinthians.png';
import cruzeiro from '../../../assets/images/shields/cruzeiro.png';
import flamengo from '../../../assets/images/shields/flamengo.png';
import fluminense from '../../../assets/images/shields/fluminense.png';
// import fortaleza from '../../../assets/images/shields/fortaleza.png';
import gremio from '../../../assets/images/shields/gremio.png';
import internacional from '../../../assets/images/shields/internacional.png';
// import juventude from '../../../assets/images/shields/juventude.png';
import mirassol from '../../../assets/images/shields/mirassol.png';
import palmeiras from '../../../assets/images/shields/palmeiras.png';
import santos from '../../../assets/images/shields/santos.png';
import saopaulo from '../../../assets/images/shields/saopaulo.png';
// import sport from '../../../assets/images/shields/sport.png';
import vasco from '../../../assets/images/shields/vasco.png';
import vitoria from '../../../assets/images/shields/vitoria.png';


import athletico from '../../../assets/images/shields/athletico.png';
import chapecoense from '../../../assets/images/shields/chapecoense.png';
import coritiba from '../../../assets/images/shields/coritiba.png';
import remo from '../../../assets/images/shields/remo.png';



const teams = [

  {
    name: 'Athletico', shield: athletico, fundacao: '1924', titles: [
      {
        continentais: [
          { name: 'Copa Sul-Americana', count: 2 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 1 },
          { name: 'Copa do Brasil', count: 1 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 28 },
        ]
      },
    ], artilheiros: [
      { nome: "Sicupira", gols: 158 },
      { nome: "Jackson", gols: 150 },
      { nome: "Marreco", gols: 125 },
      { nome: "Kleber", gols: 124 },
      { nome: "Cireno", gols: 117 },
      { nome: "Walter", gols: 108 },
      { nome: "Paulo Rink", gols: 84 },
      { nome: "Alex Mineiro", gols: 78 },
      { nome: "Guará", gols: 76 },
      { nome: "Pablo", gols: 71 }
    ],
    updateArtilheiros: '25/02/2026',
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/clubathleticoparanaense' },
      { rede: 'Instagram', link: 'https://www.instagram.com/athleticoparanaense' },
      { rede: 'Twitter', link: 'https://x.com/AthleticoPR' }
    ],
    cores: [
      {
        main: '#C8102E',
        secondary: '#000000',
        third: '#1A1A1A',
        text: '#FFFFFF'
      }
    ]
  },
  {
    name: 'Atlético-MG', shield: atletico, fundacao: '1908', titles: [
      {
        continentais: [
          { name: 'Copa Libertadores da América', count: 1 },
          { name: 'Recopa Sul-Americana', count: 1 },
          { name: 'Copa CONMEBOL', count: 2 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 3 },
          { name: 'Copa do Brasil', count: 2 },
          { name: 'Supercopa do Brasil', count: 1 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 50 },
        ]
      },
    ], artilheiros: [
      { nome: "Reinaldo", gols: 255 },
      { nome: "Dadá Maravilha", gols: 211 },
      { nome: "Mário de Castro", gols: 195 },
      { nome: "Guará", gols: 168 },
      { nome: "Lucas Miranda", gols: 152 },
      { nome: "Said", gols: 142 },
      { nome: "Guilherme", gols: 139 },
      { nome: "Ubaldo", gols: 135 },
      { nome: "Marques", gols: 133 },
      { nome: "Nívio", gols: 126 }
    ],
    updateArtilheiros: '12/05/2025',
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/atletico' },
      { rede: 'Instagram', link: 'https://www.instagram.com/atletico' },
      { rede: 'Twitter', link: 'https://x.com/Atletico' }
    ],
    cores: [
      { main: '#FFFFFF', secondary: '#000000' }
    ]
  },
  {
    name: 'Bahia', shield: bahia, fundacao: '1931', titles: [
      {
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 2 },
        ],
        regionais: [
          { name: 'Copa do Nordeste', count: 4 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 51 },
        ]
      },
    ], artilheiros: [
      { nome: "Carlito", gols: 233 },
      { nome: "Douglas", gols: 184 },
      { nome: "Hamilton", gols: 159 },
      { nome: "Uéslei", gols: 150 },
      { nome: "Osni", gols: 133 },
      { nome: "Vareta", gols: 131 },
      { nome: "Nonato", gols: 126 },
      { nome: "Marcelo Ramos", gols: 121 },
      { nome: "Alencar", gols: 119 },
      { nome: "Isaltino", gols: 116 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/ecbahia' },
      { rede: 'Instagram', link: 'https://www.instagram.com/ecbahia/' },
      { rede: 'Twitter', link: 'https://x.com/ecbahia' }
    ], updateArtilheiros: '12/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#0033AA', third: '#FF0000', text: '#0033AA' }
    ]
  },
  {
    name: 'Botafogo', shield: botafogo, fundacao: '1894', titles: [
      {
        continentais: [
          { name: 'Copa Libertadores da América', count: 1 },
          { name: 'Copa CONMEBOL', count: 1 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 3 },
        ],
        interestaduais: [
          { name: 'Torneio Rio-São Paulo', count: 4 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 21 },
        ]
      },
    ], artilheiros: [
      { "nome": "Quarentinha", "gols": 313 },
      { "nome": "Carvalho Leite", "gols": 261 },
      { "nome": "Garrincha", "gols": 245 },
      { "nome": "Heleno de Freitas", "gols": 209 },
      { "nome": "Nilo", "gols": 190 },
      { "nome": "Jairzinho", "gols": 189 },
      { "nome": "Octávio Moraes", "gols": 171 },
      { "nome": "Túlio Maravilha", "gols": 167 },
      { "nome": "Roberto Miranda", "gols": 154 },
      { "nome": "Dino da Costa", "gols": 144 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/Botafogo' },
      { rede: 'Instagram', link: 'https://www.instagram.com/botafogo/' },
      { rede: 'Twitter', link: 'https://x.com/Botafogo' }
    ],
    updateArtilheiros: '12/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#000000' }
    ]
  },
  {
    name: 'Bragantino', shield: bragantino, fundacao: '1928',
    titles: [
      {
        estaduais: [
          { name: 'Campeonato Estadual', count: 1 },
        ]
      },
    ],
    artilheiros: [
      { nome: 'Lincom', gols: 59 },
      { nome: 'Ytalo', gols: 51 },
      { nome: 'Léo Jaime', gols: 47 },
      { nome: 'Artur', gols: 38 },
      { nome: 'Eduardo Sasha', gols: 33 },
      { nome: 'Helinho', gols: 33 },
      { nome: 'Claudinho', gols: 32 },
      { nome: 'Alerrandro', gols: 26 },
      { nome: 'Thiago Borbas', gols: 24 },
      { nome: 'Matheus Peixoto', gols: 22 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/RedBullBragantino' },
      { rede: 'Instagram', link: 'https://www.instagram.com/redbullbragantino' },
      { rede: 'Twitter', link: 'https://x.com/RedBullBraga' }
    ],
    updateArtilheiros: '12/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#000000' }
    ]

  },
  // {
  //   name: 'Ceará',
  //   shield: ceara,
  //   fundacao: '1914',
  //   titles: [
  //     {
  //       'inter-regionais': [
  //         { name: 'Torneio Norte-Nordeste', count: 1 }
  //       ],
  //       regionais: [
  //         { name: 'Copa do Nordeste', count: 3 },
  //       ],
  //       estaduais: [
  //         { name: 'Campeonato Estadual', count: 47 }
  //       ]
  //     }
  //   ],
  //   artilheiros: [
  //     { nome: 'Gildo', gols: 261 },
  //     { nome: 'Mitotônio', gols: 151 },
  //     { nome: 'Sérgio Alves', gols: 141 },
  //     { nome: 'Pipiu', gols: 115 },
  //     { nome: 'Antonino', gols: 110 },
  //     { nome: 'Magno Alves', gols: 103 },
  //     { nome: 'Zé Eduardo', gols: 99 },
  //     { nome: 'Da Costa', gols: 94 },
  //     { nome: 'Ivanir', gols: 90 },
  //     { nome: 'Mota', gols: 89 }
  //   ],
  //   redes: [
  //     { rede: 'Facebook', link: 'https://www.facebook.com/cearasc' },
  //     { rede: 'Instagram', link: 'https://www.instagram.com/cearasc/' },
  //     { rede: 'Twitter', link: 'https://x.com/CearaSC' }
  //   ],
  //   updateArtilheiros: '12/05/2025',
  //   cores: [
  //     { main: '#FFFFFF', secondary: '#000000' }
  //   ]
  // },
  {
    name: 'Chapeconse', shield: chapecoense, fundacao: '1973', titles: [
      {
        continentais: [
          { name: 'Copa Sul-Americana', count: 1 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 7 },
        ]
      },
    ], artilheiros: [
      { nome: "Bruno Rangel", gols: 77 },
      { nome: "Perotti", gols: 45 },
      { nome: "Wellington Paulista", gols: 31 },
      { nome: "Leandro Pereira", gols: 22 },
      { nome: "Anselmo Ramon", gols: 21 },
      { nome: "Túlio de Melo", gols: 20 },
      { nome: "Marcinho", gols: 20 },
      { nome: "Everaldo", gols: 19 },
      { nome: "Mário Sérgio", gols: 17 },
      { nome: "Carvalheira", gols: 17 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/AChapeF' },
      { rede: 'Instagram', link: 'https://www.instagram.com/chapecoensereal/' },
      { rede: 'Twitter', link: 'https://x.com/ChapecoenseReal' }
    ],
    updateArtilheiros: '25/02/2026',
    cores: [
      { main: '#0f6a07', secondary: '#FFFFFF' }
    ]

  },
  {
    name: 'Corinthians', shield: corinthians, fundacao: '1910', titles: [
      {
        mundiais: [
          { name: 'Copa do Mundo de Clubes da FIFA', count: 2 },
        ],
        continentais: [
          { name: 'Copa Libertadores da América', count: 1 },
          { name: 'Recopa Sul-Americana', count: 1 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 7 },
          { name: 'Copa do Brasil', count: 4 },
          { name: 'Supercopa do Brasil', count: 2 },
        ],
        interestaduais: [
          { name: 'Torneio Rio-São Paulo', count: 5 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 31 },
        ]
      },
    ], artilheiros: [
      { nome: "Cláudio Christóvam", gols: 306 },
      { nome: "Baltazar", gols: 270 },
      { nome: "Teleco", gols: 257 },
      { nome: "Neco", gols: 242 },
      { nome: "Marcelinho Carioca", gols: 206 },
      { nome: "Servílio", gols: 200 },
      { nome: "Luizinho", gols: 174 },
      { nome: "Sócrates", gols: 172 },
      { nome: "Flávio", gols: 170 },
      { nome: "Paulo", gols: 147 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/corinthians' },
      { rede: 'Instagram', link: 'https://www.instagram.com/corinthians/' },
      { rede: 'Twitter', link: 'https://x.com/Corinthians' }
    ],
    updateArtilheiros: '12/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#000000' }
    ]


  },
  {
    name: 'Coritiba', shield: coritiba, fundacao: '1909', titles: [
      {
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 1 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 39 },
        ]
      },
    ], artilheiros: [
      { nome: "Duílio", gols: 206 },
      { nome: "Neno", gols: 134 },
      { nome: "Ivo", gols: 129 },
      { nome: "Miltinho", gols: 96 },
      { nome: "Baby", gols: 96 },
      { nome: "Stacco", gols: 89 },
      { nome: "Zé Roberto", gols: 72 },
      { nome: "Keirrison", gols: 72 },
      { nome: "Alex", gols: 69 },
      { nome: "Chicão", gols: 65 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/coritibaoficial' },
      { rede: 'Instagram', link: 'https://www.instagram.com/coritiba/' },
      { rede: 'Twitter', link: 'https://x.com/Coritiba' }
    ],
    updateArtilheiros: '25/02/2026',
    cores: [
      {
        main: '#006437',
        secondary: '#FFFFFF',
        third: '#0B8A4A',
        text: '#FFFFFF'
      }
    ]
  },
  {
    name: 'Cruzeiro', shield: cruzeiro, fundacao: '1921', titles: [
      {
        continentais: [
          { name: 'Copa Libertadores da América', count: 2 },
          { name: 'Recopa Sul-Americana', count: 1 },
          { name: 'Supercopa Libertadores', count: 2 },
          { name: 'Copa Master da Supercopa', count: 1 },
          { name: 'Copa Ouro', count: 1 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 4 },
          { name: 'Copa do Brasil', count: 6 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 38 },
        ]
      },
    ], artilheiros: [
      { nome: "Tostão", gols: 242 },
      { nome: "Dirceu Lopes", gols: 223 },
      { nome: "Niginho", gols: 208 },
      { nome: "Bengala", gols: 172 },
      { nome: "Marcelo Ramos", gols: 162 },
      { nome: "Ninão", gols: 158 },
      { nome: "Palhinha", gols: 145 },
      { nome: "Alcides", gols: 144 },
      { nome: "Joãozinho", gols: 118 },
      { nome: "Raimundinho", gols: 110 }],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/cruzeirooficial/' },
      { rede: 'Instagram', link: 'https://www.instagram.com/cruzeiro/' },
      { rede: 'Twitter', link: 'https://x.com/Cruzeiro' }
    ], updateArtilheiros: '12/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#0033A0' }
    ]
  },
  {
    name: 'Flamengo', shield: flamengo, fundacao: '1895', titles: [
      {
        mundiais: [
          { name: 'Copa Intercontinental', count: 1 },
        ],
        continentais: [
          { name: 'Copa Libertadores da América', count: 4 },
          { name: 'Copa Mercosul', count: 1 },
          { name: 'Recopa Sul-Americana', count: 1 },
          { name: 'Copa de Ouro Nicolás Leoz', count: 1 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 8 },
          { name: 'Copa do Brasil', count: 5 },
          { name: 'Supercopa do Brasil', count: 3 },
          { name: 'Copa dos Campeões', count: 1 },
        ],
        interestaduais: [
          { name: 'Torneio Rio–São Paulo', count: 1 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 39 },
        ]
      },
    ], artilheiros: [{ "nome": "Zico", "gols": 508 }, { "nome": "Dida", "gols": 254 }, { "nome": "Henrique Frade", "gols": 214 }, { "nome": "Pirilo", "gols": 209 }, { "nome": "Romário", "gols": 204 }, { "nome": "Gabigol", "gols": 161 }, { "nome": "Jarbas", "gols": 152 }, { "nome": "Bebeto", "gols": 150 }, { "nome": "Leônidas da Silva", "gols": 148 }, { "nome": "Índio", "gols": 144 }],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/FlamengoOficial' },
      { rede: 'Instagram', link: 'https://www.instagram.com/flamengo/' },
      { rede: 'Twitter', link: 'https://x.com/Flamengo' }
    ], updateArtilheiros: '12/05/2025',
    cores: [
      { main: '#000000', secondary: '#C8102E' }
    ]
  },
  {
    name: 'Fluminense', shield: fluminense, fundacao: '1902', titles: [
      {
        continentais: [
          { name: 'Copa Libertadores da América', count: 1 },
          { name: 'Recopa Sul-Americana', count: 1 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 4 },
          { name: 'Copa do Brasil', count: 1 },
        ],
        interestaduais: [
          { name: 'Torneio Rio-São Paulo', count: 3 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 33 },
        ]
      },
    ], artilheiros: [
      { "nome": "Waldo", "gols": 319 },
      { "nome": "Fred", "gols": 199 },
      { "nome": "Orlando Pingo de Ouro", "gols": 186 },
      { "nome": "Hércules", "gols": 165 },
      { "nome": "Telê Santana", "gols": 162 },
      { "nome": "Welfare", "gols": 161 },
      { "nome": "Russo", "gols": 155 },
      { "nome": "Preguinho", "gols": 132 },
      { "nome": "Magno Alves", "gols": 124 },
      { "nome": "Washington “Casal 20” ", "gols": 120 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/FluminenseFC' },
      { rede: 'Instagram', link: 'https://www.instagram.com/fluminensefc/' },
      { rede: 'Twitter', link: 'https://x.com/FluminenseFC' }
    ],
    updateArtilheiros: '12/05/2025',
    cores: [
      {
        main: '#870A28',      // Grená
        secondary: '#FFFFFF', // Verde
        third: '#00613C',      // Branco
        text: '#FFFFFF'
      }
    ]

  },
  // {
  //   name: 'Fortaleza', shield: fortaleza, fundacao: '1918', titles: [
  //     {
  //       'inter-regionais': [
  //         { name: 'Torneio Norte–Nordeste', count: 1 },
  //       ],
  //       regionais: [
  //         { name: 'Copa do Nordeste', count: 3 },
  //       ],
  //       estaduais: [
  //         { name: 'Campeonato Estadual', count: 46 },
  //       ]
  //     },
  //   ], artilheiros: [
  //     { nome: "Savará", gols: 154 },
  //     { nome: "Clodoaldo", gols: 120 },
  //     { nome: "Rinaldo", gols: 108 },
  //     { nome: "Amilton", gols: 86 },
  //     { nome: "Croinha", gols: 85 },
  //     { nome: "Mozart", gols: 83 },
  //     { nome: "Moésio Gomes", gols: 83 },
  //     { nome: "França", gols: 68 },
  //     { nome: "Sandro Gaúcho", gols: 66 },
  //     { nome: "Marciano", gols: 63 }
  //   ],
  //   redes: [
  //     { rede: 'Facebook', link: 'https://www.facebook.com/FortalezaEC' },
  //     { rede: 'Instagram', link: 'https://www.instagram.com/fortalezaec/' },
  //     { rede: 'Twitter', link: 'https://x.com/FortalezaEC' }
  //   ], updateArtilheiros: '13/05/2025',
  //   cores: [
  //     { main: '#0033A0', secondary: '#FFFFFF', third: '#DA291C', text: '#FFFFFF' }
  //   ]

  // },
  {
    name: 'Grêmio', shield: gremio, fundacao: '1903', titles: [
      {
        mundiais: [
          { name: 'Copa Intercontinental', count: 1 },
        ],
        continentais: [
          { name: 'Copa Libertadores da América', count: 3 },
          { name: 'Recopa Sul-Americana', count: 2 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 2 },
          { name: 'Copa do Brasil', count: 5 },
          { name: 'Supercopa do Brasil', count: 1 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 43 },
        ]
      },
    ], artilheiros: [
      { nome: "Alcindo", gols: 229 },
      { nome: "Tarciso", gols: 228 },
      { nome: "Gessy", gols: 208 },
      { nome: "Juarez", gols: 204 },
      { nome: "Luiz Carvalho", gols: 171 },
      { nome: "Joãozinho", gols: 135 },
      { nome: "Baltazar", gols: 131 },
      { nome: "Milton Kuelle", gols: 129 },
      { nome: "Foguinho", gols: 127 },
      { nome: "Marino", gols: 117 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/Gremio' },
      { rede: 'Instagram', link: 'https://www.instagram.com/gremio/' },
      { rede: 'Twitter', link: 'https://x.com/Gremio' }
    ],
    updateArtilheiros: '13/05/2025',
    cores: [
      { main: '#0D80BF', secondary: '#000000', third: '#FFFFFF' }
    ]

  },
  {
    name: 'Internacional', shield: internacional, fundacao: '1909', titles: [
      {
        mundiais: [
          { name: 'Copa do Mundo de Clubes da FIFA', count: 1 },
        ],
        intercontinentais: [
          { name: 'Copa Suruga Bank', count: 1 },
        ],
        continentais: [
          { name: 'Copa Libertadores da América', count: 2 },
          { name: 'Copa Sul-Americana', count: 1 },
          { name: 'Recopa Sul-Americana', count: 2 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 3 },
          { name: 'Copa do Brasil', count: 1 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 46 },
        ]
      },
    ], artilheiros: [
      { nome: "Carlitos", gols: 326 },
      { nome: "Bodinho", gols: 233 },
      { nome: "Claudiomiro", gols: 204 },
      { nome: "Valdomiro", gols: 190 },
      { nome: "Larry", gols: 180 },
      { nome: "Tesourinha", gols: 178 },
      { nome: "Villalba", gols: 148 },
      { nome: "Ivo Diogo", gols: 122 },
      { nome: "Jair", gols: 118 },
      { nome: "Adãozinho", gols: 113 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/scinternacional' },
      { rede: 'Instagram', link: 'https://www.instagram.com/scinternacional/' },
      { rede: 'Twitter', link: 'https://x.com/SCInternacional' }
    ], updateArtilheiros: '13/05/2025',
    cores: [
      { main: '#D50032', secondary: '#FFFFFF' }
    ]

  },
  // {
  //   name: 'Juventude', shield: juventude, fundacao: '1913', titles: [
  //     {
  //       nacionais: [
  //         { name: 'Copa do Brasil', count: 1 },
  //       ],
  //       estaduais: [
  //         { name: 'Campeonato Estadual', count: 1 },
  //       ]
  //     },
  //   ],
  //   artilheiros: [
  //     { nome: "Mário Martini", gols: 217 },
  //     { nome: "Lory Tonietto", gols: 183 },
  //     { nome: "Em breve", gols: '-' },
  //     { nome: "Em breve", gols: '-' },
  //     { nome: "Em breve", gols: '-' },
  //     { nome: "Em breve", gols: '-' },
  //     { nome: "Em breve", gols: '-' },
  //     { nome: "Em breve", gols: '-' },
  //     { nome: "Em breve", gols: '-' },
  //     { nome: "Em breve", gols: '-' },
  //   ],
  //   redes: [
  //     { rede: 'Facebook', link: 'https://www.facebook.com/juventude' },
  //     { rede: 'Instagram', link: 'https://www.instagram.com/ecjuventude/' },
  //     { rede: 'Twitter', link: 'https://x.com/ECJuventude' }
  //   ], updateArtilheiros: '13/05/2025',
  //   cores: [
  //     { main: '#009639', secondary: '#FFFFFF' }
  //   ]

  // },
  {
    name: 'Mirassol', shield: mirassol,
    fundacao: '1925', titles: [
    ],
    artilheiros: [
      { nome: "Em breve", gols: '-' },
      { nome: "Em breve", gols: '-' },
      { nome: "Em breve", gols: '-' },
      { nome: "Em breve", gols: '-' },
      { nome: "Em breve", gols: '-' },
      { nome: "Em breve", gols: '-' },
      { nome: "Em breve", gols: '-' },
      { nome: "Em breve", gols: '-' },
      { nome: "Em breve", gols: '-' },
      { nome: "Em breve", gols: '-' },
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/mirassolfc' },
      { rede: 'Instagram', link: 'https://www.instagram.com/mirassolfc/' },
      { rede: 'Twitter', link: 'https://x.com/mirassolfc' }
    ],
    updateArtilheiros: '13/05/2025',
    cores: [
      { main: '#F7C31C', secondary: '#001A57', third: '#F5A300', text: '#001A57' }
    ]

  },
  {
    name: 'Palmeiras', shield: palmeiras, fundacao: '1914', titles: [
      {
        continentais: [
          { name: 'Copa Libertadores da América', count: 3 },
          { name: 'Copa Mercosul', count: 1 },
          { name: 'Recopa Sul-Americana', count: 1 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 12 },
          { name: 'Copa do Brasil', count: 4 },
          { name: 'Supercopa do Brasil', count: 1 },
          { name: 'Copa dos Campeões', count: 1 },
        ],
        interestaduais: [
          { name: 'Torneio Rio-São Paulo', count: 5 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 26 },
        ]
      },
    ], artilheiros: [
      { "nome": "Heitor", "gols": 326 },
      { "nome": "César Maluco", "gols": 182 },
      { "nome": "Ademir da Guia", "gols": 155 },
      { "nome": "Lima", "gols": 149 },
      { "nome": "Servílio", "gols": 139 },
      { "nome": "Rodrigues Tatu", "gols": 131 },
      { "nome": "Humberto Tozzi", "gols": 127 },
      { "nome": "Evair", "gols": 126 },
      { "nome": "Luizinho", "gols": 122 },
      { "nome": "Tupãzinho", "gols": 122 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/Palmeiras' },
      { rede: 'Instagram', link: 'https://www.instagram.com/palmeiras' },
      { rede: 'Twitter', link: 'https://x.com/Palmeiras' }
    ], updateArtilheiros: '13/05/2025',
    cores: [
      { main: '#006747', secondary: '#FFFFFF' }
    ]


  },
  {
    name: 'Remo', shield: remo, fundacao: '1905', titles: [
      {
        interestaduais: [
          { name: 'Copa Verde', count: 1 },
          { name: 'Taça Norte–Nordeste', count: 1 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 48 },
        ]
      },
    ], artilheiros: [
      { nome: "Dadinho", gols: 163 },
      { nome: "Alcino", gols: 159 },
      { nome: "Quiba", gols: 154 },
      { nome: "Mesquita", gols: 132 },
      { nome: "Bira", gols: 115 },
    ], redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/ClubeDoRemo' },
      { rede: 'Instagram', link: 'https://www.instagram.com/clubedoremo' },
      { rede: 'Twitter', link: 'https://x.com/ClubeDoRemo' }
    ], updateArtilheiros: '25/02/2026',
    cores: [
      { main: '#0B3D91', secondary: '#FFFFFF', third: '#0A2A66', text: '#FFFFFF' }
    ]
  },
  {
    name: 'São Paulo', shield: saopaulo, fundacao: '1930', titles: [
      {
        mundiais: [
          { name: 'Copa do Mundo de Clubes da FIFA', count: 1 },
          { name: 'Copa Intercontinental', count: 2 },
        ],
        continentais: [
          { name: 'Copa Libertadores da América', count: 3 },
          { name: 'Copa Sul-Americana', count: 1 },
          { name: 'Recopa Sul-Americana', count: 2 },
          { name: 'Supercopa Libertadores', count: 1 },
          { name: 'Copa CONMEBOL', count: 1 },
          { name: 'Copa Master da CONMEBOL', count: 1 },

        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 6 },
          { name: 'Copa do Brasil', count: 1 },
          { name: 'Supercopa do Brasil', count: 1 },
        ],
        interestaduais: [
          { name: 'Torneio Rio–São Paulo', count: 1 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 22 },
        ]
      },
    ], artilheiros: [
      { nome: "Serginho Chulapa", gols: 242 },
      { nome: "Gino Orlando", gols: 233 },
      { nome: "Luis Fabiano", gols: 212 },
      { nome: "Teixeirinha", gols: 188 },
      { nome: "França", gols: 182 },
      { nome: "Luizinho", gols: 173 },
      { nome: "Müller", gols: 160 },
      { nome: "Leônidas", gols: 144 },
      { nome: "Maurinho", gols: 136 },
      { nome: "Rogério Ceni", gols: 131 }
    ], redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/saopaulofc' },
      { rede: 'Instagram', link: 'https://www.instagram.com/saopaulofc/' },
      { rede: 'Twitter', link: 'https://x.com/SaoPauloFC' }
    ], updateArtilheiros: '13/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#000000', third: '#FF0000', text: '#000000' }
    ]
  },
  {
    name: "Santos",
    shield: santos,
    fundacao: "1912",
    titles: [
      {
        mundiais: [
          { name: 'Copa Intercontinental', count: 2 },
        ],
        continentais: [
          { name: "Copa Libertadores da América", count: 3, },
          { name: "Copa CONMEBOL", count: 1 },
          { name: "Recopa Sul-Americana", count: 1 }
        ]
      },
      {
        nacionais: [
          { name: "Campeonato Brasileiro", count: 8 },
          { name: "Copa do Brasil", count: 1 },
        ]
      },
      {
        interestaduais: [
          {
            name: 'Torneio Rio–São Paulo', count: 5
          }
        ]
      },
      {
        estaduais: [
          { name: "Campeonato Estadual", count: 22 },
        ]
      }
    ],
    artilheiros: [
      { nome: "Pelé", gols: 1091 },
      { nome: "Pepe", gols: 403 },
      { nome: "Coutinho", gols: 368 },
      { nome: "Toninho Guerreiro", gols: 279 },
      { nome: "Feitiço", gols: 214 },
      { nome: "Dorval", gols: 194 },
      { nome: "Araken Patusca", gols: 184 },
      { nome: "Edu", gols: 184 },
      { nome: "Pagão", gols: 157 },
      { nome: "Tite", gols: 151 }
    ],
    redes: [
      { rede: "Facebook", link: "https://www.facebook.com/santosfc" },
      { rede: "Instagram", link: "https://www.instagram.com/santosfc/" },
      { rede: "Twitter", link: "https://x.com/SantosFC" }
    ],
    updateArtilheiros: '13/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#000000' }
    ]
  },
  // {
  //   name: "Sport",
  //   shield: sport,
  //   fundacao: "1905",
  //   titles: [
  //     {
  //       nacionais: [
  //         { name: "Campeonato Brasileiro Série A", count: 1 },
  //         { name: "Copa do Brasil", count: 1 },
  //       ]
  //     },
  //     {
  //       "inter-regionais": [
  //         { name: "Torneio Norte-Nordeste", count: 1 }
  //       ]
  //     },
  //     {
  //       regionais: [
  //         { name: "Copa do Nordeste", count: 3 }
  //       ]
  //     },
  //     {
  //       estaduais: [
  //         { name: "Campeonato Estadual", "count": 44 }
  //       ]
  //     }
  //   ],
  //   artilheiros: [
  //     { nome: "Traçaia", gols: 202 },
  //     { nome: "Djalma Freitas", gols: 161 },
  //     { nome: "Leonardo", gols: 136 },
  //     { nome: "Luís Carlos", gols: 108 },
  //     { nome: "Naninho", gols: 105 },
  //     { nome: "Dadá Maravilha", gols: 94 },
  //     { nome: "Marcílio de Aguiar", gols: 93 },
  //     { nome: "Raúl Bentancor", gols: 91 },
  //     { nome: "Roberto Coração de Leão", gols: 89 },
  //     { nome: "Bé", gols: 80 }
  //   ],
  //   redes: [
  //     { rede: "Facebook", link: "https://www.facebook.com/sportrecife" },
  //     { rede: "Instagram", link: "https://www.instagram.com/sportrecife/" },
  //     { rede: "Twitter", link: "https://x.com/sportrecife" }
  //   ],
  //   updateArtilheiros: '13/05/2025',
  //   cores: [
  //     { main: '#E21B25', secondary: 'black' }
  //   ]

  // },
  {
    name: 'Vasco', shield: vasco, fundacao: '1898', titles: [
      {
        continentais: [
          { name: 'Copa Libertadores da América', count: 1 },
          { name: 'Copa Mercosul', count: 1 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 4 },
          { name: 'Copa do Brasil', count: 1 },
        ],
        interestaduais: [
          { name: '	Torneio Rio-São Paulo', count: 3 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 24 },
        ]
      },
    ], artilheiros: [
      { nome: "Roberto Dinamite", "gols": 708 },
      { nome: "Romário", "gols": 326 },
      { nome: "Ademir de Menezes", "gols": 301 },
      { nome: "Pinga", "gols": 250 },
      { nome: "Russinho", "gols": 230 },
      { nome: "Ipojucan", "gols": 225 },
      { nome: "Vavá", "gols": 191 },
      { nome: "Sabará", "gols": 165 },
      { nome: "Lelé", "gols": 147 },
      { nome: "Valdir Bigode", "gols": 144 }
    ], redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/vascodagama' },
      { rede: 'Instagram', link: 'https://www.instagram.com/vascodagama/' },
      { rede: 'Twitter', link: 'https://x.com/VascodaGama' }
    ],
    updateArtilheiros: '13/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#000000' }
    ]

  },
  {
    name: 'Vitória', shield: vitoria, fundacao: '1899', titles: [
      {
        regionais: [
          { name: 'Copa do Nordeste', count: 4 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 30 },
        ]
      },
    ], artilheiros: [
      { nome: "Juvenal", gols: 150 },
      { nome: "Siri", gols: 132 },
      { nome: "Osni", gols: 111 },
      { nome: "André Catimba", gols: 90 },
      { nome: "Didico", gols: 89 },
      { nome: "Ramon Menezes", gols: 88 },
      { nome: "Neto Baiano", gols: 87 },
      { nome: "Sena", gols: 86 },
      { nome: "Samuel Matos", gols: 77 },
      { nome: "Tombinho", gols: 76 }
    ], redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/ecvitoria' },
      { rede: 'Instagram', link: 'https://www.instagram.com/ecvitoria/' },
      { rede: 'Twitter', link: 'https://x.com/ECVitoria' }
    ],
    updateArtilheiros: '13/05/2025',
    cores: [
      { secondary: 'red', main: '#000000' }
    ]
  }
];

export default teams;
