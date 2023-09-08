import { Level, Label, Suburb } from '../interfaces'

const week6: Level[] = [
  {
    week: 6,
    day: 1,
    name: 'Tricks And Telegrams',
    notes: 'After a cassowary turns up, it will input its key 13 seconds later. After that, it inputs a keypress every 6 seconds',
    challenge: {
      type: 'Telegraph',
      en: [
        'Caramel stuck in teeth',
        'I think I saw a ghost',
        'Weird noise in my attic',
        'Hayrides in Gumtree Grove',
        'Costume parade in Belby',
        'Stop sending clowns',
        'Used coffin for sale',
        'Scared of the dark',
      ],
      de: [
        'Keine Clowns mehr bitte',
        'Habe Geist gesehen',
        'Habe Karamell im Kiefer',
        'Heufahrt in Gummibaumhain',
        'Angst im Dunkeln',
        'Geräusche auf Dachboden',
        'Kostümparade in Belby',
        'Alter Sarg zu verkaufen',
      ],
      es: [
        'Carnaval en Belby',
        'Me asusta lo oscuro',
        'Carros por la Arboleda',
        'Basta de payasos',
        'Se vende tumba usada',
        'Caramelo en la muela',
        'He visto un fantasma',
        'Ruido raro en el altillo',
      ],
      fr: [
        'Mon grenier grince trop',
        'Vends cercueil bon état',
        'Défilé déguisé à Belby',
        'Ai peur du noir',
        'Ai salue un fantome',
        'Promenade sous la lune',
        'Arrête avec les clowns',
        'Bonbon qui colle aux dents',
      ],
      it: [
        'Non inviare piu clown',
        'Giri in trattore gratis',
        'Ho paura del buio',
        'Ho mangiatio troppi dolci',
        'Ho visto un fantasma',
        'Bara usata in sconto',
        'Strani rumori in soffitta',
        'Dolcetto o scherzetto',
      ],

      pt: [
        'Andar de carroça em Gumtree Grove',
        'Acho que vi um fantasma',
        'Caramelo preso nos dentes',
        'Desfile de fantasias em Belby',
        'Barulho estranho no sótão',
        'Com medo do oscuro',
        'Caixão usado a venda',
        'Pare de mandar palhaços',
      ],
    },
  },

  { week: 6, day: 2, name: 'Zoey’s Tracks of Terror', challenge: { type: 'TracksOfTerror' } },

  {
    week: 6,
    day: 3,
    name: 'Casso-scary',
    challenge: {
      type: 'Transcription',
      en: [
        {
          phrase: 'these crepes are creepy',
          segments: ['these', 'cre', 'pes', 'are', 'creepy'],
          chops: [
            ['gra', 'pes'],
            ['cre', 'aks'],
          ],
        },
        {
          phrase: 'saw an invisible dude',
          segments: ['saw', 'an', 'ivis', 'ible', 'du', 'de'],
          chops: [
            ['de', 'an'],
            ['du', 'sk'],
          ],
        },
        {
          phrase: 'just heard a horrid holler',
          segments: ['just', 'heard', 'a', 'horrid', 'hol', 'ler'],
          chops: [
            ['hol', 'low'],
            ['tal', 'ler'],
          ],
        },
        {
          phrase: 'my scarecrow ran away',
          segments: ['my', 'scare', 'cr', 'ow', 'ran', 'aw', 'ay'],
          chops: [
            ['cr', 'aw'],
            ['fr', 'ay'],
          ],
        },
        {
          phrase: 'the moon winked at me',
          segments: ['the', 'mo', 'on', 'winked', 'at', 'me'],
          chops: [
            ['mo', 'me'],
            ['fo', 'on'],
          ],
        },
        {
          phrase: 'made my own mask',
          segments: ['ma', 'de', 'my', 'own', 'ma', 'sk'],
          chops: [
            ['ma', 'ma'],
            ['de', 'sk'],
          ],
        },
        {
          phrase: 'befriended a bat today',
          segments: ['be', 'friend', 'ed', 'a', 'bat', 'to', 'day'],
          chops: [
            ['ed', 'be'],
            ['to', 'mb'],
          ],
        },
        {
          phrase: 'stay out of the cellar',
          segments: ['st', 'ay', 'out', 'of', 'the', 'cellar'],
          chops: [['st', 'of'], ['gr', 'ay']],
        },
      ],
      it: [
        {
          phrase: 'non andare in cantina',
          segments: ['non', 'anda', 're', 'in', 'can', 'tina'],
          chops: [
            ['can', 'non'],
            ['re', 'in'],
          ],
        },
        {
          phrase: 'non trovo una maschera',
          segments: ['non', 'tro', 'vo', 'un', 'a', 'm', 'aschera'],
          chops: [
            ['non', 'tro'],
            ['vo', 'un'],
            ['a', 'm'],
          ],
        },
        { phrase: 'qualcuno mi segue', segments: ['qual', 'cuno', 'mi', 'se', 'gue'], chops: [['mi', 'se']] },
        {
          phrase: 'viste zucche paurose',
          segments: ['vi', 'ste', 'zuc', 'che', 'pau', 'ro', 'se'],
          chops: [
            ['ste', 'zuc'],
            ['che', 'pau'],
          ],
        },
        {
          phrase: 'la luna mi chiama',
          segments: ['la', 'lu', 'na', 'mi', 'chia', 'ma'],
          chops: [
            ['la', 'lu'],
            ['na', 'mi'],
          ],
        },
        {
          phrase: 'vendesi cappelli da strega',
          segments: ['vend', 'esi', 'cap', 'pel', 'li', 'da', 'str', 'ega'],
          chops: [
            ['esi', 'cap'],
            ['li', 'da'],
          ],
        },
        { phrase: 'cercasi gatto nero', segments: ['cerc', 'asi', 'gat', 'to', 'nero'], chops: [['asi', 'gat']] },
        {
          phrase: 'ho sentito un urlo',
          segments: ['ho', 'senti', 'to', 'un', 'ur', 'lo'],
          chops: [
            ['lo', 'to'],
            ['ur', 'be'],
          ],
        },
      ],
      de: [
        {
          phrase: 'kein zutritt zum keller',
          segments: ['ke', 'in', 'zu', 'tri', 'tt', 'zum', 'kel', 'ler'],
          chops: [
            ['ke', 'tt'],
            ['tri', 'ler'],
          ],
        },
        {
          phrase: 'die crepes sind gruselig',
          segments: ['die', 'cre', 'pes', 'sind', 'gru', 'se', 'lig'],
          chops: [
            ['gru', 'pes'],
            ['die', 'lig'],
          ],
        },
        {
          phrase: 'scheuche auf der flucht',
          segments: ['scheu', 'che', 'auf', 'der', 'flu', 'cht'],
          chops: [['flu', 'che']],
        },
        {
          phrase: 'eigene maske gemacht',
          segments: ['eig', 'ene', 'mas', 'ke', 'ge', 'ma', 'cht'],
          chops: [
            ['mas', 'che'],
            ['ma', 'ke'],
          ],
        },
        {
          phrase: 'hab fledermaus getroffen',
          segments: ['hab', 'fle', 'der', 'maus', 'ge', 'troffen'],
          chops: [
            ['ge', 'ht'],
            ['fle', 'gen'],
          ],
        },
        { phrase: 'der mond hat gelacht', segments: ['der', 'mond', 'hat', 'gel', 'acht'], chops: [['gel', 'der']] },
        {
          phrase: 'habe einen geist gesehen',
          segments: ['ha', 'be', 'einen', 'geist', 'gesehen'],
          chops: [
            ['ha', 'st'],
            ['ge', 'be'],
          ],
        },
        {
          phrase: 'lautes gezeter gehört',
          segments: ['lau', 'tes', 'geze', 'ter', 'geh', 'ört'],
          chops: [
            ['lau', 'ter'],
            ['geh', 'tes'],
          ],
        },
      ],
      pt: [
        {
          phrase: 'Esses crepes sao sinistros',
          segments: ['Esses', 'cre', 'pes', 'sao', 'sinis', 'tros'],
          chops: [['cre', 'sao']],
        },
        { phrase: 'A lua piscou pra mim', segments: ['A', 'lua', 'pis', 'cou', 'pra', 'mim'], chops: [['pra', 'cou']] },
        {
          phrase: 'Fiz amizade com um morcego',
          segments: ['Fiz', 'ami', 'zade', 'com', 'um', 'mor', 'cego'],
          chops: [['ami', 'fiz']],
        },
        {
          phrase: 'Vi um cara invisivel',
          segments: ['Vi', 'um', 'ca', 'ra', 'in', 'visi', 'vel'],
          chops: [['vi', 'ra']],
        },
        {
          phrase: 'Acabei de ouvir um grito',
          segments: ['Aca', 'bei', 'de', 'ouvir', 'um', 'gri', 'to'],
          chops: [['gri', 'aca']],
        },
        {
          phrase: 'Fiz minha propria mascara',
          segments: ['Fiz', 'minha', 'pro', 'pria', 'mas', 'cara'],
          chops: [['pro', 'fiz']],
        },
        { phrase: 'Fique longe do porao', segments: ['Fi', 'que', 'lon', 'ge', 'do', 'porao'], chops: [['fi', 'ge']] },
        {
          phrase: 'Meu espantalho fugio',
          segments: ['Meu', 'es', 'panta', 'lho', 'fu', 'gio'],
          chops: [['gui', 'lho']],
        },
      ],
      es: [
        {
          phrase: 'he visto lo invisible',
          segments: ['he', 'vis', 'to', 'lo', 'invi', 'sible'],
          chops: [
            ['he', 'lo'],
            ['vis', 'ado'],
          ],
        },
        {
          phrase: 'ya tengo una careta',
          segments: ['ya', 'ten', 'go', 'una', 'ca', 're', 'ta'],
          chops: [
            ['go', 'ya'],
            ['ca', 'ta'],
          ],
        },
        {
          phrase: 'esas galletas dan miedo',
          segments: ['es', 'as', 'gall', 'etas', 'dan', 'mie', 'do'],
          chops: [
            ['as', 'es'],
            ['mie', 'dan'],
          ],
        },
        {
          phrase: 'rata peligrosa fugada',
          segments: ['ra', 'ta', 'pelig', 'rosa', 'fu', 'ga', 'da'],
          chops: [
            ['ga', 'ta'],
            ['da', 'ra'],
          ],
        },
        {
          phrase: 'esa tarta me llama',
          segments: ['esa', 'tar', 'ta', 'me', 'lla', 'ma'],
          chops: [['me', 'ma']],
        },
        {
          phrase: 'las estrellas me miran',
          segments: ['las', 'es', 'tre', 'llas', 'me', 'mi', 'ran'],
          chops: [
            ['las', 'tre'],
            ['mi', 'me'],
          ],
        },
        {
          phrase: 'no vaya al trastero',
          segments: ['no', 'va', 'ya', 'al', 'tras', 'te', 'ro'],
          chops: [
            ['va', 'ro'],
            ['ya', 'te'],
          ],
        },
        {
          phrase: 'alguien ha gritado',
          segments: ['al', 'gui', 'en', 'ha', 'gritado'], // CHECK - should this be split?
          chops: [
            ['gui', 'gri'],
            ['ha', 'do'],
          ],
        },
      ],
      fr: [
        { phrase: 'approche pas la cave', segments: ['approche', 'pas', 'la', 'cave'], chops: [['app', 'pas']] },
        {
          phrase: 'masque fait main',
          segments: ['mas', 'que', 'fait', 'main'],
          chops: [
            ['mas', 'tic'],
            ['vas', 'que'],
          ],
        },
        { phrase: 'ai vu gars invisible', segments: ['ai', 'vu', 'gars', 'invisible'], chops: [['re', 'vu']] },
        {
          phrase: 'envie de crêpes',
          segments: ['envie', 'de', 'crê', 'pes'],
          chops: [
            ['crê', 'tes'],
            ['sal', 'pes'],
          ],
        },
        {
          phrase: 'mec en paille en fuite',
          segments: ['mec', 'en', 'pai', 'lle', 'en', 'fui', 'te'],
          chops: [
            ['fui', 'lle'],
            ['en', 'te'],
          ],
        },
        {
          phrase: 'ai bronzé avec vampire',
          segments: ['ai', 'bron', 'zé', 'avec', 'vam', 'pire'],
          chops: [['ai', 'ze']],
        },
        {
          phrase: 'entendu cri effrayant roitelet',
          segments: ['en', 'tendu', 'cri', 'eff', 'rayant', 'roi', 'telet'],
          chops: [['eff', 'roi']],
        },
        {
          phrase: 'la lune sourit',
          segments: ['la', 'lu', 'ne', 'sou', 'rit'],
          chops: [
            ['lu', 'la'],
            ['sou', 'pir'],
          ],
        },
      ],
    },
  },

  {
    week: 6,
    day: 4,
    name: 'Mail From Beyond',
    challenge: {
      type: 'Shipping',
      packages: [
        { item: 'Roast Chicken + Fork', labels: [Label.Fragile, Label.Perishable], suburb: Suburb["Potter's Field"] },
        { item: 'Gramophone + Sheet Music', labels: [Label.Heavy, Label.Fragile], suburb: Suburb["Potter's Field"] },
        { item: 'Witch Hat + Fig', labels: [Label.Fragile, Label.Urgent], suburb: Suburb['Thornwood Thicket'] },
        {
          item: 'Tomatoes + Clippers',
          labels: [Label.Heavy, Label.Perishable],
          suburb: Suburb['Thornwood Thicket'],
        },
        { item: 'Anchor + Rose', labels: [Label.Heavy, Label.Urgent], suburb: Suburb['Loch Bess'] },
        { item: 'Jack-in-the-box + Key', labels: [Label.Urgent, Label.Fragile], suburb: Suburb['Ribcage Rock'] },
        { item: 'Camera + Film', labels: [Label.Fragile, Label.Heavy], suburb: Suburb['Ribcage Rock'] },
        { item: 'Pumpkin + Carrot', labels: [Label.Perishable, Label.Urgent], suburb: Suburb['Desperation'] },
      ],
    },
  },
]

export { week6 }
