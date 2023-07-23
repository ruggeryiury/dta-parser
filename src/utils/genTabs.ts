/**
 * Generates a string containing tab characters ('\t') repeated a specified number of times.
 * - - - -
 * @param {number} tabCount The number of tab characters to repeat. Default is `1`.
 * @param {'start' | 'end' | 'both' | undefined} newLine `OPTIONAL` Places a new line charater wherever you want. Default is `'start'`.
 * @returns {string} A string with '\n' charaters and '\t' characters repeated `tabCount` times.
 */
export const genTabs = (tabCount = 1, newLine: 'start' | 'end' | 'both' = 'start'): string => {
    return `${newLine === 'start' || newLine === 'both' ? '\n' : ''}${'\t'.repeat(tabCount)}${newLine === 'end' || newLine === 'both' ? '\n' : ''}`
}
