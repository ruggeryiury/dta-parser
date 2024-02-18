import { DTAFileRecipe } from '../../../src/lib/create'

export const smb2playersel = {
  id: '7748smb2playersel',
  name: 'Super Mario Bros. 2: Player Select',
  artist: 'Koji Kondo',
  master: true,
  song_id: 1774800041,
  songname: '7748smb2playersel',
  tracks: {
    drum: { rank: 2, channels: 2 },
    bass: { rank: 1, real_rank: 1, channels: 1 },
    guitar: { rank: 3, real_rank: 3, channels: 1, pans: [-0.7] },
    keys: { rank: 5, real_rank: 5, channels: 1, pans: [0.7] },
    backing: 1,
  },
  preview: 6400,
  song_length: 147797,
  rank_band: 3,
  rating: 1,
  genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
  year_released: 1988,
  album: {
    hasArt: true,
    name: 'Super Mario Bros 2 (Original Soundtrack)',
    track_number: 2,
  },
  key: 'C',
  multitrack: true,
  CATemh: true,
  author: 'Ruggy',
} as DTAFileRecipe

export default smb2playersel
