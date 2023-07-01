import { DTADocument } from '../@types/DTADocument'
import { AnimTempoValues, BandFailCueValues, BankValues, DrumBankValues, SongScrollSpeedValues, VocalPartsValues } from '../locale/core'
import { getKeyFromValue } from '../utils'

export interface UpdateDataOptions {
    id?: string
    name?: string
    artist?: string
    master?: boolean
    song_id?: string | number
    songname?: string
    tracks?: [DrumTracksTypes | null, InstrumentTracksTypes | null, InstrumentTracksTypes | null, InstrumentTracksTypes | null, InstrumentTracksTypes | null, InstrumentTracksTypes | null, boolean?]
    vocal_parts?: VocalPartsValues
    bank?: BankValues
    drum_bank?: DrumBankValues
    anim_tempo?: AnimTempoValues
    band_fail_cue?: BandFailCueValues
    song_scroll_speed?: SongScrollSpeedValues
    preview?: number | string | [number | string, (number | string)?] | PreviewUpdateOptions
    song_length?: number | [number, number] | [number, number, number]
    rank_band?: BankRankingsOptions
    game_origin?: string
    rating?: 'Family Friendly' | 'Supervision Recommended' | 'Mature Content' | 'No Rating'
}

export type InstrumentRankingsOptions = BankRankingsOptions | 'No Part'

export type BankRankingsOptions = 'Warmup' | 'Apprentice' | 'Solid' | 'Moderate' | 'Challenging' | 'Nightmare' | 'Impossible'

export type DrumTracksTypes = 'Stereo Else' | 'Mono Kick + Stereo Else' | 'Mono Kick + Mono Snare + Stereo Else' | 'Mono Kick + Stereo Snare + Stereo Else' | 'Stereo Kick + Stereo Snare + Stereo Else'

export type InstrumentTracksTypes = 'Mono' | 'Stereo'

export interface PreviewUpdateOptions {
    start: number
    end?: number
}

const pansGenerator = (count: DrumTracksTypes | InstrumentTracksTypes): number[] => {
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

        const [drumTracksType, bassTracksType, guitarTracksType, vocalsTracksType, keysTracksType, backingTracksType, hasCrowd] = update.tracks

        let drum: number, bass: number, guitar: number, vocals: number, keys: number, backing: number

        drum = drumTracksType !== null ? pansGenerator(drumTracksType).length : 0
        bass = bassTracksType !== null ? pansGenerator(bassTracksType).length : 0
        guitar = guitarTracksType !== null ? pansGenerator(guitarTracksType).length : 0
        vocals = vocalsTracksType !== null ? pansGenerator(vocalsTracksType).length : 0
        keys = keysTracksType !== null ? pansGenerator(keysTracksType).length : 0
        backing = backingTracksType !== null ? pansGenerator(backingTracksType).length : 0

        dta.content.tracks_count.push(drum, bass, guitar, vocals, keys, backing)

        drumTracksType !== null &&
            pansGenerator(drumTracksType).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

        bassTracksType !== null &&
            pansGenerator(bassTracksType).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

        guitarTracksType !== null &&
            pansGenerator(guitarTracksType).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

        vocalsTracksType !== null &&
            pansGenerator(vocalsTracksType).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

        keysTracksType !== null &&
            pansGenerator(keysTracksType).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

        backingTracksType !== null &&
            pansGenerator(backingTracksType).forEach((pan) => {
                dta.content.pans.push(pan)
                dta.content.vols.push(0)
            })

        if (hasCrowd !== undefined && hasCrowd) {
            dta.content.tracks_count.push(2)
            dta.content.pans.push(-2.5, 2.5)
            dta.content.vols.push(0, 0)
        }
    }

    if (update?.vocal_parts) dta.content.vocal_parts = getKeyFromValue.vocal_parts(update.vocal_parts)

    if (update?.bank) dta.content.bank = getKeyFromValue.bank(update.bank)

    if (update?.drum_bank) dta.content.drum_bank = getKeyFromValue.drum_bank(update.drum_bank)
    if (update?.anim_tempo) dta.content.anim_tempo = getKeyFromValue.anim_tempo(update.anim_tempo)
    if (update?.band_fail_cue) dta.content.band_fail_cue = getKeyFromValue.band_fail_cue(update.band_fail_cue)
    if (update?.song_scroll_speed) dta.content.song_scroll_speed = getKeyFromValue.song_scroll_speed(update.song_scroll_speed)
    return dta
}
