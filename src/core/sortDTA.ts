import { DTADocument } from '../@types/DTADocument'
import { omitLeadingArticle } from '../utils/nameUtils'

export type SortByOptionsTypes =
    | 'id'
    | 'name'
    | 'artist'
    | 'artist_set'
    | 'song_id'
/**
 * Sorts an array of parsed song objects.
 * - - - -
 * @param {DTADocument[]} songs An array with parsed song objects.
 * @param {SortByOptionsTypes} sortBy The sorting type.
 * @returns {DTADocument[]} A sorted array of parsed song objects.
 */
export const sortDTA = (
    songs: DTADocument[],
    sortBy: SortByOptionsTypes
): DTADocument[] => {
    if (sortBy === 'name') {
        return songs.sort((a, b) => {
            if (
                omitLeadingArticle(a.content.name) >
                omitLeadingArticle(b.content.name)
            )
                return 1
            if (
                omitLeadingArticle(a.content.name) <
                omitLeadingArticle(b.content.name)
            )
                return -1
            return 0
        })
    } else if (sortBy === 'artist') {
        return songs.sort((a, b) => {
            if (
                omitLeadingArticle(a.content.artist) >
                omitLeadingArticle(b.content.artist)
            )
                return 1
            if (
                omitLeadingArticle(a.content.artist) <
                omitLeadingArticle(b.content.artist)
            )
                return -1
            return 0
        })
    } else if (sortBy === 'artist_set') {
        return songs.sort((a, b) => {
            if (
                omitLeadingArticle(a.content.artist) >
                omitLeadingArticle(b.content.artist)
            )
                return 1
            if (
                omitLeadingArticle(a.content.artist) <
                omitLeadingArticle(b.content.artist)
            )
                return -1
            if (a.content.year_released > b.content.year_released) return 1
            if (a.content.year_released < b.content.year_released) return -1
            if (
                a.content.album_name &&
                b.content.album_name &&
                a.content.album_name > b.content.album_name
            )
                return 1
            if (
                a.content.album_name &&
                b.content.album_name &&
                a.content.album_name < b.content.album_name
            )
                return -1
            if (
                a.content.album_track_number &&
                a.content.album_track_number > a.content.album_track_number &&
                b.content.album_track_number
            )
                return 1
            if (
                a.content.album_track_number &&
                a.content.album_track_number < a.content.album_track_number &&
                b.content.album_track_number
            )
                return -1

            return 0
        })
    } else if (sortBy === 'id') {
        return songs.sort((a, b) => {
            if (a.content.id > b.content.id) return 1
            if (a.content.id < b.content.id) return -1
            return 0
        })
    }

    // (sortBy === 'song_id')
    return songs.sort((a, b) => {
        if (a.content.song_id > b.content.song_id) return 1
        if (a.content.song_id < b.content.song_id) return -1
        return 0
    })
}
