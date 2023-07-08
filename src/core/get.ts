import {
    DTAContentDocument,
    DTADocument,
    DTACustomSongAttributes,
} from '../@types/DTADocument'
import {
    RankTypes,
    SpotifyAlbumSearchDocument,
    getAlbumArt,
    leadingArticle2Trailing,
    millisecondsToTimeString,
    omitLeadingArticle,
    rankCalc,
} from '../utils'
import Locale, {
    AnimTempoValues,
    BandFailCueValues,
    BankValues,
    DrumBankValues,
    GenreValues,
    RatingValues,
    SongKeyMajorValues,
    SongKeyMinorValues,
    SongScrollSpeedValues,
    SubGenreValues,
    VocalGenderValues,
    VocalPartsValues,
} from '../locale/core'
import { BandRankingsOptions, InstrumentRankingsOptions } from '../core'

export type GetDataValueTypes =
    | keyof Omit<
          DTAContentDocument,
          | 'tracks_count'
          | 'pans'
          | 'vols'
          | 'preview'
          | 'solo'
          | 'guide_pitch_volume'
          | 'encoding'
          | 'format'
          | 'version'
          | 'game_origin'
        //   | 'album_art'
          | 'vocal_tonic_note'
          | 'song_tonality'
      >
    | keyof Omit<DTACustomSongAttributes, 'languages'>
export type GetDataValueOptions<V extends GetDataValueTypes> = V extends
    | 'name'
    | 'artist'
    | 'album_name'
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
          | 'mute_volume'
          | 'mute_volume_vocals'
          | 'tuning_offset_cents'
          | 'sub_genre'
          | 'vocal_gender'
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

export type GetDataValueReturn<
    V extends GetDataValueTypes,
    O extends GetDataValueOptions<V>
> = V extends 'vocal_parts'
    ? O extends { raw: true }
        ? DTAContentDocument[V]
        : VocalPartsValues
    : V extends 'bank'
    ? O extends { raw: true }
        ? DTAContentDocument[V]
        : BankValues
    : V extends 'drum_bank'
    ? O extends { raw: true }
        ? DTAContentDocument[V]
        : DrumBankValues
    : V extends 'anim_tempo'
    ? O extends { raw: true }
        ? DTAContentDocument[V]
        : AnimTempoValues
    : V extends 'band_fail_cue'
    ? O extends { raw: true }
        ? DTAContentDocument[V]
        : BandFailCueValues
    : V extends 'rating'
    ? O extends { raw: true }
        ? DTAContentDocument[V]
        : RatingValues
    : V extends 'genre'
    ? O extends { raw: true }
        ? DTAContentDocument[V]
        : GenreValues
    : V extends 'sub_genre'
    ? O extends { raw: true }
        ? DTAContentDocument[V]
        : SubGenreValues
    : V extends 'vocal_gender'
    ? O extends { raw: true }
        ? DTAContentDocument[V]
        : VocalGenderValues
    : V extends 'song_scroll_speed'
    ? O extends { raw: true }
        ? DTAContentDocument[V]
        : SongScrollSpeedValues
    : V extends 'mute_volume' | 'mute_volume_vocals' | 'tuning_offset_cents'
    ? O extends { raw: true }
        ? number
        : string
    : V extends 'rank_band'
    ? O extends { type: 'number' } | { type: 'raw' }
        ? number
        : O extends { type: 'graphical' }
        ? string
        : BandRankingsOptions
    : V extends
          | 'rank_drum'
          | 'rank_bass'
          | 'rank_guitar'
          | 'rank_vocals'
          | 'rank_keys'
          | 'rank_real_guitar'
          | 'rank_real_bass'
          | 'rank_real_keys'
    ? O extends { type: 'number' } | { type: 'raw' }
        ? number
        : O extends { type: 'graphical' }
        ? string
        : InstrumentRankingsOptions
    : V extends 'hopo_threshold'
    ? number
    : V extends 'song_key'
    ? SongKeyMajorValues | SongKeyMinorValues | 'Not Specified'
    : V extends 'album_art'
    ? Promise<SpotifyAlbumSearchDocument | undefined>
    : V extends keyof DTACustomSongAttributes
    ? DTACustomSongAttributes[V]
    : V extends keyof DTAContentDocument
    ? DTAContentDocument[V]
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
    /**
     * If `true`, the string will come quoted.
     * @default false
     */
    quoted?: boolean
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
): GetDataValueReturn<V, O> => {
    if (value === 'name' || value === 'artist' || value === 'album_name') {
        let leadingArticle: GetDataNamingOptions['leadingArticle']
        let quoted: GetDataNamingOptions['quoted']
        let returnValue = ''
        if (options) {
            leadingArticle = (options as GetDataNamingOptions).leadingArticle
            quoted = (options as GetDataNamingOptions).quoted
        }

        if (leadingArticle === undefined || leadingArticle === 'emit')
            returnValue = dta.content[
                value as keyof DTAContentDocument
            ] as string
        else if (leadingArticle === 'omit')
            returnValue = omitLeadingArticle(
                dta.content[value as keyof DTAContentDocument] as string
            )
        else
            returnValue = leadingArticle2Trailing(
                dta.content[value as keyof DTAContentDocument] as string
            )

        if (quoted !== undefined || quoted === true) {
            returnValue = `"${returnValue}"`
        }

        return returnValue as GetDataValueReturn<V, O>
    } else if (
        value === 'vocal_parts' ||
        value === 'mute_volume' ||
        value === 'mute_volume_vocals' ||
        value === 'bank' ||
        value === 'drum_bank' ||
        value === 'anim_tempo' ||
        value === 'band_fail_cue' ||
        value === 'song_scroll_speed' ||
        value === 'tuning_offset_cents' ||
        value === 'rating' ||
        value === 'genre' ||
        value === 'sub_genre' ||
        value === 'vocal_gender'
    ) {
        let raw: GetDataRawOptions['raw']
        if (options) raw = (options as GetDataRawOptions).raw

        if (raw !== undefined || raw)
            return dta.content[
                value as keyof DTAContentDocument
            ] as GetDataValueReturn<V, O>
        else {
            if (value === 'vocal_parts')
                return Locale.vocal_parts(
                    dta.content.vocal_parts
                ) as GetDataValueReturn<V, O>
            else if (value === 'mute_volume')
                return `${
                    dta.content.mute_volume === undefined
                        ? '-96'
                        : dta.content.mute_volume
                }dB` as GetDataValueReturn<V, O>
            else if (value === 'mute_volume_vocals')
                return `${
                    dta.content.mute_volume_vocals === undefined
                        ? '-12'
                        : dta.content.mute_volume_vocals
                }` as GetDataValueReturn<V, O>
            else if (value === 'bank')
                return Locale.bank(dta.content.bank) as GetDataValueReturn<V, O>
            else if (value === 'drum_bank')
                return Locale.drum_bank(
                    dta.content.drum_bank
                ) as GetDataValueReturn<V, O>
            else if (value === 'anim_tempo')
                return Locale.anim_tempo(
                    dta.content.anim_tempo
                ) as GetDataValueReturn<V, O>
            else if (value === 'band_fail_cue')
                return Locale.band_fail_cue(
                    dta.content.band_fail_cue
                ) as GetDataValueReturn<V, O>
            else if (value === 'tuning_offset_cents')
                return `${
                    dta.content.tuning_offset_cents === undefined
                        ? '0'
                        : dta.content.tuning_offset_cents
                } cents` as GetDataValueReturn<V, O>
            else if (value === 'rating')
                return Locale.rating(dta.content.rating) as GetDataValueReturn<
                    V,
                    O
                >
            else if (value === 'genre')
                return Locale.genre(dta.content.genre) as GetDataValueReturn<
                    V,
                    O
                >
            else if (value === 'sub_genre')
                return Locale.sub_genre(
                    dta.content.sub_genre
                ) as GetDataValueReturn<V, O>
            else if (value === 'vocal_gender')
                return Locale.vocal_gender(
                    dta.content.vocal_gender
                ) as GetDataValueReturn<V, O>
            else
                return Locale.song_scroll_speed(
                    dta.content.song_scroll_speed
                ) as GetDataValueReturn<V, O>
        }
    } else if (value === 'hopo_threshold') {
        return dta.content.hopo_threshold === undefined
            ? (170 as GetDataValueReturn<V, O>)
            : (dta.content.hopo_threshold as GetDataValueReturn<V, O>)
    } else if (value === 'song_length') {
        let inMilliseconds: GetDataTimeOptions['inMilliseconds']
        if (options)
            inMilliseconds = (options as GetDataTimeOptions).inMilliseconds

        if (inMilliseconds === true)
            return dta.content[
                value as keyof DTAContentDocument
            ] as GetDataValueReturn<V, O>
        else
            return millisecondsToTimeString(
                dta.content.song_length
            ) as GetDataValueReturn<V, O>
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

        if (returnType === 'verbosed')
            return Locale.rank(rank) as GetDataValueReturn<V, O>
        else if (returnType === 'raw')
            return operators[1] as GetDataValueReturn<V, O>
        else if (returnType === 'graphical')
            return Locale.rank(rank, 'graphical') as GetDataValueReturn<V, O>
        else return rank as GetDataValueReturn<V, O>
    } else if (value === 'song_key') {
        const key =
            dta.content.song_key !== undefined
                ? dta.content.song_key
                : dta.content.vocal_tonic_note !== undefined
                ? dta.content.vocal_tonic_note
                : -1
        const tonality =
            dta.content.song_tonality !== undefined
                ? dta.content.song_tonality
                : -1
        return Locale.song_key(key, tonality) as GetDataValueReturn<V, O>
    } else if (
        value === 'author' ||
        value === 'karaoke' ||
        value === 'multitrack' ||
        value === 'doubleKick' ||
        value === 'convert' ||
        value === 'rhythmOnBass' ||
        value === 'rhythmOnKeys' ||
        value === 'CATemh' ||
        value === 'expertOnly'
    )
        return dta.custom?.[
            value as keyof DTACustomSongAttributes
        ] as GetDataValueReturn<V, O>
    else if (value === 'album_art')
        return getAlbumArt(dta) as GetDataValueReturn<V, O>
    else
        return dta.content[
            value as keyof DTAContentDocument
        ] as GetDataValueReturn<V, O>
}
