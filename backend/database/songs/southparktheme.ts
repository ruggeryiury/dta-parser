import { CreateDTAFileRecipe } from '../../../src/lib/dta/create'

export const southparktheme = {
  id: '7748southparktheme',
  name: 'South Park Theme',
  artist: 'Primus',
  master: true,
  song_id: 1774800002,
  songname: '7748southparktheme',
  tracks: {
    drum: { rank: 3, channels: 2 },
    bass: { rank: 2, real_rank: 2, channels: 1 },
    guitar: { rank: 4, real_rank: 4, channels: 1 },
    vocals: { rank: 0, channels: 1, vocal_parts: 3 },
    backing: 2,
  },
  preview: 4864,
  song_length: 36318,
  rank_band: 3,
  rating: 3,
  genre: { genre: 'Alternative', sub_genre: 'Alternative' },
  year_released: 1998,
  album: {
    hasArt: true,
    name: 'Chef Aid: The South Park Album',
    track_number: 1,
  },
  key: 'D#m',
  author: 'Ruggy',
} as CreateDTAFileRecipe

export default southparktheme
