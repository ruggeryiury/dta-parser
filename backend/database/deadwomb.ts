import { CreateDTAFileRecipe } from '../../src/lib/create'

const deadwomb = {
  id: '7748deadwomb',
  name: 'Dead Womb',
  artist: 'Death From Above 1979',
  master: true,
  song_id: 1774800005,
  songname: '7748deadwomb',
  tracks: {
    drum: { rank: 6, channels: 2 },
    bass: { rank: 5, real_rank: 5, channels: 2, hasSolo: true },
    vocals: {
      rank: 0,
      channels: 1,
      vocal_parts: 2,
      hasSolo: true,
    },
    backing: 2,
  },
  hopo_threshold: 250,
  anim_tempo: 64,
  preview: 21254,
  song_length: 109098,
  rank_band: 6,
  rating: 3,
  genre: { genre: 'Punk', sub_genre: 'Dance Punk' },
  year_released: 2002,
  album: { hasArt: true, name: 'Heads Up', track_number: 1 },
  key: 'Cm',
  author: 'Ruggy',
} satisfies CreateDTAFileRecipe

export default deadwomb
