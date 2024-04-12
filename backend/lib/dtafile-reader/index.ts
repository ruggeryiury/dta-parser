import { existsSync, lstatSync } from 'node:fs'
import { readFile, readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { detect } from 'jschardet'
import DTAParser, { DTAParserExportTypes, DTAParserOptions, DTAParserReturnType } from '../../../src'

/**
 * Asynchronously reads a `.dta` file (or a directory with `.dta` files) and returns their contents.
 * - - - -
 * @param {string} pathStr The path of the `.dta` file/directory with `.dta` files.
 * @returns {Promise<string>} The `.dta` file contents (or all `.dta` files contents in a directory merged).
 */
export const readDTAFileContents = async (pathStr: string): Promise<string> => {
  let newFileContents = ''

  if (existsSync(pathStr) && lstatSync(pathStr).isDirectory()) {
    const folderFiles = await readdir(pathStr)

    await folderFiles.reduce<Promise<string>>(async (prev, curr) => {
      await prev
      if (curr.endsWith('.dta')) {
        const filePath = resolve(pathStr, curr)

        const fileBuffer = await readFile(filePath)
        if (detect(fileBuffer).encoding === 'windows-1252') {
          newFileContents += `${await readFile(filePath, 'latin1')}\n`
        } else {
          newFileContents += `${await readFile(filePath, 'utf-8')}\n`
        }
      }

      return curr
    }, Promise.resolve(''))
  } else if (existsSync(pathStr) && lstatSync(pathStr).isFile()) {
    const fileBuffer = await readFile(pathStr)
    if (detect(fileBuffer).encoding === 'windows-1252') {
      newFileContents += `${await readFile(pathStr, 'latin1')}\n`
    } else {
      newFileContents += `${await readFile(pathStr, 'utf-8')}\n`
    }
  }

  return newFileContents
}

/**
 * Asynchronously reads a `.dta` file (or a directory with `.dta` files) and returns their parsed contents.
 * - - - -
 * @param {string} pathStr The path of the `.dta` file/directory with `.dta` files.
 * @param {DTAParserOptions<RT>} parserOptions `OPTIONAL` Customizing options for the parsing process.
 * @returns {Promise<DTAParserReturnType<RT>>} The parsed `.dta` file contents (or all `.dta` files contents in a directory merged).
 */
const DTAFileReader = async <RT extends DTAParserExportTypes>(pathStr: string, parserOptions?: DTAParserOptions<RT>): Promise<DTAParserReturnType<RT>> => {
  const contents = await readDTAFileContents(pathStr)
  return DTAParser(contents, parserOptions)
}

export default DTAFileReader
