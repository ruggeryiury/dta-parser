import { CreateDTAFileRecipe } from '../../src/lib/create'

const hippiebattle = {
  id: '7748hippiebattle',
  name: 'Battle Theme 2 (Hippie Battle)',
  artist: 'Keiichi Suzuki & Hirokazu Tanaka',
  master: true,
  song_id: 1774800031,
  songname: '7748hippiebattle',
  tracks: {
    drum: { rank: 2, channels: 4 },
    bass: { rank: 3, real_rank: 3, channels: 1 },
    guitar: { rank: 3, real_rank: 3, channels: 1 },
    backing: 2,
  },
  drum_bank: 'Vintage Kit',
  anim_tempo: 64,
  preview: 36000,
  song_length: 71333,
  rank_band: 2,
  rating: 1,
  genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
  year_released: 1989,
  album: {
    hasArt: true,
    name: 'MOTHER (Original Soundtrack)',
    track_number: 7,
  },
  key: 'A',
  multitrack: true,
  author: 'Ruggy',
  pack_name: 'MOTHER Pack 01',
} as CreateDTAFileRecipe

export default hippiebattle
