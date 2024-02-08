import { DTAFile } from './lib/dta/dta'
import DTAFileModule from './core/DTAFileModule'
import { depackDTA } from './lib/dta/depack'
import { parseDTA } from './lib/dta/parse'
import { SortByOptionsTypes, sortDTA } from './lib/dta/sort'
import { UpdateDataOptions, updateDTA } from './lib/dta/update'

export interface DTAParserOptions {
  /**
   * Changes the sorting of the songs.
   */
  sortBy?: SortByOptionsTypes
  /**
   * Applies direct values updates on any song inside the `.dta` file based on the song's unique string ID.
   */
  update?: { [id: string]: UpdateDataOptions }
  /**
   * Applies direct values updates on all songs inside the `.dta` file.
   */
  updateAll?: Pick<UpdateDataOptions, 'author' | 'multitrack' | 'pack_name'>
}

/**
 * Parses a .dta file content.
 * - - - -
 * @param {string} dtaFileContents The .dta file contents as string.
 * @param {DTAParserOptions} options `OPTIONAL` Customizing options for the parsing process.
 * @returns {DTAFile[]} An array of parsed song objects.
 */
const DTAParser = (dtaFileContents: string, options: DTAParserOptions = {}): DTAFile[] => {
  const { sortBy, update, updateAll } = options

  const depackedSongs = depackDTA(dtaFileContents)

  let parsedSongs = depackedSongs.map((value) => {
    const song = parseDTA(value)
    return song
  })

  if (update) {
    const updateKeys = Object.keys(update)

    updateKeys.forEach((keys) => {
      parsedSongs = parsedSongs.map((song) => {
        if (song.id === keys && update[keys]) {
          return updateDTA(song, update[keys])
        }

        return song
      })
    })
  }

  if (updateAll) {
    parsedSongs = parsedSongs.map((song) => {
      if (updateAll.author) {
        song.author = updateAll.author
      }
      if (updateAll.multitrack !== undefined) {
        song.multitrack = updateAll.multitrack
      }
      if (updateAll.pack_name) {
        song.pack_name = updateAll.pack_name
      }
      return song
    })
  }

  if (sortBy) {
    parsedSongs = sortDTA(parsedSongs, sortBy)
  }

  return parsedSongs
}

export type { DTAFile } from './lib/dta/dta'
export { DTAFileModule }
export default DTAParser
