import Path from 'path-js'
import { type DTAUpdateOptions, type DTAStringifyOptions, type PartialDTAFile, updateDTA, depackDTA, parseDTA, type PartialDTARecord, type DTAUpdateOptionsForExtend, type SongSortingTypes, sortDTA, stringifyDTA } from '../core.js'
import { detectBufferEncoding, isURL, useDefaultOptions } from '../lib.js'

export type SongUpdatesConstructorContentTypes = string | Buffer | DTAUpdateOptions | DTAUpdateOptions[] | Path
export type SongUpdatesStringifyOptions = Pick<DTAStringifyOptions, 'allSongsInline' | 'sortBy'>

/**
 * A class that represents the contents of a `songs_updates.dta` file.
 * - - - -
 */
export class SongUpdatesDTA {
  /** An array with object that represents the contents of a DTA updates song entry. */
  updates: PartialDTAFile[] = []

  /**
   * @param {SongUpdatesConstructorContentTypes} content A path to a `songs_updates.dta` file (as `string` or an instantiated [`Path`](https://github.com/ruggeryiury/path-js) class), the contents of a DTA update file (as `string`), a `Buffer` object of a DTA update file, a `DTAUpdateOptions` object, or an array of `DTAUpdateOptions` objects.
   */
  constructor(content: SongUpdatesConstructorContentTypes) {
    let str = ''
    let isAnyObject = false
    if (content instanceof Path) {
      if (!content.exists()) throw new Error(`SongsDTAError: Provided path "${content.path}" does not exists.`)
      const buf = content.readFileSync()
      const enc = detectBufferEncoding(buf)
      str = buf.toString(enc)
    } else if (typeof content === 'string') {
      if (Path.isPath(content)) {
        const path = new Path(content)
        if (!path.exists()) throw new Error(`SongsDTAError: Provided path "${path.path}" does not exists.`)
        const buf = path.readFileSync()
        const enc = detectBufferEncoding(buf)
        str = buf.toString(enc)
      } else {
        str = content
      }
    } else if (Buffer.isBuffer(content)) {
      const enc = detectBufferEncoding(content)
      str = content.toString(enc)
      isAnyObject = true
    } else if (Array.isArray(content)) content.forEach((c) => this.updates.push(updateDTA({} as PartialDTAFile, c)))
    else this.updates.push(updateDTA({} as PartialDTAFile, content))

    if (isAnyObject && !str) return

    const depackedSongs = depackDTA(str)
    this.updates = depackedSongs.map((songContent) => Object.fromEntries(parseDTA(songContent, { format: 'partial', omitUnusedValues: false, registerCores: true })) as PartialDTARecord as PartialDTAFile)
  }

  /**
   * Asynchronously fetches a `songs_updates.dta` file from an URL.
   * - - - -
   * @param {string} url The URL of the `.dta` file.
   * @returns {Promise<SongsDTA>} A new instantiated `SongUpdatesDTA` class.
   */
  static async fromURL(url: string) {
    if (!isURL(url)) throw new Error(`SongsDTAError: Provided URL "${url}" is not a valid URL.`)

    try {
      const response = await fetch(url)

      if (!response.ok) throw new Error(`SongsDTAError: Provided URL "${url}" is not a valid URL.`)

      const data = await response.arrayBuffer()
      return new SongUpdatesDTA(Buffer.from(data))
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  /**
   * Fetches a specific song updates contents based on its song ID. If no song if found, it will returns as `undefined`.
   * - - - -
   * @param {string} id The unique shortname ID of the song update you want to fetch.
   * @returns {PartialDTAFile | undefined}
   */
  getSongByID(id: string): PartialDTAFile | undefined {
    return this.updates.find((song) => String(song.id) === String(id))
  }

  /**
   * Updates a song updates contents based on its song ID (shortname).
   * - - - -
   * @param {string} id The unique shortname ID of the song you want to update.
   * @param {DTAUpdateOptionsForExtend} update An object with updates values to be applied on the `PartialDTAFile` song updates entry.
   */
  update(id: string, update: DTAUpdateOptionsForExtend): void {
    this.updates = this.updates.map((song) => {
      if (song.id === id) {
        return updateDTA(song, update)
      }
      return song
    })
  }

  /**
   * Sorts all songs updates entries using several sorting methods.
   * - - - -
   * @param {SongSortingTypes} sortBy The sorting method type.
   */
  sort(sortBy: SongSortingTypes): void {
    this.updates = sortDTA(this.updates, sortBy)
  }

  /**
   * Stringifies all songs updates from this class to `.dta` file contents.
   * - - - -
   * @param {SongStringifyOptions} options `OPTIONAL` An object with values that changes the behavior of the stringify process.
   * @returns {string}
   */
  stringify(options?: SongUpdatesStringifyOptions): string {
    const opts = useDefaultOptions<SongUpdatesStringifyOptions, true>(
      {
        allSongsInline: false,
        sortBy: null,
      },
      options
    )
    return stringifyDTA(this.updates, 'songs_updates', { format: 'rb3_dlc', placeRB3DXAttributes: true, ignoreFakeSongs: false, ...opts })
  }
}
