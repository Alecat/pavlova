import { Level, Label, Suburb, Postcode } from '../interfaces'

const week4: Level[] = [
  {
    week: 4,
    day: 1,
    name: 'Shipping Shake-up',
    challenge: {
      type: 'Shipping',
      packages: [
        { item: 'Fossil Crate', labels: [Label.Fragile, Label.Heavy], suburb: Suburb.Belby },
        { item: 'Glasses', labels: [Label.Fragile, Label.Urgent], suburb: Suburb.Belby },
        { item: 'Hot Sauce', labels: [Label.Fragile, Label.Urgent], suburb: Suburb['Gumtree Grove'] },
        { item: 'Pumpkin', labels: [Label.Heavy, Label.Perishable], suburb: Suburb['Lake Bessy'] },
        { item: 'Gas Can', labels: [Label.Heavy, Label.Urgent], suburb: Suburb['Lake Bessy'] },
        { item: 'Figs', labels: [Label.Fragile, Label.Perishable], suburb: Suburb['Painted Cliffs'] },
        { item: 'Leaves', labels: [Label.Fragile, Label.Urgent], suburb: Suburb['Salty Flats'] },
      ],
    },
  },

  {
    week: 4,
    day: 2,
    name: 'Transcription Turmoil',
    challenge: {
      type: 'Transcription',
      en: [
        {
          phrase: 'going hiking with jimbo',
          segments: ['going', 'hik', 'ing', 'wi', 'th', 'jim', 'bo'],
          chops: [
            ['wi', 'nd'],
            ['bo', 'th'],
          ],
        },
        {
          phrase: 'stepped in poison ivy',
          segments: ['step', 'ped', 'in', 'poi', 'son', 'ivy'],
          chops: [
            ['poi', 'nts'],
            ['per', 'son'],
          ],
        },
        {
          phrase: 'put campfires out safely',
          segments: ['put', 'camp', 'fires', 'out', 'saf', 'ely'],
          chops: [
            ['saf', 'ety'],
            ['fre', 'ely'],
          ],
        },
        {
          phrase: 'hyena stole my pies',
          segments: ['hyena', 'sto', 'le', 'my', 'pi', 'es'],
          chops: [
            ['pi', 'le'],
            ['be', 'es'],
          ],
        },
        {
          phrase: 'who squashed my gourds',
          segments: ['who', 'squa', 'shed', 'my', 'gou', 'rds'],
          chops: [
            ['gou', 'das'],
            ['cha', 'rds'],
          ],
        },
        {
          phrase: 'harvest festival tomorrow',
          segments: ['har', 'vest', 'fest', 'ival', 'tom', 'or', 'row'],
          chops: [['har', 'row']],
        },
        {
          phrase: 'alpaca sweaters for sale',
          segments: ['al', 'pa', 'ca', 'sweat', 'ters', 'for', 'sa', 'le'],
          chops: [
            ['pa', 'le'],
            ['ca', 'sa'],
          ],
        },
      ],
      it: [
        {
          phrase: 'siate sempre gentili',
          segments: ['si', 'ate', 'sem', 'pre', 'gen', 'tili'],
          chops: [
            ['ate', 'sem'],
            ['pre', 'gen'],
          ],
        },
        {
          phrase: 'cercasi ladro di torte',
          segments: ['cerc', 'asi', 'lad', 'ro', 'di', 'torte'],
          chops: [
            ['asi', 'lad'],
            ['ro', 'di'],
          ],
        },
        {
          phrase: 'vado in montagna',
          segments: ['vado', 'in', 'mo', 'ntag', 'na'],
          chops: [['in', 'mo']],
        },
        {
          phrase: 'domani festa del raccolto',
          segments: ['doma', 'ni', 'fe', 'sta', 'del', 'ra', 'ccol', 'to'],
          chops: [
            ['ni', 'fe'],
            ['sta', 'del'],
          ],
        },
        {
          phrase: 'vendesi maglioni di lama',
          segments: ['vende', 'si', 'ma', 'glio', 'ni', 'di', 'lama'],
          chops: [
            ['si', 'ma'],
            ['ni', 'di'],
          ],
        },
        {
          phrase: 'stasera zuppa di zucca',
          segments: ['stas', 'era', 'zup', 'pa', 'di', 'zu', 'cca'],
          chops: [
            ['di', 'zu'],
            ['era', 'zup'],
          ],
        },
        {
          phrase: 'non toccare le ortiche',
          segments: ['non', 'toc', 'ca', 're', 'le', 'orti', 'che'],
          chops: [
            ['non', 'toc'],
            ['re', 'le'],
          ],
        },
      ],
      de: [
        {
          phrase: 'wandern mit vanessa',
          segments: ['wan', 'dern', 'mit', 'va', 'nes', 'sa'],
          chops: [
            ['mit', 'nes'],
            ['va', 'sa'],
          ],
        },
        {
          phrase: 'lagerfeuer richtig löschen',
          segments: ['la', 'ger', 'feuer', 'rich', 'tig', 'lösch', 'en'],
          chops: [
            ['la', 'ma'],
            ['tig', 'ger'],
          ],
        },
        {
          phrase: 'hyäne hat kuchen geklaut',
          segments: ['hyäne', 'hat', 'ku', 'chen', 'ge', 'klaut'],
          chops: [['ku', 'ge']],
        },
        {
          phrase: 'wer zerhaut meine kürbisse',
          segments: ['wer', 'zer', 'haut', 'mei', 'ne', 'kür', 'bis', 'se'],
          chops: [
            ['wer', 'bis'],
            ['kür', 'zer'],
            ['ne', 'se'],
          ],
        },
        {
          phrase: 'morgen erntefest',
          segments: ['mor', 'gen', 'ern', 'tef', 'est'],
          chops: [
            ['mor', 'tef'],
            ['ern', 'gen'],
          ],
        },
        {
          phrase: 'wollpullis zu verkaufen',
          segments: ['woll', 'pul', 'lis', 'zu', 'ver', 'kaufen'],
          chops: [
            ['pul', 'ver'],
          ],
        },
        {
          phrase: 'in giftefeu getreten',
          segments: ['in', 'gi', 'ft', 'efeu', 'getr','eten'],
          chops: [
            ['in', 'gi'],
          ],
        },
      ],
      pt: [
        {
          phrase: 'Pisei em hera venenosa',
          segments: ['Pi', 'sei', 'em', 'hera', 'veneno', 'sa'],
          chops: [['sa', 'em']],
        },
        {
          phrase: 'Sueter de alpaca a venda',
          segments: ['Sueter', 'de', 'al', 'paca', 'a', 'ven', 'da'],
          chops: [['al', 'da']],
        },
        {
          phrase: 'Hiena roubou minhas tortas',
          segments: ['Hie', 'na', 'rou', 'bou', 'minhas', 'tortas'],
          chops: [['hie', 'bou']],
        },
        {
          phrase: 'Festival da colheita amanha',
          segments: ['Fest', 'ival', 'da', 'colhe', 'ita', 'ama', 'nha'],
          chops: [['ama', 'ita']],
        },
        {
          phrase: 'Quem esmagou as aboboras',
          segments: ['Quem', 'esma', 'gou', 'as', 'abobo', 'ras'],
          chops: [['ras', 'gou']],
        },
        {
          phrase: 'Apague fogueiras com cuidado',
          segments: ['Apague', 'fogu', 'eiras', 'com', 'cuid', 'ado'],
          chops: [['com', 'ado']],
        },
        { phrase: 'Caminhando com Jimbo', segments: ['Cami', 'nhan', 'do', 'com', 'Jim', 'bo'], chops: [['do', 'bo']] },
      ],
      es: [
        {
          phrase: 'Quiero mi calabaza',
          segments: ['Quie', 'ro', 'mi', 'cala', 'ba', 'za'],
          chops: [
            ['mi', 'ba'],
            ['ro', 'za'],
          ],
        },
        {
          phrase: 'No hagas hogueras',
          segments: ['No', 'ha', 'gas', 'ho', 'gue', 'ras'],
          chops: [
            ['ras', 'gas'],
            ['no', 'ho'],
          ],
        },
        {
          phrase: 'Vendo sudadera bonita',
          segments: ['Ven', 'do', 'suda', 'de', 'ra', 'boni', 'ta'],
          chops: [
            ['ra', 'ta'],
            ['do', 'de'],
          ],
        },
        {
          phrase: 'Festival agrario hoy',
          segments: ['Fest', 'iv', 'al', 'ag', 'ra', 'rio', 'hoy'],
          chops: [
            ['iv', 'ra'],
            ['hoy', 'rio'],
          ],
        },
        {
          phrase: 'He pisado una ortiga',
          segments: ['He', 'pi', 'sa', 'do', 'una', 'orti', 'ga'],
          chops: [
            ['pi', 'do'],
            ['sa', 'ga'],
          ],
        },
        {
          phrase: 'Pasteles robados',
          segments: ['Pas', 'te', 'les', 'ro', 'ba', 'dos'],
          chops: [
            ['pas', 'dos'],
            ['ba', 'te'],
          ],
        },
        {
          phrase: 'Hoy vamos de paseo',
          segments: ['Hoy', 'va', 'mos', 'de', 'pa', 'seo'],
          chops: [
            ['mos', 'seo'],
            ['pa', 'va'],
          ],
        },
      ],
      fr: [
        {
          phrase: 'hyène croqueuse de tartes',
          segments: ['hy', 'ène', 'cro', 'queuse', 'de', 'tar', 'tes'],
          chops: [
            ['hy', 'lo'],
            ['ène', 'cro'],
          ],
        },
        {
          phrase: 'en randonnée avec jimbo',
          segments: ['en', 'rando', 'nnée', 'av', 'ec', 'jimbo'],
          chops: [
            ['av', 'al'],
            ['bo', 'ec'],
          ],
        },
        {
          phrase: 'surveillez vos barbecues',
          segments: ['sur', 'veil', 'lez', 'vos', 'barbe', 'cues'],
          chops: [
            ['sur', 'vet'],
            ['poi', 'lez'],
          ],
        },
        {
          phrase: 'cherche nouvelle gourde',
          segments: ['cher', 'che', 'nou', 'velle', 'gourde'],
          chops: [
            ['gou', 'das'],
            ['nou', 'rde'],
          ],
        },
        {
          phrase: 'carnaval demain matin',
          segments: ['carna', 'val', 'de', 'main', 'ma', 'tin'],
          chops: [
            ['car', 'val'],
            ['na', 'de'],
          ],
        },
        { phrase: 'cède pull en alpaga', segments: ['cède', 'pull', 'en', 'al', 'paga'], chops: [['en', 'al']] },
        {
          phrase: 'poil à gratter trouvé',
          segments: ['poil', 'à', 'gra', 'tter', 'trou', 'vé'],
          chops: [['vé', 'lo']],
        },
      ],
    },
  },

  {
    week: 4,
    day: 3,
    name: 'Keyboard Commotion',
    challenge: {
      type: 'Telegraph',
      en: [
        'Need engine jump',
        'Wear your coat Todd',
        'Blood drive tomorrow',
        'Library books returned',
        'Stop raking my leaves',
        'Ginger tarts for auction',
        'Cellar door stuck',
        'Visit the Fungus Farm',
      ],
      de: [
        'Ingwerkekse zu verkaufen',
        'Kellertür klemmt',
        'Nicht mein Laub rechen',
        'Mantel anziehen Todd',
        'Morgen Blutspende',
        'Bücher zurückgebracht',
        'Brauche Starthilfe',
        'Besucht die Pilzfarm',
      ],
      es: [
        'Atrapado en el trastero',
        'Empieza a refrescar',
        'Libros devueltos',
        'Tartas a subasta',
        'No barras mis hojas',
        'Mi batería ha muerto',
        'Ponte el abrigo Todd',
        'Nueva granja de hongos',
      ],
      fr: [
        'Ratisse pas mes feuilles',
        'Don du sang demain',
        'Ferme champi nous attend',
        'Ai rendu livres médiathèque',
        'Besoin machine à sauter',
        'Porte de cave Bloquée',
        'Mets ton manteau Todd',
        'Tartes tatin aux enchères',
      ],
      it: [
        'Domani donate il sangue',
        'Domani asta di biscotti',
        'Todd metti la giacca',
        'Porta di casa bloccata',
        'Mi serve una spinta',
        'Visita la Fattoria Fungo',
        'Pericolo caduta foglie',
        'Lunedì biblioteca chiusa',
      ],
      pt: [
        'Pare de limpar minhas folhas',
        'Leilão de tortas de gengibre',
        'Porta do porão emperrada',
        'Preciso ajuda com motor',
        'Use seu casaco Todd',
        'Visite a Fazenda dos Fungos',
        'Livros da biblioteca devolvidos',
        'Doação de sangue amanhã',
      ],
    },
  },
  {
    week: 4,
    day: 4,
    name: 'Parcel Panel Puzzle',
    challenge: {
      type: 'Dropoff',
      out: [
        [
          'Fenton Funchins',
          undefined,
          `
S   N
__ __
 1 2 `,
          Postcode['Gumtree Grove'],
          Postcode['Painted Cliffs'],
        ],
        ['Harris Jumol', 'Jamaal Harris', '', Postcode.Belby, Postcode['Painted Cliffs']],
        ['Tina Bitters', 'Mike Saturno', '', Postcode.Belby, Postcode['Lake Bessy']],
        ['Dash Nova', 'Terryl Whitlatch', '', Postcode['Painted Cliffs'], Postcode['Lake Bessy']],
        ['Lowtide Lambert', 'Milt Mustard', '', Postcode.Belby, Postcode.Belby],
        ['Ted Billups', undefined, '', Postcode['Gumtree Grove'], Postcode['Gumtree Grove']],
        // These really do have no IN letters
        [undefined, 'Sid Sourdough'],
        ['Clarinetta Clemens', undefined],
      ],
    },
  },
]

export { week4 }
