import { DTADocument } from '../@types/DTADocument'
import { DTAArray } from '../index'
import { GenreValues, VocalPartsValues } from '../locale/main'

export type FilterSortedByTypes = 'name' | 'artist'

export type FilterSongNameTypes =
    | '123'
    | 'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
    | 'G'
    | 'H'
    | 'I'
    | 'J'
    | 'K'
    | 'L'
    | 'M'
    | 'N'
    | 'O'
    | 'P'
    | 'Q'
    | 'R'
    | 'S'
    | 'T'
    | 'U'
    | 'V'
    | 'W'
    | 'X'
    | 'Y'
    | 'Z'

export type FilterType<SB extends FilterSortedByTypes> = SB extends 'name'
    ? FilterSongNameTypes | FilterSongNameTypes[]
    : SB extends 'artist'
    ? string | string[]
    : never

export interface FilterOptions<
    SB extends FilterSortedByTypes,
    V extends FilterType<SB>
> extends ApplyFilterOptions {
    /**
     * Specific filtering options.
     */
    options?: {
        /**
         * The filtering method.
         */
        sortedBy: SB
        /**
         * The value of the method you want to search.
         */
        value: V
    }
}

export interface ApplyFilterOptions {
    /**
     * Only songs with the specified genres will be returned.
     *
     * It can be either a string, or an array of strings.
     */
    genres?: GenreValues | GenreValues[]
    /**
     * Returns only songs with charted Keys.
     */
    keysSupport?: boolean
    /**
     * Only songs with the specified quantity of vocal parts will be returned.
     *
     * It can be either a string, or an array of strings.
     */
    numberOfVocalParts?: VocalPartsValues | VocalPartsValues[]
    /**
     * Returns only songs with charted PRO Guitar or PRO Bass.
     */
    proGuitarBassSupport?: boolean
    /**
     * Returns only songs with multitracks stems.
     */
    hasMultitracks?: boolean
}

/**
 * Filters an array of parsed songs based on the giving filtering options.
 * - - - -
 * @param {DTADocument[]} songs An array of parsed songs.
 * @param {FilterOptions<SB, V>} filters The filtering options.
 * @returns {DTADocument[]} A filtered array of parsed songs.
 */
export const filterDTA = <
    SB extends FilterSortedByTypes,
    V extends FilterType<SB>
>(
    songs: DTADocument[],
    filters: FilterOptions<SB, V>
): DTADocument[] => {
    let returnValue = DTAArray.sort(songs, 'name')

    if (filters.options) {
        returnValue = returnValue.filter((song) => {
            if (filters.options?.sortedBy === 'name') {
                if (Array.isArray(filters.options.value)) {
                    let proof = false

                    filters.options.value.forEach((name) => {
                        if (
                            name === '123' &&
                            /^[^a-zA-Z]/.test(song.get('name'))
                        )
                            proof = true
                        else if (
                            song
                                .get('name', { leadingArticle: 'omit' })
                                .slice(0, 1)
                                .toLowerCase() === name.toLowerCase()
                        )
                            proof = true
                    })

                    if (proof) return song
                } else if (typeof filters.options.value === 'string') {
                    if (
                        filters.options?.value === '123' &&
                        /^[^a-zA-Z]/.test(song.get('name'))
                    )
                        return song
                    else if (
                        song
                            .get('name', { leadingArticle: 'omit' })
                            .slice(0, 1)
                            .toLowerCase() ===
                        filters.options?.value.toLowerCase()
                    )
                        return song
                }
            } else if (filters.options?.sortedBy === 'artist') {
                if (Array.isArray(filters.options.value)) {
                    let proof = false

                    filters.options.value.forEach((artist) => {
                        if (
                            song.content.artist.toLowerCase() ===
                            artist.toLowerCase()
                        )
                            proof = true
                    })

                    if (proof) return song
                } else if (typeof filters.options.value === 'string') {
                    if (
                        song.content.artist.toLowerCase() ===
                        filters.options?.value.toLowerCase()
                    )
                        return song
                }
            }
        })
    }

    delete filters.options

    return applyFilters(returnValue, filters)
}

export const applyFilters = (
    songs: DTADocument[],
    filters: ApplyFilterOptions
) => {
    if (filters.genres) {
        songs = songs.filter((song) => {
            if (
                Array.isArray(filters.genres) &&
                filters.genres.includes(song.get('genre'))
            )
                return song
            else if (
                typeof filters.genres === 'string' &&
                filters.genres === song.get('genre')
            )
                return song
        })
    }

    if (filters.keysSupport) {
        songs = songs.filter((song) => {
            if (song.content.tracks_count[4] !== 0) return song
        })
    }

    if (filters.numberOfVocalParts) {
        songs = songs.filter((song) => {
            if (
                Array.isArray(filters.numberOfVocalParts) &&
                filters.numberOfVocalParts.includes(song.get('vocal_parts'))
            )
                return song
            else if (
                typeof filters.numberOfVocalParts === 'string' &&
                filters.numberOfVocalParts === song.get('vocal_parts')
            )
                return song
        })
    }

    if (filters.proGuitarBassSupport) {
        songs = songs.filter((song) => {
            const hasPROGuitar =
                song.content.rank_real_guitar &&
                song.content.rank_real_guitar !== 0
                    ? true
                    : false
            const hasPROBass =
                song.content.rank_real_bass && song.content.rank_real_bass !== 0
                    ? true
                    : false

            if (hasPROGuitar || hasPROBass) return song
        })
    }

    if (filters.hasMultitracks) {
        songs = songs.filter((song) => {
            const hasMultitrack = song.content.multitrack ? true : false

            if (hasMultitrack) return song
        })
    }
    return songs
}
