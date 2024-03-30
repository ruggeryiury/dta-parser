import { DTAFileRecipe } from '../../../../../src/lib/create'

export const myhome = {
  id: '7748myhome',
  name: 'My Home',
  artist: 'Keiichi Suzuki & Hirokazu Tanaka',
  master: true,
  song_id: 1774800045,
  songname: '7748myhome',
  tracks: {
    drum: { rank: 0, channels: 2 },
    bass: { rank: 0, real_rank: 0, channels: 1 },
    guitar: { rank: 0, real_rank: 0, channels: 1 },
    keys: { rank: 0, real_rank: 0, channels: 1 },
    backing: 1,
  },
  anim_tempo: 16,
  preview: 3600,
  song_length: 122409,
  rank_band: 0,
  rating: 1,
  genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
  year_released: 1989,
  album: {
    hasArt: true,
    name: 'MOTHER (Original Soundtrack)',
    track_number: 2,
  },
  key: 'Ab',
  multitrack: true,
  CATemh: true,
  author: 'Ruggy',
} as DTAFileRecipe

export default myhome
