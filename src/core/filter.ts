import type { DTAFile } from '../core.js'
import {
  addIndexToDTAFileList,
  applyGeneralFilters,
  filterSongsByArtist,
  filterSongsByAuthor,
  filterSongsByGenre,
  filterSongsBySongDifficulty,
  filterSongsByTitle,
  filterSongsByYearReleased,
  useDefaultOptions,
  type SongsFilteredByArtistObject,
  type SongsFilteredByAuthorObject,
  type SongsFilteredByGenreObject,
  type SongsFilteredBySongDifficultyObject,
  type SongsFilteredByTitleObject,
  type SongsFilteredByYearReleasedObject,
} from '../utils.js'

export interface DTAFileWithIndex extends DTAFile {
  /**
   * The index of the song on the array.
   */
  index: number
}

export type SongFilterSortingTypes =
  | 'title'
  | 'genre'
  | 'song_difficulty'
  | 'author'
  | 'artist'
  | 'year_released'

export type InstrumentDifficultyTypes =
  | 'guitar'
  | 'bass'
  | 'drum'
  | 'keys'
  | 'vocals'
  | 'real_guitar'
  | 'real_bass'
  | 'real_keys'
  | 'band'

export interface SongFilterOptions {
  /**
   * The instrument you want the difficulties to be based from. Default is `'band'` (Band difficulty).
   */
  instrument?: InstrumentDifficultyTypes
  /**
   * Default is `null` (disabled).
   */
  keysSupport?: boolean | null
  /**
   * Default is `null` (disabled).
   */
  proGtrBassSupport?: boolean | null
  /**
   * When using `'artist'` as sorting, you can specify the amount of songs an album must have to generate a unique album header for it. Default is `3`.
   */
  albumQuantityThreshold?: number
}

export type DTAFilteringReturnType<T extends SongFilterSortingTypes> =
  T extends 'title'
    ? SongsFilteredByTitleObject
    : T extends 'artist'
      ? SongsFilteredByArtistObject
      : T extends 'genre'
        ? SongsFilteredByGenreObject
        : T extends 'song_difficulty'
          ? SongsFilteredBySongDifficultyObject
          : T extends 'author'
            ? SongsFilteredByAuthorObject
            : T extends 'year_released'
              ? SongsFilteredByYearReleasedObject
              : never
/**
 * Apply filters to a song collection.
 *
 * The filter object points to a song index from the original song collection array rather than
 * copying the whole song object.
 * - - - -
 * @param {DTAFile[]} songs The collection of songs you want to apply filters to.
 * @param {T} sortedBy The main sorting option of the songs.
 * @param {SongFilterOptions | undefined} options An object to change the behavior of the filtering process and results.
 * @returns {SongFilterReturnType<T>} An object representing all songs filtered under the provided sort option.
 */
export const filterDTA = <T extends SongFilterSortingTypes = 'title'>(
  songs: DTAFile[],
  sortedBy: T,
  options?: SongFilterOptions
): DTAFilteringReturnType<T> => {
  const opts = useDefaultOptions<SongFilterOptions, true>(
    {
      instrument: 'band',
      keysSupport: null,
      proGtrBassSupport: null,
      albumQuantityThreshold: 3,
    },
    options
  )

  const { instrument, albumQuantityThreshold } = opts
  const allSongsWithIndex = addIndexToDTAFileList(songs)
  const allSongsFiltered = applyGeneralFilters(allSongsWithIndex, opts)

  switch (sortedBy) {
    case 'title':
    default:
      return filterSongsByTitle(allSongsFiltered) as DTAFilteringReturnType<T>
    case 'genre':
      return filterSongsByGenre(allSongsFiltered) as DTAFilteringReturnType<T>
    case 'song_difficulty':
      return filterSongsBySongDifficulty(
        allSongsFiltered,
        instrument
      ) as DTAFilteringReturnType<T>
    case 'author':
      return filterSongsByAuthor(allSongsFiltered) as DTAFilteringReturnType<T>
    case 'artist':
      return filterSongsByArtist(
        allSongsFiltered,
        albumQuantityThreshold
      ) as DTAFilteringReturnType<T>
    case 'year_released':
      return filterSongsByYearReleased(
        allSongsFiltered
      ) as DTAFilteringReturnType<T>
  }
}
