import { DTAFile } from './dta'
import { RankTypes, rankCalculator } from '../utils/rankCalculations'
import { BandRankingNames, BandRankingNamesAsDots, BandRankingNumbers, InstrRankingNames, InstrRankingNamesAsDots, InstrRankingNumbers, localeKeyToValue } from './locale'

export interface GetNamingOptions {
  /** You can specify how the leading article will be
   * placed on the string. Default is `'emit'`.
   * - - - -
   * * `emit`: Default option. Will return the whole
   * name/artist as it is.
   *
   * Ex.: ``An Example`` => `An Example`.
   * - - - -
   * * `omit`: Will return the name/artist with the
   * leading article ommited.
   *
   * Ex.: `An Example` => `Example`.
   * - - - -
   * * `trailing`: Will return the name/artist with the
   * leading article on the end of the string, separated with
   * a comma.
   *
   * Ex.: `An Example` => `Example, An`.
   */
  leadingArticle?: 'emit' | 'omit' | 'trailing'
  /**
   * If `true`, the string will come quoted. Default is `false`.
   */
  quoted?: boolean
}

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