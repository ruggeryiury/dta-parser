import { DTADocument } from './@types/DTADocument'
import { DTAParserOptions } from './@types/DTAParser'
import { depackDTA, parseDTA, sortDTA, getSongByID } from './core'
import { songsUpdates } from './locale/songs_updates'
import DTAArray from './array'
import DTATools from './tools'

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
        const updatedSongs = parsedSongs.map((song) => {
            const songname = song.content.id
            if (songsUpdates[songname as keyof typeof songsUpdates]) {
                song.content = {
                    ...song.content,
                    ...songsUpdates[songname as keyof typeof songsUpdates],
                    author: 'Harmonix',
                    multitrack: true,
                }
            }
            return song
        })

        parsedSongs = updatedSongs
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
            if (updateAll.author) song.content.author = updateAll.author
            return song
        })
    }

    if (options?.sortBy) {
        const sortByOption = options.sortBy
        parsedSongs = sortDTA(parsedSongs, sortByOption)
    }

    return parsedSongs
}

export type { DTADocument } from './@types/DTADocument'
export { DTAArray, DTATools }
export default DTAParser
