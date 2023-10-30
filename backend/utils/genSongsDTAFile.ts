import path from 'path'
import fs from 'fs'
import { DTAArray, DTAFile, DTAFileContents } from '../../src'
import { JSONtoDTA } from '../../src/utils/JSONtoDTA'

interface SongsGeneratorOptions {
  /**
   * Default is `false`.
   */
  createFakeSongsUpgrades?: boolean
}

/**
 * Asynchronously generates a `gen.dta` file inside `backend/gen` folder.
 * - - - -
 * @param {DTAFile[] | DTAFileContents[]} songs An array with parsed songs.
 * @param {SongsGeneratorOptions} options `OPTIONAL` Customize options for the DTA file generator.
 */
export const genSongsDTAFile = async (songs: DTAFile[] | DTAFileContents[], options?: SongsGeneratorOptions): Promise<void> => {
  const databaseSongs: DTAFile[] = []
  let ids = ''
  let idIndex = 1

  songs.forEach((song) => {
    if ('content' in song) {
      databaseSongs.push(song)
    } else {
      databaseSongs.push(JSONtoDTA(song)[0])
    }
  })

  databaseSongs.forEach((song) => {
    const songID = Number(song.content.song_id.toString().slice(-3))
    const songIDPadding = Number(song.content.song_id.toString().slice(-3)).toString().padStart(3, '0')
    const id = song.content.id.slice(4)
    while (idIndex !== songID) {
      ids += `${idIndex.toString().padStart(3, '0')} ----\n`
      idIndex++
    }
    ids += `${songIDPadding} ${id}\n`
    idIndex++
  })

  if (options) {
    // Do something
  }

  const songsContents = DTAArray.stringify(DTAArray.sort(databaseSongs, 'song_id'), {
    type: 'rb3_dlc',
    placeCustomAttributes: true,
    guitarCores: true,
  })
  await fs.promises.writeFile(path.resolve('./backend/gen/songs.dta'), songsContents, 'utf-8')
  await fs.promises.writeFile(path.resolve('./backend/gen/id.dta'), ids, 'utf-8')
}
