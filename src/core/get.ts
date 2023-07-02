import { DTAContentDocument, DTADocument } from '../@types/DTADocument'
import {
    RankTypes,
    leadingArticle2Trailing,
    millisecondsToTimeString,
    omitLeadingArticle,
    rankCalc,
} from '../utils'
import Locale from '../locale/core'

export type GetDataValueTypes =
    | 'name'
    | 'artist'
    | 'vocal_parts'
    | 'bank'
    | 'drum_bank'
    | 'anim_tempo'
    | 'band_fail_cue'
    | 'song_scroll_speed'
    | 'song_length'
    | 'rank_band'
    | 'rank_drum'
    | 'rank_bass'
    | 'rank_guitar'
    | 'rank_vocals'
    | 'rank_keys'
    | 'rank_real_keys'
    | 'rank_real_guitar'
    | 'rank_real_bass'

export type GetDataValueOptions<V extends GetDataValueTypes> = V extends
    | 'name'
    | 'artist'
    ? GetDataNamingOptions
    : V extends
          | 'vocal_parts'
          | 'bank'
          | 'drum_bank'
          | 'anim_tempo'
          | 'band_fail_cue'
          | 'song_scroll_speed'
    ? GetDataRawOptions
    : V extends 'song_length'
    ? GetDataTimeOptions
    : V extends
          | 'rank_band'
          | 'rank_drum'
          | 'rank_bass'
          | 'rank_guitar'
          | 'rank_vocals'
          | 'rank_keys'
          | 'rank_real_keys'
          | 'rank_real_guitar'
          | 'rank_real_bass'
    ? GetDataRankingOptions
    : never

export type GetDataReturnValues<
    V extends GetDataValueTypes,
    O extends GetDataValueOptions<V>
> =
    // String
    V extends 'name' | 'artist' | 'bank' | 'drum_bank'
        ? string
        : V extends 'vocal_parts' | 'song_scroll_speed'
        ? O extends { raw: true }
            ? number
            : string
        : V extends 'song_length'
        ? O extends { inMilliseconds: true }
            ? number
            : string
        : V extends
              | 'rank_band'
              | 'rank_drum'
              | 'rank_bass'
              | 'rank_guitar'
              | 'rank_vocals'
              | 'rank_keys'
              | 'rank_real_keys'
              | 'rank_real_guitar'
              | 'rank_real_bass'
        ? O extends { type: undefined | 'number' | 'raw' }
            ? number
            : string
        : never

export interface GetDataNamingOptions {
    /** You can specify how the leading article will be
     * placed on the string.
     * - - - -
     * * `emit`: Default option. Will return the whole
     * name/artist as it is.
     *
     * Ex.: ``An Example`` => `An Example`.
     * - - - -
     * * `omit`: Will return the name/artist with the
     * leading article ommited.
     *
     * Ex.: `An Example` => `Example`.
     * - - - -
     * * `trailing`: Will return the name/artist with the
     * leading article on the end of the string, separated with
     * a comma.
     *
     * Ex.: `An Example` => `Example, An`.
     *
     * @default 'emit'
     */
    leadingArticle?: 'emit' | 'omit' | 'trailing'
}

export interface GetDataRawOptions {
    /** Some values are kept on any `.dta` as raw
     * string codes for the game `locale` files. By setting
     * this to `true`, it will return this raw string code
     * instead of the processed raw string code.
     * @default false
     */
    raw?: boolean
}

export interface GetDataTimeOptions {
    /**
     * Returns as milliseconds rather than a formatted
     * time string.
     * @default false
     */
    inMilliseconds?: boolean
}

export interface GetDataRankingOptions {
    type?: 'number' | 'verbosed' | 'raw'
}

export const getDTA = <
    V extends GetDataValueTypes,
    O extends GetDataValueOptions<V>
>(
    dta: DTADocument,
    value: V,
    options?: O
): GetDataReturnValues<V, O> => {
    if (value === 'name' || value === 'artist') {
        const opts = options as GetDataNamingOptions | undefined

        if (!opts || (opts && opts.leadingArticle === 'emit')) {
            return dta.content[
                value as keyof DTAContentDocument
            ] as GetDataReturnValues<V, O>
        } else if (opts && opts.leadingArticle === 'omit') {
            return omitLeadingArticle(
                dta.content[value as keyof DTAContentDocument] as string
            ) as GetDataReturnValues<V, O>
        }

        // (opts && opts.leadingArticle === 'trailing')
        return leadingArticle2Trailing(
            dta.content[value as keyof DTAContentDocument] as string
        ) as GetDataReturnValues<V, O>
    } else if (value === 'vocal_parts') {
        const opts = options as GetDataRawOptions | undefined

        if (!opts || (opts && !opts.raw)) {
            return Locale.vocal_parts(
                dta.content.vocal_parts
            ) as GetDataReturnValues<V, O>
        }

        // (opts && opts.raw)
        return dta.content.vocal_parts as GetDataReturnValues<V, O>
    } else if (value === 'bank') {
        const opts = options as GetDataRawOptions | undefined

        if (!opts || (opts && !opts.raw)) {
            return Locale.bank(dta.content.bank) as GetDataReturnValues<V, O>
        }

        return dta.content.bank as GetDataReturnValues<V, O>
    } else if (value === 'drum_bank') {
        const opts = options as GetDataRawOptions | undefined

        if (!opts || (opts && !opts.raw)) {
            return Locale.drum_bank(
                dta.content.drum_bank
            ) as GetDataReturnValues<V, O>
        }

        return dta.content.drum_bank as GetDataReturnValues<V, O>
    } else if (value === 'anim_tempo') {
        const opts = options as GetDataRawOptions | undefined

        if (!opts || (opts && !opts.raw)) {
            return Locale.anim_tempo(
                dta.content.anim_tempo
            ) as GetDataReturnValues<V, O>
        }

        return dta.content.anim_tempo as GetDataReturnValues<V, O>
    } else if (value === 'band_fail_cue') {
        const opts = options as GetDataRawOptions | undefined

        if (!opts || (opts && !opts.raw)) {
            return Locale.band_fail_cue(
                dta.content.band_fail_cue
            ) as GetDataReturnValues<V, O>
        }

        return dta.content.band_fail_cue as GetDataReturnValues<V, O>
    } else if (value === 'song_scroll_speed') {
        const opts = options as GetDataRawOptions | undefined

        if (!opts || (opts && !opts.raw)) {
            return Locale.song_scroll_speed(
                dta.content.song_scroll_speed
            ) as GetDataReturnValues<V, O>
        }

        return dta.content.song_scroll_speed as GetDataReturnValues<V, O>
    } else if (value === 'song_length') {
        const opts = options as GetDataTimeOptions | undefined

        if (!opts || (opts && !opts.inMilliseconds)) {
            return millisecondsToTimeString(
                dta.content.song_length
            ) as GetDataReturnValues<V, O>
        }

        return dta.content.song_length as GetDataReturnValues<V, O>
    } else if (
        value === 'rank_band' ||
        value === 'rank_drum' ||
        value === 'rank_bass' ||
        value === 'rank_guitar' ||
        value === 'rank_vocals' ||
        value === 'rank_keys' ||
        value === 'rank_real_keys' ||
        value === 'rank_real_guitar' ||
        value === 'rank_real_bass'
    ) {
        const opts = options as GetDataRankingOptions | undefined
        let type: RankTypes
        let raw: number | undefined

        if (value === 'rank_band') {
            type = 'band'
            raw = dta.content.rank_band
        } else if (value === 'rank_drum') {
            type = 'drum'
            raw = dta.content.rank_drum
        } else if (value === 'rank_bass') {
            type = 'bass'
            raw = dta.content.rank_bass
        } else if (value === 'rank_guitar') {
            type = 'guitar'
            raw = dta.content.rank_guitar
        } else if (value === 'rank_vocals') {
            type = 'vocals'
            raw = dta.content.rank_vocals
        } else if (value === 'rank_keys') {
            type = 'keys'
            raw = dta.content.rank_keys
        } else if (value === 'rank_real_guitar') {
            type = 'real_guitar'
            raw = dta.content.rank_real_guitar
        } else if (value === 'rank_real_bass') {
            type = 'real_bass'
            raw = dta.content.rank_real_bass
        } else {
            type = 'real_keys'
            raw = dta.content.rank_real_keys
        }
        const rank = rankCalc(type, raw)

        if (!opts || !opts?.type || opts?.type === 'number') {
            return rank as GetDataReturnValues<V, O>
        } else if (opts?.type === 'verbosed') {
            return Locale.rank(rank) as GetDataReturnValues<V, O>
        } else {
            return raw as GetDataReturnValues<V, O>
        }
    } else {
        return '' as GetDataReturnValues<V, O>
    }
}
