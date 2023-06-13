import {
    DTADocument,
    DTARankPartTypes,
    DTARawContentDocument,
} from '../@types/DTADocument'
import {
    DTAGetDataNamingOptions,
    DTAGetDataOptions,
    DTAGetDataRankingOptions,
    DTAGetDataRawOptions,
    DTAGetDataReturn,
    DTAGetDataTypes,
} from '../@types/getDTA'
import {
    omitLeadingArticle,
    leadingArticle2Trailing,
} from '../functions/leadingArticle'
import { genreLocale, subGenreLocale } from '../locale'
import { parseRank } from '../utils/parseRank'

/**
 * Returns the desired information from the parsed song.
 * @since v0.1.3
 */
export const getDTA = <
    T extends DTAGetDataTypes,
    O extends DTAGetDataOptions<T>
>(
    /**
     * Referenced `DTADocument` to get information to.
     */
    dtaDocument: DTADocument,
    /**
     * Any information from the song you want to be returned.
     * - - - -
     */
    data: T,
    /**
     * Customized options for the function. if the parameter is `undefined`, it means there's no available options.
     * - - - -
     */
    options?: O
): DTAGetDataReturn<T, O> => {
    if (data === 'songname' || data === 'master' || data === 'hopo_threshold') {
        return dtaDocument.rawContent[
            data as keyof DTARawContentDocument
        ] as DTAGetDataReturn<T, O>
    } else if (data === 'name' || data === 'artist') {
        const opts = options as DTAGetDataNamingOptions | undefined

        if (!opts || (opts && opts.leadingArticle === 'emit')) {
            return dtaDocument.rawContent[
                data as keyof DTARawContentDocument
            ] as DTAGetDataReturn<T, O>
        } else if (opts && opts.leadingArticle === 'omit') {
            return omitLeadingArticle(
                dtaDocument.rawContent[
                    data as keyof DTARawContentDocument
                ] as string
            ) as DTAGetDataReturn<T, O>
        } else if (opts && opts.leadingArticle === 'trailing') {
            return leadingArticle2Trailing(
                dtaDocument.rawContent[
                    data as keyof DTARawContentDocument
                ] as string
            ) as DTAGetDataReturn<T, O>
        }

        return '' as DTAGetDataReturn<T, O>
    } else if (data === 'tracks_count') {
        let tracksCount = 0

        dtaDocument.rawContent.tracks_count.forEach(
            (count) => (tracksCount += count)
        )
        return tracksCount as DTAGetDataReturn<T, O>
    } else if (
        data === 'vocal_parts' ||
        data === 'bank' ||
        data === 'drum_bank' ||
        data === 'anim_tempo'
    ) {
        const opts = options as DTAGetDataRawOptions | undefined
        const raw = dtaDocument.rawContent[data as keyof DTARawContentDocument]

        if (opts && opts.raw) {
            return raw as DTAGetDataReturn<T, O>
        }

        if (data === 'vocal_parts') {
            if (raw === 0) {
                return 'No Vocals' as DTAGetDataReturn<T, O>
            } else if (raw === 1) {
                return 'Solo Vocals' as DTAGetDataReturn<T, O>
            } else if (raw === 2) {
                return '2-Part Harmonies' as DTAGetDataReturn<T, O>
            } else {
                // (raw === 3)
                return '3-Part Harmonies' as DTAGetDataReturn<T, O>
            }
        }

        if (data === 'bank') {
            if (raw === 'sfx/tambourine_bank.milo') {
                return 'Tambourine' as DTAGetDataReturn<T, O>
            } else if (raw === 'sfx/handclap_bank.milo') {
                return 'Handclap' as DTAGetDataReturn<T, O>
            } else if (raw === 'sfx/cowbell_bank.milo') {
                return 'Cowbell' as DTAGetDataReturn<T, O>
            } else {
                // (raw === 'sfx/cowbell3_bank.milo')
                return 'Cowbell' as DTAGetDataReturn<T, O>
            }
        }

        if (data === 'drum_bank') {
            if (raw === 'sfx/kit01_bank.milo') {
                return 'Hard Rock Kit' as DTAGetDataReturn<T, O>
            } else if (raw === 'sfx/kit02_bank.milo') {
                return 'Arena Kit' as DTAGetDataReturn<T, O>
            } else if (raw === 'sfx/kit03_bank.milo') {
                return 'Vintage Kit' as DTAGetDataReturn<T, O>
            } else if (raw === 'sfx/kit04_bank.milo') {
                return 'Trashy Kit' as DTAGetDataReturn<T, O>
            } else {
                // (raw === 'sfx/kit05_bank.milo')
                return 'Electronic Kit' as DTAGetDataReturn<T, O>
            }
        }

        if (data === 'anim_tempo') {
            if (raw === 16) {
                return 'Slow' as DTAGetDataReturn<T, O>
            } else if (raw === 32) {
                return 'Medium' as DTAGetDataReturn<T, O>
            } else {
                // (raw === 64)
                return 'Fast' as DTAGetDataReturn<T, O>
            }
        }

        if (data === 'song_length') {
            const seconds = Math.floor(
                dtaDocument.rawContent.song_length / 1000
            )
            const minutes = Math.floor(seconds / 60)
            const formattedSeconds = String(seconds % 60).padStart(2, '0')
            const formattedMinutes = String(minutes).padStart(2, '0')
            return `${formattedMinutes}:${formattedSeconds}` as DTAGetDataReturn<
                T,
                O
            >
        }

        return 0 as DTAGetDataReturn<T, O>
    } else if (
        data === 'rank_band' ||
        data === 'rank_drum' ||
        data === 'rank_bass' ||
        data === 'rank_guitar' ||
        data === 'rank_vocals' ||
        data === 'rank_keys' ||
        data === 'rank_real_bass' ||
        data === 'rank_real_guitar' ||
        data === 'rank_real_bass'
    ) {
        const part = data.slice(5) as DTARankPartTypes
        const opts = options as DTAGetDataRankingOptions | undefined

        if (opts && opts.type) {
            return parseRank(part, dtaDocument, opts.type) as DTAGetDataReturn<
                T,
                O
            >
        }

        return parseRank(part, dtaDocument) as DTAGetDataReturn<T, O>
    } else if (data === 'genre' || data === 'sub_genre') {
        const opts = options as DTAGetDataRawOptions | undefined

        if (opts && opts.raw) {
            return dtaDocument.rawContent.genre as DTAGetDataReturn<T, O>
        }

        if (data === 'genre') {
            return genreLocale(
                dtaDocument.rawContent.genre
            ) as DTAGetDataReturn<T, O>
        } else {
            // (data === 'sub_genre')
            return subGenreLocale(
                dtaDocument.rawContent.sub_genre
            ) as DTAGetDataReturn<T, O>
        }
    } else {
        return '' as DTAGetDataReturn<T, O>
    }
}
