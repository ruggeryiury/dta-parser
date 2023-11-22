import { CreateDTAFileRecipe } from '../../src/lib/create'

const beinfriends = {
  id: '7748beinfriends',
  name: "Bein' Friends",
  artist: 'Keiichi Suzuki & Hirokazu Tanaka',
  master: true,
  song_id: 1774800030,
  songname: '7748beinfriends',
  tracks: {
    drum: { rank: 3, channels: 4 },
    bass: { rank: 2, real_rank: 3, channels: 1 },
    guitar: { rank: 3, real_rank: 4, channels: 1, pans: [-0.2] },
    keys: { rank: 2, real_rank: 2, channels: 1, pans: [0.2] },
    backing: 1,
  },
  preview: 3734,
  song_length: 102679,
  rank_band: 3,
  rating: 1,
  genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
  year_released: 1989,
  album: {
    hasArt: true,
    name: 'MOTHER (Original Soundtrack)',
    track_number: 21,
  },
  key: 'F',
  multitrack: true,
  author: 'Ruggy',
  pack_name: 'MOTHER Pack 01',
} as CreateDTAFileRecipe

export default beinfriends
