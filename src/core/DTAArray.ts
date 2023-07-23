import { filterDTA } from './filterDTA'
import { getSongByID } from './getSongByID'
import { sortDTA } from './sortDTA'
import { stringifyDTA } from './stringifyDTA'

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
     * Converts an array of parsed song objects back to `.dta` file contents string.
     * - - - -
     * @param {DTADocument[]} songs An array of parsed song objects.
     * @param {StringifyDataOptions} options `OPTIONAL` Customization options for the stringifying process. If an object
     * is not passed as argument at all, it will use default configurations to generate MAGMA C3's `.dta` file contents type.
     *
     * Only some values can be customized on the default option for maximum compatibility with other `.dta` file parsers.
     * @returns {string} A string representation of this parsed song object as a `.dta` file contents string.
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
