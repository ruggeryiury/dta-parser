/**
 * Separates all songs from a `.dta` file.
 * - - - -
 * @param {string} dtaFileContents The `.dta` file contents.
 * @returns {string[]} An array with each song content separated to be parsed individually.
 */
export const depackDTA = (dtaFileContents: string): string[] => {
  const joinLines = dtaFileContents.replaceAll('\r\n', '').trim()
  const removeSpaces = joinLines.replace(/\s+/g, ' ').trim()

  let beingProcessed = false,
    pIndex = 0,
    song = ''

  const returnValue = [] as string[]

  Array.from(removeSpaces).forEach((char) => {
    if (!beingProcessed && char === '(') {
      beingProcessed = true
      song += char
      return
    }

    if (beingProcessed) {
      if (char === '(') {
        pIndex++
        song += char
        return
      } else if (char === ')' && pIndex !== 0) {
        pIndex--
        song += char
        return
      } else if (char === ')' && pIndex === 0) {
        const newSong = song + char
        returnValue.push(newSong)
        song = ''
        beingProcessed = false
        return
      }

      song += char
      return
    }
  })

  return returnValue
}
