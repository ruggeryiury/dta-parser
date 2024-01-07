import { CreateDTAFileRecipe } from '../../../src/lib/create'

export const demon = {
  id: '7748demon',
  name: 'Demon',
  artist: 'Bear In Heaven',
  master: true,
  song_id: 1774800016,
  songname: '7748demon',
  tracks: {
    drum: { rank: 5, channels: 2 },
    bass: { rank: 0, real_rank: 0, channels: 1 },
    vocals: {
      rank: 1,
      channels: 1,
      vocal_parts: 3,
      hasSolo: true,
    },
    keys: { rank: 6, real_rank: 4, channels: 1 },
    backing: 2,
  },
  preview: 31000,
  song_length: 300000,
  rank_band: 3,
  rating: 3,
  genre: { genre: 'Indie Rock', sub_genre: 'Indie Rock' },
  year_released: 2014,
  album: { hasArt: true, name: 'Time Is Over One Day Old', track_number: 7 },
  key: 'Fm',
  CATemh: true,
  author: 'Ruggy',
} as CreateDTAFileRecipe

export default demon
