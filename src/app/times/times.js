const teams = [
  {
    name: 'Athletico', shield: 'athletico', fundacao: '1924', titles: [
      {
        internacionais: [
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
      { nome: "Sicupira", gols: 157 },
      { nome: "Jackson", gols: 143 },
      { nome: "Kleber Pereira", gols: 124 },
      { nome: "Marreco", gols: 115 },
      { nome: "Cireno", gols: 114 },
      { nome: "Valter", gols: 106 },
      { nome: "Paulo Rink", gols: 80 },
      { nome: "Guará", gols: 76 },
      { nome: "Pablo", gols: 66 },
      { nome: "Alex Mineiro", gols: 65 },
      { nome: "Adriano Gabiru", gols: 65 },
    ], redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/clubathleticoparanaense' },
      { rede: 'Instagram', link: 'https://www.instagram.com/athleticoparanaense/' },
      { rede: 'Twitter', link: 'https://x.com/AthleticoPR' }
    ]
  },
  {
    name: 'Atlético-GO', shield: 'atletico-go', fundacao: '1937', titles: [
      {
        estaduais: [
          { name: 'Campeonato Estadual', count: 18 },
        ]
      },
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/ACGOficial' },
      { rede: 'Instagram', link: 'https://www.instagram.com/acgoficial/' },
      { rede: 'Twitter', link: 'https://x.com/ACGOficial' }
    ]
  },
  {
    name: 'Atlético-MG', shield: 'atletico-mg', fundacao: '1908', titles: [
      {
        internacionais: [
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
          { name: 'Campeonato Estadual', count: 49 },
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
    ], redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/atletico' },
      { rede: 'Instagram', link: 'https://www.instagram.com/atletico' },
      { rede: 'Twitter', link: 'https://x.com/Atletico' }
    ]
  },
  {
    name: 'Bahia', shield: 'bahia', fundacao: '1931', titles: [
      {
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 2 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 50 },
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
    ]
  },
  {
    name: 'Botafogo', shield: 'botafogo', fundacao: '1894', titles: [
      {
        internacionais: [
          { name: 'Copa CONMEBOL', count: 1 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 2 },
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
    ]
  },
  {
    name: 'Bragantino', shield: 'bragantino', fundacao: '1928', titles: [
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
    ]

  },
  {
    name: 'Corinthians', shield: 'corinthians', fundacao: '1910', titles: [
      {
        mundiais: [
          { name: 'Copa do Mundo de Clubes da FIFA', count: 2 },
        ],
        internacionais: [
          { name: 'Copa Libertadores da América', count: 1 },
          { name: 'Recopa Sul-Americana', count: 1 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 7 },
          { name: 'Copa do Brasil', count: 3 },
          { name: 'Supercopa do Brasil', count: 1 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 30 },
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
    ]
  },
  {
    name: 'Criciúma', shield: 'criciuma', fundacao: '1947', titles: [
      {
        nacionais: [
          { name: 'Copa do Brasil', count: 1 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 12 },
        ]
      },
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/criciumaec' },
      { rede: 'Instagram', link: 'https://www.instagram.com/criciumaoficial/' },
      { rede: 'Twitter', link: 'https://x.com/CriciumaEC' }
    ]
  },
  {
    name: 'Cruzeiro', shield: 'cruzeiro', fundacao: '1921', titles: [
      {
        internacionais: [
          { name: 'Copa Libertadores da América', count: 2 },
          { name: 'Recopa Sul-Americana', count: 1 },
          { name: 'Supercopa Libertadores', count: 2 },
          { name: 'Copa Master da Supercopa', count: 1 },
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
    ]
  },
  {
    name: 'Cuiabá', shield: 'cuiaba', fundacao: '2001', titles: [
      {
        estaduais: [
          { name: 'Campeonato Estadual', count: 13 },
        ]
      },
    ], artilheiros: [
      { nome: "Fernando", gols: 54 },
      { nome: "Elton", gols: 36 },
      { nome: "Deyverson", gols: 31 },
      { nome: "Moreno", gols: 31 },
      { nome: "Robinho", gols: 29 },
      { nome: "Jenison", gols: 26 }
    ],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/cuiabaec' },
      { rede: 'Instagram', link: 'https://www.instagram.com/cuiabaec/' },
      { rede: 'Twitter', link: 'https://x.com/CuiabaEC' }
    ]
  },
  {
    name: 'Flamengo', shield: 'flamengo', fundacao: '1895', titles: [
      {
        mundiais: [
          { name: 'Copa Intercontinental', count: 1 },
        ],
        internacionais: [
          { name: 'Copa Libertadores da América', count: 3 },
          { name: 'Copa Mercosul', count: 1 },
          { name: 'Recopa Sul-Americana', count: 1 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 7 },
          { name: 'Copa do Brasil', count: 4 },
          { name: 'Supercopa do Brasil', count: 2 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 38 },
        ]
      },
    ], artilheiros: [{ "nome": "Zico", "gols": 509 }, { "nome": "Dida", "gols": 264 }, { "nome": "Henrique Frade", "gols": 216 }, { "nome": "Pirillo", "gols": 204 }, { "nome": "Romário", "gols": 204 }, { "nome": "Gabigol", "gols": 156 }, { "nome": "Jarbas", "gols": 154 }, { "nome": "Leônidas", "gols": 153 }, { "nome": "Bebeto", "gols": 151 }, { "nome": "Zizinho", "gols": 148 }],
    redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/FlamengoOficial' },
      { rede: 'Instagram', link: 'https://www.instagram.com/flamengo/' },
      { rede: 'Twitter', link: 'https://x.com/Flamengo' }
    ]
  },
  {
    name: 'Fluminense', shield: 'fluminense', fundacao: '1902', titles: [
      {
        internacionais: [
          { name: 'Copa Libertadores da América', count: 1 },
          { name: 'Recopa Sul-Americana', count: 1 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 4 },
          { name: 'Copa do Brasil', count: 1 },
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
    ]
  },
  {
    name: 'Fortaleza', shield: 'fortaleza', fundacao: '1918', ttitles: [
      {
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
    ]
  },
  {
    name: 'Grêmio', shield: 'gremio', fundacao: '1903', titles: [
      {
        mundiais: [
          { name: 'Copa Intercontinental', count: 1 },
        ],
        internacionais: [
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
    ]

  },
  {
    name: 'Internacional', shield: 'internacional', fundacao: '1909', titles: [
      {
        mundiais: [
          { name: 'Copa do Mundo de Clubes da FIFA', count: 1 },
        ],
        internacionais: [
          { name: 'Copa Libertadores da América', count: 2 },
          { name: 'Copa Sul-Americana', count: 1 },
          { name: 'Recopa Sul-Americana', count: 2 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 3 },
          { name: 'Copa do Brasil', count: 1 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 45 },
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
    ]
  },
  {
    name: 'Juventude', shield: 'juventude', fundacao: '1913', titles: [
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
    ]
  },
  {
    name: 'Palmeiras', shield: 'palmeiras', fundacao: '1914', titles: [
      {
        internacionais: [
          { name: 'Copa Libertadores da América', count: 3 },
          { name: 'Copa Mercosul', count: 1 },
          { name: 'Recopa Sul-Americana', count: 1 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 12 },
          { name: 'Copa do Brasil', count: 4 },
          { name: 'Supercopa do Brasil', count: 1 },
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
    ]
  },
  {
    name: 'São Paulo', shield: 'sao-paulo', fundacao: '1930', titles: [
      {
        mundiais: [
          { name: 'Copa do Mundo de Clubes da FIFA', count: 1 },
          { name: 'Copa Intercontinental', count: 2 },
        ],
        internacionais: [
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
    ]
  },
  {
    name: 'Vasco', shield: 'vasco', fundacao: '1898', titles: [
      {
        internacionais: [
          { name: 'Copa Libertadores da América', count: 1 },
          { name: 'Copa Mercosul', count: 1 },
        ],
        nacionais: [
          { name: 'Campeonato Brasileiro', count: 4 },
          { name: 'Copa do Brasil', count: 1 },
        ],
        estaduais: [
          { name: 'Campeonato Estadual', count: 24 },
        ]
      },
    ], artilheiros: [
      { "nome": "Roberto Dinamite", "gols": 708 },
      { "nome": "Romário", "gols": 326 },
      { "nome": "Ademir de Menezes", "gols": 301 },
      { "nome": "Pinga", "gols": 250 },
      { "nome": "Russinho", "gols": 230 },
      { "nome": "Ipojucan", "gols": 225 },
      { "nome": "Vavá", "gols": 191 },
      { "nome": "Sabará", "gols": 165 },
      { "nome": "Lelé", "gols": 147 },
      { "nome": "Valdir Bigode", "gols": 144 }
    ], redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/vascodagama' },
      { rede: 'Instagram', link: 'https://www.instagram.com/vascodagama/' },
      { rede: 'Twitter', link: 'https://x.com/VascodaGama' }
    ]

  },
  {
    name: 'Vitória', shield: 'vitoria', fundacao: '1899', titles: [
      {
        estaduais: [
          { name: 'Campeonato Estadual', count: 30 },
        ]
      },
    ], artilheiros: [
      { "nome": "Juvenal", "gols": 150 },
      { "nome": "Siri", "gols": 132 },
      { "nome": "Osni", "gols": 111 },
      { "nome": "André Catimba", "gols": 90 },
      { "nome": "Didico", "gols": 89 },
      { "nome": "Ramon Menezes", "gols": 89 },
      { "nome": "Neto Baiano", "gols": 87 },
      { "nome": "Sena", "gols": 86 },
      { "nome": "Samuel Matos", "gols": 77 },
      { "nome": "Tombinho", "gols": 76 }
    ], redes: [
      { rede: 'Facebook', link: 'https://www.facebook.com/ecvitoria' },
      { rede: 'Instagram', link: 'https://www.instagram.com/ecvitoria/' },
      { rede: 'Twitter', link: 'https://x.com/ECVitoria' }
    ]
  }
];

export default teams;
