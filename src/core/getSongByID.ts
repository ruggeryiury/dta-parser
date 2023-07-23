import { DTADocument } from '../@types/DTADocument'

/**
 * Returns a parsed song object inside an `DTADocument` array based on its unique string ID.
 * Returns `undefined` if the song's not found.
 *
 * @param {DTADocument[]} songs An array on parsed songs you want to find the song from.
 * @param {string} id The unique string ID of the song.
 * @param {RT} get `OPTIONAL` The type of the returned value from the function.
 * @returns {DTADocument | undefined} The index of the song inside the `DTADocument` array.
 */
export const getSongByID = (
    songs: DTADocument[],
    id: string
): DTADocument | undefined => {
    let returnValue: DTADocument | undefined
    songs.some((song) => {
        if (song.get('id') === id) {
            returnValue = song
            return true
        }
    })

    return returnValue
}
