import type { Level } from '../interfaces'

const week9: Level[] = [
  {
    week: 9,
    day: 1,
    name: 'An Approaching Storm',
    challenge: {
      type: 'Telegraph',
      en: [
        'Hurricane strength winds',
        'Lake Bessy evacuated',
        'Subzero winds incoming',
        'Expect power outages',
        'Storm approaching fast',
        'Storm tracking eastward',
        'Belby shelters open',
        'Evacuate low areas',
        'Watch for hailstones',
        'Flying debris reported',
        'Take shelter now',
        'Icy road conditions',
        'Avoid glass windows',
      ],
      de: [
        'Wind in Orkanstärke',
        'Findet in Belby Schutz',
        'Der Strom fällt bald aus',
        'Sofort wo unterstellen',
        'Sturm nähert sich rasch',
        'Sturm zieht nach Osten',
        'Von Fenstern wegbleiben',
        'Achtung es hagelt bald',
        'Bessy See evakuiert',
        'Frostwinde stehen an',
        'Straßen sind vereist',
        'Obacht fliegende Trümmer',
      ],
      es: [
        'Cuidado con el hielo',
        'Vientos huracanados',
        'Vientos bajo cero',
        'Carretera helada',
        'Peligro desprendimiento',
        'Alejaos de las ventanas',
        'Tormenta hacia el este',
        'Se avecina tormenta',
        'Hay que buscar refugio',
        'Lago Bessy evacuado',
        'Belby abe sus refugios',
        'Se esperan cortes de luz',
      ],
      fr: [
        'Evitez les fenêtres',
        'Attention aux grêlons',
        'Routes totalement gelees',
        'Vent glacial approchant',
        'Vents de tempete',
        'Lac Bessy evacue',
        'Coupures de courant',
        'Tempête approche vite',
        'Tempête direction est',
        'Refuges Belby ouverts',
        'Debris volants reperes',
        'Tous aux refuges',
      ],
      it: [
        'Segnalati detriti volanti',
        'Vento artico pericoloso',
        'Lago Bessy evacuato',
        'Ghiaccio sulla strada',
        'Uragano da nord',
        'Tempesta in arrivo',
        'Tempesta da est',
        'Rifugi Belby aperti',
        'State al riparo',
        'Forse manca corrente',
        'Lontani dalle finestre',
        'Attenzione alla grandine',
      ],
      pt: [
        'Estradas congeladas',
        'Cuidado com chuvas de granizo',
        'Evitem janelas de vidro',
        'Ventos subzero se aproximando',
        'Ventos com força de furacão',
        'Lake Bessy evacuada',
        'Esperem quedas de energia',
        'Tempestade indo para leste',
        'Tempestade chegando rápido',
        'Abriguem-se ? (not completable as of now)',
        'Abrigos de Belby abertos',
        'Destroços voadores relatados',
      ],
    },
  },

  {
    week: 9,
    day: 2,
    name: 'Bitter Cold',
    challenge: {
      type: 'Transcription',
      en: [
        {
          phrase: 'roof collapse in belby',
          segments: ['ro', 'of', 'co', 'll', 'apse', 'in', 'belby'],
          chops: [
            ['ro', 'll'],
            ['co', 'of'],
          ],
        },
        {
          phrase: 'bison stranded in salty flats',
          segments: ['bi', 'son', 'stran', 'ded', 'in', 'salty', 'flats'],
          chops: [['in', 'bi']],
        },
        {
          phrase: 'telegraph lines down',
          segments: ['tele', 'graph', 'lines', 'do', 'wn'],
          chops: [
            ['do', 'do'],
            ['la', 'wn'],
          ],
        },
        {
          phrase: 'fallen trees in gumtree grove',
          segments: ['fal', 'len', 'trees', 'in', 'gumtree', 'grove'],
          chops: [
            ['fal', 'ter'],
            ['pol', 'len'],
          ],
        },
        {
          phrase: 'koom river bridge is out',
          segments: ['ko', 'om', 'river', 'bridge', 'is', 'out'],
          chops: [
            ['ko', 'ot'],
            ['om', 'is'],
          ],
        },
        {
          phrase: 'repairs needed in painted cliffs',
          segments: ['rep', 'airs', 'nee', 'ded', 'in', 'pain', 'ted', 'cliffs'],
          chops: [
            ['nee', 'lix'],
            ['han', 'ded'],
          ],
        },
        {
          phrase: 'look out for flying debris',
          segments: ['look', 'out', 'for', 'fly', 'ing', 'debris'],
          chops: [
            ['for', 'mat'],
            ['bot', 'fly'],
            ['buy', 'ing'],
          ],
        },
        {
          phrase: 'watch for hailstones',
          segments: ['wa', 'tch', 'for', 'ha', 'il', 'stones'],
          chops: [
            ['wa', 'il'],
            ['ha', 'rk'],
          ],
        },
      ],
      it: [
        {
          phrase: 'Caduta linea telefono',
          segments: ['cadu', 'ta', 'lin', 'ea', 'te', 'lef', 'ono'],
          chops: [
            ['lin', 'ono'],
            ['ea', 'te'],
          ],
        },
        {
          phrase: 'a scarpate dipinte hai freddo',
          segments: ['a', 'scarpa', 'te', 'di', 'pinte', 'hai', 'freddo'],
          chops: [
            ['te', 'di'],
          ],
        },
        {
          phrase: 'bufera di neve a belby',
          segments: ['bufe', 'ra', 'di', 'ne', 've', 'a', 'be', 'lby'],
          chops: [
            ['ra', 'di'],
            ['ve', 'be'],
          ],
        },
        {
          phrase: 'albero caduto a sottobosco',
          segments: ['albe', 'ro', 'ca', 'duto', 'a', 'sotto', 'bosco'],
          chops: [['ro', 'ca']],
        },
        {
          phrase: 'crolla il ponte sul fiume',
          segments: ['crol', 'la', 'il', 'pont', 'e', 'sul', 'fiu', 'me'],
          chops: [
            ['la', 'il'],
            ['sul', 'fiu'],
          ],
        },
        {
          phrase: 'attenzione alla grandine',
          segments: ['atte', 'nzio', 'ne', 'al', 'la', 'gr', 'andi', 'ne'],
          chops: [
            ['ne', 'al'],
            ['la', 'gr'],
          ],
        },
        {
          phrase: 'attenzione ai detriti volanti',
          segments: ['atte', 'nzio', 'ne', 'ai', 'detr', 'iti', 'vol', 'an', 'ti'],
          chops: [
            ['ne', 'ai'],
            ['iti', 'vol'],
          ],
        },
        {
          phrase: 'bisonte fermo a pianure salate',
          segments: ['biso', 'nte', 'fer', 'mo', 'a', 'pian', 'ure', 'sal', 'ate'],
          chops: [
            ['nte', 'fer'],
            ['ure', 'sal'],
          ],
        },
      ],
      de: [
        {
          phrase: 'schaden an den klippen',
          segments: ['scha', 'den', 'an', 'den', 'klip', 'pen'],
          chops: [
            ['den', 'den'],
            ['kli', 'pan'],
          ],
        },
        { phrase: 'leitungen kaputt', segments: ['lei', 'tungen', 'kap', 'utt'], chops: [['sch', 'utt']] },
        {
          phrase: 'brüke über koom kaputt',
          segments: ['brü', 'ke', 'über', 'koom', 'kap', 'utt'],
          chops: [['brü', 'der']],
        },
        {
          phrase: 'achtung es hagelt bald',
          segments: ['acht', 'ung', 'es', 'hag', 'elt', 'bald'],
          chops: [['tag', 'ung']],
        },
        {
          phrase: 'garade bison gesichtet',
          segments: ['gar', 'ade', 'bi', 'son', 'ge', 'sich', 'tet'],
          chops: [
            ['gar', 'son'],
            ['bi', 'ge'],
            ['tet', 'ade'],
          ],
        },
        { phrase: 'dach in belby kaputt', segments: ['dach', 'in', 'belby', 'kap', 'utt'], chops: [['dac', 'hin']] },
        {
          phrase: 'bäume im hain gefallen',
          segments: ['bäume', 'im', 'hai', 'n', 'ge', 'fallen'],
          chops: [
            ['me', 'im'],
            ['hai', 'nge'],
          ],
        },
        { phrase: 'vorsicht trümmer', segments: ['vor', 'sicht', 'trüm', 'mer'], chops: [['vor', 'mer']] },
      ],
      pt: [
        {
          phrase: 'Bisão ilhado em Salty Flats',
          segments: ['Bi', 'são', 'ilha', 'do', 'em', 'Salty', 'Flats'],
          chops: [['bi', 'do']],
        },
        {
          phrase: 'Telhado desmorou em Belby',
          segments: ['Telha', 'do', 'desmor', 'ou', 'em', 'Belby'],
          chops: [['ou', 'do']],
        },
        {
          phrase: 'Linha do telégrafo caida',
          segments: ['Linha', 'do', 'telégrafo', 'cai', 'da'],
          chops: [['da', 'do']],
        },
        {
          phrase: 'Árvores caídas em Gumtree Grove',
          segments: ['Árvo', 'res', 'caí', 'das', 'em', 'Gumt', 'ree', 'Grove'],
          chops: [
            ['das', 'ree'],
            ['res', 'cai'],
          ],
        },
        {
          phrase: 'A ponte do Rio Koom caiu',
          segments: ['A', 'pon', 'te', 'do', 'Rio', 'Koom', 'caiu'],
          chops: [['rio', 'pon']],
        },
        {
          phrase: 'Fazer reparos em Painted Cliffs',
          segments: ['Fazer', 'repar', 'os', 'em', 'Pain', 'ted', 'Cliffs'],
          chops: [['os', 'em']],
        },
        {
          phrase: 'Cuidado com chuvas de granizo',
          segments: ['Cui', 'dado', 'com', 'chuvas', 'de', 'gran', 'izo'],
          chops: [['com', 'izo']],
        },
        {
          phrase: 'Cuidado com destrocos voadores',
          segments: ['Cui', 'dado', 'com', 'des', 'trocos', 'voa', 'dores'],
          chops: [['cui', 'des']],
        },
      ],
      es: [
        {
          phrase: 'no funciona la línea',
          segments: ['no', 'func', 'io', 'na', 'la', 'lín', 'ea'],
          chops: [
            ['no', 'io'],
            ['la', 'na'],
          ],
        },
        {
          phrase: 'reno perdido en las llunuras',
          segments: ['reno', 'per', 'dido', 'en', 'las', 'llan', 'uras'],
          chops: [['per', 'las']],
        },
        {
          phrase: 'cuidado ráfaga de viento',
          segments: ['cui', 'da', 'do', 'ráfa', 'ga', 'de', 'vien', 'to'],
          chops: [
            ['da', 'ga'],
            ['de', 'to'],
          ],
        },
        {
          phrase: 'tejado hundido en belby',
          segments: ['teja', 'do', 'hun', 'dido', 'en', 'bel', 'by'],
          chops: [['bel', 'hun']],
        },
        {
          phrase: 'necesito ayda en los riscos',
          segments: ['ne', 'ce', 'sito', 'ayda', 'en', 'los', 'ris', 'cos'],
          chops: [
            ['ce', 'ne'],
            ['cos', 'los'],
          ],
        },
        {
          phrase: 'desastre en la arboleda',
          segments: ['de', 'sastre', 'en', 'la', 'ar', 'bol', 'eda'],
          chops: [
            ['ar', 'de'],
            ['eda', 'bol'],
          ],
        },
        {
          phrase: 'puente del lago desplomado',
          segments: ['pu', 'ente', 'del', 'la', 'go', 'desplo', 'ma', 'do'],
          chops: [
            ['pu', 'do'],
            ['ma', 'la'],
          ],
        },
        {
          phrase: 'cuidado con el hielo',
          segments: ['cui', 'da', 'do', 'con', 'el', 'hie', 'lo'],
          chops: [
            ['cui', 'hie'],
            ['lo', 'do'],
          ],
        },
      ],
      fr: [
        {
          phrase: 'pont de la koom effondré',
          segments: ['pont', 'de', 'la', 'koom', 'effo', 'ndré'],
          chops: [
            ['de', 'la'],
            ['effo', 'rcée'],
          ],
        },
        {
          phrase: 'lignes télégraphe coupées',
          segments: ['lignes', 'télé', 'graphe', 'cou', 'pées'],
          chops: [
            ['té', 'vé'],
            ['cou', 'cou'],
          ],
        },
        {
          phrase: 'bison seul aux plaines salées',
          segments: ['bis', 'on', 'se', 'ul', 'aux', 'plai', 'nes', 'salées'],
          chops: [
            ['bis', 'aux'],
            ['on', 'ul'],
          ],
        },
        {
          phrase: 'arbres tombés au bosquet',
          segments: ['arbres', 'tom', 'bés', 'au', 'bos', 'quet'],
          chops: [
            ['tom', 'met'],
            ['au', 'to'],
          ],
        },
        {
          phrase: 'travaux aux falaises colorées',
          segments: ['trav', 'aux', 'aux', 'falaises', 'col', 'orées'],
          chops: [
            ['tra', 'verse'],
            ['col', 'bat'],
          ],
        },
        {
          phrase: 'toit effondré à belby',
          segments: ['to', 'it', 'effo', 'nd', 'ré', 'à', 'belby'],
          chops: [
            ['to', 'nd'],
            ['it', 'ré'],
          ],
        },
        {
          phrase: 'surveillez débris volants',
          segments: ['sur', 'veil', 'lez', 'déb', 'ris', 'volants'],
          chops: [
            ['sur', 'vol'],
            ['poi', 'lez'],
            ['déb', 'out'],
            ['ris', 'eés'],
          ],
        },
        {
          phrase: 'attention aux grêlons',
          segments: ['att', 'ention', 'aux', 'grê', 'lons'],
          chops: [
            ['att', 'aux'],
            ['grê', 'din'],
          ],
        },
      ],
    },
  },

  {
    week: 9,
    day: 3,
    name: 'Emergency Relief',
    challenge: {
      type: 'EmergencyRelief',
    },
  },

  {
    week: 9,
    day: 4,
    name: 'Stand Your Post',
    challenge: {
      type: 'StandYourPost',
    },
  },
]

export { week9 }
