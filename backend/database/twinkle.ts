import { CreateDTAFileRecipe } from '../../src/lib/create'

const twinkle = {
  id: '7748twinkle',
  name: 'Twinkle Elementary School',
  artist: 'Keiichi Suzuki & Hirokazu Tanaka',
  master: true,
  song_id: 1774800035,
  songname: '7748twinkle',
  tracks: {
    drum: { rank: 1, channels: 4 },
    bass: { rank: 2, real_rank: 2, channels: 1 },
    guitar: { rank: 1, real_rank: 1, channels: 1, pans: [0.2] },
    keys: { rank: 3, real_rank: 3, channels: 1, pans: [-0.2] },
    backing: 1,
  },
  preview: 3200,
  song_length: 126408,
  rank_band: 3,
  rating: 1,
  genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
  year_released: 1989,
  album: {
    hasArt: true,
    name: 'MOTHER (Original Soundtrack)',
    track_number: 19,
  },
  key: 'A',
  multitrack: true,
  author: 'Ruggy',
  pack_name: 'MOTHER Pack 01',
} satisfies CreateDTAFileRecipe

export default twinkle
