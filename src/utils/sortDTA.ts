import { SortByOptionsTypes } from '../@types'
import { DTADocument } from '../@types/DTADocument'

/**
 * Internal function to sort arrays of songs.
 * @returns A new, sorted `Array`.
 * @since v0.1.1
 */
export const sortDTA = (
    /**
     * An `Array` of parsed songs.
     */
    dtaPack: DTADocument[],
    /**
     * The sorting type.
     */
    sortBy: SortByOptionsTypes
) => {
    switch (sortBy) {
        case 'name':
            return dtaPack.sort((a, b) => {
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
        case 'artist':
            return dtaPack.sort((a, b) => {
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

        case 'artistSet':
            return dtaPack.sort((a, b) => {
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
                if (a.rawContent.year_released > b.rawContent.year_released)
                    return 1
                if (a.rawContent.year_released < b.rawContent.year_released)
                    return -1
                if (a.rawContent.album_name > b.rawContent.album_name) return 1
                if (a.rawContent.album_name < b.rawContent.album_name) return -1
                if (
                    a.rawContent.album_track_number >
                    b.rawContent.album_track_number
                )
                    return 1
                if (
                    a.rawContent.album_track_number <
                    b.rawContent.album_track_number
                )
                    return -1

                return 0
            })
        case 'songId':
            return dtaPack.sort((a, b) => {
                if (a.rawContent.song_id > b.rawContent.song_id) return 1
                if (a.rawContent.song_id < b.rawContent.song_id) return -1
                return 0
            })
        default:
            return []
    }
}
