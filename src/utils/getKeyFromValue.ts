import {
    AnimTempoTypes,
    AnimTempoValues,
    BandFailCueTypes,
    BandFailCueValues,
    BankTypes,
    BankValues,
    DrumBankTypes,
    DrumBankValues,
    GenreTypes,
    GenreValues,
    RatingTypes,
    RatingValues,
    SongScrollSpeedTypes,
    SongScrollSpeedValues,
    SubGenreTypes,
    SubGenreValues,
    VocalGenderTypes,
    VocalGenderValues,
    VocalPartsTypes,
    VocalPartsValues,
    animTempo,
    bandFailCue,
    bank,
    drumBank,
    genre,
    rating,
    songScrollSpeed,
    subGenre,
    vocalGender,
    vocalParts,
} from './locale'

export interface GetKeyFromValueObject {
    anim_tempo: (v: AnimTempoValues) => AnimTempoTypes
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
 * Functions used on the `DTADocument.update()` method.
 *
 * It resolves many values accepted from the update method to actual values used on the `.dta` file.
 */
export const getKeyFromValue: GetKeyFromValueObject = {
    anim_tempo: (v) =>
        Number(
            Object.keys(animTempo).find(
                (key) => animTempo[Number(key) as AnimTempoTypes] === v
            )
        ) as AnimTempoTypes,
    band_fail_cue: (v) =>
        String(
            Object.keys(bandFailCue).find(
                (key) => bandFailCue[key as BandFailCueTypes] === v
            )
        ) as BandFailCueTypes,
    bank: (v) =>
        String(
            Object.keys(bank).find((key) => bank[key as BankTypes] === v)
        ) as BankTypes,
    drum_bank: (v) =>
        String(
            Object.keys(drumBank).find(
                (key) => drumBank[key as DrumBankTypes] === v
            )
        ) as DrumBankTypes,
    genre: (v) =>
        String(
            Object.keys(genre).find((key) => genre[key as GenreTypes] === v)
        ) as GenreTypes,
    rating: (v) =>
        Number(
            Object.keys(rating).find(
                (key) => rating[Number(key) as RatingTypes] === v
            )
        ) as RatingTypes,
    song_scroll_speed: (v) =>
        Number(
            Object.keys(songScrollSpeed).find(
                (key) =>
                    songScrollSpeed[Number(key) as SongScrollSpeedTypes] === v
            )
        ) as SongScrollSpeedTypes,
    sub_genre: (v) =>
        String(
            Object.keys(subGenre).find(
                (key) => subGenre[key as SubGenreTypes] === v
            )
        ) as SubGenreTypes,
    vocal_gender: (v) =>
        String(
            Object.keys(vocalGender).find(
                (key) => vocalGender[key as VocalGenderTypes] === v
            )
        ) as VocalGenderTypes,
    vocal_parts: (v) =>
        Number(
            Object.keys(vocalParts).find(
                (key) => vocalParts[Number(key) as VocalPartsTypes] === v
            )
        ) as VocalPartsTypes,
}
