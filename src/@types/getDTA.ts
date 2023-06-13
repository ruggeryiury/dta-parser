import { RankingTypeOptions } from './parseRank'

export type DTAGetDataTypes =
    | 'songname'
    | 'name'
    | 'artist'
    | 'master'
    | 'tracks_count'
    | 'vocal_parts'
    | 'hopo_threshold'
    | 'bank'
    | 'drum_bank'
    | 'anim_tempo'
    | 'song_length'
    | 'genre'
    | 'sub_genre'
    | 'rank_band'
    | 'rank_drum'
    | 'rank_bass'
    | 'rank_guitar'
    | 'rank_vocals'
    | 'rank_keys'
    | 'rank_real_bass'
    | 'rank_real_guitar'
    | 'rank_real_bass'

export type DTAGetDataOptions<T extends DTAGetDataTypes> = T extends
    | 'name'
    | 'artist'
    ? DTAGetDataNamingOptions
    : T extends 'bank' | 'drum_bank' | 'song_length' | 'genre' | 'sub_genre'
    ? DTAGetDataRawOptions
    : T extends
          | 'rank_band'
          | 'rank_drum'
          | 'rank_bass'
          | 'rank_guitar'
          | 'rank_vocals'
          | 'rank_keys'
          | 'rank_real_bass'
          | 'rank_real_guitar'
          | 'rank_real_bass'
    ? DTAGetDataRankingOptions
    : never

export type DTAGetDataReturn<
    T extends DTAGetDataTypes,
    O extends DTAGetDataOptions<T>
> = T extends
    | 'songname'
    | 'name'
    | 'artist'
    | 'bank'
    | 'drum_bank'
    | 'genre'
    | 'sub_genre'
    ? string
    : T extends 'master'
    ? boolean
    : T extends 'tracks_count' | 'hopo_threshold'
    ? number
    : T extends 'vocal_parts'
    ? O extends { raw: true }
        ? number
        : string
    : T extends 'anim_tempo'
    ? O extends { raw: true }
        ? number
        : string
    : T extends 'song_length'
    ? O extends { raw: true }
        ? number
        : string
    : T extends 'rank_band'
    ? O extends
          | undefined
          | { type: 'default' }
          | { type: 'alternate' }
          | { type: 'raw' }
        ? number
        : string
    : never

export type leadingArticleOptions = 'emit' | 'omit' | 'trailing'
export interface DTAGetDataNamingOptions {
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
    leadingArticle?: leadingArticleOptions
}

export interface DTAGetDataRawOptions {
    /** Some values are kept on any `.dta` as raw
     * string codes for the game `locale` files. By setting
     * this to `true`, it will return this raw string code
     * instead of the processed raw string code.
     * @default false
     */
    raw?: boolean
}

export interface DTAGetDataRankingOptions {
    /**
     * You can specify how the ranking will be parsed.
     *
     * - - - -
     * * `default`: From `-1` (No Part) to `6` (Devilish tier).
     * - - - -
     * * `alternate`: From `0` (No Part) to `7` (Devilish tier).
     * - - - -
     * * `raw`: Raw value from the `.dta` file.
     * - - - -
     * * `verbose`: Will return the ranking name based
     * on Rock Band titles. Ex.: `No Part`, `Impossible`.
     *
     * @default 'default'
     */
    type?: RankingTypeOptions
}
