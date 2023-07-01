import { cloneDeep } from 'lodash'
import { DTADocument } from '../@types/DTADocument'
import { UpdateDataOptions, stringifyDTA, updateDTA } from '../core'
import { getDTA } from './get'

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
        vocal_parts: 1,
        bank: 'sfx/tambourine_bank.milo',
        drum_bank: 'sfx/kit01_bank.milo',
        anim_tempo: 32,
        song_scroll_speed: 2300,
        preview: [0, 0],
        song_length: 0,
        rank_band: 1,
        game_origin: 'ugc_plus',
        rating: 1,
        genre: 'other',
        vocal_gender: 'male',
        year_released: 0,
        album_art: false,
        album_name: '',
    },
    get(value, options) {
        return getDTA(this, value, options)
    },
    stringify(options) {
        return stringifyDTA([this], options)
    },
    update(options) {
        return updateDTA(this, options)
    },
}

/**
 * Creates a new memory instance of a `DTADocument` object.
 */
export const createDTA = (options?: UpdateDataOptions) => {
    const newDTAInstance = cloneDeep(dtaDefault)

    if (options) {
        newDTAInstance.update(options)
    }

    return newDTAInstance
}
