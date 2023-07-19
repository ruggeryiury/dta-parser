import { DTAContentDocument, DTADocument } from '../@types/DTADocument'
import { createDTA } from './create'

/**
 * Returns a new instance of `DTADocument` from JSON file contents.
 * @param {string} jsonFileContents The JSON file contents as string.
 * @returns {DTADocument} A new `DTADocument` instance in memory.
 */
export const JSONContenttoDTA = (jsonFileContents: string): DTADocument => {
    const newDTA = createDTA()
    newDTA.content = JSON.parse(jsonFileContents) as DTAContentDocument
    return newDTA
}
