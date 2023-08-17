import { DTAContentDocument, DTADocument } from '../@types/DTADocument'
import { SortByOptionsTypes, sortDTA } from '../core/sortDTA'

/**
 * Returns a JSON object representation of a parsed song.
 * - - - -
 * @param {DTADocument} song The parsed song you want the contents from.
 * @returns {DTAContentDocument} A JSON object representation of a parsed song.
 */
export const DTAtoJSON = (song: DTADocument): DTAContentDocument => {
    const content = song.content

    return content
}

/**
 * Returns an array with parsed songs objects converted to JSON.
 * - - - -
 * @param {DTADocument[]} songs An array with parsed songs objects to be converted.
 * @param {SortByOptionsTypes} sortBy `OPTIONAL` The sorting method.
 * @returns {DTAContentDocument} An array with parsed songs objects converted to JSON.
 */
export const DTAArraytoJSONArray = (
    songs: DTADocument[],
    sortBy?: SortByOptionsTypes
): DTAContentDocument[] => {
    const returnArray: DTAContentDocument[] = []

    if (sortBy) {
        sortDTA(songs, sortBy).forEach((sort) => returnArray.push(sort.json()))
    } else {
        songs.forEach((song) => returnArray.push(song.json()))
    }

    return returnArray
}
