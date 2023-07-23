import { cloneDeep } from 'lodash'
import { DTADocument } from '../@types/DTADocument'
import { DTAtoJSON, TrackUpdateOptions, UpdateDataOptions, getDTA, stringifyDTA, updateDTA } from '../exports'

const dtaDefault: DTADocument = {
    content: {
        id: '',
        name: '',
        artist: '',
        master: false,
        song_id: 0,
        songname: '',
        tracks_count: [0, 0, 0, 0, 0, 0],
        pans: [],
        vols: [],
        bank: 'sfx/tambourine_bank.milo',
        drum_bank: 'sfx/kit01_bank.milo',
        anim_tempo: 32,
        preview: [0, 0],
        song_length: 0,
        rank_band: 1,
        game_origin: 'ugc_plus',
        rating: 4,
        genre: 'other',
        vocal_gender: 'male',
        year_released: new Date().getFullYear(),
        album_art: false,
        album_name: '',
    },
    get(value, options) {
        return getDTA(this, value, options)
    },
    stringify(options) {
        if (options === undefined) options = {}
        return stringifyDTA([this], options)
    },
    update(options) {
        updateDTA(this, options)
    },
    json() {
        return DTAtoJSON(this)
    },
}

export interface CreateDataRequired extends UpdateDataOptions {
    /**
     * Unique string ID of the song.
     */
    id: string
    /**
     * The song's title.
     */
    name: string
    /**
     * The song's artist/band.
     */
    artist: string
    /**
     * The numerical, unique number ID of the song. Might be a string ID as well.
     */
    song_id: string | number
    /**
     * The file name used inside the song's CON file structure.
     */
    songname: string
    /**
     * An object specifying the whole song's instruments and audio channels structure.
     * 
     * Here, you specify the channels, ranking, and solo of all instruments. On `vocals`, you also specify the gender and
     * the quantity of vocal parts. You specify if the song has crowd channels as well.
     * 
     * By placing a valid `tracks` options, it will override the whole song's structure.
     */
    tracks: TrackUpdateOptions
    /**
     * The start of the preview (the end of the preview is automatically calculated). It can be either a number, or a string.
     * 
     * If it's a number, you must place the length of the song in milliseconds.
     * 
     * You can also place a formatted time string (for example: `'2:30'`)
     */
    preview: string | number
    /**
     * The length of the song. It can be either a number, or a string.
     * 
     * If it's a number, you must place the length of the song in milliseconds.
     * 
     * You can also place a formatted time string (for example: `'2:30'`)
     */
    song_length: string | number
}

/**
 * Creates a new parsed song object.
 * @param {CreateDataRequired} options `OPTIONAL` Options for the `DTADocument` creation process.
 * If `null`, It will be created using a all-default, all-blank options.
 * @returns {DTADocument} A new parsed song object.
 */
export const createDTA = (options?: CreateDataRequired): DTADocument => {
    const newDTAInstance = cloneDeep(dtaDefault)

    if (options) {
        newDTAInstance.update(options)
    }

    return newDTAInstance
}
