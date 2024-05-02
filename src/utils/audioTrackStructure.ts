import { DTAFile, DrumTracksTypes, InstrumentTracksTypes } from '../core'
import { genSpaces as s } from '../utils'

/**
 * Generates a string representing a series of track counts incremented by a specified value.
 * - - - -
 * @param {number} trackStart The starting track count.
 * @param {number} add The value to increment the track count by.
 * @returns {string} A string representing the series of track counts.
 */
export const incrementTracksCount = (trackStart: number, add: number): string => {
  let returnString = ''
  const iterator = Array(add).fill(0)
  iterator.forEach((_, i) => {
    returnString += `${trackStart}${i === iterator.length - 1 ? '' : ' '}`
    trackStart++
    return
  })
  return returnString
}

/**
 * Generates an array of pan values based on the provided track count.
 * - - - -
 * @param {DrumTracksTypes | InstrumentTracksTypes} count The type of tracks.
 * @returns {number[]} An array of pan values based on the track count.
 */
export const panValueToArray = (count: DrumTracksTypes | InstrumentTracksTypes): number[] => {
  switch (count) {
    case 'Mono':
    case 1:
      return [0]
    case 'Stereo':
    case 'Stereo Else':
    case 2:
      return [-1, 1]
    case 'Mono Kick + Stereo Else':
    case 3:
      return [0, -1, 1]
    case 'Mono Kick + Mono Snare + Stereo Else':
    case 4:
      return [0, 0, -1, 1]
    case 'Mono Kick + Stereo Snare + Stereo Else':
    case 5:
      return [0, -1, 1, -1, 1]
    case 'Stereo Kick + Stereo Snare + Stereo Else':
    case 6:
      return [-1, 1, -1, 1, -1, 1]
  }
}

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
}

/**
 * An object containing detailed informations about the song's audio file track structure.
 */
export interface AudioFileTracksStructureDocument {
  /**
   * Information about the drum tracks.
   */
  drum: {
    /**
     * Tells if the song has playable drums part.
     */
    enabled: boolean
    /**
     * Quantity of channels of all drum tracks.
     */
    channels: number
    /**
     * The panning of all drum tracks.
     */
    pan: number[]
    /**
     * The volume of all drum tracks.
     */
    vol: number[]
    /**
     * Tells if the drum has more than just one stereo channels for the entire kit.
     */
    hasSepDrums: boolean
    /**
     * Tells if the drum has solo sections.
     */
    hasSolo: boolean
    /**
     * Tells if the drum has separated kick drum stems.
     */
    kickEnabled: boolean
    /**
     * Quantity of channels of the kick drum tracks.
     */
    kickChannels: number
    /**
     * The panning of the kick drum tracks.
     */
    kickPan: number[]
    /**
     * The volume of the kick drum tracks.
     */
    kickVol: number[]
    /**
     * Tells if the drum has separated snare drum stems.
     */
    snareEnabled: boolean
    /**
     * Quantity of channels of the snare drum tracks.
     */
    snareChannels: number
    /**
     * The panning of the snare drum tracks.
     */
    snarePan: number[]
    /**
     * The volume of the snare drum tracks.
     */
    snareVol: number[]
    /**
     * Tells if the drum has separated kit drum stems.
     *
     * This is always `true`, even for songs with only one stereo track for the entire kit.
     */
    kitEnabled: boolean
    /**
     * Quantity of channels of the drum kit tracks.
     *
     * This is always `Stereo`, even for songs with only one stereo track for the entire kit.
     */
    kitChannels: number
    /**
     * The panning of the drum kit tracks.
     */
    kitPan: number[]
    /**
     * The volume of the drum kit tracks.
     */
    kitVol: number[]
  }
  /**
   * Information about the bass tracks.
   */
  bass: {
    /**
     * Tells if the song has playable bass part.
     */
    enabled: boolean
    /**
     * Quantity of channels of the bass tracks.
     */
    channels: number
    /**
     * The panning of the bass tracks.
     */
    pan: number[]
    /**
     * The volume of the bass tracks.
     */
    vol: number[]
    /**
     * Tells if the bass has solo sections.
     */
    hasSolo: boolean
  }
  /**
   * Information about the guitar tracks.
   */
  guitar: {
    /**
     * Tells if the song has playable guitar part.
     */
    enabled: boolean
    /**
     * Quantity of channels of the guitar tracks.
     */
    channels: number
    /**
     * The panning of the guitar tracks.
     */
    pan: number[]
    /**
     * The volume of the guitar tracks.
     */
    vol: number[]
    /**
     * Tells if the guitar has solo sections.
     */
    hasSolo: boolean
  }
  /**
   * Information about the vocals tracks.
   */
  vocals: {
    /**
     * Tells if the song has playable vocals part.
     */
    enabled: boolean
    /**
     * Quantity of channels of the vocals tracks.
     */
    channels: number
    /**
     * The panning of the vocals tracks.
     */
    pan: number[]
    /**
     * The volume of the vocals tracks.
     */
    vol: number[]
    /**
     * Tells if the vocals has percussion sections.
     */
    hasSolo: boolean
  }
  /**
   * Information about the keys tracks.
   */
  keys: {
    /**
     * Tells if the song has playable keys part.
     */
    enabled: boolean
    /**
     * Quantity of channels of the keys tracks.
     */
    channels: number
    /**
     * The panning of the keys tracks.
     */
    pan: number[]
    /**
     * The volume of the keys tracks.
     */
    vol: number[]
    /**
     * Tells if the keys has solo sections.
     */
    hasSolo: boolean
  }
  /**
   * Information about the backing tracks.
   */
  backing: {
    /**
     * Tells if the song has backing tracks.
     */
    enabled: boolean
    /**
     * Quantity of channels of the backing tracks.
     */
    channels: number
    /**
     * The panning of the backing tracks.
     */
    pan: number[]
    /**
     * The volume of the backing tracks.
     */
    vol: number[]
  }
  /**
   * Information about the crowd tracks.
   */
  crowd: {
    /**
     * Tells if the song has crowd tracks. Crowd tracks are always stereo with panning of `-2.5` (for left channel) and `2.5` (for right channel).
     */
    enabled: boolean
    /**
     * The volume of the crowd tracks, This value with apply equally on both tracks.
     */
    vol?: number
  }
}

/**
 * Generates an object with detailed informations about the song's audio file track structure.
 * - - - -
 * @param {DTAFile} song The song you want the panning and volume information from.
 * @returns {AudioFileTracksStructureDocument} An object with all panning and volume informations.
 */
export const genAudioFileStructure = (song: DTAFile): AudioFileTracksStructureDocument => {
  const { tracks_count, pans, vols, solo } = song
  const [allDrum, bass, guitar, vocals, keys, backing, crowd] = tracks_count
  const drumkick = allDrum >= 3 ? (allDrum === 6 ? 2 : 1) : 0
  const drumsnare = allDrum >= 4 ? (allDrum >= 5 ? 2 : 1) : 0
  const drumkit = allDrum > 0 ? 2 : 0

  return {
    drum: {
      // All drums stems
      enabled: allDrum !== 0,
      channels: allDrum,
      pan: allDrum === 0 ? [] : pans.slice(0, allDrum),
      vol: allDrum === 0 ? [] : vols.slice(0, allDrum),
      hasSepDrums: allDrum > 2,
      hasSolo: solo ? solo.some((value) => value === 'drum') : false,

      // Drum kick
      kickEnabled: drumkick !== 0,
      kickChannels: drumkick,
      kickPan: allDrum < 3 ? [] : pans.slice(0, drumkick),
      kickVol: allDrum < 3 ? [] : vols.slice(0, drumkick),

      // Drum snare
      snareEnabled: drumsnare !== 0,
      snareChannels: drumsnare,
      snarePan: allDrum < 4 ? [] : pans.slice(drumkick, drumkick + drumsnare),
      snareVol: allDrum < 4 ? [] : vols.slice(drumkick, drumkick + drumsnare),

      // Drum kit
      kitEnabled: drumkit !== 0,
      kitChannels: drumkit,
      kitPan: allDrum < 3 ? pans.slice(0, allDrum) : pans.slice(drumkick + drumsnare, drumkick + drumsnare + drumkit),
      kitVol: allDrum < 3 ? vols.slice(0, allDrum) : vols.slice(drumkick + drumsnare, drumkick + drumsnare + drumkit),
    },
    bass: {
      enabled: bass !== 0,
      channels: bass,
      pan: bass === 0 ? [] : pans.slice(allDrum, allDrum + bass),
      vol: bass === 0 ? [] : vols.slice(allDrum, allDrum + bass),
      hasSolo: solo ? solo.some((value) => value === 'bass') : false,
    },
    guitar: {
      enabled: guitar !== 0,
      channels: guitar,
      pan: guitar === 0 ? [] : pans.slice(allDrum + bass, allDrum + bass + guitar),
      vol: guitar === 0 ? [] : vols.slice(allDrum + bass, allDrum + bass + guitar),
      hasSolo: solo ? solo.some((value) => value === 'guitar') : false,
    },
    vocals: {
      enabled: vocals !== 0,
      channels: vocals,
      pan: vocals === 0 ? [] : pans.slice(allDrum + bass + guitar, allDrum + bass + guitar + vocals),
      vol: vocals === 0 ? [] : vols.slice(allDrum + bass + guitar, allDrum + bass + guitar + vocals),
      hasSolo: solo ? solo.some((value) => value === 'vocal_percussion') : false,
    },
    keys: {
      enabled: keys !== 0,
      channels: keys,
      pan: keys === 0 ? [] : pans.slice(allDrum + bass + guitar + vocals, allDrum + bass + guitar + vocals + keys),
      vol: keys === 0 ? [] : vols.slice(allDrum + bass + guitar + vocals, allDrum + bass + guitar + vocals + keys),
      hasSolo: solo ? solo.some((value) => value === 'keys') : false,
    },
    backing: {
      enabled: backing !== 0,
      channels: backing,
      pan: backing === 0 ? [] : pans.slice(allDrum + bass + guitar + vocals + keys, allDrum + bass + guitar + vocals + keys + backing),
      vol: backing === 0 ? [] : vols.slice(allDrum + bass + guitar + vocals + keys, allDrum + bass + guitar + vocals + keys + backing),
    },
    crowd: {
      enabled: crowd !== undefined,
      vol: crowd === undefined ? undefined : vols.slice(allDrum + bass + guitar + vocals + keys + backing)[0],
    },
  }
}

export type DetailedTrackTypes = 'drums' | 'kick' | 'snare' | 'drumkit' | 'bass' | 'guitar' | 'vocals' | 'keys' | 'trks' | 'crowd'
export type DetailedTracksInfoTypes = 'desc' | 'pans' | 'vols' | 'cores'

/**
 * Generates a detailed audio track structure information with aligned names and values to use on the stringify process with `'rb3_dlc'` type.
 * - - - -
 * @param {DetailedTrackTypes} part The instrument part to generate the audio track structure information.
 * @param {DetailedTracksInfoTypes} row The actual structure to generate the audio track structure information.
 * @param {AudioFileTracksStructureDocument} panvol An object containing detailed informations about the song's audio file track structure.
 * @param {boolean | undefined} guitarCores `OPTIONAL` By setting this to `true`, it places 1 to the guitar audio channels on `cores`. Default is `false`.
 * @returns {string} The detailed audio track structure information as string.
 */
export const genRB3DLCDetailedTracksStructure = (part: DetailedTrackTypes, info: DetailedTracksInfoTypes, structure: AudioFileTracksStructureDocument, guitarCores?: boolean): string => {
  if (part === 'drums') {
    if (structure.drum.kitChannels === 2) {
      if (info === 'desc') return `${s(3)}DRUMS${s(2)}`
      else if (info === 'pans') {
        let returnString = ''
        if (structure.drum.kitPan[0] < 0) returnString += structure.drum.kitPan[0].toFixed(1)
        else returnString += `${s()}${structure.drum.kitPan[0].toFixed(1)}`

        if (structure.drum.kitPan[1] < 0) returnString += `${s(2)}${structure.drum.kitPan[1].toFixed(1)}`
        else returnString += `${s(3)}${structure.drum.kitPan[1].toFixed(1)}`

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.drum.kitVol[0] < 0) returnString += structure.drum.kitVol[0].toFixed(1)
        else returnString += `${s()}${structure.drum.kitVol[0].toFixed(1)}`

        if (structure.drum.kitVol[1] < 0) returnString += `${s(2)}${structure.drum.kitVol[1].toFixed(1)}`
        else returnString += `${s(3)}${structure.drum.kitVol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(4)}-1${s()}`
      }
    } else return ''
  } else if (part === 'kick') {
    if (structure.drum.kickChannels === 2) {
      if (info === 'desc') return `${s(4)}KICK${s(3)}`
      if (info === 'pans') {
        let returnString = ''
        if (structure.drum.kickPan[0] < 0) returnString += structure.drum.kickPan[0].toFixed(1)
        else returnString += `${s()}${structure.drum.kickPan[0].toFixed(1)}`

        if (structure.drum.kickPan[1] < 0) returnString += `${s(3)}${structure.drum.kickPan[1].toFixed(1)}`
        else returnString += `${s(4)}${structure.drum.kickPan[1].toFixed(1)}`

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.drum.kickVol[0] < 0) returnString += structure.drum.kickVol[0].toFixed(1)
        else returnString += `${s()}${structure.drum.kickVol[0].toFixed(1)}`

        if (structure.drum.kickVol[1] < 0) returnString += `${s(3)}${structure.drum.kickVol[1].toFixed(1)}`
        else returnString += `${s(4)}${structure.drum.kickVol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(5)}-1${s()}`
      }
    } else {
      if (info === 'desc') return 'KICK'
      if (info === 'pans') {
        let returnString = ''
        if (structure.drum.kickPan[0] < 0) returnString += structure.drum.kickPan[0].toFixed(1)
        else returnString += `${s()}${structure.drum.kickPan[0].toFixed(1)}`

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.drum.kickVol[0] < 0) returnString += structure.drum.kickVol[0].toFixed(1)
        else returnString += `${s()}${structure.drum.kickVol[0].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s()}`
      }
    }
  } else if (part === 'snare') {
    if (structure.drum.snareChannels === 2) {
      if (info === 'desc') return `${s(3)}SNARE${s(2)}`
      else if (info === 'pans') {
        let returnString = ''
        if (structure.drum.kitPan[0] < 0) returnString += structure.drum.kitPan[0].toFixed(1)
        else returnString += `${s()}${structure.drum.kitPan[0].toFixed(1)}`

        if (structure.drum.kitPan[1] < 0) returnString += `${s(2)}${structure.drum.kitPan[1].toFixed(1)}`
        else returnString += `${s(3)}${structure.drum.kitPan[1].toFixed(1)}`

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.drum.kitVol[0] < 0) returnString += structure.drum.kitVol[0].toFixed(1)
        else returnString += `${s()}${structure.drum.kitVol[0].toFixed(1)}`

        if (structure.drum.kitVol[1] < 0) returnString += `${s(2)}${structure.drum.kitVol[1].toFixed(1)}`
        else returnString += `${s(3)}${structure.drum.kitVol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(4)}-1${s()}`
      }
    } else {
      if (info === 'desc') return 'SNARE'
      if (info === 'pans') {
        let returnString = ''
        if (structure.drum.snarePan[0] < 0) returnString += `${structure.drum.snarePan[0].toFixed(1)} `
        else returnString += `${s()}${structure.drum.snarePan[0].toFixed(1)} `

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.drum.snareVol[0] < 0) returnString += `${structure.drum.snareVol[0].toFixed(1)} `
        else returnString += `${s()}${structure.drum.snareVol[0].toFixed(1)} `

        return returnString
      } else {
        return `${s()}-1${s(2)}`
      }
    }
  } else if (part === 'drumkit') {
    if (structure.drum.kitChannels === 2) {
      if (info === 'desc') return `${s(2)}DRUM KIT${s()}`
      else if (info === 'pans') {
        let returnString = ''
        if (structure.drum.kitPan[0] < 0) returnString += structure.drum.kitPan[0].toFixed(1)
        else returnString += `${s()}${structure.drum.kitPan[0].toFixed(1)}`

        if (structure.drum.kitPan[1] < 0) returnString += `${s(3)}${structure.drum.kitPan[1].toFixed(1)}`
        else returnString += `${s(4)}${structure.drum.kitPan[1].toFixed(1)}`

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.drum.kitVol[0] < 0) returnString += structure.drum.kitVol[0].toFixed(1)
        else returnString += `${s()}${structure.drum.kitVol[0].toFixed(1)}`

        if (structure.drum.kitVol[1] < 0) returnString += `${s(3)}${structure.drum.kitVol[1].toFixed(1)}`
        else returnString += `${s(4)}${structure.drum.kitVol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(5)}-1${s()}`
      }
    } else return ''
  } else if (part === 'bass') {
    if (structure.bass.channels === 2) {
      if (info === 'desc') return `${s(4)}BASS${s(3)}`
      else if (info === 'pans') {
        let returnString = ''
        if (structure.bass.pan[0] < 0) returnString += structure.bass.pan[0].toFixed(1)
        else returnString += `${s()}${structure.bass.pan[0].toFixed(1)}`

        if (structure.bass.pan[1] < 0) returnString += `${s(3)}${structure.bass.pan[1].toFixed(1)}`
        else returnString += `${s(4)}${structure.bass.pan[1].toFixed(1)}`

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.bass.vol[0] < 0) returnString += structure.bass.vol[0].toFixed(1)
        else returnString += `${s()}${structure.bass.vol[0].toFixed(1)}`

        if (structure.bass.vol[1] < 0) returnString += `${s(3)}${structure.bass.vol[1].toFixed(1)}`
        else returnString += `${s(4)}${structure.bass.vol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(5)}-1${s()}`
      }
    } else {
      if (info === 'desc') return 'BASS'
      if (info === 'pans') {
        let returnString = ''
        if (structure.bass.pan[0] < 0) returnString += `${structure.bass.pan[0].toFixed(1)}`
        else returnString += `${s()}${structure.bass.pan[0].toFixed(1)}`

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.bass.pan[0] < 0) returnString += structure.bass.pan[0].toFixed(1)
        else returnString += `${s()}${structure.bass.pan[0].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s()}`
      }
    }
  } else if (part === 'guitar') {
    if (structure.guitar.channels === 2) {
      if (info === 'desc') return `${s(3)}GUITAR${s(2)}`
      else if (info === 'pans') {
        let returnString = ''
        if (structure.guitar.pan[0] < 0) returnString += structure.guitar.pan[0].toFixed(1)
        else returnString += `${s()}${structure.guitar.pan[0].toFixed(1)}`

        if (structure.guitar.pan[1] < 0) returnString += `${s(3)}${structure.guitar.pan[1].toFixed(1)}`
        else returnString += `${s(4)}${structure.guitar.pan[1].toFixed(1)}`

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.guitar.vol[0] < 0) returnString += structure.guitar.vol[0].toFixed(1)
        else returnString += `${s()}${structure.guitar.vol[0].toFixed(1)}`

        if (structure.guitar.vol[1] < 0) returnString += `${s(3)}${structure.guitar.vol[1].toFixed(1)}`
        else returnString += `${s(4)}${structure.guitar.vol[1].toFixed(1)}`

        return returnString
      } else {
        if (guitarCores) {
          return `${s(2)}1${s(6)}1${s()}`
        } else {
          return `${s()}-1${s(5)}-1${s()}`
        }
      }
    } else {
      if (info === 'desc') return 'GUITAR'
      if (info === 'pans') {
        let returnString = ''
        if (structure.guitar.pan[0] < 0) returnString += `${s()}${structure.guitar.pan[0].toFixed(1)} `
        else returnString += `${s(2)}${structure.guitar.pan[0].toFixed(1)} `

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.guitar.pan[0] < 0) returnString += `${s()}${structure.guitar.pan[0].toFixed(1)} `
        else returnString += `${s(2)}${structure.guitar.pan[0].toFixed(1)} `

        return returnString
      } else {
        if (guitarCores) {
          return `${s(3)}1${s(2)}`
        } else {
          return `${s(2)}-1${s(2)}`
        }
      }
    }
  } else if (part === 'vocals') {
    if (structure.vocals.channels === 2) {
      if (info === 'desc') return `${s(3)}VOCALS${s(2)}`
      else if (info === 'pans') {
        let returnString = ''
        if (structure.vocals.pan[0] < 0) returnString += structure.vocals.pan[0].toFixed(1)
        else returnString += `${s()}${structure.vocals.pan[0].toFixed(1)}`

        if (structure.vocals.pan[1] < 0) returnString += `${s(3)}${structure.vocals.pan[1].toFixed(1)}`
        else returnString += `${s(4)}${structure.vocals.pan[1].toFixed(1)}`

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.vocals.vol[0] < 0) returnString += structure.vocals.vol[0].toFixed(1)
        else returnString += `${s()}${structure.vocals.vol[0].toFixed(1)}`

        if (structure.vocals.vol[1] < 0) returnString += `${s(3)}${structure.vocals.vol[1].toFixed(1)}`
        else returnString += `${s(4)}${structure.vocals.vol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(5)}-1${s()}`
      }
    } else {
      if (info === 'desc') return 'VOCALS'
      if (info === 'pans') {
        let returnString = ''
        if (structure.vocals.pan[0] < 0) returnString += `${s()}${structure.vocals.pan[0].toFixed(1)} `
        else returnString += `${s(2)}${structure.vocals.pan[0].toFixed(1)} `

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.vocals.pan[0] < 0) returnString += `${s()}${structure.vocals.pan[0].toFixed(1)} `
        else returnString += `${s(2)}${structure.vocals.pan[0].toFixed(1)} `

        return returnString
      } else {
        return `${s(2)}-1${s(2)}`
      }
    }
  } else if (part === 'keys') {
    if (structure.keys.channels === 2) {
      if (info === 'desc') return `${s(4)}KEYS${s(3)}`
      else if (info === 'pans') {
        let returnString = ''
        if (structure.keys.pan[0] < 0) returnString += structure.keys.pan[0].toFixed(1)
        else returnString += `${s()}${structure.keys.pan[0].toFixed(1)}`

        if (structure.keys.pan[1] < 0) returnString += `${s(3)}${structure.keys.pan[1].toFixed(1)}`
        else returnString += `${s(4)}${structure.keys.pan[1].toFixed(1)}`

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.keys.vol[0] < 0) returnString += structure.keys.vol[0].toFixed(1)
        else returnString += `${s()}${structure.keys.vol[0].toFixed(1)}`

        if (structure.keys.vol[1] < 0) returnString += `${s(3)}${structure.keys.vol[1].toFixed(1)}`
        else returnString += `${s(4)}${structure.keys.vol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(5)}-1${s()}`
      }
    } else {
      if (info === 'desc') return 'KEYS'
      if (info === 'pans') {
        let returnString = ''
        if (structure.keys.pan[0] < 0) returnString += `${structure.keys.pan[0].toFixed(1)}`
        else returnString += `${s()}${structure.keys.pan[0].toFixed(1)}`

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.keys.pan[0] < 0) returnString += structure.keys.pan[0].toFixed(1)
        else returnString += `${s()}${structure.keys.pan[0].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s()}`
      }
    }
  } else if (part === 'trks') {
    if (structure.backing.channels === 2) {
      if (info === 'desc') return `${s(4)}TRKS${s(3)}`
      else if (info === 'pans') {
        let returnString = ''
        if (structure.backing.pan[0] < 0) returnString += structure.backing.pan[0].toFixed(1)
        else returnString += `${s()}${structure.backing.pan[0].toFixed(1)}`

        if (structure.backing.pan[1] < 0) returnString += `${s(3)}${structure.backing.pan[1].toFixed(1)}`
        else returnString += `${s(4)}${structure.backing.pan[1].toFixed(1)}`

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.backing.vol[0] < 0) returnString += structure.backing.vol[0].toFixed(1)
        else returnString += `${s()}${structure.backing.vol[0].toFixed(1)}`

        if (structure.backing.vol[1] < 0) returnString += `${s(3)}${structure.backing.vol[1].toFixed(1)}`
        else returnString += `${s(4)}${structure.backing.vol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(5)}-1${s()}`
      }
    } else {
      if (info === 'desc') return 'TRKS'
      else if (info === 'pans') {
        let returnString = ''
        if (structure.backing.pan[0] < 0) returnString += `${structure.backing.pan[0].toFixed(1)}`
        else returnString += `${s()}${structure.backing.pan[0].toFixed(1)}`

        return returnString
      } else if (info === 'vols') {
        let returnString = ''
        if (structure.backing.pan[0] < 0) returnString += structure.backing.pan[0].toFixed(1)
        else returnString += `${s()}${structure.backing.pan[0].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s()}`
      }
    }
  } else {
    if (structure.crowd.enabled) {
      if (info === 'desc') return `${s(3)}CROWD${s(2)}`
      else if (info === 'pans') {
        return `-2.5${s(3)}2.5`
      } else if (info === 'vols') {
        let returnString = ''

        if (structure.crowd.vol) {
          if (structure.crowd.vol < 0) returnString += `${s()}${structure.crowd.vol.toFixed(1)}${s(3)}${structure.crowd.vol.toFixed(1)}`
          else returnString += `${structure.crowd.vol.toFixed(1)}${s(2)}${structure.crowd.vol.toFixed(1)}`
        } else {
          returnString += `${s()}0.0${s(3)}0.0`
        }

        return returnString
      } else {
        return `${s()}-1${s(4)}-1${s()}`
      }
    } else return ''
  }
}
