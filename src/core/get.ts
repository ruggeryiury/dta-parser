import {
    DTAContentDocument,
    DTADocument,
    DTACustomSongAttributes,
} from '../@types/DTADocument'
import {
    RankTypes,
    leadingArticle2Trailing,
    millisecondsToTimeString,
    omitLeadingArticle,
    rankCalc,
} from '../utils'
import Locale from '../locale/core'

export type GetDataValueTypes = keyof DTAContentDocument &
    keyof DTACustomSongAttributes

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
          | 'rating'
          | 'genre'
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
    type?: 'number' | 'verbosed' | 'raw' | 'graphical'
}

export const getDTA = <
    V extends GetDataValueTypes,
    O extends GetDataValueOptions<V>
>(
    dta: DTADocument,
    value: V,
    options?: O
) => {
    if (value === 'name' || value === 'artist') {
        let leadingArticle: GetDataNamingOptions['leadingArticle']
        if (options)
            leadingArticle = (options as GetDataNamingOptions).leadingArticle

        if (leadingArticle === undefined || leadingArticle === 'emit')
            return dta.content[value]
        else if (leadingArticle === 'omit')
            return omitLeadingArticle(dta.content[value] as string)
        else return leadingArticle2Trailing(dta.content[value] as string)
    } else if (
        value === 'vocal_parts' ||
        value === 'bank' ||
        value === 'drum_bank' ||
        value === 'anim_tempo' ||
        value === 'band_fail_cue' ||
        value === 'song_scroll_speed' ||
        value === 'rating' ||
        value === 'genre'
    ) {
        let raw: GetDataRawOptions['raw']
        if (options) raw = (options as GetDataRawOptions).raw

        if (raw !== undefined || raw) return dta.content[value]
        else {
            if (value === 'vocal_parts')
                return Locale.vocal_parts(dta.content['vocal_parts'])
            else if (value === 'bank') return Locale.bank(dta.content['bank'])
            else if (value === 'drum_bank')
                return Locale.drum_bank(dta.content['drum_bank'])
            else if (value === 'anim_tempo')
                return Locale.anim_tempo(dta.content['anim_tempo'])
            else if (value === 'band_fail_cue')
                return Locale.band_fail_cue(dta.content['band_fail_cue'])
            else if (value === 'rating')
                return Locale.rating(dta.content['rating'])
            else if (value === 'genre')
                return Locale.genre(dta.content['genre'])
            else
                return Locale.song_scroll_speed(
                    dta.content['song_scroll_speed']
                )
        }
    } else if (value === 'song_length') {
        let inMilliseconds: GetDataTimeOptions['inMilliseconds']
        if (options)
            inMilliseconds = (options as GetDataTimeOptions).inMilliseconds

        if (inMilliseconds === true) return dta.content[value]
        else return millisecondsToTimeString(dta.content.song_length)
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
        let returnType: GetDataRankingOptions['type']
        if (options) returnType = (options as GetDataRankingOptions).type
        let operators: [RankTypes, number | undefined] = [
            'band',
            dta.content.rank_band,
        ]

        if (value === 'rank_drum') operators = ['drum', dta.content.rank_drum]
        else if (value === 'rank_bass')
            operators = ['bass', dta.content.rank_bass]
        else if (value === 'rank_guitar')
            operators = ['guitar', dta.content.rank_guitar]
        else if (value === 'rank_vocals')
            operators = ['vocals', dta.content.rank_vocals]
        else if (value === 'rank_keys')
            operators = ['keys', dta.content.rank_keys]
        else if (value === 'rank_real_guitar')
            operators = ['real_guitar', dta.content.rank_real_guitar]
        else if (value === 'rank_real_bass')
            operators = ['real_bass', dta.content.rank_real_bass]
        else if (value === 'rank_real_keys')
            operators = ['real_keys', dta.content.rank_real_keys]
        else {
            // Continue
        }

        const rank = rankCalc(operators[0], operators[1])
        console.log(rank)

        if (returnType === 'number') return rank
        else if (returnType === 'raw') return operators[1]
        else if (returnType === 'graphical')
            return Locale.rank(rank, 'graphical')
        else return Locale.rank(rank)
    } else return dta.content[value]
}
