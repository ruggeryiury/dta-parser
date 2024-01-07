import { CreateDTAFileRecipe } from '../../../src/lib/create'

export const cutmyfingersoff = {
  id: '7748cutmyfingersoff',
  name: 'Cutting My Fingers Off',
  artist: 'Turnover',
  master: true,
  song_id: 1774800017,
  songname: '7748cutmyfingersoff',
  tracks: {
    drum: { rank: 1, channels: 2 },
    bass: { rank: 0, real_rank: 0, channels: 1 },
    guitar: { rank: 2, real_rank: 2, channels: 1, hasSolo: true },
    vocals: {
      rank: 1,
      channels: 1,
      vocal_parts: 1,
      hasSolo: true,
    },
    backing: 2,
  },
  preview: 47917,
  song_length: 184968,
  rank_band: 1,
  rating: 2,
  genre: { genre: 'Indie Rock', sub_genre: 'Indie Rock' },
  year_released: 2015,
  album: { hasArt: true, name: 'Peripheral Vision', track_number: 1 },
  key: 'C',
  author: 'Ruggy',
} as CreateDTAFileRecipe

export default cutmyfingersoff
