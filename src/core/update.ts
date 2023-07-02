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
import { getKeyFromValue, timeStringToMilliseconds } from '../utils'

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
    rank_band?: BankRankingsOptions
    game_origin?: string
    rating?: RatingValues
}

export type InstrumentRankingsOptions = BankRankingsOptions | 'No Part'

export type BankRankingsOptions =
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

export const updateDTA = (dta: DTADocument, update?: UpdateDataOptions) => {
    if (update?.id) dta.content.id = update.id

    if (update?.name) dta.content.name = update.name

    if (update?.artist) dta.content.artist = update.artist

    if (update?.master !== undefined) dta.content.master = update.master

    if (update?.song_id !== undefined) dta.content.song_id = update.song_id

    if (update?.songname) dta.content.songname = update.songname

    if (update?.tracks) {
        dta.content.tracks_count = []
        dta.content.pans = []
        dta.content.vols = []

        const { drum, bass, guitar, vocals, keys, backing, hasCrowdChannels } =
            update.tracks

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

    if (update?.vocal_parts)
        dta.content.vocal_parts = getKeyFromValue.vocal_parts(
            update.vocal_parts
        )

    if (update?.mute_volume) dta.content.mute_volume = update.mute_volume

    if (update?.mute_volume_vocals)
        dta.content.mute_volume_vocals = update.mute_volume_vocals

    if (update?.hopo_threshold)
        dta.content.hopo_threshold = update.hopo_threshold

    if (update?.bank) dta.content.bank = getKeyFromValue.bank(update.bank)

    if (update?.drum_bank)
        dta.content.drum_bank = getKeyFromValue.drum_bank(update.drum_bank)

    if (update?.anim_tempo)
        dta.content.anim_tempo = getKeyFromValue.anim_tempo(update.anim_tempo)

    if (update?.band_fail_cue)
        dta.content.band_fail_cue = getKeyFromValue.band_fail_cue(
            update.band_fail_cue
        )

    if (update?.song_scroll_speed)
        dta.content.song_scroll_speed = getKeyFromValue.song_scroll_speed(
            update.song_scroll_speed
        )

    if (update?.preview) {
        if (typeof update.preview === 'string') {
            const time = timeStringToMilliseconds(update.preview)
            dta.content.preview = [time, time + 30000]
        } else {
            // if (typeof update.preview === 'number')
            dta.content.preview = [update.preview, update.preview + 30000]
        }
    }
    if (update?.song_length) {
        if (typeof update.song_length === 'string') {
            const time = timeStringToMilliseconds(update.song_length)
            dta.content.song_length = time
        } else {
            // if (typeof update.song_length === 'number')
            dta.content.song_length = update.song_length
        }
    }

    return dta
}
