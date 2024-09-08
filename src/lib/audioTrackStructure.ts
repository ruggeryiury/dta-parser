import type { DTAFile, DrumTracksTypes, InstrumentTracksTypes } from '../core.js'

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
    returnString += `${trackStart.toString()}${i === iterator.length - 1 ? '' : ' '}`
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
   * Quantity of channels of all tracks.
   */
  allTracksCount: number
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
     * An array with the channels count from start channel to the last one.
     */
    array?: number[]
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
     * An array with the channels count from start channel to the last one.
     */
    array?: number[]
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
     * An array with the channels count from start channel to the last one.
     */
    array?: number[]
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
     * An array with the channels count from start channel to the last one.
     */
    array?: number[]
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
     * An array with the channels count from start channel to the last one.
     */
    array?: number[]
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
     * An array with the channels count from start channel to the last one.
     */
    array?: number[]
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
     * An array with the channels count from start channel to the last one.
     */
    array?: number[]
    /**
     * The volume of the crowd tracks, This value with apply equally on both tracks.
     */
    vol?: number
  }
}

export interface AudioTracksCountObject {
  drum?: number[]
  bass?: number[]
  guitar?: number[]
  vocals?: number[]
  keys?: number[]
  backing?: number[]
  crowd?: number[]
  allTracksCount: number
}

/**
 * Generates an array with numbers of then position and counting of each track on the audio file structure.
 * - - - -
 * @param {number[]} tracksCount The tracks count of the song.
 * @returns {AudioTracksCountObject} An object with the array of all used tracks.
 */
export const genTracksCountArray = (tracksCount: DTAFile['tracks_count']): AudioTracksCountObject => {
  const [allDrum, bass, guitar, vocals, keys, backing, crowd] = tracksCount

  const drumsArray: number[] = []
  const bassArray: number[] = []
  const guitarArray: number[] = []
  const vocalsArray: number[] = []
  const keysArray: number[] = []
  const backingArray: number[] = []
  const crowdArray: number[] = []
  let arrayFillCount = 0

  for (let i = 0; i < allDrum; i++) {
    drumsArray.push(arrayFillCount)
    arrayFillCount++
  }
  for (let i = 0; i < bass; i++) {
    bassArray.push(arrayFillCount)
    arrayFillCount++
  }
  for (let i = 0; i < guitar; i++) {
    guitarArray.push(arrayFillCount)
    arrayFillCount++
  }
  for (let i = 0; i < vocals; i++) {
    vocalsArray.push(arrayFillCount)
    arrayFillCount++
  }
  for (let i = 0; i < keys; i++) {
    keysArray.push(arrayFillCount)
    arrayFillCount++
  }
  for (let i = 0; i < backing; i++) {
    backingArray.push(arrayFillCount)
    arrayFillCount++
  }
  if (crowd !== undefined) {
    for (let i = 0; i < crowd; i++) {
      crowdArray.push(arrayFillCount)
      arrayFillCount++
    }
  }

  return {
    drum: drumsArray.length === 0 ? undefined : drumsArray,
    bass: bassArray.length === 0 ? undefined : bassArray,
    guitar: guitarArray.length === 0 ? undefined : guitarArray,
    vocals: vocalsArray.length === 0 ? undefined : vocalsArray,
    keys: keysArray.length === 0 ? undefined : keysArray,
    backing: backingArray.length === 0 ? undefined : backingArray,
    crowd: crowdArray.length === 0 ? undefined : crowdArray,
    allTracksCount: arrayFillCount,
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
  const { backing: backingArray, bass: bassArray, crowd: crowdArray, drum: drumsArray, guitar: guitarArray, keys: keysArray, vocals: vocalsArray } = genTracksCountArray(tracks_count)
  const drumkick = allDrum >= 3 ? (allDrum === 6 ? 2 : 1) : 0
  const drumsnare = allDrum >= 4 ? (allDrum >= 5 ? 2 : 1) : 0
  const drumkit = allDrum > 0 ? 2 : 0
  const allTracksCount = allDrum + bass + guitar + vocals + keys + backing + (crowd !== undefined ? 2 : 0)

  return {
    allTracksCount,
    drum: {
      // All drums stems
      enabled: allDrum !== 0,
      channels: allDrum,
      array: drumsArray,
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
      array: bassArray,
      pan: bass === 0 ? [] : pans.slice(allDrum, allDrum + bass),
      vol: bass === 0 ? [] : vols.slice(allDrum, allDrum + bass),
      hasSolo: solo ? solo.some((value) => value === 'bass') : false,
    },
    guitar: {
      enabled: guitar !== 0,
      channels: guitar,
      array: guitarArray,
      pan: guitar === 0 ? [] : pans.slice(allDrum + bass, allDrum + bass + guitar),
      vol: guitar === 0 ? [] : vols.slice(allDrum + bass, allDrum + bass + guitar),
      hasSolo: solo ? solo.some((value) => value === 'guitar') : false,
    },
    vocals: {
      enabled: vocals !== 0,
      channels: vocals,
      array: vocalsArray,
      pan: vocals === 0 ? [] : pans.slice(allDrum + bass + guitar, allDrum + bass + guitar + vocals),
      vol: vocals === 0 ? [] : vols.slice(allDrum + bass + guitar, allDrum + bass + guitar + vocals),
      hasSolo: solo ? solo.some((value) => value === 'vocal_percussion') : false,
    },
    keys: {
      enabled: keys !== 0,
      channels: keys,
      array: keysArray,
      pan: keys === 0 ? [] : pans.slice(allDrum + bass + guitar + vocals, allDrum + bass + guitar + vocals + keys),
      vol: keys === 0 ? [] : vols.slice(allDrum + bass + guitar + vocals, allDrum + bass + guitar + vocals + keys),
      hasSolo: solo ? solo.some((value) => value === 'keys') : false,
    },
    backing: {
      enabled: backing !== 0,
      channels: backing,
      array: backingArray,
      pan: backing === 0 ? [] : pans.slice(allDrum + bass + guitar + vocals + keys, allDrum + bass + guitar + vocals + keys + backing),
      vol: backing === 0 ? [] : vols.slice(allDrum + bass + guitar + vocals + keys, allDrum + bass + guitar + vocals + keys + backing),
    },
    crowd: {
      enabled: crowd !== undefined,
      array: crowdArray,
      vol: crowd === undefined ? undefined : vols.slice(allDrum + bass + guitar + vocals + keys + backing)[0],
    },
  }
}
