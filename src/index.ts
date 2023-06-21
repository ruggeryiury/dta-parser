import { DTADocument } from './@types/DTADocument'
import { DTAParserOptions } from './@types/DTAParser'
import { depackDTA, parseDTA, sortDTA, stringifyDTA } from './core'

/**
 * Parses a .dta file.
 * @returns An `Array` of single-multiple `DTADocument` object, that represents a parsed song from the .dta file.
 * @since v1.1.0
 */
const DTAParser = (
    /**
     * The .dta file contents.
     * - - - -
     */
    dtaFileContents: string,
    /**
     * Options to customize the parsing process.
     * - - - -
     */
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

/**
 * Methods for `DTADocument[]`.
 */
export const DTAArray = {
    sort: sortDTA,
    stringify: stringifyDTA,
}

export { DTADocument }
export default DTAParser
