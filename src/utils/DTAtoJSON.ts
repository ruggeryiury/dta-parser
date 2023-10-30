import { DTAFileContents, DTAFile } from '../@types/DTAFile'
import { SortByOptionsTypes, sortDTA } from '../utils/sortDTA'

/**
 * Returns a JSON object representation of a parsed song.
 * - - - -
 * @param {DTAFile} song The parsed song you want the contents from.
 * @returns {DTAFileContents} A JSON object representation of a parsed song.
 */
export const DTAtoJSON = (song: DTAFile): DTAFileContents => {
  const content = song.content

  return content
}

/**
 * Returns an array with parsed songs objects converted to JSON.
 * - - - -
 * @param {DTAFile[]} songs An array with parsed songs objects to be converted.
 * @param {SortByOptionsTypes} sortBy `OPTIONAL` The sorting method.
 * @returns {DTAFileContents} An array with parsed songs objects converted to JSON.
 */
export const DTAArraytoJSONArray = (songs: DTAFile[], sortBy?: SortByOptionsTypes): DTAFileContents[] => {
  const returnArray: DTAFileContents[] = []

  if (sortBy) {
    sortDTA(songs, sortBy).forEach((sort) => returnArray.push(sort.json()))
  } else {
    songs.forEach((song) => returnArray.push(song.json()))
  }

  return returnArray
}
