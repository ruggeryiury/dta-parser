import { sortDTA, stringifyDTA, getSongByID, filterDTA } from './core'

interface DTAArrayModule {
    /**
     * Filters an array of parsed songs based on the giving filtering options.
     * - - - -
     * @param {DTADocument[]} songs An array of parsed songs.
     * @param {FilterOptions<SB, V>} filters The filtering options.
     * @returns {DTADocument[]} A filtered array of parsed songs.
     */
    filter: typeof filterDTA
    /**
     * Returns a parsed song object inside an `DTADocument` array based on its unique string ID.
     * Returns `undefined` if the song's not found.
     *
     * @param {DTADocument[]} songs An array on parsed songs you want to find the song from.
     * @param {string} id: The unique string ID of the song.
     * @returns {DTADocument | undefined} The index of the song inside the `DTADocument` array.
     */
    getSongByID: typeof getSongByID
    /**
     * Sorts an array of parsed song objects.
     * - - - -
     * @param {DTADocument[]} songs An array with parsed song objects.
     * @param {SortByOptionsTypes} sortBy The sorting type.
     * @returns {DTADocument[]} A sorted array of parsed song objects.
     */
    sort: typeof sortDTA
    /**
     * Converts an array of parsed song objects back to `.dta` file content string.
     * - - - -
     * @param {DTADocument[]} songs An array of parsed song objects.
     * @param {StringifyDataOptions} options `OPTIONAL` Customization options for the stringifying process.
     * @returns {string} e string representation of this parsed song object as a `.dta` file.
     */
    stringify: typeof stringifyDTA
}
/**
 * Module with functions to handle arrays of parsed song objects.
 */
const DTAArray: DTAArrayModule = {
    filter: filterDTA,
    getSongByID: getSongByID,
    sort: sortDTA,
    stringify: stringifyDTA,
}

export default DTAArray
