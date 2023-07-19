import { DTADocument } from '../@types/DTADocument'
import { DTAArray } from '../index'
import { GenreValues, VocalPartsTypes, VocalPartsValues } from '../locale/core'

export type FilterSortedByTypes = 'Song Name' | 'Artist'

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

export type FilterType<SB extends FilterSortedByTypes> = SB extends 'Song Name'
    ? FilterSongNameTypes
    : SB extends 'Artist'
    ? string
    : never

export interface ApplyFilterOptions {
    genres?: GenreValues | GenreValues[]
    keysSupport?: boolean
    numberOfVocalParts?: VocalPartsValues | VocalPartsValues[]
    proGuitarBassSupport?: boolean
}
export interface FilterOptions<
    SB extends FilterSortedByTypes,
    V extends FilterType<SB>
> extends ApplyFilterOptions {
    options?: {
        sortedBy: SB
        value: V
    }
}

export const filterDTAArray = <
    SB extends FilterSortedByTypes,
    V extends FilterType<SB>
>(
    songs: DTADocument[],
    filters: FilterOptions<SB, V>
): DTADocument[] => {
    let returnValue = DTAArray.sort(songs, 'name')

    if (filters.options) {
        returnValue = returnValue.filter((song) => {
            if (filters.options?.sortedBy === 'Song Name') {
                if (filters.options?.value === '123') {
                    if (/^[^a-zA-Z]/.test(song.get('name'))) return song
                } else {
                    if (
                        song.get('name').slice(0, 1).toLowerCase() ===
                        filters.options?.value.toLowerCase()
                    )
                        return song
                }
            } else if (filters.options?.sortedBy === 'Artist') {
                if (
                    song.content.artist.toLowerCase() ===
                    filters.options?.value.toLowerCase()
                ) {
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
    let returnValue = songs

    if (filters.genres) {
        returnValue = returnValue.filter((song) => {
            if (Array.isArray(filters.genres)) {
                if (filters.genres.includes(song.get('genre'))) return song
            } else {
                if (filters.genres === song.get('genre')) return song
            }
        })
    }

    if (filters.keysSupport === true)
        returnValue = returnValue.filter(
            (song) => song.content.tracks_count[4] !== 0
        )
    else if (filters.keysSupport === false)
        returnValue = returnValue.filter(
            (song) => song.content.tracks_count[4] === 0
        )

    if (filters.numberOfVocalParts) {
        returnValue = returnValue.filter((song) => {
            if (Array.isArray(filters.numberOfVocalParts)) {
                if (
                    filters.numberOfVocalParts.includes(song.get('vocal_parts'))
                )
                    return song
            } else {
                if (filters.numberOfVocalParts === song.get('vocal_parts'))
                    return song
            }
        })
    }

    if (filters.proGuitarBassSupport === true)
        returnValue = returnValue.filter((song) => {
            if (
                (song.content.rank_real_guitar !== undefined &&
                    song.content.rank_real_guitar !== 0) ||
                (song.content.rank_real_bass !== undefined &&
                    song.content.rank_real_bass !== 0)
            )
                return song
        })
    else if (filters.proGuitarBassSupport === false)
        returnValue = returnValue.filter((song) => {
            if (
                (song.content.rank_real_guitar === undefined ||
                    song.content.rank_real_guitar === 0) &&
                (song.content.rank_real_bass === undefined ||
                    song.content.rank_real_bass === 0)
            )
                return song
        })

    return returnValue
}
