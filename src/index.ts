import { DTADocument } from './@types/DTADocument'
import { depackDTA, parseDTA, sortDTA, getSongByID, UpdateDataOptions, SortByOptionsTypes, songsUpdates } from './exports'
import DTAArray from './core/DTAArray'
import DTATools from './core/DTATools'

export interface DTAParserOptions {
    /** Changes the sorting of the songs.
     */
    sortBy?: SortByOptionsTypes
    /**
     * Set this to `true` only if you're parsing official Harmonix songs DTAs.
     *
     * If you're parsing a `.dta` file from official pre-RB3 songs, the parser will
     * try to seek additional information from the updates.
     *
     * Also, It'll put Harmonix as author and the multitracks value to `true` on all songs.
     * @default false
     */
    harmonixSongs?: boolean
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
 * @see [`interface` DTADocument](@types/DTADocument.ts).
 */
const DTAParser = (dtaFileContents: string, options: DTAParserOptions = {}): DTADocument[] => {
    const { harmonixSongs, sortBy, update, updateAll } = options

    const depackedSongs = depackDTA(dtaFileContents)

    let parsedSongs: DTADocument[] = depackedSongs.map((value) => {
        const song = parseDTA(value)
        return song
    })

    if (harmonixSongs) {
        const updatedSongs = parsedSongs.map((song) => {
            const songname = song.content.id
            const songUpdates = songsUpdates[songname as keyof typeof songsUpdates]
            if (songUpdates) {
                song.content = {
                    ...song.content,
                    ...songUpdates,
                    author: 'Harmonix',
                    multitrack: true,
                }
            }
            return song
        })

        parsedSongs = updatedSongs
    }

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

export type { DTADocument } from './@types/DTADocument'
export { DTAArray, DTATools }
export default DTAParser
