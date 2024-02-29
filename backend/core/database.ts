import { createDTA } from '../../src/lib/create'
import { extendDTAFile } from '../../src/lib/extend'
import { MAGMAProject } from '../lib/magma'

// All songs import
import * as database from '../database/songs'

const mySongs = {
  paintwar: extendDTAFile<MAGMAProject>(createDTA(database.paintwar), {
    autogenTheme: 'SynthPop',
    hasAuthoredVenues: true,
    hasLipSyncFiles: true,
    releaseVer: 6,
    releasedAt: new Date('Aug 23, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  southparktheme: extendDTAFile<MAGMAProject>(createDTA(database.southparktheme), {
    autogenTheme: 'PsychJamRock',
    hasAuthoredVenues: true,
    hasLipSyncFiles: true,
    releaseVer: 7,
    releasedAt: new Date('Sep 1, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  hideandseek: extendDTAFile<MAGMAProject>(createDTA(database.hideandseek), {
    autogenTheme: 'SlowJam',
    hasAuthoredVenues: true,
    releaseVer: 3,
    releasedAt: new Date('Sep 4, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  cravoecanela: extendDTAFile<MAGMAProject>(createDTA(database.cravoecanela), {
    autogenTheme: 'PsychJamRock',
    releaseVer: 3,
    releasedAt: new Date('Sep 17, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  deadwomb: extendDTAFile<MAGMAProject>(createDTA(database.deadwomb), {
    autogenTheme: 'GaragePunkRock',
    releaseVer: 4,
    releasedAt: new Date('Sep 20, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  minuet: extendDTAFile<MAGMAProject>(createDTA(database.minuet), {
    autogenTheme: 'SlowJam',
    releaseVer: 4,
    releasedAt: new Date('Oct 7, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  flourish: extendDTAFile<MAGMAProject>(
    createDTA(database.flourish),
    {
      releaseVer: 4,
      releasedAt: new Date('Nov 17, 2017').toDateString(),
      updatedAt: new Date('Nov 7, 2023').toDateString(),
    },
    { fake: true }
  ),

  town: extendDTAFile<MAGMAProject>(
    createDTA(database.town),
    {
      releaseVer: 3,
      releasedAt: new Date('Dec 4, 2017').toDateString(),
      updatedAt: new Date('Nov 7, 2023').toDateString(),
    },
    { fake: true }
  ),

  onestop: extendDTAFile<MAGMAProject>(
    createDTA(database.onestop),
    {
      releaseVer: 2,
      releasedAt: new Date('Dec 8, 2017').toDateString(),
      updatedAt: new Date('Nov 7, 2023').toDateString(),
    },
    { fake: true }
  ),

  canyon: extendDTAFile<MAGMAProject>(
    createDTA(database.canyon),
    {
      releaseVer: 3,
      releasedAt: new Date('Dec 16, 2017').toDateString(),
      updatedAt: new Date('Nov 7, 2023').toDateString(),
    },
    { fake: true }
  ),

  passport: extendDTAFile<MAGMAProject>(createDTA(database.passport), {
    releaseVer: 2,
    releasedAt: new Date('Dec 24, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  spacecadet: extendDTAFile<MAGMAProject>(createDTA(database.spacecadet), {
    autogenTheme: 'PsychJamRock',
    releaseVer: 3,
    releasedAt: new Date('Dec 21, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  spacecadet2x: extendDTAFile<MAGMAProject>(createDTA(database.spacecadet2x), {
    autogenTheme: 'PsychJamRock',
    doubleKickOptions: { kickwav: true },
    releaseVer: 3,
    releasedAt: new Date('Dec 21, 2017').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  breakingintocars: extendDTAFile<MAGMAProject>(createDTA(database.breakingintocars), {
    hasLipSyncFiles: true,
    releaseVer: 3,
    releasedAt: new Date('Jan 11, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  aracaazul: extendDTAFile<MAGMAProject>(createDTA(database.aracaazul), {
    hasLipSyncFiles: true,
    fakeHarm: 2,
    hasAuthoredVenues: true,
    releaseVer: 2,
    releasedAt: new Date('Jun 10, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  demon: extendDTAFile<MAGMAProject>(createDTA(database.demon), {
    releaseVer: 2,
    releasedAt: new Date('Jun 14, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  cutmyfingersoff: extendDTAFile<MAGMAProject>(createDTA(database.cutmyfingersoff), {
    releaseVer: 3,
    releasedAt: new Date('Jun 15, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  thefightisover: extendDTAFile<MAGMAProject>(createDTA(database.thefightisover), {
    releaseVer: 3,
    releasedAt: new Date('Jun 15, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  anysecondnow: extendDTAFile<MAGMAProject>(createDTA(database.anysecondnow), {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Jul 18, 2022').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  congratulations: extendDTAFile<MAGMAProject>(createDTA(database.congratulations), {
    releaseVer: 2,
    releasedAt: new Date('Jul 4, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  lightsinthesky: extendDTAFile<MAGMAProject>(createDTA(database.lightsinthesky), {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Aug 26, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  mothernature: extendDTAFile<MAGMAProject>(createDTA(database.mothernature), {
    releaseVer: 2,
    releasedAt: new Date('Aug 28, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  mindmischief: extendDTAFile<MAGMAProject>(createDTA(database.mindmischief), {
    releaseVer: 2,
    releasedAt: new Date('Dec 14, 2018').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  theradiant: extendDTAFile<MAGMAProject>(createDTA(database.theradiant), {
    releaseVer: 2,
    releasedAt: new Date('Dec 5, 2019').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  whydidntyoustopme: extendDTAFile<MAGMAProject>(createDTA(database.whydidntyoustopme), {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Dec 5, 2019').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  thespaceinbetween: extendDTAFile<MAGMAProject>(createDTA(database.thespaceinbetween), {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Dec 5, 2019').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  sanguelatino: extendDTAFile<MAGMAProject>(createDTA(database.sanguelatino), {
    hasLipSyncFiles: true,
    releaseVer: 2,
    releasedAt: new Date('Apr 10, 2020').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  robotsinthegarden: extendDTAFile<MAGMAProject>(createDTA(database.robotsinthegarden), {
    hasLipSyncFiles: true,
    hasAuthoredVenues: true,
    releaseVer: 2,
    releasedAt: new Date('Nov 29, 2020').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  ponytail: extendDTAFile<MAGMAProject>(createDTA(database.ponytail), {
    hasLipSyncFiles: true,
    hasAuthoredVenues: true,
    releaseVer: 2,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  beinfriends: extendDTAFile<MAGMAProject>(createDTA(database.beinfriends), {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  hippiebattle: extendDTAFile<MAGMAProject>(createDTA(database.hippiebattle), {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  patins: extendDTAFile<MAGMAProject>(createDTA(database.patins), {
    hasLipSyncFiles: true,
    hasAuthoredVenues: true,
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  motherearth: extendDTAFile<MAGMAProject>(createDTA(database.motherearth), {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  pollyanna: extendDTAFile<MAGMAProject>(createDTA(database.pollyanna), {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  twinkle: extendDTAFile<MAGMAProject>(createDTA(database.twinkle), {
    releaseVer: 1,
    releasedAt: new Date('Jul 16, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  tetodevidro: extendDTAFile<MAGMAProject>(createDTA(database.tetodevidro), {
    hasLipSyncFiles: true,
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  lennastheme: extendDTAFile<MAGMAProject>(createDTA(database.lennastheme), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  fateinhaze: extendDTAFile<MAGMAProject>(createDTA(database.fateinhaze), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  royalpalace: extendDTAFile<MAGMAProject>(createDTA(database.royalpalace), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  magicant: extendDTAFile<MAGMAProject>(createDTA(database.magicant), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  smb2playersel: extendDTAFile<MAGMAProject>(createDTA(database.smb2playersel), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  itstimetojump: extendDTAFile<MAGMAProject>(createDTA(database.itstimetojump), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  wisdomoftheworld: extendDTAFile<MAGMAProject>(createDTA(database.wisdomoftheworld), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  toweroflahja: extendDTAFile<MAGMAProject>(createDTA(database.toweroflahja), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  myhome: extendDTAFile<MAGMAProject>(createDTA(database.myhome), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  allthatineeded: extendDTAFile<MAGMAProject>(createDTA(database.allthatineeded), {
    releaseVer: 1,
    releasedAt: new Date('Nov 7, 2023').toDateString(),
    updatedAt: new Date('Nov 7, 2023').toDateString(),
  }),

  ruinus: extendDTAFile<MAGMAProject>(
    createDTA(database.ruinus),
    {
      releaseVer: 1,
      releasedAt: new Date('Nov 7, 2023').toDateString(),
      updatedAt: new Date('Nov 7, 2023').toDateString(),
    },
    { fake: true }
  ),
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
