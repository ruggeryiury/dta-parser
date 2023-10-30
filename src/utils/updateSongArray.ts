import { DTAFile } from '../@types/DTAFile'
import { SortByOptionsTypes, sortDTA } from '../utils/sortDTA'
import { genArraySongList } from './songList'

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
 * @param {DTAFile[]} oldSongs The old array where outdated songs might be replaced.
 * @param {DTAFile[]} update The new songs to be updated/added
 * @returns {DTAFile[]} An updated parsed songs array.
 */
export const updateSongArray = (oldSongs: DTAFile[], update: DTAFile[], sortArray?: SortByOptionsTypes): DTAFile[] => {
  // const oldSongsIDs = DTAArray.songList(oldSongs)
  const updateIDs = genArraySongList(update)

  const newSongs: DTAFile[] = []

  oldSongs.forEach((song) => {
    if (!updateIDs.includes(song.content.id)) newSongs.push(song)
  })

  update.forEach((song) => newSongs.push(song))

  if (sortArray) {
    return sortDTA(newSongs, sortArray)
  } else return newSongs
}
