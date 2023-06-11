/**
 * Splits songs metadata from a DTA file.
 * @param fileContent DTA file content as `string`.
 * @returns An `Array` with splitted song's as ``string``.
 * @since v0.1.0
 */
const depackDTA = (fileContent: string): string[] => {
    const lineSplit = fileContent.split('\r\n')
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

export default depackDTA
