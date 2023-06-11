import { SortByOptionsTypes } from '../functions/sortDTAArray'

export interface DTAPackParserOptions {
    /** Changes the sorting of the songs. Valid values are:
     *
     * ### NAME SORTINGS
     * - - - -
     * * `name` => Sorts by the songs' title (including the leading article, if any).
     * - - - -
     * ### ARTIST SORTINGS
     * - - - -
     * * `artist` => Sorts by the songs' artist/band (inlcuding the leading article, if any).
     * - - - -
     * * `artistSet` => Sorts by artist/band, year released, album name (in any), and album
     * track number.
     * - - - -
     * ### GENERAL SORTINGS
     * - - - -
     * * `song_id` => Sorts by the songs' ID.
     *
     * This only works if the `.dta` file is a song pack.
     */
    sortBy?: SortByOptionsTypes
}
