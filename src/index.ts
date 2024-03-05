import { DTAFile } from './lib/dta'
import { depackDTA } from './lib/depack'
import { parseDTA } from './lib/parse'
import { SongSortingTypes, sortDTA } from './lib/sort'
import { MultipleSongsUpdateObject, SongUpdateObject, updateDTA } from './lib/update'
import { Song, SongCollection } from './classes'

export interface DTAParserOptions<RT extends boolean | undefined> {
  /**
   * Changes the sorting of the songs. Is no sorting is specified, it will keep the order from the parsed `.dta` file.
   */
  sortBy?: SongSortingTypes
  /**
   * Applies direct values updates on any song inside the `.dta` file based on the song's shortname ID.
   */
  update?: SongUpdateObject
  /**
   * Applies common direct values updates on all songs inside the `.dta` file.
   */
  updateAll?: MultipleSongsUpdateObject
  /**
   * Parses a `.dta` file directly into a simple `DTAFile` object. Default is `false`.
   */
  asJSON?: RT
}

export type DTAParserReturnType<RT extends boolean | undefined> = RT extends true ? DTAFile[] : SongCollection

/**
 * Parses a `.dta` file contents.
 * - - - -
 * @param {string} dtaFileContents The `.dta` file contents as string.
 * @param {DTAParserOptions<RT>} options `OPTIONAL` An object with options that customizes the parsing process.
 * @returns {DTAParserReturnType<RT>} An array of parsed song objects, or a `SongCollection` class.
 */
const DTAParser = <RT extends boolean | undefined = undefined>(dtaFileContents: string, options?: DTAParserOptions<RT>): DTAParserReturnType<RT> => {
  if (!options) options = {}
  const { sortBy, update, updateAll, asJSON } = options

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

  if (asJSON) return parsedSongs as RT extends true ? DTAFile[] : SongCollection

  const collection: Song[] = []
  parsedSongs.forEach((song) => {
    collection.push(new Song(song))
  })

  return new SongCollection(collection) as RT extends true ? DTAFile[] : SongCollection
}

export type { DTAFile } from './lib/dta'
export { Song, SongCollection }
export default DTAParser
