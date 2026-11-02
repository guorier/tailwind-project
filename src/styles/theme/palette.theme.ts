export type PaletteSwatch = {
  name: string
  hex: string
}

export type AtlasTheme = {
  id: string
  index: string
  name: string
  label: string
  description: string
  mood: string
  surface: string
  foreground: string
  accent: string
  muted: string
  colors: PaletteSwatch[]
}

// globals.css :root 의 shadcn 기본 토큰을 그대로 쓰는 테마. Provider는 이 테마에서 semantic 변수를 덮어쓰지 않는다.
export const baseTheme: AtlasTheme = {
  id: 'default',
  index: '00',
  name: 'Default',
  label: 'DEFAULT / BASE',
  description: 'The original neutral tokens of the component library, untouched.',
  mood: 'neutral · clean · familiar',
  surface: '#FFFFFF',
  foreground: '#0A0A0A',
  accent: '#346FB2',
  muted: '#737373',
  colors: [
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Neutral 100', hex: '#F5F5F5' },
    { name: 'Neutral 200', hex: '#E5E5E5' },
    { name: 'Neutral 900', hex: '#171717' },
    { name: 'Lightblue 500', hex: '#346FB2' },
  ],
}

// 이미지에서 추출한 소스 팔레트. ColorAtlas 인덱스는 이 목록만 보여준다.
export const atlasThemes: AtlasTheme[] = [
  {
    id: 'blueprint',
    index: '01',
    name: 'Deep Space Blue',
    label: 'BLUEPRINT / SIGNAL',
    description: 'A calm, engineered blue spectrum for focused product surfaces.',
    mood: 'precise · collected · open',
    surface: '#091724',
    foreground: '#F4F8F6',
    accent: '#3E92CC',
    muted: '#8AAFC8',
    colors: [
      { name: 'Deep Space Blue', hex: '#13293D' },
      { name: 'Space Blue', hex: '#16324F' },
      { name: 'Yale Blue', hex: '#18435A' },
      { name: 'Baltic Blue', hex: '#2A628F' },
      { name: 'Blue Bell', hex: '#3E92CC' },
    ],
  },
  {
    id: 'soil',
    index: '02',
    name: 'Midnight Soil',
    label: 'SOIL / WARMTH',
    description: 'A grounded clay range that makes digital surfaces feel tactile.',
    mood: 'earthy · warm · familiar',
    surface: '#201A17',
    foreground: '#FFF1E6',
    accent: '#E49C69',
    muted: '#CDA58E',
    colors: [
      { name: 'Midnight Soil', hex: '#201A17' },
      { name: 'Cacao Husk', hex: '#5C3B2E' },
      { name: 'Amper Rock', hex: '#C56C39' },
      { name: 'Apricot Dust', hex: '#E49C69' },
      { name: 'Dune Beach', hex: '#F2C299' },
    ],
  },
  {
    id: 'teal',
    index: '03',
    name: 'Evergreen',
    label: 'EVERGREEN / CURRENT',
    description: 'A living green-to-turquoise current for confident, energetic states.',
    mood: 'alive · clear · optimistic',
    surface: '#071F1B',
    foreground: '#E8FFF9',
    accent: '#30DFC4',
    muted: '#80CFC1',
    colors: [
      { name: 'Evergreen', hex: '#0A2D27' },
      { name: 'Pine Teal', hex: '#13594E' },
      { name: 'Jungle Teal', hex: '#1D8676' },
      { name: 'Ocean Mist', hex: '#26B29D' },
      { name: 'Turquoise', hex: '#30DFC4' },
    ],
  },
  {
    id: 'clay',
    index: '04',
    name: 'Almond Cream',
    label: 'CLAY / QUIET LUXURY',
    description: 'A soft neutral family for editorial layouts and warm utility.',
    mood: 'soft · composed · material',
    surface: '#F3E9DE',
    foreground: '#2A1D18',
    accent: '#B08968',
    muted: '#806354',
    colors: [
      { name: 'Almond Cream', hex: '#EDE0D4' },
      { name: 'Pale Oak', hex: '#E6CCB2' },
      { name: 'Tan', hex: '#DDB892' },
      { name: 'Faded Copper', hex: '#B08968' },
      { name: 'Coffee Bean', hex: '#7F5539' },
    ],
  },
  {
    id: 'violet',
    index: '05',
    name: 'Onyx',
    label: 'ONYX / DUST',
    description: 'A smoked violet scale for nocturnal interfaces with quiet depth.',
    mood: 'moody · intimate · polished',
    surface: '#0E0A0E',
    foreground: '#FFF7FF',
    accent: '#865C80',
    muted: '#B287AA',
    colors: [
      { name: 'Onyx', hex: '#0E0A0E' },
      { name: 'Midnight Violet', hex: '#261A24' },
      { name: 'Vintage Grape', hex: '#473144' },
      { name: 'Mauve Shadow', hex: '#724E6D' },
      { name: 'Dusty Lavender', hex: '#865C80' },
    ],
  },
  {
    id: 'candy',
    index: '06',
    name: 'Bright Peony',
    label: 'PEONY / ELECTRIC',
    description: 'A high-voltage pink run for expressive moments and bold calls to action.',
    mood: 'bright · playful · fearless',
    surface: '#210816',
    foreground: '#FFF2FB',
    accent: '#FF7DD5',
    muted: '#F3A9D9',
    colors: [
      { name: 'Bright Peony', hex: '#FF93F3' },
      { name: 'Bubblegum Fizz', hex: '#FF7DD5' },
      { name: 'Wild Strawberry', hex: '#FE4E96' },
      { name: 'Hot Fuchsia', hex: '#FE2A65' },
      { name: 'Lipstick Red', hex: '#FD1042' },
    ],
  },
  {
    id: 'amethyst',
    index: '07',
    name: 'Dark Amethyst',
    label: 'AMETHYST / AFTERGLOW',
    description: 'A saturated purple spectrum that turns a UI into an evening signal.',
    mood: 'luminous · dramatic · surreal',
    surface: '#18002D',
    foreground: '#FBF1FF',
    accent: '#9D4EDD',
    muted: '#C493E7',
    colors: [
      { name: 'Dark Amethyst', hex: '#240046' },
      { name: 'Indigo Ink', hex: '#3C096C' },
      { name: 'Indigo Velvet', hex: '#5A189A' },
      { name: 'Royal Violet', hex: '#7B2CBF' },
      { name: 'Lavender Purple', hex: '#9D4EDD' },
    ],
  },
]

// 테마 선택기에 노출되는 전체 목록
export const themeOptions: AtlasTheme[] = [baseTheme, ...atlasThemes]

export const defaultAtlasTheme = baseTheme
