export const animTempo = {
    16: 'Slow',
    32: 'Medium',
    64: 'Fast',
}

export type AnimTempoTypes = keyof typeof animTempo
export type AnimTempoValues = 'Slow' | 'Medium' | 'Fast'

export const bandFailCue = {
    'band_fail_rock.cue': 'Rock',
    'band_fail_vintage.cue': 'Vintage',
    'band_fail_heavy.cue': 'Heavy',
    'band_fail_electro.cue': 'Electro',
    'band_fail_rock_keys.cue': 'Rock (Keys)',
    'band_fail_vintage_keys.cue': 'Vintage (Keys)',
    'band_fail_heavy_keys.cue': 'Heavy (Keys)',
    'band_fail_electro_keys.cue': 'Electro (Keys)',
}

export type BandFailCueTypes = keyof typeof bandFailCue
export type BandFailCueValues = 'Rock' | 'Vintage' | 'Heavy' | 'Electro' | 'Rock (Keys)' | 'Vintage (Keys)' | 'Heavy (Keys)' | 'Electro (Keys)'

export const bank = {
    'sfx/tambourine_bank.milo': 'Tambourine',
    'sfx/cowbell_bank.milo': 'Cowbell',
    'sfx/handclap_bank.milo': 'Hand Clap',
    'sfx/cowbell3_bank.milo': 'Cowbell (Alternate)',
}

export type BankTypes = keyof typeof bank
export type BankValues = 'Tambourine' | 'Cowbell' | 'Hand Clap' | 'Cowbell (Alternate)'

export const drumBank = {
    'sfx/kit01_bank.milo': 'Hard Rock Kit',
    'sfx/kit02_bank.milo': 'Arena Kit',
    'sfx/kit03_bank.milo': 'Vintage Kit',
    'sfx/kit04_bank.milo': 'Trashy Kit',
    'sfx/kit05_bank.milo': 'Electronic Kit',
}

export type DrumBankTypes = keyof typeof drumBank
export type DrumBankValues = 'Hard Rock Kit' | 'Arena Kit' | 'Vintage Kit' | 'Trashy Kit' | 'Electronic Kit'

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
}

export type GenreTypes = keyof typeof genre
export type GenreValues = 'Alternative' | 'Blues' | 'Classical' | 'Classic Rock' | 'Country' | 'Emo' | 'Fusion' | 'Glam' | 'Grunge' | 'Hip-Hop/Rap' | 'Indie Rock' | 'Inspirational' | 'Jazz' | 'J-Rock' | 'Latin' | 'Metal' | 'New Wave' | 'Novelty' | 'Nu-Metal' | 'Pop/Dance/Electronic' | 'Pop-Rock' | 'Prog' | 'Punk' | 'R&B/Soul/Funk' | 'Reggae/Ska' | 'Rock' | 'Southern Rock' | 'World' | 'Other'

export const rating = {
    1: 'Family Friendly',
    2: 'Supervision Recommended',
    3: 'Mature Content',
    4: 'No Rating',
}

export type RatingTypes = keyof typeof rating
export type RatingValues = 'Family Friendly' | 'Supervision Recommended' | 'Mature Content' | 'No Rating'

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
}

export type SongScrollSpeedTypes = keyof typeof songScrollSpeed
export type SongScrollSpeedValues = 'Crazy' | 'Faster' | 'Fast' | 'Medium Fast' | 'Normal' | 'Medium Slow' | 'Slow' | 'Slower' | 'Comatose'

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
}

export type SubGenreTypes = keyof typeof subGenre
export type SubGenreValues = 'Alternative' | 'College' | 'Other' | 'Acoustic' | 'Chicago' | 'Classic' | 'Contemporary' | 'Country' | 'Delta' | 'Electric' | 'Classical' | 'Classic Rock' | 'Bluegrass' | 'Honky Tonk' | 'Outlaw' | 'Traditional Folk' | 'Emo' | 'Fusion' | 'Glam' | 'Goth' | 'Grunge' | 'Alternative Rap' | 'Gangsta' | 'Hardcore Rap' | 'Hip Hop' | 'Old School Hip Hop' | 'Rap' | 'Trip Hop' | 'Underground Rap' | 'Indie Rock' | 'Lo-fi' | 'Math Rock' | 'Noise' | 'Post Rock' | 'Shoegazing' | 'Inspirational' | 'Acid Jazz' | 'Experimental' | 'Ragtime' | 'Smooth' | 'J-Rock' | 'Latin' | 'Black' | 'Core' | 'Death' | 'Hair' | 'Industrial' | 'Metal' | 'Power' | 'Prog' | 'Speed' | 'Thrash' | 'Dark Wave' | 'Electroclash' | 'New Wave' | 'Synthpop' | 'Novelty' | 'Nu-Metal' | 'Ambient' | 'Breakbeat' | 'Chiptune' | 'Dance' | 'Downtempo' | 'Dub' | 'Drum and Bass' | 'Electronica' | 'Garage' | 'Hardcore Dance' | 'House' | 'Techno' | 'Trance' | 'Pop' | 'Soft Rock' | 'Teen' | 'Prog Rock' | 'Dance Punk' | 'Hardcore' | 'Disco' | 'Funk' | 'Motown' | 'Rhythm and Blues' | 'Soul' | 'Reggae' | 'Ska' | 'Arena' | 'Blues' | 'Folk Rock' | 'Hard Rock' | 'Psychedelic' | 'Rock' | 'Rockabilly' | 'Rock and Roll' | 'Surf' | 'Southern Rock' | 'World' | 'A capella' | 'Contemporary Folk' | 'Oldies'

export const vocalGender = {
    male: 'Male',
    female: 'Female',
}

export type VocalGenderTypes = keyof typeof vocalGender
export type VocalGenderValues = 'Male' | 'Female'

export const vocalParts = {
    0: 'No Vocals',
    1: 'Solo Vocals',
    2: '2-Part Harmonies',
    3: '3-Part Harmonies',
}

export type VocalPartsTypes = keyof typeof vocalParts
export type VocalPartsValues = 'No Vocals' | 'Solo Vocals' | '2-Part Harmonies' | '3-Part Harmonies'

const localeCore = {
    anim_tempo: (v: AnimTempoTypes) => (animTempo[v] ? animTempo[v] : 'Unknown'),
    band_fail_cue: (v: BandFailCueTypes) => (bandFailCue[v] ? bandFailCue[v] : 'Unknown'),
    bank: (v: BankTypes) => (bank[v] ? bank[v] : 'Unknown'),
    drum_bank: (v: DrumBankTypes) => (drumBank[v] ? drumBank[v] : 'Unknown'),
    genre: (v: GenreTypes) => (genre[v] ? genre[v] : 'Unknown'),
    rating: (v: RatingTypes) => (rating[v] ? rating[v] : 'Unknown'),
    song_scroll_speed: (v: SongScrollSpeedTypes) => (songScrollSpeed[v] ? songScrollSpeed[v] : 'Unknown'),
    sub_genre: (v: SubGenreTypes) => (subGenre[v] ? subGenre[v] : 'Unknown'),
    vocal_gender: (v: VocalGenderTypes) => (vocalGender[v] ? vocalGender[v] : 'Unknown'),
    vocal_parts: (v: VocalPartsTypes) => (vocalParts[v] ? vocalParts[v] : 'Unknown'),
}

export default localeCore
