import { DTADocument } from './@types/DTADocument'
import { depackDTA } from './core/depackDTA'
import { getSongByID } from './utils/getSongByID'
import { parseDTA } from './core/parseDTA'
import { SortByOptionsTypes, sortDTA } from './core/sortDTA'
import { UpdateDataOptions } from './core/updateDTA'
import DTAArray from './DTAArray'
import DTATools from './DTATools'
export interface DTAParserOptions {
    /** Changes the sorting of the songs.
     */
    sortBy?: SortByOptionsTypes
    /**
     * Applies direct values updates on any song inside the `.dta` file based on the song's unique string ID.
     */
    update?: {
        [id: string]: UpdateDataOptions
    }
    /**
     * Applies direct values updates on all songs inside the `.dta` file.
     */
    updateAll?: Pick<UpdateDataOptions, 'author' | 'multitrack' | 'pack_name'>
}

/**
 * Parses a .dta file content.
 * - - - -
 * @param {string} dtaFileContents The .dta file contents.
 * @param {DTAParserOptions} options `OPTIONAL` Customizing options for the parsing process.
 * @returns {DTADocument[]} An array of parsed song objects.
 *
 * @see [`DTADocument`](@types/DTADocument.ts) interface.
 */
const DTAParser = (
    dtaFileContents: string,
    options?: DTAParserOptions
): DTADocument[] => {
    if (!options) {
        options = {} as DTAParserOptions
    }

    const { sortBy, update, updateAll } = options

    const depackedSongs = depackDTA(dtaFileContents)

    let parsedSongs: DTADocument[] = depackedSongs.map((value) => {
        const song = parseDTA(value)
        return song
    })

    if (update) {
        const updateKeys = Object.keys(update)

        updateKeys.forEach((keys) => {
            const selectedSong = getSongByID(parsedSongs, keys)
            const updateObject = update?.[keys]

            if (selectedSong && updateObject) {
                selectedSong.update(updateObject)
            }
        })
    }

    if (updateAll) {
        parsedSongs = parsedSongs.map((song) => {
            if (updateAll.author) {
                song.content.author = updateAll.author
            }
            if (updateAll.multitrack !== undefined) {
                song.content.multitrack = updateAll.multitrack
            }
            if (updateAll.pack_name) {
                song.content.pack_name = updateAll.pack_name
            }
            return song
        })
    }

    if (sortBy) {
        parsedSongs = sortDTA(parsedSongs, sortBy)
    }

    return parsedSongs
}

export type {
    DTADocument,
    DTAContentDocument,
    ExtraDTADocument,
    ExtraDTAContentDocument,
} from './@types/DTADocument'
export { DTAArray, DTATools }
export default DTAParser
