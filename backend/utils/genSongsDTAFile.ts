import path from 'path'
import fs from 'fs'
import { MAGMAProject } from '../@types/magma'
import { MySongsModule } from '../core/mySongs'
import { StringifyDataOptions, stringifyDTA } from '../../src/lib/stringify'
import { DTAFileContents } from '../../src'
import { sortDTA } from '../../src/lib/sort'

export type EncodingTypes = 'utf8' | 'latin1'

export interface SongsGeneratorOptions {
  /**
   * Default is `false`.
   */
  createFakeSongsUpgrades?: true
  /**
   * Fake songs will be ignored from the generated DTA file.
   *
   * Default is `true`.
   */
  dontIgnoreFakeSongs?: true
  /**
   * Forces DTA file encoding.
   *
   * Default is `utf8`.
   */
  encoding?: EncodingTypes
  /**
   * Default is `default`.
   */
  type?: StringifyDataOptions['type']
}

/**
 * Asynchronously generates a `gen.dta` file inside `backend/gen` folder.
 * - - - -
 * @param {MAGMAProject[]} songs An array with parsed songs.
 * @param {SongsGeneratorOptions} options `OPTIONAL` Customize options for the DTA file generator.
 */
export const genSongsDTAFile = async (songs: MAGMAProject | MAGMAProject[] | MySongsModule, options?: SongsGeneratorOptions | EncodingTypes): Promise<void> => {
  const databaseSongs: DTAFileContents[] = []

  let opts: SongsGeneratorOptions = {}

  if (typeof options === 'string') opts.encoding = options
  else opts = options ? options : {}

  if (Array.isArray(songs)) {
    songs.forEach((song) => {
      if (song.fake === true && !opts?.dontIgnoreFakeSongs) {
        // Do nothing
      } else databaseSongs.push(song)
    })

    if (options) {
      // Do something
    }
  } else if ('id' in songs) {
    databaseSongs.push(songs)
  } else {
    Object.keys(songs).forEach((songname) => {
      const song = songs[songname as keyof MySongsModule]
      if (song.fake === true && !opts?.dontIgnoreFakeSongs) {
        // Do nothing
      } else databaseSongs.push(song)

      if (options) {
        // Do something
      }
    })
  }

  const songsContents = stringifyDTA(sortDTA(databaseSongs, 'song_id'), {
    type: opts.type ? opts.type : 'default',
    placeCustomAttributes: true,
    guitarCores: true,
  })
  await fs.promises.writeFile(path.resolve('./backend/gen/songs.dta'), songsContents, opts.encoding || 'utf8')
}
