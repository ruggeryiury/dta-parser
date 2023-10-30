import { DTAFileContents, DTAFile } from '../@types/DTAFile'
import { createDTA } from './createDTA'
import { SortByOptionsTypes, sortDTA } from '../utils/sortDTA'

/**
 * Returns an array of `DTAFile` objects from a JSON representation of a parsed song contents.
 * - - - -
 * @param {DTAFileContents | DTAFileContents[]} contents The JSON file contents. It can be either a `DTAFileContents` object,
 * or an array of `DTAFileContents` objects.
 * @param {SortByOptionsTypes} sortBy `OPTIONAL` The sorting method.
 * @returns {DTAFile} A new array of `DTAFile` objects.
 */
export const JSONtoDTA = (contents: DTAFileContents | DTAFileContents[], sortBy?: SortByOptionsTypes): DTAFile[] => {
  const returnArray: DTAFile[] = []

  if (Array.isArray(contents)) {
    contents.forEach((song) => {
      const newDTA = createDTA(null, false)
      newDTA.content = song
      returnArray.push(newDTA)
    })

    if (sortBy) {
      return sortDTA(returnArray, sortBy)
    }

    return returnArray
  }

  const newDTA = createDTA(null, false)
  newDTA.content = contents
  returnArray.push(newDTA)
  return returnArray
}
