import { DTAContentDocument, DTADocument } from '../@types/DTADocument'
import { createDTA } from './createDTA'

/**
 * Returns a JSON object representation of a parsed song.
 * - - - -
 * @param {DTADocument} song The parsed song you want the contents from.
 * @returns {DTAContentDocument} A JSON object representation of a parsed song.
 */
export const DTAtoJSON = (song: DTADocument): DTAContentDocument => {
    return song.content
}

/**
 * Returns a new instance of `DTADocument` from JSON file contents.
 * - - - -
 * @param {string} jsonFileContents The JSON file contents as string.
 * @returns {DTADocument} A new `DTADocument` instance in memory.
 */
export const JSONContenttoDTA = (jsonFileContents: string): DTADocument => {
    const newDTA = createDTA()
    newDTA.content = JSON.parse(jsonFileContents) as DTAContentDocument
    return newDTA
}
