import { DTADocument } from './@types/DTADocument'
import { DTAParserOptions } from './@types/DTAParser'
import { depackDTA, parseDTA, sortDTA, stringifyDTA, createDTA } from './core'
import { getSongByID } from './tools'
import { applyUpdates } from './utils'

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

    let parsedSongs: DTADocument[] = []
    depackedSongs.map((value) => {
        const song = parseDTA(value)
        parsedSongs.push(song)
    })

    if (options?.harmonixSongs) {
        parsedSongs = applyUpdates(parsedSongs).map((song) => {
            if (!song.custom)
                song.custom = {
                    author: 'Harmonix',
                    multitrack: true,
                }
            return song
        })
    }

    if (options?.update) {
        const ids = Object.keys(options.update)

        ids.forEach((id) => {
            const selectedSong = getSongByID(parsedSongs, id)
            const updateObject = options.update?.[id]

            if (selectedSong !== undefined && updateObject) {
                selectedSong.update(updateObject)
            }
        })
    }

    if (options?.updateAll) {
        const updateAll = options.updateAll
        parsedSongs = parsedSongs.map((song) => {
            if (updateAll.author) {
                if (!song.custom)
                    song.custom = {
                        author: updateAll.author,
                    }
                song.custom.author = updateAll.author
            }
            return song
        })
    }

    if (options?.sortBy) {
        const sortByOption = options.sortBy
        parsedSongs = sortDTA(parsedSongs, sortByOption)
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
    /**
     * Returns a parsed song object inside an `DTADocument` array based on its unique string ID.
     * Returns `undefined` if the song's not found.
     *
     * @param {DTADocument[]} songs An array on parsed songs you want to find the song from.
     * @param {string} id: The unique string ID of the song.
     * @returns {DTADocument | undefined} The index of the song inside the `DTADocument` array.
     */
    getSongByID: typeof getSongByID
}
/**
 * Module with functions to handle arrays of parsed song objects.
 */
export const DTAArray: DTAArrayModule = {
    sort: sortDTA,
    stringify: stringifyDTA,
    getSongByID: getSongByID,
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
