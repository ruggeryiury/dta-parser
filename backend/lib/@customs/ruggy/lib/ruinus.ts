import { DTAFileRecipe } from '../../../../../src/core/lib/create'

export const ruinus = {
  id: '7748ruinus',
  name: 'Ruin Us',
  artist: 'The Jellybricks',
  master: true,
  song_id: 1774800047,
  songname: '7748ruinus',
  tracks: {
    drum: { rank: 2, channels: 5 },
    bass: { rank: 1, channels: 2 },
    guitar: { rank: 2, channels: 2 },
    vocals: { rank: 2, channels: 2, vocal_parts: 3, vocal_gender: 'Male' },
    keys: { rank: 1, real_rank: 1, channels: 2 },
    backing: 2,
  },
  anim_tempo: 64,
  preview: 98900,
  song_length: 286408,
  rank_band: 1,
  rating: 1,
  genre: { genre: 'Pop-Rock', sub_genre: 'Soft Rock' },
  year_released: 2014,
  album: { hasArt: true, name: 'Moonstone', track_number: 11 },
  key: 'G',
  multitrack: true,
  author: 'Ruggy',
} as DTAFileRecipe

export default ruinus
