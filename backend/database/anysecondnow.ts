import { CreateDTAFileRecipe } from '../../src/lib/create'

const anysecondnow = {
  id: '7748anysecondnow',
  name: 'Any Second Now (Voices)',
  artist: 'Depeche Mode',
  master: true,
  song_id: 1774800019,
  songname: '7748anysecondnow',
  tracks: {
    bass: { rank: 0, real_rank: 0, channels: 1 },
    vocals: { rank: 1, channels: 1, vocal_parts: 2 },
    keys: { rank: 4, real_rank: 3, channels: 1, hasSolo: true },
    backing: 2,
  },
  preview: 16628,
  song_length: 163582,
  rank_band: 1,
  rating: 1,
  genre: { genre: 'New Wave', sub_genre: 'Synthpop' },
  year_released: 1981,
  album: { hasArt: true, name: 'Speak & Spell', track_number: 10 },
  key: 'G',
  author: 'Ruggy',
} satisfies CreateDTAFileRecipe

export default anysecondnow
