import { DTADocument } from '../@types/DTADocument'
import {
    AnimTempoValues,
    BandFailCueValues,
    BankValues,
    DrumBankValues,
    GenreValues,
    RatingValues,
    SongKeyMajorValues,
    SongKeyMinorValues,
    SongScrollSpeedValues,
    TrainerKeyOverrideValues,
    VocalGenderValues,
    VocalPartsValues,
} from '../locale/core'
import {
    bandRankCalc,
    dtaRankCalc,
    getKeyFromValue,
    timeStringToMilliseconds,
} from '../utils'

export interface UpdateDataOptions {
    id?: string
    name?: string
    artist?: string
    master?: boolean
    song_id?: string | number
    songname?: string
    tracks?: TrackUpdateOptions
    mute_volume?: number
    mute_volume_vocals?: number
    hopo_threshold?: number
    bank?: BankValues
    drum_bank?: DrumBankValues
    anim_tempo?: AnimTempoValues
    band_fail_cue?: BandFailCueValues
    song_scroll_speed?: SongScrollSpeedValues
    preview?: string | number
    song_length?: string | number
    rank_band?: BandRankingsOptions
    game_origin?: string
    rating?: RatingValues
    genre?:
        | GenreUpdateOptions<'Alternative'>
        | GenreUpdateOptions<'Blues'>
        | GenreUpdateOptions<'Classical'>
        | GenreUpdateOptions<'Classic Rock'>
        | GenreUpdateOptions<'Emo'>
        | GenreUpdateOptions<'Fusion'>
        | GenreUpdateOptions<'Glam'>
        | GenreUpdateOptions<'Hip-Hop/Rap'>
        | GenreUpdateOptions<'Indie Rock'>
        | GenreUpdateOptions<'Inspirational'>
        | GenreUpdateOptions<'Jazz'>
        | GenreUpdateOptions<'J-Rock'>
        | GenreUpdateOptions<'Latin'>
        | GenreUpdateOptions<'Metal'>
        | GenreUpdateOptions<'New Wave'>
        | GenreUpdateOptions<'Novelty'>
        | GenreUpdateOptions<'Nu-Metal'>
        | GenreUpdateOptions<'Other'>
        | GenreUpdateOptions<'Pop/Dance/Electronic'>
        | GenreUpdateOptions<'Pop-Rock'>
        | GenreUpdateOptions<'Prog'>
        | GenreUpdateOptions<'Punk'>
        | GenreUpdateOptions<'R&B/Soul/Funk'>
        | GenreUpdateOptions<'Reggae/Ska'>
        | GenreUpdateOptions<'Rock'>
        | GenreUpdateOptions<'Southern Rock'>
        | GenreUpdateOptions<'World'>
    year_released?: number
    year_recorded?: number
    album?: AlbumUpdateOptions
    key_signature?: SongKeyUpdateOptions
    author?: string
    karaoke?: boolean
    multitrack?: boolean
    doubleKick?: boolean
    convert?: boolean
    rhythmOnKeys?: boolean
    rhythmOnBass?: boolean
    CATemh?: boolean
    expertOnly?: boolean
}

export type InstrumentRankingsOptions = BandRankingsOptions | -1 | 'No Part'

export type BandRankingsOptions =
    | 0
    | 'Warmup'
    | 1
    | 'Apprentice'
    | 2
    | 'Solid'
    | 3
    | 'Moderate'
    | 4
    | 'Challenging'
    | 5
    | 'Nightmare'
    | 6
    | 'Impossible'

export type DrumTracksTypes =
    | 2
    | 'Stereo Else'
    | 3
    | 'Mono Kick + Stereo Else'
    | 4
    | 'Mono Kick + Mono Snare + Stereo Else'
    | 5
    | 'Mono Kick + Stereo Snare + Stereo Else'
    | 6
    | 'Stereo Kick + Stereo Snare + Stereo Else'

export type InstrumentTracksTypes = 'Mono' | 'Stereo' | 1 | 2

export interface TrackUpdateOptions {
    drum?: DrumUpdateOptions
    bass?: BassUpdateOptions
    guitar?: GuitarUpdateOptions
    vocals?: VocalsUpdateOptions
    keys?: KeysUpdateOptions
    backing: InstrumentTracksTypes
    hasCrowdChannels?: boolean
}

export interface InstrumentPartRequiredUpdateOptions {
    channels?: InstrumentTracksTypes
    rank: BandRankingsOptions
    hasSolo?: boolean
}

export interface DrumUpdateOptions
    extends Omit<InstrumentPartRequiredUpdateOptions, 'channels'> {
    channels?: DrumTracksTypes
}

export interface GuitarUpdateOptions
    extends InstrumentPartRequiredUpdateOptions {
    real_rank?: BandRankingsOptions
    tuning?: [number, number, number, number, number, number]
}

export interface BassUpdateOptions extends InstrumentPartRequiredUpdateOptions {
    real_rank?: BandRankingsOptions
    tuning?: [number, number, number, number]
}
export interface VocalsUpdateOptions
    extends InstrumentPartRequiredUpdateOptions {
    vocal_parts?: Exclude<VocalPartsValues, 'No Vocals'> | 1 | 2 | 3
    vocal_gender?: VocalGenderValues
}

export interface KeysUpdateOptions extends InstrumentPartRequiredUpdateOptions {
    real_rank?: BandRankingsOptions
}

export interface GenreUpdateOptions<G extends GenreValues> {
    genre: G
    sub_genre: SubGenreUpdateValues<G>
}

export interface AlbumUpdateOptions {
    hasArt: boolean
    name: string
    track_number: number
}

export interface SongKeyUpdateOptions {
    key: SongKeyMajorValues | SongKeyMinorValues
    trainer_key_override?: TrainerKeyOverrideValues
}

export type SubGenreUpdateValues<G extends GenreValues> = G extends
    | 'Classical'
    | 'Classic Rock'
    | 'Emo'
    | 'Fusion'
    | 'Grunge'
    | 'Inspirational'
    | 'J-Rock'
    | 'Latin'
    | 'Novelty'
    | 'Nu-Metal'
    | 'Southern Rock'
    | 'World'
    ? G
    : G extends 'Alternative'
    ? 'Alternative' | 'College' | 'Other'
    : G extends 'Blues'
    ?
          | 'Acoustic'
          | 'Chicago'
          | 'Classic'
          | 'Contemporary'
          | 'Country'
          | 'Delta'
          | 'Electric'
          | 'Other'
    : G extends 'Country'
    ?
          | 'Alternative'
          | 'Bluegrass'
          | 'Contemporary'
          | 'Honky Tonk'
          | 'Outlaw'
          | 'Traditional Folk'
          | 'Other'
    : G extends 'Glam'
    ? 'Glam' | 'Goth' | 'Other'
    : G extends 'Hip-Hop/Rap'
    ?
          | 'Alternative Rap'
          | 'Gangsta'
          | 'Hardcore Rap'
          | 'Hip Hop'
          | 'Old School Hip Hop'
          | 'Rap'
          | 'Trip Hop'
          | 'Underground Rap'
          | 'Other'
    : G extends 'Indie Rock'
    ?
          | 'Indie Rock'
          | 'Lo-fi'
          | 'Math Rock'
          | 'Noise'
          | 'Post Rock'
          | 'Shoegazing'
          | 'Other'
    : G extends 'Jazz'
    ?
          | 'Acid Jazz'
          | 'Contemporary'
          | 'Experimental'
          | 'Ragtime'
          | 'Smooth'
          | 'Other'
    : G extends 'Metal'
    ?
          | 'Alternative'
          | 'Black'
          | 'Core'
          | 'Death'
          | 'Hair'
          | 'Industrial'
          | 'Metal'
          | 'Power'
          | 'Prog'
          | 'Speed'
          | 'Thrash'
          | 'Other'
    : G extends 'New Wave'
    ? 'Dark Wave' | 'Electroclash' | 'New Wave' | 'Synthpop' | 'Other'
    : G extends 'Pop/Dance/Electronic'
    ?
          | 'Ambient'
          | 'Breakbeat'
          | 'Chiptune'
          | 'Dance'
          | 'Downtempo'
          | 'Dub'
          | 'Drum and Bass'
          | 'Electronica'
          | 'Garage'
          | 'Hardcore Dance'
          | 'House'
          | 'Industrial'
          | 'Techno'
          | 'Trance'
          | 'Other'
    : G extends 'Pop-Rock'
    ? 'Contemporary' | 'Pop' | 'Soft Rock' | 'Teen' | 'Other'
    : G extends 'Prog'
    ? 'Prog Rock'
    : G extends 'Punk'
    ?
          | 'Alternative'
          | 'Classic'
          | 'Dance Punk'
          | 'Garage'
          | 'Hardcore'
          | 'Pop'
          | 'Other'
    : G extends 'R&B/Soul/Funk'
    ? 'Disco' | 'Funk' | 'Motown' | 'Rhythm and Blues' | 'Soul' | 'Other'
    : G extends 'Reggae/Ska'
    ? 'Reggae' | 'Ska' | 'Other'
    : G extends 'Rock'
    ?
          | 'Arena'
          | 'Blues'
          | 'Folk Rock'
          | 'Garage'
          | 'Hard Rock'
          | 'Psychedelic'
          | 'Rock'
          | 'Rockabilly'
          | 'Rock and Roll'
          | 'Surf'
          | 'Other'
    : G extends 'Other'
    ?
          | 'A capella'
          | 'Acoustic'
          | 'Contemporary Folk'
          | 'Experimental'
          | 'Oldies'
          | 'Other'
    : never

/**
 * Generates an array of pan values based on the provided track count.
 * - - - -
 * @param {DrumTracksTypes | InstrumentTracksTypes} count The type of tracks.
 * @returns {number[]} An array of pan values based on the track count.
 */
const pansGenerator = (
    count: DrumTracksTypes | InstrumentTracksTypes
): number[] => {
    if (count === 'Mono' || count === 1) {
        return [0]
    } else if (count === 'Stereo' || count === 'Stereo Else' || count === 2) {
        return [-1, 1]
    } else if (count === 'Mono Kick + Stereo Else' || count === 3) {
        return [0, -1, 1]
    } else if (
        count === 'Mono Kick + Mono Snare + Stereo Else' ||
        count === 4
    ) {
        return [0, 0, -1, 1]
    } else if (
        count === 'Mono Kick + Stereo Snare + Stereo Else' ||
        count === 5
    ) {
        return [0, -1, 1, -1, 1]
    } else {
        return [-1, 1, -1, 1, -1, 1]
    }
}

/**
 * Updates a song with the provided update options.
 * @param {DTADocument} dta  The DTADocument to update.
 * @param {UpdateDataOptions} update The options for the parsed song updating process.
 */
export const updateDTA = (dta: DTADocument, update: UpdateDataOptions) => {
    const {
        id,
        name,
        artist,
        master,
        song_id,
        songname,
        tracks,
        mute_volume,
        mute_volume_vocals,
        hopo_threshold,
        bank,
        drum_bank,
        anim_tempo,
        band_fail_cue,
        song_scroll_speed,
        preview,
        song_length,
        rank_band,
        game_origin,
        rating,
        genre,
        year_released,
        year_recorded,
        album,
        key_signature,
        author,
        karaoke,
        multitrack,
        doubleKick,
        convert,
        rhythmOnKeys,
        rhythmOnBass,
        CATemh,
        expertOnly,
    } = update

    if (id) dta.content.id = id

    if (name) dta.content.name = name

    if (artist) dta.content.artist = artist

    if (master !== undefined) dta.content.master = master

    if (song_id !== undefined) dta.content.song_id = song_id

    if (songname) dta.content.songname = songname

    if (tracks) {
        dta.content.tracks_count = []
        dta.content.pans = []
        dta.content.vols = []
        dta.content.vocal_parts = 0
        dta.content.rank_band = 0
        dta.content.rank_drum = 0
        dta.content.rank_bass = 0
        dta.content.rank_guitar = 0
        dta.content.rank_vocals = 0
        dta.content.rank_keys = 0
        dta.content.rank_real_guitar = 0
        dta.content.rank_real_bass = 0
        dta.content.rank_real_keys = 0
        dta.content.vocal_gender = 'male'
        let instrumentCount = 0

        const drumT = tracks.drum
            ? pansGenerator(
                  tracks.drum.channels === undefined
                      ? 'Stereo Else'
                      : tracks.drum.channels
              ).length
            : 0
        const bassT = tracks.bass
            ? pansGenerator(
                  tracks.bass.channels === undefined
                      ? 'Stereo'
                      : tracks.bass.channels
              ).length
            : 0
        const guitarT = tracks.guitar
            ? pansGenerator(
                  tracks.guitar.channels === undefined
                      ? 'Stereo'
                      : tracks.guitar.channels
              ).length
            : 0
        const vocalsT = tracks.vocals
            ? pansGenerator(
                  tracks.vocals.channels === undefined
                      ? 'Stereo'
                      : tracks.vocals.channels
              ).length
            : 0
        const keysT = tracks.keys
            ? pansGenerator(
                  tracks.keys.channels === undefined
                      ? 'Stereo'
                      : tracks.keys.channels
              ).length
            : 0
        const backingT = tracks.backing
            ? pansGenerator(tracks.backing).length
            : 0

        dta.content.tracks_count.push(
            drumT,
            bassT,
            guitarT,
            vocalsT,
            keysT,
            backingT
        )

        let drumR = 0,
            bassR = 0,
            guitarR = 0,
            vocalsR = 0,
            keysR = 0,
            real_guitarR = 0,
            real_bassR = 0,
            real_keysR = 0

        if (tracks.drum) {
            instrumentCount++

            drumR = dtaRankCalc('drum', tracks.drum.rank)
            dta.content.rank_drum = drumR

            pansGenerator(
                tracks.drum.channels === undefined
                    ? 'Stereo Else'
                    : tracks.drum.channels
            ).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

            if (tracks.drum.hasSolo !== undefined && tracks.drum.hasSolo) {
                if (!dta.content.solo) dta.content.solo = []
                dta.content.solo.push('drum')
            }
        }

        if (tracks.bass) {
            instrumentCount++

            bassR = dtaRankCalc('bass', tracks.bass.rank)
            real_bassR = dtaRankCalc(
                'real_bass',
                tracks.bass.real_rank !== undefined ? tracks.bass.real_rank : -1
            )
            dta.content.rank_bass = bassR
            dta.content.rank_real_bass = real_bassR

            if (real_bassR > 0) {
                if (tracks.bass.tuning !== undefined) {
                    dta.content.real_bass_tuning = tracks.bass.tuning
                } else dta.content.real_bass_tuning = [0, 0, 0, 0]
            }

            pansGenerator(
                tracks.bass.channels === undefined
                    ? 'Stereo'
                    : tracks.bass.channels
            ).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

            if (tracks.bass.hasSolo !== undefined && tracks.bass.hasSolo) {
                if (!dta.content.solo) dta.content.solo = []
                dta.content.solo.push('bass')
            }
        }

        if (tracks.guitar) {
            instrumentCount++

            guitarR = dtaRankCalc('guitar', tracks.guitar.rank)
            real_guitarR = dtaRankCalc(
                'real_guitar',
                tracks.guitar.real_rank !== undefined
                    ? tracks.guitar.real_rank
                    : -1
            )
            dta.content.rank_guitar = guitarR
            dta.content.rank_real_guitar = real_guitarR

            if (real_guitarR > 0) {
                if (tracks.guitar.tuning !== undefined) {
                    dta.content.real_guitar_tuning = tracks.guitar.tuning
                } else dta.content.real_guitar_tuning = [0, 0, 0, 0, 0, 0]
            }

            pansGenerator(
                tracks.guitar.channels === undefined
                    ? 'Stereo'
                    : tracks.guitar.channels
            ).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

            if (tracks.guitar.hasSolo !== undefined && tracks.guitar.hasSolo) {
                if (!dta.content.solo) dta.content.solo = []
                dta.content.solo.push('guitar')
            }
        }

        if (tracks.vocals) {
            instrumentCount++

            vocalsR = dtaRankCalc('guitar', tracks.vocals.rank)
            dta.content.rank_vocals = vocalsR

            if (tracks.vocals.vocal_parts !== undefined) {
                dta.content.vocal_parts = getKeyFromValue.vocal_parts(
                    tracks.vocals.vocal_parts === 1
                        ? 'Solo Vocals'
                        : tracks.vocals.vocal_parts === 2
                        ? '2-Part Harmonies'
                        : tracks.vocals.vocal_parts === 3
                        ? '3-Part Harmonies'
                        : tracks.vocals.vocal_parts
                )
            } else dta.content.vocal_parts = 1

            pansGenerator(
                tracks.vocals.channels === undefined
                    ? 'Stereo'
                    : tracks.vocals.channels
            ).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

            if (tracks.vocals.hasSolo !== undefined && tracks.vocals.hasSolo) {
                if (!dta.content.solo) dta.content.solo = []
                dta.content.solo.push('vocal_percussion')
            }

            if (tracks.vocals.vocal_gender)
                dta.content.vocal_gender = getKeyFromValue.vocal_gender(
                    tracks.vocals.vocal_gender
                )
        }

        if (tracks.keys) {
            instrumentCount++

            keysR = dtaRankCalc('guitar', tracks.keys.rank)
            real_keysR = dtaRankCalc(
                'real_keys',
                tracks.keys.real_rank !== undefined ? tracks.keys.real_rank : -1
            )
            dta.content.rank_keys = keysR
            dta.content.rank_real_keys = real_keysR

            pansGenerator(
                tracks.keys.channels === undefined
                    ? 'Stereo'
                    : tracks.keys.channels
            ).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })
        }

        pansGenerator(tracks.backing).forEach((pan) => {
            dta.content.pans.push(pan)
            dta.content.vols.push(0)
        })

        if (tracks.hasCrowdChannels !== undefined && tracks.hasCrowdChannels) {
            dta.content.tracks_count.push(2)
            dta.content.pans.push(-2.5, 2.5)
            dta.content.vols.push(0, 0)
        }

        if (rank_band) dta.content.rank_band = dtaRankCalc('band', rank_band)
        else
            dta.content.rank_band = bandRankCalc(
                guitarR + bassR + drumR + keysR + vocalsR,
                instrumentCount
            )
    }

    if (mute_volume) dta.content.mute_volume = mute_volume

    if (mute_volume_vocals) dta.content.mute_volume_vocals = mute_volume_vocals

    if (hopo_threshold) dta.content.hopo_threshold = hopo_threshold

    if (bank) dta.content.bank = getKeyFromValue.bank(bank)

    if (drum_bank) dta.content.drum_bank = getKeyFromValue.drum_bank(drum_bank)

    if (anim_tempo)
        dta.content.anim_tempo = getKeyFromValue.anim_tempo(anim_tempo)

    if (band_fail_cue)
        dta.content.band_fail_cue = getKeyFromValue.band_fail_cue(band_fail_cue)

    if (song_scroll_speed)
        dta.content.song_scroll_speed =
            getKeyFromValue.song_scroll_speed(song_scroll_speed)

    if (preview) {
        if (typeof preview === 'string') {
            const time = timeStringToMilliseconds(preview)
            dta.content.preview = [time, time + 30000]
        } else {
            // if (typeof preview === 'number')
            dta.content.preview = [preview, preview + 30000]
        }
    }

    if (song_length) {
        if (typeof song_length === 'string') {
            const time = timeStringToMilliseconds(song_length)
            dta.content.song_length = time
        } else {
            // if (typeof song_length === 'number')
            dta.content.song_length = song_length
        }
    }

    if (game_origin) dta.content.game_origin = game_origin

    if (rating) dta.content.rating = getKeyFromValue.rating(rating)

    if (genre) {
        dta.content.genre = getKeyFromValue.genre(genre.genre)
        dta.content.sub_genre = getKeyFromValue.sub_genre(genre.sub_genre)
    }

    if (year_released) dta.content.year_released = year_released
    if (year_recorded) dta.content.year_recorded = year_recorded

    if (album) {
        dta.content.album_art = album.hasArt
        dta.content.album_name = album.name
        dta.content.album_track_number = album.track_number
    }

    if (key_signature) {
        delete dta.content.vocal_tonic_note
        delete dta.content.song_tonality
        delete dta.content.song_key

        if (key_signature.key === 'C Major') {
            dta.content.vocal_tonic_note = 0
            dta.content.song_tonality = 0
        } else if (key_signature.key === 'D♭ Major') {
            dta.content.vocal_tonic_note = 1
            dta.content.song_tonality = 0
        } else if (key_signature.key === 'D Major') {
            dta.content.vocal_tonic_note = 2
            dta.content.song_tonality = 0
        } else if (key_signature.key === 'E♭ Major') {
            dta.content.vocal_tonic_note = 3
            dta.content.song_tonality = 0
        } else if (key_signature.key === 'E Major') {
            dta.content.vocal_tonic_note = 4
            dta.content.song_tonality = 0
        } else if (key_signature.key === 'F Major') {
            dta.content.vocal_tonic_note = 5
            dta.content.song_tonality = 0
        } else if (key_signature.key === 'F♯ Major') {
            dta.content.vocal_tonic_note = 6
            dta.content.song_tonality = 0
        } else if (key_signature.key === 'G Major') {
            dta.content.vocal_tonic_note = 7
            dta.content.song_tonality = 0
        } else if (key_signature.key === 'A♭ Major') {
            dta.content.vocal_tonic_note = 8
            dta.content.song_tonality = 0
        } else if (key_signature.key === 'A Major') {
            dta.content.vocal_tonic_note = 9
            dta.content.song_tonality = 0
        } else if (key_signature.key === 'B♭ Major') {
            dta.content.vocal_tonic_note = 10
            dta.content.song_tonality = 0
        } else if (key_signature.key === 'B Major') {
            dta.content.vocal_tonic_note = 11
            dta.content.song_tonality = 0
        } else if (key_signature.key === 'C Minor') {
            dta.content.vocal_tonic_note = 0
            dta.content.song_tonality = 1
        } else if (key_signature.key === 'C♯ Minor') {
            dta.content.vocal_tonic_note = 1
            dta.content.song_tonality = 1
        } else if (key_signature.key === 'D Minor') {
            dta.content.vocal_tonic_note = 2
            dta.content.song_tonality = 1
        } else if (key_signature.key === 'D♯ Minor') {
            dta.content.vocal_tonic_note = 3
            dta.content.song_tonality = 1
        } else if (key_signature.key === 'E Minor') {
            dta.content.vocal_tonic_note = 4
            dta.content.song_tonality = 1
        } else if (key_signature.key === 'F Minor') {
            dta.content.vocal_tonic_note = 5
            dta.content.song_tonality = 1
        } else if (key_signature.key === 'F♯ Minor') {
            dta.content.vocal_tonic_note = 6
            dta.content.song_tonality = 1
        } else if (key_signature.key === 'G Minor') {
            dta.content.vocal_tonic_note = 7
            dta.content.song_tonality = 1
        } else if (key_signature.key === 'G♯ Minor') {
            dta.content.vocal_tonic_note = 8
            dta.content.song_tonality = 1
        } else if (key_signature.key === 'A Minor') {
            dta.content.vocal_tonic_note = 9
            dta.content.song_tonality = 1
        } else if (key_signature.key === 'A♯ Minor') {
            dta.content.vocal_tonic_note = 10
            dta.content.song_tonality = 1
        } else {
            // if (key_signature.key === 'B Minor')

            dta.content.vocal_tonic_note = 11
            dta.content.song_tonality = 0
        }

        if (key_signature.trainer_key_override) {
            if (key_signature.trainer_key_override === 'C')
                dta.content.song_key = 0
            if (key_signature.trainer_key_override === 'C♯/D♭')
                dta.content.song_key = 1
            if (key_signature.trainer_key_override === 'D')
                dta.content.song_key = 2
            if (key_signature.trainer_key_override === 'D♯/E♭')
                dta.content.song_key = 3
            if (key_signature.trainer_key_override === 'E')
                dta.content.song_key = 4
            if (key_signature.trainer_key_override === 'F')
                dta.content.song_key = 5
            if (key_signature.trainer_key_override === 'F♯/G♭')
                dta.content.song_key = 6
            if (key_signature.trainer_key_override === 'G')
                dta.content.song_key = 7
            if (key_signature.trainer_key_override === 'G♯/A♭')
                dta.content.song_key = 8
            if (key_signature.trainer_key_override === 'A')
                dta.content.song_key = 9
            if (key_signature.trainer_key_override === 'A♯/A♭')
                dta.content.song_key = 10
            if (key_signature.trainer_key_override === 'B')
                dta.content.song_key = 11
        }
    }

    if (author) dta.content.author = author

    if (karaoke !== undefined) dta.content.karaoke = karaoke

    if (multitrack !== undefined) dta.content.multitrack = multitrack

    if (doubleKick !== undefined) dta.content.doubleKick = doubleKick

    if (convert !== undefined) dta.content.convert = convert

    if (rhythmOnBass !== undefined) dta.content.rhythmOnBass = rhythmOnBass

    if (rhythmOnKeys !== undefined) dta.content.rhythmOnKeys = rhythmOnKeys

    if (CATemh !== undefined) dta.content.CATemh = CATemh

    if (expertOnly !== undefined) dta.content.expertOnly = expertOnly

    return dta
}
