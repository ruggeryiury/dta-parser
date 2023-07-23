import fs from 'fs'
import path from 'path'

/**
 * Asynchronously reads a directory and joins all `.dta` files inside a directory and returns their contents. If
 * the path is a direct `.dta` file, it will return the contents of this file
 * - - - -
 * @param {string} pathStr The path of the `.dta` files directory of `.dta` file.
 * @returns {Promise<string>} All `.dta` file contents merged as string.
 */
const readDTA = async (pathStr: string): Promise<string> => {
    let newFileContents = ''

    if (fs.existsSync(pathStr) && fs.lstatSync(pathStr).isDirectory()) {
        const folderFiles = await fs.promises.readdir(pathStr)

        await folderFiles.reduce<Promise<string>>(async (prev, curr) => {
            await prev
            if (curr.endsWith('.dta')) {
                const filePath = path.resolve(pathStr, curr)

                let contents = await fs.promises.readFile(filePath, 'utf-8')

                if (contents.split('').includes('�')) {
                    contents = await fs.promises.readFile(filePath, 'latin1')
                }

                newFileContents += `${contents}\n`
            }

            return curr
        }, Promise.resolve(''))
    } else if (fs.existsSync(pathStr) && fs.lstatSync(pathStr).isFile()) {
        let fileContents = await fs.promises.readFile(pathStr, 'utf-8')

        if (fileContents.split('').includes('�')) {
            fileContents = await fs.promises.readFile(pathStr, 'latin1')
        }
        newFileContents += fileContents
    }

    return newFileContents
}

interface DTANodeModule {
    /**
     * Asynchronously reads a directory and joins all `.dta` files inside a directory and returns their contents. If
     * the path is a direct `.dta` file, it will return the contents of this file
     * - - - -
     * @param {string} pathStr The path of the `.dta` files directory of `.dta` file.
     * @returns {Promise<string>} All `.dta` file contents merged as string.
     */
    read: typeof readDTA
}
/**
 * Utility module for Node.js operations.
 *
 * `WARNING`: This whole module won't work on browser environments.
 */
const DTANode: DTANodeModule = {
    read: readDTA,
}

export default DTANode
