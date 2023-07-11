import { DTADocument } from './@types/DTADocument'
import { DTAParserOptions } from './@types/DTAParser'
import { depackDTA, parseDTA, sortDTA, stringifyDTA, createDTA } from './core'

/**
 * Parses a .dta file content.
 * - - - -
 * @param {string} dtaFileContents The .dta file contents.
 * @param {DTAParserOptions | undefined} options `OPTIONAL` Customizing options for the parsing process.
 * @returns {DTADocument[]} An array of parsed song objects.
 *
 * @see [`interface` DTADocument](@types/DTADocument.ts).
 */
const DTAParser = (
    dtaFileContents: string,
    options?: DTAParserOptions
): DTADocument[] => {
    const depackedSongs = depackDTA(dtaFileContents)

    const parsedSongs: DTADocument[] = []
    depackedSongs.map((value) => {
        const song = parseDTA(value)
        parsedSongs.push(song)
    })

    if (options?.sortBy) {
        return sortDTA(parsedSongs, options.sortBy)
    }

    return parsedSongs
}

interface DTAArrayModule {
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
export const DTAArray: DTAArrayModule = {
    sort: sortDTA,
    stringify: stringifyDTA,
}

interface DTAToolsModule {
    /**
     * Creates a new parsed song object.
     * @param {CreateDataRequired} options `OPTIONAL` Options for the `DTADocument` creation process.
     * If `null`, It will be created using a all-default, all-blank options.
     * @returns {DTADocument} A new parsed song object.
     */
    create: typeof createDTA
}

/**
 * Module with general utility functions.
 */
export const DTATools: DTAToolsModule = {
    create: createDTA,
}
export type { DTADocument } from './@types/DTADocument'
export default DTAParser
