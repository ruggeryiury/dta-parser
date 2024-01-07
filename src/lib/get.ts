import { DTAFileContents } from './dta'
import { leadingArticleToTrailing, omitLeadingArticle } from '../utils/stringProcessors'
import { RankTypes, rankCalculator } from '../utils/rankCalculations'
import {
  BandRankingsDotVerbosedOptions,
  BandRankingsNumberOptions,
  BandRankingsVerbosedOptions,
  InstrumentRankingsDotVerbosedOptions,
  InstrumentRankingsNumberOptions,
  InstrumentRankingsVerbosedOptions,
  RankLocaleOnlyBandNumberTypes,
  RankLocaleOnlyNumberTypes,
  getLocale,
} from './locale'

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

export type GetRankTypeOptions = -1 | 0 | 'verbose' | 'verboseDots'

export type GetRankReturnType<P extends RankTypes, T extends GetRankTypeOptions> = P extends 'band'
  ? T extends -1
    ? BandRankingsNumberOptions
    : T extends 0
    ? RankLocaleOnlyBandNumberTypes
    : T extends 'verbose'
    ? BandRankingsVerbosedOptions
    : BandRankingsDotVerbosedOptions
  : // P extends else
  T extends -1
  ? InstrumentRankingsNumberOptions
  : T extends 0
  ? RankLocaleOnlyNumberTypes
  : T extends 'verbose'
  ? InstrumentRankingsVerbosedOptions
  : InstrumentRankingsDotVerbosedOptions

/**
 * Fetches the song title from a `DTAFileContents`.
 * - - - -
 * @param {DTAFileContents} song The song you want to get the song title from.
 * @param {GetNamingOptions} options `OPTIONAL` Customize options for the song title's return.
 * @returns {string} The song title.
 */
export const getSongTitle = (song: DTAFileContents, options: GetNamingOptions = { leadingArticle: 'emit', quoted: false }): string => {
  const { leadingArticle, quoted } = options
  let returnValue = ''

  if (leadingArticle === 'emit') returnValue = song.name
  else if (leadingArticle === 'omit') returnValue = omitLeadingArticle(song.name)
  else returnValue = leadingArticleToTrailing(song.name)

  if (quoted !== undefined || quoted === true) {
    returnValue = `"${returnValue}"`
  }

  return returnValue
}

/**
 * Fetches the song artist from a `DTAFileContents`.
 * - - - -
 * @param {DTAFileContents} song The song you want to get the song artist from.
 * @param {GetNamingOptions} options `OPTIONAL` Customize options for the song artist's return.
 * @returns {string} The song artist.
 */
export const getSongArtist = (song: DTAFileContents, options: GetNamingOptions = { leadingArticle: 'emit', quoted: false }): string => {
  const { leadingArticle, quoted } = options
  let returnValue = ''

  if (leadingArticle === 'emit') returnValue = song.artist
  else if (leadingArticle === 'omit') returnValue = omitLeadingArticle(song.artist)
  else returnValue = leadingArticleToTrailing(song.artist)

  if (quoted !== undefined || quoted === true) {
    returnValue = `"${returnValue}"`
  }

  return returnValue
}

/**
 * Fetches the song's album title from a `DTAFileContents`. Returns `undefined` if the song has no album title.
 * - - - -
 * @param {DTAFileContents} song The song you want to get the song's album title from.
 * @param {GetNamingOptions} options `OPTIONAL` Customize options for the song album title's return.
 * @returns {string | undefined} The song album title, returns `undefined` if the song has no album title.
 */
export const getSongAlbumTitle = (song: DTAFileContents, options: GetNamingOptions = { leadingArticle: 'emit', quoted: false }): string | undefined => {
  const { leadingArticle, quoted } = options
  let returnValue = undefined

  if (song.album_name) {
    if (leadingArticle === 'emit') returnValue = song.album_name
    else if (leadingArticle === 'omit') returnValue = omitLeadingArticle(song.album_name)
    else returnValue = leadingArticleToTrailing(song.album_name)

    if (quoted === true) {
      returnValue = `"${returnValue}"`
    }
  }

  return returnValue
}

/**
 * Fetches the given instrument ranking from a `DTAFileContents`.
 * - - - -
 * @param {DTAFileContents} song The song you want to fetch the ranking from.
 * @param {P} part The instrument you want to fetch the ranking from.
 * @param {T} type `OPTIONAL` Customize the return type of the function.
 *
 * Valid values are:
 * - `-1` (number) Returns as a numeral ranking type from `-1` (No Part) to `6` (Impossible). Is the default value.
 * - `0` (number) Returns as a numberal ranking type from `0` (No Part) to `7` (Impossible).
 * - `'verbosed'` (string) Returns as a string ranking type from `'No Part'` to `'Impossible'`.
 * - `'verbosed'` (string) Returns as a string ranking type from `'No Part'` to `'Devil Dots'`.
 * @returns {GetRankReturnType<P, T>} The instrument ranking from the given instrument.
 */
export const getSongRank = <P extends RankTypes, T extends GetRankTypeOptions>(song: DTAFileContents, part: P, type: T = -1 as T): GetRankReturnType<P, T> => {
  const minusOne = rankCalculator(part, song[`rank_${part}`])
  if (type === -1 || type === undefined) return minusOne as GetRankReturnType<P, T>
  const zero = minusOne + 1
  if (type === 0) return zero as GetRankReturnType<P, T>
  const verbosed = getLocale.rank(minusOne)
  if (type === 'verbose') return verbosed as GetRankReturnType<P, T>
  const dotVerbosed = getLocale.rank(minusOne, true)
  return dotVerbosed as GetRankReturnType<P, T>
}
