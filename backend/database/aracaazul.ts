import { CreateDTAFileRecipe } from '../../src/lib/create'

const aracaazul = {
  id: '7748aracaazul',
  name: 'Araçá Azul',
  artist: 'Caetano Veloso',
  master: true,
  song_id: 1774800015,
  songname: '7748aracaazul',
  tracks: {
    guitar: {
      rank: 1,
      real_rank: 0,
      channels: 1,
    },
    vocals: {
      rank: 2,
      channels: 1,
      vocal_parts: 1,
    },
    backing: 2,
  },
  tuning_offset_cents: 35,
  preview: 25000,
  song_length: 89593,
  rank_band: 0,
  encoding: 'utf8',
  rating: 1,
  genre: {
    genre: 'Other',
    sub_genre: 'Acoustic',
  },
  year_released: 1973,
  album: {
    hasArt: true,
    name: 'Araçá Azul',
    track_number: 10,
  },
  key: 'Eb',
  author: 'Ruggy',
} satisfies CreateDTAFileRecipe

export default aracaazul