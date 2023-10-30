import { AnimTempoNumeralTypes, AnimTempoTypes, AnimTempoValues, BandFailCueTypes, BandFailCueValues, BankTypes, BankValues, DrumBankTypes, DrumBankValues, GenreTypes, GenreValues, RatingTypes, RatingValues, SongScrollSpeedTypes, SongScrollSpeedValues, SubGenreTypes, SubGenreValues, VocalGenderTypes, VocalGenderValues, VocalPartsTypes, VocalPartsValues, animTempoValuesObj, bandFailCueValuesObj, bankValuesObj, drumBankValuesObj, genreValuesObj, ratingValuesObj, songScrollSpeedValuesObj, subGenreValuesObj, vocalGenderValuesObj, vocalPartsValuesObj } from './locale'

export interface GetKeyFromValueObject {
  anim_tempo: (v: AnimTempoValues) => AnimTempoNumeralTypes
  band_fail_cue: (v: BandFailCueValues) => BandFailCueTypes
  bank: (v: BankValues) => BankTypes
  drum_bank: (v: DrumBankValues) => DrumBankTypes
  genre: (v: GenreValues) => GenreTypes
  rating: (v: RatingValues) => RatingTypes
  song_scroll_speed: (v: SongScrollSpeedValues) => SongScrollSpeedTypes
  sub_genre: (v: SubGenreValues) => SubGenreTypes
  vocal_gender: (v: VocalGenderValues) => VocalGenderTypes
  vocal_parts: (v: VocalPartsValues) => VocalPartsTypes
}

/**
 * Functions used on the `DTAFile.update()` method.
 *
 * It resolves many values accepted from the update method to actual values used on the `.dta` file.
 */
export const getKeyFromValue: GetKeyFromValueObject = {
  anim_tempo: (v) => Number(Object.keys(animTempoValuesObj).find((key) => animTempoValuesObj[Number(key) as AnimTempoTypes] === v)) as AnimTempoNumeralTypes,
  band_fail_cue: (v) => String(Object.keys(bandFailCueValuesObj).find((key) => bandFailCueValuesObj[key as BandFailCueTypes] === v)) as BandFailCueTypes,
  bank: (v) => String(Object.keys(bankValuesObj).find((key) => bankValuesObj[key as BankTypes] === v)) as BankTypes,
  drum_bank: (v) => String(Object.keys(drumBankValuesObj).find((key) => drumBankValuesObj[key as DrumBankTypes] === v)) as DrumBankTypes,
  genre: (v) => String(Object.keys(genreValuesObj).find((key) => genreValuesObj[key as GenreTypes] === v)) as GenreTypes,
  rating: (v) => Number(Object.keys(ratingValuesObj).find((key) => ratingValuesObj[Number(key) as RatingTypes] === v)) as RatingTypes,
  song_scroll_speed: (v) => Number(Object.keys(songScrollSpeedValuesObj).find((key) => songScrollSpeedValuesObj[Number(key) as SongScrollSpeedTypes] === v)) as SongScrollSpeedTypes,
  sub_genre: (v) => String(Object.keys(subGenreValuesObj).find((key) => subGenreValuesObj[key as SubGenreTypes] === v)) as SubGenreTypes,
  vocal_gender: (v) => String(Object.keys(vocalGenderValuesObj).find((key) => vocalGenderValuesObj[key as VocalGenderTypes] === v)) as VocalGenderTypes,
  vocal_parts: (v) => Number(Object.keys(vocalPartsValuesObj).find((key) => vocalPartsValuesObj[Number(key) as VocalPartsTypes] === v)) as VocalPartsTypes,
}
