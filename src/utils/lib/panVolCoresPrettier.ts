import { genSpaces as s, PanVolInformationObject } from '..'

export type FancyPartTypes = 'drums' | 'kick' | 'snare' | 'drumkit' | 'bass' | 'guitar' | 'vocals' | 'keys' | 'trks' | 'crowd'
export type FancyRowTypes = 'desc' | 'pans' | 'vols' | 'cores'

/**
 * Generates a detailed panning/volume/cores information to use on the stringify process.
 * - - - -
 * @param {FancyPartTypes} part The instrument part to generate the panning/volume/cores information.
 * @param {FancyRowTypes} row The actual structure to generate the panning/volume/cores information.
 * @param {PanVolInformationObject} panvol An object containing detailed informations about the song's audio file track structure.
 * @param {boolean | undefined} guitarCores `OPTIONAL` By setting this to `true`, it places 1 to the guitar audio channels on `cores`. Default is `false`.
 * @returns {string} The detailed panning/volume/cores information as string.
 */
export const panVolCoresPrettierRB3 = (part: FancyPartTypes, row: FancyRowTypes, panvol: PanVolInformationObject, guitarCores?: boolean): string => {
  if (part === 'drums') {
    if (panvol.drum.kitChannels === 2) {
      if (row === 'desc') return `${s(3)}DRUMS${s(2)}`
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.drum.kitPan[0] < 0) returnString += panvol.drum.kitPan[0].toFixed(1)
        else returnString += `${s()}${panvol.drum.kitPan[0].toFixed(1)}`

        if (panvol.drum.kitPan[1] < 0) returnString += `${s(2)}${panvol.drum.kitPan[1].toFixed(1)}`
        else returnString += `${s(3)}${panvol.drum.kitPan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.drum.kitVol[0] < 0) returnString += panvol.drum.kitVol[0].toFixed(1)
        else returnString += `${s()}${panvol.drum.kitVol[0].toFixed(1)}`

        if (panvol.drum.kitVol[1] < 0) returnString += `${s(2)}${panvol.drum.kitVol[1].toFixed(1)}`
        else returnString += `${s(3)}${panvol.drum.kitVol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(4)}-1${s()}`
      }
    } else return ''
  } else if (part === 'kick') {
    if (panvol.drum.kickChannels === 2) {
      if (row === 'desc') return `${s(4)}KICK${s(3)}`
      if (row === 'pans') {
        let returnString = ''
        if (panvol.drum.kickPan[0] < 0) returnString += panvol.drum.kickPan[0].toFixed(1)
        else returnString += `${s()}${panvol.drum.kickPan[0].toFixed(1)}`

        if (panvol.drum.kickPan[1] < 0) returnString += `${s(3)}${panvol.drum.kickPan[1].toFixed(1)}`
        else returnString += `${s(4)}${panvol.drum.kickPan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.drum.kickVol[0] < 0) returnString += panvol.drum.kickVol[0].toFixed(1)
        else returnString += `${s()}${panvol.drum.kickVol[0].toFixed(1)}`

        if (panvol.drum.kickVol[1] < 0) returnString += `${s(3)}${panvol.drum.kickVol[1].toFixed(1)}`
        else returnString += `${s(4)}${panvol.drum.kickVol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(5)}-1${s()}`
      }
    } else {
      if (row === 'desc') return 'KICK'
      if (row === 'pans') {
        let returnString = ''
        if (panvol.drum.kickPan[0] < 0) returnString += panvol.drum.kickPan[0].toFixed(1)
        else returnString += `${s()}${panvol.drum.kickPan[0].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.drum.kickVol[0] < 0) returnString += panvol.drum.kickVol[0].toFixed(1)
        else returnString += `${s()}${panvol.drum.kickVol[0].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s()}`
      }
    }
  } else if (part === 'snare') {
    if (panvol.drum.snareChannels === 2) {
      if (row === 'desc') return `${s(3)}SNARE${s(2)}`
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.drum.kitPan[0] < 0) returnString += panvol.drum.kitPan[0].toFixed(1)
        else returnString += `${s()}${panvol.drum.kitPan[0].toFixed(1)}`

        if (panvol.drum.kitPan[1] < 0) returnString += `${s(2)}${panvol.drum.kitPan[1].toFixed(1)}`
        else returnString += `${s(3)}${panvol.drum.kitPan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.drum.kitVol[0] < 0) returnString += panvol.drum.kitVol[0].toFixed(1)
        else returnString += `${s()}${panvol.drum.kitVol[0].toFixed(1)}`

        if (panvol.drum.kitVol[1] < 0) returnString += `${s(2)}${panvol.drum.kitVol[1].toFixed(1)}`
        else returnString += `${s(3)}${panvol.drum.kitVol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(4)}-1${s()}`
      }
    } else {
      if (row === 'desc') return 'SNARE'
      if (row === 'pans') {
        let returnString = ''
        if (panvol.drum.snarePan[0] < 0) returnString += `${panvol.drum.snarePan[0].toFixed(1)} `
        else returnString += `${s()}${panvol.drum.snarePan[0].toFixed(1)} `

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.drum.snareVol[0] < 0) returnString += `${panvol.drum.snareVol[0].toFixed(1)} `
        else returnString += `${s()}${panvol.drum.snareVol[0].toFixed(1)} `

        return returnString
      } else {
        return `${s()}-1${s(2)}`
      }
    }
  } else if (part === 'drumkit') {
    if (panvol.drum.kitChannels === 2) {
      if (row === 'desc') return `${s(2)}DRUM KIT${s()}`
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.drum.kitPan[0] < 0) returnString += panvol.drum.kitPan[0].toFixed(1)
        else returnString += `${s()}${panvol.drum.kitPan[0].toFixed(1)}`

        if (panvol.drum.kitPan[1] < 0) returnString += `${s(3)}${panvol.drum.kitPan[1].toFixed(1)}`
        else returnString += `${s(4)}${panvol.drum.kitPan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.drum.kitVol[0] < 0) returnString += panvol.drum.kitVol[0].toFixed(1)
        else returnString += `${s()}${panvol.drum.kitVol[0].toFixed(1)}`

        if (panvol.drum.kitVol[1] < 0) returnString += `${s(3)}${panvol.drum.kitVol[1].toFixed(1)}`
        else returnString += `${s(4)}${panvol.drum.kitVol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(5)}-1${s()}`
      }
    } else return ''
  } else if (part === 'bass') {
    if (panvol.bass.channels === 2) {
      if (row === 'desc') return `${s(4)}BASS${s(3)}`
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.bass.pan[0] < 0) returnString += panvol.bass.pan[0].toFixed(1)
        else returnString += `${s()}${panvol.bass.pan[0].toFixed(1)}`

        if (panvol.bass.pan[1] < 0) returnString += `${s(3)}${panvol.bass.pan[1].toFixed(1)}`
        else returnString += `${s(4)}${panvol.bass.pan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.bass.vol[0] < 0) returnString += panvol.bass.vol[0].toFixed(1)
        else returnString += `${s()}${panvol.bass.vol[0].toFixed(1)}`

        if (panvol.bass.vol[1] < 0) returnString += `${s(3)}${panvol.bass.vol[1].toFixed(1)}`
        else returnString += `${s(4)}${panvol.bass.vol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(5)}-1${s()}`
      }
    } else {
      if (row === 'desc') return 'BASS'
      if (row === 'pans') {
        let returnString = ''
        if (panvol.bass.pan[0] < 0) returnString += `${panvol.bass.pan[0].toFixed(1)}`
        else returnString += `${s()}${panvol.bass.pan[0].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.bass.pan[0] < 0) returnString += panvol.bass.pan[0].toFixed(1)
        else returnString += `${s()}${panvol.bass.pan[0].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s()}`
      }
    }
  } else if (part === 'guitar') {
    if (panvol.guitar.channels === 2) {
      if (row === 'desc') return `${s(3)}GUITAR${s(2)}`
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.guitar.pan[0] < 0) returnString += panvol.guitar.pan[0].toFixed(1)
        else returnString += `${s()}${panvol.guitar.pan[0].toFixed(1)}`

        if (panvol.guitar.pan[1] < 0) returnString += `${s(3)}${panvol.guitar.pan[1].toFixed(1)}`
        else returnString += `${s(4)}${panvol.guitar.pan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.guitar.vol[0] < 0) returnString += panvol.guitar.vol[0].toFixed(1)
        else returnString += `${s()}${panvol.guitar.vol[0].toFixed(1)}`

        if (panvol.guitar.vol[1] < 0) returnString += `${s(3)}${panvol.guitar.vol[1].toFixed(1)}`
        else returnString += `${s(4)}${panvol.guitar.vol[1].toFixed(1)}`

        return returnString
      } else {
        if (guitarCores) {
          return `${s(2)}1${s(6)}1${s()}`
        } else {
          return `${s()}-1${s(5)}-1${s()}`
        }
      }
    } else {
      if (row === 'desc') return 'GUITAR'
      if (row === 'pans') {
        let returnString = ''
        if (panvol.guitar.pan[0] < 0) returnString += `${s()}${panvol.guitar.pan[0].toFixed(1)} `
        else returnString += `${s(2)}${panvol.guitar.pan[0].toFixed(1)} `

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.guitar.pan[0] < 0) returnString += `${s()}${panvol.guitar.pan[0].toFixed(1)} `
        else returnString += `${s(2)}${panvol.guitar.pan[0].toFixed(1)} `

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
    if (panvol.vocals.channels === 2) {
      if (row === 'desc') return `${s(3)}VOCALS${s(2)}`
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.vocals.pan[0] < 0) returnString += panvol.vocals.pan[0].toFixed(1)
        else returnString += `${s()}${panvol.vocals.pan[0].toFixed(1)}`

        if (panvol.vocals.pan[1] < 0) returnString += `${s(3)}${panvol.vocals.pan[1].toFixed(1)}`
        else returnString += `${s(4)}${panvol.vocals.pan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.vocals.vol[0] < 0) returnString += panvol.vocals.vol[0].toFixed(1)
        else returnString += `${s()}${panvol.vocals.vol[0].toFixed(1)}`

        if (panvol.vocals.vol[1] < 0) returnString += `${s(3)}${panvol.vocals.vol[1].toFixed(1)}`
        else returnString += `${s(4)}${panvol.vocals.vol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(5)}-1${s()}`
      }
    } else {
      if (row === 'desc') return 'VOCALS'
      if (row === 'pans') {
        let returnString = ''
        if (panvol.vocals.pan[0] < 0) returnString += `${s()}${panvol.vocals.pan[0].toFixed(1)} `
        else returnString += `${s(2)}${panvol.vocals.pan[0].toFixed(1)} `

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.vocals.pan[0] < 0) returnString += `${s()}${panvol.vocals.pan[0].toFixed(1)} `
        else returnString += `${s(2)}${panvol.vocals.pan[0].toFixed(1)} `

        return returnString
      } else {
        return `${s(2)}-1${s(2)}`
      }
    }
  } else if (part === 'keys') {
    if (panvol.keys.channels === 2) {
      if (row === 'desc') return `${s(4)}KEYS${s(3)}`
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.keys.pan[0] < 0) returnString += panvol.keys.pan[0].toFixed(1)
        else returnString += `${s()}${panvol.keys.pan[0].toFixed(1)}`

        if (panvol.keys.pan[1] < 0) returnString += `${s(3)}${panvol.keys.pan[1].toFixed(1)}`
        else returnString += `${s(4)}${panvol.keys.pan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.keys.vol[0] < 0) returnString += panvol.keys.vol[0].toFixed(1)
        else returnString += `${s()}${panvol.keys.vol[0].toFixed(1)}`

        if (panvol.keys.vol[1] < 0) returnString += `${s(3)}${panvol.keys.vol[1].toFixed(1)}`
        else returnString += `${s(4)}${panvol.keys.vol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(5)}-1${s()}`
      }
    } else {
      if (row === 'desc') return 'KEYS'
      if (row === 'pans') {
        let returnString = ''
        if (panvol.keys.pan[0] < 0) returnString += `${panvol.keys.pan[0].toFixed(1)}`
        else returnString += `${s()}${panvol.keys.pan[0].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.keys.pan[0] < 0) returnString += panvol.keys.pan[0].toFixed(1)
        else returnString += `${s()}${panvol.keys.pan[0].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s()}`
      }
    }
  } else if (part === 'trks') {
    if (panvol.backing.channels === 2) {
      if (row === 'desc') return `${s(4)}TRKS${s(3)}`
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.backing.pan[0] < 0) returnString += panvol.backing.pan[0].toFixed(1)
        else returnString += `${s()}${panvol.backing.pan[0].toFixed(1)}`

        if (panvol.backing.pan[1] < 0) returnString += `${s(3)}${panvol.backing.pan[1].toFixed(1)}`
        else returnString += `${s(4)}${panvol.backing.pan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.backing.vol[0] < 0) returnString += panvol.backing.vol[0].toFixed(1)
        else returnString += `${s()}${panvol.backing.vol[0].toFixed(1)}`

        if (panvol.backing.vol[1] < 0) returnString += `${s(3)}${panvol.backing.vol[1].toFixed(1)}`
        else returnString += `${s(4)}${panvol.backing.vol[1].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s(5)}-1${s()}`
      }
    } else {
      if (row === 'desc') return 'TRKS'
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.backing.pan[0] < 0) returnString += `${panvol.backing.pan[0].toFixed(1)}`
        else returnString += `${s()}${panvol.backing.pan[0].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.backing.pan[0] < 0) returnString += panvol.backing.pan[0].toFixed(1)
        else returnString += `${s()}${panvol.backing.pan[0].toFixed(1)}`

        return returnString
      } else {
        return `${s()}-1${s()}`
      }
    }
  } else {
    if (panvol.crowd.enabled) {
      if (row === 'desc') return `${s(3)}CROWD${s(2)}`
      else if (row === 'pans') {
        return `-2.5${s(3)}2.5`
      } else if (row === 'vols') {
        let returnString = ''

        if (panvol.crowd.vol) {
          if (panvol.crowd.vol < 0) returnString += `${s()}${panvol.crowd.vol.toFixed(1)}${s(3)}${panvol.crowd.vol.toFixed(1)}`
          else returnString += `${panvol.crowd.vol.toFixed(1)}${s(2)}${panvol.crowd.vol.toFixed(1)}`
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
