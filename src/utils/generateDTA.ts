import {
    DTADocument,
    DTAGenreTypes,
    DTASubGenreTypes,
    DTAGetDataGenreOptions,
    DTAGetDataNamingOptions,
} from '../@types/DTADocument'
import { cloneDeep } from 'lodash'
import {
    leadingArticle2Trailing,
    omitLeadingArticle,
} from '../functions/leadingArticle'
import { genreLocale, subGenreLocale } from '../locale'
import { stringifyDTA } from '../core'

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
        let nameOptions: DTAGetDataNamingOptions | undefined
        let genreOptions: DTAGetDataGenreOptions | undefined

        switch (data) {
            case 'songname':
                return this.rawContent.songname
            case 'name':
                nameOptions = options as DTAGetDataNamingOptions | undefined
                if (nameOptions && nameOptions.leadingArticle) {
                    switch (nameOptions.leadingArticle) {
                        case 'omit':
                            return omitLeadingArticle(this.rawContent.name)
                        case 'trailing':
                            return leadingArticle2Trailing(this.rawContent.name)
                        default:
                            return this.rawContent.name
                    }
                }

                return this.rawContent.name
            case 'artist':
                nameOptions = options as DTAGetDataNamingOptions | undefined
                if (nameOptions && nameOptions.leadingArticle) {
                    switch (nameOptions.leadingArticle) {
                        case 'omit':
                            return omitLeadingArticle(this.rawContent.artist)
                        case 'trailing':
                            return leadingArticle2Trailing(
                                this.rawContent.artist
                            )
                        default:
                            return this.rawContent.artist
                    }
                }

                return this.rawContent.artist
            case 'genre':
                genreOptions = options as DTAGetDataGenreOptions | undefined
                if (genreOptions && genreOptions.raw) {
                    return this.rawContent.genre
                }

                return genreLocale(this.rawContent.genre as keyof DTAGenreTypes)
            case 'sub_genre':
                genreOptions = options as DTAGetDataGenreOptions | undefined
                if (genreOptions && genreOptions.raw) {
                    return this.rawContent.sub_genre
                }

                return subGenreLocale(
                    this.rawContent.sub_genre as keyof DTASubGenreTypes
                )
            default:
                throw new Error('')
        }
    },
}

/**
 * Generates a new `DTADocument` object.
 * @since v0.1.2
 */
export const generateDTA: () => DTADocument = () => cloneDeep(dtaDefault)
