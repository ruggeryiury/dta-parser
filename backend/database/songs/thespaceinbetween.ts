import { DTAFileRecipe } from '../../../src/lib/create'

export const thespaceinbetween = {
  id: '7748thespaceinbetween',
  name: 'The Space in Between',
  artist: 'How to Destroy Angels',
  master: true,
  song_id: 1774800026,
  songname: '7748thespaceinbetween',
  tracks: {
    drum: { rank: 2, channels: 2 },
    bass: { rank: 0, channels: 2 },
    guitar: { rank: 4, channels: 2 },
    vocals: { rank: 2, channels: 2, vocal_parts: 3, vocal_gender: 'Female' },
    backing: 2,
  },
  anim_tempo: 16,
  preview: 90811,
  song_length: 223784,
  rank_band: 2,
  rating: 2,
  genre: { genre: 'Rock', sub_genre: 'Rock' },
  year_released: 2010,
  album: { hasArt: true, name: 'How to Destroy Angels', track_number: 1 },
  key: 'Gm',
  author: 'Ruggy',
  multitrack: true,
  CATemh: true,
  pack_name: 'Chart-a-thon 2018',
} as DTAFileRecipe

export default thespaceinbetween
