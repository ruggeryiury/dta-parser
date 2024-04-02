import { BandRankingNames, BandRankingNamesAsDots, BandRankingNumbers, DTAFile, InstrRankingNames, InstrRankingNamesAsDots, InstrRankingNumbers, localeKeyToValue } from '..'
import { RankTypes, rankCalculator } from '../../utils'

export type GetRankTypeOptions = 'number' | 'verbose' | 'verboseDots'

export type GetRankReturnType<P extends RankTypes, T extends GetRankTypeOptions | undefined> = P extends 'band'
  ? T extends 'number'
    ? BandRankingNumbers
    : T extends 'verbose'
      ? BandRankingNames
      : T extends undefined
        ? BandRankingNumbers
        : BandRankingNamesAsDots
  : // P extends else
    T extends 'number'
    ? InstrRankingNumbers
    : T extends 'verbose'
      ? InstrRankingNames
      : T extends undefined
        ? InstrRankingNumbers
        : InstrRankingNamesAsDots

/**
 * Fetches the given instrument ranking from a `DTAFile`.
 * - - - -
 * @param {DTAFile} song The song you want to fetch the ranking from.
 * @param {P} part The instrument you want to fetch the ranking from.
 * @param {T} type `OPTIONAL` Customize the return type value.
 *
 * Valid values are:
 * - `'number'`: Returns as a numeral ranking type from `-1` (No Part) to `6` (Impossible). Is the default value.
 * - `'verbosed'`: Returns as a string ranking type from `'No Part'` to `'Impossible'`.
 * - `'verboseDots'`: Returns as a string ranking type from `'No Part'` to `'Devil Dots'`.
 * @returns {GetRankReturnType<P, T>} The instrument ranking from the given instrument.
 */
export const getSongRank = <P extends RankTypes, T extends GetRankTypeOptions | undefined = undefined>(song: DTAFile, part: P, type?: T): GetRankReturnType<P, T> => {
  const minusOne = rankCalculator(part, song[`rank_${part}`])
  if (type === 'number' || type === undefined) return minusOne as GetRankReturnType<P, T>
  const verbosed = localeKeyToValue.rank(minusOne)
  if (type === 'verbose') return verbosed as GetRankReturnType<P, T>
  const dotVerbosed = localeKeyToValue.rank(minusOne, true)
  return dotVerbosed as GetRankReturnType<P, T>
}
