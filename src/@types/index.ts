import { stringifyDTA } from '../core'
import { sortDTA } from '../utils'

export interface DTAParserOptions {
    /** Changes the sorting of the songs. Valid values are:
     *
     * ### NAME SORTINGS
     * - - - -
     * * `name` => Sorts by the songs' title (excluding the leading article, if any).
     * - - - -
     * ### ARTIST SORTINGS
     * - - - -
     * * `artist` => Sorts by the songs' artist/band (exlcuding the leading article, if any).
     * - - - -
     * * `artistSet` => Sorts by artist/band, year released, album name (in any), and album
     * track number.
     * - - - -
     * ### GENERAL SORTINGS
     * - - - -
     * * `song_id` => Sorts by the songs' ID.
     */
    sortBy?: SortByOptionsTypes
}

export type SortByOptionsTypes = 'name' | 'artist' | 'artistSet' | 'songId'

/**
 * asds
 */
export interface DTAArrayMethods {
    stringify: typeof stringifyDTA
    sort: typeof sortDTA
}
