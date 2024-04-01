import { DTAFile } from '../../core/lib/dta'

export type SongDrumMixNames = 'drums0' | 'drums1' | 'drums2' | 'drums3' | 'drums4' | undefined
/**
 * Returns the drum mix of the song.
 *
 * Returns `undefined` if there's no drum part or compatible drum mixing.
 * - - - -
 * @param {DTAFile | DTAFile} song The parsed song you want the drum mixing information from.
 * @returns {string | undefined} The drum mix of the song. Returns `undefined` if there's no
 * drum part or compatible drum mixing.
 */
export const checkDrumMix = (song: DTAFile): SongDrumMixNames => {
  switch (song.tracks_count[0]) {
    case 2:
      return 'drums0'
    case 3:
      return 'drums4'
    case 4:
      return 'drums1'
    case 5:
      return 'drums2'
    case 6:
      return 'drums3'
    default:
      return undefined
  }
  // const drumChannels = song.tracks_count[0]

  // if (drumChannels === 2) drumMix = 'drums0'
  // else if (drumChannels === 3) drumMix = 'drums4'
  // else if (drumChannels === 4) drumMix = 'drums1'
  // else if (drumChannels === 5) drumMix = 'drums2'
  // else if (drumChannels === 6) drumMix = 'drums3'

  // return drumMix
}
