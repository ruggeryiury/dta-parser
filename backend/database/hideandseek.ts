import { CreateDTAFileRecipe } from '../../src/lib/create'

const hideandseek = {
  id: '7748hideandseek',
  name: 'Hide and Seek',
  artist: 'Imogen Heap',
  master: true,
  song_id: 1774800003,
  songname: '7748hideandseek',
  tracks: {
    vocals: { rank: 4, channels: 1, vocal_parts: 2, vocal_gender: 'Female' },
    backing: 2,
  },
  preview: 142990,
  song_length: 272649,
  rank_band: 4,
  rating: 2,
  genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Other' },
  year_released: 2005,
  album: { hasArt: true, name: 'Speak for Yourself', track_number: 5 },
  key: 'A',
  author: 'Ruggy',
} as CreateDTAFileRecipe

export default hideandseek
