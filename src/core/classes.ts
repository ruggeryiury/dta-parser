import {
  BandRankingNames,
  BandRankingNamesAsDots,
  BandRankingNumbers,
  DTAFile,
  DTAFileRecipe,
  DTAStringValueFormattingOptions,
  GetRankTypeOptions,
  InstrRankingNames,
  InstrRankingNamesAsDots,
  InstrRankingNumbers,
  SongGameOriginNames,
  SongGenreNames,
  SongRatingNames,
  SongSortingTypes,
  SongSubGenreNames,
  StringifyDataOptions,
  UpdateDataOptions,
  VocalGenderNames,
  VocalPartsNames,
  createDTA,
  formatDTAStringValue,
  genDTARecipe,
  getSongRank,
  localeKeyToValue,
  sortDTA,
  stringifyDTA,
  updateDTA,
} from '../core.js'
import {
  SongDrumMixNames,
  AudioFileTracksStructureDocument,
  genAudioFileStructure,
  SearchAlbumArtworkImageSize,
  searchAlbumArtwork,
  checkDrumMix,
  isSongClass,
  isDTAFileRecipe,
} from '../utils.js'

export interface SongGetRankMethods {
  /**
   * Fetches the band ranking from the song.
   * - - - -
   * @param {T} type `OPTIONAL` Customize the return type value.
   *
   * Valid values are:
   * - `'number'`: Returns as a numeral ranking type from `0` (Warmup) to `6` (Impossible). Is the default value.
   * - `'verbosed'`: Returns as a string ranking type from `'Warmup'` to `'Impossible'`.
   * - `'verboseDots'`: Returns as a string ranking type from `'Zero Dots'` to `'Devil Dots'`.
   * @returns {T extends "number" ? BandRankingNumbers : T extends "verbose" ? BandRankingNames : T extends undefined ? BandRankingNumbers : BandRankingNamesAsDots} The band ranking of the song.
   */
  band: <T extends GetRankTypeOptions | undefined = undefined>(
    type?: T | undefined
  ) => T extends 'number'
    ? BandRankingNumbers
    : T extends 'verbose'
      ? BandRankingNames
      : T extends undefined
        ? BandRankingNumbers
        : BandRankingNamesAsDots
  /**
   * Fetches the drum ranking of the song.
   * - - - -
   * @param {T} type `OPTIONAL` Customize the return type value.
   *
   * Valid values are:
   * - `'number'`: Returns as a numeral ranking type from `-1` (No Part) to `6` (Impossible). Is the default value.
   * - `'verbosed'`: Returns as a string ranking type from `'No Part'` to `'Impossible'`.
   * - `'verboseDots'`: Returns as a string ranking type from `'No Part'` to `'Devil Dots'`.
   * @returns {T extends "number" ? InstrRankingNumbers : T extends "verbose" ? InstrRankingNames : T extends undefined ? InstrRankingNumbers : InstrRankingNamesAsDots} The drum ranking of the song.
   */
  drum: <T extends GetRankTypeOptions | undefined = undefined>(
    type?: T | undefined
  ) => T extends 'number'
    ? InstrRankingNumbers
    : T extends 'verbose'
      ? InstrRankingNames
      : T extends undefined
        ? InstrRankingNumbers
        : InstrRankingNamesAsDots
  /**
   * Fetches the bass ranking of the song.
   * - - - -
   * @param {T} type `OPTIONAL` Customize the return type value.
   *
   * Valid values are:
   * - `'number'`: Returns as a numeral ranking type from `-1` (No Part) to `6` (Impossible). Is the default value.
   * - `'verbosed'`: Returns as a string ranking type from `'No Part'` to `'Impossible'`.
   * - `'verboseDots'`: Returns as a string ranking type from `'No Part'` to `'Devil Dots'`.
   * @returns {T extends "number" ? InstrRankingNumbers : T extends "verbose" ? InstrRankingNames : T extends undefined ? InstrRankingNumbers : InstrRankingNamesAsDots} The bass ranking of the song.
   */
  bass: <T extends GetRankTypeOptions | undefined = undefined>(
    type?: T | undefined
  ) => T extends 'number'
    ? InstrRankingNumbers
    : T extends 'verbose'
      ? InstrRankingNames
      : T extends undefined
        ? InstrRankingNumbers
        : InstrRankingNamesAsDots
  /**
   * Fetches the guitar ranking of the song.
   * - - - -
   * @param {T} type `OPTIONAL` Customize the return type value.
   *
   * Valid values are:
   * - `'number'`: Returns as a numeral ranking type from `-1` (No Part) to `6` (Impossible). Is the default value.
   * - `'verbosed'`: Returns as a string ranking type from `'No Part'` to `'Impossible'`.
   * - `'verboseDots'`: Returns as a string ranking type from `'No Part'` to `'Devil Dots'`.
   * @returns {T extends "number" ? InstrRankingNumbers : T extends "verbose" ? InstrRankingNames : T extends undefined ? InstrRankingNumbers : InstrRankingNamesAsDots} The guitar ranking of the song.
   */
  guitar: <T extends GetRankTypeOptions | undefined = undefined>(
    type?: T | undefined
  ) => T extends 'number'
    ? InstrRankingNumbers
    : T extends 'verbose'
      ? InstrRankingNames
      : T extends undefined
        ? InstrRankingNumbers
        : InstrRankingNamesAsDots
  /**
   * Fetches the vocals ranking of the song.
   * - - - -
   * @param {T} type `OPTIONAL` Customize the return type value.
   *
   * Valid values are:
   * - `'number'`: Returns as a numeral ranking type from `-1` (No Part) to `6` (Impossible). Is the default value.
   * - `'verbosed'`: Returns as a string ranking type from `'No Part'` to `'Impossible'`.
   * - `'verboseDots'`: Returns as a string ranking type from `'No Part'` to `'Devil Dots'`.
   * @returns {T extends "number" ? InstrRankingNumbers : T extends "verbose" ? InstrRankingNames : T extends undefined ? InstrRankingNumbers : InstrRankingNamesAsDots} The vocals ranking of the song.
   */
  vocals: <T extends GetRankTypeOptions | undefined = undefined>(
    type?: T | undefined
  ) => T extends 'number'
    ? InstrRankingNumbers
    : T extends 'verbose'
      ? InstrRankingNames
      : T extends undefined
        ? InstrRankingNumbers
        : InstrRankingNamesAsDots
  /**
   * Fetches the keys ranking of the song.
   * - - - -
   * @param {T} type `OPTIONAL` Customize the return type value.
   *
   * Valid values are:
   * - `'number'`: Returns as a numeral ranking type from `-1` (No Part) to `6` (Impossible). Is the default value.
   * - `'verbosed'`: Returns as a string ranking type from `'No Part'` to `'Impossible'`.
   * - `'verboseDots'`: Returns as a string ranking type from `'No Part'` to `'Devil Dots'`.
   * @returns {T extends "number" ? InstrRankingNumbers : T extends "verbose" ? InstrRankingNames : T extends undefined ? InstrRankingNumbers : InstrRankingNamesAsDots} The keys ranking of the song.
   */
  keys: <T extends GetRankTypeOptions | undefined = undefined>(
    type?: T | undefined
  ) => T extends 'number'
    ? InstrRankingNumbers
    : T extends 'verbose'
      ? InstrRankingNames
      : T extends undefined
        ? InstrRankingNumbers
        : InstrRankingNamesAsDots
  /**
   * Fetches the PRO guitar ranking of the song.
   * - - - -
   * @param {T} type `OPTIONAL` Customize the return type value.
   *
   * Valid values are:
   * - `'number'`: Returns as a numeral ranking type from `-1` (No Part) to `6` (Impossible). Is the default value.
   * - `'verbosed'`: Returns as a string ranking type from `'No Part'` to `'Impossible'`.
   * - `'verboseDots'`: Returns as a string ranking type from `'No Part'` to `'Devil Dots'`.
   * @returns {T extends "number" ? InstrRankingNumbers : T extends "verbose" ? InstrRankingNames : T extends undefined ? InstrRankingNumbers : InstrRankingNamesAsDots} The PRO guitar ranking of the song.
   */
  proGuitar: <T extends GetRankTypeOptions | undefined = undefined>(
    type?: T | undefined
  ) => T extends 'number'
    ? InstrRankingNumbers
    : T extends 'verbose'
      ? InstrRankingNames
      : T extends undefined
        ? InstrRankingNumbers
        : InstrRankingNamesAsDots
  /**
   * Fetches the PRO bass ranking of the song.
   * - - - -
   * @param {T} type `OPTIONAL` Customize the return type value.
   *
   * Valid values are:
   * - `'number'`: Returns as a numeral ranking type from `-1` (No Part) to `6` (Impossible). Is the default value.
   * - `'verbosed'`: Returns as a string ranking type from `'No Part'` to `'Impossible'`.
   * - `'verboseDots'`: Returns as a string ranking type from `'No Part'` to `'Devil Dots'`.
   * @returns {T extends "number" ? InstrRankingNumbers : T extends "verbose" ? InstrRankingNames : T extends undefined ? InstrRankingNumbers : InstrRankingNamesAsDots} The PRO bass ranking of the song.
   */
  proBass: <T extends GetRankTypeOptions | undefined = undefined>(
    type?: T | undefined
  ) => T extends 'number'
    ? InstrRankingNumbers
    : T extends 'verbose'
      ? InstrRankingNames
      : T extends undefined
        ? InstrRankingNumbers
        : InstrRankingNamesAsDots
  /**
   * Fetches the PRO keys ranking of the song.
   * - - - -
   * @param {T} type `OPTIONAL` Customize the return type value.
   *
   * Valid values are:
   * - `'number'`: Returns as a numeral ranking type from `-1` (No Part) to `6` (Impossible). Is the default value.
   * - `'verbosed'`: Returns as a string ranking type from `'No Part'` to `'Impossible'`.
   * - `'verboseDots'`: Returns as a string ranking type from `'No Part'` to `'Devil Dots'`.
   * @returns {T extends "number" ? InstrRankingNumbers : T extends "verbose" ? InstrRankingNames : T extends undefined ? InstrRankingNumbers : InstrRankingNamesAsDots} The PRO keys ranking of the song.
   */
  proKeys: <T extends GetRankTypeOptions | undefined = undefined>(
    type?: T | undefined
  ) => T extends 'number'
    ? InstrRankingNumbers
    : T extends 'verbose'
      ? InstrRankingNames
      : T extends undefined
        ? InstrRankingNumbers
        : InstrRankingNamesAsDots
}

export interface SongGetValueMethods {
  /**
   * Fetches the song title. Alias to `Song.getValue.title()`.
   * - - - -
   * @param {DTAStringValueFormattingOptions | undefined} options `OPTIONAL` Customize options for the song title's return value.
   * @returns {string} The song title.
   */
  name: (options?: DTAStringValueFormattingOptions) => string
  /**
   * Fetches the song title. Alias to `Song.getValue.name()`.
   * - - - -
   * @param {DTAStringValueFormattingOptions | undefined} options `OPTIONAL` Customize options for the song title's return value.
   * @returns {string} The song title.
   */
  title: (options?: DTAStringValueFormattingOptions) => string
  /**
   * Fetches the song artist.
   * - - - -
   * @param {DTAStringValueFormattingOptions | undefined} options `OPTIONAL` Customize options for the song artist's return value.
   * @returns {string} The song artist.
   */
  artist: (options?: DTAStringValueFormattingOptions) => string
  /**
   * Checks if the song is an original master recording.
   * - - - -
   * @returns {boolean} A boolean value representing if the song is an original master recording or not.
   */
  master: () => boolean
  /**
   * Returns the drum mix of the song.
   * - - - -
   * @returns {SongDrumMixNames} The drum mix of the song.
   */
  drumMix: () => SongDrumMixNames
  /**
   * Fetches the song genre.
   * - - - -
   * @returns {SongGenreNames} The song genre.
   */
  genre: () => SongGenreNames
  /**
   * Fetches the song sub-genre.
   * - - - -
   * @returns {"Not Specified" | SongSubGenreNames} The song sub-genre.
   */
  subGenre: () => 'Not Specified' | SongSubGenreNames
  /**
   * Fetches the quantity of vocal parts of the song.
   * - - - -
   * @returns {VocalPartsNames} The quantity of vocal parts of the song.
   */
  vocalParts: () => VocalPartsNames
  /**
   * Fetches the song rating.
   * - - - -
   * @returns {SongRatingNames} The song rating.
   */
  rating: () => SongRatingNames
  /**
   * Fetches the song vocalist gender.
   * - - - -
   * @returns {VocalGenderNames} The song vocalist gender
   */
  vocalGender: () => VocalGenderNames
  /**
   * Fetches the game origin of the song.
   * - - - -
   * @returns {SongGameOriginNames} The game origin of the song.
   */
  gameOrigin: () => SongGameOriginNames
  /**
   * Fetches the song's release year.
   * - - - -
   * @returns {number} The song's release year.
   */
  yearReleased: () => number
  /**
   * Fetches the song's recorded year. Returns `undefined` if the song has no recorded year settled.
   * - - - -
   * @returns {number} The song's recorded year.
   */
  yearRecorded: () => number | undefined
  /**
   * Fetches the song's album name. Returns `undefined` if the song has no album name settled.
   * @param {DTAStringValueFormattingOptions | undefined} options `OPTIONAL` Customize options for the song's album name value.
   * @returns {string | undefined} The song's album name. Returns `undefined` if the song has no album name settled.
   */
  albumName: (options?: DTAStringValueFormattingOptions) => string | undefined
  /**
   * Methods to fetch data about the song instruments and band rankings.
   */
  rank: SongGetRankMethods
}

/**
 * A class representing a parsed song.
 * - - - -
 */
export class Song<T extends DTAFile = DTAFile> {
  /**
   * A parsed song object with all its contents.
   */
  public value: Readonly<T>
  /**
   * An object containing detailed informations about the song's audio file track structure.
   */
  public tracks: Readonly<AudioFileTracksStructureDocument>
  /**
   * A recipe object from this song, you can use it on a `Song` class constructor to re-create this `Song` class object.
   */
  public recipe: Readonly<DTAFileRecipe>

  /**
   * A class representing a parsed song.
   * - - - -
   * @param { DTAFile | DTAFileRecipe} recipe A parsed song object or a recipe object for a song.
   */
  constructor(recipe: DTAFile | DTAFileRecipe) {
    if (isDTAFileRecipe(recipe)) {
      const newSong = createDTA(recipe, true)
      this.value = newSong as Readonly<T>
      this.tracks = genAudioFileStructure(newSong)
      this.recipe = recipe
    } else {
      this.value = recipe as Readonly<T>
      this.tracks = genAudioFileStructure(recipe)
      this.recipe = genDTARecipe(recipe)
    }
  }

  /**
   * Fetches an album artwork URL for the song using the Spotify API.
   * - - - -
   * @param {SearchAlbumArtworkImageSize | undefined} imageSize `OPTIONAL` The size of the album artwork. Default is `'large'`.
   * @throws {Error} If the function is unable to encode authorization string to base64 using `btoa()` or using the `Buffer` constructor.
   * @returns {Promise<string | undefined>} The album artwork URL as string. Returns `undefined` if the connection to the API has been refused
   * at any point, if the provided song has no album name, or if no album has been found on the Spotify database.
   */
  public async albumArtworkURL(
    imageSize: SearchAlbumArtworkImageSize = 'large'
  ): Promise<string | undefined> {
    return await searchAlbumArtwork(this.value, imageSize)
  }

  /**
   * Functions to fetch data from the song, with several tweaks to manipulate the results.
   */
  public getValue: SongGetValueMethods = {
    name: (options) => formatDTAStringValue(this.value.name, options),
    title: (options) => formatDTAStringValue(this.value.name, options),
    artist: (options) => formatDTAStringValue(this.value.artist, options),
    master: () => this.value.master,
    drumMix: () => checkDrumMix(this.value),
    genre: () => localeKeyToValue.genre(this.value.genre),
    subGenre: () => localeKeyToValue.sub_genre(this.value.sub_genre),
    vocalParts: () => localeKeyToValue.vocal_parts(this.value.vocal_parts),
    rating: () => localeKeyToValue.rating(this.value.rating),
    vocalGender: () => localeKeyToValue.vocal_gender(this.value.vocal_gender),
    gameOrigin: () => localeKeyToValue.game_origin(this.value.game_origin),
    yearReleased: () => this.value.year_released,
    yearRecorded: () => this.value.year_recorded,
    albumName: (options) =>
      this.value.album_name
        ? formatDTAStringValue(this.value.album_name, options)
        : undefined,
    rank: {
      band: <T extends GetRankTypeOptions | undefined = undefined>(type?: T) =>
        getSongRank(this.value, 'band', type),
      drum: <T extends GetRankTypeOptions | undefined = undefined>(type?: T) =>
        getSongRank(this.value, 'drum', type),
      bass: <T extends GetRankTypeOptions | undefined = undefined>(type?: T) =>
        getSongRank(this.value, 'bass', type),
      guitar: <T extends GetRankTypeOptions | undefined = undefined>(
        type?: T
      ) => getSongRank(this.value, 'guitar', type),
      vocals: <T extends GetRankTypeOptions | undefined = undefined>(
        type?: T
      ) => getSongRank(this.value, 'vocals', type),
      keys: <T extends GetRankTypeOptions | undefined = undefined>(type?: T) =>
        getSongRank(this.value, 'keys', type),
      proGuitar: <T extends GetRankTypeOptions | undefined = undefined>(
        type?: T
      ) => getSongRank(this.value, 'real_guitar', type),
      proBass: <T extends GetRankTypeOptions | undefined = undefined>(
        type?: T
      ) => getSongRank(this.value, 'real_bass', type),
      proKeys: <T extends GetRankTypeOptions | undefined = undefined>(
        type?: T
      ) => getSongRank(this.value, 'real_keys', type),
    },
  }
  /**
   * Returns the raw parsed song object.
   * - - - -
   * @returns {DTAFile} The raw parsed song object.
   */
  public json(): DTAFile {
    return this.value
  }
  /**
   * Updates the song with the provided update options.
   * - - - -
   * @param {UpdateDataOptions} update An object with values to be updated.
   */
  public update(update: UpdateDataOptions): void {
    const updated = updateDTA(this.value, update)
    this.value = updated as Readonly<T>
    this.tracks = genAudioFileStructure(updated)
    this.recipe = genDTARecipe(updated)
  }
  /**
   * Converts this song back to `.dta` file contents string.
   * - - - -
   * @param {StringifyDataOptions | undefined} options `OPTIONAL` Customization options for the stringifying process. If an object
   * is not passed as argument at all, it will use default configurations to generate MAGMA C3's `.dta` file contents type.
   *
   * Only some values can be customized on the default option for maximum compatibility with other `.dta` file parsers.
   * @returns {string} A string representation of this parsed song object as a `.dta` file contents string.
   */
  public stringify(options?: StringifyDataOptions): string {
    return stringifyDTA(this.value, options)
  }
}

export interface SingleSongSelectorMethods {
  /**
   * Returns a song with the provided shortname ID, or `undefined` if no song is found having the provided shortname ID.
   * - - - -
   * @param id The shortname ID of the song.
   * @returns {Song | undefined} A song with the provided shortname ID, or `undefined` if no song is found having the provided shortname ID.
   */
  byID: (id: string) => Song | undefined
}

/**
 * A class representing an array with parsed songs.
 * - - - -
 */
export class SongCollection {
  public collection: Song[] = []

  /**
   * A class representing an array with parsed songs.
   * - - - -
   * @param {(Song | DTAFile | DTAFileRecipe)[]} collection An array with known parsed song types to be added.
   */
  constructor(collection: (Song | DTAFile | DTAFileRecipe)[]) {
    collection.forEach((song) => {
      if (isSongClass(song)) {
        this.collection.push(song)
      } else {
        this.collection.push(new Song(song))
      }
    })
  }
  /**
   * Adds one of more songs into the song collection.
   * - - - -
   * @param {DTAFile | Song | DTAFile[] | Song[]} songs A song (or an array of songs) that you want to add to the collection.
   */
  public add(songs: DTAFile | Song | DTAFile[] | Song[]): void {
    if (Array.isArray(songs)) {
      songs.forEach((song) => {
        if (isSongClass(song)) {
          this.collection.push(song)
        } else {
          this.collection.push(new Song(song))
        }
      })
    } else {
      if (isSongClass(songs)) {
        this.collection.push(songs)
      } else {
        this.collection.push(new Song(songs))
      }
    }
  }
  /**
   * Removes a song from the collection based on its unique string ID.
   * - - - -
   * @param {string} id The unique string ID of the song you want to be removed from the collection.
   */
  public remove(id: string): void {
    this.collection = this.collection.filter((song) => {
      if (id !== song.value.id) return song
    })
  }
  /**
   * Converts this array of songs back to `.dta` file contents string.
   * - - - -
   * @param {StringifyDataOptions | undefined} options `OPTIONAL` Customization options for the stringifying process. If an object
   * is not passed as argument at all, it will use default configurations to generate MAGMA C3's `.dta` file contents type.
   *
   * Only some values can be customized on the default option for maximum compatibility with other `.dta` file parsers.
   * @returns {string} A string representation of this array of songs as a `.dta` file contents string.
   */
  public stringify(options?: StringifyDataOptions): string {
    let returnString = ''
    this.collection.forEach((song) => {
      returnString += song.stringify(options)
    })

    return returnString
  }
  /**
   * Returns an array with raw parsed song objects.
   * - - - -
   * @returns {DTAFile[]} An array with raw parsed song objects.
   */
  public json(): DTAFile[] {
    return this.collection.map((song) => {
      return song.value as DTAFile
    })
  }
  /**
   * Sorts this `SongCollection` based on the provided sorting type, mutating the song collection array of this class.
   * - - - -
   * @param {SongSortingTypes} sortBy The sorting type of the song collection.
   */
  public sort(sortBy: SongSortingTypes): void {
    const newArray = sortDTA(
      this.collection.map((song) => song.json()),
      sortBy
    )
    this.collection = newArray.map((song) => new Song(song))
  }
  /**
   * Methods to select a single song from the collection.
   */
  public selectOne: SingleSongSelectorMethods = {
    byID: (id) => this.collection.find((song) => song.value.id === id),
  }
}
