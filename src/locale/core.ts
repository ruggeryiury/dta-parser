import { DTAContentDocument } from '../@types/DTADocument'
import { InstrumentRankingsOptions } from '../core'

export const animTempo = {
    16: 'Slow',
    32: 'Medium',
    64: 'Fast',
} as const

export type AnimTempoTypes = keyof typeof animTempo
export type AnimTempoValues = (typeof animTempo)[AnimTempoTypes]

export const bandFailCue = {
    'band_fail_rock.cue': 'Rock',
    'band_fail_vintage.cue': 'Vintage',
    'band_fail_heavy.cue': 'Heavy',
    'band_fail_electro.cue': 'Electro',
    'band_fail_rock_keys.cue': 'Rock (Keys)',
    'band_fail_vintage_keys.cue': 'Vintage (Keys)',
    'band_fail_heavy_keys.cue': 'Heavy (Keys)',
    'band_fail_electro_keys.cue': 'Electro (Keys)',
} as const

export type BandFailCueTypes = keyof typeof bandFailCue
export type BandFailCueValues =
    | (typeof bandFailCue)[BandFailCueTypes]
    | 'Not Specified'

export const bank = {
    'sfx/tambourine_bank.milo': 'Tambourine',
    'sfx/cowbell_bank.milo': 'Cowbell',
    'sfx/handclap_bank.milo': 'Hand Clap',
    'sfx/cowbell3_bank.milo': 'Cowbell (Alternate)',
} as const

export type BankTypes = keyof typeof bank
export type BankValues = (typeof bank)[BankTypes]

export const drumBank = {
    'sfx/kit01_bank.milo': 'Hard Rock Kit',
    'sfx/kit02_bank.milo': 'Arena Kit',
    'sfx/kit03_bank.milo': 'Vintage Kit',
    'sfx/kit04_bank.milo': 'Trashy Kit',
    'sfx/kit05_bank.milo': 'Electronic Kit',
} as const

export type DrumBankTypes = keyof typeof drumBank
export type DrumBankValues = (typeof drumBank)[DrumBankTypes]

export const genre = {
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

export type GenreTypes = keyof typeof genre
export type GenreValues = (typeof genre)[GenreTypes]

export const rating = {
    1: 'Family Friendly',
    2: 'Supervision Recommended',
    3: 'Mature Content',
    4: 'No Rating',
} as const

export type RatingTypes = keyof typeof rating
export type RatingValues = (typeof rating)[RatingTypes]

export const songScrollSpeed = {
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

export type SongScrollSpeedTypes = keyof typeof songScrollSpeed
export type SongScrollSpeedValues =
    (typeof songScrollSpeed)[SongScrollSpeedTypes]

export const subGenre = {
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

export type SubGenreTypes = keyof typeof subGenre
export type SubGenreValues = (typeof subGenre)[SubGenreTypes] | 'Unknown'

export const vocalGender = {
    male: 'Male',
    female: 'Female',
} as const

export type VocalGenderTypes = keyof typeof vocalGender
export type VocalGenderValues = (typeof vocalGender)[VocalGenderTypes]

export const vocalParts = {
    0: 'No Vocals',
    1: 'Solo Vocals',
    2: '2-Part Harmonies',
    3: '3-Part Harmonies',
} as const

export type VocalPartsTypes = keyof typeof vocalParts
export type VocalPartsValues = (typeof vocalParts)[VocalPartsTypes]

export const rank = {
    0: 'No Part',
    1: 'Warmup',
    2: 'Apprentice',
    3: 'Solid',
    4: 'Moderate',
    5: 'Challenging',
    6: 'Nightmare',
    7: 'Impossible',
} as const

export const rankGraphic = {
    0: 'NO PART',
    1: '⚫⚫⚫⚫⚫',
    2: '⚪⚫⚫⚫⚫',
    3: '⚪⚪⚫⚫⚫',
    4: '⚪⚪⚪⚫⚫',
    5: '⚪⚪⚪⚪⚫',
    6: '⚪⚪⚪⚪⚪',
    7: '👿👿👿👿👿',
} as const

export type RankNumberTypes = keyof typeof rank
export type RankLocaleTypes = 'default' | 'graphical'
export type RankLocaleReturnType<T extends RankLocaleTypes> = T extends
    | undefined
    | 'default'
    ? InstrumentRankingsOptions
    : string

const songKeyMajor = [
    'C',
    'D♭',
    'D',
    'E♭',
    'E',
    'F',
    'F♯',
    'G',
    'A♭',
    'A',
    'A♭',
    'B',
]
const songKeyMinor = [
    'C',
    'C♯',
    'D',
    'D♯',
    'E',
    'F',
    'F♯',
    'G',
    'G♯',
    'A',
    'A♯',
    'B',
]

export type TrainerKeyOverrideValues =
    | 'C'
    | 'C♯/D♭'
    | 'D'
    | 'D♯/E♭'
    | 'E'
    | 'F'
    | 'F♯/G♭'
    | 'G'
    | 'G♯/A♭'
    | 'A'
    | 'A♯/A♭'
    | 'B'

export type SongKeyMajorValues =
    | 'C Major'
    | 'D♭ Major'
    | 'D Major'
    | 'E♭ Major'
    | 'E Major'
    | 'F Major'
    | 'F♯ Major'
    | 'G Major'
    | 'A♭ Major'
    | 'A Major'
    | 'B♭ Major'
    | 'B Major'

export type SongKeyMinorValues =
    | 'C Minor'
    | 'C♯ Minor'
    | 'D Minor'
    | 'D♯ Minor'
    | 'E Minor'
    | 'F Minor'
    | 'F♯ Minor'
    | 'G Minor'
    | 'G♯ Minor'
    | 'A Minor'
    | 'A♯ Minor'
    | 'B Minor'

export type SongKeyLocaleReturnType<
    K extends NonNullable<DTAContentDocument['vocal_tonic_note']> | -1,
    T extends NonNullable<DTAContentDocument['song_tonality']> | -1
> = K extends -1
    ? 'Not Specified'
    : T extends 0
    ? SongKeyMajorValues
    : SongKeyMinorValues

const localeCore = {
    anim_tempo: (v: AnimTempoTypes): AnimTempoValues =>
        animTempo[v] as AnimTempoValues,
    band_fail_cue: (v?: BandFailCueTypes): BandFailCueValues =>
        (v && bandFailCue[v]
            ? bandFailCue[v]
            : 'Not Specified') as BandFailCueValues,
    bank: (v: BankTypes): BankValues => bank[v] as BankValues,
    drum_bank: (v: DrumBankTypes): DrumBankValues =>
        drumBank[v] as DrumBankValues,
    genre: (v: GenreTypes): GenreValues => genre[v] as GenreValues,
    rating: (v: RatingTypes): RatingValues => rating[v] as RatingValues,
    song_scroll_speed: (v: SongScrollSpeedTypes): SongScrollSpeedValues =>
        songScrollSpeed[v] as SongScrollSpeedValues,
    sub_genre: (v?: SubGenreTypes): SubGenreValues =>
        (v && subGenre[v] ? subGenre[v] : 'Unknown') as SubGenreValues,
    vocal_gender: (v: VocalGenderTypes): VocalGenderValues =>
        vocalGender[v] as VocalGenderValues,
    vocal_parts: (v: VocalPartsTypes): VocalPartsValues =>
        vocalParts[v] as VocalPartsValues,
    rank: <T extends RankLocaleTypes>(
        rankCalc: number,
        type?: T
    ): RankLocaleReturnType<T> => {
        const newRankCalc = (rankCalc + 1) as RankNumberTypes
        if (type === undefined || type === 'default')
            return rank[newRankCalc] as RankLocaleReturnType<T>
        else return rankGraphic[newRankCalc] as RankLocaleReturnType<T>
    },
    song_key: <
        K extends NonNullable<DTAContentDocument['vocal_tonic_note']> | -1,
        T extends NonNullable<DTAContentDocument['song_tonality']> | -1
    >(
        key: K,
        tonality: T
    ): SongKeyLocaleReturnType<K, T> => {
        if (key === -1) return 'Not Specified' as SongKeyLocaleReturnType<K, T>
        else if (tonality === 0 || tonality === -1)
            return `${songKeyMajor[key]} Major` as SongKeyLocaleReturnType<K, T>
        else
            return `${songKeyMinor[key]} Minor` as SongKeyLocaleReturnType<K, T>
    },
}

export default localeCore
