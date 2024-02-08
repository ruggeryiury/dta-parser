import { CreateDTAFileRecipe } from '../../../src/lib/dta/create'

export const canyon = {
  id: '7748canyon',
  name: 'Trip Through the Grand Canyon',
  artist: 'George Stone',
  master: true,
  song_id: 1774800010,
  songname: '7748canyon',
  tracks: {
    drum: { rank: 2, channels: 5 },
    bass: { rank: 1, real_rank: 1, channels: 2 },
    guitar: { rank: 2, real_rank: 3, channels: 2 },
    keys: { rank: 2, real_rank: 3, channels: 2 },
    backing: 2,
  },
  preview: 10000,
  song_length: 128823,
  rank_band: 2,
  rating: 1,
  genre: {
    genre: 'Fusion',
    sub_genre: 'Fusion',
  },
  year_released: 1990,
  album: {
    hasArt: true,
    name: 'Microsoft Windows',
    track_number: 4,
  },
  key: 'C',
  author: 'Ruggy',
  multitrack: true,
  CATemh: true,
  pack_name: 'Windows .MID Pack 02',
} as CreateDTAFileRecipe

export default canyon
