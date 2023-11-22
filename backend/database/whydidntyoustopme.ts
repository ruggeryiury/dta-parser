import { CreateDTAFileRecipe } from '../../src/lib/create'

const whydidntyoustopme = {
  id: '7748whydidntyoustopme',
  name: "Why Didn't You Stop Me?",
  artist: 'Mitski',
  master: true,
  song_id: 1774800025,
  songname: '7748whydidntyoustopme',
  tracks: {
    drum: { rank: 3, channels: 2 },
    bass: { rank: 3, real_rank: 4, channels: 1 },
    guitar: { rank: 2, real_rank: 2, channels: 1, hasSolo: true },
    vocals: { rank: 1, channels: 1, vocal_parts: 1, vocal_gender: 'Female' },
    keys: { rank: 1, real_rank: 1, channels: 1 },
    backing: 2,
  },
  preview: 22000,
  song_length: 144000,
  rank_band: 1,
  rating: 1,
  genre: { genre: 'Indie Rock', sub_genre: 'Indie Rock' },
  year_released: 2018,
  album: { hasArt: true, name: 'Be the Cowboy', track_number: 2 },
  key: 'E',
  CATemh: true,
  author: 'Ruggy',
  pack_name: 'Chart-a-thon 2018',
} satisfies CreateDTAFileRecipe

export default whydidntyoustopme
