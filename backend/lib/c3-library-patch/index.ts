import { promises as fs, existsSync } from 'fs'
import { readParseDTAFile } from '../dta/readFile'
import { C3LibraryPatch, C3LibraryPatch as patch } from '../../database/updates/C3LibraryPatch'
import { SongCollection } from '../../../src'
import { stringifySongUpdates } from '../../../src/lib/songUpdates'

export interface C3LibraryPatchModuleObject {
  /**
   * Paths related to the `c3-library-patch` project.
   */
  paths: {
    /**
     * Path to `updates` folder.
     */
    readonly updatesFolder: string
    /**
     * Path to the `c3-library-patch.dta` file.
     */
    readonly patchDTA: string
    /**
     * Path to the extracted `*.dta` files.
     */
    readonly dtaFiles: string
    /**
     * Path to the extracted `*_keep.png_xbox` and converted PNG files.
     */
    readonly pngFiles: string
    /**
     * Path to the extracted `*.milo_xbox` files.
     */
    readonly miloFiles: string
  }
  /**
   * Returns all songs which contents were extracted on the `confiles` directory.
   * - - - -
   * @returns {Promise<SongCollection>} All songs which contents were extracted on the `confiles` directory.
   */
  songs: () => Promise<SongCollection>
  /**
   * Generates a `c3_library_patch.dta` file on the `c3-library-patch` project folder.
   * @param {boolean | undefined} genHere if `true`, the DTA patch file will also be generated on the `backend/gen` folder on the `dta-parser` project. Default is `false`.
   */
  genPatchDTAFile: (genHere?: boolean) => Promise<void>
  /**
   * Automatically moves extracted MILO files to the `updates` folder structure if the `alternate_path` value is `true`.
   */
  moveMiloFiles: () => Promise<void>
  /**
   * Automatically moves fetched artworks from the `backend/gen` folder to the `updates` folder structure if the `alternate_path` value is `true`.
   */
  moveAlbumArts: () => Promise<void>
}

export const C3LibraryPatchModule: C3LibraryPatchModuleObject = {
  paths: {
    updatesFolder: `C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\c3-library-patch\\updates`,
    patchDTA: `C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\c3-library-patch\\c3_library_patch.dta`,
    dtaFiles: `C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\c3-library-patch\\confiles\\dta_files`,
    pngFiles: `C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\c3-library-patch\\confiles\\png_xbox_files`,
    miloFiles: `C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\c3-library-patch\\confiles\\milo_xbox_files`,
  },
  songs: async () => await readParseDTAFile('C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\c3-library-patch\\confiles\\dta_files', { update: patch }),
  genPatchDTAFile: async (genHere) => {
    await fs.writeFile(C3LibraryPatchModule.paths.patchDTA, stringifySongUpdates(C3LibraryPatch, { inline: true }), 'utf-8')
    if (genHere) {
      await fs.writeFile(`${process.cwd()}/backend/gen/c3_library_patch.dta`, stringifySongUpdates(C3LibraryPatch, { inline: true }), 'utf-8')
    }
  },
  moveMiloFiles: async () => {
    const { miloFiles: miloFilesPath, updatesFolder } = C3LibraryPatchModule.paths

    const songs = await C3LibraryPatchModule.songs()
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
  moveAlbumArts: async () => {
    const { updatesFolder } = C3LibraryPatchModule.paths

    const songs = await C3LibraryPatchModule.songs()
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
