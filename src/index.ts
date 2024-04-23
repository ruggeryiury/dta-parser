import { DTAFile, DTAFileRecipe, MultipleSongsUpdateObject, Song, SongCollection, SongSortingTypes, SongUpdateObject, depackDTA, genDTARecipe, parseDTA, sortDTA, updateDTA } from './core'
import useDefaultOptions from './lib/ruggy-js/useDefaultOptions'
import detectBufferEncoding from './utils/lib/detectBufferEncoding'

export type DTAParserExportTypes = 'DTAFile' | 'DTARecipe' | 'SongClass' | undefined

export interface DTAParserOptions<RT extends DTAParserExportTypes> {
  /**
   * Parses a `.dta` file directly into a simple `DTAFile` object, or as a `DTARecipe` object. Default is `SongClass`.
   */
  format?: RT
  /**
   * Changes the sorting of the songs. If `undefined`, it will keep the order from the parsed `.dta` file.
   */
  sortBy?: SongSortingTypes
  /**
   * Applies direct values updates on any song inside the `.dta` file based on the song's shortname ID.
   */
  update?: SongUpdateObject | null
  /**
   * Applies common direct values updates on all songs inside the `.dta` file.
   */
  updateAll?: MultipleSongsUpdateObject | null
}

export type DTAParserReturnType<RT extends DTAParserExportTypes> = RT extends 'DTAFile' ? DTAFile[] : RT extends 'DTARecipe' ? DTAFileRecipe[] : SongCollection

/**
 * Parses a `.dta` file contents.
 * - - - -
 * @param {string | Buffer} dtaFileContents The `.dta` file contents as string or Buffer.
 * @param {DTAParserOptions<RT>} options `OPTIONAL` An object with options that customizes the parsing process.
 * @returns {DTAParserReturnType<RT>} An array of parsed song objects, or a `SongCollection` class.
 */
const DTAParser = <RT extends DTAParserExportTypes = undefined>(dtaFileContents: string | Buffer, options?: DTAParserOptions<RT>): DTAParserReturnType<RT> => {
  const { format, sortBy, update, updateAll } = useDefaultOptions<DTAParserOptions<RT>, false>({ format: undefined, sortBy: undefined, update: undefined, updateAll: undefined }, options)

  const encoding = detectBufferEncoding(dtaFileContents)
  const content = typeof dtaFileContents === 'string' ? dtaFileContents : dtaFileContents.toString(encoding)
  const depackedSongs = depackDTA(content)

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

  if (format === 'DTAFile') return parsedSongs as DTAParserReturnType<RT>
  else if (format === 'DTARecipe') return parsedSongs.map((ps) => genDTARecipe(ps)) as DTAParserReturnType<RT>

  const collection: Song[] = []
  parsedSongs.forEach((song) => {
    collection.push(new Song(song))
  })

  return new SongCollection(collection) as DTAParserReturnType<RT>
}

export type { DTAFile } from './core/lib/dta'
export { Song, SongCollection }
export default DTAParser
