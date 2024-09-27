/**
 * Checks if a string is a valid URL.
 * - - - -
 * @param {string} value The string you want to evaluate.
 * @returns {boolean} A boolean value that tells if the provided string is a link or not.
 */
export const isURL = (value: string): boolean => value.startsWith('http') || value.startsWith('https')
