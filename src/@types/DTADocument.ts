import { UpdateDataOptions } from '../core'
import {
    GetDataValueOptions,
    GetDataValueReturn,
    GetDataValueTypes,
} from '../core/get'
import { StringifyDataOptions } from '../core/stringify'
import {
    VocalPartsTypes,
    BankTypes,
    DrumBankTypes,
    AnimTempoTypes,
    BandFailCueTypes,
    SongScrollSpeedTypes,
    GenreTypes,
    RatingTypes,
    SubGenreTypes,
    VocalGenderTypes,
} from '../locale/core'

/**
 * A parsed song object.
 */
export interface DTADocument extends DTADocumentMethods {
    /**
     * An object containing all parsed information about the song.
     */
    content: DTAContentDocument
}

export interface DTADocumentMethods {
    /**
     * Retrieves a specific value from this parsed song object.
     * - - - -
     * @param {V extends GetDataValueTypes} value The specific information you want to retrieve.
     * @param {O extends GetDataValueOptions<V>} options `OPTIONAL` Customization options for the retrieval process.
     * @returns {GetDataValueReturn<V, O>} The requested specific information.
     */
    get<V extends GetDataValueTypes, O extends GetDataValueOptions<V>>(
        value: V,
        options?: O
    ): GetDataValueReturn<V, O>
    /**
     * Converts this parsed song object back to `.dta` file content string.
     * - - - -
     * @param {StringifyDataOptions} options `OPTIONAL` Customization options for the stringifying process.
     * @returns {string} The string representation of this parsed song object as a `.dta` file.
     */
    stringify(options?: StringifyDataOptions): string
    /**
     * Updates this song with the provided update options.
     * @param {UpdateDataOptions} options The options for the parsed song updating process.
     */
    update(options: UpdateDataOptions): void
    /**
     * Returns all values of the song as an object
     * @returns An object with the values of the song.
     */
    json(): DTAContentDocument
}

export interface DTAContentDocument {
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
     * Tells if the song is a master recording.
     */
    master: boolean
    /**
     * The numerical, unique number ID of the song. Might be a string ID as well.
     */
    song_id: number | string
    /**
     * The file name used inside the song's CON file structure.
     */
    songname: string
    /**
     * An array with the tracks count of all instruments, backing, and crowd channels.
     */
    tracks_count: number[]
    /**
     * Tracks panning information of all audio channels.
     */
    pans: number[]
    /**
     * Volume information of all audio channels.
     */
    vols: number[]
    /**
     * The quantity of vocal parts of the song.
     */
    vocal_parts: VocalPartsTypes
    mute_volume?: number
    mute_volume_vocals?: number
    hopo_threshold?: number
    bank: BankTypes
    drum_bank: DrumBankTypes
    anim_tempo: AnimTempoTypes
    band_fail_cue?: BandFailCueTypes
    song_scroll_speed: SongScrollSpeedTypes
    preview: [number, number]
    song_length: number
    rank_band: number
    rank_drum?: number
    rank_bass?: number
    rank_guitar?: number
    rank_vocals?: number
    rank_keys?: number
    rank_real_bass?: number
    rank_real_guitar?: number
    rank_real_keys?: number
    solo?: SoloFlags[]
    tuning_offset_cents?: number
    guide_pitch_volume?: number
    encoding?: string
    format?: number
    version?: number
    game_origin: string
    rating: RatingTypes
    genre: GenreTypes
    sub_genre?: SubGenreTypes
    vocal_gender: VocalGenderTypes
    year_released: number
    year_recorded?: number
    album_art: boolean
    album_name: string
    album_track_number?: number
    vocal_tonic_note?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
    song_tonality?: 0 | 1
    song_key?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
    real_guitar_tuning?: [number, number, number, number, number, number]
    real_bass_tuning?: [number, number, number, number]
    extra_authoring?: ExtraAuthoringFlags[]
    alternate_path?: boolean

    /**
     * The author of the song.
     */
    author?: string
    /**
     * An array with the languages of the song.
     */
    languages?: string[]
    /**
     * Tells if the song has separate vocal and backing stems.
     */
    karaoke?: boolean
    /**
     * Tells if the song has separate audio stems.
     */
    multitrack?: boolean
    /**
     * Tells if the song is a 2x Kick Pedal song.
     */
    doubleKick?: boolean
    /**
     * Tells if the song is a conversion from another game.
     */
    convert?: boolean
    /**
     * Tells if the song has rhythm guitar charted on the Keys track.
     */
    rhythmOnKeys?: boolean
    /**
     * Tells if the song has rhythm guitar charted on the Bass track.
     */
    rhythmOnBass?: boolean
    /**
     * Tells if the song has EMH autogenerated by CAT.
     */
    CATemh?: boolean
    /**
     * Tells if the song only has Expert difficulty charted.
     */
    expertOnly?: boolean
}

export type SoloFlags = 'drum' | 'bass' | 'guitar' | 'keys' | 'vocal_percussion'

export type ExtraAuthoringFlags = 'disc_update' | 'pearljam' | 'greenday'
