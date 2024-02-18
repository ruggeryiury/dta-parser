import { DTAFileRecipe } from '../../../src/lib/create'

export const mindmischief = {
  id: '7748mindmischief',
  name: 'Mind Mischief',
  artist: 'Tame Impala',
  master: true,
  song_id: 1774800023,
  songname: '7748mindmischief',
  tracks: {
    drum: { rank: 2, channels: 2 },
    bass: { rank: 2, real_rank: 2, channels: 1 },
    guitar: {
      rank: 2,
      real_rank: 2,
      channels: 1,
      tuning: [0, 0, 0, 0, 0, 0],
      hasSolo: true,
    },
    vocals: { rank: 2, channels: 1, vocal_parts: 3 },
    keys: { rank: 0, real_rank: 1, channels: 1 },
    backing: 2,
  },
  preview: 26929,
  song_length: 276114,
  rank_band: 2,
  rating: 1,
  genre: { genre: 'Rock', sub_genre: 'Psychedelic' },
  year_released: 2012,
  album: { hasArt: true, name: 'Lonerism', track_number: 4 },
  key: 'F#',
  author: 'Ruggy',
  CATemh: true,
} as DTAFileRecipe

export default mindmischief
