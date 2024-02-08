import { CreateDTAFileRecipe } from '../../../src/lib/dta/create'

export const mothernature = {
  id: '7748mothernature',
  name: 'Mother Nature',
  artist: 'Dream Avenue',
  master: true,
  song_id: 1774800022,
  songname: '7748mothernature',
  tracks: {
    drum: { rank: 2, channels: 2 },
    bass: { rank: 0, real_rank: 1, channels: 2 },
    guitar: { rank: 1, real_rank: 1, channels: 2 },
    keys: { rank: 5, real_rank: 5, channels: 2 },
    backing: 2,
  },
  preview: 28413,
  song_length: 85239,
  rank_band: 2,
  rating: 1,
  genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
  year_released: 2018,
  album: { hasArt: true, name: 'Our Shared Universes', track_number: 1 },
  key: 'E',
  multitrack: true,
  CATemh: true,
  author: 'Ruggy',
} as CreateDTAFileRecipe

export default mothernature
