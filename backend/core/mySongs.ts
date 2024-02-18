import { DTAFile } from '../../src'
import { DTAFileRecipe, createDTA } from '../../src/lib/create'
import { fullfillDTA } from '../lib/dta/fullfill'
import { MAGMAProject } from '../lib/magma'

// All songs
import * as database from '../database'
/**
 * Generates a parsed song file with additional attributes for MAGMA related actions from a parsed song "recipe" object.
 * - - - -
 * @param {DTAFileRecipe} songRecipe An object that represents a parsed song "recipe" for its generation.
 * @param {Omit<MAGMAProject, keyof DTAFile>} newValues The new values to want to insert on the parsed song object.
 * @returns {MAGMAProject} The parsed song object with new informations added.
 */
export const genMAGMAConfig = (songRecipe: DTAFileRecipe, newValues?: Omit<MAGMAProject, keyof DTAFile>): MAGMAProject => fullfillDTA<MAGMAProject>(createDTA(songRecipe), newValues ? newValues : {})

const mySongs = {
  paintwar: genMAGMAConfig(database.paintwar, {
    autogenTheme: 'SynthPop',
    hasAuthoredVenues: true,
    hasLipSyncFiles: true,
    releaseVer: 6,
    releasedAt: new Date('Aug 23, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  southparktheme: genMAGMAConfig(database.southparktheme, {
    autogenTheme: 'PsychJamRock',
    hasAuthoredVenues: true,
    hasLipSyncFiles: true,
    releaseVer: 7,
    releasedAt: new Date('Sep 1, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  hideandseek: genMAGMAConfig(database.hideandseek, {
    autogenTheme: 'SlowJam',
    hasAuthoredVenues: true,
    releaseVer: 3,
    releasedAt: new Date('Sep 4, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  cravoecanela: genMAGMAConfig(database.cravoecanela, {
    autogenTheme: 'PsychJamRock',
    releaseVer: 3,
    releasedAt: new Date('Sep 17, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  deadwomb: genMAGMAConfig(database.deadwomb, {
    autogenTheme: 'GaragePunkRock',
    releaseVer: 4,
    releasedAt: new Date('Sep 20, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  minuet: genMAGMAConfig(database.minuet, {
    autogenTheme: 'SlowJam',
    releaseVer: 4,
    releasedAt: new Date('Oct 7, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  flourish: genMAGMAConfig(database.flourish, {
    fake: true,
    releaseVer: 4,
    releasedAt: new Date('Nov 17, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  town: genMAGMAConfig(database.town, {
    fake: true,
    releaseVer: 3,
    releasedAt: new Date('Dec 4, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  onestop: genMAGMAConfig(database.onestop, {
    fake: true,
    releaseVer: 2,
    releasedAt: new Date('Dec 8, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  canyon: genMAGMAConfig(database.canyon, {
    fake: true,
    releaseVer: 3,
    releasedAt: new Date('Dec 16, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  passport: genMAGMAConfig(database.passport, {
    releaseVer: 2,
    releasedAt: new Date('Dec 24, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  spacecadet: genMAGMAConfig(database.spacecadet, {
    autogenTheme: 'PsychJamRock',
    releaseVer: 3,
    releasedAt: new Date('Dec 21, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  spacecadet2x: genMAGMAConfig(database.spacecadet2x, {
    autogenTheme: 'PsychJamRock',
    doubleKickOptions: { kickwav: true },
    releaseVer: 3,
    releasedAt: new Date('Dec 21, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  breakingintocars: genMAGMAConfig(database.breakingintocars, {
    hasLipSyncFiles: true,
    releaseVer: 3,
    releasedAt: new Date('Jan 11, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  aracaazul: genMAGMAConfig(database.aracaazul, {
    hasLipSyncFiles: true,
    fakeHarm: 2,
    hasAuthoredVenues: true,
    releaseVer: 2,
    releasedAt: new Date('Jun 10, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  demon: genMAGMAConfig(database.demon, {
    releaseVer: 2,
    releasedAt: new Date('Jun 14, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  cutmyfingersoff: genMAGMAConfig(database.cutmyfingersoff, {
    releaseVer: 3,
    releasedAt: new Date('Jun 15, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  thefightisover: genMAGMAConfig(database.thefightisover, {
    releaseVer: 3,
    releasedAt: new Date('Jun 15, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  anysecondnow: genMAGMAConfig(database.anysecondnow, {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Jul 18, 2022').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  congratulations: genMAGMAConfig(database.congratulations, {
    releaseVer: 2,
    releasedAt: new Date('Jul 4, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  lightsinthesky: genMAGMAConfig(database.lightsinthesky, {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Aug 26, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  mothernature: genMAGMAConfig(database.mothernature, {
    releaseVer: 2,
    releasedAt: new Date('Aug 28, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  mindmischief: genMAGMAConfig(database.mindmischief, {
    releaseVer: 2,
    releasedAt: new Date('Dec 14, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  theradiant: genMAGMAConfig(database.theradiant, {
    releaseVer: 2,
    releasedAt: new Date('Dec 5, 2019').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  whydidntyoustopme: genMAGMAConfig(database.whydidntyoustopme, {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Dec 5, 2019').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  thespaceinbetween: genMAGMAConfig(database.thespaceinbetween, {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Dec 5, 2019').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  sanguelatino: genMAGMAConfig(database.sanguelatino, {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Apr 10, 2020').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  robotsinthegarden: genMAGMAConfig(database.robotsinthegarden, {
    hasLipSyncFiles: true,
    hasAuthoredVenues: true,
    releaseVer: 2,
    releasedAt: new Date('Nov 29, 2020').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  ponytail: genMAGMAConfig(database.ponytail, {
    hasLipSyncFiles: true,
    hasAuthoredVenues: true,
    releaseVer: 2,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  beinfriends: genMAGMAConfig(database.beinfriends, {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  hippiebattle: genMAGMAConfig(database.hippiebattle, {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  patins: genMAGMAConfig(database.patins, {
    hasLipSyncFiles: true,
    hasAuthoredVenues: true,
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  motherearth: genMAGMAConfig(database.motherearth, {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  pollyanna: genMAGMAConfig(database.pollyanna, {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  twinkle: genMAGMAConfig(database.twinkle, {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  tetodevidro: genMAGMAConfig(database.tetodevidro, {
    hasLipSyncFiles: true,
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  lennastheme: genMAGMAConfig(database.lennastheme, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  fateinhaze: genMAGMAConfig(database.fateinhaze, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  royalpalace: genMAGMAConfig(database.royalpalace, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  magicant: genMAGMAConfig(database.magicant, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  smb2playersel: genMAGMAConfig(database.smb2playersel, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  itstimetojump: genMAGMAConfig(database.itstimetojump, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  wisdomoftheworld: genMAGMAConfig(database.wisdomoftheworld, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  toweroflahja: genMAGMAConfig(database.toweroflahja, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  myhome: genMAGMAConfig(database.myhome, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  allthatineeded: genMAGMAConfig(database.allthatineeded, {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  ruinus: genMAGMAConfig(database.ruinus, {
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
