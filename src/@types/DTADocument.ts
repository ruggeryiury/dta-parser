import {
    GetDataValueTypes,
    GetDataValueOptions,
    GetDataValueReturn,
} from '../core/getDTA'
import { StringifyDataOptions } from '../core/stringifyDTA'
import { UpdateDataOptions } from '../core/updateDTA'
import {
    VocalPartsTypes,
    BankTypes,
    DrumBankTypes,
    AnimTempoTypes,
    BandFailCueTypes,
    SongScrollSpeedTypes,
    RatingTypes,
    GenreTypes,
    SubGenreTypes,
    VocalGenderTypes,
} from '../locale/main'

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
     * Retrieves a specific value from the song.
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
     * Converts an array of parsed song objects back to `.dta` file contents string.
     * - - - -
     * @param {StringifyDataOptions} options `OPTIONAL` Customization options for the stringifying process. If an object
     * is not passed as argument at all, it will use default configurations to generate MAGMA C3's `.dta` file contents type.
     *
     * Only some values can be customized on the default option for maximum compatibility with other `.dta` file parsers.
     * @returns {string} A string representation of this parsed song object as a `.dta` file contents string.
     */
    stringify(options?: StringifyDataOptions): string
    /**
     * Updates this song with the provided update options.
     * - - - -
     * @param {UpdateDataOptions} options The options for the song updating process.
     */
    update(options: UpdateDataOptions): void
    /**
     * Returns a JSON object representation of a parsed song.
     * - - - -
     * @returns A JSON object representation of a parsed song.
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
    tracks_count: [number, number, number, number, number, number, number?]
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
    /**
     * The audio cue type of the vocal percussion.
     */
    bank: BankTypes
    /**
     * The audio cue type of the drums on Drum Fills/Freestyle Mode.
     */
    drum_bank: DrumBankTypes
    /**
     * The song animation's speed.
     */
    anim_tempo: AnimTempoTypes
    band_fail_cue?: BandFailCueTypes
    song_scroll_speed?: SongScrollSpeedTypes
    /**
     * An array with start and end of the preview, in milliseconds
     */
    preview: [number, number]
    /**
     * The length of the song, in milliseconds.
     */
    song_length: number
    /**
     * The song's band ranking number.
     */
    rank_band: number
    /**
     * The song's drums ranking number.
     */
    rank_drum?: number
    /**
     * The song's bass ranking number.
     */
    rank_bass?: number
    /**
     * The song's guitar ranking number.
     */
    rank_guitar?: number
    /**
     * The song's vocals ranking number.
     */
    rank_vocals?: number
    /**
     * The song's keys ranking number.
     */
    rank_keys?: number
    /**
     * The song's PRO Bass ranking number.
     */
    rank_real_bass?: number
    /**
     * The song's PRO Guitar ranking number.
     */
    rank_real_guitar?: number
    /**
     * The song's PRO Keys ranking number.
     */
    rank_real_keys?: number
    /**
     * An array specifying which instrument parts has solo sessions.
     */
    solo?: SoloFlags[]
    tuning_offset_cents?: number
    guide_pitch_volume?: number
    encoding?: string
    format?: number
    version?: number
    game_origin?: string
    /**
     * The song's rating.
     */
    rating?: RatingTypes
    /**
     * The song's genre.
     */
    genre?: GenreTypes
    /**
     * The song's sub-genre.
     */
    sub_genre?: SubGenreTypes
    /**
     * The gender of the lead vocalist.
     */
    vocal_gender: VocalGenderTypes
    /**
     * The song's release year.
     */
    year_released: number
    year_recorded?: number
    album_art: boolean
    /**
     * The name of the song's album.
     */
    album_name?: string
    /**
     * The song's track number on the album.
     */
    album_track_number?: number
    vocal_tonic_note?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
    song_tonality?: 0 | 1
    song_key?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
    /**
     * An array with the tuning of all 6 strings of the PRO Guitar part.
     */
    real_guitar_tuning?: [number, number, number, number, number, number]
    /**
     * An array with the tuning of all 4 strings of the PRO Bass part.
     */
    real_bass_tuning?: [number, number, number, number]
    extra_authoring?: ExtraAuthoringFlags[]
    alternate_path?: boolean
    context?: number
    /**
     * The name of the song's pack.
     */
    pack_name?: string
    base_points?: number
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

/**
 * Generic type for custom `DTADocument` type.
 */
export type ExtraDTADocument<EX extends object> = DTADocumentMethods & {
    content: DTAContentDocument & EX
}

/**
 * Generic type for custom `DTAContentDocument` type.
 */
export type ExtraDTAContentDocument<EX extends object> = DTAContentDocument & EX
