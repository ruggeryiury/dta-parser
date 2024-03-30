import { resolve } from 'path'
import { promises as fs, existsSync } from 'fs'
import { detect } from 'jschardet'
import { StringifyDataOptions, stringifyDTA } from '../../../src/lib/stringify'
import { DTAFile } from '../../../src'
import RuggyCustoms from '../@customs/ruggy'
import { sortDTA } from '../../../src/lib/sort'

export type GenFolderFilesTypes = 'songs.dta' | 'id.dta' | '*.c3_rbdeps_rbproj' | '*.png'

export type DTAFileEncodingTypes = 'utf-8' | 'latin1'

export interface SongsGeneratorOptions extends StringifyDataOptions {
  /**
   * Forces DTA file encoding.
   */
  forceEncoding?: DTAFileEncodingTypes
}

export interface SongListGeneratorOptions {
  /**
   * If `true`, non-used song IDs in-between all used song IDs will be placed with blank (`------`) names. Default is `true`.
   */
  completeSongID?: boolean
  /**
   * Controls the quantity of leading zeros delimiting a max number sequence count on the song's ID field.
   *
   * The default value is `4` (A song with ID as `1` will be appearing on the song list as `0001`).
   */
  songIDNumberCharsCount?: number
  /**
   * The text you want to display. Default is `title_artist` (The song's title, then the artist.)
   *
   * Valid values are:
   *
   * - `'title'`: The song's title
   * - `'artist'`: The song's artist
   * - `'title_artist'`: The song's title, then the artist.
   * - `'artist_title'`: The song's artist, then the title.
   * - `'internal_name'`: The song's internal name.
   */
  text?: 'title' | 'artist' | 'title_artist' | 'artist_title' | 'internal_name'
}

/**
 * Module to handle generation and cleaning of files and directories inside the `backend/gen` folder.
 */
const GenFolderModule = {
  /**
   * Path to the `backend/gen` folder.
   */
  path: resolve(process.cwd(), 'backend/gen'),
  /**
   * Cleans the `backend/gen` folder.
   * - - - -
   * @param {GenFolderFilesTypes[]} args The type of the files you want to clean on the `backend/gen` folder.
   */
  cleanFolder: async (...args: GenFolderFilesTypes[]): Promise<void> => {
    const genFolderPath = GenFolderModule.path
    const genFolderContents = (await fs.readdir(genFolderPath)).map((fn) => resolve(genFolderPath, fn))
    for (const arg of args) {
      if (arg === 'songs.dta' && existsSync(resolve(genFolderPath, arg))) {
        try {
          await fs.unlink(resolve(genFolderPath, arg))
        } catch (e) {
          // Do nothing
        }
      } else if (arg === 'id.dta' && existsSync(resolve(genFolderPath, arg))) {
        try {
          await fs.unlink(resolve(genFolderPath, arg))
        } catch (e) {
          // Do nothing
        }
      } else if (arg === '*.c3_rbdeps_rbproj') {
        for (const filename of genFolderContents) {
          if (filename.endsWith('.c3') || filename.endsWith('.rbdeps') || filename.endsWith('.rbproj') || filename.endsWith('.rbdeps.new')) {
            try {
              await fs.unlink(filename)
            } catch (e) {
              // Do nothing
            }
          }
        }
      } else if (arg === '*.png') {
        for (const filename of genFolderContents) {
          if (filename.endsWith('.png')) {
            try {
              await fs.unlink(filename)
            } catch (e) {
              // Do nothing
            }
          }
        }
      }
    }
  },
  /**
   * Property with functions to generate many kind of files, directories, and structures inside the `backend/gen` folder.
   */
  gen: {
    /**
     * Asynchronously generates a `.dta` file inside the `backend/gen` folder.
     * - - - -
     * @param {DTAFile | DTAFile[]} songs A parsed song or an array of parsed songs to generate the DTA file from.
     * @param {string | null | undefined} filename `OPTIONAL` The name of the file you want to generate (with or without the `.dta` extension on it).
     *
     * If no filename is provided, or the filename is `null`, it will be generated as `songs.dta`
     * @param {SongsGeneratorOptions | undefined} options `OPTIONAL` Options to customize the generation process.
     */
    dtaFile: async (songs: DTAFile | DTAFile[], filename?: string | null, options?: SongsGeneratorOptions): Promise<void> => {
      const allSongs: DTAFile[] = []
      const newFilename = filename && filename.endsWith('.dta') ? filename.slice(0, -4) : filename && !filename.endsWith('.dta') ? filename : 'songs'
      const newFilePath = `${resolve(GenFolderModule.path, newFilename)}.dta`

      if (Array.isArray(songs)) {
        songs.forEach((song) => {
          if (options?.ignoreFakeSongs && song.fake) {
            // Don't add to songs...
          } else allSongs.push(song)
        })
      } else {
        allSongs.push(songs)
      }

      const newDTAContents = stringifyDTA(allSongs, options)
      const { encoding: enc } = detect(newDTAContents)
      const encoding: DTAFileEncodingTypes = options?.forceEncoding ? options.forceEncoding : enc === 'windows-1251' ? 'latin1' : enc === 'UTF-8' ? 'utf-8' : 'utf-8'
      await fs.writeFile(newFilePath, newDTAContents, encoding)
    },
    /**
     * Asynchronously generates a text file with a `.dta` extension, with a list with the provided songs inside the `backend/gen` folder.
     *
     * This function was meant to be used with songs from one author only, being useful for your author songs ID management.
     * - - - -
     * @param {DTAFile[]} songs A parsed song or an array of parsed songs to generate the song list file from.
     * @param {string | null | undefined} filename `OPTIONAL `The name of the file you want to generate (with or without the `.dta` extension on it).
     *
     * If no filename is provided, or the filename is `null`, it will be generated as `songlist.dta`.
     * @param {SongListGeneratorOptions | undefined} options `OPTIONAL` Options to customize the generation process.
     * @throws {Error} when using the `song_id` shape providing an array of customs with different authors.
     */
    authorSongList: async (songs: DTAFile[], filename?: string | null, options?: SongListGeneratorOptions): Promise<void> => {
      const authors = [...new Set(songs.filter((song) => typeof song.song_id === 'number').map((song) => Number(song.song_id.toString().slice(0, 6))))]
      if (authors.length > 1) throw new Error('The provided songs has more than one author. This function was meant to be used with songs from one author only.')
      songs = sortDTA(songs, 'Song ID')

      if (!options) options = {}
      if (options?.completeSongID === undefined) options.completeSongID = true
      if (options?.songIDNumberCharsCount === undefined) options.songIDNumberCharsCount = 4
      if (options?.text === undefined) options.text = 'title_artist'

      const { text, songIDNumberCharsCount, completeSongID } = options
      const genFilename = filename && filename.endsWith('.dta') ? filename.slice(0, -4) : filename && !filename.endsWith('.dta') ? filename : 'songlist'

      let songIndex = 1

      const contents = await songs.reduce(async (prev, song) => {
        let content = await prev
        const id = Number(song.song_id.toString().slice(-4))
        while (songIndex < id) {
          if (completeSongID) content += `${songIndex.toString().padStart(songIDNumberCharsCount, '0')}\t------\n`
          songIndex++
        }
        content += `${id.toString().padStart(songIDNumberCharsCount, '0')}\t${
          text === 'artist'
            ? `${song.artist}`
            : text === 'artist_title'
            ? `${song.artist} - ${song.name}`
            : text === 'internal_name'
            ? `${song.songname}`
            : text === 'title'
            ? `${song.name}`
            : `${song.name} - ${song.artist}`
        }\n`
        songIndex++
        return content
      }, Promise.resolve(''))

      await fs.writeFile(resolve(GenFolderModule.path, `${genFilename}.dta`), contents, 'utf-8')
    },
    /**
     * Creates a testing CON file folder structure on the `backend/gen/confile` folder.
     *
     * This function can only create the `songs.dta` file and the whole folder
     * structure from a `CON` file, but all of the other files (`*.mogg`, `*.mid`, `*_keep.png_xbox`)
     * must be placed manually or on a folder path specified as second argument (`resourcesPath`) to be copied from.
     *
     * The function will copy a blank `.milo` file to all songs.
     * - - - -
     * @param {DTAFile | DTAFile[]} dta A parsed song, or an array of parsed songs that will be generated for testing.
     * @param {string | undefined} resourcesPath `OPTIONAL` A folder path with all `*.mid`, `*.mogg` and `*_keep.png_xbox` to be copied from.
     */
    testingConfileStructure: async (dta: DTAFile | DTAFile[], resourcesPath?: string): Promise<void> => {
      const blankMiloPath = resolve(process.cwd(), 'backend/lib/backend-gen-folder/bin/blank.milo_xbox')
      const genPath = resolve(process.cwd(), 'backend/gen')
      const buildPath = resolve(genPath, 'confile')

      if (existsSync(buildPath)) {
        try {
          await fs.rm(buildPath, { recursive: true, force: true })
        } catch (e) {
          // Do nothing
        }
      }

      try {
        await fs.mkdir(buildPath)
      } catch (e) {
        // Do nothing
      }

      if (Array.isArray(dta)) {
        const songsPath = resolve(buildPath, 'songs')
        const dtaPath = resolve(songsPath, 'songs.dta')

        try {
          await fs.writeFile(dtaPath, stringifyDTA(dta, { gameOriginAsRB3DLC: true, guitarCores: true, placeCustomAttributes: true, placeRB3DXAttributes: true, type: 'rb3_dlc' }), 'utf-8')
          await fs.mkdir(songsPath)
        } catch (e) {
          // Do nothing
        }
        for (const song of dta) {
          const { songname } = song
          const songPath = resolve(songsPath, songname)
          const songGenPath = resolve(songPath, 'gen')
          const miloPath = resolve(songGenPath, `${songname}.milo_xbox`)
          const midFilePath = resourcesPath && existsSync(resolve(resourcesPath, `${songname}.mid`)) ? resolve(resourcesPath, `${songname}.mid`) : undefined
          const moggFilePath = resourcesPath && existsSync(resolve(resourcesPath, `${songname}.mogg`)) ? resolve(resourcesPath, `${songname}.mogg`) : undefined
          const PngFilePath = resourcesPath && existsSync(resolve(resourcesPath, `${songname}_keep.png_xbox`)) ? resolve(resourcesPath, `${songname}_keep.png_xbox`) : undefined

          try {
            await fs.mkdir(songPath)
            await fs.mkdir(songGenPath)
            await fs.copyFile(blankMiloPath, miloPath)
            if (resourcesPath && existsSync(resolve(resourcesPath))) {
              if (midFilePath) await fs.copyFile(midFilePath, resolve(songPath, `${songname}.mid`))
              if (moggFilePath) await fs.copyFile(moggFilePath, resolve(songPath, `${songname}.mogg`))
              if (PngFilePath) await fs.copyFile(PngFilePath, resolve(songGenPath, `${songname}_keep.png_xbox`))
            }
          } catch (e) {
            // Do nothing
          }
        }
      } else {
        const { songname } = dta
        const songsPath = resolve(buildPath, 'songs')
        const dtaPath = resolve(songsPath, 'songs.dta')
        const songPath = resolve(songsPath, songname)
        const songGenPath = resolve(songPath, 'gen')
        const miloPath = resolve(songGenPath, `${songname}.milo_xbox`)
        const midFilePath = resourcesPath && existsSync(resolve(resourcesPath, `${songname}.mid`)) ? resolve(resourcesPath, `${songname}.mid`) : undefined
        const moggFilePath = resourcesPath && existsSync(resolve(resourcesPath, `${songname}.mogg`)) ? resolve(resourcesPath, `${songname}.mogg`) : undefined
        const PngFilePath = resourcesPath && existsSync(resolve(resourcesPath, `${songname}_keep.png_xbox`)) ? resolve(resourcesPath, `${songname}_keep.png_xbox`) : undefined

        try {
          await fs.mkdir(songsPath)
          await fs.mkdir(songPath)
          await fs.mkdir(songGenPath)
          await fs.writeFile(dtaPath, stringifyDTA(dta, { gameOriginAsRB3DLC: true, guitarCores: true, placeCustomAttributes: true, placeRB3DXAttributes: true, type: 'rb3_dlc' }), 'utf-8')
          await fs.copyFile(blankMiloPath, miloPath)
          if (resourcesPath && existsSync(resolve(resourcesPath))) {
            if (midFilePath) await fs.copyFile(midFilePath, resolve(songPath, `${songname}.mid`))
            if (moggFilePath) await fs.copyFile(moggFilePath, resolve(songPath, `${songname}.mogg`))
            if (PngFilePath) await fs.copyFile(PngFilePath, resolve(songGenPath, `${songname}_keep.png_xbox`))
          }
        } catch (e) {
          // Do nothing
        }
      }
    },
  },
}

export default GenFolderModule
