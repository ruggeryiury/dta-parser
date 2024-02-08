import { DTAFile } from './dta'
import { leadingArticleToTrailing, omitLeadingArticle } from '../../utils/stringProcessors'
import { RankTypes, rankCalculator } from '../../utils/rankCalculations'
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

export type GetRankReturnType<P extends RankTypes, T extends GetRankTypeOptions> = P extends 'band'
  ? T extends 'number'
    ? BandRankingNumbers
    : T extends 'verbose'
    ? BandRankingNames
    : BandRankingNamesAsDots
  : // P extends else
  T extends 'number'
  ? InstrRankingNumbers
  : T extends 'verbose'
  ? InstrRankingNames
  : InstrRankingNamesAsDots

/**
 * Fetches the song title from a `DTAFile`.
 * - - - -
 * @param {DTAFile} song The song you want to get the song title from.
 * @param {GetNamingOptions} options `OPTIONAL` Customize options for the song title's return.
 * @returns {string} The song title.
 */
export const getSongTitle = (song: DTAFile, options?: GetNamingOptions): string => {
  if (!options) options = { leadingArticle: 'emit', quoted: false }
  else options = { leadingArticle: 'emit', quoted: false, ...options }
  const { leadingArticle, quoted } = options
  let returnValue = ''

  if (leadingArticle === 'emit') returnValue = song.name
  else if (leadingArticle === 'omit') returnValue = omitLeadingArticle(song.name)
  else returnValue = leadingArticleToTrailing(song.name)

  if (quoted === true) {
    returnValue = `"${returnValue}"`
  }

  return returnValue
}

/**
 * Fetches the song artist from a `DTAFile`.
 * - - - -
 * @param {DTAFile} song The song you want to get the song artist from.
 * @param {GetNamingOptions} options `OPTIONAL` Customize options for the song artist's return.
 * @returns {string} The song artist.
 */
export const getSongArtist = (song: DTAFile, options?: GetNamingOptions): string => {
  if (!options) options = { leadingArticle: 'emit', quoted: false }
  else options = { leadingArticle: 'emit', quoted: false, ...options }
  const { leadingArticle, quoted } = options
  let returnValue = ''

  if (leadingArticle === 'emit') returnValue = song.artist
  else if (leadingArticle === 'omit') returnValue = omitLeadingArticle(song.artist)
  else returnValue = leadingArticleToTrailing(song.artist)

  if (quoted === true) {
    returnValue = `"${returnValue}"`
  }

  return returnValue
}

/**
 * Fetches the song's album title from a `DTAFile`. Returns `undefined` if the song has no album title.
 * - - - -
 * @param {DTAFile} song The song you want to get the song's album title from.
 * @param {GetNamingOptions} options `OPTIONAL` Customize options for the song album title's return.
 * @returns {string | undefined} The song album title, returns `undefined` if the song has no album title.
 */
export const getSongAlbumTitle = (song: DTAFile, options?: GetNamingOptions): string | undefined => {
  if (!options) options = { leadingArticle: 'emit', quoted: false }
  else options = { leadingArticle: 'emit', quoted: false, ...options }
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
 * Fetches the given instrument ranking from a `DTAFile`.
 * - - - -
 * @param {DTAFile} song The song you want to fetch the ranking from.
 * @param {P} part The instrument you want to fetch the ranking from.
 * @param {T} type `OPTIONAL` Customize the return type of the function.
 *
 * Valid values are:
 * - `'number'`: Returns as a numeral ranking type from `-1` (No Part) to `6` (Impossible). Is the default value.
 * - `'verbosed'`: Returns as a string ranking type from `'No Part'` to `'Impossible'`.
 * - `'verbosed'`: Returns as a string ranking type from `'No Part'` to `'Devil Dots'`.
 * @returns {GetRankReturnType<P, T>} The instrument ranking from the given instrument.
 */
export const getSongRank = <P extends RankTypes, T extends GetRankTypeOptions>(song: DTAFile, part: P, type: T = 'number' as T): GetRankReturnType<P, T> => {
  const minusOne = rankCalculator(part, song[`rank_${part}`])
  if (type === 'number' || type === undefined) return minusOne as GetRankReturnType<P, T>
  const verbosed = localeKeyToValue.rank(minusOne)
  if (type === 'verbose') return verbosed as GetRankReturnType<P, T>
  const dotVerbosed = localeKeyToValue.rank(minusOne, true)
  return dotVerbosed as GetRankReturnType<P, T>
}
