import { DTAContentDocument, DTADocument } from '../@types/DTADocument'

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
