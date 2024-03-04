import { promises as fs, existsSync } from 'fs'
import { readParseDTAFile } from '../dta/readFile'
import { C3LibraryPatch as patch } from '../../database/updates/C3LibraryPatch'
import { stringifySongUpdates } from '../../../src/lib/songUpdates'

export const C3LibraryPatch = {
  /**
   * Paths related to the `c3-library-patch` project.
   */
  paths: {
    /**
     * Path to `updates` folder.
     */
    updatesFolder: `C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\c3-library-patch\\updates`,
    /**
     * Path to the `c3-library-patch.dta` file.
     */
    patchDTA: `C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\c3-library-patch\\c3_library_patch.dta`,
    /**
     * Path to the extracted `*.dta` files.
     */
    dtaFiles: `C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\c3-library-patch\\confiles\\dta_files`,
    /**
     * Path to the extracted `*_keep.png_xbox` and converted PNG files.
     */
    pngFiles: `C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\c3-library-patch\\confiles\\png_xbox_files`,
    /**
     * Path to the extracted `*.milo_xbox` files.
     */
    miloFiles: `C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\c3-library-patch\\confiles\\milo_xbox_files`,
  },
  /**
   * Returns all songs which contents were extracted on the `confiles` directory.
   * - - - -
   * @returns {Promise<SongCollection>} All songs which contents were extracted on the `confiles` directory.
   */
  songs: async () => await readParseDTAFile('C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\c3-library-patch\\confiles\\dta_files', { update: patch }),

  /**
   * Generates a `c3_library_patch.dta` file on the `c3-library-patch` project folder and here, on `backend/gen` folder.
   */
  genPatchDTAFile: async () => {
    await fs.writeFile(C3LibraryPatch.paths.patchDTA, stringifySongUpdates(patch, { inline: true }), 'utf-8')
    await fs.writeFile(`${process.cwd()}/backend/gen/c3_library_patch.dta`, stringifySongUpdates(patch, { inline: true }), 'utf-8')
  },
  /**
   * Automatically moves extracted MILO files to the `updates` folder structure if the `alternate_path` value is `true`.
   */
  moveMiloFiles: async () => {
    const { miloFiles: miloFilesPath, updatesFolder } = C3LibraryPatch.paths

    const songs = await C3LibraryPatch.songs()
    songs.collection.forEach(async (song) => {
      const { songname, alternate_path } = song.value
      if (alternate_path) {
        const songUpdateFolder = `${updatesFolder}/${songname}`
        const songMiloGenFolder = `${songUpdateFolder}/gen`
        const songMilo = `${miloFilesPath}/${songname}.milo_xbox`
        const songMiloLocation = `${songUpdateFolder}/gen/${songname}.milo_xbox`

        if (!existsSync(songUpdateFolder)) {
          try {
            await fs.mkdir(songUpdateFolder)
          } catch (e) {
            // Do nothing
          }
        }

        if (!existsSync(songMiloGenFolder)) {
          try {
            await fs.mkdir(songMiloGenFolder)
          } catch (e) {
            // Do nothing
          }
        }

        try {
          await fs.rename(songMilo, songMiloLocation)
        } catch (e) {
          // Do nothing
        }
      }
    })
  },
  /**
   * Automatically moves fetched artworks from the `backend/gen` folder to the `updates` folder structure if the `alternate_path` value is `true`.
   */
  moveAlbumArts: async () => {
    const { updatesFolder } = C3LibraryPatch.paths

    const songs = await C3LibraryPatch.songs()
    songs.collection.forEach(async (song) => {
      const { songname, alternate_path } = song.value
      if (alternate_path) {
        const songUpdateFolder = `${updatesFolder}/${songname}`
        const fetchedArtwork = `C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\dta-parser\\backend\\gen\\${songname}_keep.png`
        const newArtorkLocation = `${songUpdateFolder}/${songname}_keep.png`

        if (!existsSync(songUpdateFolder)) {
          try {
            await fs.mkdir(songUpdateFolder)
          } catch (e) {
            // Do nothing
          }
        }

        if (existsSync(fetchedArtwork)) {
          try {
            await fs.rename(fetchedArtwork, newArtorkLocation)
          } catch (e) {
            // Do nothing
          }
        }
      }
    })
  },
}
