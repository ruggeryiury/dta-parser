import { DTADocument } from './@types/DTADocument'
import { DTAParserOptions } from './@types/DTAParser'
import { depackDTA, parseDTA, sortDTA, stringifyDTA, createDTA } from './core'

/**
 * Parses a .dta file.
 * @returns An `Array` with all songs parsed separately.
 */
const DTAParser = (
    /**
     * The .dta file contents.
     */
    dtaFileContents: string,
    /**
     * Customize options for the parsing process.
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

export const DTAArray = {
    sort: sortDTA,
    stringify: stringifyDTA,
}

export { DTADocument, createDTA }
export default DTAParser
