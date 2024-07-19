import type { DTAFileWithIndex, SongFilterOptions } from '../core.js'

/**
 * Apply filters that is not related to the order of the songs.
 * - - - -
 * @param {DTAFileWithIndex[]} allSongsWithIndex The collection of songs you want to apply filters to.
 * @param {Required<SongFilterOptions>} options An object to change the behavior of the filtering process and results.
 * @returns {DTAFileWithIndex[]} An array with songs filtered based on the provided filtering options.
 */
export const applyGeneralFilters = (allSongsWithIndex: DTAFileWithIndex[], options: Required<SongFilterOptions>): DTAFileWithIndex[] => {
  const { keysSupport, proGtrBassSupport } = options
  return allSongsWithIndex.filter((song) => {
    let passed = true

    if (proGtrBassSupport !== null) {
      if (proGtrBassSupport) {
        if (!song.rank_real_guitar || !song.rank_real_bass) passed = false
      } else {
        if (song.rank_real_guitar ?? song.rank_real_bass) passed = false
      }
    }

    if (keysSupport !== null) {
      if (keysSupport) {
        if (!song.rank_keys || !song.rank_real_keys) passed = false
      } else {
        if (song.rank_keys ?? song.rank_keys) passed = false
      }
    }

    if (passed) return song
    else return false
  })
}
