import { DTAFileRecipe } from '../../../../../src/lib/create'

export const pollyanna = {
  id: '7748pollyanna',
  name: 'Pollyanna (I Believe in You)',
  artist: 'Keiichi Suzuki & Hirokazu Tanaka',
  master: true,
  song_id: 1774800034,
  songname: '7748pollyanna',
  tracks: {
    drum: { rank: 1, channels: 4 },
    bass: { rank: 2, real_rank: 1, channels: 1, tuning: [-2, 0, 0, 0] },
    guitar: { rank: 3, real_rank: 3, channels: 1, pans: [-0.2] },
    keys: { rank: 2, real_rank: 2, channels: 1, pans: [0.2] },
    backing: 1,
  },
  drum_bank: 'Vintage Kit',
  preview: 4267,
  song_length: 121610,
  rank_band: 2,
  rating: 1,
  genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
  year_released: 1989,
  album: {
    hasArt: true,
    name: 'MOTHER (Original Soundtrack)',
    track_number: 4,
  },
  key: 'D',
  multitrack: true,
  author: 'Ruggy',
  pack_name: 'MOTHER Pack 01',
} as DTAFileRecipe

export default pollyanna
