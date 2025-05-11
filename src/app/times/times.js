const teams = [

  {
    name: 'Atlético-MG', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Atletico_mineiro_galo.png/800px-Atletico_mineiro_galo.png', fundacao: '1908', titles: [
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
    updateArtilheiros: '10/05/2025',
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
    name: 'Bahia', shield: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/ECBahia.png/195px-ECBahia.png', fundacao: '1931', titles: [
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
      { nome: "Carlito", gols: 253 },
      { nome: "Douglas", gols: 211 },
      { nome: "Hamilton", gols: 154 },
      { nome: "Uéslei", gols: 140 },
      { nome: "Osni", gols: 138 },
      { nome: "Marcelo Ramos", gols: 128 },
      { nome: "Nonato", gols: 125 },
      { nome: "Vareta", gols: 121 },
      { nome: "Alencar", gols: 116 },
      { nome: "Biriba", gols: 113 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/ecbahia' },
      { rede: 'Instagram', link: 'https://www.instagram.com/ecbahia/' },
      { rede: 'Twitter', link: 'https://x.com/ecbahia' }
    ], updateArtilheiros: '10/05/2025',
    cores: [
      { main: 'white', secondary: 'blue', third: 'red' }
    ]
  },
  {
    name: 'Botafogo', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/180px-Botafogo_de_Futebol_e_Regatas_logo.svg.png', fundacao: '1894', titles: [
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
    updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#000000' }
    ]
  },
  {
    name: 'Bragantino', shield: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9e/RedBullBragantino.png/210px-RedBullBragantino.png', fundacao: '1928', titles: [
      {
        estaduais: [
          { name: 'Campeonato Estadual', count: 1 },
        ]
      },
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/RedBullBragantino' },
      { rede: 'Instagram', link: 'https://www.instagram.com/redbullbragantino' },
      { rede: 'Twitter', link: 'https://x.com/RedBullBraga' }
    ],
    updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#000000' }
    ]

  },
  {
    name: 'Ceará',
    shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cear%C3%A1_Sporting_Club_logo.svg/250px-Cear%C3%A1_Sporting_Club_logo.svg.png',
    fundacao: '1914',
    titles: [
      {
        'inter-regionais': [
          { name: 'Torneio Norte-Nordeste', count: 1 }
        ],
        regionais: [
          { name: 'Copa do Nordeste', count: 3 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 47 }
        ]
      }
    ],
    artilheiros: [
      { nome: 'Gildo', gols: 261 },
      { nome: 'Mitotônio', gols: 151 },
      { nome: 'Sérgio Alves', gols: 141 },
      { nome: 'Pipiu', gols: 115 },
      { nome: 'Antonino', gols: 110 },
      { nome: 'Magno Alves', gols: 103 },
      { nome: 'Zé Eduardo', gols: 99 },
      { nome: 'Da Costa', gols: 94 },
      { nome: 'Ivanir', gols: 90 },
      { nome: 'Mota', gols: 89 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/cearasc' },
      { rede: 'Instagram', link: 'https://www.instagram.com/cearasc/' },
      { rede: 'Twitter', link: 'https://x.com/CearaSC' }
    ],
    updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#000000' }
    ]
  },

  {
    name: 'Corinthians', shield: 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/b4/Corinthians_simbolo.png/180px-Corinthians_simbolo.png', fundacao: '1910', titles: [
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
          { name: 'Copa do Brasil', count: 3 },
          { name: 'Supercopa do Brasil', count: 1 },
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
    updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#000000' }
    ]


  },
  {
    name: 'Cruzeiro', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/180px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png', fundacao: '1921', titles: [
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
    ], updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: 'blue' }
    ]
  },
  {
    name: 'Flamengo', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/180px-Flamengo_braz_logo.svg.png', fundacao: '1895', titles: [
      {
        mundiais: [
          { name: 'Copa Intercontinental', count: 1 },
        ],
        continentais: [
          { name: 'Copa Libertadores da América', count: 3 },
          { name: 'Copa Mercosul', count: 1 },
          { name: 'Recopa Sul-Americana', count: 1 },
          { name: 'Copa de Ouro Nicolás Leoz', count: 1 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 7 },
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
    ], artilheiros: [{ "nome": "Zico", "gols": 509 }, { "nome": "Dida", "gols": 264 }, { "nome": "Henrique Frade", "gols": 216 }, { "nome": "Pirillo", "gols": 204 }, { "nome": "Romário", "gols": 204 }, { "nome": "Gabigol", "gols": 156 }, { "nome": "Jarbas", "gols": 154 }, { "nome": "Leônidas", "gols": 153 }, { "nome": "Bebeto", "gols": 151 }, { "nome": "Zizinho", "gols": 148 }],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/FlamengoOficial' },
      { rede: 'Instagram', link: 'https://www.instagram.com/flamengo/' },
      { rede: 'Twitter', link: 'https://x.com/Flamengo' }
    ], updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#000000', secondary: 'red' }
    ]
  },
  {
    name: 'Fluminense', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FFC_crest.svg/195px-FFC_crest.svg.png', fundacao: '1902', titles: [
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
      { "nome": "Orlando Pingo de Ouro", "gols": 184 },
      { "nome": "Hércules", "gols": 165 },
      { "nome": "Telê Santana", "gols": 164 },
      { "nome": "Welfare", "gols": 161 },
      { "nome": "Russo", "gols": 149 },
      { "nome": "Preguinho", "gols": 128 },
      { "nome": "Washington", "gols": 124 },
      { "nome": "Magno Alves", "gols": 124 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/FluminenseFC' },
      { rede: 'Instagram', link: 'https://www.instagram.com/fluminensefc/' },
      { rede: 'Twitter', link: 'https://x.com/FluminenseFC' }
    ],
    updateArtilheiros: '10/05/2025',
    cores: [
      {
        main: '#870A28',      // Grená
        secondary: '#FFFFFF', // Verde
        third: '#00613C'      // Branco
      }
    ]

  },
  {
    name: 'Fortaleza', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Fortaleza_EC_2018.png/180px-Fortaleza_EC_2018.png', fundacao: '1918', titles: [
      {
        'inter-regionais': [
          { name: 'Torneio Norte–Nordeste', count: 1 },
        ],
        regionais: [
          { name: 'Copa do Nordeste', count: 3 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 46 },
        ]
      },
    ], artilheiros: [
      { nome: "Savará", gols: 154 },
      { nome: "Clodoaldo", gols: 120 },
      { nome: "Rinaldo", gols: 108 },
      { nome: "Amilton", gols: 86 },
      { nome: "Croinha", gols: 85 },
      { nome: "Mozart", gols: 83 },
      { nome: "Moésio Gomes", gols: 83 },
      { nome: "França", gols: 68 },
      { nome: "Sandro Gaúcho", gols: 66 },
      { nome: "Marciano", gols: 63 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/FortalezaEC' },
      { rede: 'Instagram', link: 'https://www.instagram.com/fortalezaec/' },
      { rede: 'Twitter', link: 'https://x.com/FortalezaEC' }
    ], updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#0033A0', secondary: '#FFFFFF', third: '#ED1C24' } // Fortaleza EC
    ]

  },
  {
    name: 'Grêmio', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Gremio_logo.svg/180px-Gremio_logo.svg.png', fundacao: '1903', titles: [
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
    updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#0D80BF', secondary: '#000000', third: '#FFFFFF' }
    ]

  },
  {
    name: 'Internacional', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/240px-Escudo_do_Sport_Club_Internacional.svg.png', fundacao: '1909', titles: [
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
    ], updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#D50032', secondary: '#FFFFFF' }
    ]

  },
  {
    name: 'Juventude', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/EC_Juventude.svg/210px-EC_Juventude.svg.png', fundacao: '1913', titles: [
      {
        nacionais: [
          { name: 'Copa do Brasil', count: 1 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 1 },
        ]
      },
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/juventude' },
      { rede: 'Instagram', link: 'https://www.instagram.com/ecjuventude/' },
      { rede: 'Twitter', link: 'https://x.com/ECJuventude' }
    ], updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#009639', secondary: '#FFFFFF' }
    ]

  },
  {
    name: 'Mirassol', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mirassol_FC_logo.png/918px-Mirassol_FC_logo.png',
    fundacao: '1925', titles: [
    ],
    artilheiros: [
      { nome: "X", gols: 0 },
      { nome: "X", gols: 0 },
      { nome: "X", gols: 0 },
      { nome: "X", gols: 0 },
      { nome: "X", gols: 0 },
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/mirassolfc' },
      { rede: 'Instagram', link: 'https://www.instagram.com/mirassolfc/' },
      { rede: 'Twitter', link: 'https://x.com/mirassolfc' }
    ],
    updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#F7C31C', secondary: '#001A57', third: '#F5A300' }
    ]

  },
  {
    name: 'Palmeiras', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/180px-Palmeiras_logo.svg.png', fundacao: '1914', titles: [
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
      { "nome": "Heitor", "gols": 323 },
      { "nome": "César Maluco", "gols": 182 },
      { "nome": "Ademir da Guia", "gols": 155 },
      { "nome": "Lima", "gols": 149 },
      { "nome": "Servílio", "gols": 139 },
      { "nome": "Rodrigues Tatu", "gols": 131 },
      { "nome": "Humberto Tozzi", "gols": 127 },
      { "nome": "Evair", "gols": 126 },
      { "nome": "Luizinho Tupãzinho", "gols": 122 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/Palmeiras' },
      { rede: 'Instagram', link: 'https://www.instagram.com/palmeiras' },
      { rede: 'Twitter', link: 'https://x.com/Palmeiras' }
    ], updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#006747', secondary: '#FFFFFF' }
    ]


  },
  {
    name: 'São Paulo', shield: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/S%C3%A3o_Paulo_Futebol_Clube.png/180px-S%C3%A3o_Paulo_Futebol_Clube.png', fundacao: '1930', titles: [
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
      {
        nome: "Serginho Chulapa",
        gols: 242
      },
      {
        nome: "Gino Orlando",
        gols: 233
      },
      {
        nome: "Luis Fabiano",
        gols: 212
      },
      {
        nome: "Teixeirinha",
        gols: 188
      },
      {
        nome: "França",
        gols: 182
      },
      {
        nome: "Luizinho",
        gols: 173
      },
      {
        nome: "Müller",
        gols: 160
      },
      {
        nome: "Leônidas",
        gols: 144
      },
      {
        nome: "Maurinho",
        gols: 136
      },
      {
        nome: "Rogério Ceni",
        gols: 131
      }
    ], redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/saopaulofc' },
      { rede: 'Instagram', link: 'https://www.instagram.com/saopaulofc/' },
      { rede: 'Twitter', link: 'https://x.com/SaoPauloFC' }
    ], updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#000000', third: '#FF0000' }
    ]
  },
  {
    name: "Santos Futebol Clube",
    shield: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Santos_Logo.png/330px-Santos_Logo.png",
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
      { nome: "Pepe", gols: 405 },
      { nome: "Coutinho", gols: 370 },
      { nome: "Toninho Guerreiro", gols: 283 },
      { nome: "Feitiço", gols: 216 },
      { nome: "Dorval", gols: 198 },
      { nome: "Edu", gols: 183 },
      { nome: "Araken Patusca", gols: 177 },
      { nome: "Pagão", gols: 159 },
      { nome: "Tite", gols: 151 }
    ],
    redes: [
      { rede: "Facebook", link: "https://www.facebook.com/santosfc" },
      { rede: "Instagram", link: "https://www.instagram.com/santosfc/" },
      { rede: "Twitter", link: "https://x.com/SantosFC" }
    ],
    updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#000000' }
    ]
  },
  {
    name: "Sport",
    shield: "https://upload.wikimedia.org/wikipedia/pt/1/17/Sport_Club_do_Recife.png",
    fundacao: "1905",
    titles: [
      {
        nacionais: [
          { name: "Campeonato Brasileiro Série A", count: 1 },
          { name: "Copa do Brasil", count: 1 },
        ]
      },
      {
        "inter-regionais": [
          { name: "Torneio Norte-Nordeste", count: 1 }
        ]
      },
      {
        regionais: [
          { name: "Copa do Nordeste", count: 3 }
        ]
      },
      {
        estaduais: [
          { name: "Campeonato Estadual", "count": 44 }
        ]
      }
    ],
    artilheiros: [
      { nome: "Traçaia", gols: 202 },
      { nome: "Djalma Freitas", gols: 161 },
      { nome: "Leonardo", gols: 136 },
      { nome: "Luís Carlos", gols: 108 },
      { nome: "Naninho", gols: 105 },
      { nome: "Dadá Maravilha", gols: 94 },
      { nome: "Marcílio de Aguiar", gols: 93 },
      { nome: "Diego Souza", gols: 51 },
      { nome: "André Felipe", gols: 44 },
      { nome: "Hernane", gols: 36 }
    ],
    redes: [
      { rede: "Facebook", link: "https://www.facebook.com/sportrecife" },
      { rede: "Instagram", link: "https://www.instagram.com/sportrecife/" },
      { rede: "Twitter", link: "https://x.com/sportrecife" }
    ],
    updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#E21B25', secondary: 'black' }
    ]

  },
  {
    name: 'Vasco', shield: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ac/CRVascodaGama.png/180px-CRVascodaGama.png', fundacao: '1898', titles: [
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
    updateArtilheiros: '10/05/2025',
    cores: [
      { main: '#FFFFFF', secondary: '#000000' }
    ]

  },
  {
    name: 'Vitória', shield: 'https://upload.wikimedia.org/wikipedia/pt/thumb/3/34/Esporte_Clube_Vit%C3%B3ria_logo.png/180px-Esporte_Clube_Vit%C3%B3ria_logo.png', fundacao: '1899', titles: [
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
      { nome: "Ramon Menezes", gols: 89 },
      { nome: "Neto Baiano", gols: 87 },
      { nome: "Sena", gols: 86 },
      { nome: "Samuel Matos", gols: 77 },
      { nome: "Tombinho", gols: 76 }
    ], redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/ecvitoria' },
      { rede: 'Instagram', link: 'https://www.instagram.com/ecvitoria/' },
      { rede: 'Twitter', link: 'https://x.com/ECVitoria' }
    ],
    updateArtilheiros: '11/05/2025',
    cores: [
      { secondary: 'red', main: '#000000' }
    ]
  }
];

export default teams;
