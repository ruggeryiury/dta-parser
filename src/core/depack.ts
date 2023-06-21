/**
 * Splits all songs metadata from a .dta pack file.
 * @returns An `Array` with all songs from the pack splited.
 * @since v0.1.0
 */
export const depackDTA = (
    /**
     * The .dta file contents.
     * - - - -
     */
    dtaFileContents: string
): string[] => {
    const joinLines = dtaFileContents.replaceAll('\r\n', '').trim()
    const removeSpaces = joinLines.replace(/\s+/g, ' ').trim()
    const operators = {
        beingProcessed: false,
        pIndex: 0,
        song: '',
        returnValue: [] as string[],
    }
    let { beingProcessed, pIndex, song } = operators
    const { returnValue } = operators

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
            } else {
                song += char
                return
            }
        }
    })

    return returnValue
}
