import { DTAFileContents, DTAFile } from '../@types/DTAFile'
import { VocalPartsValues, BankValues, DrumBankValues, AnimTempoValues, BandFailCueValues, RatingValues, GenreValues, SubGenreValues, VocalGenderValues, SongScrollSpeedValues, SongKeyMajorValues, SongKeyMinorValues, Locale, BandRankingsVerbosedOptions, InstrumentRankingsVerbosedOptions } from './locale'
import { getAlbumArt } from './getAlbumArt'
import { omitLeadingArticle, leadingArticle2Trailing } from './nameUtils'
import { RankTypes, rankCalculator } from './rankCalculations'
import { millisecondsToTimeString, millisecondsToSeconds } from './timeUtils'

export type GetDataValueTypes = keyof Omit<DTAFileContents, 'tracks_count' | 'pans' | 'vols' | 'preview' | 'solo' | 'guide_pitch_volume' | 'encoding' | 'format' | 'version' | 'game_origin' | 'vocal_tonic_note' | 'song_tonality' | 'languages'>

export type GetDataValueOptions<V extends GetDataValueTypes> = V extends 'name' | 'artist' | 'album_name' ? GetDataNamingOptions : V extends 'vocal_parts' | 'bank' | 'drum_bank' | 'anim_tempo' | 'band_fail_cue' | 'song_scroll_speed' | 'rating' | 'genre' | 'mute_volume' | 'mute_volume_vocals' | 'tuning_offset_cents' | 'sub_genre' | 'vocal_gender' ? GetDataRawOptions : V extends 'song_length' ? GetDataTimeOptions : V extends 'album_art' ? GetDataAlbumArtOptions : V extends 'rank_band' | 'rank_drum' | 'rank_bass' | 'rank_guitar' | 'rank_vocals' | 'rank_keys' | 'rank_real_keys' | 'rank_real_guitar' | 'rank_real_bass' ? GetDataRankingOptions : never

export type GetDataValueReturn<V extends GetDataValueTypes, O extends GetDataValueOptions<V>> = V extends 'vocal_parts' ? (O extends { raw: true } ? DTAFileContents[V] : VocalPartsValues) : V extends 'bank' ? (O extends { raw: true } ? DTAFileContents[V] : BankValues) : V extends 'drum_bank' ? (O extends { raw: true } ? DTAFileContents[V] : DrumBankValues) : V extends 'anim_tempo' ? (O extends { raw: true } ? DTAFileContents[V] : AnimTempoValues) : V extends 'band_fail_cue' ? (O extends { raw: true } ? DTAFileContents[V] : BandFailCueValues) : V extends 'rating' ? (O extends { raw: true } ? DTAFileContents[V] : RatingValues) : V extends 'genre' ? (O extends { raw: true } ? DTAFileContents[V] : GenreValues) : V extends 'sub_genre' ? (O extends { raw: true } ? DTAFileContents[V] : SubGenreValues) : V extends 'vocal_gender' ? (O extends { raw: true } ? DTAFileContents[V] : VocalGenderValues) : V extends 'song_scroll_speed' ? (O extends { raw: true } ? DTAFileContents[V] : SongScrollSpeedValues) : V extends 'mute_volume' | 'mute_volume_vocals' | 'tuning_offset_cents' ? (O extends { raw: true } ? number : string) : V extends 'rank_band' ? (O extends { type: 'raw' } ? number : O extends { type: 'verbosed' } ? BandRankingsVerbosedOptions : number) : V extends 'rank_drum' | 'rank_bass' | 'rank_guitar' | 'rank_vocals' | 'rank_keys' | 'rank_real_guitar' | 'rank_real_bass' | 'rank_real_keys' ? (O extends { type: 'raw' } ? number : O extends { type: 'verbosed' } ? InstrumentRankingsVerbosedOptions : number) : V extends 'hopo_threshold' ? number : V extends 'song_key' ? SongKeyMajorValues | SongKeyMinorValues | 'Not Specified' : V extends 'album_art' ? ReturnType<typeof getAlbumArt> : V extends keyof DTAFileContents ? DTAFileContents[V] : never

export interface GetDataNamingOptions {
  /** You can specify how the leading article will be
   * placed on the string. Default is `'emit'`.
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
   */
  leadingArticle?: 'emit' | 'omit' | 'trailing'
  /**
   * If `true`, the string will come quoted. Default is `false`.
   */
  quoted?: boolean
}

export interface GetDataRawOptions {
  /** Some values are kept on any `.dta` as raw
   * string codes for the game `locale` files. By setting
   * this to `true`, it will return this raw string code
   * instead of the processed raw string code. Default is `false`.
   */
  raw?: boolean
}

export interface GetDataTimeOptions {
  /**
   * Specify the format of the song length. Default is `'formatted'`.
   */
  format?: 'milliseconds' | 'seconds' | 'formatted'
}

export interface GetDataAlbumArtOptions {
  /**
   * Specifies the size of the album art. Default is `'medium'`.
   */
  size?: 'large' | 'medium' | 'small'
  token?: string
}

export interface GetDataRankingOptions {
  /**
   * Default is `'number'`.
   */
  type?: 'verbosed' | 'raw' | 'number'
}

/**
 * Retrieves a specific value from the song.
 * - - - -
 * @param {DTAFile | DTAFileContents} dta The song you want to retrieve information from.
 * @param {V extends GetDataValueTypes} value The specific information you want to retrieve.
 * @param {O extends GetDataValueOptions<V>} options `OPTIONAL` Customization options for the retrieval process.
 * @returns {GetDataValueReturn<V, O>} The requested specific information.
 */
export const getDTA = <V extends GetDataValueTypes, O extends GetDataValueOptions<V>>(dta: DTAFile | DTAFileContents, value: V, options?: O): GetDataValueReturn<V, O> => {
  if ('content' in dta) {
    if (value === 'name' || value === 'artist' || value === 'album_name') {
      let leadingArticle: GetDataNamingOptions['leadingArticle']
      let quoted: GetDataNamingOptions['quoted']
      let returnValue = ''
      if (options) {
        leadingArticle = (options as GetDataNamingOptions).leadingArticle
        quoted = (options as GetDataNamingOptions).quoted
      }

      if (leadingArticle === undefined || leadingArticle === 'emit') returnValue = dta.content[value as keyof DTAFileContents] as string
      else if (leadingArticle === 'omit') returnValue = omitLeadingArticle(dta.content[value as keyof DTAFileContents] as string)
      else returnValue = leadingArticle2Trailing(dta.content[value as keyof DTAFileContents] as string)

      if (quoted !== undefined || quoted === true) {
        returnValue = `"${returnValue}"`
      }

      return returnValue as GetDataValueReturn<V, O>
    } else if (value === 'vocal_parts' || value === 'mute_volume' || value === 'mute_volume_vocals' || value === 'bank' || value === 'drum_bank' || value === 'anim_tempo' || value === 'band_fail_cue' || value === 'song_scroll_speed' || value === 'tuning_offset_cents' || value === 'rating' || value === 'genre' || value === 'sub_genre' || value === 'vocal_gender') {
      let raw: GetDataRawOptions['raw']
      if (options) raw = (options as GetDataRawOptions).raw

      if (raw !== undefined || raw) return dta.content[value as keyof DTAFileContents] as GetDataValueReturn<V, O>
      else {
        if (value === 'vocal_parts') return Locale.vocal_parts(dta.content.vocal_parts) as GetDataValueReturn<V, O>
        else if (value === 'mute_volume') return `${dta.content.mute_volume === undefined ? '-96' : dta.content.mute_volume}dB` as GetDataValueReturn<V, O>
        else if (value === 'mute_volume_vocals') return `${dta.content.mute_volume_vocals === undefined ? '-12' : dta.content.mute_volume_vocals}` as GetDataValueReturn<V, O>
        else if (value === 'bank') return Locale.bank(dta.content.bank === undefined ? 'sfx/tambourine_bank.milo' : dta.content.bank) as GetDataValueReturn<V, O>
        else if (value === 'drum_bank') return Locale.drum_bank(dta.content.drum_bank === undefined ? 'sfx/kit01_bank.milo' : dta.content.drum_bank) as GetDataValueReturn<V, O>
        else if (value === 'anim_tempo') return Locale.anim_tempo(dta.content.anim_tempo === undefined ? 32 : dta.content.anim_tempo) as GetDataValueReturn<V, O>
        else if (value === 'band_fail_cue') return Locale.band_fail_cue(dta.content.band_fail_cue) as GetDataValueReturn<V, O>
        else if (value === 'tuning_offset_cents') return `${dta.content.tuning_offset_cents === undefined ? '0' : dta.content.tuning_offset_cents} cents` as GetDataValueReturn<V, O>
        else if (value === 'rating') return Locale.rating(dta.content.rating === undefined ? 4 : dta.content.rating) as GetDataValueReturn<V, O>
        else if (value === 'genre') return Locale.genre(dta.content.genre === undefined ? 'other' : dta.content.genre) as GetDataValueReturn<V, O>
        else if (value === 'sub_genre') return Locale.sub_genre(dta.content.sub_genre === undefined ? 'subgenre_other' : dta.content.sub_genre) as GetDataValueReturn<V, O>
        else if (value === 'vocal_gender') return Locale.vocal_gender(dta.content.vocal_gender === undefined ? 'male' : dta.content.vocal_gender) as GetDataValueReturn<V, O>
        else return Locale.song_scroll_speed(dta.content.song_scroll_speed === undefined ? 2300 : dta.content.song_scroll_speed) as GetDataValueReturn<V, O>
      }
    } else if (value === 'hopo_threshold') {
      return dta.content.hopo_threshold === undefined ? (170 as GetDataValueReturn<V, O>) : (dta.content.hopo_threshold as GetDataValueReturn<V, O>)
    } else if (value === 'song_length') {
      if ((options as GetDataTimeOptions).format === undefined || (options as GetDataTimeOptions).format === 'formatted') return millisecondsToTimeString(dta.content.song_length) as GetDataValueReturn<V, O>
      else if ((options as GetDataTimeOptions).format === 'milliseconds') return dta.content.song_length as GetDataValueReturn<V, O>
      else {
        // if ((options as GetDataTimeOptions).format === 'seconds')

        return millisecondsToSeconds(dta.content.song_length) as GetDataValueReturn<V, O>
      }
    } else if (value === 'rank_band' || value === 'rank_drum' || value === 'rank_bass' || value === 'rank_guitar' || value === 'rank_vocals' || value === 'rank_keys' || value === 'rank_real_keys' || value === 'rank_real_guitar' || value === 'rank_real_bass') {
      let type: GetDataRankingOptions['type']
      if (options) type = (options as GetDataRankingOptions).type
      let operators: [RankTypes, number | undefined] = ['band', dta.content.rank_band]

      if (value === 'rank_drum') operators = ['drum', dta.content.rank_drum]
      else if (value === 'rank_bass') operators = ['bass', dta.content.rank_bass]
      else if (value === 'rank_guitar') operators = ['guitar', dta.content.rank_guitar]
      else if (value === 'rank_vocals') operators = ['vocals', dta.content.rank_vocals]
      else if (value === 'rank_keys') operators = ['keys', dta.content.rank_keys]
      else if (value === 'rank_real_guitar') operators = ['real_guitar', dta.content.rank_real_guitar]
      else if (value === 'rank_real_bass') operators = ['real_bass', dta.content.rank_real_bass]
      else if (value === 'rank_real_keys') operators = ['real_keys', dta.content.rank_real_keys]
      else {
        // Continue
      }

      const rank = rankCalculator(operators[0], operators[1])

      if (type === 'raw') return dta.content[value] as GetDataValueReturn<V, O>
      else if (type === 'verbosed') return Locale.rank(rank) as GetDataValueReturn<V, O>
      else return rank as GetDataValueReturn<V, O>
    } else if (value === 'song_key') {
      const key = dta.content.song_key !== undefined ? dta.content.song_key : dta.content.vocal_tonic_note !== undefined ? dta.content.vocal_tonic_note : false
      const tonality = dta.content.song_tonality !== undefined ? dta.content.song_tonality : false
      if (!key || !tonality) return 'Not Specified' as GetDataValueReturn<V, O>
      else return Locale.song_key(key, tonality) as GetDataValueReturn<V, O>
    } else if (value === 'album_art') {
      return getAlbumArt(dta, options as GetDataAlbumArtOptions) as GetDataValueReturn<V, O>
    } else return dta.content[value as keyof DTAFileContents] as GetDataValueReturn<V, O>
  } else {
    if (value === 'name' || value === 'artist' || value === 'album_name') {
      let leadingArticle: GetDataNamingOptions['leadingArticle']
      let quoted: GetDataNamingOptions['quoted']
      let returnValue = ''
      if (options) {
        leadingArticle = (options as GetDataNamingOptions).leadingArticle
        quoted = (options as GetDataNamingOptions).quoted
      }

      if (leadingArticle === undefined || leadingArticle === 'emit') returnValue = dta[value as keyof DTAFileContents] as string
      else if (leadingArticle === 'omit') returnValue = omitLeadingArticle(dta[value as keyof DTAFileContents] as string)
      else returnValue = leadingArticle2Trailing(dta[value as keyof DTAFileContents] as string)

      if (quoted !== undefined || quoted === true) {
        returnValue = `"${returnValue}"`
      }

      return returnValue as GetDataValueReturn<V, O>
    } else if (value === 'vocal_parts' || value === 'mute_volume' || value === 'mute_volume_vocals' || value === 'bank' || value === 'drum_bank' || value === 'anim_tempo' || value === 'band_fail_cue' || value === 'song_scroll_speed' || value === 'tuning_offset_cents' || value === 'rating' || value === 'genre' || value === 'sub_genre' || value === 'vocal_gender') {
      let raw: GetDataRawOptions['raw']
      if (options) raw = (options as GetDataRawOptions).raw

      if (raw !== undefined || raw) return dta[value as keyof DTAFileContents] as GetDataValueReturn<V, O>
      else {
        if (value === 'vocal_parts') return Locale.vocal_parts(dta.vocal_parts) as GetDataValueReturn<V, O>
        else if (value === 'mute_volume') return `${dta.mute_volume === undefined ? '-96' : dta.mute_volume}dB` as GetDataValueReturn<V, O>
        else if (value === 'mute_volume_vocals') return `${dta.mute_volume_vocals === undefined ? '-12' : dta.mute_volume_vocals}` as GetDataValueReturn<V, O>
        else if (value === 'bank') return Locale.bank(dta.bank === undefined ? 'sfx/tambourine_bank.milo' : dta.bank) as GetDataValueReturn<V, O>
        else if (value === 'drum_bank') return Locale.drum_bank(dta.drum_bank === undefined ? 'sfx/kit01_bank.milo' : dta.drum_bank) as GetDataValueReturn<V, O>
        else if (value === 'anim_tempo') return Locale.anim_tempo(dta.anim_tempo === undefined ? 32 : dta.anim_tempo) as GetDataValueReturn<V, O>
        else if (value === 'band_fail_cue') return Locale.band_fail_cue(dta.band_fail_cue) as GetDataValueReturn<V, O>
        else if (value === 'tuning_offset_cents') return `${dta.tuning_offset_cents === undefined ? '0' : dta.tuning_offset_cents} cents` as GetDataValueReturn<V, O>
        else if (value === 'rating') return Locale.rating(dta.rating === undefined ? 4 : dta.rating) as GetDataValueReturn<V, O>
        else if (value === 'genre') return Locale.genre(dta.genre === undefined ? 'other' : dta.genre) as GetDataValueReturn<V, O>
        else if (value === 'sub_genre') return Locale.sub_genre(dta.sub_genre === undefined ? 'subgenre_other' : dta.sub_genre) as GetDataValueReturn<V, O>
        else if (value === 'vocal_gender') return Locale.vocal_gender(dta.vocal_gender === undefined ? 'male' : dta.vocal_gender) as GetDataValueReturn<V, O>
        else return Locale.song_scroll_speed(dta.song_scroll_speed === undefined ? 2300 : dta.song_scroll_speed) as GetDataValueReturn<V, O>
      }
    } else if (value === 'hopo_threshold') {
      return dta.hopo_threshold === undefined ? (170 as GetDataValueReturn<V, O>) : (dta.hopo_threshold as GetDataValueReturn<V, O>)
    } else if (value === 'song_length') {
      if ((options as GetDataTimeOptions).format === undefined || (options as GetDataTimeOptions).format === 'formatted') return millisecondsToTimeString(dta.song_length) as GetDataValueReturn<V, O>
      else if ((options as GetDataTimeOptions).format === 'milliseconds') return dta.song_length as GetDataValueReturn<V, O>
      else {
        // if ((options as GetDataTimeOptions).format === 'seconds')

        return millisecondsToSeconds(dta.song_length) as GetDataValueReturn<V, O>
      }
    } else if (value === 'rank_band' || value === 'rank_drum' || value === 'rank_bass' || value === 'rank_guitar' || value === 'rank_vocals' || value === 'rank_keys' || value === 'rank_real_keys' || value === 'rank_real_guitar' || value === 'rank_real_bass') {
      let type: GetDataRankingOptions['type']
      if (options) type = (options as GetDataRankingOptions).type
      let operators: [RankTypes, number | undefined] = ['band', dta.rank_band]

      if (value === 'rank_drum') operators = ['drum', dta.rank_drum]
      else if (value === 'rank_bass') operators = ['bass', dta.rank_bass]
      else if (value === 'rank_guitar') operators = ['guitar', dta.rank_guitar]
      else if (value === 'rank_vocals') operators = ['vocals', dta.rank_vocals]
      else if (value === 'rank_keys') operators = ['keys', dta.rank_keys]
      else if (value === 'rank_real_guitar') operators = ['real_guitar', dta.rank_real_guitar]
      else if (value === 'rank_real_bass') operators = ['real_bass', dta.rank_real_bass]
      else if (value === 'rank_real_keys') operators = ['real_keys', dta.rank_real_keys]
      else {
        // Continue
      }

      const rank = rankCalculator(operators[0], operators[1])

      if (type === 'raw') return dta[value] as GetDataValueReturn<V, O>
      else if (type === 'verbosed') return Locale.rank(rank) as GetDataValueReturn<V, O>
      else return rank as GetDataValueReturn<V, O>
    } else if (value === 'song_key') {
      const key = dta.song_key !== undefined ? dta.song_key : dta.vocal_tonic_note !== undefined ? dta.vocal_tonic_note : false
      const tonality = dta.song_tonality !== undefined ? dta.song_tonality : false
      if (!key || !tonality) return 'Not Specified' as GetDataValueReturn<V, O>
      else return Locale.song_key(key, tonality) as GetDataValueReturn<V, O>
    } else if (value === 'album_art') {
      return getAlbumArt(dta, options as GetDataAlbumArtOptions) as GetDataValueReturn<V, O>
    } else return dta[value as keyof DTAFileContents] as GetDataValueReturn<V, O>
  }
}
