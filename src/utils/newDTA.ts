import {
    DTAGenreTypes,
    DTAGetDataGenreOptions,
    DTAGetDataNameOptions,
    DTASubGenreTypes,
} from '../@types/parseDTA'
import { DTADocument } from '../dta-parser'
import {
    omitLeadingArticle,
    leadingArticle2Trailing,
} from './leadingArticleUtil'
import { getGenreLocale, getSubGenreLocale } from './locale'
import { cloneDeep } from 'lodash'

const DTADefault: DTADocument = {
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
    getData(data, options) {
        if (data === 'songname') {
            return this.rawContent.songname
        } else if (data === 'name') {
            const nameOptions = options as DTAGetDataNameOptions
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
        } else if (data === 'artist') {
            const nameOptions = options as DTAGetDataNameOptions | undefined
            if (nameOptions && nameOptions.leadingArticle) {
                switch (nameOptions.leadingArticle) {
                    case 'omit':
                        return omitLeadingArticle(this.rawContent.artist)
                    case 'trailing':
                        return leadingArticle2Trailing(this.rawContent.artist)
                    default:
                        return this.rawContent.artist
                }
            }

            return this.rawContent.artist
        } else if (data === 'genre') {
            const genreOptions = options as DTAGetDataGenreOptions | undefined
            if (genreOptions && genreOptions.raw) {
                return this.rawContent.genre
            }

            return getGenreLocale(this.rawContent.genre as keyof DTAGenreTypes)
        } else if (data === 'subGenre') {
            const genreOptions = options as DTAGetDataGenreOptions | undefined
            if (genreOptions && genreOptions.raw) {
                return this.rawContent.sub_genre
            }

            return getSubGenreLocale(
                this.rawContent.sub_genre as keyof DTASubGenreTypes
            )
        }

        return ''
    },
    updateSongMetadata(options) {
        const updatedDTA: DTADocument = {
            ...this,
            rawContent: {
                ...this.rawContent,
                ...options,
            },
        }

        return updatedDTA
    },
}

/**
 * Generates a new `DTADocument` object.
 * @since v0.1.2
 */
const newDTA = () => cloneDeep(DTADefault)

export default newDTA
