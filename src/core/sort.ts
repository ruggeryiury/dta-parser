import { DTADocument } from '../@types/DTADocument'
import { SortByOptionsTypes } from '../@types/DTAParser'
import { omitLeadingArticle } from '../utils'

/**
 * Sorts a `DTADocument` array.
 * - - - -
 * @param {DTADocument[]} songs An array with parsed songs.
 * @param {SortByOptionsTypes} sortBy The sorting type.
 * @returns {DTADocument[]} A sorted array of `DTADocument`.
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
            if (a.content.album_name > b.content.album_name) return 1
            if (a.content.album_name < b.content.album_name) return -1
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
    } else {
        // (sortBy === 'song_id')
        return songs.sort((a, b) => {
            if (a.content.song_id > b.content.song_id) return 1
            if (a.content.song_id < b.content.song_id) return -1
            return 0
        })
    }
}
