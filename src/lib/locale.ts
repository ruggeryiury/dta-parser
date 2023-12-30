import { SongKeyValues, SongTonalityValues } from './dta'
import { SongKeyUpdateOptions } from './update'

/**
 * Locale for `anim_tempo` keys and parsed values.
 */
export const animTempoValuesObj = {
  16: 'Slow',
  32: 'Medium',
  64: 'Fast',
  kTempoSlow: 'Slow',
  kTempoMedium: 'Medium',
  kTempoFast: 'Fast',
} as const

/**
 * Locale for `band_fail_cue` keys and parsed values.
 */
export const bandFailCueValuesObj = {
  'band_fail_rock.cue': 'Rock',
  'band_fail_vintage.cue': 'Vintage',
  'band_fail_heavy.cue': 'Heavy',
  'band_fail_electro.cue': 'Electro',
  'band_fail_rock_keys.cue': 'Rock (Keys)',
  'band_fail_vintage_keys.cue': 'Vintage (Keys)',
  'band_fail_heavy_keys.cue': 'Heavy (Keys)',
  'band_fail_electro_keys.cue': 'Electro (Keys)',
} as const

/**
 * Locale for `bank` keys and parsed values.
 */
export const bankValuesObj = {
  'sfx/tambourine_bank.milo': 'Tambourine',
  'sfx/cowbell_bank.milo': 'Cowbell',
  'sfx/handclap_bank.milo': 'Hand Clap',
  'sfx/cowbell3_bank.milo': 'Cowbell (Alternate)',
} as const

/**
 * Locale for `drum_bank` keys and parsed values.
 */
export const drumBankValuesObj = {
  'sfx/kit01_bank.milo': 'Hard Rock Kit',
  'sfx/kit02_bank.milo': 'Arena Kit',
  'sfx/kit03_bank.milo': 'Vintage Kit',
  'sfx/kit04_bank.milo': 'Trashy Kit',
  'sfx/kit05_bank.milo': 'Electronic Kit',
} as const

/**
 * Locale for `genre` keys and parsed values.
 */
export const genreValuesObj = {
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
} as const

/**
 * Locale for `rating` keys and parsed values.
 */
export const ratingValuesObj = {
  1: 'Family Friendly',
  2: 'Supervision Recommended',
  3: 'Mature Content',
  4: 'No Rating',
} as const

/**
 * Locale for `song_scroll_speed` keys and parsed values.
 */
export const songScrollSpeedValuesObj = {
  1700: 'Crazy',
  1850: 'Faster',
  2000: 'Fast',
  2150: 'Medium Fast',
  2300: 'Normal',
  2450: 'Medium Slow',
  2600: 'Slow',
  2750: 'Slower',
  3000: 'Comatose',
} as const

/**
 * Locale for `sub_genre` keys and parsed values.
 */
export const subGenreValuesObj = {
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
} as const

/**
 * Locale for `vocal_gender` keys and parsed values.
 */
export const vocalGenderValuesObj = {
  male: 'Male',
  female: 'Female',
} as const

/**
 * Locale for `vocal_parts` keys and parsed values.
 */
export const vocalPartsValuesObj = {
  0: 'No Vocals',
  1: 'Solo Vocals',
  2: '2-Part Harmonies',
  3: '3-Part Harmonies',
} as const

/**
 * Locale for `rank` keys and parsed values.
 */
export const rankValuesObj = {
  0: 'No Part',
  1: 'Warmup',
  2: 'Apprentice',
  3: 'Solid',
  4: 'Moderate',
  5: 'Challenging',
  6: 'Nightmare',
  7: 'Impossible',
} as const

export type AnimTempoTypes = keyof typeof animTempoValuesObj
export type AnimTempoNumeralTypes = Exclude<keyof typeof animTempoValuesObj, 'kTempoSlow' | 'kTempoMedium' | 'kTempoFast'>
export type AnimTempoValues = (typeof animTempoValuesObj)[AnimTempoTypes]

export type BandFailCueTypes = keyof typeof bandFailCueValuesObj
export type BandFailCueValues = (typeof bandFailCueValuesObj)[BandFailCueTypes] | 'Not Specified'

export type BankTypes = keyof typeof bankValuesObj
export type BankValues = (typeof bankValuesObj)[BankTypes]

export type DrumBankTypes = keyof typeof drumBankValuesObj
export type DrumBankValues = (typeof drumBankValuesObj)[DrumBankTypes]

export type GenreTypes = keyof typeof genreValuesObj
export type GenreValues = (typeof genreValuesObj)[GenreTypes]

export type RatingTypes = keyof typeof ratingValuesObj
export type RatingValues = (typeof ratingValuesObj)[RatingTypes]

export type SongScrollSpeedTypes = keyof typeof songScrollSpeedValuesObj
export type SongScrollSpeedValues = (typeof songScrollSpeedValuesObj)[SongScrollSpeedTypes]

export type SubGenreTypes = keyof typeof subGenreValuesObj
export type SubGenreValues = (typeof subGenreValuesObj)[SubGenreTypes] | 'Unknown'

export type VocalGenderTypes = keyof typeof vocalGenderValuesObj
export type VocalGenderValues = (typeof vocalGenderValuesObj)[VocalGenderTypes]

export type VocalPartsTypes = keyof typeof vocalPartsValuesObj
export type VocalPartsValues = (typeof vocalPartsValuesObj)[VocalPartsTypes]

export type RankLocaleOnlyNumberTypes = keyof typeof rankValuesObj
export type InstrumentRankingsNumberOptions = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6
export type InstrumentRankingsVerbosedOptions = (typeof rankValuesObj)[keyof typeof rankValuesObj]

export type BandRankingsNumberOptions = Exclude<InstrumentRankingsNumberOptions, -1>
export type BandRankingsVerbosedOptions = Exclude<InstrumentRankingsVerbosedOptions, 'No Part'>

/**
 * Functions used on the update method.
 *
 * It resolves many values accepted from the update method to actual values used on the `.dta` file.
 */
export const getKeyFromValue = {
  anim_tempo: (v: AnimTempoValues) => Number(Object.keys(animTempoValuesObj).find((key) => animTempoValuesObj[Number(key) as AnimTempoTypes] === v)) as AnimTempoNumeralTypes,
  band_fail_cue: (v: BandFailCueValues) => String(Object.keys(bandFailCueValuesObj).find((key) => bandFailCueValuesObj[key as BandFailCueTypes] === v)) as BandFailCueTypes,
  bank: (v: BankValues) => String(Object.keys(bankValuesObj).find((key) => bankValuesObj[key as BankTypes] === v)) as BankTypes,
  drum_bank: (v: DrumBankValues) => String(Object.keys(drumBankValuesObj).find((key) => drumBankValuesObj[key as DrumBankTypes] === v)) as DrumBankTypes,
  genre: (v: GenreValues) => String(Object.keys(genreValuesObj).find((key) => genreValuesObj[key as GenreTypes] === v)) as GenreTypes,
  rating: (v: RatingValues) => Number(Object.keys(ratingValuesObj).find((key) => ratingValuesObj[Number(key) as RatingTypes] === v)) as RatingTypes,
  song_scroll_speed: (v: SongScrollSpeedValues) =>
    Number(Object.keys(songScrollSpeedValuesObj).find((key) => songScrollSpeedValuesObj[Number(key) as SongScrollSpeedTypes] === v)) as SongScrollSpeedTypes,
  sub_genre: (v: SubGenreValues) => String(Object.keys(subGenreValuesObj).find((key) => subGenreValuesObj[key as SubGenreTypes] === v)) as SubGenreTypes,
  vocal_gender: (v: VocalGenderValues) => String(Object.keys(vocalGenderValuesObj).find((key) => vocalGenderValuesObj[key as VocalGenderTypes] === v)) as VocalGenderTypes,
  vocal_parts: (v: VocalPartsValues) => Number(Object.keys(vocalPartsValuesObj).find((key) => vocalPartsValuesObj[Number(key) as VocalPartsTypes] === v)) as VocalPartsTypes,
}

/**
 * Module for locale convertions.
 */
export const getLocale = {
  anim_tempo: (value: AnimTempoTypes) => animTempoValuesObj[value] as AnimTempoValues,
  band_fail_cue: (value?: BandFailCueTypes) => (value && bandFailCueValuesObj[value] ? bandFailCueValuesObj[value] : 'Not Specified') as BandFailCueValues,
  bank: (value: BankTypes) => bankValuesObj[value] as BankValues,
  drum_bank: (value: DrumBankTypes) => drumBankValuesObj[value] as DrumBankValues,
  genre: (value: GenreTypes) => genreValuesObj[value] as GenreValues,
  rating: (value: RatingTypes) => ratingValuesObj[value] as RatingValues,
  song_scroll_speed: (value: SongScrollSpeedTypes) => songScrollSpeedValuesObj[value] as SongScrollSpeedValues,
  sub_genre: (value: SubGenreTypes) => subGenreValuesObj[value] as SubGenreValues,
  vocal_gender: (value: VocalGenderTypes) => vocalGenderValuesObj[value] as VocalGenderValues,
  vocal_parts: (value: VocalPartsTypes) => vocalPartsValuesObj[value] as VocalPartsValues,
  rank: (rankCalc: number) => rankValuesObj[(rankCalc + 1) as RankLocaleOnlyNumberTypes] as BandRankingsVerbosedOptions,
  song_key: (vocal_tonic_note: SongKeyValues, song_tonality: SongTonalityValues): SongKeyUpdateOptions['key'] => {
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

    return returnString as SongKeyUpdateOptions['key']
  },
}
