import { DTADocument } from './@types/DTADocument'
import { DTAParserOptions } from './@types/DTAParser'
import { depackDTA, parseDTA, sortDTA, stringifyDTA, createDTA } from './core'

/**
 * Parses a .dta file content.
 * - - - -
 * @param {string} dtaFileContents The .dta file contents.
 * @param {DTAParserOptions | undefined} options `OPTIONAL` Customize options for the parsing process.
 * @returns {DTADocument[]} An array with all songs parsed separately (if the DTA file is a song pack).
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

export const DTAArray = {
    sort: sortDTA,
    stringify: stringifyDTA,
}

export const DTATools = {
    create: createDTA,
}
export { DTADocument }
export default DTAParser
