import { CreateDTAFileRecipe } from '../../src/lib/create'

const sanguelatino = {
  id: '7748sanguelatino',
  name: 'Sangue Latino',
  artist: 'Secos & Molhados',
  master: true,
  song_id: 1774800027,
  songname: '7748sanguelatino',
  tracks: {
    drum: { rank: 0, channels: 2 },
    bass: { rank: 1, channels: 1 },
    guitar: { rank: 2, channels: 1 },
    vocals: { rank: 2, channels: 1, vocal_parts: 1 },
    backing: 2,
  },
  preview: 55604,
  song_length: 135401,
  rank_band: 1,
  rating: 1,
  genre: { genre: 'Glam', sub_genre: 'Glam' },
  year_released: 1973,
  album: { hasArt: true, name: 'Secos & Molhados', track_number: 1 },
  key: 'D',
  CATemh: true,
  author: 'Ruggy',
} as CreateDTAFileRecipe

export default sanguelatino
