import { DTAFileRecipe } from '../../../src/lib/create'

export const paintwar = {
  id: '7748paintwar',
  name: 'Paint War',
  artist: 'Dream Avenue',
  master: true,
  song_id: 1774800001,
  songname: '7748paintwar',
  tracks: {
    drum: { rank: 2, channels: 2 },
    bass: { rank: 0, real_rank: 0, channels: 2 },
    guitar: { rank: 2, real_rank: 2, channels: 2 },
    keys: { rank: 2, real_rank: 2, channels: 2 },
    backing: 2,
  },
  preview: 42914,
  song_length: 119205,
  rank_band: 2,
  rating: 1,
  genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
  year_released: 2018,
  album: { hasArt: true, name: 'Our Shared Universes', track_number: 4 },
  key: 'A',
  multitrack: true,
  author: 'Ruggy',
} as DTAFileRecipe

export default paintwar
