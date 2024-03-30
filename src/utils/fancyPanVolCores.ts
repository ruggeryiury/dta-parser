import { PanVolInformationObject } from './pansAndVols'

export type FancyPartTypes = 'drums' | 'kick' | 'snare' | 'drumkit' | 'bass' | 'guitar' | 'vocals' | 'keys' | 'trks' | 'crowd'
export type FancyRowTypes = 'desc' | 'pans' | 'vols' | 'cores'

/**
 * Generates detailed panning/volume/cores information to use on the stringify process.
 * - - - -
 * @param {FancyPartTypes} part The instrument part to generate the panning/volume/cores information.
 * @param {FancyRowTypes} row The actual structure to generate the panning/volume/cores information.
 * @param {PanVolInformationObject} panvol An object containing detailed informations about the song's audio file track structure.
 * @param {boolean | undefined} guitarCores `OPTIONAL` By setting this to `true`, it places 1 to the guitar audio channels on `cores`. Default is `false`.
 * @returns {string} The detailed panning/volume/cores information as string.
 */
export const fancyPanVolRB3StringGenerator = (part: FancyPartTypes, row: FancyRowTypes, panvol: PanVolInformationObject, guitarCores?: boolean): string => {
  if (part === 'drums') {
    if (panvol.drum.kitChannels === 2) {
      if (row === 'desc') return '   DRUMS  '
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.drum.kitPan[0] < 0) returnString += panvol.drum.kitPan[0].toFixed(1)
        else returnString += ` ${panvol.drum.kitPan[0].toFixed(1)}`

        if (panvol.drum.kitPan[1] < 0) returnString += `  ${panvol.drum.kitPan[1].toFixed(1)}`
        else returnString += `   ${panvol.drum.kitPan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.drum.kitVol[0] < 0) returnString += panvol.drum.kitVol[0].toFixed(1)
        else returnString += ` ${panvol.drum.kitVol[0].toFixed(1)}`

        if (panvol.drum.kitVol[1] < 0) returnString += `  ${panvol.drum.kitVol[1].toFixed(1)}`
        else returnString += `   ${panvol.drum.kitVol[1].toFixed(1)}`

        return returnString
      } else {
        return ' -1    -1 '
      }
    } else return ''
  } else if (part === 'kick') {
    if (panvol.drum.kickChannels === 2) {
      if (row === 'desc') return '    KICK   '
      if (row === 'pans') {
        let returnString = ''
        if (panvol.drum.kickPan[0] < 0) returnString += panvol.drum.kickPan[0].toFixed(1)
        else returnString += ` ${panvol.drum.kickPan[0].toFixed(1)}`

        if (panvol.drum.kickPan[1] < 0) returnString += `   ${panvol.drum.kickPan[1].toFixed(1)}`
        else returnString += `    ${panvol.drum.kickPan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.drum.kickVol[0] < 0) returnString += panvol.drum.kickVol[0].toFixed(1)
        else returnString += ` ${panvol.drum.kickVol[0].toFixed(1)}`

        if (panvol.drum.kickVol[1] < 0) returnString += `   ${panvol.drum.kickVol[1].toFixed(1)}`
        else returnString += `    ${panvol.drum.kickVol[1].toFixed(1)}`

        return returnString
      } else {
        return ' -1     -1 '
      }
    } else {
      if (row === 'desc') return 'KICK'
      if (row === 'pans') {
        let returnString = ''
        if (panvol.drum.kickPan[0] < 0) returnString += panvol.drum.kickPan[0].toFixed(1)
        else returnString += ` ${panvol.drum.kickPan[0].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.drum.kickVol[0] < 0) returnString += panvol.drum.kickVol[0].toFixed(1)
        else returnString += ` ${panvol.drum.kickVol[0].toFixed(1)}`

        return returnString
      } else {
        return ' -1 '
      }
    }
  } else if (part === 'snare') {
    if (panvol.drum.snareChannels === 2) {
      if (row === 'desc') return '   SNARE  '
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.drum.kitPan[0] < 0) returnString += panvol.drum.kitPan[0].toFixed(1)
        else returnString += ` ${panvol.drum.kitPan[0].toFixed(1)}`

        if (panvol.drum.kitPan[1] < 0) returnString += `  ${panvol.drum.kitPan[1].toFixed(1)}`
        else returnString += `   ${panvol.drum.kitPan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.drum.kitVol[0] < 0) returnString += panvol.drum.kitVol[0].toFixed(1)
        else returnString += ` ${panvol.drum.kitVol[0].toFixed(1)}`

        if (panvol.drum.kitVol[1] < 0) returnString += `  ${panvol.drum.kitVol[1].toFixed(1)}`
        else returnString += `   ${panvol.drum.kitVol[1].toFixed(1)}`

        return returnString
      } else {
        return ' -1    -1 '
      }
    } else {
      if (row === 'desc') return 'SNARE'
      if (row === 'pans') {
        let returnString = ''
        if (panvol.drum.snarePan[0] < 0) returnString += `${panvol.drum.snarePan[0].toFixed(1)} `
        else returnString += ` ${panvol.drum.snarePan[0].toFixed(1)} `

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.drum.snareVol[0] < 0) returnString += `${panvol.drum.snareVol[0].toFixed(1)} `
        else returnString += ` ${panvol.drum.snareVol[0].toFixed(1)} `

        return returnString
      } else {
        return ' -1  '
      }
    }
  } else if (part === 'drumkit') {
    if (panvol.drum.kitChannels === 2) {
      if (row === 'desc') return '  DRUMKIT '
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.drum.kitPan[0] < 0) returnString += panvol.drum.kitPan[0].toFixed(1)
        else returnString += ` ${panvol.drum.kitPan[0].toFixed(1)}`

        if (panvol.drum.kitPan[1] < 0) returnString += `  ${panvol.drum.kitPan[1].toFixed(1)}`
        else returnString += `   ${panvol.drum.kitPan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.drum.kitVol[0] < 0) returnString += panvol.drum.kitVol[0].toFixed(1)
        else returnString += ` ${panvol.drum.kitVol[0].toFixed(1)}`

        if (panvol.drum.kitVol[1] < 0) returnString += `  ${panvol.drum.kitVol[1].toFixed(1)}`
        else returnString += `   ${panvol.drum.kitVol[1].toFixed(1)}`

        return returnString
      } else {
        return ' -1    -1 '
      }
    } else return ''
  } else if (part === 'bass') {
    if (panvol.bass.channels === 2) {
      if (row === 'desc') return '    BASS   '
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.bass.pan[0] < 0) returnString += panvol.bass.pan[0].toFixed(1)
        else returnString += ` ${panvol.bass.pan[0].toFixed(1)}`

        if (panvol.bass.pan[1] < 0) returnString += `   ${panvol.bass.pan[1].toFixed(1)}`
        else returnString += `    ${panvol.bass.pan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.bass.vol[0] < 0) returnString += panvol.bass.vol[0].toFixed(1)
        else returnString += ` ${panvol.bass.vol[0].toFixed(1)}`

        if (panvol.bass.vol[1] < 0) returnString += `   ${panvol.bass.vol[1].toFixed(1)}`
        else returnString += `    ${panvol.bass.vol[1].toFixed(1)}`

        return returnString
      } else {
        return ' -1     -1 '
      }
    } else {
      if (row === 'desc') return 'BASS'
      if (row === 'pans') {
        let returnString = ''
        if (panvol.bass.pan[0] < 0) returnString += `${panvol.bass.pan[0].toFixed(1)}`
        else returnString += ` ${panvol.bass.pan[0].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.bass.pan[0] < 0) returnString += panvol.bass.pan[0].toFixed(1)
        else returnString += ` ${panvol.bass.pan[0].toFixed(1)}`

        return returnString
      } else {
        return ' -1 '
      }
    }
  } else if (part === 'guitar') {
    if (panvol.guitar.channels === 2) {
      if (row === 'desc') return '   GUITAR  '
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.guitar.pan[0] < 0) returnString += panvol.guitar.pan[0].toFixed(1)
        else returnString += ` ${panvol.guitar.pan[0].toFixed(1)}`

        if (panvol.guitar.pan[1] < 0) returnString += `   ${panvol.guitar.pan[1].toFixed(1)}`
        else returnString += `    ${panvol.guitar.pan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.guitar.vol[0] < 0) returnString += panvol.guitar.vol[0].toFixed(1)
        else returnString += ` ${panvol.guitar.vol[0].toFixed(1)}`

        if (panvol.guitar.vol[1] < 0) returnString += `   ${panvol.guitar.vol[1].toFixed(1)}`
        else returnString += `    ${panvol.guitar.vol[1].toFixed(1)}`

        return returnString
      } else {
        if (guitarCores) {
          return '  1      1 '
        } else {
          return ' -1     -1 '
        }
      }
    } else {
      if (row === 'desc') return 'GUITAR'
      if (row === 'pans') {
        let returnString = ''
        if (panvol.guitar.pan[0] < 0) returnString += ` ${panvol.guitar.pan[0].toFixed(1)} `
        else returnString += `  ${panvol.guitar.pan[0].toFixed(1)} `

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.guitar.pan[0] < 0) returnString += ` ${panvol.guitar.pan[0].toFixed(1)} `
        else returnString += `  ${panvol.guitar.pan[0].toFixed(1)} `

        return returnString
      } else {
        if (guitarCores) {
          return '   1  '
        } else {
          return '  -1  '
        }
      }
    }
  } else if (part === 'vocals') {
    if (panvol.vocals.channels === 2) {
      if (row === 'desc') return '   VOCALS  '
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.vocals.pan[0] < 0) returnString += panvol.vocals.pan[0].toFixed(1)
        else returnString += ` ${panvol.vocals.pan[0].toFixed(1)}`

        if (panvol.vocals.pan[1] < 0) returnString += `   ${panvol.vocals.pan[1].toFixed(1)}`
        else returnString += `    ${panvol.vocals.pan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.vocals.vol[0] < 0) returnString += panvol.vocals.vol[0].toFixed(1)
        else returnString += ` ${panvol.vocals.vol[0].toFixed(1)}`

        if (panvol.vocals.vol[1] < 0) returnString += `   ${panvol.vocals.vol[1].toFixed(1)}`
        else returnString += `    ${panvol.vocals.vol[1].toFixed(1)}`

        return returnString
      } else {
        return ' -1     -1 '
      }
    } else {
      if (row === 'desc') return 'VOCALS'
      if (row === 'pans') {
        let returnString = ''
        if (panvol.vocals.pan[0] < 0) returnString += ` ${panvol.vocals.pan[0].toFixed(1)} `
        else returnString += `  ${panvol.vocals.pan[0].toFixed(1)} `

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.vocals.pan[0] < 0) returnString += ` ${panvol.vocals.pan[0].toFixed(1)} `
        else returnString += `  ${panvol.vocals.pan[0].toFixed(1)} `

        return returnString
      } else {
        return '  -1  '
      }
    }
  } else if (part === 'keys') {
    if (panvol.keys.channels === 2) {
      if (row === 'desc') return '    KEYS   '
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.keys.pan[0] < 0) returnString += panvol.keys.pan[0].toFixed(1)
        else returnString += ` ${panvol.keys.pan[0].toFixed(1)}`

        if (panvol.keys.pan[1] < 0) returnString += `   ${panvol.keys.pan[1].toFixed(1)}`
        else returnString += `    ${panvol.keys.pan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.keys.vol[0] < 0) returnString += panvol.keys.vol[0].toFixed(1)
        else returnString += ` ${panvol.keys.vol[0].toFixed(1)}`

        if (panvol.keys.vol[1] < 0) returnString += `   ${panvol.keys.vol[1].toFixed(1)}`
        else returnString += `    ${panvol.keys.vol[1].toFixed(1)}`

        return returnString
      } else {
        return ' -1     -1 '
      }
    } else {
      if (row === 'desc') return 'KEYS'
      if (row === 'pans') {
        let returnString = ''
        if (panvol.keys.pan[0] < 0) returnString += `${panvol.keys.pan[0].toFixed(1)}`
        else returnString += ` ${panvol.keys.pan[0].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.keys.pan[0] < 0) returnString += panvol.keys.pan[0].toFixed(1)
        else returnString += ` ${panvol.keys.pan[0].toFixed(1)}`

        return returnString
      } else {
        return ' -1 '
      }
    }
  } else if (part === 'trks') {
    if (panvol.backing.channels === 2) {
      if (row === 'desc') return '    TRKS   '
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.backing.pan[0] < 0) returnString += panvol.backing.pan[0].toFixed(1)
        else returnString += ` ${panvol.backing.pan[0].toFixed(1)}`

        if (panvol.backing.pan[1] < 0) returnString += `   ${panvol.backing.pan[1].toFixed(1)}`
        else returnString += `    ${panvol.backing.pan[1].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.backing.vol[0] < 0) returnString += panvol.backing.vol[0].toFixed(1)
        else returnString += ` ${panvol.backing.vol[0].toFixed(1)}`

        if (panvol.backing.vol[1] < 0) returnString += `   ${panvol.backing.vol[1].toFixed(1)}`
        else returnString += `    ${panvol.backing.vol[1].toFixed(1)}`

        return returnString
      } else {
        return ' -1     -1 '
      }
    } else {
      if (row === 'desc') return 'TRKS'
      else if (row === 'pans') {
        let returnString = ''
        if (panvol.backing.pan[0] < 0) returnString += `${panvol.backing.pan[0].toFixed(1)}`
        else returnString += ` ${panvol.backing.pan[0].toFixed(1)}`

        return returnString
      } else if (row === 'vols') {
        let returnString = ''
        if (panvol.backing.pan[0] < 0) returnString += panvol.backing.pan[0].toFixed(1)
        else returnString += ` ${panvol.backing.pan[0].toFixed(1)}`

        return returnString
      } else {
        return ' -1 '
      }
    }
  } else {
    if (panvol.crowd.enabled) {
      if (row === 'desc') return '   CROWD  '
      else if (row === 'pans') {
        return '-2.5   2.5'
      } else if (row === 'vols') {
        let returnString = ''

        if (panvol.crowd.vol) {
          if (panvol.crowd.vol < 0) returnString += ` ${panvol.crowd.vol.toFixed(1)}   ${panvol.crowd.vol.toFixed(1)}`
          else returnString += `${panvol.crowd.vol.toFixed(1)}  ${panvol.crowd.vol.toFixed(1)}`
        }

        return returnString
      } else {
        return ' -1    -1 '
      }
    } else return ''
  }
}
