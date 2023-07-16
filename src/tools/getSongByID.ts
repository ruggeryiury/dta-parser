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
    let returnValue: DTADocument | undefined = undefined
    songs.some((song) => {
        if (song.get('id') === id) {
            returnValue = song
            return true
        }
    })

    return returnValue
}

/**
 * Returns the index of a song inside an `DTADocument` array based on its unique string ID.
 * Returns `undefined` if the song's not found.
 *
 * @param {DTADocument[]} songs An array on parsed songs you want to find the song from.
 * @param {string} id: The unique string ID of the song.
 * @returns {number | undefined} The index of the song inside the `DTADocument` array.
 */
export const getSongIndexByID = (
    songs: DTADocument[],
    id: string
): number | undefined => {
    let returnValue: number | undefined = undefined
    songs.some((song, index) => {
        if (song.get('id') === id) {
            returnValue = index
            return true
        }
    })

    return returnValue
}
