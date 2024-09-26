/**
 * Tells if the string has specific Latin-1 characters compared to ASCII.
 * - - - -
 * @param {string} input The string to be evaluated.
 * @returns {boolean} A boolean value that tells if the string has specific Latin-1 characters compared to ASCII.
 */
export const containsLatin1SpecificChars = (input: string): boolean => {
  // Loop through each character in the string
  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i)

    // Check if the character is within the Latin-1 specific range (128–255)
    if (charCode >= 128 && charCode <= 255) {
      return true
    }
  }
  return false
}
