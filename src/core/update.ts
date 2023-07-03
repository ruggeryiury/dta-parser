import { DTADocument } from '../@types/DTADocument'
import {
    AnimTempoValues,
    BandFailCueValues,
    BankValues,
    DrumBankValues,
    RatingValues,
    SongScrollSpeedValues,
    VocalPartsValues,
} from '../locale/core'
import {
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
    vocal_parts?: VocalPartsValues
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
    rank_drum?: InstrumentRankingsOptions
    rank_bass?: InstrumentRankingsOptions
    rank_guitar?: InstrumentRankingsOptions
    rank_vocals?: InstrumentRankingsOptions
    rank_keys?: InstrumentRankingsOptions
    rank_real_guitar?: InstrumentRankingsOptions
    rank_real_bass?: InstrumentRankingsOptions
    rank_real_keys?: InstrumentRankingsOptions
    game_origin?: string
    rating?: RatingValues
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

export type DrumTracksTypes =
    | 'Stereo Else'
    | 'Mono Kick + Stereo Else'
    | 'Mono Kick + Mono Snare + Stereo Else'
    | 'Mono Kick + Stereo Snare + Stereo Else'
    | 'Stereo Kick + Stereo Snare + Stereo Else'

export type InstrumentTracksTypes = 'Mono' | 'Stereo'

export interface TrackUpdateOptions {
    drum?: DrumTracksTypes
    bass?: InstrumentTracksTypes
    guitar?: InstrumentTracksTypes
    vocals?: InstrumentTracksTypes
    keys?: InstrumentTracksTypes
    backing: InstrumentTracksTypes
    hasCrowdChannels?: boolean
}

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

export const updateDTA = (dta: DTADocument, update: UpdateDataOptions) => {
    const {
        id,
        name,
        artist,
        master,
        song_id,
        songname,
        tracks,
        vocal_parts,
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
        rank_drum,
        rank_bass,
        rank_guitar,
        rank_vocals,
        rank_keys,
        rank_real_guitar,
        rank_real_bass,
        rank_real_keys,
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

        const { drum, bass, guitar, vocals, keys, backing, hasCrowdChannels } =
            tracks

        const drumT = drum ? pansGenerator(drum).length : 0
        const bassT = bass ? pansGenerator(bass).length : 0
        const guitarT = guitar ? pansGenerator(guitar).length : 0
        const vocalsT = vocals ? pansGenerator(vocals).length : 0
        const keysT = keys ? pansGenerator(keys).length : 0
        const backingT = backing ? pansGenerator(backing).length : 0

        dta.content.tracks_count.push(
            drumT,
            bassT,
            guitarT,
            vocalsT,
            keysT,
            backingT
        )

        drum &&
            pansGenerator(drum).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

        bass &&
            pansGenerator(bass).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

        guitar &&
            pansGenerator(guitar).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

        vocals &&
            pansGenerator(vocals).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

        keys &&
            pansGenerator(keys).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

        pansGenerator(backing).forEach((pan) => {
            dta.content.pans.push(pan)
            dta.content.vols.push(0)
        })

        if (hasCrowdChannels !== undefined && hasCrowdChannels) {
            dta.content.tracks_count.push(2)
            dta.content.pans.push(-2.5, 2.5)
            dta.content.vols.push(0, 0)
        }
    }

    if (vocal_parts)
        dta.content.vocal_parts = getKeyFromValue.vocal_parts(vocal_parts)

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
    if (rank_band) dta.content.rank_band = dtaRankCalc('band', rank_band)
    if (rank_drum) dta.content.rank_drum = dtaRankCalc('drum', rank_drum)
    if (rank_bass) dta.content.rank_bass = dtaRankCalc('bass', rank_bass)
    if (rank_guitar)
        dta.content.rank_guitar = dtaRankCalc('guitar', rank_guitar)
    if (rank_vocals)
        dta.content.rank_vocals = dtaRankCalc('vocals', rank_vocals)
    if (rank_keys) dta.content.rank_keys = dtaRankCalc('keys', rank_keys)
    if (rank_real_guitar)
        dta.content.rank_real_guitar = dtaRankCalc(
            'real_guitar',
            rank_real_guitar
        )
    if (rank_real_bass)
        dta.content.rank_real_bass = dtaRankCalc('real_bass', rank_real_bass)
    if (rank_real_keys)
        dta.content.rank_real_keys = dtaRankCalc('real_keys', rank_real_keys)

    return dta
}
