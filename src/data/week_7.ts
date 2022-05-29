import { Level, Label, Suburb, Postcode } from '../interfaces'

const week7: Level[] = [
  {
    week: 7,
    day: 1,
    name: 'Trapdoors and Tentacles',
    challenge: {
      type: 'Dropoff',
      out: [
        ['Juniper Montgomery', 'Jennifer Loglia', '', Postcode['Painted Cliffs'], Postcode.Belby],
        ['Darla Dimplestein', 'Wilma Quando', '', Postcode['Lake Bessy'], Postcode.Belby],
        ['Foggy Matthews', 'Yim Pippers', '', Postcode['Gumtree Grove'], Postcode['Painted Cliffs']],
        ['Tina Bitters', 'Kruk Rattus', '', Postcode['Painted Cliffs'], Postcode['Painted Cliffs']],
        ['Payla Hornsby', 'Simon Spiffwelter', '', Postcode['Gumtree Grove'], Postcode['Gumtree Grove']],
        ['Phil Bean', undefined, '', undefined, Postcode['Gumtree Grove']],
        ['Penny Holmstead', 'Cordelia Custard', '', Postcode['Lake Bessy'], Postcode['Lake Bessy']], // es: Pingueta Pizpireta + Pamela Pastelillo
      ],
    },
  },

  {
    week: 7,
    day: 2,
    name: 'Assembly-Line Scramble',
    challenge: {
      type: 'Transcription',
      en: [
        {
          phrase: 'i have a ton of warm pants',
          segments: ['i', 'ha', 've', 'a', 'ton', 'of', 'wa', 'rm', 'pants'],
          chops: [
            ['ha', 'rm'],
            ['wa', 've'],
          ],
        },
        {
          phrase: 'this oatmeal got cold fast',
          segments: ['this', 'oat', 'meal', 'got', 'co', 'ld', 'fa', 'st'],
          chops: [
            ['co', 'st'],
            ['fa', 'ld'],
          ],
        },
        {
          phrase: 'slipped and fell but feeling swell',
          segments: ['slip', 'ped', 'and', 'fe', 'll', 'but', 'fee', 'li', 'ng', 'swell'],
          chops: [
            ['fe', 'ng'],
            ['li', 'll'],
          ],
        },
        {
          phrase: 'got a hole in my boot',
          segments: ['got', 'a', 'ho', 'le', 'in', 'my', 'bo', 'ot'],
          chops: [
            ['ho', 'ot'],
            ['bo', 'le'],
          ],
        },
        {
          phrase: 'my flippers are freezing',
          segments: ['my', 'fl', 'ip', 'pers', 'are', 'fr', 'ee', 'zing'],
          chops: [
            ['fl', 'ee'],
            ['fr', 'ip'],
          ],
        },
        {
          phrase: 'invented a cool new dance',
          segments: ['in', 'vented', 'a', 'co', 'ol', 'new', 'da', 'nce'],
          chops: [
            ['co', 'da'],
            ['po', 'ol'],
            ['tra', 'nce'],
          ],
        },
        {
          phrase: 'lukewarm cider for sale',
          segments: ['lu', 'ke', 'wa', 'rm', 'cider', 'for', 'sale'],
          chops: [
            ['lu', 'rm'],
            ['wa', 'ke'],
          ],
        },
        {
          phrase: 'dang i forgot how to ski',
          segments: ['da', 'ng', 'i', 'for', 'got', 'how', 'to', 'sk', 'i'],
          chops: [
            ['da', 'sk'],
            ['to', 'ng'],
          ],
        },
      ],
      it: [
        {
          phrase: 'amo i calzini caldi',
          segments: ['amo', 'i', 'calz', 'ini', 'cal', 'di'],
          chops: [['ini', 'cal']],
        },
        {
          phrase: 'ho inventato un ballo',
          segments: ['ho', 'in', 'venta', 'to', 'un', 'bal', 'lo'],
          chops: [
            ['ho', 'in'],
            ['to', 'un'],
          ],
        },
        {
          phrase: 'non ricordo come sciare',
          segments: ['non', 'ric', 'or', 'do', 'co', 'me', 'sc', 'iare'],
          chops: [
            ['non', 'ric'],
            ['do', 'co'],
            ['me', 'sc'],
          ],
        },
        {
          phrase: 'la slitta non parte',
          segments: ['la', 'sl', 'itta', 'non', 'par', 'te'],
          chops: [
            ['la', 'sl'],
            ['non', 'par'],
          ],
        },
        {
          phrase: 'ho le pinne gelate',
          segments: ['ho', 'le', 'pin', 'ne', 'ge', 'late'],
          chops: [
            ['ho', 'le'],
            ['ne', 'ge'],
          ],
        },
        {
          phrase: 'vorrei del brodo caldo',
          segments: ['vor', 'rei', 'del', 'bro', 'do', 'cal', 'do'],
          chops: [['do', 'do']],
        },
        {
          phrase: 'sidro tiepido in vendita',
          segments: ['sidr', 'o', 't', 'iedipo', 'in', 've', 'ndit', 'a'],
          chops: [
            ['o', 't'],
            ['in', 've'],
          ],
        },
        {
          phrase: 'sono scivolata sul ghiaccio',
          segments: ['sono', 'scivol', 'ata', 'sul', 'ghia', 'ccio'],
          chops: [['ata', 'sul']],
        },
      ],
      de: [
        {
          phrase: 'habe loch im stiefel',
          segments: ['ha', 'be', 'loch', 'im', 'stie', 'fel'],
          chops: [['be', 'im']],
        },
        {
          phrase: 'ausgerutscht aber wohlauf',
          segments: ['aus', 'ge', 'rut', 'scht', 'aber', 'wohl', 'auf'],
          chops: [['aus', 'rut']],
        },
        {
          phrase: 'skifahren völlig verlernt',
          segments: ['ski', 'fah', 'ren', 'völlig', 'ver', 'ler', 'nt'],
          chops: [['ski', 'ler']],
        },
        {
          phrase: 'flossen sind eingefroren',
          segments: ['flo', 'ssen', 'sind', 'ein', 'ge', 'fro', 'ren'],
          chops: [
            ['gege', 'ssen'],
            ['flo', 'ren'],
          ],
        },
        {
          phrase: 'verkaufe warmen apfelwein',
          segments: ['ver', 'kau', 'fe', 'warm', 'en', 'apfel', 'wein'],
          chops: [['fe', 'en']],
        },
        {
          phrase: 'meine hosen sind flauschig',
          segments: ['mei', 'ne', 'ho', 'sen', 'sind', 'flau', 'schig'],
          chops: [['mei', 'sen']],
        },
        {
          phrase: 'neuen tanz erfunden',
          segments: ['neuen', 'tanz', 'er', 'fun', 'den'],
          chops: [
            ['er', 'st'],
            ['lan', 'den'],
          ],
        },
        {
          phrase: 'hafer brei schon kalt',
          segments: ['ha', 'fer', 'brei', 'schon', 'ka', 'lt'],
          chops: [['ha', 'lt']],
        },
      ],
      pt: [
        {
          phrase: 'Droga esqueci como esquiar',
          segments: ['Droga', 'es', 'queci', 'como', 'esqui', 'ar'],
          chops: [['es', 'ar']],
        },
        {
          phrase: 'Tenho muitas calcas quentes',
          segments: ['Te', 'nho', 'mui', 'tas', 'calcas', 'quentes'],
          chops: [['mui', 'nho']],
        },
        {
          phrase: 'Deslizei e ca mas estou bem',
          segments: ['Desli', 'zei', 'e', 'ca', 'mas', 'estou', 'bem'],
          chops: [['bem', 'zei']],
        },
        {
          phrase: 'Minha bota esta furada',
          segments: ['Minha', 'bo', 'ta', 'esta', 'fura', 'da'],
          chops: [['da', 'bo']],
        },
        {
          phrase: 'Inventei uma danca nova',
          segments: ['Inv', 'entei', 'uma', 'danca', 'nova'],
          chops: [['inv', 'uma']],
        },
        {
          phrase: 'Esse mingau esfriou depressa',
          segments: ['Esse', 'min', 'gau', 'esfriou', 'depre', 'ssa'],
          chops: [['gau', 'ssa']],
        },
        { phrase: 'Cidra morna a venda', segments: ['Ci', 'dra', 'mor', 'na', 'a', 'venda'], chops: [['dra', 'mor']] },
        {
          phrase: 'Minhas nadadeiras estao geladas',
          segments: ['Minhas', 'nada', 'deiras', 'es', 'tao', 'gela', 'das'],
          chops: [['das', 'tao']],
        },
      ],
      es: [
        {
          phrase: 'resbalé pero estoy bien',
          segments: ['res', 'balé', 'pe', 'ro', 'es', 'toy', 'bi', 'en'],
          chops: [
            ['bi', 'pe'],
            ['ro', 'en'],
          ],
        },
        {
          phrase: 'regalo medias de lana',
          segments: ['re', 'ga', 'lo', 'me', 'dias', 'de', 'la', 'na'],
          chops: [
            ['me', 'ga'],
            ['lo', 'la'],
          ],
        },
        {
          phrase: 'se vende soda caliente',
          segments: ['se', 'ven', 'de', 'so', 'da', 'cal', 'iente'],
          chops: [
            ['se', 'de'],
            ['cal', 'ven'],
          ],
        },
        {
          phrase: 'he creado un nuevo baile',
          segments: ['he', 'crea', 'do', 'un', 'nu', 'evo', 'bai', 'le'],
          chops: [
            ['nu', 'do'],
            ['bai', 'evo'],
          ],
        },
        {
          phrase: 'he olvidado cómo esquiar',
          segments: ['he', 'olvi', 'dado', 'có', 'mo', 'esq', 'uiar'],
          chops: [
            ['he', 'mo'],
            ['có', 'do'],
          ],
        },
        {
          phrase: 'tengo los pies helados',
          segments: ['tengo', 'los', 'pi', 'es', 'hel', 'ados'],
          chops: [
            ['hel', 'los'],
            ['es', 'pi'],
          ],
        },
        {
          phrase: 'mi desayuno se enfría',
          segments: ['mi', 'des', 'ayuno', 'se', 'en', 'fr', 'ía'],
          chops: [
            ['se', 'ía'],
            ['fr', 'en'],
          ],
        },
        {
          phrase: 'he perdido un calcetín',
          segments: ['he', 'per', 'di', 'do', 'un', 'cal', 'ce', 'tín'],
          chops: [
            ['di', 'ce'],
            ['cal', 'tín'],
          ],
        },
      ],
      fr: [
        { phrase: 'suis tombé donc hématome', segments: ['suis', 'tombé', 'donc', 'héma', 'tome'], chops: [] },
        {
          phrase: 'vin chaud à emporter',
          segments: ['vin', 'chaud', 'à', 'em', 'porter'],
          chops: [
            ['vin', 'ard'],
            ['bl', 'em'],
          ],
        },
        {
          phrase: 'zut je sais plus skier',
          segments: ['zut', 'je', 'sais', 'plus', 'sk', 'ier'],
          chops: [
            ['zut', 'ier'],
            ['je', 'sk'],
          ],
        },
        {
          phrase: 'mes palmes sont gelées',
          segments: ['mes', 'pal', 'mes', 'sont', 'gel', 'ées'],
          chops: [
            ['pal', 'ées'],
            ['gel', 'mes'],
          ],
        },
        {
          phrase: 'ma soupe est déjà froide',
          segments: ['ma', 'so', 'upe', 'est', 'déjà', 'fro', 'ide'],
          chops: [
            ['fro', 'upe'],
            ['est', 'ide'],
          ],
        },
        {
          phrase: 'viens voir ma nouvelle danse',
          segments: ['viens', 'vo', 'ir', 'ma', 'no', 'uvelle', 'da', 'nse'],
          chops: [
            ['no', 'vo'],
            ['ma', 'da'],
            ['pha', 'nse'],
          ],
        },
        {
          phrase: 'mes bottines sont trempées',
          segments: ['mes', 'bot', 'tines', 'sont', 'tremp', 'ées'],
          chops: [['bot', 'ées']],
        },
        {
          phrase: 'tous mes pantalons sont chauds',
          segments: ['tous', 'mes', 'pan', 'talons', 'sont', 'chauds'],
          chops: [['pan', 'ais']],
        },
      ],
    },
  },

  {
    week: 7,
    day: 3,
    name: 'Dueling Crates',
    challenge: {
      type: 'Shipping',
      packages: [
        { item: 'Casserole', labels: [Label.Fragile, Label.Perishable], suburb: Suburb['Belby'] },
        { item: 'Shark Teeth', labels: [Label.Heavy, Label.Urgent], suburb: Suburb['Belby'] },
        { item: 'Cookies', labels: [Label.Urgent, Label.Perishable], suburb: Suburb['Gumtree Grove'] },
        { item: 'Chocolate Cassowary', labels: [Label.Urgent, Label.Perishable], suburb: Suburb['Gumtree Grove'] },
        { item: 'Fish Bowl', labels: [Label.Heavy, Label.Fragile], suburb: Suburb['Lake Bessy'] },
        { item: 'Keg', labels: [Label.Heavy, Label.Perishable], suburb: Suburb['Lake Bessy'] },
        { item: 'Termite Mound', labels: [Label.Fragile, Label.Urgent], suburb: Suburb['Lake Bessy'] },
        { item: 'Tires', labels: [Label.Urgent, Label.Heavy], suburb: Suburb['Painted Cliffs'] },
        { item: 'Pudding Vat', labels: [Label.Heavy, Label.Perishable], suburb: Suburb['Painted Cliffs'] },
        { item: 'Footprint', labels: [Label.Fragile, Label.Urgent], suburb: Suburb['Painted Cliffs'] },
        { item: 'Bread', labels: [Label.Fragile, Label.Perishable], suburb: Suburb['Salty Flats'] },
        { item: 'Sea Cucumbers', labels: [Label.Fragile, Label.Heavy], suburb: Suburb['Salty Flats'] },
      ],
    },
  },

  {
    week: 7,
    day: 4,
    name: 'Switchboard Synchrony',
    challenge: {
      type: 'Telegraph',
      en: [
        'Snow day at City Hall',
        'Sat on a cinammon bun',
        'Found a huge footprint',
        'Canyon guide wanted',
        'Snowman builder for hire',
        'Frostbite feels bad',
        'Just grew my winter coat',
        'Bad case of cider burps',
        'Today I met a tiny horse',
        'My scarf is itchy',
        'Watch for falling icicles',
        'Who took all my socks',
      ],
      de: [
        'Mein Schal kratzt',
        'Apfelwein macht Rülpser',
        'Winziges Pferd getroffen',
        'Ich suche Reiseführer',
        'Wir bauen Schneemänner',
        'Saß heute auf Zimtkeks',
        'Habe Fußabdruck gefunden',
        'Schneetag im Rathaus',
        'Die Frostbeule schmerzt',
        'Mein Winterfell ist da',
        'Wer hat all meine Socken',
        'Achtung Eiszapfen fallen',
      ],

      es: [
        'El hielo no mola',
        'El abrigo me queda corto',
        'Eructos serios por sidra',
        'Bollo chafado sin querer',
        'Busco guía experto',
        'Hallada huella gigante',
        'Calzones robados',
        'Hazme un muñeco de nieve',
        'Nevada en el concejo',
        'Me pica la bufanda',
        'Peligro de resbalar',
        'Hoy he visto un pony',
      ],

      fr: [
        'La mairie dans la neige',
        'Ai vu un mini cheval',
        'Empreinte géante repérée',
        'Cherche tireur de luge',
        'Mon manteau trop petit',
        'Mon écharpe me démange',
        'Attention aux stalactites',
        'Qui a pris mes souliers',
        'Ma brioche est plate',
        'Le vin chaud me ballonne',
        'Je sens plus mes doigts',
        'Cherche guide du canyon',
      ],

      it: [
        'Ho visto uno yeti',
        'Ho comprato un cappotto',
        'Ho bruciato la torta',
        'Che brutti i geloni',
        'Cercasi pupazzo di neve',
        'Mi prude la sciarpa',
        'Mi nevica in casa',
        'Ieri sono scivolato',
        'Cioccolata calda e panna',
        'Domani Festa invernale',
        'Ladro di calzini cercasi',
        'Attenti a non scivolare',
      ],

      pt: [
        'Caso sério de arroto de cidra',
        'Quem pegou minhas meias',
        'Dia nevado na prefeitura',
        'Queimaduras de frio doem',
        'Procura-se ? (not completable as of now)',
        'Meu pelo de inverno cresceu',
        'Meu cachecol coca',
        'Hoje conheci um cavalo pequenino',
        'Me faça um boneco de neve',
        'Cuidado com os sincelos',
        'Sentei em um pao de canela',
        'Achei uma pegada enorme',
      ],
    },
  },
]

export { week7 }
