import Path from 'path-js'
import { createDTAFileFromRecipe, depackDTA, genDTARecipe, parseDTA, sortDTA, stringifyDTA, updateDTA, type DTAFile, type DTAFileRecipe, type DTARecord, type DTAStringifyOptions, type DTAUpdateOptions, type DTAUpdateOptionsForExtend, type PartialDTAFile, type PartialDTARecord, type SongSortingTypes } from './core.js'
import { detectBufferEncoding, genNumericSongID, isDTAFile, isDTAFileRecipe, useDefaultOptions } from './lib.js'

export type SongConstructorContentTypes = string | Buffer | DTAFile | DTAFile[]
export type SongUpdatesConstructorContentTypes = string | Buffer | DTAUpdateOptions | DTAUpdateOptions[]
export type SongStringifyOptions = Pick<DTAStringifyOptions, 'format' | 'guitarCores' | 'placeCustomAttributes' | 'placeRB3DXAttributes' | 'sortBy' | 'wiiMode' | 'ignoreFakeSongs'>
export type SongUpdatesStringifyOptions = Pick<DTAStringifyOptions, 'allSongsInline' | 'sortBy'>

/**
 * A class that represents the contents of a `songs.dta` type file.
 * - - - -
 */
class SongsDTA {
  /** An array with object that represents the contents of a DTA song entry. */
  songs: DTAFile[] = []

  /**
   * @param {SongConstructorContentTypes} content A path string to a DTA file, decrypted content string from a DTA file, a `Buffer` from a DTA file, a parsed `DTAFile` object, or an array of `DTAFile` objects.
   */
  constructor(content: SongConstructorContentTypes) {
    let str = ''
    let isAnyObject = false
    if (typeof content === 'string') {
      if (Path.isPath(content)) {
        const path = new Path(content)
        const buf = path.readFileSync()
        const enc = detectBufferEncoding(buf)
        str = buf.toString(enc)
      } else {
        str = content
      }
    } else if (Array.isArray(content)) {
      isAnyObject = true
      for (const song of content) {
        if (isDTAFile(song)) this.songs.push(song)
        else throw new Error('SongsDTAError: Tried to parse songs with complete information but all necessary values were not found. Try to use "SongsUpdatesDTA" class instead.')
      }
    } else if (Buffer.isBuffer(content)) {
      const enc = detectBufferEncoding(content)
      str = content.toString(enc)
    } else if (isDTAFile(content)) {
      isAnyObject = true
      this.songs.push(content)
    } else throw new Error('SongsDTAError: Tried to parse songs with complete information but provided object does not match any of the available file types.')

    if (isAnyObject && !str) return

    const depackedSongs = depackDTA(str)
    this.songs = depackedSongs.map((songContent) => Object.fromEntries(parseDTA(songContent, { format: 'complete', omitUnusedValues: true, registerCores: false })) as DTARecord as DTAFile)
  }

  /**
   * A static method that returns n new `SongsDTA` instance from complete songs' recipes.
   * - - - -
   * @param {DTAFileRecipe | DTAFileRecipe[]} recipes A `DTAFileRecipe` object, or an array of `DTAFileRecipe` objects.
   * @returns {SongsDTA} A new instantiated `SongsDTA` class.
   */
  static fromRecipes(recipes: DTAFileRecipe | DTAFileRecipe[]): SongsDTA {
    const allSongs: DTAFile[] = []

    if (Array.isArray(recipes)) {
      recipes.forEach((rec) => {
        if (isDTAFileRecipe(rec)) allSongs.push(createDTAFileFromRecipe('complete', rec))
        else throw new Error('SongsDTAError: Tried to parse recipe with complete information but all necessary values were not found.')
      })
    } else if (isDTAFileRecipe(recipes)) allSongs.push(createDTAFileFromRecipe('complete', recipes))
    else throw new Error('SongsDTAError: Tried to parse recipe with complete information but all necessary values were not found.')
    return new SongsDTA(allSongs)
  }

  /**
   * Creates an array of `DTAFileRecipe` objects from each songs entry of this class.
   * - - - -
   * @returns {DTAFileRecipe[]}
   */
  genRecipes(): DTAFileRecipe[] {
    return this.songs.map((song) => genDTARecipe(song))
  }

  /**
   * Fetches a specific song contents based on its song ID. If no song if found, it will returns as `undefined`.
   * - - - -
   * @param {string} id The song ID of the song you want to fetch.
   * @returns {DTAFile | undefined}
   */
  getSongByID(id: string): DTAFile | undefined {
    return this.songs.find((song) => String(song.id) === String(id))
  }

  /**
   * Patches non-numerical song IDs to numerical ones, using specific CRC32 hashing method.
   *
   * [_See the original C# function on **GitHub Gist**_](https://gist.github.com/InvoxiPlayGames/f0de3ad707b1d42055c53f0fd1428f7f), coded by [Emma (InvoxiPlayGames)](https://gist.github.com/InvoxiPlayGames).
   */
  patchSongIDs() {
    this.songs = this.songs.map((song) => ({ ...song, song_id: genNumericSongID(song.song_id) }))
  }

  /**
   * Updates a song contents based on its song ID.
   * - - - -
   * @param {string} id The unique shortname ID of the song you want to update.
   * @param {DTAUpdateOptionsForExtend} update An object with updates values to be applied on the `DTAFile` song entry.
   */
  update(id: string, update: DTAUpdateOptionsForExtend): void {
    this.songs = this.songs.map((song) => {
      if (String(song.id) === String(id)) {
        return updateDTA(song, update) as DTAFile
      }
      return song
    })
  }

  /**
   * Updates all songs with specific update values.
   * - - - -
   * @param {DTAUpdateOptionsForExtend} update An object with updates values to be applied on each `DTAFile` song entry.
   */
  updateAll(update: DTAUpdateOptionsForExtend): void {
    this.songs = this.songs.map((song) => updateDTA(song, update) as DTAFile)
  }

  /**
   * Sorts all songs entries using several sorting methods.
   * - - - -
   * @param {SongSortingTypes} sortBy The sorting method type.
   */
  sort(sortBy: SongSortingTypes): void {
    this.songs = sortDTA(this.songs, sortBy)
  }

  /**
   * Stringifies all songs from this class to `.dta` file contents.
   * - - - -
   * @param {SongStringifyOptions} options `OPTIONAL` An object with values that changes the behavior of the stringify process.
   * @returns {string}
   */
  stringify(options?: SongStringifyOptions): string {
    const opts = useDefaultOptions<SongStringifyOptions, true>(
      {
        format: 'rbn',
        guitarCores: false,
        placeCustomAttributes: true,
        placeRB3DXAttributes: true,
        sortBy: null,
        wiiMode: null,
        ignoreFakeSongs: true,
      },
      options
    )
    return stringifyDTA(this.songs, 'songs', opts)
  }
}

/**
 * A class that represents the contents of a `songs_updates.dta` type file.
 * - - - -
 */
export class SongUpdatesDTA {
  /** An array with object that represents the contents of a DTA updates song entry. */
  updates: PartialDTAFile[] = []

  /**
   * @param {SongUpdatesConstructorContentTypes} content A path string to a DTA updates file, decrypted content string from a DTA updates file, a `Buffer` from a DTA updates file, a `DTAUpdateOptions` object, or an array of `DTAUpdateOptions` objects.
   */
  constructor(content: SongUpdatesConstructorContentTypes) {
    let str = ''
    let isAnyObject = false
    if (typeof content === 'string') {
      if (Path.isPath(content)) {
        const path = new Path(content)
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
   * Fetches a specific song updates contents based on its song ID. If no song if found, it will returns as `undefined`.
   * - - - -
   * @param {string} id The song ID of the song updates you want to fetch.
   * @returns {PartialDTAFile | undefined}
   */
  getSongByID(id: string): PartialDTAFile | undefined {
    return this.updates.find((song) => String(song.id) === String(id))
  }

  /**
   * Updates a song updates contents based on its song ID.
   * - - - -
   * @param {string} id The song ID of the song you want to update.
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

export default SongsDTA
export type { DTAFile } from './core.js'
