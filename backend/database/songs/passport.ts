import { CreateDTAFileRecipe } from '../../../src/lib/create'

export const passport = {
  id: '7748passport',
  name: 'Passport',
  artist: 'George Stone',
  master: true,
  song_id: 1774800011,
  songname: '7748passport',
  tracks: {
    drum: { rank: 3, channels: 4 },
    bass: { rank: 1, real_rank: 1, channels: 2 },
    guitar: { rank: 2, real_rank: 3, channels: 2 },
    keys: { rank: 4, real_rank: 4, channels: 2 },
    backing: 2,
  },
  anim_tempo: 64,
  preview: 89000,
  song_length: 132705,
  rank_band: 2,
  rating: 1,
  genre: { genre: 'Fusion', sub_genre: 'Fusion' },
  year_released: 1995,
  album: { hasArt: true },
  key: 'Cm',
  author: 'Ruggy',
  multitrack: true,
  CATemh: true,
  pack_name: 'Windows .MID Pack 02',
} as CreateDTAFileRecipe

export default passport
