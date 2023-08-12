import { DTADocument } from '../@types/DTADocument'
import DTAArray from '../core/DTAArray'
import { SortByOptionsTypes } from '../core/sortDTA'

/**
 * Updates a parsed songs array with contents of another parsed songs array.
 *
 * If a song with the same unique string ID is found, it will replace
 * with the updated version.
 *
 * If not, the song will be added to the returned parsed songs array.
 *
 * Passing a string as third argument will sort the new parsed songs array
 * based on desired sorting option.
 * - - - -
 * @param {DTADocument[]} oldSongs The old array where outdated songs might be replaced.
 * @param {DTADocument[]} update The new songs to be updated/added
 * @returns {DTADocument[]} An updated parsed songs array.
 */
export const updateSongArray = (
    oldSongs: DTADocument[],
    update: DTADocument[],
    sortArray?: SortByOptionsTypes
): DTADocument[] => {
    const oldSongsIDs = DTAArray.songList(oldSongs)
    const updateIDs = DTAArray.songList(update)

    const newSongs: DTADocument[] = []

    oldSongs.forEach((song) => {
        if (!updateIDs.includes(song.content.id)) newSongs.push(song)
    })

    update.forEach((song) => newSongs.push(song))

    if (sortArray) {
        return DTAArray.sort(newSongs, sortArray)
    } else return newSongs
}
