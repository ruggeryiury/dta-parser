import path from 'path'
import fs from 'fs'
import { StringifyDataOptions, stringifyDTA } from '../../src/lib/dta/stringify'
import { DTAFile } from '../../src'
import { sortDTA } from '../../src/lib/dta/sort'
import { MySongsID, MySongsModule } from '../core/mySongs'
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
}

/**
 * Asynchronously generates a `gen.dta` file inside `backend/gen` folder with the provided `DTAFile` array.
 * - - - -
 * @param {MAGMAProject | MAGMAProject[] | MySongsModule} songs An array with parsed songs.
 * @param {SongsGeneratorOptions | DTAFileEncodingTypes} options `OPTIONAL` Customize options for the DTA file generator.
 * Can be either an object with options or a string with a file encoding type. Default is `utf8`.
 */
export const genSongsDTAFile = async (songs: MAGMAProject | MAGMAProject[] | MySongsModule, options?: SongsGeneratorOptions | DTAFileEncodingTypes): Promise<void> => {
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

    if (options) {
      // Do something
    }
  } else if ('id' in songs) {
    databaseSongs.push(songs)
  } else {
    // My Songs module
    Object.keys(songs).forEach((songname) => {
      const song = songs[songname as MySongsID]
      if (opts?.ignoreFakeSongs && song.fake === true) {
        // Do nothing
      } else databaseSongs.push(song)

      if (options) {
        // Do something
      }
    })
  }

  const songsContents = stringifyDTA(sortDTA(databaseSongs, 'song_id'), {
    type: opts.type || 'default',
    placeCustomAttributes: opts.placeCustomAttributes || true,
    guitarCores: opts.guitarCores || false,
    omitUnusedRanks: opts.omitUnusedRanks || false,
    useSpaces: opts.useSpaces || false,
    wiiMode: opts.wiiMode,
  })
  await fs.promises.writeFile(path.resolve('./backend/gen/songs.dta'), songsContents, opts.encoding || 'utf8')
}
