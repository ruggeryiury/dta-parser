import type { DTAFile, DTAFileWithIndex } from '../core.js'

/**
 * Adds literal indexes as values to each song from a collection.
 * - - - -
 * @param {DTAFile[]} songs The collection of songs you want to add indexes to.
 * @returns {DTAFileWithIndex[]} The song collection with injected indexes.
 */
export const addIndexToDTAFileList = (songs: DTAFile[]): DTAFileWithIndex[] => {
  return songs.map((song, i) => {
    return {
      ...song,
      index: i,
    } as DTAFileWithIndex
  })
}
