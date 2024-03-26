import path from 'path'
import fs from 'fs'
import { StringifyDataOptions, stringifyDTA } from '../../src/lib/stringify'
import { DTAFile } from '../../src'
import { SongSortingTypes, sortDTA } from '../../src/lib/sort'
import { MySongsID, MySongsModule } from '../core/database'
import { MAGMAProject } from './magma'

export type DTAFileEncodingTypes = 'utf8' | 'latin1' | 'ascii'

export interface SongsGeneratorOptions extends StringifyDataOptions {
  /**
   * Forces DTA file encoding.
   *
   * Default is `utf8`.
   */
  encoding?: DTAFileEncodingTypes
  /**
   * If `true`, fake songs will be ignored from the generated DTA file.
   *
   * Default is `false`.
   */
  ignoreFakeSongs?: boolean
  /**
   * Changes the sorting of the songs.
   */
  sortBy?: SongSortingTypes
}

/**
 * Asynchronously generates a `gen.dta` file inside `backend/gen` folder.
 * - - - -
 * @param {MAGMAProject | MAGMAProject[] | MySongsModule | string} songs An individual song, an array with parsed songs, a database song module, or direct file contents as string.
 * @param {SongsGeneratorOptions | DTAFileEncodingTypes} options `OPTIONAL` Customize options for the DTA file generator.
 * Can be either an object with options or a string with a file encoding type. Default is `utf8`.
 */
export const genSongsDTAFile = async (songs: MAGMAProject | MAGMAProject[] | MySongsModule | string, options?: SongsGeneratorOptions | DTAFileEncodingTypes): Promise<void> => {
  const databaseSongs: DTAFile[] = []

  let opts: SongsGeneratorOptions = {}

  if (typeof options === 'string') opts.encoding = options
  else opts = options || {}

  if (Array.isArray(songs)) {
    songs.forEach((song) => {
      if (opts?.ignoreFakeSongs && song.fake === true) {
        // Do nothing
      } else databaseSongs.push(song)
    })
  } else if (typeof songs === 'string') {
    await fs.promises.writeFile(path.resolve('./backend/gen/songs.dta'), songs, opts.encoding)
    return
  } else if ('id' in songs) {
    databaseSongs.push(songs)
  } else {
    // My Songs module
    Object.keys(songs).forEach((songname) => {
      const song = songs[songname as MySongsID]
      if (opts?.ignoreFakeSongs && song.fake === true) {
        // Do nothing
      } else databaseSongs.push(song)
    })
  }

  const songsContents = stringifyDTA(sortDTA(databaseSongs, opts.sortBy !== undefined ? opts.sortBy : 'Song ID'), {
    type: opts.type,
    placeCustomAttributes: opts.placeCustomAttributes,
    guitarCores: opts.guitarCores,
    omitUnusedRanks: opts.omitUnusedRanks,
    useSpaces: opts.useSpaces,
    wiiMode: opts.wiiMode,
    gameOriginAsRB3DLC: opts.gameOriginAsRB3DLC
  })
  await fs.promises.writeFile(path.resolve('./backend/gen/songs.dta'), songsContents, opts.encoding)
}
