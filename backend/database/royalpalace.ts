import { CreateDTAFileRecipe } from '../../src/lib/create'

const royalpalace = {
  id: '7748royalpalace',
  name: 'Royal Palace',
  artist: 'Nobuo Uematsu',
  master: true,
  song_id: 1774800039,
  songname: '7748royalpalace',
  tracks: {
    drum: { rank: 1, channels: 5 },
    bass: { rank: 0, real_rank: 0, channels: 2 },
    keys: { rank: 4, real_rank: 4, channels: 2 },
    backing: 2,
  },
  preview: 10536,
  song_length: 95032,
  rank_band: 2,
  rating: 1,
  genre: { genre: 'Classical', sub_genre: 'Classical' },
  year_released: 1992,
  album: {
    hasArt: true,
    name: 'Final Fantasy V (Original Soundtrack)',
    track_number: 21,
  },
  key: 'F#',
  multitrack: true,
  CATemh: true,
  author: 'Ruggy',
} as CreateDTAFileRecipe

export default royalpalace
