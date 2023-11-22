import { CreateDTAFileRecipe } from '../../src/lib/create'

const cravoecanela = {
  id: '7748cravoecanela',
  name: 'Cravo e Canela',
  artist: 'Clube da Esquina',
  master: true,
  song_id: 1774800004,
  songname: '7748cravoecanela',
  tracks: {
    drum: { rank: 3, channels: 2 },
    bass: { rank: 2, channels: 1 },
    guitar: { rank: 4, channels: 1 },
    vocals: { rank: 3, channels: 1, vocal_parts: 2 },
    keys: { rank: 2, real_rank: 3, channels: 1, hasSolo: true },
    backing: 2,
  },
  preview: 32426,
  song_length: 145042,
  rank_band: 3,
  encoding: 'utf8',
  rating: 1,
  genre: { genre: 'Latin', sub_genre: 'Latin' },
  year_released: 1972,
  album: { hasArt: true, name: 'Clube da Esquina', track_number: 6 },
  key: 'G',
  author: 'Ruggy',
} satisfies CreateDTAFileRecipe

export default cravoecanela
