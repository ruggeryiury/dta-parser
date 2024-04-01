import { leadingArticleToTrailing, omitLeadingArticle } from '../../utils'

export interface DTAStringValueFormattingOptions {
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
 * Formats any string value from a `DTAFile` object or `Song` class.
 * - - - -
 * @param {string} str The string you want to be processed
 * @param {DTAStringValueFormattingOptions} options `OPTIONAL` Customize options for the song title's return value.
 * @returns {string} The song title.
 */
export const formatDTAStringValue = (str: string, options?: DTAStringValueFormattingOptions): string => {
  if (!options) options = { leadingArticle: 'emit', quoted: false }
  else options = { leadingArticle: 'emit', quoted: false, ...options }
  const { leadingArticle, quoted } = options
  let returnValue = ''

  if (leadingArticle === 'emit') returnValue = str
  else if (leadingArticle === 'omit') returnValue = omitLeadingArticle(str)
  else returnValue = leadingArticleToTrailing(str)

  if (quoted === true) {
    returnValue = `"${returnValue}"`
  }

  return returnValue
}
