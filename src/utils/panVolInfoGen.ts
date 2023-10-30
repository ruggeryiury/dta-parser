import { DTAFile, DTAFileContents } from '../@types/DTAFile'

/**
 * An object containing detailed informations about the song's audio file track structure.
 */
export interface PanVolInformationObject {
  drum: {
    enabled: boolean
    channels: number
    pan: number[]
    vol: number[]
    hasSepDrums: boolean
    hasSolo: boolean
    kick_enabled: boolean
    kick_channels: number
    kick_pan: number[]
    kick_vol: number[]
    snare_enabled: boolean
    snare_channels: number
    snare_pan: number[]
    snare_vol: number[]
    kit_enabled: boolean
    kit_channels: number
    kit_pan: number[]
    kit_vol: number[]
  }
  bass: {
    enabled: boolean
    channels: number
    pan: number[]
    vol: number[]
    hasSolo: boolean
  }
  guitar: {
    enabled: boolean
    channels: number
    pan: number[]
    vol: number[]
    hasSolo: boolean
  }
  vocals: {
    enabled: boolean
    channels: number
    pan: number[]
    vol: number[]
    hasSolo: boolean
  }
  keys: {
    enabled: boolean
    channels: number
    pan: number[]
    vol: number[]
    hasSolo: boolean
  }
  backing: {
    enabled: boolean
    channels: number
    pan: number[]
    vol: number[]
  }
}

/**
 * Generates an object with detailed informations about the song's audio file track structure.
 * - - - -
 * @param {DTAFile | DTAFileContents} song The song you want the panning and volume information from.
 * @returns An object with all panning and volume informations.
 */
export const panVolInfoGen = (song: DTAFile | DTAFileContents): PanVolInformationObject => {
  const { tracks_count, pans, vols, solo } = 'content' in song ? song.content : song
  const [all_drum, bass, guitar, vocals, keys, backing] = tracks_count
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
  }
}
