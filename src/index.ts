import { DTAFile } from './lib/dta'
import { depackDTA } from './lib/depack'
import { parseDTA } from './lib/parse'
import { SortByOptionsTypes, sortDTA } from './lib/sort'
import { UpdateDataOptions, updateDTA } from './lib/update'
import { Song, SongCollection } from './classes'

export interface DTAParserOptions<RT extends boolean | undefined> {
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
  /**
   * Parses a `.dta` file directly into a simple `DTAFile` object. Default is `false`.
   */
  asJSON?: RT
}

/**
 * Parses a .dta file content.
 * - - - -
 * @param {string} dtaFileContents The .dta file contents as string.
 * @param {DTAParserOptions} options `OPTIONAL` Customizing options for the parsing process.
 * @returns {DTAFile[]} An array of parsed song objects.
 */
const DTAParser = <RT extends boolean | undefined = undefined>(dtaFileContents: string, options?: DTAParserOptions<RT>): RT extends true ? DTAFile[] : SongCollection => {
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
