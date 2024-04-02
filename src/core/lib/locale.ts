import { SongKeyMajorValues, SongKeyMinorValues } from '..'

export type ExtractNumbers<T> = T extends number ? T : never
export type ExtractStrings<T> = T extends string ? T : never
export type StringNumToNum<T> = T extends '-1' ? -1 : T

export const localeObject = {
  name: {
    '123': '123',
    A: 'a',
    B: 'b',
    C: 'c',
    D: 'd',
    E: 'e',
    F: 'f',
    G: 'g',
    H: 'h',
    I: 'i',
    J: 'j',
    K: 'k',
    L: 'l',
    M: 'm',
    N: 'n',
    O: 'o',
    P: 'p',
    Q: 'q',
    R: 'r',
    S: 's',
    T: 't',
    U: 'u',
    V: 'v',
    W: 'w',
    X: 'x',
    Y: 'y',
    Z: 'z',
  },
  anim_tempo: {
    16: 'Slow',
    32: 'Medium',
    64: 'Fast',
    kTempoSlow: 'Slow',
    kTempoMedium: 'Medium',
    kTempoFast: 'Fast',
  },
  band_fail_cue: {
    'band_fail_rock.cue': 'Rock',
    'band_fail_vintage.cue': 'Vintage',
    'band_fail_heavy.cue': 'Heavy',
    'band_fail_electro.cue': 'Electro',
    'band_fail_rock_keys.cue': 'Rock (Keys)',
    'band_fail_vintage_keys.cue': 'Vintage (Keys)',
    'band_fail_heavy_keys.cue': 'Heavy (Keys)',
    'band_fail_electro_keys.cue': 'Electro (Keys)',
    undefined: 'Not Specified',
  },
  bank: {
    'sfx/tambourine_bank.milo': 'Tambourine',
    'sfx/cowbell_bank.milo': 'Cowbell',
    'sfx/handclap_bank.milo': 'Hand Clap',
    'sfx/cowbell3_bank.milo': 'Cowbell (Alternate)',
  },
  drum_bank: {
    'sfx/kit01_bank.milo': 'Hard Rock Kit',
    'sfx/kit02_bank.milo': 'Arena Kit',
    'sfx/kit03_bank.milo': 'Vintage Kit',
    'sfx/kit04_bank.milo': 'Trashy Kit',
    'sfx/kit05_bank.milo': 'Electronic Kit',
  },
  genre: {
    alternative: 'Alternative',
    blues: 'Blues',
    classical: 'Classical',
    classicrock: 'Classic Rock',
    country: 'Country',
    emo: 'Emo',
    fusion: 'Fusion',
    glam: 'Glam',
    grunge: 'Grunge',
    hiphoprap: 'Hip-Hop/Rap',
    indierock: 'Indie Rock',
    inspirational: 'Inspirational',
    jazz: 'Jazz',
    jrock: 'J-Rock',
    latin: 'Latin',
    metal: 'Metal',
    new_wave: 'New Wave',
    novelty: 'Novelty',
    numetal: 'Nu-Metal',
    popdanceelectronic: 'Pop/Dance/Electronic',
    poprock: 'Pop-Rock',
    prog: 'Prog',
    punk: 'Punk',
    rbsoulfunk: 'R&B/Soul/Funk',
    reggaeska: 'Reggae/Ska',
    rock: 'Rock',
    southernrock: 'Southern Rock',
    world: 'World',
    other: 'Other',
  },
  rating: {
    1: 'Family Friendly',
    2: 'Supervision Recommended',
    3: 'Mature Content',
    4: 'No Rating',
  },
  song_scroll_speed: {
    1700: 'Crazy',
    1850: 'Faster',
    2000: 'Fast',
    2150: 'Medium Fast',
    2300: 'Normal',
    2450: 'Medium Slow',
    2600: 'Slow',
    2750: 'Slower',
    3000: 'Comatose',
  },
  sub_genre: {
    subgenre_alternative: 'Alternative',
    subgenre_college: 'College',
    subgenre_other: 'Other',
    subgenre_acoustic: 'Acoustic',
    subgenre_chicago: 'Chicago',
    subgenre_classic: 'Classic',
    subgenre_contemporary: 'Contemporary',
    subgenre_country: 'Country',
    subgenre_delta: 'Delta',
    subgenre_electric: 'Electric',
    subgenre_classical: 'Classical',
    subgenre_classicrock: 'Classic Rock',
    subgenre_bluegrass: 'Bluegrass',
    subgenre_honkytonk: 'Honky Tonk',
    subgenre_outlaw: 'Outlaw',
    subgenre_traditionalfolk: 'Traditional Folk',
    subgenre_emo: 'Emo',
    subgenre_fusion: 'Fusion',
    subgenre_glam: 'Glam',
    subgenre_goth: 'Goth',
    subgenre_grunge: 'Grunge',
    subgenre_alternativerap: 'Alternative Rap',
    subgenre_gangsta: 'Gangsta',
    subgenre_hardcorerap: 'Hardcore Rap',
    subgenre_hiphop: 'Hip Hop',
    subgenre_oldschoolhiphop: 'Old School Hip Hop',
    subgenre_rap: 'Rap',
    subgenre_triphop: 'Trip Hop',
    subgenre_undergroundrap: 'Underground Rap',
    subgenre_indierock: 'Indie Rock',
    subgenre_lofi: 'Lo-fi',
    subgenre_mathrock: 'Math Rock',
    subgenre_noise: 'Noise',
    subgenre_postrock: 'Post Rock',
    subgenre_shoegazing: 'Shoegazing',
    subgenre_inspirational: 'Inspirational',
    subgenre_acidjazz: 'Acid Jazz',
    subgenre_experimental: 'Experimental',
    subgenre_ragtime: 'Ragtime',
    subgenre_smooth: 'Smooth',
    subgenre_jrock: 'J-Rock',
    subgenre_latin: 'Latin',
    subgenre_black: 'Black',
    subgenre_core: 'Core',
    subgenre_death: 'Death',
    subgenre_hair: 'Hair',
    subgenre_industrial: 'Industrial',
    subgenre_metal: 'Metal',
    subgenre_power: 'Power',
    subgenre_prog: 'Prog',
    subgenre_speed: 'Speed',
    subgenre_thrash: 'Thrash',
    subgenre_darkwave: 'Dark Wave',
    subgenre_electroclash: 'Electroclash',
    subgenre_new_wave: 'New Wave',
    subgenre_synth: 'Synthpop',
    subgenre_novelty: 'Novelty',
    subgenre_numetal: 'Nu-Metal',
    subgenre_ambient: 'Ambient',
    subgenre_breakbeat: 'Breakbeat',
    subgenre_chiptune: 'Chiptune',
    subgenre_dance: 'Dance',
    subgenre_downtempo: 'Downtempo',
    subgenre_dub: 'Dub',
    subgenre_drumandbass: 'Drum and Bass',
    subgenre_electronica: 'Electronica',
    subgenre_garage: 'Garage',
    subgenre_hardcoredance: 'Hardcore Dance',
    subgenre_house: 'House',
    subgenre_techno: 'Techno',
    subgenre_trance: 'Trance',
    subgenre_pop: 'Pop',
    subgenre_softrock: 'Soft Rock',
    subgenre_teen: 'Teen',
    subgenre_progrock: 'Prog Rock',
    subgenre_dancepunk: 'Dance Punk',
    subgenre_hardcore: 'Hardcore',
    subgenre_disco: 'Disco',
    subgenre_funk: 'Funk',
    subgenre_motown: 'Motown',
    subgenre_rhythmandblues: 'Rhythm and Blues',
    subgenre_soul: 'Soul',
    subgenre_reggae: 'Reggae',
    subgenre_ska: 'Ska',
    subgenre_arena: 'Arena',
    subgenre_blues: 'Blues',
    subgenre_folkrock: 'Folk Rock',
    subgenre_hardrock: 'Hard Rock',
    subgenre_psychadelic: 'Psychedelic',
    subgenre_rock: 'Rock',
    subgenre_rockabilly: 'Rockabilly',
    subgenre_rockandroll: 'Rock and Roll',
    subgenre_surf: 'Surf',
    subgenre_southernrock: 'Southern Rock',
    subgenre_world: 'World',
    subgenre_acapella: 'A capella',
    subgenre_contemporaryfolk: 'Contemporary Folk',
    subgenre_oldies: 'Oldies',
    undefined: 'Not Specified',
  },
  vocal_gender: {
    male: 'Male',
    female: 'Female',
  },
  vocal_parts: {
    0: 'No Vocals',
    1: 'Solo Vocals',
    2: '2-Part Harmonies',
    3: '3-Part Harmonies',
  },
  rank: {
    name: {
      '-1': 'No Part',
      0: 'Warmup',
      1: 'Apprentice',
      2: 'Solid',
      3: 'Moderate',
      4: 'Challenging',
      5: 'Nightmare',
      6: 'Impossible',
    },
    dots: {
      '-1': 'No Part',
      0: 'Zero Dots',
      1: 'One Dot',
      2: 'Two Dots',
      3: 'Three Dots',
      4: 'Four Dots',
      5: 'Five Dots',
      6: 'Devil Dots',
    },
  },
  solo: {
    drum: 'Drums',
    bass: 'Bass',
    guitar: 'Guitar',
    keys: 'Keys',
    vocal_percussion: 'Vocal Percussion',
  },
  extra_authoring: {
    disc_update: 'Disc Update',
    pearljam: 'Pearl Jam',
    greenday: 'Green Day',
  },
  encoding: {
    latin1: 'Latin-1',
    utf8: 'UTF-8',
  },
  game_origin: {
    rb1: 'Rock Band 1',
    rb1_dlc: 'Rock Band 1 DLC',
    rb2: 'Rock Band 2',
    rb2_dlc: 'Rock Band 2 DLC',
    rb3: 'Rock Band 3',
    rb3_dlc: 'Rock Band 3 DLC',
    lego: 'LEGO Rock Band',
    greenday: 'Green Day: Rock Band',
    ugc: 'User-generated content/Rock Band Network',
    ugc_plus: 'User-generated content/Rock Band Network 2.0',
  },
  song_key: {
    0: 'C',
    1: 'Db',
    2: 'D',
    3: 'Eb',
    4: 'E',
    5: 'F',
    6: 'F#',
    7: 'G',
    8: 'Ab',
    9: 'A',
    10: 'Bb',
    11: 'B',
  },
  song_tonality: {
    0: 'Major',
    1: 'Minor',
  },
} as const

const {
  name,
  anim_tempo,
  band_fail_cue,
  bank,
  drum_bank,
  encoding,
  extra_authoring,
  game_origin,
  genre,
  rank,
  rating,
  solo,
  song_scroll_speed,
  song_key,
  song_tonality,
  sub_genre,
  vocal_gender,
  vocal_parts,
} = localeObject

export type SongTitleOptionsUppercaseNames = keyof typeof name
export type SongTitleOptionsLowercaseNames = (typeof name)[SongTitleOptionsUppercaseNames]

export type AnimTempo = keyof typeof anim_tempo
export type AnimTempoStrings = ExtractStrings<AnimTempo>
export type AnimTempoNumbers = ExtractNumbers<AnimTempo>
export type AnimTempoNames = (typeof anim_tempo)[AnimTempo]

export type BandFailCue = Exclude<keyof typeof band_fail_cue, 'undefined'>
export type BandFailCueNames = (typeof band_fail_cue)[BandFailCue]

export type PercussionBank = keyof typeof bank
export type PercussionBankNames = (typeof bank)[PercussionBank]

export type DrumBank = keyof typeof drum_bank
export type DrumBankNames = (typeof drum_bank)[DrumBank]

export type SongGenre = keyof typeof genre
export type SongGenreNames = (typeof genre)[SongGenre]

export type SongRating = keyof typeof rating
export type SongRatingNames = (typeof rating)[SongRating]

export type SongScrollSpeed = keyof typeof song_scroll_speed
export type SongScrollSpeedNames = (typeof song_scroll_speed)[SongScrollSpeed]

export type SongSubGenre = Exclude<keyof typeof sub_genre, 'undefined'>
export type SongSubGenreNames = (typeof sub_genre)[SongSubGenre]

export type VocalGender = keyof typeof vocal_gender
export type VocalGenderNames = (typeof vocal_gender)[VocalGender]

export type VocalParts = keyof typeof vocal_parts
export type VocalPartsNames = (typeof vocal_parts)[VocalParts]

export type SongKey = keyof typeof song_key
export type SongTonality = keyof typeof song_tonality

export type InstrRankingNumbers = StringNumToNum<keyof typeof rank.name>
export type InstrRankingNames = (typeof rank.name)[InstrRankingNumbers]
export type InstrRankingNamesAsDots = (typeof rank.dots)[InstrRankingNumbers]

export type BandRankingNumbers = Exclude<InstrRankingNumbers, -1>
export type BandRankingNames = (typeof rank.name)[BandRankingNumbers]
export type BandRankingNamesAsDots = (typeof rank.dots)[BandRankingNumbers]

export type SoloFlags = keyof typeof solo
export type SoloFlagsNames = (typeof solo)[SoloFlags]

export type ExtraAuthoringFlags = keyof typeof extra_authoring
export type ExtraAuthoringFlagsNames = (typeof extra_authoring)[ExtraAuthoringFlags]

export type SongEncoding = keyof typeof encoding
export type SongEncodingNames = (typeof encoding)[SongEncoding]

export type SongGameOrigin = keyof typeof game_origin
export type SongGameOriginNames = (typeof game_origin)[SongGameOrigin]

export type GetLocaleRankReturnType<D extends boolean | undefined> = D extends true ? BandRankingNamesAsDots : BandRankingNames

/**
 * Translates DTA file language values to human readable strings.
 */
export const localeKeyToValue = {
  anim_tempo: (key: AnimTempo): AnimTempoNames => {
    return anim_tempo[key]
  },
  band_fail_cue: (key?: BandFailCue): BandFailCueNames | 'Not Specified' => {
    return band_fail_cue[key === undefined ? 'undefined' : key]
  },
  bank: (key: PercussionBank): PercussionBankNames => {
    return bank[key]
  },
  drum_bank: (key: DrumBank): DrumBankNames => {
    return drum_bank[key]
  },
  genre: (key: SongGenre): SongGenreNames => {
    return genre[key]
  },
  rating: (key: SongRating): SongRatingNames => {
    return rating[key]
  },
  song_scroll_speed: (key: SongScrollSpeed): SongScrollSpeedNames => {
    return song_scroll_speed[key]
  },
  sub_genre: (key?: SongSubGenre): SongSubGenreNames | 'Not Specified' => {
    return sub_genre[key === undefined ? 'undefined' : key]
  },
  vocal_gender: (key: VocalGender): VocalGenderNames => {
    return vocal_gender[key]
  },
  vocal_parts: (key: VocalParts): VocalPartsNames => {
    return vocal_parts[key]
  },
  game_origin: (key: SongGameOrigin): SongGameOriginNames => {
    return game_origin[key]
  },
  song_key: <V extends SongKey, T extends SongTonality>(vocal_tonic_note: V, song_tonality: T): SongKeyMajorValues | SongKeyMinorValues => {
    let returnString = ''
    if (vocal_tonic_note === 0) returnString += 'C'
    else if (vocal_tonic_note === 1) returnString += 'Db'
    else if (vocal_tonic_note === 2) returnString += 'D'
    else if (vocal_tonic_note === 3) returnString += 'Eb'
    else if (vocal_tonic_note === 4) returnString += 'E'
    else if (vocal_tonic_note === 5) returnString += 'F'
    else if (vocal_tonic_note === 6) returnString += 'F#'
    else if (vocal_tonic_note === 7) returnString += 'G'
    else if (vocal_tonic_note === 8) returnString += 'Ab'
    else if (vocal_tonic_note === 9) returnString += 'A'
    else if (vocal_tonic_note === 10) returnString += 'Bb'
    else returnString += 'B'

    if (song_tonality === 1) returnString += 'm'

    return returnString as SongKeyMajorValues | SongKeyMinorValues
  },
  rank: <D extends boolean | undefined>(rankCalc: number, asDot?: D): GetLocaleRankReturnType<D> => {
    if (asDot) {
      return localeObject.rank.dots[String(rankCalc) as keyof typeof localeObject.rank.name] as GetLocaleRankReturnType<D>
    }

    return localeObject.rank.name[String(rankCalc) as keyof typeof localeObject.rank.name] as GetLocaleRankReturnType<D>
  },
}

export const localeValueToKey = {
  anim_tempo: (value: AnimTempoStrings): AnimTempoNumbers => {
    return Number(Object.keys(anim_tempo).find((key) => key === value)) as AnimTempoNumbers
  },
  band_fail_cue: (value: BandFailCueNames): BandFailCue => {
    return (Object.keys(band_fail_cue) as (keyof typeof band_fail_cue)[]).find((key) => band_fail_cue[key] === value) as BandFailCue
  },
  bank: (value: PercussionBankNames): PercussionBank => {
    return (Object.keys(bank) as (keyof typeof bank)[]).find((key) => bank[key] === value) as PercussionBank
  },
  drum_bank: (value: DrumBankNames): DrumBank => {
    return (Object.keys(drum_bank) as (keyof typeof drum_bank)[]).find((key) => drum_bank[key] === value) as DrumBank
  },
  genre: (value: SongGenreNames): SongGenre => {
    return (Object.keys(genre) as (keyof typeof genre)[]).find((key) => genre[key] === value) as SongGenre
  },
  rating: (value: SongRatingNames): SongRating => {
    return Number(Object.keys(rating).find((key) => rating[Number(key) as SongRating] === value)) as SongRating
  },
  song_scroll_speed: (value: SongScrollSpeedNames): SongScrollSpeed => {
    return Number(Object.keys(song_scroll_speed).find((key) => song_scroll_speed[Number(key) as SongScrollSpeed] === value)) as SongScrollSpeed
  },
  sub_genre: (value: SongSubGenreNames): SongSubGenre => {
    return (Object.keys(sub_genre) as (keyof typeof sub_genre)[]).find((key) => sub_genre[key] === value) as SongSubGenre
  },
  vocal_gender: (value: VocalGenderNames): VocalGender => {
    return (Object.keys(vocal_gender) as (keyof typeof vocal_gender)[]).find((key) => vocal_gender[key] === value) as VocalGender
  },
  vocal_parts: (value: VocalPartsNames): VocalParts => {
    return Number(Object.keys(vocal_parts).find((key) => vocal_parts[Number(key) as VocalParts] === value)) as VocalParts
  },
}
