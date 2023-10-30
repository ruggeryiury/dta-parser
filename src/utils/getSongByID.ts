import { DTAFile } from '../@types/DTAFile'

/**
 * Returns a parsed song object inside an `DTAFile` array based on its unique string ID.
 * Returns `undefined` if the song's not found.
 * - - - -
 * @param {DTAFile[]} songs An array on parsed songs you want to find the song from.
 * @param {string} id The unique string ID of the song.
 * @returns {DTAFile | undefined} The index of the song inside the `DTAFile` array.
 */
export const getSongByID = (songs: DTAFile[], id: string): DTAFile | undefined => {
  let returnValue: DTAFile | undefined
  songs.some((song) => {
    if (song.get('id') === id) {
      returnValue = song
      return true
    }
  })

  return returnValue
}
