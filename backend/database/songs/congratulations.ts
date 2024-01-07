import { CreateDTAFileRecipe } from '../../../src/lib/create'

export const congratulations = {
  id: '7748congratulations',
  name: 'Congratulations',
  artist: 'MGMT',
  master: true,
  song_id: 1774800020,
  songname: '7748congratulations',
  tracks: {
    drum: { rank: 0, channels: 2 },
    bass: { rank: 0, real_rank: 0, channels: 1 },
    guitar: { rank: 2, real_rank: 1, channels: 1 },
    vocals: {
      rank: 1,
      channels: 1,
      vocal_parts: 1,
      hasSolo: true,
    },
    keys: { rank: 6, real_rank: 6, channels: 1, hasSolo: true },
    backing: 2,
  },
  preview: 79298,
  song_length: 236430,
  rank_band: 1,
  rating: 2,
  genre: { genre: 'Rock', sub_genre: 'Psychedelic' },
  year_released: 2010,
  album: { hasArt: true, name: 'Congratulations', track_number: 9 },
  key: 'G',
  CATemh: true,
  author: 'Ruggy',
} as CreateDTAFileRecipe

export default congratulations
