import { DTAFile } from '../lib/dta'
import { DrumTracksTypes, InstrumentTracksTypes } from '../lib/update'

/**
 * Generates an array of pan values based on the provided track count.
 * - - - -
 * @param {DrumTracksTypes | InstrumentTracksTypes} count The type of tracks.
 * @returns {number[]} An array of pan values based on the track count.
 */
export const panValueToArray = (count: DrumTracksTypes | InstrumentTracksTypes): number[] => {
  if (count === 'Mono' || count === 1) {
    return [0]
  } else if (count === 'Stereo' || count === 'Stereo Else' || count === 2) {
    return [-1, 1]
  } else if (count === 'Mono Kick + Stereo Else' || count === 3) {
    return [0, -1, 1]
  } else if (count === 'Mono Kick + Mono Snare + Stereo Else' || count === 4) {
    return [0, 0, -1, 1]
  } else if (count === 'Mono Kick + Stereo Snare + Stereo Else' || count === 5) {
    return [0, -1, 1, -1, 1]
  } else {
    return [-1, 1, -1, 1, -1, 1]
  }
}
/**
 * An object containing detailed informations about the song's audio file track structure.
 */
export interface PanVolInformationObject {
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
    kick_enabled: boolean
    /**
     * Quantity of channels of the kick drum tracks.
     */
    kick_channels: number
    /**
     * The panning of the kick drum tracks.
     */
    kick_pan: number[]
    /**
     * The volume of the kick drum tracks.
     */
    kick_vol: number[]
    /**
     * Tells if the drum has separated snare drum stems.
     */
    snare_enabled: boolean
    /**
     * Quantity of channels of the snare drum tracks.
     */
    snare_channels: number
    /**
     * The panning of the snare drum tracks.
     */
    snare_pan: number[]
    /**
     * The volume of the snare drum tracks.
     */
    snare_vol: number[]
    /**
     * Tells if the drum has separated kit drum stems.
     *
     * This is always `true`, even for songs with only one stereo track for the entire kit.
     */
    kit_enabled: boolean
    /**
     * Quantity of channels of the drum kit tracks.
     *
     * This is always `Stereo`, even for songs with only one stereo track for the entire kit.
     */
    kit_channels: number
    /**
     * The panning of the drum kit tracks.
     */
    kit_pan: number[]
    /**
     * The volume of the drum kit tracks.
     */
    kit_vol: number[]
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
  crowd: {
    /**
     * Tells if the song has crowd tracks. Crowd tracks are always stereo with panning of `-2.5` (for left channel) and `2.5` (for right channel).
     */
    enabled: boolean
    /**
     * The volume of the crowd tracks, This value with apply equally on both tracks.
     */
    vol: number
  }
}

/**
 * Generates an object with detailed informations about the song's audio file track structure.
 * - - - -
 * @param {DTAFile} song The song you want the panning and volume information from.
 * @returns {PanVolInformationObject} An object with all panning and volume informations.
 */
export const panVolInfoGen = (song: DTAFile): PanVolInformationObject => {
  const { tracks_count, pans, vols, solo } = song
  const [all_drum, bass, guitar, vocals, keys, backing, crowd] = tracks_count
  const drumkick = all_drum >= 3 ? (all_drum === 6 ? 2 : 1) : 0
  const drumsnare = all_drum >= 4 ? (all_drum >= 5 ? 2 : 1) : 0
  const drumkit = all_drum > 0 ? 2 : 0

  return {
    drum: {
      // All drums stems
      enabled: all_drum !== 0,
      channels: all_drum,
      pan: all_drum === 0 ? [] : pans.slice(0, all_drum),
      vol: all_drum === 0 ? [] : vols.slice(0, all_drum),
      hasSepDrums: all_drum > 2,
      hasSolo: solo ? solo.some((value) => value === 'drum') : false,

      // Drum kick
      kick_enabled: drumkick !== 0,
      kick_channels: drumkick,
      kick_pan: all_drum < 3 ? [] : pans.slice(0, drumkick),
      kick_vol: all_drum < 3 ? [] : vols.slice(0, drumkick),

      // Drum snare
      snare_enabled: drumsnare !== 0,
      snare_channels: drumsnare,
      snare_pan: all_drum < 4 ? [] : pans.slice(drumkick, drumkick + drumsnare),
      snare_vol: all_drum < 4 ? [] : vols.slice(drumkick, drumkick + drumsnare),

      // Drum kit
      kit_enabled: drumkit !== 0,
      kit_channels: drumkit,
      kit_pan: all_drum < 3 ? pans.slice(0, all_drum) : pans.slice(drumkick + drumsnare, drumkick + drumsnare + drumkit),
      kit_vol: all_drum < 3 ? vols.slice(0, all_drum) : vols.slice(drumkick + drumsnare, drumkick + drumsnare + drumkit),
    },
    bass: {
      enabled: bass !== 0,
      channels: bass,
      pan: bass === 0 ? [] : pans.slice(all_drum, all_drum + bass),
      vol: bass === 0 ? [] : vols.slice(all_drum, all_drum + bass),
      hasSolo: solo ? solo.some((value) => value === 'bass') : false,
    },
    guitar: {
      enabled: guitar !== 0,
      channels: guitar,
      pan: guitar === 0 ? [] : pans.slice(all_drum + bass, all_drum + bass + guitar),
      vol: guitar === 0 ? [] : vols.slice(all_drum + bass, all_drum + bass + guitar),
      hasSolo: solo ? solo.some((value) => value === 'guitar') : false,
    },
    vocals: {
      enabled: vocals !== 0,
      channels: vocals,
      pan: vocals === 0 ? [] : pans.slice(all_drum + bass + guitar, all_drum + bass + guitar + vocals),
      vol: vocals === 0 ? [] : vols.slice(all_drum + bass + guitar, all_drum + bass + guitar + vocals),
      hasSolo: solo ? solo.some((value) => value === 'vocal_percussion') : false,
    },
    keys: {
      enabled: keys !== 0,
      channels: keys,
      pan: keys === 0 ? [] : pans.slice(all_drum + bass + guitar + vocals, all_drum + bass + guitar + vocals + keys),
      vol: keys === 0 ? [] : vols.slice(all_drum + bass + guitar + vocals, all_drum + bass + guitar + vocals + keys),
      hasSolo: solo ? solo.some((value) => value === 'keys') : false,
    },
    backing: {
      enabled: backing !== 0,
      channels: backing,
      pan: backing === 0 ? [] : pans.slice(all_drum + bass + guitar + vocals + keys, all_drum + bass + guitar + vocals + keys + backing),
      vol: backing === 0 ? [] : vols.slice(all_drum + bass + guitar + vocals + keys, all_drum + bass + guitar + vocals + keys + backing),
    },
    crowd: {
      enabled: crowd !== undefined,
      vol: crowd === undefined ? 0 : vols.slice(all_drum + bass + guitar + vocals + keys + backing)[0],
    },
  }
}
