import { createDTA, extendDTAFile } from '../../../../src/core'
import { MAGMAProject } from '../../backend-gen-folder'
import * as database from './songs'

export const ruggy = {
  paintwar: extendDTAFile<MAGMAProject>(createDTA(database.paintwar, true), {
    autogenTheme: 'SynthPop',
    hasAuthoredVenues: true,
    hasLipSyncFiles: true,
    releaseVer: 6,
    releasedAt: new Date('Aug 23, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  southparktheme: extendDTAFile<MAGMAProject>(createDTA(database.southparktheme, true), {
    autogenTheme: 'PsychJamRock',
    hasAuthoredVenues: true,
    hasLipSyncFiles: true,
    releaseVer: 7,
    releasedAt: new Date('Sep 1, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  hideandseek: extendDTAFile<MAGMAProject>(createDTA(database.hideandseek, true), {
    autogenTheme: 'SlowJam',
    hasAuthoredVenues: true,
    releaseVer: 3,
    releasedAt: new Date('Sep 4, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  cravoecanela: extendDTAFile<MAGMAProject>(createDTA(database.cravoecanela, true), {
    autogenTheme: 'PsychJamRock',
    releaseVer: 3,
    releasedAt: new Date('Sep 17, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  deadwomb: extendDTAFile<MAGMAProject>(createDTA(database.deadwomb, true), {
    autogenTheme: 'GaragePunkRock',
    releaseVer: 4,
    releasedAt: new Date('Sep 20, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  minuet: extendDTAFile<MAGMAProject>(createDTA(database.minuet, true), {
    autogenTheme: 'SlowJam',
    releaseVer: 4,
    releasedAt: new Date('Oct 7, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  flourish: extendDTAFile<MAGMAProject>(
    createDTA(database.flourish, true),
    {
      releaseVer: 4,
      releasedAt: new Date('Nov 17, 2017').toDateString(),
      updatedAt: new Date('Nov 7, 2023').toDateString(),
    },
    { fake: true }
  ),

  town: extendDTAFile<MAGMAProject>(
    createDTA(database.town, true),
    {
      releaseVer: 3,
      releasedAt: new Date('Dec 4, 2017').toDateString(),
      updatedAt: new Date('Nov 7, 2023').toDateString(),
    },
    { fake: true }
  ),

  onestop: extendDTAFile<MAGMAProject>(
    createDTA(database.onestop, true),
    {
      releaseVer: 2,
      releasedAt: new Date('Dec 8, 2017').toDateString(),
      updatedAt: new Date('Nov 7, 2023').toDateString(),
    },
    { fake: true }
  ),

  canyon: extendDTAFile<MAGMAProject>(
    createDTA(database.canyon, true),
    {
      releaseVer: 3,
      releasedAt: new Date('Dec 16, 2017').toDateString(),
      updatedAt: new Date('Nov 7, 2023').toDateString(),
    },
    { fake: true }
  ),

  passport: extendDTAFile<MAGMAProject>(createDTA(database.passport, true), {
    releaseVer: 2,
    releasedAt: new Date('Dec 24, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  spacecadet: extendDTAFile<MAGMAProject>(createDTA(database.spacecadet, true), {
    autogenTheme: 'PsychJamRock',
    releaseVer: 3,
    releasedAt: new Date('Dec 21, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  spacecadet2x: extendDTAFile<MAGMAProject>(createDTA(database.spacecadet2x, true), {
    autogenTheme: 'PsychJamRock',
    doubleKickOptions: { kickwav: true },
    releaseVer: 3,
    releasedAt: new Date('Dec 21, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  breakingintocars: extendDTAFile<MAGMAProject>(createDTA(database.breakingintocars, true), {
    hasLipSyncFiles: true,
    releaseVer: 3,
    releasedAt: new Date('Jan 11, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  aracaazul: extendDTAFile<MAGMAProject>(createDTA(database.aracaazul, true), {
    hasLipSyncFiles: true,
    fakeHarm: 2,
    hasAuthoredVenues: true,
    releaseVer: 2,
    releasedAt: new Date('Jun 10, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  demon: extendDTAFile<MAGMAProject>(createDTA(database.demon, true), {
    releaseVer: 2,
    releasedAt: new Date('Jun 14, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  cutmyfingersoff: extendDTAFile<MAGMAProject>(createDTA(database.cutmyfingersoff, true), {
    releaseVer: 3,
    releasedAt: new Date('Jun 15, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  thefightisover: extendDTAFile<MAGMAProject>(createDTA(database.thefightisover, true), {
    releaseVer: 3,
    releasedAt: new Date('Jun 15, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  anysecondnow: extendDTAFile<MAGMAProject>(createDTA(database.anysecondnow, true), {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Jul 18, 2022').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  congratulations: extendDTAFile<MAGMAProject>(createDTA(database.congratulations, true), {
    releaseVer: 2,
    releasedAt: new Date('Jul 4, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  lightsinthesky: extendDTAFile<MAGMAProject>(createDTA(database.lightsinthesky, true), {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Aug 26, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  mothernature: extendDTAFile<MAGMAProject>(createDTA(database.mothernature, true), {
    releaseVer: 2,
    releasedAt: new Date('Aug 28, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  mindmischief: extendDTAFile<MAGMAProject>(createDTA(database.mindmischief, true), {
    releaseVer: 2,
    releasedAt: new Date('Dec 14, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  theradiant: extendDTAFile<MAGMAProject>(createDTA(database.theradiant, true), {
    releaseVer: 2,
    releasedAt: new Date('Dec 5, 2019').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  whydidntyoustopme: extendDTAFile<MAGMAProject>(createDTA(database.whydidntyoustopme, true), {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Dec 5, 2019').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  thespaceinbetween: extendDTAFile<MAGMAProject>(createDTA(database.thespaceinbetween, true), {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Dec 5, 2019').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  sanguelatino: extendDTAFile<MAGMAProject>(createDTA(database.sanguelatino, true), {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Apr 10, 2020').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  robotsinthegarden: extendDTAFile<MAGMAProject>(createDTA(database.robotsinthegarden, true), {
    hasLipSyncFiles: true,
    hasAuthoredVenues: true,
    releaseVer: 2,
    releasedAt: new Date('Nov 29, 2020').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  ponytail: extendDTAFile<MAGMAProject>(createDTA(database.ponytail, true), {
    hasLipSyncFiles: true,
    hasAuthoredVenues: true,
    releaseVer: 2,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  beinfriends: extendDTAFile<MAGMAProject>(createDTA(database.beinfriends, true), {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  hippiebattle: extendDTAFile<MAGMAProject>(createDTA(database.hippiebattle, true), {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  patins: extendDTAFile<MAGMAProject>(createDTA(database.patins, true), {
    hasLipSyncFiles: true,
    hasAuthoredVenues: true,
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  motherearth: extendDTAFile<MAGMAProject>(createDTA(database.motherearth, true), {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  pollyanna: extendDTAFile<MAGMAProject>(createDTA(database.pollyanna, true), {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  twinkle: extendDTAFile<MAGMAProject>(createDTA(database.twinkle, true), {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  tetodevidro: extendDTAFile<MAGMAProject>(createDTA(database.tetodevidro, true), {
    hasLipSyncFiles: true,
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  lennastheme: extendDTAFile<MAGMAProject>(createDTA(database.lennastheme, true), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  fateinhaze: extendDTAFile<MAGMAProject>(createDTA(database.fateinhaze, true), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  royalpalace: extendDTAFile<MAGMAProject>(createDTA(database.royalpalace, true), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  magicant: extendDTAFile<MAGMAProject>(createDTA(database.magicant, true), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  smb2playersel: extendDTAFile<MAGMAProject>(createDTA(database.smb2playersel, true), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  itstimetojump: extendDTAFile<MAGMAProject>(createDTA(database.itstimetojump, true), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  wisdomoftheworld: extendDTAFile<MAGMAProject>(createDTA(database.wisdomoftheworld, true), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  toweroflahja: extendDTAFile<MAGMAProject>(createDTA(database.toweroflahja, true), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  myhome: extendDTAFile<MAGMAProject>(createDTA(database.myhome, true), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  allthatineeded: extendDTAFile<MAGMAProject>(createDTA(database.allthatineeded, true), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  polyesterjammy: extendDTAFile<MAGMAProject>(
    createDTA(database.polyesterjammy, true),
    {
      releaseVer: 1,
      releasedAt: new Date('Apr 19, 2024').toDateString(),
      updatedAt: new Date('Apr 19, 2024').toDateString(),
    },
    {
      fake: true,
    }
  ),

  ruinus: extendDTAFile<MAGMAProject>(
    createDTA(database.ruinus, true),
    {
      releaseVer: 1,
      releasedAt: new Date('Nov 7, 2023').toDateString(),
      updatedAt: new Date('Nov 7, 2023').toDateString(),
    },
    { fake: true }
  ),
}

/**
 * Ruggy Customs.
 * - - - -
 * @returns {MAGMAProject[]} All songs authored by Ruggy.
 */
const RuggyCustoms = (): MAGMAProject[] => {
  const list: MAGMAProject[] = []

  Object.keys(ruggy).forEach((song) => {
    list.push(ruggy[song as keyof typeof ruggy])
  })

  return list.sort((a, b) => {
    if (a.song_id > b.song_id) return 1
    if (a.song_id < b.song_id) return -1
    return 0
  })
}

// export type RuggyCustomsSongnames = keyof typeof songs
// export type MySongsModule = Record<RuggyCustomsSongnames, MAGMAProject>

export default RuggyCustoms
