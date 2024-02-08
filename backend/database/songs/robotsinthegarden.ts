import { CreateDTAFileRecipe } from '../../../src/lib/dta/create'

export const robotsinthegarden = {
  id: '7748robotsinthegarden',
  name: 'Robots in the Garden',
  artist: 'Autolux',
  master: true,
  song_id: 1774800028,
  songname: '7748robotsinthegarden',
  tracks: {
    drum: { rank: 3, channels: 2 },
    bass: { rank: 1, channels: 1 },
    guitar: { rank: 2, channels: 1 },
    vocals: { rank: 1, channels: 1, vocal_parts: 1, hasSolo: true },
    backing: 2,
  },
  preview: 55665,
  song_length: 135401,
  rank_band: 2,
  rating: 1,
  genre: { genre: 'Rock', sub_genre: 'Rock' },
  year_released: 2004,
  album: { hasArt: true, name: 'Future Perfect', track_number: 7 },
  key: 'D#m',
  CATemh: true,
  author: 'Ruggy',
} as CreateDTAFileRecipe

export default robotsinthegarden
