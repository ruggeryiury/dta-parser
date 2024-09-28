import Path from 'path-js'
import { type DTAFile, depackDTA, parseDTA, type DTARecord, type DTAFileRecipe, createDTAFileFromRecipe, genDTARecipe, type DTAUpdateOptionsForExtend, updateDTA, type SongSortingTypes, sortDTA, stringifyDTA, type DTAStringifyOptions } from '../core.js'
import { detectBufferEncoding, isDTAFile, isURL, isDTAFileRecipe, genNumericSongID, containsLatin1SpecificChars, useDefaultOptions } from '../lib.js'

export type SongConstructorContentTypes = string | Buffer | DTAFile | DTAFile[] | Path
export type SongStringifyOptions = Pick<DTAStringifyOptions, 'format' | 'guitarCores' | 'placeCustomAttributes' | 'placeRB3DXAttributes' | 'sortBy' | 'wiiMode' | 'ignoreFakeSongs'>

/**
 * A class that represents the contents of a `songs.dta` file.
 * - - - -
 */
export class SongsDTA {
  /** An array with object that represents the contents of a DTA song entry. */
  songs: DTAFile[] = []

  // #region Constructor
  /**
   * @param {SongConstructorContentTypes} content A path to a `songs.dta` file (as `string` or an instantiated [`Path`](https://github.com/ruggeryiury/path-js) class), the contents of a DTA file (as `string`), a `Buffer` object of a DTA file, a parsed `DTAFile` object, or an array of parsed `DTAFile` objects.
   */
  constructor(content: SongConstructorContentTypes) {
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

  // #region Static Methods
  /**
   * Asynchronously fetches a `songs.dta` file from an URL.
   * - - - -
   * @param {string} url The URL of the `.dta` file.
   * @returns {Promise<SongsDTA>} A new instantiated `SongsDTA` class.
   */
  static async fromURL(url: string) {
    if (!isURL(url)) throw new Error(`SongsDTAError: Provided URL "${url}" is not a valid URL.`)

    try {
      const response = await fetch(url)

      if (!response.ok) throw new Error(`SongsDTAError: Provided URL "${url}" is not a valid URL.`)

      const data = await response.arrayBuffer()
      return new SongsDTA(Buffer.from(data))
    } catch (err) {
      console.error(err)
      throw err
    }
  }

  /**
   * Returns a new `SongsDTA` instance from complete songs' recipes.
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
   * Generates a numberic song ID based on any non-numeric string. If the given value is
   * already a number, it will simply return the provided ID.
   *
   * [_See the original C# function on **GitHub Gist**_](https://gist.github.com/InvoxiPlayGames/f0de3ad707b1d42055c53f0fd1428f7f), coded by [Emma (InvoxiPlayGames)](https://gist.github.com/InvoxiPlayGames).
   * - - - -
   * @param {string | number} id Any song ID as `string` or `number`.
   * @returns {number}
   */
  static genNumericalSongID(id: string | number): number {
    return genNumericSongID(id)
  }

  // #region Methods
  /**
   * Creates an array of `DTAFileRecipe` objects from each songs entry of this class.
   * - - - -
   * @returns {DTAFileRecipe[]}
   */
  genRecipes(): DTAFileRecipe[] {
    return this.songs.map((song) => genDTARecipe(song))
  }

  /**
   * Returns a specific song contents based on its song ID (shortname). If no song if found, it will returns as `undefined`.
   * - - - -
   * @param {string} id The unique shortname ID of the song you want to fetch.
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
  patchSongIDs(): void {
    this.songs = this.songs.map((song) => ({ ...song, song_id: genNumericSongID(song.song_id) }))
  }

  /**
   * Patches the encoding values of each song.
   */
  patchEncodings(): void {
    this.songs = this.songs.map((song) => {
      const { name, artist, album_name, pack_name, author, loading_phrase } = song
      let proof = false

      if (containsLatin1SpecificChars(name)) proof = true
      if (containsLatin1SpecificChars(artist)) proof = true
      if (album_name && containsLatin1SpecificChars(album_name)) proof = true
      if (pack_name && containsLatin1SpecificChars(pack_name)) proof = true
      if (author && containsLatin1SpecificChars(author)) proof = true
      if (loading_phrase && containsLatin1SpecificChars(loading_phrase)) proof = true

      return {
        ...song,
        encoding: proof ? 'utf8' : 'latin1',
      }
    })
  }

  /**
   * Updates a song contents based on its song ID (shortname).
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
   * Updates all songs with provided update values.
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
