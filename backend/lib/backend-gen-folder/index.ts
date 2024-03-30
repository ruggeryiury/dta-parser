import { resolve } from 'path'
import { promises as fs, existsSync } from 'fs'
import { detect } from 'jschardet'
import { StringifyDataOptions, stringifyDTA } from '../../../src/lib/stringify'
import { DTAFile } from '../../../src'
import { sortDTA } from '../../../src/lib/sort'
import { DTAFileExpanded } from '../../../src/lib/dta'
import { genTabs as t } from '../../../src/utils/stringProcessors'
import { rankCalculator as r } from '../../../src/utils/rankCalculations'
import { SongSubGenre } from '../../../src/lib/locale'
import { panVolInfoGen } from '../../../src/utils/pansAndVols'

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

export type AutogenValues =
  | 'Default'
  | 'AggressiveMetal'
  | 'ArenaRock'
  | 'DarkHeavyRock'
  | 'DustyVintage'
  | 'EdgyProgRock'
  | 'FeelGoodPopRock'
  | 'GaragePunkRock'
  | 'PsychJamRock'
  | 'SlowJam'
  | 'SynthPop'

export type DoubleKickOptions = {
  /**
   * If `true`, the kick drum stems path on MAGMA will use `kick2x.wav` rather than `kick.wav`,
   * and customs with a single stereo stem for drums will use `drums2x.wav` rather than `drums.wav`.
   *
   * This is useful if you managed to have a mix excluding the double kicks.
   */
  kickwav?: boolean
}

export interface MAGMAFileValues {
  /**
   * Sets the autogen option when generating the song's MAGMA file. Default is `ArenaRock` (Arena Rock template).
   */
  autogenTheme: AutogenValues
  /**
   * The date when the custom was originally released.
   */
  releasedAt: string
  /**
   * The date when the custom was updated.
   */
  updatedAt: string
  /**
   * Default is `1`.
   */
  releaseVer: number
  /**
   * Tells if the custom has vocals lipsync files. Default is `false`.
   */
  hasLipSyncFiles: boolean
  /**
   * Tells if the custom has authored venues. Default is `false`.
   */
  hasAuthoredVenues: boolean
  /**
   * Customize options for double kick songs.
   */
  doubleKickOptions: DoubleKickOptions
  /**
   * This can be used on solo vocals or 2-part harmonies songs to force MAGMA
   * to compile lipsync for unused harmonies fields.
   *
   * You must compile the song with fake HARM2/HARM3 tracks on the MIDI, and
   * replacing the MIDI file of the generated CON file.
   */
  fakeHarm: 2 | 3
}

/**
 * An extension of the basic `DTAFile` type.
 */
export type MAGMAProject = DTAFileExpanded<Partial<MAGMAFileValues>>

export interface MAGMAFilesGeneratorOptions {
  /**
   * Default is `true`.
   */
  useLatestVersion?: boolean
  /**
   * Default is `true`.
   */
  customSaveOnDesktop?: boolean
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
        for (const song of songs) {
          if (options?.ignoreFakeSongs && song.fake) {
            // Don't add to songs...
          } else allSongs.push(song)
        }
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
     * Asynchronously generates a CON file folder structure on the `backend/gen/confile` folder for quick custom testing.
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
    /**
     * Asynchronously generates MAGMA files from expanded `DTAFile` objects inside the `backend/gen` folder.
     * - - - -
     * @param {MAGMAProject} song A parsed song, extended with additional values related to MAGMA.
     * @param {MAGMAFilesGeneratorOptions} options `OPTIONAL` Options to customize the generation process.
     */
    magmaFiles: async (song: MAGMAProject, options?: MAGMAFilesGeneratorOptions): Promise<void> => {
      const RBPROJFilePath = resolve(`./backend/gen/${song.id}.rbproj`)

      const C3FilePath = resolve(`./backend/gen/${song.id}.c3`)

      let output = ''
      const MonoBlank = `C:\\\\Users\\\\Ruggery\\\\Desktop\\\\Rock Band\\\\Magma\\\\audio\\\\mono44.wav`
      const StereoBlank = `C:\\\\Users\\\\Ruggery\\\\Desktop\\\\Rock Band\\\\Magma\\\\audio\\\\stereo44.wav`
      const DryVox = `C:\\\\Users\\\\Ruggery\\\\Desktop\\\\Rock Band\\\\Magma\\\\audio\\\\blank_dryvox.wav`

      const RBAPath = resolve(`./backend/gen/${song.id}.rba`)

      const MIDIFilePath = `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${
        song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)
      }\\\\${song.id}.mid`

      const DV0Path = song.hasLipSyncFiles
        ? song.vocal_parts > 0
          ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${
              song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)
            }\\\\magma\\\\HARM1.wav`
          : ''
        : song.vocal_parts > 0
        ? DryVox
        : ''

      const DV1Path = song.hasLipSyncFiles
        ? song.fakeHarm === 2 || song.fakeHarm === 3
          ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${
              song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)
            }\\\\magma\\\\HARM2.wav`
          : song.vocal_parts > 1
          ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${
              song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)
            }\\\\magma\\\\HARM2.wav`
          : ''
        : song.vocal_parts > 1
        ? DryVox
        : ''

      const DV2Path = song.hasLipSyncFiles
        ? song.fakeHarm === 3
          ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${
              song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)
            }\\\\magma\\\\HARM3.wav`
          : song.vocal_parts > 2
          ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${
              song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)
            }\\\\magma\\\\HARM3.wav`
          : ''
        : song.vocal_parts > 2
        ? DryVox
        : ''

      const AlbumArtPath = song.album_art
        ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\magma\\\\${
            song.id
          }_keep_x256.bmp`
        : ''

      const KickWavPath = song.multitrack
        ? song.tracks_count[0] > 2
          ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\wav\\\\${
              song.doubleKickOptions?.kickwav ? 'kick2x.wav' : 'kick.wav'
            }`
          : ''
        : song.tracks_count[0] > 2
        ? MonoBlank
        : song.tracks_count[0] > 5
        ? StereoBlank
        : ''

      const SnareWavPath = song.multitrack
        ? song.tracks_count[0] > 3
          ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${
              song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)
            }\\\\wav\\\\snare.wav`
          : ''
        : song.tracks_count[0] > 3
        ? MonoBlank
        : song.tracks_count[0] > 4
        ? StereoBlank
        : ''

      const DrumKitWavPath = song.multitrack
        ? song.tracks_count[0] === 2
          ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\wav\\\\${
              song.doubleKickOptions?.kickwav ? 'drums2x.wav' : 'drums.wav'
            }`
          : song.tracks_count[0] > 2
          ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)}\\\\wav\\\\kit.wav`
          : ''
        : song.tracks_count[0] > 0
        ? StereoBlank
        : ''

      const BassWavPath = song.multitrack
        ? song.tracks_count[1] !== 0
          ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${
              song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)
            }\\\\wav\\\\bass.wav`
          : ''
        : song.tracks_count[1] === 1
        ? MonoBlank
        : song.tracks_count[1] === 2
        ? StereoBlank
        : ''
      const GuitarWavPath = song.multitrack
        ? song.tracks_count[2] !== 0
          ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${
              song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)
            }\\\\wav\\\\guitar.wav`
          : ''
        : song.tracks_count[2] === 1
        ? MonoBlank
        : song.tracks_count[2] === 2
        ? StereoBlank
        : ''
      const VocalsWavPath = song.multitrack
        ? song.tracks_count[3] !== 0
          ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${
              song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)
            }\\\\wav\\\\vocals.wav`
          : ''
        : song.tracks_count[3] === 1
        ? MonoBlank
        : song.tracks_count[3] === 2
        ? StereoBlank
        : ''
      const KeysWavPath = song.multitrack
        ? song.tracks_count[4] !== 0
          ? `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${
              song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)
            }\\\\wav\\\\keys.wav`
          : ''
        : song.tracks_count[4] === 1
        ? MonoBlank
        : song.tracks_count[4] === 2
        ? StereoBlank
        : ''
      const BackingWavPath = `c:\\\\Users\\\\Ruggery\\\\Documents\\\\Visual Studio Code\\\\Projects\\\\ruggy-customs-projects\\\\songs\\\\${
        song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)
      }\\\\wav\\\\backing.wav`

      output += `(`
      output += `${t(1, 'start')}'project'`
      output += `${t(1, 'start')}(`
      output += `${t(2, 'start')}'tool_version'`
      output += `${t(2, 'start')}"110411_A"`
      output += `${t(1, 'start')})`
      output += `${t(1, 'start')}('project_version' 24)`

      output += `${t(1, 'start')}(`
      output += `${t(2, 'start')}'metadata'`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'song_name'`
      output += `${t(3, 'start')}"${song.name.replace(/"/g, ' ')}"`
      output += `${t(2, 'start')})`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'artist_name'`
      output += `${t(3, 'start')}"${song.artist.replace(/"/g, ' ')}"`
      output += `${t(2, 'start')})`

      output += `${t(2, 'start')}('genre' '${song.genre}')`
      output += `${t(2, 'start')}('sub_genre' '${song.sub_genre as SongSubGenre}')`
      output += `${t(2, 'start')}('year_released' ${song.year_released})`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'album_name'`
      output += `${t(3, 'start')}"${song.album_name ? song.album_name.replace(/"/g, ' ') : ''}"`
      output += `${t(2, 'start')})`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'author'`
      output += `${t(3, 'start')}"${song.author ? song.author.replace(/"/g, ' ') : ''}"`
      output += `${t(2, 'start')})`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'release_label'`
      output += `${t(3, 'start')}""`
      output += `${t(2, 'start')})`

      output += `${t(2, 'start')}('country' 'ugc_country_us')`
      output += `${t(2, 'start')}('price' 80)`
      output += `${t(2, 'start')}('track_number' ${song.album_track_number ? song.album_track_number : 1})`
      output += `${t(2, 'start')}('has_album' ${song.album_name ? 1 : 0})`

      const rank_guitar = r('guitar', song.rank_guitar) + 1 === 0 ? 1 : r('guitar', song.rank_guitar) + 1
      const rank_bass = r('bass', song.rank_bass) + 1 === 0 ? 1 : r('bass', song.rank_bass) + 1
      const rank_drum = r('drum', song.rank_drum) + 1 === 0 ? 1 : r('drum', song.rank_drum) + 1
      const rank_vocals = r('vocals', song.rank_vocals) + 1 === 0 ? 1 : r('vocals', song.rank_vocals) + 1
      const rank_keys = r('keys', song.rank_keys) + 1 === 0 ? 1 : r('keys', song.rank_keys) + 1
      const rank_real_keys = r('real_keys', song.rank_real_keys) + 1 === 0 ? 1 : r('real_keys', song.rank_real_keys) + 1
      const rank_band = r('band', song.rank_band) + 1 === 0 ? 1 : r('band', song.rank_band) + 1

      output += `${t(1, 'start')})`
      output += `${t(1, 'start')}(`
      output += `${t(2, 'start')}'gamedata'`
      output += `${t(2, 'start')}('preview_start_ms' ${song.preview[0]})`
      output += `${t(2, 'start')}('rank_guitar' ${rank_guitar})`
      output += `${t(2, 'start')}('rank_bass' ${rank_bass})`
      output += `${t(2, 'start')}('rank_drum' ${rank_drum})`
      output += `${t(2, 'start')}('rank_vocals' ${rank_vocals})`
      output += `${t(2, 'start')}('rank_keys' ${rank_keys})`
      output += `${t(2, 'start')}('rank_pro_keys' ${rank_real_keys})`
      output += `${t(2, 'start')}('rank_band' ${rank_band})`
      output += `${t(2, 'start')}('vocal_scroll_speed' ${song.song_scroll_speed ? song.song_scroll_speed : 2300})`
      output += `${t(2, 'start')}('anim_tempo' ${song.anim_tempo})`
      output += `${t(2, 'start')}('vocal_gender' ${song.vocal_gender})`
      output += `${t(2, 'start')}('vocal_percussion' '${song.bank.slice(4, -10)}')`
      output += `${t(2, 'start')}('vocal_parts' ${song.fakeHarm ? song.fakeHarm : song.vocal_parts})`
      output += `${t(2, 'start')}('guide_pitch_volume' ${song.guide_pitch_volume ? song.guide_pitch_volume.toFixed(2) : '-3.00'})`

      output += `${t(1, 'start')})`
      output += `${t(1, 'start')}(`
      output += `${t(2, 'start')}'languages'`
      output += `${t(2, 'start')}('english' 1)`
      output += `${t(2, 'start')}('french' 0)`
      output += `${t(2, 'start')}('italian' 0)`
      output += `${t(2, 'start')}('spanish' 0)`
      output += `${t(2, 'start')}('german' 0)`
      output += `${t(2, 'start')}('japanese' 0)`

      output += `${t(1, 'start')})`
      output += `${t(1, 'start')}(`
      output += `${t(2, 'start')}'destination_file'`
      output += `${t(2, 'start')}"${options?.customSaveOnDesktop === false ? RBAPath : `c:\\\\Users\\\\Ruggery\\\\Desktop\\\\${song.id}.rba`}"`
      output += `${t(1, 'start')})`

      output += `${t(1, 'start')}(`
      output += `${t(2, 'start')}'midi'`
      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'file'`
      output += `${t(3, 'start')}"${MIDIFilePath}"`
      output += `${t(2, 'start')})`
      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'autogen_theme'`
      output += `${t(3, 'start')}"${song.autogenTheme ? `${song.autogenTheme}.rbtheme` : 'ArenaRock.rbtheme'}"`
      output += `${t(2, 'start')})`
      output += `${t(1, 'start')})`

      output += `${t(1, 'start')}(`
      output += `${t(2, 'start')}'dry_vox'`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'part0'`
      output += `${t(3, 'start')}(`
      output += `${t(4, 'start')}'file'`
      output += `${t(4, 'start')}"${DV0Path}"`
      output += `${t(3, 'start')})`
      output += `${t(3, 'start')}('enabled' ${song.vocal_parts > 0 ? 1 : 0})`
      output += `${t(2, 'start')})`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'part1'`
      output += `${t(3, 'start')}(`
      output += `${t(4, 'start')}'file'`
      output += `${t(4, 'start')}"${DV1Path}"`
      output += `${t(3, 'start')})`
      output += `${t(3, 'start')}('enabled' ${song.fakeHarm === 2 || song.fakeHarm === 3 ? 1 : song.vocal_parts > 1 ? 1 : 0})`
      output += `${t(2, 'start')})`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'part2'`
      output += `${t(3, 'start')}(`
      output += `${t(4, 'start')}'file'`
      output += `${t(4, 'start')}"${DV2Path}"`
      output += `${t(3, 'start')})`
      output += `${t(3, 'start')}('enabled' ${song.fakeHarm === 3 ? 1 : song.vocal_parts > 2 ? 1 : 0})`
      output += `${t(2, 'start')})`
      output += `${t(2, 'start')}('tuning_offset_cents' ${song.tuning_offset_cents ? song.tuning_offset_cents.toFixed(2) : '0.00'})`
      output += `${t(1, 'start')})`

      output += `${t(1, 'start')}(`
      output += `${t(2, 'start')}'album_art'`
      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'file'`
      output += `${t(3, 'start')}"${AlbumArtPath}"`
      output += `${t(2, 'start')})`
      output += `${t(1, 'start')})`

      const panvol = panVolInfoGen(song)

      output += `${t(1, 'start')}(`
      output += `${t(2, 'start')}'tracks'`
      output += `${t(2, 'start')}('drum_layout' '${
        panvol.drum.channels === 0 || panvol.drum.channels === 2 ? 'drum_layout_kit' : panvol.drum.channels === 3 ? 'drum_layout_kit_kick' : 'drum_layout_kit_kick_snare'
      }')`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'drum_kit'`
      output += `${t(3, 'start')}('enabled' ${panvol.drum.kitEnabled ? 1 : 0})`
      output += `${t(3, 'start')}('channels' ${panvol.drum.kitChannels})`
      output += `${t(3, 'start')}('pan' ${panvol.drum.kitPan.map((pan) => pan.toFixed(2)).join(' ')})`
      output += `${t(3, 'start')}('vol' ${panvol.drum.kitVol.map((vol) => vol.toFixed(2)).join(' ')})`
      output += `${t(3, 'start')}(`
      output += `${t(4, 'start')}'file'`
      output += `${t(4, 'start')}"${DrumKitWavPath}"`
      output += `${t(3, 'start')})`
      output += `${t(2, 'start')})`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'drum_kick'`
      output += `${t(3, 'start')}('enabled' ${panvol.drum.kickEnabled ? 1 : 0})`
      output += `${t(3, 'start')}('channels' ${panvol.drum.kickChannels})`
      output += `${t(3, 'start')}('pan' ${panvol.drum.kickEnabled ? panvol.drum.kickPan.map((pan) => pan.toFixed(2)).join(' ') : '0.00'})`
      output += `${t(3, 'start')}('vol' ${panvol.drum.kickEnabled ? panvol.drum.kickVol.map((vol) => vol.toFixed(2)).join(' ') : '0.00'})`
      output += `${t(3, 'start')}(`
      output += `${t(4, 'start')}'file'`
      output += `${t(4, 'start')}"${KickWavPath}"`
      output += `${t(3, 'start')})`
      output += `${t(2, 'start')})`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'drum_snare'`
      output += `${t(3, 'start')}('enabled' ${panvol.drum.snareEnabled ? 1 : 0})`
      output += `${t(3, 'start')}('channels' ${panvol.drum.snareChannels})`
      output += `${t(3, 'start')}('pan' ${panvol.drum.snareEnabled ? panvol.drum.snarePan.map((pan) => pan.toFixed(2)).join(' ') : '0.00'})`
      output += `${t(3, 'start')}('vol' ${panvol.drum.snareEnabled ? panvol.drum.snareVol.map((vol) => vol.toFixed(2)).join(' ') : '0.00'})`
      output += `${t(3, 'start')}(`
      output += `${t(4, 'start')}'file'`
      output += `${t(4, 'start')}"${SnareWavPath}"`
      output += `${t(3, 'start')})`
      output += `${t(2, 'start')})`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'bass'`
      output += `${t(3, 'start')}('enabled' ${panvol.bass.enabled ? 1 : 0})`
      output += `${t(3, 'start')}('channels' ${panvol.bass.channels})`
      output += `${t(3, 'start')}('pan' ${panvol.bass.enabled ? panvol.bass.pan.map((pan) => pan.toFixed(2)).join(' ') : '0.00'})`
      output += `${t(3, 'start')}('vol' ${panvol.bass.enabled ? panvol.bass.vol.map((vol) => vol.toFixed(2)).join(' ') : '0.00'})`
      output += `${t(3, 'start')}(`
      output += `${t(4, 'start')}'file'`
      output += `${t(4, 'start')}"${BassWavPath}"`
      output += `${t(3, 'start')})`
      output += `${t(2, 'start')})`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'guitar'`
      output += `${t(3, 'start')}('enabled' ${panvol.guitar.enabled ? 1 : 0})`
      output += `${t(3, 'start')}('channels' ${panvol.guitar.channels})`
      output += `${t(3, 'start')}('pan' ${panvol.guitar.enabled ? panvol.guitar.pan.map((pan) => pan.toFixed(2)).join(' ') : '0.00'})`
      output += `${t(3, 'start')}('vol' ${panvol.guitar.enabled ? panvol.guitar.vol.map((vol) => vol.toFixed(2)).join(' ') : '0.00'})`
      output += `${t(3, 'start')}(`
      output += `${t(4, 'start')}'file'`
      output += `${t(4, 'start')}"${GuitarWavPath}"`
      output += `${t(3, 'start')})`
      output += `${t(2, 'start')})`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'vocals'`
      output += `${t(3, 'start')}('enabled' ${panvol.vocals.enabled ? 1 : 0})`
      output += `${t(3, 'start')}('channels' ${panvol.vocals.channels})`
      output += `${t(3, 'start')}('pan' ${panvol.vocals.enabled ? panvol.vocals.pan.map((pan) => pan.toFixed(2)).join(' ') : '0.00'})`
      output += `${t(3, 'start')}('vol' ${panvol.vocals.enabled ? panvol.vocals.vol.map((vol) => vol.toFixed(2)).join(' ') : '0.00'})`
      output += `${t(3, 'start')}(`
      output += `${t(4, 'start')}'file'`
      output += `${t(4, 'start')}"${VocalsWavPath}"`
      output += `${t(3, 'start')})`
      output += `${t(2, 'start')})`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'keys'`
      output += `${t(3, 'start')}('enabled' ${panvol.keys.enabled ? 1 : 0})`
      output += `${t(3, 'start')}('channels' ${panvol.keys.channels})`
      output += `${t(3, 'start')}('pan' ${panvol.keys.enabled ? panvol.keys.pan.map((pan) => pan.toFixed(2)).join(' ') : '0.00'})`
      output += `${t(3, 'start')}('vol' ${panvol.keys.enabled ? panvol.keys.vol.map((vol) => vol.toFixed(2)).join(' ') : '0.00'})`
      output += `${t(3, 'start')}(`
      output += `${t(4, 'start')}'file'`
      output += `${t(4, 'start')}"${KeysWavPath}"`
      output += `${t(3, 'start')})`
      output += `${t(2, 'start')})`

      output += `${t(2, 'start')}(`
      output += `${t(3, 'start')}'backing'`
      output += `${t(3, 'start')}('enabled' ${panvol.backing.enabled ? 1 : 0})`
      output += `${t(3, 'start')}('channels' ${panvol.backing.channels})`
      output += `${t(3, 'start')}('pan' ${panvol.backing.enabled ? panvol.backing.pan.map((pan) => pan.toFixed(2)).join(' ') : '0.00'})`
      output += `${t(3, 'start')}('vol' ${panvol.backing.enabled ? panvol.backing.vol.map((vol) => vol.toFixed(2)).join(' ') : '0.00'})`
      output += `${t(3, 'start')}(`
      output += `${t(4, 'start')}'file'`
      output += `${t(4, 'start')}"${BackingWavPath}"`
      output += `${t(3, 'start')})`
      output += `${t(2, 'start')})`
      output += `${t(1, 'start')})`
      output += `${t(0, 'start')})`

      let c3out = `\\\\Created by Magma: C3 Roks Edition v3.3.5\n\\\\DO NOT EDIT MANUALLY\nSong=${song.name}\nArtist=${song.artist}\nAlbum=${
        song.album_name ? song.album_name : ''
      }\nCustomID=\nVersion=${options?.useLatestVersion === false ? 1 : song.releaseVer ? song.releaseVer : 1}\nIsMaster=${song.master ? 'True' : 'False'}\nEncodingQuality=7\n${
        song.year_recorded ? `ReRecordYear=${song.year_recorded}` : ''
      }2xBass=${song.doubleKick ? 'True' : 'False'}\nRhythmKeys=${song.rhythmOnKeys ? 'True' : 'False'}\nRhythmBass=${song.rhythmOnBass ? 'True' : 'False'}\nKaraoke=${
        song.karaoke ? 'True' : 'False'
      }\nMultitrack=${song.multitrack ? 'True' : 'False'}\nConvert=${song.convert ? 'True' : 'False'}\nExpertOnly=${song.expertOnly ? 'True' : 'False'}\n`

      if (song.rank_real_bass && song.real_bass_tuning) {
        c3out += `ProBassDiff=${song.rank_real_bass}\nProBassTuning4=(real_bass_tuning (${song.real_bass_tuning.join(' ')}))\n`
      }

      if (song.rank_real_guitar && song.real_guitar_tuning) {
        c3out += `ProGuitarDiff=${song.rank_real_guitar}\nProGuitarTuning=(real_guitar_tuning (${song.real_guitar_tuning.join(' ')}))\n`
      }

      c3out += `DisableProKeys=False\nTonicNote=${song.vocal_tonic_note ? song.vocal_tonic_note : '0'}\nTuningCents=${song.tuning_offset_cents ? song.tuning_offset_cents : '0'}\nSongRating=${
        song.rating
      }\nDrumKitSFX=${
        song.drum_bank === 'sfx/kit01_bank.milo' ? 0 : song.drum_bank === 'sfx/kit02_bank.milo' ? 1 : song.drum_bank === 'sfx/kit03_bank.milo' ? 2 : song.drum_bank === 'sfx/kit04_bank.milo' ? 3 : 4
      }\nHopoTresholdIndex=${song.hopo_threshold === 90 ? 0 : song.hopo_threshold === 130 ? 1 : song.hopo_threshold === 170 ? 2 : song.hopo_threshold === 250 ? 3 : 2}\n`

      const drumSolo = song.solo && song.solo.find((flags) => flags === 'drum') ? 'True' : 'False'
      const guitarSolo = song.solo && song.solo.find((flags) => flags === 'guitar') ? 'True' : 'False'
      const bassSolo = song.solo && song.solo.find((flags) => flags === 'bass') ? 'True' : 'False'
      const keysSolo = song.solo && song.solo.find((flags) => flags === 'keys') ? 'True' : 'False'
      const vocalsSolo = song.solo && song.solo.find((flags) => flags === 'vocal_percussion') ? 'True' : 'False'

      c3out += `MuteVol=${song.mute_volume ? song.mute_volume : -96}\nVocalMuteVol=${
        song.mute_volume_vocals ? song.mute_volume_vocals : -12
      }\nSoloDrums=${drumSolo}\nSoloGuitar=${guitarSolo}\nSoloBass=${bassSolo}\nSoloKeys=${keysSolo}\nSoloVocals=${vocalsSolo}\nSongPreview=${
        song.preview[0]
      }\nCheckTempoMap=True\nWiiMode=False\nDoDrumMixEvents=True\nPackageDisplay=${song.artist} - ${
        song.name
      }\nPackageDescription=Created with Magma: C3 Roks Edition. For more great customs authoring tools, visit forums.customscreators.com\nSongAlbumArt=c:\\users\\ruggery\\documents\\visual studio code\\projects\\ruggy-customs-projects\\songs\\${
        song.doubleKick ? song.id.slice(4, -2) : song.id.slice(4)
      }\\magma\\${song.id}_keep.png\nPackageThumb=\n${song.encoding === 'utf8' ? 'EncodeANSI=False\nEncodeUTF8=True' : 'EncodeANSI=True\nEncodeUTF8=False'}\nUseNumericID=True\nUniqueNumericID=${
        song.song_id
      }\nUniqueNumericID2X=\n\nTO DO List Begin\nToDo1=Verify the accuracy of all metadata,False,False\nToDo2=Grab official *.png_xbox art file if applicable,False,False\nToDo3=Chart reductions in all instruments,False,False\nToDo4=Add drum fills,False,False\nToDo5=Add overdrive for all instruments,False,False\nToDo6=Add overdrive for vocals,False,False\nToDo7=Create practice sessions [EVENTS],False,False\nToDo8=Draw sing-along notes in VENUE,False,False\nToDo9=Record dry vocals for lipsync,False,False\nToDo10=Render audio with RB limiter and count-in,False,False\nToDo12=Click to add new item...,False,False\nToDo13=Click to add new item...,False,False\nToDo14=Click to add new item...,False,False\nToDo15=Click to add new item...,False,False\nTO DO List End\n`

      await fs.writeFile(RBPROJFilePath, output, 'ascii')
      await fs.writeFile(C3FilePath, c3out, 'ascii')
    },
  },
}

export default GenFolderModule
