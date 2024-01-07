import { CreateDTAFileRecipe } from '../../../src/lib/create'

export const itstimetojump = {
  id: '7748itstimetojump',
  name: "It's Time To Jump",
  artist: 'Dream Avenue',
  master: true,
  song_id: 1774800042,
  songname: '7748itstimetojump',
  tracks: {
    drum: { rank: 6, channels: 2 },
    bass: { rank: 1, real_rank: 1, channels: 2 },
    guitar: { rank: 3, real_rank: 3, channels: 2 },
    keys: { rank: 6, real_rank: 6, channels: 2 },
    backing: 2,
  },
  anim_tempo: 64,
  preview: 98900,
  song_length: 286408,
  rank_band: 5,
  rating: 1,
  genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
  year_released: 2014,
  album: { hasArt: true, name: 'Moonstone', track_number: 11 },
  key: 'Eb',
  multitrack: true,
  author: 'Ruggy',
} as CreateDTAFileRecipe

export default itstimetojump
