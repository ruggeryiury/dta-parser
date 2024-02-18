import { DTAFileRecipe } from '../../../src/lib/create'

export const patins = {
  id: '7748patins',
  name: 'Patins',
  artist: 'CSS',
  master: true,
  song_id: 1774800032,
  songname: '7748patins',
  tracks: {
    drum: { rank: 1, channels: 2 },
    bass: { rank: 0, real_rank: 0, channels: 1 },
    guitar: { rank: 3, real_rank: 2, channels: 1 },
    vocals: { rank: 1, channels: 1, vocal_parts: 2, hasSolo: true },
    backing: 2,
  },
  preview: 44569,
  song_length: 135401,
  rank_band: 1,
  rating: 1,
  genre: { genre: 'Indie Rock', sub_genre: 'Indie Rock' },
  year_released: 2006,
  album: { hasArt: true, name: 'Cansei de Ser Sexy (International Release)', track_number: 2 },
  key: 'G',
  CATemh: true,
  author: 'Ruggy',
} as DTAFileRecipe

export default patins
