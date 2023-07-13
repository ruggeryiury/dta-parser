export type SortByOptionsTypes = 'name' | 'artist' | 'artist_set' | 'song_id'

export interface DTAParserOptions {
    /** Changes the sorting of the songs. Valid values are:
     *
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
     * If you're parsing a DTA file from official pre-RB3 songs, the parser will
     * try to seek additional information from the updates.
     * @default false
     */
    applyUpdates?: boolean
}
