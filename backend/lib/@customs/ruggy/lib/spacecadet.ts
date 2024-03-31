import { DTAFileRecipe } from '../../../../../src/core/lib/create'

export const spacecadet = {
  id: '7748spacecadet',
  name: '3D Pinball Space Cadet: Level 1',
  artist: 'Matt Ridgeway',
  master: true,
  song_id: 1774800012,
  songname: '7748spacecadet',
  tracks: {
    drum: { rank: 3, channels: 4 },
    bass: { rank: 3, real_rank: 4, channels: 1 },
    guitar: { rank: 6, real_rank: 6, channels: 2 },
    keys: { rank: 6, real_rank: 6, channels: 2 },
    backing: 1,
  },
  preview: 25785,
  song_length: 65454,
  rank_band: 6,
  rating: 1,
  genre: { genre: 'Fusion', sub_genre: 'Fusion' },
  year_released: 1995,
  album: { hasArt: true },
  key: 'G#m',
  author: 'Ruggy',
  multitrack: true,
  CATemh: true,
  pack_name: 'Windows .MID Pack 02',
} as DTAFileRecipe

export default spacecadet
