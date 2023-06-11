import { DTADocument } from '../dta-parser'

export type SortByOptionsTypes = 'name' | 'artist' | 'artistSet' | 'songId'

/**
 * Internal function to sort arrays of songs.
 * @param parsedSongs An `Array` of parsed songs.
 * @param sortBy The sorting type.
 * @returns A new, sorted `Array`.
 * @since v0.1.1
 */
const sortDTAArray = (
    parsedSongs: DTADocument[],
    sortBy: SortByOptionsTypes
): DTADocument[] => {
    switch (sortBy) {
        case 'name':
            return parsedSongs.sort((a, b) => {
                if (
                    a.getData('name', { leadingArticle: 'omit' }) >
                    b.getData('name', { leadingArticle: 'omit' })
                )
                    return 1
                if (
                    a.getData('name', { leadingArticle: 'omit' }) <
                    b.getData('name', { leadingArticle: 'omit' })
                )
                    return -1
                return 0
            })
        case 'artist':
            return parsedSongs.sort((a, b) => {
                if (
                    a.getData('artist', { leadingArticle: 'omit' }) >
                    b.getData('artist', { leadingArticle: 'omit' })
                )
                    return 1
                if (
                    a.getData('artist', { leadingArticle: 'omit' }) <
                    b.getData('artist', { leadingArticle: 'omit' })
                )
                    return -1
                return 0
            })

        case 'artistSet':
            return parsedSongs.sort((a, b) => {
                if (
                    a.getData('artist', { leadingArticle: 'omit' }) >
                    b.getData('artist', { leadingArticle: 'omit' })
                )
                    return 1
                if (
                    a.getData('artist', { leadingArticle: 'omit' }) <
                    b.getData('artist', { leadingArticle: 'omit' })
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
            return parsedSongs.sort((a, b) => {
                if (a.rawContent.song_id > b.rawContent.song_id) return 1
                if (a.rawContent.song_id < b.rawContent.song_id) return -1
                return 0
            })
        default:
            return []
    }
}

export default sortDTAArray
