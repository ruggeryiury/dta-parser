import { DTAContentDocument, DTADocument } from '../@types/DTADocument'
import { createDTA } from '../core/createDTA'
import { SortByOptionsTypes, sortDTA } from '../core/sortDTA'

/**
 * Returns an array of `DTADocument` objects from a JSON representation of a parsed song contents.
 * - - - -
 * @param {string} jsonFile The JSON file contents. It can be either a `DTAContentDocument` object,
 * or an array of `DTAContentDocument` objects.
 * @param {SortByOptionsTypes} sortBy `OPTIONAL` The sorting method.
 * @returns {DTADocument} A new array of `DTADocument` objects.
 */
export const JSONtoDTA = (
    jsonFile: DTAContentDocument | DTAContentDocument[],
    sortBy?: SortByOptionsTypes
): DTADocument[] => {
    const returnArray: DTADocument[] = []

    if (Array.isArray(jsonFile)) {
        jsonFile.forEach((song) => {
            const newDTA = createDTA()
            newDTA.content = song
            returnArray.push(newDTA)
        })

        if (sortBy) {
            return sortDTA(returnArray, sortBy)
        }

        return returnArray
    }

    const newDTA = createDTA()
    newDTA.content = jsonFile
    returnArray.push(newDTA)
    return returnArray
}
