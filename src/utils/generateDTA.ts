import { cloneDeep } from 'lodash'
import { DTADocument } from '../@types/DTADocument'
import { stringifyDTA, getDTA } from '../core'

const dtaDefault: DTADocument = {
    rawContent: {
        songname: '',
        name: '',
        artist: '',
        master: true,
        tracks_count: [],
        pans: [],
        vols: [],
        vocal_parts: 0,
        mute_volume: -96,
        mute_volume_vocals: -12,
        hopo_threshold: 170,
        song_scroll_speed: 2300,
        bank: 'sfx/tambourine_bank.milo',
        drum_bank: 'sfx/kit01_bank.milo',
        anim_tempo: 32,
        song_length: 0,
        preview: [0, 0],
        rank_band: 0,
        genre: 'rock',
        vocal_gender: 'male',
        version: 30,
        format: 10,
        album_art: false,
        year_released: 0,
        rating: 4,
        sub_genre: 'subgenre_rock',
        song_id: '',
        tuning_offset_cents: 0,
        guide_pitch_volume: -3,
        game_origin: 'ugc_plus',
        encoding: 'latin1',
        album_name: '',
        album_track_number: 1,
    },
    stringify() {
        return stringifyDTA([this])
    },
    get(data, options) {
        return getDTA(this, data, options)
    },
}

/**
 * Generates a new `DTADocument` object.
 * @since v0.1.2
 */
export const generateDTA: () => DTADocument = () => cloneDeep(dtaDefault)
