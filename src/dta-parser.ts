import { DTADocument } from './@types/parseDTA'
import { DTAPackParserOptions } from './@types/index'
import depackDTA from './functions/depackDTA'
import parseDTA from './functions/parseDTA'
import sortDTAArray from './functions/sortDTAArray'
import newDTA from './utils/newDTA'
import generateDTAFile from './functions/generateDTAFile'

/**
 * Parses a pack-type DTA file.
 *
 * @param fileContent The DTA file content.
 * @param options Customized options for the DTA pack parsing.
 * @returns An ``Array`` of `Objects`, representing each song of the DTA
 * pack.
 */
const DTAPackParser = (
    fileContent: string,
    options?: DTAPackParserOptions
): DTADocument[] => {
    const depacked = depackDTA(fileContent)

    if (depacked.length > 1) {
        const parsedSongs: DTADocument[] = []
        depacked.map((value) => {
            const song = parseDTA(value)
            parsedSongs.push(song)
        })

        if (options && options.sortBy) {
            return sortDTAArray(parsedSongs, options.sortBy)
        }

        return parsedSongs
    }

    throw new Error('The loaded DTA File is not a pack.')
}

/**
 * Parses a single song DTA file.
 *
 * @param fileContent The DTA file content.
 * @returns An ``Object``, representing a song.
 */
const DTAParser = (fileContent: string): DTADocument => {
    const song = parseDTA(fileContent)
    return song
}

export {
    DTAPackParser,
    depackDTA,
    sortDTAArray,
    newDTA,
    generateDTAFile,
    DTADocument,
}
export default DTAParser
