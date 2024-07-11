import {
  leadingArticleToTrailing,
  omitLeadingArticle,
  useDefaultOptions,
} from '../utils.js'

export type LeadingArticleTypes = 'emit' | 'omit' | 'trailing'

export interface DTAStringValueFormattingOptions {
  /**
   * You can specify how the leading article will be
   * placed on the string. Default is `'emit'`.
   * - - - -
   * - `emit`: Default option. Will return the whole
   * name/artist as it is.
   *
   * Ex.: ``An Example`` => `An Example`.
   * - - - -
   * - `omit`: Will return the name/artist with the
   * leading article ommited.
   *
   * Ex.: `An Example` => `Example`.
   * - - - -
   * - `trailing`: Will return the name/artist with the
   * leading article on the end of the string, separated with
   * a comma.
   *
   * Ex.: `An Example` => `Example, An`.
   */
  leadingArticle?: LeadingArticleTypes
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
export const formatDTAStringValue = (
  str: string,
  options?: DTAStringValueFormattingOptions
): string => {
  const opts = useDefaultOptions<DTAStringValueFormattingOptions, true>(
    { leadingArticle: 'emit', quoted: false },
    options
  )
  const { leadingArticle, quoted } = opts
  let returnValue = ''

  if (leadingArticle === 'emit') returnValue = str
  else if (leadingArticle === 'omit') returnValue = omitLeadingArticle(str)
  else returnValue = leadingArticleToTrailing(str)

  if (quoted) {
    returnValue = `"${returnValue}"`
  }

  return returnValue
}
