/**
 * Splits all songs metadata from a .dta pack file.
 * @param dtaFileContents The .dta file contents.
 * @returns An `Array` with all songs from the pack splited.
 * @since v0.1.0
 */
export const depackDTA = (dtaFileContents: string): string[] => {
    const lineSplit = dtaFileContents.split('\r\n')
    let newContent = ''
    const depackedArray: string[] = []

    lineSplit.forEach((value) => {
        if (value.at(0) === '(') {
            newContent = `${value}\r\n`
            return
        } else if (value.at(0) === ')') {
            newContent = newContent.concat(`${value}\r\n`)
            depackedArray.push(newContent)
            return
        }
        newContent = newContent.concat(`${value}\r\n`)
        return
    })

    return depackedArray
}
