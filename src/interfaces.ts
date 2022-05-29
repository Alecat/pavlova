type Level = {
  name: string
  week: number
  day: number
  challenge:
    | Telegraph
    | Transcription
    | Shipping
    | Dropoff
    | PartsAndCrafts
    | BungalowBakeoff
    | EmergencyRelief
    | StandYourPost
    | TracksOfTerror
    | BobbingForBoxes
  notes?: string
  collectible?: boolean
}

enum Postcode {
  Belby = 4162,
  'Gumtree Grove' = 3562,
  'Lake Bessy' = 2241,
  'Painted Cliffs' = 6243,
  'Salty Flats' = 5113,
  "Potter's Field" = 6512,
  'Thornwood Thicket' = 4532,
  'Loch Bess' = 5261,
  'Ribcage Rock' = 1141,
  Desperation = 2343,
}

type Suburb = {
  name: sname
  postcode: Postcode
  direction: 'North' | 'South'
  color: string
}

type sname =
  | 'Belby'
  | 'Painted Cliffs'
  | 'Gumtree Grove'
  | 'Lake Bessy'
  | 'Salty Flats'
  | "Potter's Field"
  | 'Thornwood Thicket'
  | 'Loch Bess'
  | 'Ribcage Rock'
  | 'Desperation'

const LanguageLabels = {
  en: '🇺🇸 English',
  it: '🇮🇹 Italiano',
  de: '🇩🇪 Deutsch',
  es: '🇪🇸 Español',
  fr: '🇫🇷 Français',
  pt: '🇵🇹 Português',
}

type Language = keyof typeof LanguageLabels

const Suburb: {
  [k in sname]: Suburb
} = {
  Belby: { name: 'Belby', postcode: 4162, direction: 'North', color: '#9a189c' },
  'Gumtree Grove': { name: 'Gumtree Grove', postcode: 3562, direction: 'North', color: '#35b16b' },
  'Lake Bessy': { name: 'Lake Bessy', postcode: 2241, direction: 'North', color: '#087efb' },
  'Painted Cliffs': { name: 'Painted Cliffs', postcode: 6243, direction: 'South', color: '#ff6a00' },
  'Salty Flats': { name: 'Salty Flats', postcode: 5113, direction: 'South', color: '#b42121' },
  "Potter's Field": { name: "Potter's Field", postcode: 6512, direction: 'North', color: '#9a189c' },
  'Thornwood Thicket': { name: 'Thornwood Thicket', postcode: 4532, direction: 'North', color: '#35b16b' },
  'Loch Bess': { name: 'Loch Bess', postcode: 5261, direction: 'North', color: '#087efb' },
  'Ribcage Rock': { name: 'Ribcage Rock', postcode: 1141, direction: 'South', color: '#ff6a00' },
  Desperation: { name: 'Desperation', postcode: 2343, direction: 'South', color: '#b42121' },
}

enum Label {
  Urgent,
  Fragile,
  Perishable,
  Heavy,
}

type Telegraph = {
  type: 'Telegraph'
} & {
  [K in keyof typeof LanguageLabels]: string[]
}

type PartsAndCrafts = {
  type: 'PartsAndCrafts'
}

type EmergencyRelief = {
  type: 'EmergencyRelief'
}

type StandYourPost = {
  type: 'StandYourPost'
}

type TranscriptionMessage = {
  phrase: string
  segments: string[]
  chops?: [string, string][]
}

type Transcription = {
  type: 'Transcription'
} & {
  [K in keyof typeof LanguageLabels]: TranscriptionMessage[]
}

type CookieRequest = {
  phrase: string
  dough: 'sugar' | 'cocoa'
  toppings: ['chocolate' | 'strawberry' | 'gooseberry', 'chocolate' | 'strawberry' | 'gooseberry']
}

type BungalowBakeoff = {
  type: 'BungalowBakeoff'
} & {
  [K in keyof typeof LanguageLabels]: CookieRequest[]
}

type TracksOfTerror = {
  type: 'TracksOfTerror'
}

type BobbingItem = 'parcel' | 'empty' | 'junk'
type BobbingForBoxes = {
  type: 'BobbingForBoxes'
} & {
  puzzles: {
    letters: [Postcode, Postcode, Postcode] | [Postcode, Postcode, Postcode, Postcode]
    puzzle: [
      [BobbingItem, BobbingItem, BobbingItem],
      [BobbingItem, BobbingItem, BobbingItem],
      [BobbingItem, BobbingItem, BobbingItem]
    ]
  }[]
}

type ShippingPackage = {
  item: string
  recipient?: string
  labels: Label[]
  suburb: Suburb
  bold?: boolean
}

type Shipping = {
  type: 'Shipping'
  packages: ShippingPackage[]
}

type Dropoff = {
  type: 'Dropoff'
  out?: [string, string?, string?, Postcode?, Postcode?][]
  puzzle?: string
}

type DropoffWindow = 'left' | 'right'
type DropoffParcelDestination = 'N' | 'S' | '1' | '2'
type DropoffParcel = {
  window: DropoffWindow
  destination: DropoffParcelDestination
  coordinates: [number, number]
}

type DropoffPuzzle = {
  [k in DropoffWindow]: {
    in?: Postcode
    out?: string
  }
}

type DropoffDeliveryZone = { dimensions: [number, number]; layout: string }
type DropoffPuzzleNew = {
  type: 'DropoffNew'
  deliveryZone: DropoffDeliveryZone
  parcels: DropoffParcel[]
} & DropoffPuzzle

export { LanguageLabels, Suburb, Label, Postcode }
export type {
  Level,
  Telegraph,
  Transcription,
  Shipping,
  ShippingPackage,
  Dropoff,
  Language,
  BungalowBakeoff,
  TranscriptionMessage,
  DropoffWindow,
  DropoffParcelDestination,
  DropoffPuzzleNew,
  DropoffParcel,
  DropoffDeliveryZone,
  BobbingForBoxes,
}
