import { DTAFileRecipe } from '../../../../../src/lib/create'

export const minuet = {
  id: '7748minuet',
  name: 'Minuet',
  artist: 'From First to Last',
  master: true,
  song_id: 1774800006,
  songname: '7748minuet',
  tracks: {
    guitar: { rank: 2, real_rank: 2, channels: 2 },
    backing: 1,
  },
  preview: 17303,
  song_length: 67301,
  rank_band: 2,
  rating: 1,
  genre: { genre: 'Other', sub_genre: 'Acoustic' },
  year_released: 2004,
  album: {
    hasArt: true,
    name: 'Dear Diary, My Teen Angst Has a Body Count',
    track_number: 10,
  },
  key: 'Dm',
  multitrack: true,
  author: 'Ruggy',
} as DTAFileRecipe

export default minuet
