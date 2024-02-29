import { omitLeadingArticle, leadingArticleToTrailing } from '../utils/stringProcessors'
import { GetNamingOptions } from './get'

/**
 * Formats any
 * - - - -
 * @param {string} str
 * @param {GetNamingOptions} options `OPTIONAL` Customize options for the song title's return value.
 * @returns {string} The song title.
 */
export const formatDTAStringValue = (str: string, options?: GetNamingOptions): string => {
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
