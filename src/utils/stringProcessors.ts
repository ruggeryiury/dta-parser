/**
 * Removes the leading article from a string, if any.
 * - - - -
 * @param {string} text The text you want to be processed.
 * @returns {string} The text processed.
 */
export const omitLeadingArticle = (text: string): string => {
  const articles = ['a', 'an', 'the']
  const words = text.split(' ')
  const firstWord = words[0]
  const hasLeadingArticle = articles.includes(firstWord.toLowerCase())
  if (hasLeadingArticle) {
    return words.slice(1).join(' ')
  }

  return words.join(' ')
}

/**
 * Puts the leading article at the end to the string, separated with a comma, if any.
 * - - - -
 * @param {string} text The text you want to be processed.
 * @returns {string} The text processed.
 */
export const leadingArticleToTrailing = (text: string): string => {
  const articles = ['a', 'an', 'the']
  const words = text.split(' ')
  const firstWord = words[0]
  const hasLeadingArticle = articles.includes(firstWord.toLowerCase())
  if (hasLeadingArticle) {
    return `${words.slice(1).join(' ')}, ${firstWord}`
  }

  return words.join(' ')
}

/**
 * Replaces quote character (`"`) to slash Q (`\q`).
 *
 * Slash Q replaces the quote character on a DTA File.
 * - - - -
 * @param {string} text The text you want to be processed.
 * @returns {string} The text processed.
 */
export const quoteToSlashQ = (text: string): string => text.replace(/"/g, '\\q')

/**
 * Replaces slash Q (`\q`) to quote character (`"`).
 *
 * Slash Q replaces the quote character on a DTA File.
 * - - - -
 * @param {string} text The text you want to be processed.
 * @returns {string} The text processed.
 */
export const slashQToQuote = (text: string): string => text.replace(/\\q/g, '"')

type TabGeneratorNewLineTypes = 'start' | 'end' | 'both'

/**
 * Generates a string containing tab characters ('\t') repeated a specified number of times.
 * - - - -
 * @param {number} tabCount The number of tab characters to repeat. Default is `1`.
 * @param {TabGeneratorNewLineTypes} newLine `OPTIONAL` Places a new line charater wherever you want. Default is `'start'`.
 * @returns {string} A string with '\n' charaters and '\t' characters repeated `tabCount` times.
 */
export const genTabs = (tabCount = 1, newLine: TabGeneratorNewLineTypes = 'start'): string =>
  `${newLine === 'start' || newLine === 'both' ? '\n' : ''}${'\t'.repeat(tabCount)}${newLine === 'end' || newLine === 'both' ? '\n' : ''}`
