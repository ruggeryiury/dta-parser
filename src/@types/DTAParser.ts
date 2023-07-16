import { UpdateDataOptions } from '../core'

export type SortByOptionsTypes =
    | 'id'
    | 'name'
    | 'artist'
    | 'artist_set'
    | 'song_id'

export interface DTAParserOptions {
    /** Changes the sorting of the songs. Valid values are:
     *
     * - - - -
     * * `id` => Sorts by the songs' unique string ID.
     * - - - -
     * * `name` => Sorts by the songs' title (excluding the leading article, if any).
     * - - - -
     * * `artist` => Sorts by the songs' artist/band (exlcuding the leading article, if any).
     * - - - -
     * * `artistSet` => Sorts by artist/band, year released, album name (in any), and album
     * track number.
     * - - - -
     * * `song_id` => Sorts by the songs' ID.
     */
    sortBy?: SortByOptionsTypes
    /**
     * Set this to `true` only if you're parsing official Harmonix songs DTAs.
     *
     * If you're parsing a DTA file from official pre-RB3 songs, the parser will
     * try to seek additional information from the updates.
     *
     * Also, It'll put Harmonix as author and the multitracks value to `true` on all songs.
     * @default false
     */
    harmonixSongs?: boolean
    /**
     * Applies direct values updates for any song parsed based on the song's unique string ID.
     */
    update?: {
        [id: string]: UpdateDataOptions
    }
    updateAll?: Pick<UpdateDataOptions, 'author'>
}
