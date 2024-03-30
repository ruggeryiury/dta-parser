import { DTAFileRecipe } from '../../../../../src/lib/create'

export const breakingintocars = {
  id: '7748breakingintocars',
  name: 'Breaking Into Cars',
  artist: 'The Raveonettes',
  master: true,
  song_id: 1774800014,
  songname: '7748breakingintocars',
  tracks: {
    drum: { rank: 0, channels: 2 },
    bass: { rank: 1, real_rank: 1, channels: 1 },
    guitar: { rank: 1, real_rank: 1, channels: 1, hasSolo: true },
    vocals: {
      rank: 1,
      channels: 1,
      vocal_parts: 2,
      hasSolo: true,
    },
    backing: 2,
  },
  preview: 39500,
  song_length: 194425,
  rank_band: 1,
  rating: 2,
  genre: { genre: 'Indie Rock', sub_genre: 'Indie Rock' },
  year_released: 2009,
  album: { hasArt: true, name: 'In and Out of Control', track_number: 9 },
  key: 'C#m',
  CATemh: true,
  author: 'Ruggy',
} as DTAFileRecipe

export default breakingintocars
