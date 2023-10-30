import { DTAFile } from '../@types/DTAFile'

/**
 * Filters an array of parsed songs based on the given author ID.
 * - - - -
 * @param {DTAFile[]} songs The parsed songs' array.
 * @param {number} authorID The author ID.
 * @returns {DTAFile[]} The filtered songs' array based on the given author ID.
 */
export const getSongsFromAuthor = (songs: DTAFile[], authorID: number): DTAFile[] => {
  return songs.filter((song) => {
    const songAuthorID = song.get('song_id').toString()
    const idLength = authorID.toString().length
    if (Number.isNaN(songAuthorID)) return

    const matchID = authorID.toString().slice(1, idLength + 1)
    if (matchID !== songAuthorID) return

    return song
  })
}
