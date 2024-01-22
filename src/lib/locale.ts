import { SongKeyUpdateOptions } from './update'

// /**
//  * Locale for `anim_tempo` keys and parsed values.
//  */
// export const animTempoValuesObj = {
//   16: 'Slow',
//   32: 'Medium',
//   64: 'Fast',
//   kTempoSlow: 'Slow',
//   kTempoMedium: 'Medium',
//   kTempoFast: 'Fast',
// } as const

// /**
//  * Locale for `band_fail_cue` keys and parsed values.
//  */
// export const bandFailCueValuesObj = {
//   'band_fail_rock.cue': 'Rock',
//   'band_fail_vintage.cue': 'Vintage',
//   'band_fail_heavy.cue': 'Heavy',
//   'band_fail_electro.cue': 'Electro',
//   'band_fail_rock_keys.cue': 'Rock (Keys)',
//   'band_fail_vintage_keys.cue': 'Vintage (Keys)',
//   'band_fail_heavy_keys.cue': 'Heavy (Keys)',
//   'band_fail_electro_keys.cue': 'Electro (Keys)',
// } as const

// /**
//  * Locale for `bank` keys and parsed values.
//  */
// export const bankValuesObj = {
//   'sfx/tambourine_bank.milo': 'Tambourine',
//   'sfx/cowbell_bank.milo': 'Cowbell',
//   'sfx/handclap_bank.milo': 'Hand Clap',
//   'sfx/cowbell3_bank.milo': 'Cowbell (Alternate)',
// } as const

// /**
//  * Locale for `drum_bank` keys and parsed values.
//  */
// export const drumBankValuesObj = {
//   'sfx/kit01_bank.milo': 'Hard Rock Kit',
//   'sfx/kit02_bank.milo': 'Arena Kit',
//   'sfx/kit03_bank.milo': 'Vintage Kit',
//   'sfx/kit04_bank.milo': 'Trashy Kit',
//   'sfx/kit05_bank.milo': 'Electronic Kit',
// } as const

// /**
//  * Locale for `genre` keys and parsed values.
//  */
// export const genreValuesObj = {
//   alternative: 'Alternative',
//   blues: 'Blues',
//   classical: 'Classical',
//   classicrock: 'Classic Rock',
//   country: 'Country',
//   emo: 'Emo',
//   fusion: 'Fusion',
//   glam: 'Glam',
//   grunge: 'Grunge',
//   hiphoprap: 'Hip-Hop/Rap',
//   indierock: 'Indie Rock',
//   inspirational: 'Inspirational',
//   jazz: 'Jazz',
//   jrock: 'J-Rock',
//   latin: 'Latin',
//   metal: 'Metal',
//   new_wave: 'New Wave',
//   novelty: 'Novelty',
//   numetal: 'Nu-Metal',
//   popdanceelectronic: 'Pop/Dance/Electronic',
//   poprock: 'Pop-Rock',
//   prog: 'Prog',
//   punk: 'Punk',
//   rbsoulfunk: 'R&B/Soul/Funk',
//   reggaeska: 'Reggae/Ska',
//   rock: 'Rock',
//   southernrock: 'Southern Rock',
//   world: 'World',
//   other: 'Other',
// } as const

// /**
//  * Locale for `rating` keys and parsed values.
//  */
// export const ratingValuesObj = {
//   1: 'Family Friendly',
//   2: 'Supervision Recommended',
//   3: 'Mature Content',
//   4: 'No Rating',
// } as const

// /**
//  * Locale for `song_scroll_speed` keys and parsed values.
//  */
// export const songScrollSpeedValuesObj = {
//   1700: 'Crazy',
//   1850: 'Faster',
//   2000: 'Fast',
//   2150: 'Medium Fast',
//   2300: 'Normal',
//   2450: 'Medium Slow',
//   2600: 'Slow',
//   2750: 'Slower',
//   3000: 'Comatose',
// } as const

// /**
//  * Locale for `sub_genre` keys and parsed values.
//  */
// export const subGenreValuesObj = {
//   subgenre_alternative: 'Alternative',
//   subgenre_college: 'College',
//   subgenre_other: 'Other',
//   subgenre_acoustic: 'Acoustic',
//   subgenre_chicago: 'Chicago',
//   subgenre_classic: 'Classic',
//   subgenre_contemporary: 'Contemporary',
//   subgenre_country: 'Country',
//   subgenre_delta: 'Delta',
//   subgenre_electric: 'Electric',
//   subgenre_classical: 'Classical',
//   subgenre_classicrock: 'Classic Rock',
//   subgenre_bluegrass: 'Bluegrass',
//   subgenre_honkytonk: 'Honky Tonk',
//   subgenre_outlaw: 'Outlaw',
//   subgenre_traditionalfolk: 'Traditional Folk',
//   subgenre_emo: 'Emo',
//   subgenre_fusion: 'Fusion',
//   subgenre_glam: 'Glam',
//   subgenre_goth: 'Goth',
//   subgenre_grunge: 'Grunge',
//   subgenre_alternativerap: 'Alternative Rap',
//   subgenre_gangsta: 'Gangsta',
//   subgenre_hardcorerap: 'Hardcore Rap',
//   subgenre_hiphop: 'Hip Hop',
//   subgenre_oldschoolhiphop: 'Old School Hip Hop',
//   subgenre_rap: 'Rap',
//   subgenre_triphop: 'Trip Hop',
//   subgenre_undergroundrap: 'Underground Rap',
//   subgenre_indierock: 'Indie Rock',
//   subgenre_lofi: 'Lo-fi',
//   subgenre_mathrock: 'Math Rock',
//   subgenre_noise: 'Noise',
//   subgenre_postrock: 'Post Rock',
//   subgenre_shoegazing: 'Shoegazing',
//   subgenre_inspirational: 'Inspirational',
//   subgenre_acidjazz: 'Acid Jazz',
//   subgenre_experimental: 'Experimental',
//   subgenre_ragtime: 'Ragtime',
//   subgenre_smooth: 'Smooth',
//   subgenre_jrock: 'J-Rock',
//   subgenre_latin: 'Latin',
//   subgenre_black: 'Black',
//   subgenre_core: 'Core',
//   subgenre_death: 'Death',
//   subgenre_hair: 'Hair',
//   subgenre_industrial: 'Industrial',
//   subgenre_metal: 'Metal',
//   subgenre_power: 'Power',
//   subgenre_prog: 'Prog',
//   subgenre_speed: 'Speed',
//   subgenre_thrash: 'Thrash',
//   subgenre_darkwave: 'Dark Wave',
//   subgenre_electroclash: 'Electroclash',
//   subgenre_new_wave: 'New Wave',
//   subgenre_synth: 'Synthpop',
//   subgenre_novelty: 'Novelty',
//   subgenre_numetal: 'Nu-Metal',
//   subgenre_ambient: 'Ambient',
//   subgenre_breakbeat: 'Breakbeat',
//   subgenre_chiptune: 'Chiptune',
//   subgenre_dance: 'Dance',
//   subgenre_downtempo: 'Downtempo',
//   subgenre_dub: 'Dub',
//   subgenre_drumandbass: 'Drum and Bass',
//   subgenre_electronica: 'Electronica',
//   subgenre_garage: 'Garage',
//   subgenre_hardcoredance: 'Hardcore Dance',
//   subgenre_house: 'House',
//   subgenre_techno: 'Techno',
//   subgenre_trance: 'Trance',
//   subgenre_pop: 'Pop',
//   subgenre_softrock: 'Soft Rock',
//   subgenre_teen: 'Teen',
//   subgenre_progrock: 'Prog Rock',
//   subgenre_dancepunk: 'Dance Punk',
//   subgenre_hardcore: 'Hardcore',
//   subgenre_disco: 'Disco',
//   subgenre_funk: 'Funk',
//   subgenre_motown: 'Motown',
//   subgenre_rhythmandblues: 'Rhythm and Blues',
//   subgenre_soul: 'Soul',
//   subgenre_reggae: 'Reggae',
//   subgenre_ska: 'Ska',
//   subgenre_arena: 'Arena',
//   subgenre_blues: 'Blues',
//   subgenre_folkrock: 'Folk Rock',
//   subgenre_hardrock: 'Hard Rock',
//   subgenre_psychadelic: 'Psychedelic',
//   subgenre_rock: 'Rock',
//   subgenre_rockabilly: 'Rockabilly',
//   subgenre_rockandroll: 'Rock and Roll',
//   subgenre_surf: 'Surf',
//   subgenre_southernrock: 'Southern Rock',
//   subgenre_world: 'World',
//   subgenre_acapella: 'A capella',
//   subgenre_contemporaryfolk: 'Contemporary Folk',
//   subgenre_oldies: 'Oldies',
// } as const

// /**
//  * Locale for `vocal_gender` keys and parsed values.
//  */
// export const vocalGenderValuesObj = {
//   male: 'Male',
//   female: 'Female',
// } as const

// /**
//  * Locale for `vocal_parts` keys and parsed values.
//  */
// export const vocalPartsValuesObj = {
//   0: 'No Vocals',
//   1: 'Solo Vocals',
//   2: '2-Part Harmonies',
//   3: '3-Part Harmonies',
// } as const

// /**
//  * Locale for `rank` keys and parsed values.
//  */
// export const rankValuesObj = {
//   0: 'No Part',
//   1: 'Warmup',
//   2: 'Apprentice',
//   3: 'Solid',
//   4: 'Moderate',
//   5: 'Challenging',
//   6: 'Nightmare',
//   7: 'Impossible',
// } as const

// export const rankValuesDotVerboseObj = {
//   0: 'No Part',
//   1: 'Zero Dots',
//   2: 'One Dot',
//   3: 'Two Dots',
//   4: 'Three Dots',
//   5: 'Four Dots',
//   6: 'Five Dots',
//   7: 'Devil Dots',
// } as const

// export type AnimTempoTypes = keyof typeof animTempoValuesObj
// export type AnimTempoNumeralTypes = Exclude<keyof typeof animTempoValuesObj, 'kTempoSlow' | 'kTempoMedium' | 'kTempoFast'>
// export type AnimTempoValues = (typeof animTempoValuesObj)[AnimTempoTypes]

// export type BandFailCueTypes = keyof typeof bandFailCueValuesObj
// export type BandFailCueValues = (typeof bandFailCueValuesObj)[BandFailCueTypes] | 'Not Specified'

// export type BankTypes = keyof typeof bankValuesObj
// export type BankValues = (typeof bankValuesObj)[BankTypes]

// export type DrumBankTypes = keyof typeof drumBankValuesObj
// export type DrumBankValues = (typeof drumBankValuesObj)[DrumBankTypes]

// export type GenreTypes = keyof typeof genreValuesObj
// export type GenreValues = (typeof genreValuesObj)[GenreTypes]

// export type RatingTypes = keyof typeof ratingValuesObj
// export type RatingValues = (typeof ratingValuesObj)[RatingTypes]

// export type SongScrollSpeedTypes = keyof typeof songScrollSpeedValuesObj
// export type SongScrollSpeedValues = (typeof songScrollSpeedValuesObj)[SongScrollSpeedTypes]

// export type SubGenreTypes = keyof typeof subGenreValuesObj
// export type SubGenreValues = (typeof subGenreValuesObj)[SubGenreTypes] | 'Unknown'

// export type VocalGenderTypes = keyof typeof vocalGenderValuesObj
// export type VocalGenderValues = (typeof vocalGenderValuesObj)[VocalGenderTypes]

// export type VocalPartsTypes = keyof typeof vocalPartsValuesObj
// export type VocalPartsValues = (typeof vocalPartsValuesObj)[VocalPartsTypes]

// export type RankLocaleOnlyNumberTypes = keyof typeof rankValuesObj
// export type RankLocaleOnlyBandNumberTypes = Exclude<keyof typeof rankValuesObj, 0>
// export type InstrumentRankingsNumberOptions = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6
// export type InstrumentRankingsVerbosedOptions = (typeof rankValuesObj)[keyof typeof rankValuesObj]

// export type BandRankingsNumberOptions = Exclude<InstrumentRankingsNumberOptions, -1>
// export type BandRankingsVerbosedOptions = Exclude<InstrumentRankingsVerbosedOptions, 'No Part'>
// export type BandRankingsDotVerbosedOptions = Exclude<(typeof rankValuesDotVerboseObj)[keyof typeof rankValuesDotVerboseObj], 'No Part'>
// export type InstrumentRankingsDotVerbosedOptions = (typeof rankValuesDotVerboseObj)[keyof typeof rankValuesDotVerboseObj]

// /**
//  * Functions used on the update method.
//  *
//  * It resolves many values accepted from the update method to actual values used on the `.dta` file.
//  */
// export const getKeyFromValue = {
//   anim_tempo: (v: AnimTempoValues) => Number(Object.keys(animTempoValuesObj).find((key) => animTempoValuesObj[Number(key) as AnimTempoTypes] === v)) as AnimTempoNumeralTypes,
//   band_fail_cue: (v: BandFailCueValues) => String(Object.keys(bandFailCueValuesObj).find((key) => bandFailCueValuesObj[key as BandFailCueTypes] === v)) as BandFailCueTypes,
//   bank: (v: BankValues) => String(Object.keys(bankValuesObj).find((key) => bankValuesObj[key as BankTypes] === v)) as BankTypes,
//   drum_bank: (v: DrumBankValues) => String(Object.keys(drumBankValuesObj).find((key) => drumBankValuesObj[key as DrumBankTypes] === v)) as DrumBankTypes,
//   genre: (v: GenreValues) => String(Object.keys(genreValuesObj).find((key) => genreValuesObj[key as GenreTypes] === v)) as GenreTypes,
//   rating: (v: RatingValues) => Number(Object.keys(ratingValuesObj).find((key) => ratingValuesObj[Number(key) as RatingTypes] === v)) as RatingTypes,
//   song_scroll_speed: (v: SongScrollSpeedValues) =>
//     Number(Object.keys(songScrollSpeedValuesObj).find((key) => songScrollSpeedValuesObj[Number(key) as SongScrollSpeedTypes] === v)) as SongScrollSpeedTypes,
//   sub_genre: (v: SubGenreValues) => String(Object.keys(subGenreValuesObj).find((key) => subGenreValuesObj[key as SubGenreTypes] === v)) as SubGenreTypes,
//   vocal_gender: (v: VocalGenderValues) => String(Object.keys(vocalGenderValuesObj).find((key) => vocalGenderValuesObj[key as VocalGenderTypes] === v)) as VocalGenderTypes,
//   vocal_parts: (v: VocalPartsValues) => Number(Object.keys(vocalPartsValuesObj).find((key) => vocalPartsValuesObj[Number(key) as VocalPartsTypes] === v)) as VocalPartsTypes,
// }

// export type GetLocaleRankReturnType<V extends boolean> = V extends true ? BandRankingsDotVerbosedOptions : BandRankingsVerbosedOptions

// /**
//  * Module for locale convertions.
//  */
// export const getLocale = {
//   anim_tempo: (value: AnimTempoTypes) => animTempoValuesObj[value] as AnimTempoValues,
//   band_fail_cue: (value?: BandFailCueTypes) => (value && bandFailCueValuesObj[value] ? bandFailCueValuesObj[value] : 'Not Specified') as BandFailCueValues,
//   bank: (value: BankTypes) => bankValuesObj[value] as BankValues,
//   drum_bank: (value: DrumBankTypes) => drumBankValuesObj[value] as DrumBankValues,
//   genre: (value: GenreTypes) => genreValuesObj[value] as GenreValues,
//   rating: (value: RatingTypes) => ratingValuesObj[value] as RatingValues,
//   song_scroll_speed: (value: SongScrollSpeedTypes) => songScrollSpeedValuesObj[value] as SongScrollSpeedValues,
//   sub_genre: (value: SubGenreTypes) => subGenreValuesObj[value] as SubGenreValues,
//   vocal_gender: (value: VocalGenderTypes) => vocalGenderValuesObj[value] as VocalGenderValues,
//   vocal_parts: (value: VocalPartsTypes) => vocalPartsValuesObj[value] as VocalPartsValues,
//   rank: <V extends boolean>(rankCalc: number, asDot?: V): GetLocaleRankReturnType<V> => {
//     if (asDot) {
//       return rankValuesObj[(rankCalc + 1) as RankLocaleOnlyNumberTypes] as BandRankingsDotVerbosedOptions as GetLocaleRankReturnType<V>
//     }

//     return rankValuesObj[(rankCalc + 1) as RankLocaleOnlyNumberTypes] as BandRankingsVerbosedOptions as GetLocaleRankReturnType<V>
//   },
//   song_key: (vocal_tonic_note: SongKeyValues, song_tonality: SongTonalityValues): SongKeyUpdateOptions['key'] => {
//     let returnString = ''
//     if (vocal_tonic_note === 0) returnString += 'C'
//     else if (vocal_tonic_note === 1) returnString += 'Db'
//     else if (vocal_tonic_note === 2) returnString += 'D'
//     else if (vocal_tonic_note === 3) returnString += 'Eb'
//     else if (vocal_tonic_note === 4) returnString += 'E'
//     else if (vocal_tonic_note === 5) returnString += 'F'
//     else if (vocal_tonic_note === 6) returnString += 'F#'
//     else if (vocal_tonic_note === 7) returnString += 'G'
//     else if (vocal_tonic_note === 8) returnString += 'Ab'
//     else if (vocal_tonic_note === 9) returnString += 'A'
//     else if (vocal_tonic_note === 10) returnString += 'Bb'
//     else returnString += 'B'

//     if (song_tonality === 1) returnString += 'm'

//     return returnString as SongKeyUpdateOptions['key']
//   },
// }

type ExtractNumbers<T> = T extends number ? T : never
type ExtractStrings<T> = T extends string ? T : never
type StringNumToNum<T> = T extends '-1' ? -1 : T

export const localeObject = {
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

export type AnimTempo = keyof typeof anim_tempo
export type AnimTempoStrings = ExtractStrings<AnimTempo>
export type AnimTempoNumbers = ExtractNumbers<AnimTempo>
export type AnimTempoNames = (typeof anim_tempo)[AnimTempo]

export type BandFailCue = Exclude<keyof typeof band_fail_cue, 'undefined'>
export type BandFailCueNames = (typeof band_fail_cue)[BandFailCue]

export type VocalPercussion = keyof typeof bank
export type VocalPercussionNames = (typeof bank)[VocalPercussion]

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
  anim_tempo: (key: AnimTempo) => {
    return anim_tempo[key]
  },
  band_fail_cue: (key?: BandFailCue) => {
    return band_fail_cue[key === undefined ? 'undefined' : key]
  },
  bank: (key: VocalPercussion) => {
    return bank[key]
  },
  drum_bank: (key: DrumBank) => {
    return drum_bank[key]
  },
  genre: (key: SongGenre) => {
    return genre[key]
  },
  rating: (key: SongRating) => {
    return rating[key]
  },
  song_scroll_speed: (key: SongScrollSpeed) => {
    return song_scroll_speed[key]
  },
  sub_genre: (key?: SongSubGenre) => {
    return sub_genre[key === undefined ? 'undefined' : key]
  },
  vocal_gender: (key: VocalGender) => {
    return vocal_gender[key]
  },
  vocal_parts: (key: VocalParts) => {
    return vocal_parts[key]
  },
  song_key: <V extends SongKey, T extends SongTonality>(vocal_tonic_note: V, song_tonality: T): SongKeyUpdateOptions['key'] => {
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
  rank: <D extends boolean | undefined>(rankCalc: number, asDot?: D): GetLocaleRankReturnType<D> => {
    if (asDot) {
      return localeObject.rank.dots[String(rankCalc) as keyof typeof localeObject.rank.name] as GetLocaleRankReturnType<D>
    }

    return localeObject.rank.name[String(rankCalc) as keyof typeof localeObject.rank.name] as GetLocaleRankReturnType<D>
  },
}

export const localeValueToKey = {
  anim_tempo: (value: AnimTempoStrings) => {
    return Number(Object.keys(anim_tempo).find((key) => key === value)) as AnimTempoNumbers
  },
  band_fail_cue: (value: BandFailCueNames) => {
    return (Object.keys(band_fail_cue) as (keyof typeof band_fail_cue)[]).find((key) => band_fail_cue[key] === value) as BandFailCue
  },
  bank: (value: VocalPercussionNames) => {
    return (Object.keys(bank) as (keyof typeof bank)[]).find((key) => bank[key] === value) as VocalPercussion
  },
  drum_bank: (value: DrumBankNames) => {
    return (Object.keys(drum_bank) as (keyof typeof drum_bank)[]).find((key) => drum_bank[key] === value) as DrumBank
  },
  genre: (value: SongGenreNames) => {
    return (Object.keys(genre) as (keyof typeof genre)[]).find((key) => genre[key] === value) as SongGenre
  },
  rating: (value: SongRatingNames) => {
    return Number(Object.keys(rating).find((key) => rating[Number(key) as SongRating] === value)) as SongRating
  },
  song_scroll_speed: (value: SongScrollSpeedNames) => {
    return Number(Object.keys(song_scroll_speed).find((key) => song_scroll_speed[Number(key) as SongScrollSpeed] === value)) as SongScrollSpeed
  },
  sub_genre: (value: SongSubGenreNames) => {
    return (Object.keys(sub_genre) as (keyof typeof sub_genre)[]).find((key) => sub_genre[key] === value) as SongSubGenre
  },
  vocal_gender: (value: VocalGenderNames) => {
    return (Object.keys(vocal_gender) as (keyof typeof vocal_gender)[]).find((key) => vocal_gender[key] === value) as VocalGender
  },
  vocal_parts: (value: VocalPartsNames) => {
    return Number(Object.keys(vocal_parts).find((key) => vocal_parts[Number(key) as VocalParts] === value)) as VocalParts
  },
}
