import { CreateDTAFileRecipe } from '../../src/lib/create'

const thefightisover = {
  id: '7748thefightisover',
  name: 'The Fight Is Over',
  artist: 'The Blasting Company',
  master: true,
  song_id: 1774800018,
  songname: '7748thefightisover',
  tracks: {
    drum: { rank: 0, channels: 2 },
    bass: { rank: 0, real_rank: 0, channels: 1 },
    guitar: { rank: 2, real_rank: 2, channels: 1, hasSolo: true },
    vocals: { rank: 1, channels: 1, vocal_parts: 3 },
    backing: 2,
  },
  preview: 21991,
  song_length: 87583,
  rank_band: 0,
  rating: 1,
  genre: { genre: 'Glam', sub_genre: 'Glam' },
  year_released: 2017,
  album: { hasArt: true, name: 'Over The Garden Wall', track_number: 25 },
  key: 'C',
  CATemh: true,
  author: 'Ruggy',
} satisfies CreateDTAFileRecipe

export default thefightisover
