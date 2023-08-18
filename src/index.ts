import { DTAContentDocument, DTADocument } from './@types/DTADocument'
import { depackDTA } from './utils/depackDTA'
import { getSongByID } from './utils/getSongByID'
import { parseDTA } from './utils/parseDTA'
import { SortByOptionsTypes, sortDTA } from './utils/sortDTA'
import { UpdateDataOptions } from './utils/updateDTA'
import DTAArray from './core/DTAArray'
import DTATools from './core/DTATools'

interface DTAParserOptions {
    /**
     * Makes the return type of this function a JSON representation of a parsed song
     * rather than a `DTADocument` object. Default is `false`.
     */
    asJSON?: boolean
    /** 
     * Changes the sorting of the songs.
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

type DTAParserReturnType<O extends DTAParserOptions> =
    | O extends { asJSON: true }
    ? DTAContentDocument[]
    : DTADocument[]

/**
 * Parses a .dta file content.
 * - - - -
 * @param {string} dtaFileContents The .dta file contents.
 * @param {DTAParserOptions} options `OPTIONAL` Customizing options for the parsing process.
 * @returns {DTADocument[]} An array of parsed song objects.
 *
 * @see [`DTADocument`](@types/DTADocument.ts) interface.
 */
const DTAParser = <O extends DTAParserOptions>(
        dtaFileContents: string,
        options?: O
    ): DTAParserReturnType<O> => {
    if (!options) {
        options = {} as O
    }

    const { asJSON, sortBy, update, updateAll } = options

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

    if (asJSON) {
        const JSONSongs = parsedSongs.map(song => song.json())
        return JSONSongs as DTAParserReturnType<O>
    }

    return parsedSongs as DTAParserReturnType<O>
}

export type {
    DTADocument,
    DTAContentDocument,
    CustomDTADocument,
    CustomDTAContentDocument,
} from './@types/DTADocument'
export { DTAArray, DTATools }
export default DTAParser
