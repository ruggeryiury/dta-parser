import { DTADocument } from '../@types/DTADocument'
import {
    AnimTempoValues,
    BandFailCueValues,
    BankValues,
    DrumBankValues,
    GenreValues,
    RatingValues,
    SongScrollSpeedValues,
    SubGenreValues,
    VocalGenderValues,
    VocalPartsValues,
} from '../locale/core'
import {
    RankTypes,
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
}

export type InstrumentRankingsOptions = BandRankingsOptions | 'No Part'

export type BandRankingsOptions =
    | 'Warmup'
    | 'Apprentice'
    | 'Solid'
    | 'Moderate'
    | 'Challenging'
    | 'Nightmare'
    | 'Impossible'

export type BandRankingNumberOptions = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6

export type DrumTracksTypes =
    | 'Stereo Else'
    | 'Mono Kick + Stereo Else'
    | 'Mono Kick + Mono Snare + Stereo Else'
    | 'Mono Kick + Stereo Snare + Stereo Else'
    | 'Stereo Kick + Stereo Snare + Stereo Else'

export type InstrumentTracksTypes = 'Mono' | 'Stereo'

export interface TrackUpdateOptions {
    drum?: InstrumentTracksUpdateOptions<'drum'>
    bass?: PROInstrumentTracksUpdateOptions<'bass'>
    guitar?: PROInstrumentTracksUpdateOptions<'guitar'>
    vocals?: VocalTracksUpdateOptions
    keys?: PROInstrumentTracksUpdateOptions<'keys'>
    backing: InstrumentTracksTypes
    hasCrowdChannels?: boolean
}

export interface InstrumentTracksUpdateOptions<
    I extends Exclude<RankTypes, 'real_guitar' | 'real_bass' | 'real_keys'>
> {
    rank: BandRankingsOptions | Exclude<BandRankingNumberOptions, -1>
    channels: I extends 'drum' ? DrumTracksTypes : InstrumentTracksTypes
}

export interface VocalTracksUpdateOptions
    extends InstrumentTracksUpdateOptions<'vocals'> {
    vocal_parts: Exclude<VocalPartsValues, 'No Vocals'> | 1 | 2 | 3
}

export interface PROInstrumentTracksUpdateOptions<
    I extends 'guitar' | 'bass' | 'keys'
> extends InstrumentTracksUpdateOptions<I> {
    real_rank?: InstrumentRankingsOptions | BandRankingNumberOptions
}

export interface GenreUpdateOptions<G extends GenreValues> {
    genre: G
    sub_genre: SubGenreUpdateValues<G>
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
    if (count === 'Mono') {
        return [0]
    } else if (count === 'Stereo' || count === 'Stereo Else') {
        return [-1, 1]
    } else if (count === 'Mono Kick + Stereo Else') {
        return [0, -1, 1]
    } else if (count === 'Mono Kick + Mono Snare + Stereo Else') {
        return [-1, 1, -1, 1]
    } else if (count === 'Mono Kick + Stereo Snare + Stereo Else') {
        return [0, -1, 1, -1, 1]
    } else {
        return [-1, 1, -1, 1, -1, 1]
    }
}

/**
 * Updates a song with the provided update options.
 * @param {DTADocument} dta  The DTADocument to update.
 * @param {UpdateDataOptions} update The options for updating process.
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
        let instrumentCount = 0

        const drumT = tracks.drum
            ? pansGenerator(tracks.drum.channels).length
            : 0
        const bassT = tracks.bass
            ? pansGenerator(tracks.bass.channels).length
            : 0
        const guitarT = tracks.guitar
            ? pansGenerator(tracks.guitar.channels).length
            : 0
        const vocalsT = tracks.vocals
            ? pansGenerator(tracks.vocals.channels).length
            : 0
        const keysT = tracks.keys
            ? pansGenerator(tracks.keys.channels).length
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

        let drumR: number = 0,
            bassR: number = 0,
            guitarR: number = 0,
            vocalsR: number = 0,
            keysR: number = 0,
            real_guitarR: number = 0,
            real_bassR: number = 0,
            real_keysR: number = 0

        if (tracks.drum) {
            instrumentCount++

            drumR = dtaRankCalc('drum', tracks.drum.rank)
            dta.content.rank_drum = drumR

            pansGenerator(tracks.drum.channels).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })
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

            pansGenerator(tracks.bass.channels).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })
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

            pansGenerator(tracks.guitar.channels).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })
        }

        if (tracks.vocals) {
            instrumentCount++

            vocalsR = dtaRankCalc('guitar', tracks.vocals.rank)
            dta.content.rank_vocals = vocalsR

            pansGenerator(tracks.vocals.channels).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })
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

            pansGenerator(tracks.keys.channels).forEach((pan) => {
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

    return dta
}
