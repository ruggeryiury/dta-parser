import { InstrumentRankingsNumberOptions, InstrumentRankingsVerbosedOptions } from '../lib/locale'

const ranksMap = {
  drum: [124, 151, 178, 242, 345, 448],
  bass: [135, 181, 228, 293, 364, 436],
  guitar: [139, 176, 221, 267, 333, 409],
  vocals: [132, 175, 218, 279, 353, 427],
  keys: [153, 211, 269, 327, 385, 443],
  real_keys: [153, 211, 269, 327, 385, 443],
  real_bass: [150, 208, 267, 325, 384, 442],
  real_guitar: [150, 208, 267, 325, 384, 442],
  band: [163, 215, 243, 267, 292, 345],
}

export type RankTypes = keyof typeof ranksMap

/**
 * Calculates the ranking from a desired instrument part
 * to a more understandeable, commonly-used ranking number system.
 *
 * The results can be from `-1` (meaning "No Part") to `6` (meaning "Impossible").
 * - - - -
 * @param {RankTypes} type The instrument part you want to be calculated.
 * @param {number | undefined} rank `OPTIONAL` The rank number from the `.dta` file.
 * @returns {number} The calculated instrument rank.
 */
export const rankCalculator = (type: RankTypes, rank?: number): InstrumentRankingsNumberOptions => {
  let parseRankReturn = -1

  if (rank === undefined || rank === 0) {
    return parseRankReturn as InstrumentRankingsNumberOptions
  }

  parseRankReturn++

  ranksMap[type].forEach((value) => {
    if (rank >= value) parseRankReturn++
  })

  return parseRankReturn as InstrumentRankingsNumberOptions
}

/**
 * Returns a `.dta` file-compatible ranking system number based on the given options.
 * - - - -
 * @param {RankTypes} type The instrument part you want to be processed to.
 * @param {InstrumentRankingsOptions} rank A string that indicates the ranking you want for the instrument part.
 * @returns {number} A `.dta` file-compatible ranking system number.
 */
export const rankValuesToDTARankSystem = (type: RankTypes, rank: InstrumentRankingsNumberOptions | InstrumentRankingsVerbosedOptions): number => {
  if (rank === 'No Part' || rank === -1) return 0
  else if (rank === 'Warmup' || rank === 0) return 1
  else if (rank === 'Apprentice' || rank === 1) return ranksMap[type][0]
  else if (rank === 'Solid' || rank === 2) return ranksMap[type][1]
  else if (rank === 'Moderate' || rank === 3) return ranksMap[type][2]
  else if (rank === 'Challenging' || rank === 4) return ranksMap[type][3]
  else if (rank === 'Nightmare' || rank === 5) return ranksMap[type][4]
  else {
    // if (rank === 'Impossible' || rank === 6)
    return ranksMap[type][5]
  }
}

/**
 * Calculates a generic band ranking number based on the sum of the
 * ranking of all playable instruments divided by the quantity of playable instruments.
 * - - - -
 * @param {number} count The sum of the ranking of all playable instruments.
 * @param {number} quantity The quantity of playable instruments.
 * @returns {number} A generic band ranking number.
 */
export const bandAverageRankCalculator = (count: number, quantity: number): number => Number((count / quantity).toFixed())
