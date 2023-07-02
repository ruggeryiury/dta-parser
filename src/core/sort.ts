import { DTADocument } from '../@types/DTADocument'
import { SortByOptionsTypes } from '../@types/DTAParser'

/**
 * Sorts a `DTADocument` array.
 * @returns A sorted array of `DTADocument`.
 */
export const sortDTA = (
    /**
     * An `Array` with parsed songs.
     */
    songs: DTADocument[],
    /**
     * The sorting type.
     */
    sortBy: SortByOptionsTypes
): DTADocument[] => {
    if (sortBy === 'name') {
        return songs.sort((a, b) => {
            if (
                a.get('name', { leadingArticle: 'omit' }) >
                b.get('name', { leadingArticle: 'omit' })
            )
                return 1
            if (
                a.get('name', { leadingArticle: 'omit' }) <
                b.get('name', { leadingArticle: 'omit' })
            )
                return -1
            return 0
        })
    } else if (sortBy === 'artist') {
        return songs.sort((a, b) => {
            if (
                a.get('artist', { leadingArticle: 'omit' }) >
                b.get('artist', { leadingArticle: 'omit' })
            )
                return 1
            if (
                a.get('artist', { leadingArticle: 'omit' }) <
                b.get('artist', { leadingArticle: 'omit' })
            )
                return -1
            return 0
        })
    } else if (sortBy === 'artist_set') {
        return songs.sort((a, b) => {
            if (
                a.get('artist', { leadingArticle: 'omit' }) >
                b.get('artist', { leadingArticle: 'omit' })
            )
                return 1
            if (
                a.get('artist', { leadingArticle: 'omit' }) <
                b.get('artist', { leadingArticle: 'omit' })
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
