import { Level, Label, Suburb, Postcode } from '../interfaces'

const week2: Level[] = [
  {
    week: 2,
    day: 1,
    name: 'Marauding Mailflies',
    challenge: {
      type: 'Transcription',
      en: [
        { phrase: 'thief at large in belby', segments: ['thief', 'at', 'large', 'in', 'bel', 'by'] },
        { phrase: 'sprained my dang tail', segments: ['spra', 'ined', 'my', 'dang', 'tail'] },
        { phrase: 'found a pretty cool rock', segments: ['found', 'a', 'pretty', 'cool', 'rock'] },
        { phrase: 'grandma convention today', segments: ['gra', 'ndma', 'conve', 'ntion', 'today'] },
        { phrase: 'locked in my own shed', segments: ['locked', 'in', 'my', 'own', 'shed'] },
        { phrase: 'bugs ate my biscuits', segments: ['bugs', 'ate', 'my', 'bis', 'cuits'] },
        { phrase: 'gullible investors wanted', segments: ['gull', 'ible', 'inves', 'tors', 'wan', 'ted'] },
        { phrase: 'surprise party ruined', segments: ['sur', 'prise', 'party', 'rui', 'ned'] },
      ],
      it: [
        { phrase: 'festa rovinata', segments: ['fe', 'sta', 'ro', 'vi', 'na', 'ta'] },
        { phrase: 'insetti sono ovunque', segments: ['ins', 'etti', 'sono', 'ov', 'un', 'que'] },
        { phrase: 'oggi raduno delle nonne', segments: ['oggi', 'rad', 'uno', 'delle', 'non', 'ne'] },
        { phrase: 'trovato sasso molto bello', segments: ['tro', 'vato', 'sasso', 'mol', 'to', 'bello'] },
        { phrase: 'mi sono chiuso dentro', segments: ['mi', 'sono', 'chiuso', 'dentro'] },
        { phrase: 'cercasi allocco ingenuo', segments: ['cer', 'casi', 'allo', 'cco', 'inge', 'nuo'] },
        { phrase: 'ho la coda slogata', segments: ['ho', 'la', 'co', 'da', 'slo', 'gata'] },
        { phrase: 'ladro in fuga a belby', segments: ['la', 'dro', 'in', 'fuga', 'a', 'belby'] },
      ],
      de: [
        { phrase: 'party ist geplatzt', segments: ['party', 'ist', 'ge', 'pla', 'tzt'] },
        { phrase: 'sitze im shuppen fest', segments: ['sit', 'ze', 'im', 'shup', 'pen', 'fest'] },
        { phrase: 'diebstahl in belby', segments: ['dieb', 'stahl', 'in', 'bel', 'by'] },
        { phrase: 'tollen stein gefun den', segments: ['tol', 'len', 'stein', 'gefun', 'den'] },
        { phrase: 'käfer fraßen meine kekse', segments: ['käfer', 'fra', 'ßen', 'mei', 'ne', 'kekse'] },
        { phrase: 'pfote verstaucht', segments: ['pfo', 'te', 'ver', 'sta', 'ucht'] },
        { phrase: 'haute konferenz für omas', segments: ['hau', 'te', 'konfe', 'renz', 'für', 'omas'] },
        { phrase: 'naive investoren gesucht', segments: ['na','ive','inve','storen','ge','sucht'] },
      ],
      pt: [
        {phrase:'achei uma pedra bem legal',segments:['achei','uma','pedra','bem','legal']},
        {phrase:'ladrão à solta em belby',segments:['ladrão','à','solta','em','be','lby']},
        {phrase:'preso no meu galpão',segments:['preso','no','meu','galpão']},
        {phrase:'torci a minha cauda',segments:['tor','ci','a','minha','cauda']},
        {phrase:'buscando investidor credulo',segments:['bus','cando','inves','tidor','cre','dulo']},
        {phrase:'festa surpresa arruinada',segments:['festa','sur','pre','sa','arrui','nada']},
        {phrase:'Inseto comeu biscoito',segments:['Inseto','comeu','bis','coito']},
        {phrase:'convencao de vovos hoje',segments:['conven','cao','de','vo','vos','hoje']},

      ],
      es: [
        {phrase:'caco suelto en Belby',segments:['caco','sue','lto','en','Be','lby']},
        {phrase:'no quedan galletas',segments:['no','quedan','gall','etas']},
        {phrase:'fiesta sorpresa anulada',segments:['fies','ta','sor','presa','anu','lada']},
        {phrase:'me he torcida la cola',segments:['me','he','tor','cida','la','cola']},
        {phrase:'atrapado en mi corral',segments:['atra','pado','en','mi','cor','ral']},
        {phrase:'Congreso de abuelas hoy',segments:['Cong','reso','de','abu','elas','hoy']},
        {phrase:'Me encanta mi amiga roca',segments:['Me','enc','anta','mi','ami','ga','roca']},
        {phrase:'Busco inversor ingenuo',segments:['Bus','co','inver','sor','inge','nuo']},
      ],
      fr: [
        { phrase: 'coincé dans mon cocon', segments: ['coin', 'cé', 'dans', 'mon', 'coc', 'on'] },
        { phrase: 'ai trouvé caillou génial', segments: ['ai', 'trou', 'vé', 'caill', 'ou', 'génial'] },
        { phrase: 'me suis foulé la queue', segments: ['me', 'suis', 'fou', 'lé', 'la', 'queue'] },
        { phrase: 'insectes fans de gâteau', segments: ['ins', 'ectes', 'fans', 'de', 'gâteau'] },
        { phrase: 'cherches associés naïfs', segments: ['cher', 'ches', 'asso', 'ciés', 'naïfs'] },
        { phrase: 'on fête les mamies', segments: ['on', 'fê', 'te', 'les', 'ma', 'mies'] },
        { phrase: 'fête surprise gâchée', segments: ['fête', 'sur', 'prise', 'gâ', 'chée'] },
        { phrase: 'voleur en fuite à belby', segments: ['voleur', 'en', 'fuite', 'à', 'be', 'lby'] },
      ],
    },
  },
  {
    week: 2,
    day: 2,
    name: 'Covert Decoders',
    notes:'In a fresh savefile, the phrases will be the top three listed here.',
    challenge: {
      type: 'Telegraph',
      en: [
        'Please meet me at eight',
        'Leave the bundle below the bridge',
        'Who changed the password',
        'Trust your instincts Stanley',
        'Open the envelope at eleven',
        'Check out my fake mustache',
      ],
      de: [
        'Triff mich um acht',
        'Bündel unter Brücke legen',
        'Wer hat das Passwort geändert',
        'Hör aufs Bauchgefühl Stanley',
        'Brief um sieben öffnen',
        'Habe falschen Schnurrbart',
      ],
      es: [
        'Nos vemos a las ocho',
        'Deja la carta bajo el puente',
        'Han cambiado los códigos',
        'No confiéis en el mono',
        'Abrir el sobre a las once',
        'Mira mi bigote falso',
      ],
      fr: [
        'Rencard vers quatre heures',
        'Dépose le paquet sous le pont',
        'Qui a changé le code secret',
        'Suis ton instinct Stanley',
        'Ouvre la lettre avant vendredi',
        'Mate ma fausse moustache',
      ],
      it: [
        'Vediamoci alle otto',
        'Lascia il pacco sotto al ponte',
        'Chi ha cambiato la password',
        'Fidati del tuo istinto Ale',
        'Apri la busta alle dieci',
        'Ho comprato dei nuovi baffi finti',
      ],
      pt: [
        'Me encontre às oito',
        'Deixe o pacote embaixo da ponte',
        'Quem mudou a senha',
        'Confie nos seus instintos Stanley',
        'Abra o envelope às onze',
        'Saca sò moi bigode falso',
      ],
    },
  },
  {
    week: 2,
    day: 3,
    name: 'Postal Pest Problems',
    challenge: {
      type: 'Shipping',
      packages: [
        { item: 'Trilobite', recipient: '', labels: [Label.Fragile], suburb: Suburb.Belby },
        { item: 'Geode', recipient: 'Professor Kulap Dao', labels: [Label.Heavy], suburb: Suburb.Belby },
        { item: 'Dumbbell', recipient: 'Brandon Caber', labels: [Label.Heavy], suburb: Suburb['Gumtree Grove'] },
        { item: 'Fines', recipient: 'Chlorina Buckets', labels: [Label.Urgent], suburb: Suburb['Lake Bessy'] },
        { item: 'Cheese', recipient: 'Foreman Cruthers', labels: [Label.Perishable], suburb: Suburb['Painted Cliffs'] },
        { item: 'Pasta Craft', recipient: 'Selma Tam', labels: [Label.Fragile], suburb: Suburb['Salty Flats'] },
        {
          item: 'Mangoes',
          recipient: 'Bungalow Aerial Telepost Squadron',
          labels: [Label.Perishable],
          suburb: Suburb['Salty Flats'],
        },
        {
          item: 'Medicine Bottle',
          recipient: 'Bubalina Blackwood',
          labels: [Label.Urgent],
          suburb: Suburb['Salty Flats'],
        },
      ],
    },
  },
  {
    week: 2,
    day: 4,
    name: 'Vegetation Vexation',
    challenge: {
      type: 'Dropoff',
      out: [
        ['Roy Starling', '', 'S ___ N \n1___2', Postcode['Gumtree Grove'], Postcode.Belby], // gumtree grove / belby / ss
        ['Dumbor Il', 'Omar Mud', 'N S\n 1___2', Postcode['Painted Cliffs'], Postcode['Lake Bessy']], // painted cliffs / lake bessy / ss
        [undefined, 'Quelle Pencille', '', Postcode['Lake Bessy'], Postcode['Lake Bessy']], // lake bessy / lake bessy / ss
        [undefined, 'Trish Wilbur', '_N_S\n__21', Postcode['Gumtree Grove'], Postcode['Lake Bessy']], // gumtree grove / lake bessy / ss
        ['Toppins McKlusky', undefined, '_N_N\n_2_1', Postcode.Belby, Postcode.Belby], // belby / belby / ss
        ['Pam Limbo', 'Pim Limbo', 'S / S \n___21', Postcode['Painted Cliffs'], Postcode['Lake Bessy']], // painted cliffs / lake bessy / ss
      ],
    },
  },
]

export { week2 }
