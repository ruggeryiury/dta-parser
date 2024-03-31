import { DTAFile, DrumTracksTypes, InstrumentTracksTypes } from '../../core'

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
 * @returns {PanVolInformationObject} An object with all panning and volume informations.
 */
export const panVolInfoGen = (song: DTAFile): PanVolInformationObject => {
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
