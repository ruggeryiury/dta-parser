import { CreateDTAFileRecipe } from '../../../src/lib/dta/create'

export const theradiant = {
  id: '7748theradiant',
  name: 'The Radiant (Chart-A-Thon 2019 Mix)',
  artist: 'Dream Avenue',
  master: true,
  song_id: 1774800024,
  songname: '7748theradiant',
  tracks: {
    drum: { rank: 4, channels: 2 },
    bass: { rank: 4, real_rank: 4, channels: 2 },
    guitar: { rank: 3, real_rank: 4, channels: 2 },
    keys: { rank: 5, real_rank: 5, channels: 2 },
    backing: 2,
  },
  anim_tempo: 64,
  preview: 14667,
  song_length: 249333,
  rank_band: 5,
  rating: 1,
  genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
  year_released: 2014,
  year_recorded: 2019,
  album: { hasArt: true, name: 'Moonstone', track_number: 3 },
  key: 'C',
  multitrack: true,
  CATemh: true,
  author: 'Ruggy',
  pack_name: 'Chart-a-thon 2018',
} as CreateDTAFileRecipe

export default theradiant
