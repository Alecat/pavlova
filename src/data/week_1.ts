import { Level, Label, Suburb, Postcode } from '../interfaces'

const week1: Level[] = [
  {
    name: 'The Telegraph Desk',
    week: 1,
    day: 1,
    challenge: {
      type: 'Telegraph',
      en: [
        'Puppet show postponed',
        'Meteor shower tonight',
        'Bonnets back in style',
        'Avoid the yellow berries',
        'Sandstorm in Salty Flats',
        'Swallowed a bug',
      ],
      it: [
        'Adoro le cuffie',
        'Evita le bacche gialle',
        'Afa a Pianure Salate',
        'Ho ingoiato un insetto',
        'Martedì cena da me',
        'Stanotte stelle cadenti',
      ],
      de: [
        'Gelbe Beeren nicht essen',
        'Habe Käfer verschluckt',
        'Heute Sternshnuppen',
        'Sandsturm in Salzebene',
        'Puppentheater verschoben',
        'Häubchen sind wieder in',
      ],
      pt: [
        'Engoli um inseto',
        'Chuva de meteoros à nuite',
        'Show de marionetes adiado',
        'Evite as amoras amarelas',
        'Boinas voltaram à mode',
        'Tempestade em Salty Flats',
      ],
      es: [
        'He comido bichos',
        'Lluvia de meteoritos',
        'Tomenta en las Llanuras',
        'Obra de teatro aplazada',
        'Vuelven de las boinas',
        'No cojas bayas amarillas',
      ],
      fr: [
        'Spectacle Guignol annulé',
        'Charlottes à la mode',
        'Ai avalé un insecte',
        'Étoiles filantes ce soir',
        'Orage aux plaines salées',
        'Évite les baies jaunes',
      ],
    },
  },
  {
    name: 'The Transcription Room',
    week: 1,
    day: 2,
    challenge: {
      type: 'Transcription',
      en: [
        {
          phrase: 'stay off my lawn',
          segments: ['stay', 'off', 'my', 'lawn'],
        },
        {
          phrase: 'pizza oven for rent',
          segments: ['piz', 'za', 'oven', 'for', 'rent'],
        },
        {
          phrase: 'kazoo recital tonight',
          segments: ['kazoo', 'rec', 'ital', 'ton', 'ight'],
        },
        {
          phrase: 'looking for chess partner',
          segments: ['look', 'ing', 'for', 'chess', 'par', 'tner'],
        },
        {
          phrase: 'out of peanut butter',
          segments: ['out', 'of', 'pea', 'nut', 'but', 'ter'],
        },
        {
          phrase: 'toilet clogged real bad',
          segments: ['toi', 'let', 'clog', 'ged', 'real', 'bad'],
        },
        {
          phrase: 'just ripped my jeans',
          segments: ['just', 'ripped', 'my', 'jeans'],
        },
      ],
      it: [
        { phrase: 'via dal mio prato', segments: ['via', 'dal', 'mio', 'prato'] },
        { phrase: 'forno in vendita', segments: ['forno', 'in', 'ven', 'dita'] },
        { phrase: 'stasera saggio di piano', segments: ['sta', 'sera', 'sag', 'gio', 'di', 'piano'] },
        { phrase: 'ho il bagno intasato', segments: ['ho', 'il', 'ba', 'gno', 'inta', 'sato'] },
        { phrase: 'ho rotto i jeans', segments: ['ho', 'rotto', 'i', 'jeans'] },
        { phrase: 'mi manca il pane', segments: ['mi', 'man', 'ca', 'il', 'pa', 'ne'] },
        { phrase: 'vuoi giocare a scacchi', segments: ['vuoi', 'gio', 'care', 'a', 'sca', 'cchi'] },
      ],
      de: [
        { phrase: 'heute vortrag zu kazoo', segments: ['heu', 'te', 'vor', 'trag', 'zu', 'kazoo'] },
        { phrase: 'eben jeans zer ris sen', segments: ['eben', 'jeans', 'zer', 'ris', 'sen'] },
        { phrase: 'marmelade ist alle', segments: ['mar', 'mel', 'ade', 'ist', 'alle'] },
        { phrase: 'pizzaofen zu vermieten', segments: ['piz', 'za', 'ofen', 'zu', 'verm', 'ieten'] },
        { phrase: 'suche gegner für schach', segments: ['su', 'che', 'gegner', 'für', 'schach'] },
        { phrase: 'toilette total verstopft', segments: ['toi', 'lette', 'to', 'tal', 'verst', 'opft'] },
        { phrase: 'runter vom rasen', segments: ['runter', 'vom', 'rasen'] },
      ],
      es: [
        { phrase: 'no queda manteca', segments: ['no', 'que', 'da', 'man', 'teca'] },
        { phrase: 'recital kazoo esta noche', segments: ['reci', 'tal', 'kazoo', 'esta', 'no', 'che'] },
        { phrase: 'fuera de mi jardin', segments: ['fuera', 'de', 'mi', 'jardin'] },
        { phrase: 'alquilo horno de pizza', segments: ['alq', 'uilo', 'horno', 'de', 'pizza'] },
        { phrase: 'busco rival para ajedrez', segments: ['bus', 'co', 'rival', 'para', 'aje', 'drez'] },
        { phrase: 'aseo atascado', segments: ['a', 'seo', 'atas', 'cado'] },
        { phrase: 'he roto mis vaqueros', segments: ['he', 'ro', 'to', 'mis', 'vaqu', 'eros'] },
      ],
      pt: [
        { phrase: 'Forno de pizza para alugar', segments: ['Forno', 'de', 'piz', 'za', 'para', 'alugar'] },
        { phrase: 'Buscando parceiro de xadrez', segments: ['Bus', 'cando', 'parcei', 'ro', 'de', 'xadrez'] },
        { phrase: 'Privada muito entupida', segments: ['Pri', 'vada', 'muito', 'entu', 'pida'] },
        { phrase: 'Sem manteiga de amendoim', segments: ['Sem', 'mantei', 'ga', 'de', 'amen', 'doim'] },
        { phrase: 'Cortei meus jeans', segments: ['Cortei', 'meus', 'jeans'] },
        { phrase: 'Fora do meu jardim', segments: ['Fora', 'do', 'meu', 'jardim'] },
        { phrase: 'Recital de kazoo hoje', segments: ['Reci', 'tal', 'de', 'kazoo', 'hoje'] },
      ],

      fr: [
        { phrase: 'ai déchiré mon jean', segments: ['ai', 'déch', 'iré', 'mon', 'jean'] },
        { phrase: 'vends four à bois', segments: ['vends', 'fo', 'ur', 'à', 'bois'] },
        { phrase: 'déguerpis de ma pelouse', segments: ['dégu', 'erpis', 'de', 'ma', 'pel', 'ouse'] },
        { phrase: 'wc salement au bouchés', segments: ['wc', 'sale', 'ment', 'au', 'bou', 'chés'] },
        { phrase: 'à court du chips', segments: ['à', 'co', 'urt', 'du', 'ch', 'ips'] },
        { phrase: 'récital de kazoo demain', segments: ['réci', 'tal', 'de', 'kazoo', 'de', 'main'] },
        { phrase: 'cherche partenaire de jeu', segments: ['cher', 'che', 'parte', 'naire', 'de', 'jeu'] },
      ],
    },
  },
  {
    name: 'The Shipping Floor',
    week: 1,
    day: 3,
    notes: 'In a fresh savefile, the parcels are always the Hourglass, the Shaking Box and the Pineapple, in that order',
    challenge: {
      type: 'Shipping',
      packages: [
        {
          item: 'Vase',
          labels: [Label.Fragile],
          suburb: Suburb.Belby,
        },
        {
          item: 'Pizza',
          labels: [Label.Perishable],
          suburb: Suburb.Belby,
        },
        {
          item: 'Hourglass',
          recipient: 'Gurt Fimby',
          labels: [Label.Fragile],
          suburb: Suburb['Gumtree Grove'],
          bold: true,
        },
        {
          item: 'Present',
          labels: [Label.Urgent],
          suburb: Suburb['Gumtree Grove'],
        },
        {
          item: 'Shaking Box',
          labels: [Label.Urgent],
          suburb: Suburb['Lake Bessy'],
          bold: true,
        },
        {
          item: 'Anvil',
          labels: [Label.Heavy],
          suburb: Suburb['Painted Cliffs'],
        },
        {
          item: 'Pineapple',
          labels: [Label.Perishable],
          suburb: Suburb['Salty Flats'],
          bold: true,
        },
      ],
    },
  },
  {
    name: 'The Dropoff Depot',
    week: 1,
    day: 4,
    challenge: {
      type: 'Dropoff',
      out: [
        ['Tip Sketto', undefined, '___N\n1____2', Postcode['Lake Bessy'], Postcode['Painted Cliffs']], //lake bessy, painted cliffs
        [undefined, 'Popkins Franklin', '_S\n2_____1', Postcode['Gumtree Grove'], Postcode['Painted Cliffs']], // S => L, 1 => ?, 2 => R
        ['Grelda Grimepot', undefined, '_N_S\n___1', Postcode.Belby, Postcode['Lake Bessy']], // 1 => R, N & S => L
        ['Ichabod Iverson', undefined, 'S__S\n____2', undefined, Postcode['Painted Cliffs']], //, painted cliffs
        [undefined, 'Hugo Hurley', 'N\n_21', Postcode.Belby, Postcode.Belby], // 2 => R, N => L, 1 => L
        ['Pat Pumpkernickel', 'Ivan Tillerson', '_N__N\n1', Postcode['Painted Cliffs'], Postcode['Gumtree Grove']], // left N => L, right N => R, 1 => ?
      ],
    },
  },
]

export { week1 }
