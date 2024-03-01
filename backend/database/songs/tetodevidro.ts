import { DTAFileRecipe } from '../../../src/lib/create'

export const tetodevidro = {
  id: '7748tetodevidro',
  name: 'Teto de Vidro',
  artist: 'Pitty',
  master: true,
  song_id: 1774800036,
  songname: '7748tetodevidro',
  tracks: {
    drum: { rank: 2, channels: 2 },
    bass: { rank: 1, channels: 2 },
    guitar: { rank: 2, channels: 2 },
    vocals: { rank: 2, channels: 2, vocal_parts: 1 },
    backing: 2,
  },
  preview: 39735,
  song_length: 215036,
  rank_band: 2,
  rating: 1,
  genre: { genre: 'Rock', sub_genre: 'Rock' },
  vocal_gender: 'Female',
  year_released: 2005,
  album: { hasArt: true, name: 'Admirável Chip Novo', track_number: 1 },
  key: 'C#m',
  multitrack: true,
  author: 'Ruggy',
} as DTAFileRecipe

export default tetodevidro
