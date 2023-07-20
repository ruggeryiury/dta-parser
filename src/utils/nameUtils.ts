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
export const leadingArticle2Trailing = (text: string): string => {
    const articles = ['a', 'an', 'the']
    const words = text.split(' ')
    const firstWord = words[0]
    const hasLeadingArticle = articles.includes(firstWord.toLowerCase())
    if (hasLeadingArticle) {
        return `${words.slice(1).join(' ')}, ${firstWord}`
    }

    return words.join(' ')
}