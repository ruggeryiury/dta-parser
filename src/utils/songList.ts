import { DTADocument } from '../@types/DTADocument'

/**
 * Returns an array with all available songs unique string ID from a parsed songs array.
 * - - - -
 * @param {DTADocument[]} songs An array with parsed songs.
 * @param sorted `OPTIONAL` Sorts the array based on the songs unique string ID.
 * @returns {string[]} An array with all available songs unique string ID.
 */
export const genArraySongList = (
    songs: DTADocument[],
    sorted?: boolean
): string[] => {
    const allSongs: string[] = []

    songs.forEach((song, index) => {
        allSongs.push(song.content.id)
    })

    if (sorted)
        return allSongs.sort((a, b) => {
            if (a.toLowerCase() > b.toLowerCase()) return 1
            if (a.toLowerCase() < b.toLowerCase()) return -1
            return 0
        })
    else return allSongs
}
