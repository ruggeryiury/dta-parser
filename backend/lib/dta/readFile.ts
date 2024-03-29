import fs from 'fs'
import path from 'path'
import DTAParser, { DTAParserOptions, DTAParserReturnType } from '../../../src'
/**
 * Synchronously reads a `.dta` file (or a directory with `.dta` files) and returns their contents.
 * - - - -
 * @param {string} pathStr The path of the `.dta` file/directory with `.dta` files.
 * @returns {string} The `.dta` file contents (or all `.dta` files contents in a directory merged).
 */
export const readDTAFileSync = (pathStr: string): string => {
  let newFileContents = ''

  if (fs.existsSync(pathStr) && fs.lstatSync(pathStr).isDirectory()) {
    const folderFiles = fs.readdirSync(pathStr)

    folderFiles.reduce<string>((_, curr) => {
      if (curr.endsWith('.dta')) {
        const filePath = path.resolve(pathStr, curr)

        let contents = fs.readFileSync(filePath, 'utf-8')

        if (contents.includes('�')) {
          contents = fs.readFileSync(filePath, 'latin1')
        }

        newFileContents += `${contents}\n`
      }

      return curr
    }, '')
  } else if (fs.existsSync(pathStr) && fs.lstatSync(pathStr).isFile()) {
    let fileContents = fs.readFileSync(pathStr, 'utf-8')

    if (fileContents.includes('�')) {
      fileContents = fs.readFileSync(pathStr, 'latin1')
    }
    newFileContents += fileContents
  }

  return newFileContents
}

/**
 * Asynchronously reads a `.dta` file (or a directory with `.dta` files) and returns their contents.
 * - - - -
 * @param {string} pathStr The path of the `.dta` file/directory with `.dta` files.
 * @returns {Promise<string>} The `.dta` file contents (or all `.dta` files contents in a directory merged).
 */
export const readDTAFile = async (pathStr: string): Promise<string> => {
  let newFileContents = ''

  if (fs.existsSync(pathStr) && fs.lstatSync(pathStr).isDirectory()) {
    const folderFiles = await fs.promises.readdir(pathStr)

    await folderFiles.reduce<Promise<string>>(async (prev, curr) => {
      await prev
      if (curr.endsWith('.dta')) {
        const filePath = path.resolve(pathStr, curr)

        let contents = await fs.promises.readFile(filePath, 'utf-8')

        if (contents.includes('�')) {
          contents = await fs.promises.readFile(filePath, 'latin1')
        }

        newFileContents += `${contents}\n`
      }

      return curr
    }, Promise.resolve(''))
  } else if (fs.existsSync(pathStr) && fs.lstatSync(pathStr).isFile()) {
    let fileContents = await fs.promises.readFile(pathStr, 'utf-8')

    if (fileContents.includes('�')) {
      fileContents = await fs.promises.readFile(pathStr, 'latin1')
    }
    newFileContents += fileContents
  }

  return newFileContents
}

/**
 * Synchronously reads a `.dta` file (or a directory with `.dta` files) and returns their contents.
 * - - - -
 * @param {string} pathStr The path of the `.dta` file/directory with `.dta` files.
 * @param {DTAParserOptions<RT>} parserOptions `OPTIONAL` Customizing options for the parsing process.
 * @returns {DTAParserReturnType<RT>} The parsed `.dta` file contents (or all `.dta` files contents in a directory merged).
 */
export const readParseDTAFileSync = <RT extends boolean | undefined = undefined>(pathStr: string, parserOptions?: DTAParserOptions<RT>): DTAParserReturnType<RT> => {
  const contents = readDTAFileSync(pathStr)
  return DTAParser(contents, parserOptions)
}

/**
 * Asynchronously reads a `.dta` file (or a directory with `.dta` files) and returns their parsed contents.
 * - - - -
 * @param {string} pathStr The path of the `.dta` file/directory with `.dta` files.
 * @param {DTAParserOptions<RT>} parserOptions `OPTIONAL` Customizing options for the parsing process.
 * @returns {Promise<DTAParserReturnType<RT>>} The parsed `.dta` file contents (or all `.dta` files contents in a directory merged).
 */
export const readParseDTAFile = async <RT extends boolean | undefined = undefined>(pathStr: string, parserOptions?: DTAParserOptions<RT>): Promise<DTAParserReturnType<RT>> => {
  const contents = await readDTAFile(pathStr)
  return DTAParser(contents, parserOptions)
}
