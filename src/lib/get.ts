import { DTAFileContents } from '../@types/dta'
import { leadingArticleToTrailing, omitLeadingArticle } from '../utils/stringProcessors'

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

/**
 * Gets and processes the song title from a `DTAFileContents`.
 * - - - -
 * @param {DTAFileContents} song The song you want to get the song title from.
 * @param {GetNamingOptions} options `OPTIONAL` Customize options for the song title's return.
 * @returns {string} The song title processed.
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
 * Gets and processes the song artist from a `DTAFileContents`.
 * - - - -
 * @param {DTAFileContents} song The song you want to get the song artist from.
 * @param {GetNamingOptions} options `OPTIONAL` Customize options for the song artist's return.
 * @returns {string} The song artist processed.
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
