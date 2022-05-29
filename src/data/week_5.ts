import { Level, Label, Suburb, Postcode } from '../interfaces'

const week5: Level[] = [
  {
    week: 5,
    day: 1,
    name: 'The Night Post',
    challenge: {
      type: 'Transcription',
      en: [
        {
          phrase: 'forgot the secret handshake',
          segments: ['for', 'got', 'the', 'sec', 'ret', 'hand', 'shake'],
          chops: [
            ['for', 'mat'],
            ['fer', 'ret'],
            ['sec', 'ond'],
          ],
        },
        {
          phrase: 'i brought sneaky snacks',
          segments: ['i', 'bro', 'ught', 'sneaky', 'sna', 'cks'],
          chops: [
            ['sna', 'kes'],
            ['flo', 'cks'],
          ],
        },
        { phrase: 'think someone saw me', segments: ['think', 'so', 'me', 'one', 'saw', 'me'], chops: [['me', 'me']] },
        {
          phrase: 'meet at the quarry',
          segments: ['me', 'et', 'at', 'the', 'qu', 'arry'],
          chops: [
            ['me', 'at'],
            ['qu', 'et'],
          ],
        },
        {
          phrase: 'strange lights in the sky',
          segments: ['st', 'range', 'lights', 'in', 'the', 'sky'],
          chops: [['st', 'in']],
        },
        {
          phrase: 'stay in disguise',
          segments: ['st', 'ay', 'in', 'dis', 'guise'],
          chops: [
            ['st', 'un'],
            ['pl', 'ay'],
          ],
        },
        {
          phrase: 'the crow has landed',
          segments: ['the', 'cr', 'ow', 'has', 'lan', 'ded '],
          chops: [
            ['cr', 'ib'],
            ['sl', 'ow'],
          ],
        },
        {
          phrase: 'we need code names',
          segments: ['we', 'ne', 'ed', 'co', 'de', 'names '],
          chops: [
            ['co', 'ne'],
            ['de', 'ed'],
          ],
        },
      ],
      it: [
        {
          phrase: 'porta merenda non sospetta',
          segments: ['po', 'rta', 'mer', 'enda', 'non', 'sos', 'petta'],
          chops: [
            ['rta', 'mer'],
            ['non', 'sos'],
          ],
        },
        {
          phrase: 'ho scordato la password',
          segments: ['ho', 'sc', 'orda', 'to', 'la', 'pass', 'word'],
          chops: [
            ['ho', 'sc'],
            ['to', 'la'],
          ],
        },
        {
          phrase: 'non farti scoprire',
          segments: ['non', 'far', 'ti', 'sc', 'oprire'],
          chops: [
            ['non', 'far'],
            ['ti', 'sc'],
          ],
        },
        {
          phrase: 'strane luci nel ceilo',
          segments: ['stra', 'ne', 'lu', 'ci', 'nel', 'cei', 'lo'],
          chops: [
            ['lu', 'ne'],
            ['nel', 'cei'],
          ],
        },
        {
          phrase: 'servono nomi in codice',
          segments: ['servo', 'no', 'no', 'mi', 'in', 'co', 'dice'],
          chops: [
            ['in', 'no'],
            ['mi', 'co'],
          ],
        },
        {
          phrase: 'qualcuno mi ha visto',
          segments: ['qual', 'cuno', 'mi', 'ha', 'vist', 'o'],
          chops: [['mi', 'ha']],
        },
        {
          phrase: 'il corvo è atterrato',
          segments: ['il', 'cor', 'vo', 'è', 'atte', 'rrato'],
          chops: [
            ['il', 'vo'],
          ],
        },
        {
          phrase: 'ci vediamo dove sai',
          segments: ['ci', 've', 'di', 'amo', 'dov', 'e', 's', 'ai'],
          chops: [
            ['ci', 've'],
            ['amo', 'dov'],
            ['e', 's'],
          ],
        },
      ],

      de: [
        {
          phrase: 'wir brauchen decknamen',
          segments: ['wir', 'brau', 'chen', 'deck', 'na', 'men'],
          chops: [['wir', 'men']],
        },
        {
          phrase: 'habe süßes geklaut',
          segments: ['ha', 'be', 'sü', 'ßes', 'ge', 'klaut'],
          chops: [
            ['ha', 'ge'],
            ['ge', 'be'],
          ],
        },
        {
          phrase: 'jemand hat mich gesehen',
          segments: ['jemand', 'hat', 'mich', 'ge', 'seh', 'en'],
          chops: [['seh', 'end']],
        },
        {
          phrase: 'die krähe ist gelandet',
          segments: ['die', 'krä', 'he', 'ist', 'ge', 'landet'],
          chops: [
            ['die', 'ist'],
            ['ge', 'he'],
          ],
        },
        {
          phrase: 'treffen im steinbruch',
          segments: ['tre', 'ffen', 'im', 'stein', 'bruch'],
          chops: [
            ['tre', 'ten'],
            ['he', 'im'],
          ],
        },
        {
          phrase: 'wunderlichter am himmel',
          segments: ['wun', 'der', 'lichter', 'am', 'him', 'mel'],
          chops: [['der', 'mel']],
        },
        {
          phrase: 'geheimgruß vergessen',
          segments: ['geh', 'eim', 'gruß', 'ver', 'ges', 'sen'],
          chops: [['ver', 'geh']],
        },
        {
          phrase: 'bleib in verkleidung',
          segments: ['bleib', 'in', 'verkl', 'eid', 'ung'],
          chops: [['ung', 'eid']],
        },
      ],
      pt: [
        {
          phrase: 'Esqueci o aperto de mao',
          segments: ['Esque', 'ci', 'o', 'aper', 'to', 'de', 'mao'],
          chops: [['to', 'ci']],
        },
        { phrase: 'O corvo pousou', segments: ['O', 'cor', 'vo', 'pou', 'sou'], chops: [['cor', 'pou']] },
        { phrase: 'Eu trouxe petiscos', segments: ['Eu', 'tro', 'uxe', 'petis', 'cos'], chops: [['cos', 'uxe']] },
        { phrase: 'Reuniao na pedreira', segments: ['Reuni', 'ao', 'na', 'pedrei', 'ra'], chops: [['ra', 'ao']] },
        { phrase: 'Fique disfarcado', segments: ['Fi', 'que', 'dis', 'far', 'cado'], chops: [['dis', 'que']] },
        {
          phrase: 'Acho que alguem me viu',
          segments: ['A', 'cho', 'que', 'alguem', 'me', 'viu'],
          chops: [['cho', 'viu']],
        },
        {
          phrase: 'Precisamos de codinomes',
          segments: ['Precisa', 'mos', 'de', 'codino', 'mes'],
          chops: [['mes', 'mos']],
        },
        {
          phrase: 'Luzes estrenhas no ceu',
          segments: ['Luz', 'es', 'estre', 'nhas', 'no', 'ceu'],
          chops: [['es', 'no']],
        },
      ],
      es: [
        {
          phrase: 'Quedada en la cantera',
          segments: ['Que', 'dada', 'en', 'la', 'can', 'te', 'ra'],
          chops: [
            ['can', 'que'],
            ['en', 'te'],
          ],
        },
        {
          phrase: 'Cuervo en el nido',
          segments: ['Cuer', 'vo', 'en', 'el', 'ni', 'do'],
          chops: [
            ['do', 'vo'],
            ['ni', 'el'],
          ],
        },
        { phrase: 'Necesito otro alias', segments: ['Ne', 'ces', 'ito', 'ot', 'ro', 'alias'], chops: [['ne', 'ro']] },
        {
          phrase: 'Nos han pillado',
          segments: ['Nos', 'han', 'pi', 'lla', 'do'],
          chops: [
            ['lla', 'nos'],
            ['pi', 'do'],
          ],
        },
        {
          phrase: 'No te delates',
          segments: ['No', 'te', 'de', 'la', 'tes'],
          chops: [
            ['no', 'de'],
            ['te', 'la'],
          ],
        },
        { phrase: 'Codigo olvidado', segments: ['Co', 'digo', 'olvida', 'do'], chops: [['co', 'do']] },
        {
          phrase: 'Traigo picoteo picante',
          segments: ['Trai', 'go', 'pico', 'teo', 'pic', 'an', 'te'],
          chops: [
            ['go', 'te'],
            ['teo', 'pic'],
          ],
        },
        {
          phrase: 'Luces raras en el cielo',
          segments: ['Lu', 'ces', 'ra', 'ras', 'en', 'el', 'cie', 'lo'],
          chops: [
            ['el', 'en'],
            ['cie', 'ces'],
            ['ra', 'lo'],
          ],
        },
      ],
      fr: [
        { phrase: 'reste déguisé', segments: ['re', 'ste', 'dég', 'uisé'], chops: [['re', 'lu']] },
        {
          phrase: 'ai adopté une taupe',
          segments: ['ai', 'ado', 'ubé', 'une', 'taupe'],
          chops: [
            ['ado', 'upe'],
            ['cry', 'pté'],
          ],
        },
        {
          phrase: 'faut des noms de code',
          segments: ['faut', 'des', 'noms', 'de', 'co', 'de'],
          chops: [
            ['fa', 'de'],
            ['co', 'ut'],
          ],
        },
        {
          phrase: 'étranges lumières célestes',
          segments: ['étr', 'anges', 'lu', 'mières', 'cé', 'lestes'],
          chops: [
            ['étr', 'oit'],
            ['lu', 'cé'],
          ],
        },
        {
          phrase: 'salut secret oublié',
          segments: ['salut', 'sec', 'ret', 'oublié'],
          chops: [
            ['sec', 'ond'],
            ['ret', 'our'],
          ],
        },
        { phrase: 'je suis repéré', segments: ['je', 'suis', 're', 'péré'], chops: [['re', 'pu']] },
        { phrase: 'le corbeau atterrit', segments: ['le', 'cor', 'beau', 'atter', 'rit'], chops: [['cor', 'ail']] },
        {
          phrase: 'ren|card dans la ca|rrière',
          segments: ['ren', 'card', 'dans', 'la', 'ca', 'rrière'],
          chops: [
            ['ren', 'dus'],
            ['la', 'ca'],
          ],
        },
      ],
    },
  },

  {
    week: 5,
    day: 2,
    name: 'Electrical interference ',
    challenge: {
      type: 'Telegraph',
      en: [
        'Jerboa Road detour',
        'Kites discouraged',
        'Lightning struck my lunch',
        'Scared of thunder',
        'Evacuate low areas',
        'Rising water reported',
        'Get to high ground',
        'My hat blew away',
      ],
      de: [
        'Tiefe Bereiche räumen',
        'Mahl von Blitz getroffen',
        'Hut fortgeflogen',
        'Angst vor Donner',
        'Achtung heute Flutgefahr',
        'Fluten gemeldet',
        'Umleitung Jerboa',
        'Heute Drachen verboten',
      ],
      es: [
        'Alerta los gorros vuellan',
        'Han quemado mi comida',
        'Me aterran los rayos',
        'Evacuar zonas bajas',
        'Ve a terreno elevado',
        'Cometas prohibidas',
        'Subida nivel del mar',
        'Desvío en calle Jerboa',
      ],
      fr: [
        'Sors ton parafoudre',
        'Mon chapeau envolé',
        'Mon repas est carbonisé',
        'Évite les zones plates',
        'Rivière en crue ',
        'Ai peur des éclairs',
        'Traîne pas sous arbres',
        'Sur route des gerboises',
      ],
      it: [
        'Vola via tutto',
        'Evacuare le zone basse',
        'Vie Ranocchi allagata',
        'Ho raggiunto la vetta',
        'Ho paura dei fulmini',
        'Colpito da un fulmine',
        'Niente aquiloni',
        'Segnalata alta marea',
      ],
      pt: [
        'Relâmpago acertou meu almoço',
        'Vão para um lugar alto',
        'Com medo de trovao',
        'Desvio Estrada Jerboa',
        'Pipas desencorajadas',
        'Evacuem as areas baixas',
        'Alerta de enchente',
        'O vento levou meu chapéu',
      ],
    },
  },

  {
    week: 5,
    day: 3,
    name: 'Bobbing For Boxes',
    challenge: {
      type: 'BobbingForBoxes',
      puzzles: [
        {
          letters: [Postcode.Belby, Postcode['Gumtree Grove'], Postcode['Lake Bessy']],
          puzzle: [
            ['junk', 'junk', 'parcel'],
            ['junk', 'junk', 'junk'],
            ['junk', 'junk', 'parcel'],
          ],
        },
        {
          letters: [Postcode['Painted Cliffs'], Postcode['Painted Cliffs'], Postcode['Painted Cliffs']],
          puzzle: [
            ['junk', 'junk', 'junk'],
            ['junk', 'parcel', 'junk'],
            ['empty', 'junk', 'junk'],
          ],
        },
        {
          letters: [Postcode['Gumtree Grove'], Postcode['Lake Bessy'], Postcode['Painted Cliffs']],
          puzzle: [
            ['junk', 'junk', 'junk'],
            ['junk', 'empty', 'junk'],
            ['parcel', 'junk', 'junk'],
          ],
        },
        {
          letters: [Postcode['Gumtree Grove'], Postcode['Gumtree Grove'], Postcode['Lake Bessy']],
          puzzle: [
            ['parcel', 'junk', 'parcel'],
            ['junk', 'junk', 'junk'],
            ['parcel', 'empty', 'parcel'],
          ],
        },
        {
          letters: [Postcode['Belby'], Postcode['Gumtree Grove'], Postcode['Lake Bessy'], Postcode['Painted Cliffs']],
          puzzle: [
            ['junk', 'junk', 'junk'],
            ['parcel', 'parcel', 'parcel'],
            ['empty', 'empty', 'empty'],
          ],
        },
        {
          letters: [Postcode['Belby'], Postcode['Gumtree Grove'], Postcode['Lake Bessy'], Postcode['Lake Bessy']],
          puzzle: [
            ['parcel', 'junk', 'empty'],
            ['parcel', 'junk', 'empty'],
            ['parcel', 'junk', 'empty'],
          ],
        },
        {
          letters: [Postcode.Belby, Postcode['Gumtree Grove'], Postcode['Painted Cliffs']],
          puzzle: [
            ['parcel', 'empty', 'junk'],
            ['empty', 'junk', 'junk'],
            ['junk', 'empty', 'parcel'],
          ],
        },
        {
          // prettier-ignore
          letters: [ Postcode['Gumtree Grove'], Postcode['Lake Bessy'], Postcode['Lake Bessy'],Postcode['Painted Cliffs'],  ],
          puzzle: [
            ['parcel', 'junk', 'parcel'],
            ['empty', 'junk', 'empty'],
            ['empty', 'parcel', 'empty'],
          ],
        },
      ],
    },
  },
  {
    week: 5,
    day: 4,
    name: 'Mechanical Mayhem',
    challenge: {
      type: 'Shipping',
      packages: [
        { item: 'Grandfather Clock', labels: [Label.Fragile, Label.Heavy], suburb: Suburb.Belby },
        { item: 'Fulgurite', labels: [Label.Fragile, Label.Heavy], suburb: Suburb.Belby },
        { item: 'Meteorite', labels: [Label.Heavy, Label.Urgent], suburb: Suburb.Belby },
        { item: 'Egg', labels: [Label.Fragile, Label.Urgent], suburb: Suburb['Gumtree Grove'] },
        { item: 'Chili Pot', labels: [Label.Heavy, Label.Perishable], suburb: Suburb['Gumtree Grove'] },
        { item: 'Wedding Cake', labels: [Label.Perishable, Label.Urgent], suburb: Suburb['Gumtree Grove'] },
        { item: 'Contraption', labels: [Label.Fragile, Label.Heavy], suburb: Suburb['Painted Cliffs'] },
        { item: 'Pavlova', labels: [Label.Fragile, Label.Perishable], suburb: Suburb['Salty Flats'] },
      ],
    },
  },
]

export { week5 }
