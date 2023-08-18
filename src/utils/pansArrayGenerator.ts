import { DrumTracksTypes, InstrumentTracksTypes } from '../utils/updateDTA'

/**
 * Generates an array of pan values based on the provided track count.
 * - - - -
 * @param {DrumTracksTypes | InstrumentTracksTypes} count The type of tracks.
 * @returns {number[]} An array of pan values based on the track count.
 */
export const pansArrayGenerator = (
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
