import { DTAFileContents, DTAFile } from '../../src'
import { CreateDTAFileRecipe } from '../../src/lib/create'
import { MAGMAProject } from '../@types/magma'
import { fullfillDTA } from '../utils/fullfillDTA'

// All songs
import anysecondnow from '../database/anysecondnow'
import aracaazul from '../database/aracaazul'
import beinfriends from '../database/beinfriends'
import breakingintocars from '../database/breakingintocars'
import canyon from '../database/canyon'
import congratulations from '../database/congratulations'
import cravoecanela from '../database/cravoecanela'
import cutmyfingersoff from '../database/cutmyfingersoff'
import deadwomb from '../database/deadwomb'
import demon from '../database/demon'
import fateinhaze from '../database/fateinhaze'
import flourish from '../database/flourish'
import hideandseek from '../database/hideandseek'
import hippiebattle from '../database/hippiebattle'
import itstimetojump from '../database/itstimetojump'
import lennastheme from '../database/lennastheme'
import lightsinthesky from '../database/lightsinthesky'
import magicant from '../database/magicant'
import mindmischief from '../database/mindmischief'
import minuet from '../database/minuet'
import motherearth from '../database/motherearth'
import mothernature from '../database/mothernature'
import myhome from '../database/myhome'
import onestop from '../database/onestop'
import paintwar from '../database/paintwar'
import passport from '../database/passport'
import patins from '../database/patins'
import pollyanna from '../database/pollyanna'
import ponytail from '../database/ponytail'
import robotsinthegarden from '../database/robotsinthegarden'
import royalpalace from '../database/royalpalace'
import ruinus from '../database/ruinus'
import sanguelatino from '../database/sanguelatino'
import smb2playersel from '../database/smb2playersel'
import southparktheme from '../database/southparktheme'
import spacecadet from '../database/spacecadet'
import spacecadet2x from '../database/spacecadet2x'
import tetodevidro from '../database/tetodevidro'
import thefightisover from '../database/thefightisover'
import theradiant from '../database/theradiant'
import thespaceinbetween from '../database/thespaceinbetween'
import toweroflahja from '../database/toweroflahja'
import town from '../database/town'
import twinkle from '../database/twinkle'
import whydidntyoustopme from '../database/whydidntyoustopme'
import wisdomoftheworld from '../database/wisdomoftheworld'

/**
 * Generates a parsed song file with additional attributes for MAGMA related actions from a parsed song "recipe" object.
 * - - - -
 * @param {CreateDTAFileRecipe} songRecipe An object that represents a parsed song "recipe" for its generation.
 * @param {Omit<MAGMAProject, keyof DTAFileContents>} newValues The new values to want to insert on the parsed song object.
 * @returns {MAGMAProject} The parsed song object with new informations added.
 */
export const genMAGMAConfig = (songRecipe: CreateDTAFileRecipe, newValues?: Omit<MAGMAProject, keyof DTAFileContents>): MAGMAProject =>
  fullfillDTA<MAGMAProject>(DTAFile.create(songRecipe), newValues ? newValues : {})

const mySongs = {
  paintwar: genMAGMAConfig(paintwar, {
    autogenTheme: 'SynthPop',
    hasAuthoredVenues: true,
    hasLipSyncFiles: true,
    releaseVer: 6,
    releasedAt: new Date('Aug 23, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  southparktheme: genMAGMAConfig(southparktheme, {
    autogenTheme: 'PsychJamRock',
    hasAuthoredVenues: true,
    hasLipSyncFiles: true,
    releaseVer: 7,
    releasedAt: new Date('Sep 1, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  hideandseek: genMAGMAConfig(hideandseek, {
    autogenTheme: 'SlowJam',
    hasAuthoredVenues: true,
    releaseVer: 3,
    releasedAt: new Date('Sep 4, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  cravoecanela: genMAGMAConfig(cravoecanela, {
    autogenTheme: 'PsychJamRock',
    releaseVer: 3,
    releasedAt: new Date('Sep 17, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  deadwomb: genMAGMAConfig(deadwomb, {
    autogenTheme: 'GaragePunkRock',
    releaseVer: 4,
    releasedAt: new Date('Sep 20, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  minuet: genMAGMAConfig(minuet, {
    autogenTheme: 'SlowJam',
    releaseVer: 4,
    releasedAt: new Date('Oct 7, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  flourish: genMAGMAConfig(flourish, {
    fake: true,
    releaseVer: 4,
    releasedAt: new Date('Nov 17, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  town: genMAGMAConfig(town, {
    fake: true,
    releaseVer: 3,
    releasedAt: new Date('Dec 4, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  onestop: genMAGMAConfig(onestop, {
    fake: true,
    releaseVer: 2,
    releasedAt: new Date('Dec 8, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  canyon: genMAGMAConfig(canyon, {
    fake: true,
    releaseVer: 3,
    releasedAt: new Date('Dec 16, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  passport: genMAGMAConfig(passport, {
    releaseVer: 2,
    releasedAt: new Date('Dec 24, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  spacecadet: genMAGMAConfig(spacecadet, {
    autogenTheme: 'PsychJamRock',
    releaseVer: 3,
    releasedAt: new Date('Dec 21, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  spacecadet2x: genMAGMAConfig(spacecadet2x, {
    autogenTheme: 'PsychJamRock',
    doubleKickOptions: { kickwav: true },
    releaseVer: 3,
    releasedAt: new Date('Dec 21, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  breakingintocars: genMAGMAConfig(breakingintocars, {
    hasLipSyncFiles: true,
    releaseVer: 3,
    releasedAt: new Date('Jan 11, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  aracaazul: genMAGMAConfig(aracaazul, {
    hasLipSyncFiles: true,
    fakeHarm: 2,
    hasAuthoredVenues: true,
    releaseVer: 2,
    releasedAt: new Date('Jun 10, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  demon: genMAGMAConfig(demon, {
    releaseVer: 2,
    releasedAt: new Date('Jun 14, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  cutmyfingersoff: genMAGMAConfig(cutmyfingersoff, {
    releaseVer: 3,
    releasedAt: new Date('Jun 15, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  thefightisover: genMAGMAConfig(thefightisover, {
    releaseVer: 3,
    releasedAt: new Date('Jun 15, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  anysecondnow: genMAGMAConfig(anysecondnow, {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Jul 18, 2022').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  congratulations: genMAGMAConfig(congratulations, {
    releaseVer: 2,
    releasedAt: new Date('Jul 4, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  lightsinthesky: genMAGMAConfig(lightsinthesky, {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Aug 26, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  mothernature: genMAGMAConfig(mothernature, {
    releaseVer: 2,
    releasedAt: new Date('Aug 28, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  mindmischief: genMAGMAConfig(mindmischief, {
    releaseVer: 2,
    releasedAt: new Date('Dec 14, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  theradiant: genMAGMAConfig(theradiant, {
    releaseVer: 2,
    releasedAt: new Date('Dec 5, 2019').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  whydidntyoustopme: genMAGMAConfig(whydidntyoustopme, {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Dec 5, 2019').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  thespaceinbetween: genMAGMAConfig(thespaceinbetween, {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Dec 5, 2019').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  sanguelatino: genMAGMAConfig(sanguelatino, {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Apr 10, 2020').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  robotsinthegarden: genMAGMAConfig(robotsinthegarden, {
    hasLipSyncFiles: true,
    hasAuthoredVenues: true,
    releaseVer: 2,
    releasedAt: new Date('Nov 29, 2020').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  ponytail: genMAGMAConfig(ponytail, {
    hasLipSyncFiles: true,
    hasAuthoredVenues: true,
    releaseVer: 2,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  beinfriends: genMAGMAConfig(beinfriends, {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  hippiebattle: genMAGMAConfig(hippiebattle, {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  patins: genMAGMAConfig(patins, {
    hasLipSyncFiles: true,
    hasAuthoredVenues: true,
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  motherearth: genMAGMAConfig(motherearth, {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  pollyanna: genMAGMAConfig(pollyanna, {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  twinkle: genMAGMAConfig(twinkle, {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  tetodevidro: genMAGMAConfig(tetodevidro, {
    hasLipSyncFiles: true,
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  lennastheme: genMAGMAConfig(lennastheme, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  fateinhaze: genMAGMAConfig(fateinhaze, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  royalpalace: genMAGMAConfig(royalpalace, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  magicant: genMAGMAConfig(magicant, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  smb2playersel: genMAGMAConfig(smb2playersel, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  itstimetojump: genMAGMAConfig(itstimetojump, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  wisdomoftheworld: genMAGMAConfig(wisdomoftheworld, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  toweroflahja: genMAGMAConfig(toweroflahja, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  myhome: genMAGMAConfig(myhome, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  ruinus: genMAGMAConfig(ruinus, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
    fake: true,
  }),
}

export const mySongsList = (): MAGMAProject[] => {
  const list: MAGMAProject[] = []

  Object.keys(mySongs).forEach((song) => {
    list.push(mySongs[song as keyof typeof mySongs])
  })

  return list.sort((a, b) => {
    if (a.song_id > b.song_id) return 1
    if (a.song_id < b.song_id) return -1
    return 0
  })
}

export type MySongsID = keyof typeof mySongs

export type MySongsModule = Record<MySongsID, MAGMAProject>

export default mySongs
