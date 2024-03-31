import { DTAFileRecipe } from '../../../../../src/core/lib/create'

export const ponytail = {
  id: '7748ponytail',
  name: 'Ponytail',
  artist: 'Panda Bear',
  master: true,
  song_id: 1774800029,
  songname: '7748ponytail',
  tracks: {
    drum: { rank: 0, channels: 2 },
    bass: { rank: 0, real_rank: 0, channels: 1 },
    guitar: { rank: 1, real_rank: 1, channels: 1 },
    vocals: { rank: 1, channels: 1, vocal_parts: 2 },
    backing: 2,
  },
  preview: 14524,
  song_length: 130025,
  rank_band: 0,
  rating: 1,
  genre: { genre: 'Indie Rock', sub_genre: 'Indie Rock' },
  year_released: 2007,
  album: {
    hasArt: true,
    name: 'Person Pitch',
    track_number: 7,
  },
  key: 'A',
  author: 'Ruggy',
  CATemh: true,
} as DTAFileRecipe

export default ponytail
