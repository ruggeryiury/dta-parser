import { DTADocument } from '../@types/DTADocument'

type CheckDrumMixReturnType =
    | 'drums0'
    | 'drums1'
    | 'drums2'
    | 'drums3'
    | 'drums4'
    | undefined
/**
 * Returns the drum mix of the song.
 *
 * Returns `undefined` if there's no drum part or compatible drum mixing.
 * - - - -
 * @param {DTADocument} song The parsed song you want the drum mixing information from.
 * @returns {string | undefined} The drum mix of the song. Returns `undefined` if there's no
 * drum part or compatible drum mixing.
 */
export const checkDrumMix = (song: DTADocument): CheckDrumMixReturnType => {
    let drumMix: ReturnType<typeof checkDrumMix>
    const drumChannels = song.content.tracks_count[0]

    if (drumChannels === 2) drumMix = 'drums0'
    else if (drumChannels === 3) drumMix = 'drums4'
    else if (drumChannels === 4) drumMix = 'drums1'
    else if (drumChannels === 5) drumMix = 'drums2'
    else if (drumChannels === 6) drumMix = 'drums3'

    return drumMix
}
