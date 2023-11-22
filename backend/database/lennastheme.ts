import { CreateDTAFileRecipe } from '../../src/lib/create'

const lennastheme = {
  id: '7748lennastheme',
  name: "Lenna's Theme",
  artist: 'Nobuo Uematsu',
  master: true,
  song_id: 1774800037,
  songname: '7748lennastheme',
  tracks: {
    bass: { rank: 0, real_rank: 0, channels: 2 },
    guitar: { rank: 1, real_rank: 1, channels: 2 },
    keys: { rank: 1, real_rank: 1, channels: 2 },
    backing: 2,
  },
  anim_tempo: 16,
  preview: 34868,
  song_length: 116955,
  rank_band: 1,
  rating: 1,
  genre: { genre: 'Classical', sub_genre: 'Classical' },
  year_released: 1992,
  album: {
    hasArt: true,
    name: 'Final Fantasy V (Original Soundtrack)',
    track_number: 5,
  },
  key: 'C',
  multitrack: true,
  author: 'Ruggy',
} as CreateDTAFileRecipe

export default lennastheme
