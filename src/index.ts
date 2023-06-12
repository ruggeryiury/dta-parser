import { DTAParserOptions } from './@types'
import { DTADocument } from './@types/DTADocument'
import { depackDTA, parseDTA } from './core'
import { sortDTA } from './utils'

/**
 * Parses a .dta file.
 * @returns An `Array` of `DTADocuments`, that represents a parsed .dta file into an `Object`.
 * @since v1.1.0
 */
const DTAParser = (
    /**
     * The DTA file content.
     * - - - -
     */
    dtaFileContents: string,
    /**
     * Customized options for the parser.
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

    if (options && options.sortBy) {
        return sortDTA(parsedSongs, options.sortBy)
    }

    return parsedSongs
}

export { DTADocument }

export default DTAParser
