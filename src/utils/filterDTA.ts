import { DTADocument } from '../@types/DTADocument'
import { GenreValues, VocalPartsValues } from './locale'
import { sortDTA } from './sortDTA'

export type FilterSortedByTypes = 'name' | 'artist' | 'album_name' | null

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

export interface FilterAlbumNameTypes {
    artist: string
    album_name: string
}

export type FiltersSelectorValuesTypes<T extends FilterSortedByTypes> =
    T extends 'name'
        ? FilterSongNameTypes | FilterSongNameTypes[]
        : T extends 'artist'
        ? string | string[]
        : T extends 'album_name'
        ? FilterAlbumNameTypes | FilterAlbumNameTypes[]
        : never

export interface FilterOptionsWithSelector<
    T extends NonNullable<FilterSortedByTypes>
> extends ApplyFiltersOnlyOptions {
    /**
     * The value of the method you want to search.
     */
    filterSelectorValues: FiltersSelectorValuesTypes<T>
}

export interface ApplyFiltersOnlyOptions {
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

export type FilterOptionsType<T extends FilterSortedByTypes> = T extends null
    ? ApplyFiltersOnlyOptions
    : FilterOptionsWithSelector<NonNullable<T>>

/**
 * Filters an array of parsed songs based on the giving filtering options.
 * - - - -
 * @param {DTADocument[]} songs An array of parsed songs.
 * @param {T} filterSelector Specifies the filter selector based on specific values from the song.
 * @param {V} filters The filtering options.
 * @returns {DTADocument[]} A filtered array of parsed songs.
 */
export const filterDTA = <
    T extends FilterSortedByTypes,
    V extends FilterOptionsType<T>
>(
    songs: DTADocument[],
    filterSelector: T,
    filters: V
): DTADocument[] => {
    let returnValue = sortDTA(songs, 'name')

    if (filterSelector !== null) {
        const options = filters as FilterOptionsWithSelector<
            typeof filterSelector
        >

        if (
            filterSelector === 'name' &&
            !Array.isArray(options.filterSelectorValues)
        ) {
            const filterSelectorValues =
                options.filterSelectorValues as FilterSongNameTypes

            returnValue = returnValue.filter((song) => {
                if (
                    filterSelectorValues === '123' &&
                    /^[^a-zA-Z]/.test(song.get('name'))
                )
                    return song
                else if (
                    song
                        .get('name', { leadingArticle: 'omit' })
                        .slice(0, 1)
                        .toLowerCase() === filterSelectorValues.toLowerCase()
                )
                    return song
            })
        } else if (
            filterSelector === 'name' &&
            Array.isArray(options.filterSelectorValues)
        ) {
            const filterSelectorValues =
                options.filterSelectorValues as FilterSongNameTypes[]

            returnValue = returnValue.filter((song) => {
                let proof = false

                filterSelectorValues.forEach((name) => {
                    if (name === '123' && /^[^a-zA-Z]/.test(song.get('name')))
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
            })
        } else if (
            filterSelector === 'artist' &&
            !Array.isArray(options.filterSelectorValues)
        ) {
            const filterSelectorValues = options.filterSelectorValues as string

            returnValue = returnValue.filter((song) => {
                if (
                    song.content.artist.toLowerCase() ===
                    filterSelectorValues.toString().toLowerCase()
                )
                    return song
            })
        } else if (
            filterSelector === 'artist' &&
            Array.isArray(options.filterSelectorValues)
        ) {
            const filterSelectorValues =
                options.filterSelectorValues as string[]

            returnValue = returnValue.filter((song) => {
                let proof = false

                filterSelectorValues.forEach((artist) => {
                    if (
                        song.content.artist.toLowerCase() ===
                        artist.toLowerCase()
                    )
                        proof = true
                })

                if (proof) return song
            })
        } else if (
            filterSelector === 'album_name' &&
            !Array.isArray(options.filterSelectorValues)
        ) {
            const { album_name, artist } =
                options.filterSelectorValues as FilterAlbumNameTypes

            returnValue = returnValue.filter((song) => {
                if (
                    song.content.artist.toLowerCase() ===
                        artist.toLowerCase() &&
                    song.content.album_name?.toLowerCase() ===
                        album_name.toLowerCase()
                )
                    return song
            })
        } else if (
            filterSelector === 'album_name' &&
            Array.isArray(options.filterSelectorValues)
        ) {
            const filterSelectorValues =
                options.filterSelectorValues as FilterAlbumNameTypes[]

            returnValue = returnValue.filter((song) => {
                let proof = false

                filterSelectorValues.forEach((filters) => {
                    const { album_name, artist } = filters
                    if (
                        song.content.artist.toLowerCase() ===
                            artist.toLowerCase() &&
                        song.content.album_name?.toLowerCase() ===
                            album_name.toLowerCase()
                    )
                        proof = true
                })

                if (proof) return song
            })
        }
    }

    return applyFilters(returnValue, filters)
}

/**
 * Applies specific, non-value dependent filters and returns a filtered array of parsed songs.
 * - - - -
 * @param {DTADocument[]} songs An array of parsed songs.
 * @param {ApplyFiltersOnlyOptions} filters The filtering options.
 * @returns {DTADocument[]} A filtered array of parsed songs.
 */
export const applyFilters = (
    songs: DTADocument[],
    filters: ApplyFiltersOnlyOptions
): DTADocument[] => {
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
