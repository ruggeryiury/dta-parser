import Path from 'path-js'
import { createDTAFileFromRecipe, depackDTA, genDTARecipe, parseDTA, sortDTA, stringifyDTA, updateDTA, type DTAFile, type DTAFileRecipe, type DTARecord, type DTAStringifyOptions, type DTAUpdateOptions, type DTAUpdateOptionsForExtend, type PartialDTAFile, type PartialDTARecord, type SongSortingTypes } from './core.js'
import { detectBufferEncoding, isDTAFile, isDTAFileRecipe, useDefaultOptions } from './lib.js'

export type SongConstructorContentTypes = string | Buffer | DTAFile | DTAFile[]
export type SongUpdatesConstructorContentTypes = string | Buffer | DTAUpdateOptions | DTAUpdateOptions[]
export type SongStringifyOptions = Pick<DTAStringifyOptions, 'format' | 'guitarCores' | 'placeCustomAttributes' | 'placeRB3DXAttributes' | 'sortBy' | 'wiiMode' | 'ignoreFakeSongs'>
export type SongUpdatesStringifyOptions = Pick<DTAStringifyOptions, 'allSongsInline' | 'sortBy'>
class SongsDTA {
  entries: DTAFile[] = []

  constructor(content: SongConstructorContentTypes) {
    let str = ''
    let isAnyObject = false
    if (typeof content === 'string') {
      if (Path.isPath(content)) {
        const path = new Path(content)
        const buf = path.readFileSync()
        const enc = detectBufferEncoding(buf)
        console.log(enc)
        str = buf.toString(enc)
      } else {
        str = content
      }
    } else if (Array.isArray(content)) {
      isAnyObject = true
      for (const song of content) {
        if (isDTAFile(song)) this.entries.push(song)
        else throw new Error('SongsDTAError: Tried to parse songs with complete information but all necessary values were not found. Try to use "SongsUpdatesDTA" class instead.')
      }
    } else if (Buffer.isBuffer(content)) {
      const enc = detectBufferEncoding(content)
      str = content.toString(enc)
    } else if (isDTAFile(content)) {
      isAnyObject = true
      this.entries.push(content)
    } else throw new Error('SongsDTAError: Tried to parse songs with complete information but provided object does not match any of the available file types.')

    if (isAnyObject && !str) return

    const depackedSongs = depackDTA(str)
    this.entries = depackedSongs.map((songContent) => Object.fromEntries(parseDTA(songContent, { format: 'complete', omitUnusedValues: true, registerCores: false })) as DTARecord as DTAFile)
  }

  static fromRecipes(recipes: DTAFileRecipe | DTAFileRecipe[]) {
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

  genRecipes(): DTAFileRecipe[] {
    return this.entries.map((song) => genDTARecipe(song))
  }

  getSongByID(id: string): DTAFile | undefined {
    return this.entries.find((song) => song.id === id)
  }

  update(id: string, update: DTAUpdateOptionsForExtend): void {
    this.entries = this.entries.map((song) => {
      if (song.id === id) {
        return updateDTA(song, update) as DTAFile
      }
      return song
    })
  }

  updateAll(update: DTAUpdateOptionsForExtend): void {
    this.entries = this.entries.map((song) => updateDTA(song, update) as DTAFile)
  }

  sort(sortBy: SongSortingTypes): void {
    this.entries = sortDTA(this.entries, sortBy)
  }

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
    return stringifyDTA(this.entries, 'songs', opts)
  }
}

export class SongUpdatesDTA {
  entries: PartialDTAFile[] = []
  constructor(content: SongUpdatesConstructorContentTypes) {
    let str = ''
    let isAnyObject = false
    if (typeof content === 'string') {
      if (Path.isPath(content)) {
        const path = new Path(content)
        const buf = path.readFileSync()
        const enc = detectBufferEncoding(buf)
        console.log(enc)
        str = buf.toString(enc)
      } else {
        str = content
      }
    } else if (Buffer.isBuffer(content)) {
      const enc = detectBufferEncoding(content)
      str = content.toString(enc)
      isAnyObject = true
    } else if (Array.isArray(content)) content.forEach((c) => this.entries.push(updateDTA({} as PartialDTAFile, c)))
    else this.entries.push(updateDTA({} as PartialDTAFile, content))

    if (isAnyObject && !str) return

    const depackedSongs = depackDTA(str)
    this.entries = depackedSongs.map((songContent) => Object.fromEntries(parseDTA(songContent, { format: 'partial', omitUnusedValues: false, registerCores: true })) as PartialDTARecord as PartialDTAFile)
  }

  getSongByID(id: string): PartialDTAFile | undefined {
    return this.entries.find((song) => song.id === id)
  }

  update(id: string, update: DTAUpdateOptionsForExtend): void {
    this.entries = this.entries.map((song) => {
      if (song.id === id) {
        return updateDTA(song, update)
      }
      return song
    })
  }

  sort(sortBy: SongSortingTypes): void {
    this.entries = sortDTA(this.entries, sortBy)
  }

  stringify(options?: SongStringifyOptions): string {
    const opts = useDefaultOptions<SongUpdatesStringifyOptions, true>(
      {
        allSongsInline: false,
        sortBy: null,
      },
      options
    )
    return stringifyDTA(this.entries, 'songs_updates', { ...opts, format: 'rb3_dlc', placeRB3DXAttributes: true, ignoreFakeSongs: false })
  }
}

export default SongsDTA
export type { DTAFile } from './core.js'
