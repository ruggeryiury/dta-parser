import { CreateDTAFileRecipe } from '../../src/utils/createDTA'
import { MAGMAFileContents } from '../@types/MAGMAFileContents'
import { genDTAFileFromRecipe } from '../utils/genDTAFileFromRecipe'

const recipes = {
  paintwar: {
    id: '7748paintwar',
    name: 'Paint War',
    artist: 'Dream Avenue',
    master: true,
    song_id: 1774800001,
    songname: '7748paintwar',
    tracks: {
      drum: { rank: 2, channels: 2 },
      bass: { rank: 0, real_rank: 0, channels: 2, tuning: [0, 0, 0, 0] },
      guitar: { rank: 2, real_rank: 2, channels: 2, tuning: [0, 0, 0, 0, 0, 0] },
      keys: { rank: 2, real_rank: 2, channels: 2 },
      backing: 2,
    },
    preview: 42914,
    song_length: 119205,
    rank_band: 2,
    rating: 1,
    genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
    year_released: 2018,
    album: { hasArt: true, name: 'Our Shared Universes', track_number: 4 },
    key: 'A Major',
    multitrack: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  southparktheme: {
    id: '7748southparktheme',
    name: 'South Park Theme',
    artist: 'Primus',
    master: true,
    song_id: 1774800002,
    songname: '7748southparktheme',
    tracks: {
      drum: { rank: 3, channels: 2 },
      bass: { rank: 2, real_rank: 2, channels: 1, tuning: [0, 0, 0, 0] },
      guitar: { rank: 4, real_rank: 4, channels: 1, tuning: [0, 0, 0, 0, 0, 0] },
      vocals: { rank: 0, channels: 1, vocal_parts: 3, vocal_gender: 'Male' },
      backing: 2,
    },
    preview: 4864,
    song_length: 36318,
    rank_band: 3,
    rating: 3,
    genre: { genre: 'Alternative', sub_genre: 'Alternative' },
    year_released: 1998,
    album: { hasArt: true, name: 'Chef Aid: The South Park Album', track_number: 1 },
    key: 'D# Minor',
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  hideandseek: {
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
    key: 'A Major',
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  cravoecanela: {
    id: '7748cravoecanela',
    name: 'Cravo e Canela',
    artist: 'Clube da Esquina',
    master: true,
    song_id: 1774800004,
    songname: '7748cravoecanela',
    tracks: {
      drum: { rank: 3, channels: 2 },
      bass: { rank: 2, channels: 1 },
      guitar: { rank: 4, channels: 1 },
      vocals: { rank: 3, channels: 1, vocal_parts: 2, vocal_gender: 'Male' },
      keys: { rank: 2, real_rank: 3, channels: 1, hasSolo: true },
      backing: 2,
    },
    preview: 32426,
    song_length: 145042,
    rank_band: 3,
    encoding: 'utf8',
    rating: 1,
    genre: { genre: 'Latin', sub_genre: 'Latin' },
    year_released: 1972,
    album: { hasArt: true, name: 'Clube da Esquina', track_number: 6 },
    key: 'G Major',
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  deadwomb: {
    id: '7748deadwomb',
    name: 'Dead Womb',
    artist: 'Death From Above 1979',
    master: true,
    song_id: 1774800005,
    songname: '7748deadwomb',
    tracks: {
      drum: { rank: 6, channels: 2 },
      bass: { rank: 5, real_rank: 5, channels: 2, tuning: [0, 0, 0, 0], hasSolo: true },
      vocals: { rank: 0, channels: 1, vocal_parts: 2, vocal_gender: 'Male', hasSolo: true },
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
    key: 'C Minor',
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  minuet: {
    id: '7748minuet',
    name: 'Minuet',
    artist: 'From First to Last',
    master: true,
    song_id: 1774800006,
    songname: '7748minuet',
    tracks: {
      guitar: { rank: 2, real_rank: 2, channels: 2, tuning: [0, 0, 0, 0, 0, 0] },
      backing: 2,
    },
    preview: 17303,
    song_length: 67301,
    rank_band: 2,
    rating: 1,
    genre: { genre: 'Other', sub_genre: 'Acoustic' },
    year_released: 2004,
    album: { hasArt: true, name: 'Dear Diary, My Teen Angst Has a Body Count', track_number: 10 },
    key: 'D Minor',
    multitrack: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  passport: {
    id: '7748passport',
    name: 'Passport',
    artist: 'George Stone',
    master: true,
    song_id: 1774800011,
    songname: '7748passport',
    tracks: {
      drum: { rank: 3, channels: 4 },
      bass: { rank: 1, real_rank: 1, channels: 2, tuning: [0, 0, 0, 0] },
      guitar: { rank: 2, real_rank: 3, channels: 2, tuning: [0, 0, 0, 0, 0, 0] },
      keys: { rank: 4, real_rank: 4, channels: 2 },
      backing: 2,
    },
    anim_tempo: 64,
    preview: 89000,
    song_length: 132705,
    rank_band: 2,
    rating: 1,
    genre: { genre: 'Fusion', sub_genre: 'Fusion' },
    year_released: 1995,
    album: { hasArt: true },
    key: 'C Minor',
    multitrack: true,
    CATemh: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  spacecadet: {
    id: '7748spacecadet',
    name: '3D Pinball Space Cadet: Level 1',
    artist: 'Matt Ridgeway',
    master: true,
    song_id: 1774800012,
    songname: '7748spacecadet',
    tracks: {
      drum: { rank: 3, channels: 4 },
      bass: { rank: 3, real_rank: 4, channels: 1, tuning: [0, 0, 0, 0] },
      guitar: { rank: 6, real_rank: 6, channels: 2, tuning: [0, 0, 0, 0, 0, 0] },
      keys: { rank: 6, real_rank: 6, channels: 2 },
      backing: 2,
    },
    preview: 25785,
    song_length: 65454,
    rank_band: 6,
    rating: 1,
    genre: { genre: 'Fusion', sub_genre: 'Fusion' },
    year_released: 1995,
    album: { hasArt: true },
    key: 'G# Minor',
    multitrack: true,
    CATemh: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  spacecadet2x: {
    id: '7748spacecadet2x',
    name: '3D Pinball Space Cadet: Level 1 (2x Bass Pedal)',
    artist: 'Matt Ridgeway',
    master: true,
    song_id: 1774800013,
    songname: '7748spacecadet2x',
    tracks: {
      drum: { rank: 4, channels: 4 },
      bass: { rank: 3, real_rank: 4, channels: 1, tuning: [0, 0, 0, 0] },
      guitar: { rank: 6, real_rank: 6, channels: 2, tuning: [0, 0, 0, 0, 0, 0] },
      keys: { rank: 6, real_rank: 6, channels: 2 },
      backing: 2,
    },
    preview: 25785,
    song_length: 65454,
    rank_band: 6,
    rating: 1,
    genre: { genre: 'Fusion', sub_genre: 'Fusion' },
    year_released: 1995,
    album: { hasArt: true },
    key: 'G# Minor',
    multitrack: true,
    doubleKick: true,
    CATemh: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  breakingintocars: {
    id: '7748breakingintocars',
    name: 'Breaking Into Cars',
    artist: 'The Raveonettes',
    master: true,
    song_id: 1774800014,
    songname: '7748breakingintocars',
    tracks: {
      drum: { rank: 0, channels: 2 },
      bass: { rank: 1, real_rank: 1, channels: 1, tuning: [0, 0, 0, 0] },
      guitar: { rank: 1, real_rank: 1, channels: 1, tuning: [0, 0, 0, 0, 0, 0], hasSolo: true },
      vocals: { rank: 1, channels: 1, vocal_parts: 2, vocal_gender: 'Male', hasSolo: true },
      backing: 2,
    },
    preview: 39500,
    song_length: 194425,
    rank_band: 1,
    rating: 2,
    genre: { genre: 'Indie Rock', sub_genre: 'Indie Rock' },
    year_released: 2009,
    album: { hasArt: true, name: 'In and Out of Control', track_number: 9 },
    key: 'C# Minor',
    CATemh: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  demon: {
    id: '7748demon',
    name: 'Demon',
    artist: 'Bear In Heaven',
    master: true,
    song_id: 1774800016,
    songname: '7748demon',
    tracks: {
      drum: { rank: 5, channels: 2 },
      bass: { rank: 0, real_rank: 0, channels: 1, tuning: [0, 0, 0, 0] },
      vocals: { rank: 1, channels: 1, vocal_parts: 3, vocal_gender: 'Male', hasSolo: true },
      keys: { rank: 6, real_rank: 4, channels: 1 },
      backing: 2,
    },
    preview: 31000,
    song_length: 300000,
    rank_band: 3,
    rating: 3,
    genre: { genre: 'Indie Rock', sub_genre: 'Indie Rock' },
    year_released: 2014,
    album: { hasArt: true, name: 'Time Is Over One Day Old', track_number: 7 },
    key: 'F Minor',
    CATemh: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  cuttingmyfingersoff: {
    id: '7748cuttingmyfingersoff',
    name: 'Cutting My Fingers Off',
    artist: 'Turnover',
    master: true,
    song_id: 1774800017,
    songname: '7748cuttingmyfingersoff',
    tracks: {
      drum: { rank: 1, channels: 2 },
      bass: { rank: 0, real_rank: 0, channels: 1, tuning: [0, 0, 0, 0] },
      guitar: { rank: 2, real_rank: 2, channels: 1, tuning: [0, 0, 0, 0, 0, 0], hasSolo: true },
      vocals: { rank: 1, channels: 1, vocal_parts: 1, vocal_gender: 'Male', hasSolo: true },
      backing: 2,
    },
    preview: 47917,
    song_length: 184968,
    rank_band: 1,
    rating: 2,
    genre: { genre: 'Indie Rock', sub_genre: 'Indie Rock' },
    year_released: 2015,
    album: { hasArt: true, name: 'Peripheral Vision', track_number: 1 },
    key: 'C Major',
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  thefightisover: {
    id: '7748thefightisover',
    name: 'The Fight Is Over',
    artist: 'The Blasting Company',
    master: true,
    song_id: 1774800018,
    songname: '7748thefightisover',
    tracks: {
      drum: { rank: 0, channels: 2 },
      bass: { rank: 0, real_rank: 0, channels: 1, tuning: [0, 0, 0, 0] },
      guitar: { rank: 2, real_rank: 2, channels: 1, tuning: [0, 0, 0, 0, 0, 0], hasSolo: true },
      vocals: { rank: 1, channels: 1, vocal_parts: 3, vocal_gender: 'Male' },
      backing: 2,
    },
    preview: 21991,
    song_length: 87583,
    rank_band: 0,
    rating: 1,
    genre: { genre: 'Glam', sub_genre: 'Glam' },
    year_released: 2017,
    album: { hasArt: true, name: 'Over The Garden Wall', track_number: 25 },
    key: 'C Major',
    CATemh: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  anysecondnow: {
    id: '7748anysecondnow',
    name: 'Any Second Now (Voices)',
    artist: 'Depeche Mode',
    master: true,
    song_id: 1774800019,
    songname: '7748anysecondnow',
    tracks: {
      bass: { rank: 0, real_rank: 0, channels: 1, tuning: [0, 0, 0, 0] },
      vocals: { rank: 1, channels: 1, vocal_parts: 2, vocal_gender: 'Male' },
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
    key: 'G Major',
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  congratulations: {
    id: '7748congratulations',
    name: 'Congratulations',
    artist: 'MGMT',
    master: true,
    song_id: 1774800020,
    songname: '7748congratulations',
    tracks: {
      drum: { rank: 0, channels: 2 },
      bass: { rank: 0, real_rank: 0, channels: 1, tuning: [0, 0, 0, 0] },
      guitar: { rank: 2, real_rank: 1, channels: 1, tuning: [0, 0, 0, 0, 0, 0] },
      vocals: { rank: 1, channels: 1, vocal_parts: 1, vocal_gender: 'Male', hasSolo: true },
      keys: { rank: 6, real_rank: 6, channels: 1, hasSolo: true },
      backing: 2,
    },
    preview: 79298,
    song_length: 236430,
    rank_band: 1,
    rating: 2,
    genre: { genre: 'Rock', sub_genre: 'Psychedelic' },
    year_released: 2010,
    album: { hasArt: true, name: 'Congratulations', track_number: 9 },
    key: 'G Major',
    CATemh: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  lightsinthesky: {
    id: '7748lightsinthesky',
    name: 'Lights In the Sky',
    artist: 'Nine Inch Nails',
    master: true,
    song_id: 1774800021,
    songname: '7748lightsinthesky',
    tracks: {
      vocals: { rank: 0, channels: 2, vocal_parts: 1, vocal_gender: 'Male' },
      keys: { rank: 0, real_rank: 1, channels: 2 },
      backing: 2,
    },
    anim_tempo: 16,
    song_scroll_speed: 'Fast',
    preview: 74181,
    song_length: 222647,
    rank_band: 0,
    rating: 1,
    genre: { genre: 'Rock', sub_genre: 'Rock' },
    year_released: 2008,
    album: { hasArt: true, name: 'The Slip', track_number: 7 },
    key: 'F Minor',
    multitrack: true,
    CATemh: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  mothernature: {
    id: '7748mothernature',
    name: 'Mother Nature',
    artist: 'Dream Avenue',
    master: true,
    song_id: 1774800022,
    songname: '7748mothernature',
    tracks: {
      drum: { rank: 2, channels: 2 },
      bass: { rank: 0, real_rank: 1, channels: 2, tuning: [0, 0, 0, 0] },
      guitar: { rank: 1, real_rank: 1, channels: 2, tuning: [0, 0, 0, 0, 0, 0] },
      keys: { rank: 5, real_rank: 5, channels: 2 },
      backing: 2,
    },
    preview: 28413,
    song_length: 85239,
    rank_band: 2,
    rating: 1,
    genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
    year_released: 2018,
    album: { hasArt: true, name: 'Our Shared Universes', track_number: 1 },
    key: 'E Major',
    multitrack: true,
    CATemh: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  mindmischief: {
    id: '7748mindmischief',
    name: 'Mind Mischief',
    artist: 'Tame Impala',
    master: true,
    song_id: 1774800023,
    songname: '7748mindmischief',
    tracks: {
      drum: { rank: 2, channels: 2 },
      bass: { rank: 2, real_rank: 2, channels: 1, tuning: [0, 0, 0, 0] },
      guitar: {
        rank: 2,
        real_rank: 2,
        channels: 1,
        tuning: [0, 0, 0, 0, 0, 0],
        hasSolo: true,
      },
      vocals: { rank: 2, channels: 1, vocal_parts: 3, vocal_gender: 'Male' },
      keys: { rank: 0, real_rank: 1, channels: 1 },
      backing: 2,
    },
    preview: 26929,
    song_length: 276114,
    rank_band: 2,
    rating: 1,
    genre: { genre: 'Rock', sub_genre: 'Psychedelic' },
    year_released: 2012,
    album: { hasArt: true, name: 'Lonerism', track_number: 4 },
    key: 'F# Major',
    author: 'Ruggy',
    CATemh: true,
  } as CreateDTAFileRecipe,

  theradiant: {
    id: '7748theradiant',
    name: 'The Radiant (Chart-A-Thon 2019 Mix)',
    artist: 'Dream Avenue',
    master: true,
    song_id: 1774800024,
    songname: '7748theradiant',
    tracks: {
      drum: { rank: 4, channels: 2 },
      bass: { rank: 4, real_rank: 4, channels: 2, tuning: [0, 0, 0, 0] },
      guitar: { rank: 3, real_rank: 4, channels: 2, tuning: [0, 0, 0, 0, 0, 0] },
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
    key: 'C Major',
    multitrack: true,
    CATemh: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  beinfriends: {
    id: '7748beinfriends',
    name: "Bein' Friends",
    artist: 'Keiichi Suzuki & Hirokazu Tanaka',
    master: true,
    song_id: 1774800030,
    songname: '7748beinfriends',
    tracks: {
      drum: { rank: 3, channels: 4 },
      bass: { rank: 2, real_rank: 3, channels: 1, tuning: [0, 0, 0, 0] },
      guitar: { rank: 3, real_rank: 4, channels: 1, pans: [-0.2], tuning: [0, 0, 0, 0, 0, 0] },
      keys: { rank: 2, real_rank: 2, channels: 1, pans: [0.2] },
      backing: 1,
    },
    preview: 3734,
    song_length: 102679,
    rank_band: 3,
    rating: 1,
    genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
    year_released: 1989,
    album: { hasArt: true, name: 'MOTHER (Original Soundtrack)', track_number: 21 },
    key: 'F Major',
    multitrack: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  hippiebattle: {
    id: '7748hippiebattle',
    name: 'Battle Theme 2 (Hippie Battle)',
    artist: 'Keiichi Suzuki & Hirokazu Tanaka',
    master: true,
    song_id: 1774800031,
    songname: '7748hippiebattle',
    tracks: {
      drum: { rank: 2, channels: 4 },
      bass: { rank: 3, real_rank: 3, channels: 1, tuning: [0, 0, 0, 0] },
      guitar: { rank: 3, real_rank: 3, channels: 1, tuning: [0, 0, 0, 0, 0, 0] },
      backing: 2,
    },
    drum_bank: 'Vintage Kit',
    anim_tempo: 64,
    preview: 36000,
    song_length: 71333,
    rank_band: 2,
    rating: 1,
    genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
    year_released: 1989,
    album: { hasArt: true, name: 'MOTHER (Original Soundtrack)', track_number: 7 },
    key: 'A Major',
    multitrack: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  motherearth: {
    id: '7748motherearth',
    name: 'Mother Earth',
    artist: 'Keiichi Suzuki & Hirokazu Tanaka',
    master: true,
    song_id: 1774800033,
    songname: '7748motherearth',
    tracks: {
      drum: { rank: 0, channels: 2 },
      bass: { rank: 1, real_rank: 1, channels: 1, tuning: [0, 0, 0, 0] },
      guitar: { rank: 2, real_rank: 2, channels: 1, pans: [-0.2], tuning: [0, 0, 0, 0, 0, 0] },
      keys: { rank: 0, real_rank: 0, channels: 1, pans: [0.2] },
      backing: 1,
    },
    anim_tempo: 16,
    preview: 18668,
    song_length: 119477,
    rank_band: 0,
    rating: 1,
    genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
    year_released: 1989,
    album: { hasArt: true, name: 'MOTHER (Original Soundtrack)', track_number: 1 },
    multitrack: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  pollyanna: {
    id: '7748pollyanna',
    name: 'Pollyanna (I Believe in You)',
    artist: 'Keiichi Suzuki & Hirokazu Tanaka',
    master: true,
    song_id: 1774800034,
    songname: '7748pollyanna',
    tracks: {
      drum: { rank: 1, channels: 4 },
      bass: { rank: 2, real_rank: 1, channels: 1, tuning: [-2, 0, 0, 0] },
      guitar: { rank: 3, real_rank: 3, channels: 1, pans: [-0.2], tuning: [0, 0, 0, 0, 0, 0] },
      keys: { rank: 2, real_rank: 2, channels: 1, pans: [0.2] },
      backing: 1,
    },
    drum_bank: 'Vintage Kit',
    preview: 4267,
    song_length: 121610,
    rank_band: 2,
    rating: 1,
    genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
    year_released: 1989,
    album: { hasArt: true, name: 'MOTHER (Original Soundtrack)', track_number: 4 },
    key: 'D Major',
    multitrack: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  twinkle: {
    id: '7748twinkle',
    name: 'Twinkle Elementary School',
    artist: 'Keiichi Suzuki & Hirokazu Tanaka',
    master: true,
    song_id: 1774800035,
    songname: '7748twinkle',
    tracks: {
      drum: { rank: 1, channels: 4 },
      bass: { rank: 2, real_rank: 2, channels: 1, tuning: [0, 0, 0, 0] },
      guitar: { rank: 1, real_rank: 1, channels: 1, pans: [0.2], tuning: [0, 0, 0, 0, 0, 0] },
      keys: { rank: 3, real_rank: 3, channels: 1, pans: [-0.2] },
      backing: 1,
    },
    preview: 3200,
    song_length: 126408,
    rank_band: 3,
    rating: 1,
    genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
    year_released: 1989,
    album: { hasArt: true, name: 'MOTHER (Original Soundtrack)', track_number: 19 },
    key: 'A Major',
    multitrack: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  tetodevidro: {
    id: '7748tetodevidro',
    name: 'Teto de Vidro',
    artist: 'Pitty',
    master: true,
    song_id: 1774800036,
    songname: '7748tetodevidro',
    tracks: {
      drum: { rank: 2, channels: 2 },
      bass: { rank: 1, channels: 2 },
      guitar: { rank: 2, channels: 2 },
      vocals: { rank: 2, channels: 2, vocal_parts: 1, vocal_gender: 'Female' },
      backing: 2,
    },
    preview: 39735,
    song_length: 215036,
    rank_band: 2,
    rating: 1,
    genre: { genre: 'Rock', sub_genre: 'Rock' },
    year_released: 2005,
    album: { hasArt: true, name: 'Admirável Chip Novo', track_number: 1 },
    key: 'C# Minor',
    multitrack: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  lennastheme: {
    id: '7748lennastheme',
    name: "Lenna's Theme",
    artist: 'Nobuo Uematsu',
    master: true,
    song_id: 1774800037,
    songname: '7748lennastheme',
    tracks: {
      bass: { rank: 0, real_rank: 0, channels: 2, tuning: [0, 0, 0, 0] },
      guitar: { rank: 1, real_rank: 1, channels: 2, tuning: [0, 0, 0, 0, 0, 0] },
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
    album: { hasArt: true, name: 'Final Fantasy V (Original Soundtrack)', track_number: 5 },
    key: 'C Major',
    multitrack: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  fateinhaze: {
    id: '7748fateinhaze',
    name: 'Fate in Haze',
    artist: 'Nobuo Uematsu',
    master: true,
    song_id: 1774800038,
    songname: '7748fateinhaze',
    tracks: {
      drum: { rank: 0, channels: 2 },
      bass: { rank: 0, real_rank: 0, channels: 2, tuning: [0, 0, 0, 0] },
      guitar: { rank: 1, real_rank: 1, channels: 2, tuning: [0, 0, 0, 0, 0, 0] },
      keys: { rank: 2, real_rank: 2, channels: 2 },
      backing: 2,
    },
    hopo_threshold: 90,
    anim_tempo: 16,
    preview: 12664,
    song_length: 147797,
    rank_band: 0,
    rating: 1,
    genre: { genre: 'Classical', sub_genre: 'Classical' },
    year_released: 1992,
    album: { hasArt: true, name: 'Final Fantasy V (Original Soundtrack)', track_number: 6 },
    key: 'Db Major',
    multitrack: true,
    CATemh: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  royalpalace: {
    id: '7748royalpalace',
    name: 'Royal Palace',
    artist: 'Nobuo Uematsu',
    master: true,
    song_id: 1774800039,
    songname: '7748royalpalace',
    tracks: {
      drum: { rank: 1, channels: 5 },
      bass: { rank: 0, real_rank: 0, channels: 2, tuning: [0, 0, 0, 0] },
      keys: { rank: 4, real_rank: 4, channels: 2 },
      backing: 2,
    },
    preview: 10536,
    song_length: 95032,
    rank_band: 2,
    rating: 1,
    genre: { genre: 'Classical', sub_genre: 'Classical' },
    year_released: 1992,
    album: { hasArt: true, name: 'Final Fantasy V (Original Soundtrack)', track_number: 21 },
    key: 'F# Major',
    multitrack: true,
    CATemh: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  magicant: {
    id: '7748magicant',
    name: 'Magicant',
    artist: 'Keiichi Suzuki & Hirokazu Tanaka',
    master: true,
    song_id: 1774800040,
    songname: '7748magicant',
    tracks: {
      drum: { rank: 0, channels: 4 },
      bass: { rank: 1, real_rank: 4, channels: 1, tuning: [0, 0, 0, 0] },
      keys: { rank: 0, real_rank: 0, channels: 1 },
      backing: 1,
    },
    hopo_threshold: 90,
    anim_tempo: 16,
    preview: 12664,
    song_length: 147797,
    rank_band: 0,
    rating: 1,
    genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
    year_released: 1992,
    album: { hasArt: true, name: 'MOTHER (Original Soundtrack)', track_number: 17 },
    key: 'C Major',
    multitrack: true,
    CATemh: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,

  smb2playersel: {
    id: '7748smb2playersel',
    name: 'Super Mario Bros. 2: Player Select',
    artist: 'Koji Kondo',
    master: true,
    song_id: 1774800041,
    songname: '7748smb2playersel',
    tracks: {
      drum: { rank: 2, channels: 2 },
      bass: { rank: 1, real_rank: 1, channels: 1, tuning: [0, 0, 0, 0] },
      guitar: { rank: 3, real_rank: 3, channels: 1, tuning: [0, 0, 0, 0, 0, 0], pans: [-0.7] },
      keys: { rank: 5, real_rank: 5, channels: 1, pans: [0.7] },
      backing: 1,
    },
    preview: 6400,
    song_length: 147797,
    rank_band: 3,
    rating: 1,
    genre: { genre: 'Pop/Dance/Electronic', sub_genre: 'Chiptune' },
    year_released: 1988,
    album: { hasArt: true, name: 'Super Mario Bros 2 (Original Soundtrack)', track_number: 2 },
    key: 'C Major',
    multitrack: true,
    CATemh: true,
    author: 'Ruggy',
  } as CreateDTAFileRecipe,
}

export type MySongsValues = keyof typeof recipes
export type MySongsModule = {
  [key in MySongsValues]: MAGMAFileContents
}
const mySongs: MySongsModule = {
  paintwar: genDTAFileFromRecipe(recipes.paintwar, {
    autogenTheme: 'SynthPop',
    hasAuthoredVenues: true,
    hasLipSyncFiles: true,
    releaseVer: 6,
    releasedAt: new Date('Aug 23, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  southparktheme: genDTAFileFromRecipe(recipes.southparktheme, {
    autogenTheme: 'PsychJamRock',
    hasAuthoredVenues: true,
    hasLipSyncFiles: true,
    releaseVer: 7,
    releasedAt: new Date('Sep 1, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  hideandseek: genDTAFileFromRecipe(recipes.hideandseek, {
    autogenTheme: 'SlowJam',
    hasAuthoredVenues: true,
    releaseVer: 3,
    releasedAt: new Date('Sep 4, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  cravoecanela: genDTAFileFromRecipe(recipes.cravoecanela, {
    autogenTheme: 'PsychJamRock',
    releaseVer: 3,
    releasedAt: new Date('Sep 17, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  deadwomb: genDTAFileFromRecipe(recipes.deadwomb, {
    autogenTheme: 'GaragePunkRock',
  }),

  minuet: genDTAFileFromRecipe(recipes.minuet),
  passport: genDTAFileFromRecipe(recipes.passport),

  spacecadet: genDTAFileFromRecipe(recipes.spacecadet, {
    autogenTheme: 'PsychJamRock',
  }),

  spacecadet2x: genDTAFileFromRecipe(recipes.spacecadet2x, {
    autogenTheme: 'PsychJamRock',
    doubleKickOptions: {
      kickwav: true,
    },
  }),

  breakingintocars: genDTAFileFromRecipe(recipes.breakingintocars),
  demon: genDTAFileFromRecipe(recipes.demon),
  cuttingmyfingersoff: genDTAFileFromRecipe(recipes.cuttingmyfingersoff),
  thefightisover: genDTAFileFromRecipe(recipes.thefightisover),
  anysecondnow: genDTAFileFromRecipe(recipes.anysecondnow),
  congratulations: genDTAFileFromRecipe(recipes.congratulations),
  lightsinthesky: genDTAFileFromRecipe(recipes.lightsinthesky),
  mothernature: genDTAFileFromRecipe(recipes.mothernature),
  mindmischief: genDTAFileFromRecipe(recipes.mindmischief),
  theradiant: genDTAFileFromRecipe(recipes.theradiant),
  beinfriends: genDTAFileFromRecipe(recipes.beinfriends),
  hippiebattle: genDTAFileFromRecipe(recipes.hippiebattle),
  motherearth: genDTAFileFromRecipe(recipes.motherearth),
  pollyanna: genDTAFileFromRecipe(recipes.pollyanna),
  twinkle: genDTAFileFromRecipe(recipes.twinkle),
  tetodevidro: genDTAFileFromRecipe(recipes.tetodevidro),
  lennastheme: genDTAFileFromRecipe(recipes.lennastheme),
  fateinhaze: genDTAFileFromRecipe(recipes.fateinhaze),
  royalpalace: genDTAFileFromRecipe(recipes.royalpalace),
  magicant: genDTAFileFromRecipe(recipes.magicant),
  smb2playersel: genDTAFileFromRecipe(recipes.smb2playersel),
}

export const mySongsList = (): MAGMAFileContents[] => {
  const list: MAGMAFileContents[] = []

  Object.keys(mySongs).forEach((song) => {
    list.push(mySongs[song as keyof typeof mySongs])
  })

  return list.sort((a, b) => {
    if (a.song_id > b.song_id) return 1
    if (a.song_id < b.song_id) return -1
    return 0
  })
}

export default mySongs
