import { DTAFileRecipe } from '../../../../../src/core/lib/create'

export const flourish = {
  id: '7748flourish',
  name: 'Flourish',
  artist: 'Nathan Grigg',
  master: true,
  song_id: 1774800007,
  songname: '7748flourish',
  tracks: {
    drum: {
      rank: 6,
      channels: 4,
    },
    bass: {
      rank: 5,
      real_rank: 6,
      channels: 2,
      tuning: [-4, -4, -4, -4],
    },
    guitar: {
      rank: 5,
      real_rank: 5,
      channels: 2,
      tuning: [-4, -4, -4, -4, -4, -4],
      hasSolo: true,
    },
    keys: {
      rank: 6,
      real_rank: 6,
      channels: 2,
      hasSolo: true,
    },
    backing: 2,
  },
  hopo_threshold: 90,
  preview: 3500,
  song_length: 94500,
  rank_band: 6,
  rating: 1,
  genre: {
    genre: 'Fusion',
    sub_genre: 'Fusion',
  },
  year_released: 1998,
  album: {
    hasArt: true,
  },
  key: 'Bb',
  author: 'Ruggy',
  multitrack: true,
  CATemh: true,
  pack_name: 'Windows .MID Pack 01',
} as DTAFileRecipe

export default flourish
