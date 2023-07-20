import fs from 'fs/promises'
import path from 'path'

/**
 * Joins all `.dta` files inside a directory and returns their contents.
 * - - - -
 * @param {string | undefined} pathStr `OPTIONAL` The path of the `.dta` files directory. Defaults to `C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\ruggy-customs-projects\\packages\\dta_files`
 * @returns {Promise<string>} All `.dta` file contents merged as string.
 */
const readDTAsfromFolder = async (pathStr?: string): Promise<string> => {
    let workingPath = ''
    if (!pathStr) workingPath = 'C:\\Users\\Ruggery\\Documents\\Visual Studio Code\\Projects\\ruggy-customs-projects\\packages\\dta_files'
    else workingPath = pathStr

    const folderFiles = await fs.readdir(workingPath)

    let newFileContents = ''
    await folderFiles.reduce<Promise<string>>(async (prev, curr) => {
        await prev
        if (curr.endsWith('.dta')) {
            const filePath = path.resolve(workingPath, curr)

            const contents = await fs.readFile(filePath, { encoding: 'utf-8' })
            newFileContents += `${contents}\n`
        }

        return curr
    }, Promise.resolve(''))

    return newFileContents
}

interface DTANodeModule {
    /**
     * Joins all `.dta` files inside a directory.
     * - - - -
     * @param pathStr The path of the `.dta` files directory.
     */
    readDTAsfromFolder: typeof readDTAsfromFolder
}
/**
 * Utility module for Node.js operations.
 *
 * `WARNING`: This whole module won't work on browser environments.
 */
const DTANode: DTANodeModule = {
    readDTAsfromFolder,
}

export default DTANode
