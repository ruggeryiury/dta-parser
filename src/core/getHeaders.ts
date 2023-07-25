import { DTADocument } from '../@types/DTADocument'
import { FilterSongNameTypes, FilterSortedByTypes } from '../exports'

export type FilterHeadersTypes = FilterSortedByTypes

export type FilterHeadersReturn<H extends FilterHeadersTypes> = H extends 'name'
    ? FilterSongNameTypes[]
    : H extends 'artist'
    ? string[]
    : never

/**
 * Returns all possible values from a parsed
 * songs array based on the given type option.
 * - - - -
 * @param {DTADocument[]} songs An array of parsed songs.
 * @param {FilterHeadersTypes} type The type of the value you want to get values from.
 * @returns {string[]} An array with strings representing the available values of the parsed songs array based on the given type option.
 */
export const getHeaders = <H extends FilterHeadersTypes>(
    songs: DTADocument[],
    type: H
): FilterHeadersReturn<H> => {
    let returnArray: FilterHeadersReturn<H>

    if (type === 'name') {
        const allFirstChar: string[] = []
        let has123 = false

        const charSet = new Set(
            songs.map((song) =>
                song.get('name', { leadingArticle: 'omit' }).slice(0, 1)
            )
        )

        charSet.forEach((char) => {
            if (/^[^a-zA-Z]/.test(char) && !has123) {
                allFirstChar.push('123')
                has123 = true
            } else {
                allFirstChar.push(char)
            }
        })

        returnArray = allFirstChar.sort((a, b) => {
            if (a.toLowerCase() > b.toLowerCase()) return 1
            else if (a.toLowerCase() < b.toLowerCase()) return -1
            return 0
        }) as FilterHeadersReturn<H>
    } else {
        // if (type === 'artist')
        returnArray = Array.from(
            new Set(
                songs
                    .map((song) =>
                        song.get('artist', { leadingArticle: 'omit' })
                    )
                    .sort((a, b) => {
                        if (a.toLowerCase() > b.toLowerCase()) return 1
                        else if (a.toLowerCase() < b.toLowerCase()) return -1
                        return 0
                    })
            )
        ) as FilterHeadersReturn<H>
    }

    return returnArray
}
