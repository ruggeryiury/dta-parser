import { DTAGenreTypes, DTASubGenreTypes } from '../@types/parseDTA'

/** Internal function that Parses a genre locale key.
 * @param genre The genre locale key.
 * @returns A parsed genre locale key.
 * @since v0.1.1 */
export const getGenreLocale = (genre: keyof DTAGenreTypes): string => {
    const allGenres: DTAGenreTypes = {
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

    return allGenres[genre] ? allGenres[genre] : genre
}

/** Internal function that parses a sub-genre locale key.
 * @param sub_genre The sub-genre locale key.
 * @returns A parsed sub-genre locale key.
 * @since v0.1.1 */
export const getSubGenreLocale = (subGenre: keyof DTASubGenreTypes): string => {
    const allSubGenres: DTASubGenreTypes = {
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

    return allSubGenres[subGenre] ? allSubGenres[subGenre] : subGenre
}
