import { DTAContentDocument, DTADocument } from '../@types/DTADocument'
import { depackDTA } from '../utils/depackDTA'
import { getSongByID } from '../utils/getSongByID'
import { parseDTA } from '../utils/parseDTA'
import { SortByOptionsTypes, sortDTA } from '../utils/sortDTA'
import { UpdateDataOptions } from '../utils/updateDTA'

interface SongsUpdatesDocument {
    [key: string]: Partial<DTAContentDocument> | undefined
}

export const songsUpdates: SongsUpdatesDocument = {
    '100000years': {
        song_length: 346363,
        solo: ['drum', 'guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    '10s': {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    '13stepstonowhere': {
        solo: ['drum'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    '21guns': {
        vocal_parts: 3,
        song_length: 327727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['greenday', 'disc_update'],
        vocal_tonic_note: 5,
        song_tonality: 0,
    },
    '21stcentdigiboy': {
        song_id: 1005604,
        preview: [36500, 66500],
        song_length: 173181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    '21stcenturybreakdown': {
        song_length: 323809,
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    '29fingers': {
        song_id: 46,
        song_length: 175000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 2005,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'The Konks',
        album_track_number: 2,
        vocal_parts: 3,
        vocal_tonic_note: 2,
        song_tonality: 1,
    },
    '2minutestomidnight': {
        song_id: 1005588,
        song_length: 370909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    '3dimesdown': {
        song_id: 1005438,
        song_length: 200000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    '3sand7s': {
        song_id: 1005009,
        song_length: 220000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_metal',
        rating: 2,
        year_released: 2007,
        alternate_path: true,
        album_art: true,
        album_name: 'Era Vulgaris',
        album_track_number: 8,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    abc: {
        song_length: 188181,
        solo: ['drum'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    aboutagirl: {
        song_length: 170454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    accidentallyinlove: {
        song_length: 195000,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        album_art: true,
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    accordingtoyou: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    aceshigh_live: {
        song_id: 1005589,
        song_length: 309090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 2008,
        year_recorded: 2009,
        extra_authoring: ['disc_update'],
    },
    acleanshot: {
        song_id: 1005129,
        song_length: 241363,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2008,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'With Arrows, With Poise',
        album_track_number: 4,
        vocal_parts: 3,
    },
    action: {
        song_id: 1005041,
        song_length: 202272,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1976,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_parts: 3,
    },
    adamssong: {
        format: 10,
        alternate_path: true,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    adaylikethis: {
        song_length: 94545,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    aestheticsofhate: {
        song_id: 1005188,
        hopo_threshold: 250,
        song_length: 359545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    afavorhouseatlantic: {
        song_id: 1005575,
        song_length: 220909,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    afterlife: {
        song_id: 1005132,
        song_length: 350454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_vol_2',
        rating: 2,
        alternate_path: true,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        version: 1,
        year_released: 2007,
        album_name: 'Avenged Sevenfold',
        album_track_number: 4,
    },
    agirllikeyou: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    aintnotelling: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    ajaggedgorgeouswinter: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    alabamagetaway: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    aliensexist: {
        song_length: 197727,
        solo: ['vocal_percussion'],
        format: 10,
        alternate_path: true,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    alive: {
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    alivelive: {
        song_id: 1005487,
        song_length: 313181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['pearljam', 'disc_update'],
    },
    allgoingouttogether: {
        song_length: 182727,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        year_released: 1987,
        year_recorded: 2008,
        album_track_number: 12,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    alliwant: {
        song_id: 1005453,
        song_length: 121818,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    allmixedup: {
        song_id: 1005113,
        song_length: 287272,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1978,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'The Cars',
        album_track_number: 9,
        vocal_parts: 3,
    },
    allmylife: {
        song_length: 280454,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    allofthis: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    alloveragain: {
        song_id: 1005200,
        song_length: 209545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    allrightnow: {
        song_id: 1005253,
        song_length: 343181,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rbtp_classic_rock',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    allthesmallthings: {
        song_id: 1005040,
        song_length: 174545,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 1,
        year_released: 1999,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Enema of the State',
        album_track_number: 8,
        vocal_parts: 3,
    },
    allthethingsthatgo: {
        song_id: 1005474,
        song_length: 189545,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    almosteasy: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 1,
        song_tonality: 0,
    },
    aloneinmyhead: {
        song_id: 1005520,
        song_length: 247727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    alookinginview: {
        song_length: 429545,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    amazingjourney: {
        song_id: 1005172,
        song_length: 213181,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    america: {
        song_length: 222727,
        solo: ['drum'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    americaneulogy: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    americangirl: {
        song_length: 236818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    americanidiot: {
        solo: ['guitar'],
        format: 10,
    },
    americanmusic: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    americanwoman: {
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    amongstthewaves: {
        song_length: 240000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['pearljam'],
    },
    andjusticeforall: {
        song_id: 1005015,
        preview: [156300, 186300],
        song_length: 591818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1988,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: '...And Justice for All',
        album_track_number: 2,
        vocal_parts: 2,
    },
    andres: {
        song_length: 200909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    andshewas: {
        song_length: 221363,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    anotheronebitesthedust: {
        song_length: 223181,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    anymanofmine: {
        song_id: 1005466,
        song_length: 258636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    apacherosepeacock: {
        song_id: 1005236,
        song_length: 290000,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    apunk: {
        song_length: 141363,
        solo: ['vocal_percussion'],
        format: 10,
        extra_authoring: ['disc_update'],
        genre: 'indierock',
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    aqualung: {
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 7,
        song_tonality: 1,
    },
    areyoudeadyet: {
        song_id: 1005363,
        song_length: 240000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_metal',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    areyougonnabemygirl: {
        song_id: 1,
        song_length: 179090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 2003,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Get Born',
        album_track_number: 2,
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    areyougonnagomyway: {
        song_id: 1005403,
        song_length: 214545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    ashestofire: {
        song_id: 1005318,
        preview: [8550, 38550],
        song_length: 171818,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 3,
        song_tonality: 1,
    },
    athingaboutyou: {
        song_length: 300454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    attack: {
        song_id: 1005032,
        song_length: 190000,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2005,
        alternate_path: true,
        album_art: true,
        album_name: 'A Beautiful Lie',
        album_track_number: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    awomaninlovelive: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_tonic_note: 11,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        song_tonality: 0,
    },
    babaoriley: {
        song_id: 1005171,
        song_length: 310909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_classic_rock',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    backfromthedead: {
        song_id: 1005598,
        song_length: 241363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        genre: 'metal',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    backinblack_live: {
        song_id: 1005296,
        preview: [22941, 52941],
        song_length: 237727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    badluck: {
        song_id: 1005554,
        song_length: 266818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1992,
        year_recorded: 2007,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    badmoonrising: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    badomen: {
        song_id: 1005214,
        song_length: 246363,
        solo: ['guitar'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    badreputation: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    badtothebone: {
        song_id: 1005252,
        song_length: 297272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rbtp_classic_rock',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    ballroomblitz: {
        song_id: 2,
        preview: [49700, 79700],
        song_length: 203636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 1975,
        alternate_path: true,
        album_art: false,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    bandages: {
        song_id: 1005224,
        song_length: 214090,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    bangagong: {
        song_id: 1005006,
        preview: [30000, 60000],
        song_length: 275909,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1971,
        alternate_path: true,
        album_art: false,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    batcountry: {
        song_length: 320454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    bathwater: {
        song_id: 1005373,
        preview: [98600, 128600],
        song_length: 245909,
        format: 10,
        game_origin: 'rb3dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        alternate_path: true,
        year_released: 2000,
        album_name: 'Return of Saturn',
        album_track_number: 3,
    },
    battery: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 1,
    },
    beatitondowntheline: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    beautifulthieves: {
        song_length: 224545,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    beerformyhorses: {
        song_id: 1005504,
        song_length: 214090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    beethovensc: {
        song_id: 1005068,
        song_length: 197727,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2007,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Elect The Dead',
        album_track_number: 11,
        vocal_parts: 3,
        name: "Beethoven's Cunt",
    },
    beetlebum: {
        song_id: 1005112,
        song_length: 310000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1997,
        alternate_path: true,
        album_art: false,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    behindblueeyes: {
        song_id: 1005170,
        song_length: 235909,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_classic_rock',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    bestdayever: {
        song_id: 1005495,
        song_length: 174545,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    bestofme: {
        song_length: 186818,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    bestofyou: {
        song_length: 258181,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    better: {
        song_id: 1005516,
        song_length: 304090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    beverlyhills: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    bigbottom: {
        song_length: 219545,
        solo: ['drum'],
        format: 10,
        game_origin: 'rb1_dlc',
    },
    billiondollarlive: {
        song_id: 1005565,
        song_length: 216363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    black: {
        song_id: 1005483,
        vocal_parts: 2,
        song_length: 365000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    blackened: {
        song_id: 1005014,
        preview: [102700, 132700],
        song_length: 401363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1988,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: '...And Justice for All',
        album_track_number: 1,
        vocal_parts: 2,
    },
    blackfriday: {
        song_id: 1005556,
        song_length: 221818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    blackholesun: {
        song_id: 3,
        preview: [116375, 146375],
        song_length: 271363,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1994,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Superunknown',
        album_track_number: 7,
        vocal_parts: 3,
        genre: 'grunge',
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    blackmagic: {
        song_length: 245000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    blacksunshine: {
        song_id: 1005430,
        song_length: 256818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    blew: {
        song_length: 178181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    blindedbyfear: {
        song_id: 1005071,
        preview: [39652, 69652],
        song_length: 166363,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_metal',
        rating: 2,
        year_released: 1995,
        alternate_path: true,
        album_art: true,
        album_name: 'Slaughter of the Soul',
        album_track_number: 1,
        extra_authoring: ['disc_update'],
    },
    blitzkriegbop: {
        song_id: 4,
        preview: [25600, 55600],
        song_length: 111363,
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 1976,
        alternate_path: true,
        album_art: true,
        album_name: 'Ramones',
        album_track_number: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    blooddoll: {
        song_id: 47,
        song_length: 165454,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 2007,
        alternate_path: true,
        album_art: true,
        album_name: 'A Single Drop of Red',
        album_track_number: 3,
        extra_authoring: ['disc_update'],
        genre: 'metal',
        vocal_tonic_note: 2,
        song_tonality: 1,
    },
    bloodstone: {
        song_id: 1005095,
        preview: [62241, 92241],
        song_length: 235909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1982,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Screaming for Vengeance',
        album_track_number: 4,
        vocal_parts: 2,
    },
    bloodsugarsexmagik: {
        song_id: 1005239,
        song_length: 279545,
        solo: ['guitar'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    bluechristmas: {
        song_id: 1005384,
        song_length: 152727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    bluecollarman: {
        song_id: 1005522,
        song_length: 250909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1978,
        year_recorded: 2009,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    bluejeans: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    bluemorningblueday: {
        song_length: 192272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    bluesky: {
        song_id: 1005542,
        song_length: 320000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    bodhisattva: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    bodyioccupy: {
        song_id: 1005362,
        song_length: 287727,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    boldaslove: {
        solo: ['drum', 'guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    bornonthebayou: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
    },
    boulevardof: {
        solo: ['guitar'],
        format: 10,
    },
    bounce: {
        song_id: 1005317,
        song_length: 216363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    boysarebackintown: {
        song_id: 1005421,
        song_length: 274090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_recorded: 2009,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        year_released: 1977,
    },
    brainpower: {
        song_id: 48,
        song_length: 128181,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 2007,
        alternate_path: true,
        album_art: true,
        album_name: 'Future Future Future Perfect',
        album_track_number: 6,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'popdanceelectronic',
        vocal_tonic_note: 0,
        song_tonality: 1,
    },
    brassinpocket: {
        song_id: 1005027,
        song_length: 190000,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1980,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_parts: 3,
    },
    breakdownlive: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    breakingthegirl: {
        song_id: 1005245,
        song_length: 301363,
        solo: ['vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    breakingthelawlive: {
        solo: ['guitar'],
        format: 10,
        year_released: 1980,
        year_recorded: 2010,
        extra_authoring: ['disc_update'],
    },
    breakmyheart: {
        song_id: 1005424,
        song_length: 192272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    breakout: {
        song_length: 207272,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    breed: {
        song_id: 1005273,
        preview: [51873, 81873],
        song_length: 182272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        alternate_path: true,
        extra_authoring: ['disc_update'],
    },
    bringmetolife: {
        song_id: 1005595,
        song_length: 235909,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    brother: {
        song_id: 1005475,
        vocal_parts: 3,
        preview: [98600, 128600],
        song_length: 255000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 8,
        song_tonality: 0,
    },
    buddyholly: {
        song_id: 1005026,
        song_length: 162727,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 1,
        year_released: 1994,
        alternate_path: true,
        album_art: true,
        album_name: 'Weezer (The Blue Album)',
        album_track_number: 4,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    bulletsandguns: {
        song_id: 1005128,
        song_length: 152727,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2007,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Rock, Paper, Terribles',
        album_track_number: 1,
        vocal_parts: 3,
    },
    bullsonparade: {
        song_id: 1005616,
        song_length: 235909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_metal',
        rating: 2,
        vocal_tonic_note: 1,
        extra_authoring: ['disc_update'],
        song_tonality: 0,
    },
    burn: {
        song_id: 1005177,
        song_length: 305000,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    burnittotheground: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    burnout: {
        solo: ['drum'],
        format: 10,
    },
    burnrz: {
        song_length: 181363,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    burnyoudown: {
        song_id: 1005307,
        song_length: 208181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    byebyelove: {
        song_id: 1005115,
        song_length: 257727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1978,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'The Cars',
        album_track_number: 7,
        vocal_parts: 3,
    },
    byob: {
        song_id: 1005183,
        song_length: 261363,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    californiauberalles: {
        song_id: 1005342,
        song_length: 212272,
        format: 10,
        game_origin: 'rbtp_classic_rock',
        rating: 2,
        extra_authoring: ['disc_update'],
        encoding: 'latin1',
        vocal_parts: 3,
    },
    callingdrlove: {
        song_id: 1005050,
        song_length: 212272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 2,
        year_released: 1976,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Rock and Roll Over',
        album_track_number: 3,
        vocal_parts: 3,
    },
    callme: {
        song_id: 1005085,
        song_length: 228636,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_2',
        rating: 1,
        year_released: 1981,
        alternate_path: true,
        album_art: true,
        album_name: 'The Best of Blondie',
        album_track_number: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    callmewhenyouresober: {
        song_id: 1005592,
        song_length: 218181,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    cameraeye: {
        song_id: 1005227,
        song_length: 640909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    caniplaywithmadness: {
        song_id: 1005583,
        song_length: 214545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    cantbetamed: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'popdanceelectronic',
    },
    cantletgo: {
        song_id: 49,
        preview: [27700, 57700],
        song_length: 236363,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 2007,
        alternate_path: true,
        album_art: true,
        album_name: "Can't Let Go",
        album_track_number: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 6,
        song_tonality: 1,
    },
    cantletgo_lucinda: {
        song_id: 1005436,
        song_length: 214545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    cantstandlosingyou: {
        song_id: 1005012,
        preview: [24750, 54750],
        song_length: 180909,
        format: 10,
        version: 1,
        game_origin: 'rbtp_classic_rock',
        rating: 2,
        year_released: 1978,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: "Outlandos d'Amour",
        album_track_number: 6,
        vocal_parts: 3,
    },
    cantstoprockin: {
        song_id: 1005524,
        song_length: 270909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    capitalg: {
        song_id: 1005176,
        song_length: 235000,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    capricididiablo: {
        song_id: 1005353,
        song_length: 273181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
    },
    carryonwaywardson: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    caseyjones: {
        song_id: 1005065,
        song_length: 270000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1970,
        alternate_path: true,
        album_art: true,
        album_name: "Workingman's Dead",
        album_track_number: 8,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    castlesmadeofsand: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    catcherintherye: {
        song_id: 1005512,
        song_length: 353181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    celebrityskin: {
        song_id: 5,
        song_length: 143181,
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1998,
        alternate_path: true,
        album_art: true,
        album_name: 'Celebrity Skin',
        album_track_number: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'alternative',
        vocal_tonic_note: 6,
        song_tonality: 0,
    },
    centurycitylive: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    charlene: {
        song_id: 1005207,
        song_length: 79545,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    checkmybrain: {
        song_length: 247272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    checkyesjuliet: {
        song_length: 223636,
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    cheeseburgerinparadise: {
        song_id: 1005124,
        song_length: 185454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1978,
        year_recorded: 2008,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Exclusive 2008 Rock Band Re-Recording',
        album_track_number: 1,
        vocal_parts: 3,
    },
    cherrybomb: {
        song_id: 1005005,
        song_length: 141818,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1976,
        alternate_path: true,
        album_art: false,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    cherrywaves: {
        solo: ['drum'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    cherubrock: {
        song_id: 6,
        preview: [42350, 72350],
        song_length: 305454,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 1993,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Siamese Dream',
        album_track_number: 1,
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    chestfeverlive: {
        song_length: 302727,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    chinacatsunflower: {
        song_id: 1005064,
        song_length: 228636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1969,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Aoxomoxoa',
        album_track_number: 6,
        vocal_parts: 3,
    },
    chinesedemocracy: {
        song_id: 1005517,
        song_length: 284545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    chiron: {
        song_id: 1005206,
        song_length: 266363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    christiansinferno: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['greenday', 'disc_update'],
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    christmasisthetime: {
        song_id: 1005383,
        song_length: 174545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
    },
    chump: {
        vocal_parts: 2,
        format: 10,
        extra_authoring: ['disc_update'],
    },
    claudette: {
        song_id: 1005397,
        song_length: 156363,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    clinteastwood: {
        song_length: 365000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        genre: 'hiphoprap',
    },
    closer: {
        song_id: 1005338,
        song_length: 189545,
        format: 10,
        game_origin: 'rbtp_metal',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    closertotheheart: {
        song_id: 1005158,
        preview: [66680, 96680],
        song_length: 184090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_classic_rock',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    cloudsovercalifornia: {
        song_id: 1005191,
        song_length: 256818,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    clubfoot: {
        song_length: 172272,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    cmoncmon: {
        song_id: 1005492,
        song_length: 137727,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    coldrainandsnow: {
        song_id: 1005417,
        song_length: 152272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    collector: {
        song_id: 1005056,
        preview: [125387, 155387],
        song_length: 190909,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2005,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'With Teeth',
        album_track_number: 3,
    },
    comeasyouarelive: {
        song_length: 231818,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    comeoutandplay: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    comingclean: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    completecontrol: {
        song_id: 1005053,
        song_length: 197727,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1977,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'The Clash',
        album_track_number: 4,
        vocal_parts: 3,
    },
    conquerall: {
        song_length: 215909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    constantmotion: {
        song_id: 1005190,
        song_length: 422272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    countdowntoinsanity: {
        song_id: 1005105,
        song_length: 235454,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2007,
        alternate_path: true,
        album_art: true,
        album_name: 'Open Letter to a Friend',
        album_track_number: 3,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    cowboysong_live: {
        song_id: 1005422,
        song_length: 329545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_recorded: 2009,
        year_released: 1977,
    },
    crackityjones: {
        song_id: 1005142,
        song_length: 87727,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
    },
    crash: {
        song_length: 163636,
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    crawl: {
        song_length: 253636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    crazybabies: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    crazylittlething: {
        song_length: 157727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    crazytuesday: {
        song_id: 1005316,
        song_length: 230909,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 0,
        song_tonality: 1,
    },
    creamandbastards: {
        song_id: 1005251,
        song_length: 201818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    creep: {
        song_id: 7,
        preview: [106000, 136000],
        song_length: 202727,
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1993,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Pablo Honey',
        album_track_number: 2,
        vocal_tonic_note: 8,
        song_tonality: 0,
    },
    creepinupthebackstairs: {
        song_id: 1005427,
        song_length: 189090,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    criticalacclaim: {
        song_id: 1005133,
        song_length: 314545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        version: 1,
        year_released: 2007,
        album_art: true,
        album_name: 'Avenged Sevenfold',
        album_track_number: 1,
    },
    crocodilerock: {
        song_length: 222727,
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    crosseyedandpainless: {
        song_length: 294090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    crushcrushcrush: {
        song_id: 1005067,
        song_length: 189090,
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 1,
        year_released: 2007,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Riot!',
        album_track_number: 8,
        vocal_parts: 3,
    },
    crylonely: {
        song_id: 1005454,
        song_length: 253636,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    cumberlandblues: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    cupsandcakes: {
        song_length: 100454,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    cuzurnext: {
        song_id: 1005568,
        song_length: 198181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    dammit: {
        song_id: 1005277,
        song_length: 169545,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
    },
    damnationgame: {
        song_id: 1005352,
        song_length: 309545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    danceepidemic: {
        song_length: 170454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        encoding: 'latin1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    danicalifornia: {
        song_id: 8,
        preview: [39450, 69450],
        song_length: 233636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 2006,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Stadium Arcadium',
        album_track_number: 1,
        vocal_parts: 3,
        genre: 'alternative',
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    databasecorrupted: {
        song_id: 1005315,
        song_length: 241818,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    datewiththenight: {
        song_id: 1005100,
        song_length: 158181,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2003,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Fever to Tell',
        album_track_number: 2,
        vocal_parts: 2,
    },
    dawnpatrol: {
        song_id: 1005909,
        format: 10,
        extra_authoring: ['disc_update'],
    },
    daylatedollarshort: {
        song_id: 50,
        preview: [72750, 102750],
        song_length: 152272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 2006,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Go Down Swinging',
        album_track_number: 1,
        vocal_parts: 2,
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    dead: {
        song_id: 1005145,
        song_length: 148181,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    deadleavesdirtyground: {
        song_length: 182272,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    deadonarrival: {
        song_id: 9,
        preview: [11500, 41500],
        song_length: 161818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 2003,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Take This to Your Grave',
        album_track_number: 2,
        vocal_parts: 3,
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    debaser: {
        song_id: 1005149,
        song_length: 176363,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    deep: {
        song_id: 1005478,
        vocal_parts: 3,
        song_length: 265454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 6,
        song_tonality: 0,
    },
    deluxe: {
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    desperatetimes: {
        song_id: 1005314,
        song_length: 210454,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    detroitrockcity: {
        song_id: 10,
        preview: [45850, 75850],
        song_length: 196818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1976,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Destroyer',
        album_track_number: 1,
        vocal_parts: 3,
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    deuce: {
        song_length: 225454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    devilschild: {
        song_id: 1005089,
        song_length: 291818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1982,
        alternate_path: true,
        album_art: true,
        album_name: 'Screaming for Vengeance',
        album_track_number: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    devilsisland: {
        song_id: 1005216,
        song_length: 310454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    devour: {
        song_id: 1005174,
        song_length: 224090,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    diaryofjane: {
        song_length: 204545,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    dieallright: {
        song_id: 1005038,
        song_length: 171818,
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 2,
        year_released: 2000,
        alternate_path: true,
        album_art: true,
        album_name: 'Veni Vidi Vicious',
        album_track_number: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    differentpeople: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    dig: {
        song_length: 265000,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    digginmedown: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    dirtydeeds_live: {
        song_id: 1005290,
        song_length: 280909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    dirtylittlesecret: {
        song_id: 1005031,
        song_length: 198636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 2005,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Move Along',
        album_track_number: 1,
        vocal_parts: 3,
    },
    dirtypool: {
        song_id: 1005442,
        song_length: 304545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    disposableteens: {
        preview: [60500, 90500],
        song_length: 183636,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    dissidentaggressor_live: {
        song_length: 183636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    distracted: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    doa: {
        song_id: 1005070,
        song_length: 250454,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_metal',
        rating: 2,
        year_released: 2003,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'One Kill Wonder',
        album_track_number: 5,
    },
    doa_foos: {
        song_id: 1005387,
        song_length: 255000,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    dockofthebay: {
        format: 10,
        year_released: 1967,
        year_recorded: 1992,
        genre: 'rbsoulfunk',
    },
    dointhatrag: {
        song_id: 1005416,
        song_length: 292727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    doll: {
        song_id: 1005335,
        song_length: 92272,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    dontchastop: {
        song_id: 1005117,
        song_length: 215000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1978,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'The Cars',
        album_track_number: 5,
        vocal_parts: 3,
    },
    donteasemein: {
        song_id: 1005415,
        song_length: 197727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    dontfearthereaper: {
        song_id: 11,
        preview: [29500, 59500],
        song_length: 265000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 1975,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Agents of Fortune',
        album_track_number: 3,
        encoding: 'latin1',
        vocal_parts: 3,
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    dontgoawaymad: {
        song_id: 1005258,
        song_length: 284090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        encoding: 'latin1',
        vocal_parts: 2,
    },
    dontlookbackinanger: {
        song_id: 1005044,
        song_length: 293181,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1995,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: "(What's the Story) Morning Glory?",
        album_track_number: 4,
        vocal_parts: 2,
    },
    dontmakemewait: {
        song_id: 1005199,
        song_length: 160454,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    dontspeak: {
        song_id: 1005365,
        song_length: 291818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1995,
        year_recorded: 2003,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        alternate_path: true,
        album_name: 'Tragic Kingdom',
        album_track_number: 10,
    },
    dontstop: {
        song_length: 195000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    dontstopbelieving: {
        song_id: 1005489,
        preview: [69400, 99400],
        song_length: 263181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    donttellme: {
        song_id: 1005423,
        song_length: 201363,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    donttellmeyouloveme: {
        song_length: 269545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        year_released: 1982,
        year_recorded: 2009,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    dontyouevah: {
        solo: ['vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    down: {
        song_length: 192727,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    downatthewhiskey: {
        song_id: 1005153,
        song_length: 237727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        encoding: 'latin1',
        vocal_parts: 3,
    },
    downonthecorner: {
        solo: ['vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    downwiththesickness: {
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 3,
        song_tonality: 1,
    },
    doyouwantto: {
        song_id: 1005546,
        song_length: 218636,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    dragthewaters: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    dragula: {
        song_length: 222727,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    draintheblood: {
        song_id: 1005541,
        song_length: 192272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    drainyou: {
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
        vocal_tonic_note: 6,
        song_tonality: 0,
    },
    dreamin: {
        song_id: 1005152,
        preview: [27000, 57000],
        song_length: 311363,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    dreamingoflove: {
        song_length: 228181,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    dreamingofyou: {
        song_length: 140909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 9,
        song_tonality: 1,
    },
    drfeelgood: {
        song_id: 1005266,
        song_length: 296363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        encoding: 'latin1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    duality: {
        song_length: 255000,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    dunebuggy: {
        song_id: 1005301,
        song_length: 168181,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    eastjesusnowhere: {
        vocal_parts: 3,
        song_length: 267272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['greenday', 'disc_update'],
        vocal_tonic_note: 5,
        song_tonality: 0,
    },
    eatmealivelive: {
        song_length: 245454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    electriccrown: {
        song_id: 1005180,
        song_length: 333636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    electricversion: {
        song_id: 12,
        song_length: 145454,
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 2003,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Electric Version',
        album_track_number: 1,
        vocal_parts: 3,
        genre: 'indierock',
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    elscorcho: {
        song_id: 1005059,
        vols: [-2, -3.5, -3.5, -3, -3, -1.5, -4.5, -4.5, -2, -2, -2],
        preview: [15750, 45750],
        song_length: 246818,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_2',
        rating: 2,
        year_released: 1996,
        alternate_path: true,
        album_art: true,
        album_name: 'Pinkerton',
        album_track_number: 7,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    embedded: {
        song_length: 223181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    emeniussleepus: {
        solo: ['drum'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    eminencefront: {
        song_id: 1005169,
        song_length: 343636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    empireofthegun: {
        song_length: 286363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    employeeofthemonth: {
        song_length: 216363,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    enditonthis: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    endtransmission: {
        song_length: 226818,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    enoughspace: {
        song_id: 1005327,
        song_length: 161363,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    entangled: {
        song_id: 1005400,
        song_length: 263181,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    entersandman: {
        song_id: 13,
        preview: [89250, 119250],
        song_length: 273636,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1991,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Metallica',
        album_track_number: 1,
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 1,
    },
    epic: {
        song_id: 14,
        preview: [168300, 198300],
        song_length: 245909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 1989,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'The Real Thing',
        album_track_number: 2,
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    epro: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    evenflow: {
        song_id: 1005485,
        vocal_parts: 2,
        preview: [60500, 90500],
        song_length: 300454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    eventhelosers: {
        song_length: 218181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    everfalleninlove: {
        song_id: 1005024,
        song_length: 163181,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1978,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_parts: 3,
    },
    everlong: {
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    everylittlething: {
        song_length: 270909,
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'rock',
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    excusememr: {
        song_id: 1005369,
        song_length: 188181,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1995,
        year_recorded: 2003,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        album_name: 'Tragic Kingdom',
        album_track_number: 2,
    },
    exgirlfriend: {
        song_id: 1005364,
        song_length: 215000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb3dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        alternate_path: true,
        year_released: 2000,
        album_name: 'Return of Saturn',
        album_track_number: 1,
    },
    extraordinarygirl: {
        solo: ['drum'],
        format: 10,
    },
    facedowninthedirt: {
        song_id: 1005186,
        song_length: 229090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        encoding: 'latin1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    fakefriends: {
        song_length: 197727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    fatbottomedgirls: {
        vols: [-1.5, -5, -5, -9.5, -5, -5, -1, -1, -4, -4],
        song_length: 201818,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    fearofthedarklive: {
        song_id: 1005580,
        preview: [197555, 227555],
        song_length: 450000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 2008,
        year_recorded: 2009,
        extra_authoring: ['disc_update'],
        album_track_number: 10,
    },
    featherpluckn: {
        song_id: 1005302,
        song_length: 182272,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    februarystars: {
        song_id: 1005326,
        song_length: 295909,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    feedthetree: {
        song_id: 1005411,
        song_length: 219090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    feelgooddrag: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    feelgoodinc: {
        song_length: 222727,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        genre: 'hiphoprap',
    },
    feelingthis: {
        song_length: 179545,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    feelslikethefirsttime: {
        song_length: 213636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    feelthepain: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    fever: {
        song_id: 1005090,
        preview: [99532, 129532],
        song_length: 331363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1982,
        alternate_path: true,
        album_art: true,
        album_name: 'Screaming for Vengeance',
        album_track_number: 9,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    fire: {
        song_length: 166363,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 2,
        song_tonality: 1,
    },
    fireitup: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    fireonthemountain: {
        song_id: 1005414,
        song_length: 228636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    fireyourguns_live: {
        song_id: 1005293,
        song_length: 179090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    firstdate: {
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    fivemagics: {
        song_id: 1005912,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    flathead: {
        song_id: 1005426,
        song_length: 203181,
        solo: ['drum', 'guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    flirtinwithdisaster: {
        song_id: 15,
        song_length: 248181,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1979,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: "Flirtin' With Disaster",
        album_track_number: 6,
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    floods: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    flowerpeople: {
        song_length: 204545,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    flyonthewall: {
        solo: ['vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'popdanceelectronic',
    },
    forceofnature: {
        song_length: 244545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['pearljam', 'disc_update'],
    },
    foreplaylongtime: {
        song_id: 16,
        preview: [167399, 197399],
        song_length: 500000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 1976,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Boston',
        album_track_number: 3,
        vocal_parts: 3,
        vocal_tonic_note: 1,
        song_tonality: 0,
    },
    forever: {
        song_id: 1005337,
        song_length: 265000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_metal',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    forthoseabouttorock_live: {
        song_id: 1005281,
        song_length: 401818,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    fortunateson: {
        song_id: 1005004,
        song_length: 145000,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1969,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
    },
    franklinstower: {
        song_id: 1005063,
        preview: [22900, 52900],
        song_length: 292727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1975,
        alternate_path: true,
        album_art: true,
        album_name: 'Blues for Allah',
        album_track_number: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    freeandeasy: {
        song_id: 1005381,
        preview: [27933, 57933],
        song_length: 212727,
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    freedomtrain: {
        song_id: 1005402,
        song_length: 176363,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    freefallin: {
        song_length: 265909,
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'rock',
        vocal_tonic_note: 5,
        song_tonality: 0,
    },
    funk49: {
        song_id: 1005391,
        song_length: 258636,
        solo: ['drum', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_classic_rock',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    funkymonks: {
        song_id: 1005244,
        song_length: 335454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    funkysexfarm: {
        song_length: 266363,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    futures: {
        song_id: 1005433,
        song_length: 249090,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    garden: {
        song_id: 1005479,
        vocal_parts: 2,
        song_length: 318181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    gasoline: {
        song_length: 280909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    gaybar: {
        song_length: 144545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    geraldine: {
        song_id: 1005491,
        song_length: 221363,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    getiton: {
        song_id: 1005313,
        song_length: 206818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 11,
        song_tonality: 1,
    },
    getready2rokk: {
        song_length: 173636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        genre: 'popdanceelectronic',
    },
    getup: {
        song_id: 1005469,
        song_length: 320454,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        genre: 'rbsoulfunk',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    getyourrockon: {
        song_id: 1005197,
        song_length: 157727,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    ghostbusters: {
        song_length: 251363,
        solo: ['drum'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'popdanceelectronic',
        album_art: true,
        vocal_tonic_note: 11,
        song_tonality: 1,
    },
    gimmeshelter: {
        song_id: 17,
        song_length: 275454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1969,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Let It Bleed',
        album_track_number: 1,
        vocal_parts: 3,
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    gimmesomemoney: {
        song_length: 155000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    gimmethreesteps: {
        song_id: 1005035,
        song_length: 285000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 1,
        year_released: 1973,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: "(pronounced 'leh-'nérd 'skin-'nérd)",
        album_track_number: 3,
        encoding: 'latin1',
        vocal_parts: 3,
    },
    girlfriendisbetter: {
        song_length: 355000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    girlsandboys: {
        song_length: 190000,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        genre: 'punk',
        vocal_tonic_note: 3,
        song_tonality: 0,
    },
    girlsonfilm: {
        song_id: 1005195,
        song_length: 218636,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    girlswhoplayguitars: {
        song_id: 1005131,
        song_length: 191818,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_2',
        rating: 2,
        year_released: 2007,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Our Earthly Pleasures',
        album_track_number: 1,
        encoding: 'latin1',
        vocal_parts: 3,
    },
    girluwant: {
        song_id: 1005194,
        preview: [28500, 58500],
        song_length: 179090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_vol_2',
        rating: 1,
        year_released: 1980,
        year_recorded: 2008,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    girlyouhavenofaith: {
        song_length: 205909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        alternate_path: true,
        extra_authoring: ['disc_update'],
    },
    giveitall: {
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
        vocal_tonic_note: 6,
        song_tonality: 0,
    },
    giveittome: {
        song_id: 1005321,
        song_length: 192272,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    godzilla: {
        solo: ['drum', 'guitar', 'vocal_percussion'],
        format: 10,
        encoding: 'latin1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    goingmobile: {
        song_id: 1005168,
        song_length: 225454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    goingunderground: {
        song_length: 189545,
        format: 10,
        game_origin: 'rb1_dlc',
        year_released: 1980,
        year_recorded: 2002,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    gone: {
        song_id: 1005336,
        song_length: 277727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    goneaway: {
        song_id: 1005256,
        song_length: 268181,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    gone_mg: {
        song_id: 1005464,
        song_length: 270909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    gonnaseemyfriend: {
        vocal_parts: 2,
        song_length: 172272,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    goodmorningblackfriday: {
        song_id: 1005215,
        song_length: 405909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    goodtime: {
        song_id: 1005465,
        song_length: 306363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    goodtimesroll: {
        song_id: 1005121,
        preview: [40200, 70200],
        song_length: 230454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1978,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'The Cars',
        album_track_number: 1,
        vocal_parts: 3,
    },
    gotnuffin: {
        solo: ['vocal_percussion'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    gotsome: {
        vocal_parts: 3,
        song_length: 185000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    gougeaway: {
        song_id: 1005136,
        song_length: 168636,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    gowiththeflow: {
        song_id: 18,
        preview: [5900, 35900],
        song_length: 155000,
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 2002,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Songs for the Deaf',
        album_track_number: 8,
        vocal_parts: 3,
        genre: 'alternative',
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    goyourownway: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    grace: {
        song_length: 154545,
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    greengrass: {
        song_id: 19,
        preview: [95450, 125450],
        song_length: 596363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 1975,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    greenriver: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
    },
    grind: {
        solo: ['guitar'],
        format: 10,
        vocal_tonic_note: 4,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        song_tonality: 0,
    },
    grinderlive: {
        solo: ['drum', 'guitar'],
        format: 10,
        year_released: 1980,
        year_recorded: 2010,
        extra_authoring: ['disc_update'],
    },
    guerrillaradio: {
        song_length: 210454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    gunpowderandlead: {
        song_id: 1005380,
        song_length: 190454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    gunsofsummer: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    hadadad: {
        song_id: 1005535,
        song_length: 231818,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        alternate_path: true,
    },
    hairofthedog: {
        song_id: 1005723,
        song_length: 277272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_metal',
        rating: 2,
        year_released: 1975,
        year_recorded: 2008,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    hallowedbethyname: {
        song_id: 1005579,
        song_length: 472727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2008,
        year_recorded: 2009,
        album_track_number: 11,
    },
    hammerhead: {
        song_id: 1005135,
        song_length: 282272,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        version: 1,
        year_released: 2008,
        album_art: true,
        album_name: 'Rise and Fall, Rage and Grace',
        album_track_number: 4,
    },
    hammersmashedface: {
        song_length: 246363,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    handlebars: {
        song_length: 213181,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'hiphoprap',
    },
    handmedownworld: {
        song_id: 1005636,
        song_length: 214090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    handsdown: {
        song_id: 1005211,
        song_length: 192272,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    hangar18: {
        song_id: 1005865,
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    hangingonthetelephone: {
        song_id: 1005103,
        song_length: 145909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1978,
        alternate_path: true,
        album_art: true,
        album_name: 'Parallel Lines',
        album_track_number: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    hangyoufromtheheavens: {
        song_length: 218181,
        solo: ['drum'],
        format: 10,
        game_origin: 'rb1_dlc',
    },
    hanukkahblessings: {
        song_id: 1005382,
        song_length: 207727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    happynow: {
        solo: ['vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    hardtohandle: {
        song_id: 1005034,
        preview: [38823, 68823],
        song_length: 199545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1990,
        alternate_path: true,
        album_art: false,
        extra_authoring: ['disc_update'],
    },
    haypocorockandroll: {
        song_id: 1005359,
        song_length: 337727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        encoding: 'latin1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    headknocker: {
        song_length: 206818,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    headoverfeet: {
        song_length: 325000,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    headphoneson: {
        song_id: 1005360,
        song_length: 182272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    heartbreaker: {
        song_id: 1005490,
        song_length: 214090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    heartkiller: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    heatseeker_live: {
        song_id: 1005294,
        song_length: 214090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    heavenbesideyou: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 3,
        vocal_parts: 3,
        song_tonality: 0,
    },
    heavyduty: {
        song_length: 299545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    hellagood: {
        song_id: 1005371,
        song_length: 245909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        alternate_path: true,
        year_released: 2001,
        album_name: 'Rock Steady',
        album_track_number: 1,
    },
    hellaintabadplace_live: {
        song_id: 1005295,
        song_length: 268181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 2,
    },
    hellhole: {
        song_length: 212272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    hellinabucket: {
        song_id: 1005413,
        song_length: 338636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        album_name: 'In the Dark',
    },
    hellionelectriceye: {
        song_id: 1005097,
        song_length: 268181,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1982,
        alternate_path: true,
        album_art: true,
        album_name: 'Screaming for Vengeance',
        album_track_number: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    hellsbells_live: {
        song_id: 1005288,
        song_length: 353181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    henrietta: {
        song_id: 1005425,
        song_length: 214090,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    herecomesmygirl: {
        song_length: 288636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    herecomesyourman: {
        song_id: 1005146,
        preview: [33000, 63000],
        song_length: 210454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    hereitgoesagain: {
        song_id: 20,
        song_length: 151818,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 2003,
        alternate_path: true,
        album_art: true,
        album_name: 'Oh No',
        album_track_number: 3,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    heroes: {
        song_id: 1005018,
        song_length: 380454,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1977,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_parts: 3,
    },
    hey: {
        song_id: 1005138,
        song_length: 215454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    heybaby: {
        song_id: 1005374,
        preview: [84500, 114500],
        song_length: 209090,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        alternate_path: true,
        year_released: 2001,
        album_name: 'Rock Steady',
        album_track_number: 2,
    },
    heydude: {
        song_length: 250000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    heyjohnnypark: {
        song_id: 1005333,
        song_length: 254545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    heyjohnwhatsyournameagain: {
        song_length: 233181,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    hierkommtalex: {
        song_id: 1005106,
        song_length: 240000,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1988,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Ein kleines bisschen Horrorschau',
        album_track_number: 1,
    },
    highvoltage_live: {
        song_id: 1005287,
        song_length: 559545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    highwaystar: {
        song_id: 21,
        preview: [36850, 66850],
        song_length: 304090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1972,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Machine Head',
        album_track_number: 1,
        vocal_parts: 2,
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    highwaytohell_live: {
        song_id: 1005282,
        song_length: 267727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    hillbillydeluxe: {
        song_id: 1005379,
        song_length: 270000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    hitcharide: {
        song_id: 1005073,
        song_length: 257727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1976,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Boston',
        album_track_number: 6,
        vocal_parts: 3,
    },
    hitchinaride: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    hitmewithyourbestshot: {
        song_id: 1005419,
        song_length: 176363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_classic_rock',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    hockeytheme: {
        solo: ['drum'],
        format: 10,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        album_art: true,
    },
    holiday: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    holidayincambodia: {
        song_id: 1005341,
        song_length: 231363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_classic_rock',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    holywars: {
        song_id: 1005907,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    homecoming: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    hongkonggarden: {
        song_id: 1005280,
        song_length: 173636,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
    },
    howdoyoulikemenow: {
        song_id: 1005503,
        song_length: 221818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    hungrylikethewolf: {
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
        genre: 'new_wave',
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    hymn43: {
        song_id: 1005390,
        song_length: 200909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_classic_rock',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    hysteria: {
        song_id: 1005111,
        song_length: 230000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 2003,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Absolution',
        album_track_number: 8,
        vocal_parts: 3,
    },
    iaintsuperstitious: {
        song_id: 1005213,
        song_length: 166818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    iamarock: {
        song_length: 174090,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    ibleed: {
        song_id: 1005147,
        preview: [34500, 64500],
        song_length: 160909,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    icanttakemyeyes: {
        song_id: 1005494,
        song_length: 142727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    icarus: {
        song_length: 347272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    ickythump: {
        song_length: 247727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    icouldhavelied: {
        song_id: 1005242,
        song_length: 256818,
        solo: ['guitar'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    idealistictypes: {
        song_id: 1005539,
        song_length: 222727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    ididntsayiwas: {
        song_id: 1005607,
        song_length: 257727,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    idiotsrule: {
        song_id: 1005531,
        song_length: 180454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
        alternate_path: true,
    },
    idontcare: {
        song_id: 1005303,
        song_length: 220909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        encoding: 'latin1',
        vocal_parts: 3,
    },
    idontlikeyou: {
        song_length: 176363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    idontwannastop: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    idontwanttogotoschool: {
        song_id: 1005361,
        song_length: 178636,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    if6was9: {
        solo: ['drum', 'guitar'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    ifiaintgotyou: {
        song_id: 1005312,
        song_length: 146363,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 1,
    },
    ifoughtthelaw: {
        song_id: 1005023,
        song_length: 162272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1977,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'The Clash',
        album_track_number: 8,
        vocal_parts: 3,
    },
    iftheworld: {
        song_id: 1005514,
        song_length: 302272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    ifyouhavetoask: {
        song_id: 1005246,
        song_length: 226363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    igetby: {
        song_id: 51,
        preview: [49750, 79750],
        song_length: 211818,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 2007,
        alternate_path: true,
        album_art: true,
        album_name: 'Second & Eighteen',
        album_track_number: 16,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'indierock',
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    ihearditthrough: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    iknowwhereyou: {
        song_id: 1005519,
        song_length: 195909,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    illstickaround: {
        song_length: 250454,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    ilovethisbar: {
        song_id: 1005502,
        song_length: 356363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    imageoftheinvisible: {
        song_length: 245909,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    imcryin: {
        song_id: 1005441,
        song_length: 225454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    imeighteenlive: {
        song_id: 1005564,
        song_length: 279545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    imgoneimgoing: {
        song_id: 1005322,
        song_length: 209090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    imissyou: {
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    imshippingup: {
        song_length: 156363,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    imsosick: {
        song_id: 52,
        preview: [135750, 165750],
        song_length: 184545,
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 2005,
        alternate_path: true,
        album_art: true,
        album_name: 'Flyleaf',
        album_track_number: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        genre: 'numetal',
        vocal_tonic_note: 2,
        song_tonality: 1,
    },
    inbloom: {
        song_id: 22,
        preview: [30675, 60675],
        song_length: 213636,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        genre: 'grunge',
        year_released: 1991,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Nevermind',
        album_track_number: 2,
        vocal_parts: 2,
        vocal_tonic_note: 8,
        song_tonality: 0,
    },
    indestructible: {
        song_id: 1005127,
        preview: [126800, 156800],
        song_length: 277727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_2',
        rating: 2,
        year_released: 2008,
        alternate_path: true,
        album_art: true,
        album_name: 'Indestructible',
        album_track_number: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    indreams: {
        song_id: 1005392,
        song_length: 176818,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    ineedamiracle: {
        song_id: 1005062,
        song_length: 255454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1978,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Shakedown Street',
        album_track_number: 6,
        vocal_parts: 3,
    },
    insideout: {
        song_length: 219090,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    insidethefire: {
        song_id: 1005126,
        preview: [35200, 65200],
        song_length: 230000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2008,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Indestructible',
        album_track_number: 2,
        vocal_parts: 2,
    },
    interstatelovesong: {
        song_id: 1005037,
        song_length: 197272,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 1,
        year_released: 1994,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Purple',
        album_track_number: 4,
        vocal_parts: 3,
    },
    intoodeep: {
        song_length: 211818,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    intouch: {
        song_id: 1005118,
        song_length: 214090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1978,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'The Cars',
        album_track_number: 4,
        vocal_parts: 2,
    },
    ipredictariot: {
        song_length: 238181,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    ironic: {
        song_length: 236363,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    ironmaidenlive: {
        song_id: 1005578,
        song_length: 323636,
        solo: ['drum'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2008,
        year_recorded: 2009,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    irs: {
        song_id: 1005508,
        song_length: 272272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    istandalone: {
        song_id: 1005406,
        song_length: 251818,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_metal',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    ithinkimparanoid: {
        song_id: 23,
        preview: [28250, 58250],
        song_length: 226818,
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1998,
        alternate_path: true,
        album_art: true,
        album_name: 'Version 2.0',
        album_track_number: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        genre: 'alternative',
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    ithurts: {
        song_id: 1005099,
        song_length: 259090,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_2',
        rating: 2,
        year_released: 2006,
        alternate_path: true,
        album_art: true,
        album_name: "We Don't Need to Whisper",
        album_track_number: 8,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    itoldyouso: {
        song_id: 1005459,
        song_length: 282727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    itsmylife: {
        song_id: 1005375,
        song_length: 227272,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    itsnotmytime: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    iv: {
        song_id: 1005308,
        song_length: 300000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 1,
    },
    ivegotdreams: {
        format: 10,
        year_released: 1968,
        year_recorded: 1992,
        genre: 'rbsoulfunk',
    },
    iwannabeyourman: {
        song_id: 1005320,
        song_length: 191363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    iwantitall: {
        song_length: 244090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
    },
    iwanttobreakfree: {
        song_length: 247727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    iwantyouback: {
        song_length: 205454,
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 8,
        song_tonality: 0,
    },
    iwillnotbow: {
        song_length: 220454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    iwontbackdown: {
        song_length: 178636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    jailbreak_live: {
        song_id: 1005292,
        song_length: 704090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    jailbreak_lizzy: {
        song_id: 1005420,
        song_length: 280000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_recorded: 2009,
        extra_authoring: ['disc_update'],
        year_released: 1977,
    },
    jamminme: {
        solo: ['guitar'],
        format: 10,
        vocal_tonic_note: 4,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        song_tonality: 0,
    },
    janesays: {
        song_id: 1005530,
        song_length: 300909,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
    },
    jeremy: {
        song_id: 1005482,
        vocal_parts: 2,
        song_length: 322272,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    jesuschristpose: {
        song_id: 1005347,
        song_length: 354545,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    jesusofsuburbia: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    johnnyguitar: {
        vocal_parts: 3,
        song_length: 178636,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    jokerandthe: {
        song_id: 1005003,
        song_length: 285454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 1,
        year_released: 2005,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Wolfmother',
        album_track_number: 6,
        vocal_parts: 3,
    },
    jukeboxhero: {
        song_id: 1005002,
        preview: [68800, 98800],
        song_length: 268636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1981,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_parts: 3,
    },
    junkiesforfame: {
        song_id: 1005173,
        song_length: 210000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    justagirl: {
        song_id: 1005376,
        song_length: 202727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1995,
        year_recorded: 2003,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        album_name: 'Tragic Kingdom',
        album_track_number: 3,
    },
    justbreathe: {
        vocal_parts: 2,
        song_length: 217727,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['pearljam', 'disc_update'],
    },
    justfortonight: {
        solo: ['drum'],
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    justwhatineeded: {
        song_id: 1005119,
        preview: [79600, 109600],
        song_length: 227272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_2',
        rating: 1,
        year_released: 1978,
        alternate_path: true,
        album_art: true,
        album_name: 'The Cars',
        album_track_number: 3,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    kickstartmyheart: {
        song_id: 1005263,
        song_length: 286818,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        encoding: 'latin1',
        vocal_parts: 3,
    },
    kidsdontfollow: {
        song_id: 1005551,
        song_length: 154545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    killedbydeath: {
        song_id: 1005681,
        song_length: 278636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_metal',
        rating: 2,
        year_released: 1984,
        year_recorded: 2008,
        encoding: 'latin1',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    killerqueen: {
        song_length: 182727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
    },
    killingjar: {
        song_id: 1005279,
        song_length: 250909,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    kingsandqueens: {
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    kissthemforme: {
        song_id: 1005278,
        song_length: 307727,
        format: 10,
        game_origin: 'rbtp_classic_rock',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    knightonthetown: {
        song_length: 209545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    knowyourenemy: {
        vocal_parts: 3,
        song_length: 197272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['greenday', 'disc_update'],
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    koolthing: {
        song_id: 1005102,
        song_length: 249090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1990,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Goo',
        album_track_number: 8,
        vocal_parts: 3,
    },
    kryptonite: {
        song_length: 242727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    kungfufighting: {
        song_length: 201363,
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'rbsoulfunk',
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    ladybug: {
        song_id: 1005300,
        song_length: 159090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    laidtorest: {
        song_id: 1005348,
        song_length: 230909,
        format: 10,
        game_origin: 'rbtp_metal',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    lalaloveyou: {
        song_id: 1005141,
        song_length: 168181,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    last: {
        song_id: 1005175,
        song_length: 291818,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    lastofmykind: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    lastoftheamerican: {
        format: 10,
        extra_authoring: ['greenday', 'disc_update'],
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    lastonetodie: {
        song_length: 145909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    lastresort: {
        song_id: 1005471,
        song_length: 206363,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    lasttraintoclarksville: {
        song_id: 1005039,
        song_length: 185909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1966,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_parts: 3,
    },
    learntofly: {
        song_id: 24,
        preview: [45550, 75550],
        song_length: 195454,
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1999,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'There is Nothing Left to Lose',
        album_track_number: 3,
        genre: 'alternative',
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    leavinghere: {
        song_id: 1005167,
        song_length: 176818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    lenny: {
        song_id: 1005440,
        song_length: 307272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    lesstalkmorerokk: {
        song_length: 304090,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
        genre: 'popdanceelectronic',
    },
    letitallhangout: {
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    letloverule: {
        song_id: 1005401,
        song_length: 349545,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_classic_rock',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    letmehearyouscream: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    letsdance: {
        song_length: 295000,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 10,
        song_tonality: 1,
    },
    letthereberock_live: {
        song_id: 1005283,
        song_length: 577727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    levitate: {
        song_id: 1005724,
        song_length: 285454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_metal',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    liar: {
        song_id: 1005558,
        song_length: 195454,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    lieslieslies: {
        song_id: 1005570,
        song_length: 318181,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    lifeisahighway: {
        song_length: 254545,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 5,
        song_tonality: 0,
    },
    lifeisbeautiful: {
        song_id: 1005185,
        song_length: 220000,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    lifeline: {
        song_id: 1005472,
        song_length: 236818,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    likeafool: {
        song_id: 1005311,
        song_length: 213636,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        album_track_number: 8,
        vocal_parts: 3,
        vocal_tonic_note: 8,
        song_tonality: 1,
    },
    limelight: {
        song_id: 1005033,
        preview: [11517, 41517],
        song_length: 266818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1981,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
    },
    limelight2: {
        song_id: 1005228,
        song_length: 264545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    linger: {
        song_id: 1005571,
        song_length: 276818,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    lisztomania: {
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    lithiumlive: {
        song_length: 271363,
        format: 10,
        game_origin: 'rb1_dlc',
        year_released: 1991,
        year_recorded: 2009,
        extra_authoring: ['disc_update'],
    },
    littlegirl: {
        name: '¿Viva la Gloria? (Little Girl)',
        format: 10,
        encoding: 'latin1',
    },
    littlemisslover: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    littleofyourtime: {
        song_id: 1005601,
        song_length: 144090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    littlesister: {
        song_id: 1005008,
        song_length: 178181,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 2,
        year_released: 2005,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Lullabies to Paralyze',
        album_track_number: 7,
        vocal_parts: 2,
    },
    littlewing: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    liveforever: {
        song_id: 1005043,
        song_length: 283636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 1,
        year_released: 1994,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Definitely Maybe',
        album_track_number: 3,
    },
    livinatthecorner: {
        song_id: 1005203,
        song_length: 226818,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'hiphoprap',
    },
    livingaftermidnightlive: {
        solo: ['guitar'],
        format: 10,
        year_released: 1980,
        year_recorded: 2010,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    livinonaprayer: {
        extra_authoring: ['disc_update'],
    },
    lonelyasyou: {
        song_length: 282272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    longview: {
        song_id: 3031,
        format: 10,
        extra_authoring: ['disc_update'],
    },
    lookingoutmybackdoor: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    losingmyreligion: {
        song_id: 1005451,
        song_length: 273181,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    loungeact: {
        song_id: 1005270,
        song_length: 159545,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        alternate_path: true,
        extra_authoring: ['disc_update'],
    },
    lovelikewinter: {
        song_length: 164545,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    lovemyway: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    lovespreads: {
        song_id: 1005223,
        song_length: 350454,
        format: 10,
        version: 2,
        game_origin: 'rbtp_classic_rock',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    lovestruckbaby: {
        song_id: 1005449,
        song_length: 145000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    luciddreams: {
        song_id: 1005547,
        song_length: 213181,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    luckydenvermint: {
        song_id: 1005434,
        song_length: 235909,
        solo: ['drum', 'guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    lucretia: {
        song_id: 1005839,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    lump: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        genre: 'grunge',
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    madagascar: {
        song_id: 1005507,
        song_length: 340909,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    magicbuslive: {
        song_length: 450909,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    magneticbaby: {
        song_id: 1005310,
        song_length: 172272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    mainoffender: {
        song_id: 25,
        preview: [26600, 56600],
        song_length: 129090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 2000,
        alternate_path: true,
        album_art: true,
        album_name: 'Veni Vidi Vicious',
        album_track_number: 4,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'punk',
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    makedamnsure: {
        song_id: 1005557,
        song_length: 210454,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    makemesmile: {
        song_length: 249090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    makesmewonder: {
        song_id: 1005600,
        song_length: 221363,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    manuchao: {
        song_id: 1005108,
        song_length: 172727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2003,
        alternate_path: true,
        album_art: true,
        album_name:
            'Never trust a guy who after having been a punk, is now playing electro',
        album_track_number: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    manyshadesofblack: {
        song_length: 269090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    maps: {
        song_id: 26,
        preview: [39625, 69625],
        song_length: 210000,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 2003,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Fever to Tell',
        album_track_number: 9,
        genre: 'indierock',
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    marchofthepigs: {
        name: 'March of the Pigs',
        song_id: 1005055,
        song_length: 181818,
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 2,
        year_released: 1994,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'The Downward Spiral',
        album_track_number: 4,
        vocal_parts: 2,
    },
    margaritaville: {
        song_id: 1005123,
        preview: [47200, 77200],
        song_length: 260000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1977,
        year_recorded: 2008,
        alternate_path: true,
        album_art: true,
        album_name: 'Exclusive 2008 Rock Band Re-Recording',
        album_track_number: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    maryhadalittlelamb: {
        song_id: 1005443,
        preview: [44500, 74500],
        song_length: 169090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    maryjane: {
        song_length: 348636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    masterslave: {
        song_id: 1005476,
        song_length: 247727,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['pearljam', 'disc_update'],
    },
    mastersoftheuniverse: {
        song_id: 1005680,
        song_length: 385000,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_metal',
        rating: 2,
    },
    meandmygang: {
        song_id: 1005457,
        song_length: 239090,
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    meanwomanblues: {
        song_id: 1005395,
        song_length: 150909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    medicate: {
        song_id: 1005855,
        song_length: 260454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    megasus: {
        song_id: 1005399,
        song_length: 226363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    melatonin: {
        song_id: 1005274,
        song_length: 252727,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    mellowshipslinkyinbmajor: {
        song_id: 1005241,
        song_length: 244090,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    messageinabottle: {
        name: 'Message in a Bottle',
        song_id: 1005084,
        song_length: 289545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_2',
        rating: 1,
        year_released: 1979,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Reggatta de Blanc',
        album_track_number: 1,
        vocal_parts: 3,
    },
    metalgodslive: {
        solo: ['guitar'],
        format: 10,
        year_released: 1980,
        year_recorded: 2010,
        extra_authoring: ['disc_update'],
    },
    metalonmetal: {
        song_id: 1005664,
        song_length: 246818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        year_released: 1982,
        year_recorded: 2009,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    mica: {
        song_id: 1005344,
        song_length: 223636,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    midnightrider: {
        song_id: 1005538,
        song_length: 185909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    minority: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    missindependent: {
        song_length: 219090,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        genre: 'popdanceelectronic',
    },
    missmurder: {
        song_length: 214545,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    missqueen: {
        song_id: 27,
        song_length: 133636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1971,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    mollychambers: {
        song_length: 138181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    moneytalks_live: {
        song_id: 1005289,
        song_length: 233181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    monkeygonetoheaven: {
        song_id: 1005144,
        song_length: 182727,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_vol_2',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    monkeywrench: {
        song_id: 1005334,
        song_length: 237272,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    monsoon: {
        song_id: 1005110,
        song_length: 243636,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 2007,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Scream',
        album_track_number: 3,
        vocal_parts: 3,
    },
    monster: {
        song_length: 228181,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 4,
        song_tonality: 1,
    },
    monstergaga: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    monymony: {
        song_length: 294090,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    moonagedaydream: {
        song_id: 1005017,
        song_length: 285454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 2,
        year_released: 1972,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name:
            'The Rise and Fall of Ziggy Stardust and the Spiders from Mars',
        album_track_number: 3,
        vocal_parts: 3,
    },
    morehumanthanhuman: {
        song_id: 1005429,
        song_length: 259545,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    morethanafeeling: {
        name: 'More Than a Feeling',
        song_id: 1005077,
        song_length: 313636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 1,
        year_released: 1976,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Boston',
        album_track_number: 1,
        vocal_parts: 3,
    },
    morethanmeetstheeye: {
        song_length: 274090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        encoding: 'latin1',
        vocal_parts: 3,
    },
    mountainsong: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        alternate_path: true,
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    movealong: {
        song_id: 1005030,
        song_length: 227727,
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 1,
        year_released: 2005,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Move Along',
        album_track_number: 3,
        vocal_parts: 3,
    },
    movinginstereo: {
        song_id: 1005114,
        song_length: 313636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1978,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'The Cars',
        album_track_number: 8,
    },
    movingtoseattle: {
        song_id: 1005130,
        song_length: 204545,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 2007,
        alternate_path: true,
        album_art: true,
        album_name: 'Tomorrow',
        album_track_number: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    mrbrightside: {
        song_id: 1005351,
        song_length: 225454,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    mrcabdriver: {
        song_id: 1005398,
        song_length: 235909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    mrgrieves: {
        song_id: 1005143,
        song_length: 133636,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    mudonthetires: {
        song_id: 1005378,
        song_length: 220454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    murdercity: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    mybestfriendsgirl: {
        song_id: 1005120,
        song_length: 234090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1978,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'The Cars',
        album_track_number: 2,
        vocal_parts: 3,
    },
    mycurse: {
        song_id: 1005189,
        preview: [65800, 95800],
        song_length: 252727,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    mygeneration: {
        song_id: 1005166,
        song_length: 250454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    myhero: {
        song_id: 1005329,
        preview: [65000, 95000],
        song_length: 255000,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    myironlung: {
        song_id: 1005025,
        song_length: 281818,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1994,
        alternate_path: true,
        album_art: true,
        album_name: 'The Bends',
        album_track_number: 8,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    mylastwords: {
        song_id: 1005212,
        song_length: 290909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    mylovelyman: {
        song_id: 1005234,
        preview: [33000, 63000],
        song_length: 283636,
        solo: ['guitar'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    mynameisjonas: {
        song_length: 206818,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    myoldschool: {
        song_id: 1005548,
        preview: [40400, 70400],
        song_length: 347727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    myownworstenemy: {
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
        genre: 'alternative',
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    mypoorbrain: {
        song_id: 1005332,
        song_length: 217727,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
    },
    mysharona: {
        song_id: 1005001,
        song_length: 300909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1979,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_parts: 2,
    },
    naive: {
        song_length: 207727,
        format: 10,
        encoding: 'latin1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    nakedeye: {
        song_id: 1005543,
        song_length: 275000,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    nakedintherain: {
        song_id: 1005237,
        song_length: 271363,
        solo: ['guitar'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    naturaldisaster: {
        song_id: 1005210,
        song_length: 221818,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    nearlylostyou: {
        song_id: 1005250,
        preview: [31000, 61000],
        song_length: 250909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    new: {
        song_id: 1005439,
        preview: [79500, 109500],
        song_length: 270000,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 2000,
        year_recorded: 2003,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
        alternate_path: true,
        album_name: 'Return of Saturn',
        album_track_number: 8,
    },
    newfang: {
        song_length: 232727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    newkidinschool: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 7,
        song_tonality: 1,
    },
    newmoonrising: {
        song_length: 229090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    newslang: {
        song_id: 1005498,
        song_length: 235909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    newwave: {
        song_id: 1005107,
        song_length: 224545,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2002,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Episode 2: Medicine Cake',
        album_track_number: 3,
        vocal_parts: 3,
    },
    newwayhome: {
        song_id: 1005324,
        song_length: 316818,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    nexttoyou: {
        song_id: 28,
        song_length: 131363,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1978,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: "Outlandos d'Amour",
        album_track_number: 1,
        vocal_parts: 3,
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    nib: {
        song_id: 1005021,
        song_length: 325909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1970,
        alternate_path: true,
        album_art: false,
        extra_authoring: ['disc_update'],
    },
    nightlies: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 3,
        song_tonality: 1,
    },
    nightmare: {
        song_id: 53,
        song_length: 273636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 2008,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Adrenaline',
        album_track_number: 9,
        vocal_parts: 3,
        genre: 'rock',
        vocal_tonic_note: 4,
        song_tonality: 1,
    },
    nightwatchmanlive: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    no13baby: {
        song_id: 1005140,
        song_length: 238636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    noexcuses: {
        song_length: 259090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    nohasslenight: {
        song_length: 172272,
        format: 10,
        game_origin: 'rb1_dlc',
    },
    nomoretears: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    norain: {
        song_length: 221363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    noregrets: {
        song_id: 1005319,
        song_length: 147272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 11,
        song_tonality: 1,
    },
    notime: {
        song_id: 1005639,
        song_length: 234545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    novacaineshesarebel: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    numberofthebeast: {
        song_id: 1005036,
        preview: [67740, 97740],
        song_length: 270909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1982,
        alternate_path: true,
        album_art: false,
        extra_authoring: ['disc_update'],
    },
    numberofthebeast2: {
        song_id: 1005585,
        song_length: 290454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    oceanavenue: {
        song_length: 201363,
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    oceans: {
        song_id: 1005481,
        vocal_parts: 2,
        song_length: 167727,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 6,
        song_tonality: 0,
    },
    oceansize: {
        song_id: 1005536,
        preview: [33500, 63500],
        song_length: 263636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
        alternate_path: true,
    },
    odetosolitude: {
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    ohprettywoman: {
        song_id: 1005396,
        song_length: 184545,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    onaplain: {
        song_id: 1005268,
        song_length: 188181,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    once: {
        song_id: 1005486,
        song_length: 209090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['pearljam', 'disc_update'],
    },
    onceinalifetime: {
        song_length: 272727,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    oneofthosenights: {
        song_id: 1005209,
        song_length: 211363,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    onerainywish: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    onestepcloser: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 1,
        song_tonality: 0,
    },
    onevision: {
        song_length: 243636,
        solo: ['drum', 'guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
    },
    onewayoranother: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        genre: 'new_wave',
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    onlyamemory: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    ontheroadagain: {
        song_id: 1005458,
        song_length: 164545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    oobydooby: {
        song_id: 1005394,
        song_length: 144090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    openingband: {
        song_length: 193181,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    orangecrush: {
        song_id: 29,
        preview: [21250, 51250],
        song_length: 193636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1988,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Green',
        album_track_number: 7,
        vocal_parts: 3,
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    originofthespecies: {
        song_length: 245000,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    ourlipsaresealed: {
        song_length: 164545,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    ourtruth: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    outerspaceaf: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    outhereallnight: {
        song_length: 204545,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    outside: {
        song_id: 54,
        preview: [146500, 176500],
        song_length: 302727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 1989,
        alternate_path: true,
        album_art: true,
        album_name: 'Here at Home',
        album_track_number: 6,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    painandpleasure: {
        song_id: 1005093,
        song_length: 260000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1982,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Screaming for Vengeance',
        album_track_number: 6,
        vocal_parts: 3,
    },
    painkiller: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    panicattack: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    panicswitch: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    paranoid: {
        song_id: 30,
        song_length: 179545,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 1970,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_tonic_note: 4,
        song_tonality: 1,
    },
    parasitelive: {
        song_length: 211363,
        solo: ['drum', 'guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    peacemaker: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    peaceofmind: {
        song_id: 1005076,
        song_length: 335909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_classic_rock',
        rating: 1,
        year_released: 1976,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Boston',
        album_track_number: 2,
        vocal_parts: 3,
    },
    peacesells: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    peoplegotalotofnerve: {
        song_id: 1005435,
        song_length: 156363,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    perfectdrug: {
        song_id: 1005054,
        song_length: 320454,
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_2',
        rating: 2,
        year_released: 1997,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Lost Highway (Soundtrack)',
        album_track_number: 3,
        vocal_parts: 3,
    },
    perfectinsanity: {
        song_id: 1005125,
        preview: [52600, 82600],
        song_length: 235909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2008,
        alternate_path: true,
        album_art: true,
        album_name: 'Indestructible',
        album_track_number: 5,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    perfektewelle: {
        song_id: 1005104,
        song_length: 196818,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2004,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Es ist Juli',
        album_track_number: 6,
        vocal_parts: 3,
    },
    pickmeup: {
        song_id: 1005647,
        song_length: 397727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    pickupthepieces: {
        song_id: 1005467,
        song_length: 247727,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        genre: 'rbsoulfunk',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    pieceofmyheart: {
        song_length: 270454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        year_released: 1968,
        year_recorded: 1973,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    pigsinzen: {
        song_id: 1005528,
        song_length: 274090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        alternate_path: true,
    },
    pilgrim: {
        song_length: 291363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    pinballwizard: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    pleasure: {
        song_id: 55,
        preview: [36000, 66000],
        song_length: 221818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 2007,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Bang Camaro',
        album_track_number: 3,
        vocal_parts: 3,
        vocal_tonic_note: 8,
        song_tonality: 1,
    },
    pointofknowreturn: {
        song_length: 187727,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    poison: {
        song_id: 1005560,
        song_length: 285909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    poisonwasthecure: {
        song_id: 1005910,
        solo: ['guitar'],
        format: 10,
    },
    policetruck: {
        song_id: 1005340,
        song_length: 150000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    polly: {
        song_id: 1005272,
        song_length: 180454,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        alternate_path: true,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    porch: {
        song_id: 1005480,
        song_length: 224545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['pearljam'],
    },
    porkandbeans: {
        song_length: 193181,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    powerslave: {
        song_id: 1005581,
        song_length: 410909,
        solo: ['drum', 'guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    prayeroftherefugee: {
        song_length: 205454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    precious: {
        song_id: 1005418,
        song_length: 219090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    prequeltothesequel: {
        song_id: 1005323,
        song_length: 329545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    prettyflyforawhiteguy: {
        song_id: 1005255,
        song_length: 192272,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    prettyinpink: {
        song_id: 1005276,
        song_length: 244090,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    prettynoose: {
        song_id: 1005346,
        song_length: 258181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    prideandjoy: {
        song_id: 1005448,
        song_length: 225454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    promisedland: {
        song_id: 1005156,
        song_length: 221818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        album_name: 'The Rocker (Soundtrack)',
        album_track_number: 10,
        vocal_parts: 3,
    },
    prophecylive: {
        preview: [109000, 139000],
        song_length: 358636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    prostitute: {
        song_id: 1005505,
        song_length: 376363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    psychosocial: {
        song_length: 280909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    pullingteeth: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    pumpitup: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    pushit: {
        song_id: 1005249,
        song_length: 159090,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    queenbitch: {
        song_id: 1005016,
        preview: [84200, 114200],
        song_length: 193636,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1971,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_parts: 2,
    },
    radioradio: {
        song_id: 1005553,
        preview: [41500, 71500],
        song_length: 187727,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    rapidfirelive: {
        solo: ['guitar'],
        format: 10,
        year_released: 1980,
        year_recorded: 2010,
        extra_authoring: ['disc_update'],
    },
    rattlesnakeshake: {
        song_id: 1005264,
        preview: [54100, 84100],
        song_length: 223636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        encoding: 'latin1',
        vocal_parts: 3,
    },
    readysetgo: {
        song_id: 1005357,
        song_length: 217727,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    realgoodlooking: {
        song_id: 1005165,
        song_length: 348636,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    realwildchild: {
        song_length: 199090,
        solo: ['drum'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 5,
        song_tonality: 0,
    },
    realworld: {
        song_id: 1005356,
        song_length: 236818,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    rebelyell: {
        song_length: 295454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    redbarchetta: {
        song_id: 1005230,
        song_length: 397272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rbtp_classic_rock',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    reddevil: {
        song_id: 1005354,
        song_length: 249545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_metal',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    redtandy: {
        song_id: 1005088,
        song_length: 350000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 2005,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Red Tandy',
        album_track_number: 1,
        vocal_parts: 3,
    },
    reeducation: {
        song_length: 224545,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    refugee: {
        song_length: 335000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    rehash: {
        song_length: 227727,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        genre: 'hiphoprap',
    },
    reinventingyourexit: {
        song_id: 1005603,
        song_length: 265909,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    release: {
        song_id: 1005477,
        song_length: 317272,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['pearljam', 'disc_update'],
    },
    renegade: {
        song_id: 1005521,
        song_length: 264545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1978,
        year_recorded: 2009,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    reptilia: {
        song_id: 31,
        preview: [75750, 105750],
        song_length: 219090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 2003,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Room on Fire',
        album_track_number: 2,
        vocal_tonic_note: 11,
        song_tonality: 1,
    },
    rescueme: {
        song_id: 1005184,
        song_length: 193636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    restlessheart: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    reyourbrains: {
        song_length: 274545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    riadnthebedouins: {
        song_id: 1005510,
        song_length: 225454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    rideawhiteswan: {
        song_length: 147272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 8,
        song_tonality: 0,
    },
    ridethelightning: {
        song_id: 1005013,
        song_length: 400454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1984,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Ride the Lightning',
        album_track_number: 2,
        vocal_parts: 2,
    },
    ridingonthewind: {
        song_id: 1005096,
        song_length: 193636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1982,
        alternate_path: true,
        album_art: true,
        album_name: 'Screaming for Vengeance',
        album_track_number: 3,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    ridinthehook: {
        song_length: 184545,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    ridinthestormout: {
        song_id: 1005527,
        song_length: 264090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1973,
        year_recorded: 1988,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    ringoffire: {
        song_id: 1005552,
        song_length: 234545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1990,
        year_recorded: 2007,
    },
    rio: {
        song_id: 1005196,
        song_length: 327272,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_vol_2',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    roam: {
        song_id: 1005049,
        song_length: 309545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1989,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Cosmic Thing',
        album_track_number: 6,
        vocal_parts: 3,
    },
    robtheprezodent: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 1,
    },
    rockandrollband: {
        song_id: 1005075,
        song_length: 184090,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_classic_rock',
        rating: 1,
        year_released: 1976,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Boston',
        album_track_number: 4,
        vocal_parts: 3,
    },
    rockandrollcreation: {
        song_length: 291363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    rockandrollstar: {
        song_id: 1005109,
        song_length: 365454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1994,
        alternate_path: true,
        album_art: true,
        album_name: 'Definitely Maybe',
        album_track_number: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    rockawaybeach: {
        song_id: 1005022,
        song_length: 127272,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1977,
        alternate_path: true,
        album_art: true,
        album_name: 'Rocket to Russia',
        album_track_number: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    rockinamerica: {
        song_length: 259090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        year_released: 1983,
        year_recorded: 2009,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    rockme: {
        song_length: 205000,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    rocknrolldream: {
        song_id: 1005134,
        song_length: 206363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        alternate_path: true,
        album_name: 'Adrenaline',
        album_track_number: 7,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        version: 1,
        year_released: 2008,
    },
    rocknrollhighschool: {
        format: 10,
        year_released: 1978,
        year_recorded: 2001,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    rocknrollnightmare: {
        song_id: 1005593,
        song_length: 197727,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        genre: 'metal',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    rockready: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    rockrebellion: {
        song_id: 1005081,
        song_length: 291363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 2007,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Bang Camaro',
        album_track_number: 11,
        vocal_parts: 3,
    },
    rockyoursocks: {
        song_id: 1005618,
        song_length: 210909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    rollwiththechanges: {
        song_id: 1005526,
        preview: [134850, 164850],
        song_length: 339545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1978,
        year_recorded: 1988,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    rooftops: {
        song_length: 251363,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    rooster: {
        song_length: 380000,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    roundandround: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        genre: 'glam',
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    roxanne: {
        song_id: 1005011,
        preview: [50300, 80300],
        song_length: 179090,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1978,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: "Outlandos d'Amour",
        album_track_number: 3,
        vocal_parts: 3,
    },
    ruby: {
        song_length: 215000,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 10,
        song_tonality: 1,
    },
    rubysoho: {
        song_length: 160909,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    rudemood: {
        song_id: 1005444,
        song_length: 285454,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    runnindownadream: {
        song_length: 258181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    running: {
        song_id: 1005368,
        preview: [138000, 168000],
        song_length: 244545,
        solo: ['drum'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        alternate_path: true,
        year_released: 2001,
        album_name: 'Rock Steady',
        album_track_number: 8,
    },
    runningwild: {
        song_id: 1005192,
        song_length: 222727,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    runthroughthejungle: {
        solo: ['vocal_percussion'],
        format: 10,
    },
    runtothehills: {
        song_id: 32,
        preview: [11000, 41000],
        song_length: 194090,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1982,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    runtothehills2: {
        song_id: 1005584,
        song_length: 234545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    rustinpeace: {
        song_id: 1005906,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    sabotage: {
        song_id: 33,
        preview: [68600, 98600],
        song_length: 152272,
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1994,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Ill Communication',
        album_track_number: 6,
        vocal_parts: 3,
        genre: 'hiphoprap',
        vocal_tonic_note: 8,
        song_tonality: 0,
    },
    saintsoflosangeles: {
        song_id: 1005082,
        song_length: 207727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_2',
        rating: 2,
        year_released: 2008,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Saints of Los Angeles',
        album_track_number: 5,
        encoding: 'latin1',
        vocal_parts: 3,
    },
    saluteyoursolution: {
        song_length: 186818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    sameolsituation: {
        song_id: 1005261,
        song_length: 261363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        encoding: 'latin1',
        vocal_parts: 3,
    },
    satchboogie: {
        song_length: 199090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    satelliteradio: {
        song_id: 1005432,
        preview: [53500, 83500],
        song_length: 245454,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    saucyjack: {
        song_id: 1005597,
        song_length: 101818,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        genre: 'metal',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    savior: {
        song_length: 248636,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    sayitaintso: {
        song_id: 34,
        preview: [81750, 111750],
        song_length: 215000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1994,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Weezer (The Blue Album)',
        album_track_number: 7,
        vocal_parts: 2,
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    scarletbegonias: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    school: {
        song_length: 164545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    schoolsoutlive: {
        song_id: 1005563,
        song_length: 219090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    sciencegeniusgirl: {
        song_length: 196363,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'popdanceelectronic',
    },
    scraped: {
        song_id: 1005511,
        song_length: 211363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    screamingfor: {
        song_id: 1005092,
        song_length: 290454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_metal',
        rating: 2,
        year_released: 1982,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Screaming for Vengeance',
        album_track_number: 7,
        vocal_parts: 3,
    },
    seaandsand: {
        song_id: 1005164,
        song_length: 315454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    seethelight: {
        song_length: 248979,
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    seeyou: {
        song_id: 1005328,
        song_length: 153636,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    selfesteem: {
        song_id: 1005254,
        song_length: 261363,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    seven: {
        song_id: 56,
        preview: [45500, 75500],
        song_length: 207272,
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 2007,
        alternate_path: true,
        album_art: true,
        album_name: 'Public Display of Infection',
        album_track_number: 6,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    sevennationarmy: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        alternate_path: true,
    },
    sexonfire: {
        song_length: 211363,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    sextypething: {
        song_id: 1005058,
        song_length: 224545,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1992,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Core',
        album_track_number: 2,
    },
    shake: {
        song_id: 1005080,
        song_length: 281363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2008,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Shake',
        vocal_parts: 3,
    },
    shedoes: {
        song_id: 1005198,
        song_length: 115909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    shegoesdown: {
        song_id: 1005259,
        song_length: 280909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        encoding: 'latin1',
        vocal_parts: 3,
    },
    sheisahandsomewoman: {
        song_id: 1005208,
        song_length: 191818,
        solo: ['guitar'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    shesagenius: {
        song_length: 184545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    shesahottie: {
        song_id: 1005499,
        song_length: 191363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    shescountry: {
        song_id: 1005463,
        song_length: 225000,
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        year_released: 2009,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    shesellssanctuary: {
        song_id: 1005222,
        song_length: 266363,
        solo: ['vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    shesfetching: {
        song_length: 171818,
        format: 10,
        game_origin: 'rb1_dlc',
        year_released: 1987,
        year_recorded: 2008,
        album_track_number: 7,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    shesnotthere: {
        song_id: 1005566,
        song_length: 144545,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    shessofine: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    shethinksmytractorssexy: {
        song_id: 1005455,
        song_length: 250909,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    shhh: {
        song_id: 1005202,
        song_length: 268636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    shimmerandshine: {
        song_id: 1005573,
        song_length: 194545,
        solo: ['drum', 'guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    shiningstar: {
        song_id: 1005468,
        song_length: 177272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        genre: 'rbsoulfunk',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    shockwave: {
        song_id: 1005066,
        song_length: 218636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_metal',
        rating: 2,
        year_released: 2008,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Light from Above',
        album_track_number: 1,
        vocal_parts: 3,
    },
    shootingstar: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    shoottherunner: {
        song_id: 1005221,
        song_length: 211363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    shoottothrill_live: {
        song_id: 1005297,
        song_length: 324090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    shortandsweet: {
        preview: [127974, 157974],
        song_length: 399545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        genre: 'metal',
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    shouldertotheplow: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 0,
        song_tonality: 1,
    },
    shouldistay: {
        song_id: 35,
        song_length: 158181,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1982,
        alternate_path: true,
        album_art: true,
        album_name: 'Combat Rock',
        album_track_number: 3,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    shouldvebeenacowboy: {
        song_id: 1005500,
        preview: [51000, 81000],
        song_length: 215000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    showmetheway: {
        song_length: 242272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        album_name: 'Light from Above',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    sicksicksick: {
        song_id: 1005007,
        preview: [42000, 72000],
        song_length: 222727,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2007,
        alternate_path: true,
        album_art: true,
        album_name: 'Era Vulgaris',
        album_track_number: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    silver: {
        song_id: 1005137,
        song_length: 150909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    simplekindoflife: {
        song_id: 1005366,
        song_length: 266363,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        year_released: 2000,
        album_name: 'Return of Saturn',
        album_track_number: 2,
    },
    simpleman: {
        song_id: 1005083,
        song_length: 389090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_2',
        rating: 1,
        year_released: 1973,
        alternate_path: true,
        album_art: true,
        album_name: "(pronounced 'leh-'nérd 'skin-'nérd)",
        album_track_number: 4,
        encoding: 'latin1',
        extra_authoring: ['disc_update'],
    },
    singthechanges: {
        solo: ['vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    sinwagon: {
        song_id: 1005377,
        song_length: 219545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    sirpsychosexy: {
        song_id: 1005233,
        song_length: 511818,
        solo: ['vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    sistereurope: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    siva: {
        song_id: 1005047,
        song_length: 268181,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 1,
        year_released: 1991,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Gish',
        album_track_number: 2,
        vocal_parts: 2,
    },
    sixsixsix: {
        song_id: 1005665,
        song_length: 281363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        year_released: 1982,
        year_recorded: 2009,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    sixteen: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    skullcrushermt: {
        song_id: 1005201,
        song_length: 258636,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    sleepwalker: {
        song_id: 1005187,
        song_length: 362727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    sliceofyourpie: {
        song_id: 1005265,
        song_length: 270909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        encoding: 'latin1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    smashitup: {
        song_length: 169090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    smellsliketeen: {
        song_length: 304545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        alternate_path: true,
        extra_authoring: ['disc_update'],
    },
    smilelikeyoumeanit: {
        song_id: 1005350,
        song_length: 241363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    smokin: {
        song_id: 1005074,
        preview: [39125, 69125],
        song_length: 270000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1976,
        alternate_path: true,
        album_art: true,
        album_name: 'Boston',
        album_track_number: 5,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    smoothcriminalaaf: {
        song_id: 1005544,
        preview: [41500, 71500],
        song_length: 209545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    snowheyoh: {
        song_id: 1005160,
        preview: [40936, 70936],
        song_length: 338181,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_vol_2',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    socold: {
        song_length: 273181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    somebodytolove: {
        song_length: 299090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    somethingaboutyou: {
        song_id: 1005072,
        song_length: 243181,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1976,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Boston',
        album_track_number: 7,
        vocal_parts: 3,
    },
    somethingintheway: {
        song_id: 1005267,
        preview: [61203, 91203],
        song_length: 236818,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    song2: {
        song_length: 132272,
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 5,
        song_tonality: 1,
    },
    songwithamission: {
        song_id: 1005029,
        song_length: 178636,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 2006,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_parts: 3,
    },
    sonsanddaughters: {
        song_id: 1005309,
        preview: [35700, 65700],
        song_length: 234090,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    sorrow: {
        song_id: 1005220,
        song_length: 221363,
        solo: ['guitar'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    sorry: {
        song_id: 1005509,
        song_length: 378636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    sortof: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    soulsofblack: {
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 3,
        song_tonality: 1,
    },
    soulsucker: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    soundsofsilence: {
        song_length: 190454,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    sowhat: {
        song_length: 224090,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 6,
        song_tonality: 1,
    },
    spacecowboy: {
        song_id: 1005408,
        song_length: 306363,
        solo: ['drum', 'guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    spaceman: {
        song_id: 1005349,
        song_length: 273636,
        solo: ['drum'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    spacetruckin: {
        song_id: 1005389,
        song_length: 283181,
        solo: ['drum', 'guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    spanishcastlemagic: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    speedofsound: {
        vocal_parts: 2,
        song_length: 215000,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 8,
        song_tonality: 0,
    },
    spiderwebs: {
        song_id: 1005367,
        song_length: 293636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1995,
        year_recorded: 2003,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        album_name: 'Tragic Kingdom',
        album_track_number: 1,
    },
    spiritinthesky: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    spoonman: {
        extra_authoring: ['disc_update'],
    },
    sprode: {
        song_id: 1005079,
        preview: [74950, 104950],
        song_length: 199545,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 2003,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Hi-Five My Remix',
        vocal_parts: 3,
        genre: 'popdanceelectronic',
    },
    standingintheshower: {
        song_id: 1005533,
        song_length: 190000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        alternate_path: true,
    },
    stateofloveandtrustlive: {
        song_id: 1005488,
        song_length: 215909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['pearljam', 'disc_update'],
    },
    stayaway: {
        song_id: 1005269,
        song_length: 212727,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        alternate_path: true,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    steadyasshegoes: {
        song_length: 221363,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    steadyatthewheel: {
        song_id: 1005577,
        song_length: 181818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    steelerlive: {
        solo: ['guitar'],
        format: 10,
        year_released: 1980,
        year_recorded: 2010,
        extra_authoring: ['disc_update'],
    },
    stickysweet: {
        song_id: 1005260,
        song_length: 229545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        encoding: 'latin1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    stillalive: {
        song_id: 1005078,
        preview: [55960, 85960],
        song_length: 180454,
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 2007,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Portal',
        vocal_parts: 2,
    },
    stonehenge: {
        song_length: 272727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    stop: {
        song_id: 1005248,
        song_length: 170909,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    stopstartagain: {
        song_id: 1005518,
        song_length: 272272,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    storyofmylife: {
        song_id: 1005555,
        song_length: 350000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1990,
        year_recorded: 2007,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    straycatstrut: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    streetofdreams: {
        song_id: 1005515,
        song_length: 284545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    stricken: {
        song_id: 1005549,
        song_length: 252727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    stumbleandfall: {
        song_length: 190000,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    stupify: {
        song_id: 1005550,
        song_length: 261363,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    suckmykiss: {
        song_id: 1005243,
        song_length: 221818,
        solo: ['guitar'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    suddenlyisee: {
        song_length: 207727,
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    sudsinabucket: {
        song_id: 1005462,
        song_length: 229545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    suffragettecity: {
        song_id: 36,
        preview: [27600, 57600],
        song_length: 172727,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 1972,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name:
            'The Rise and Fall of Ziggy Stardust and the Spiders From Mars',
        album_track_number: 10,
        vocal_parts: 3,
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    sugarbaby: {
        song_length: 190454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    sugarmagnolia: {
        song_id: 1005061,
        song_length: 214090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1970,
        alternate_path: true,
        album_art: true,
        album_name: 'American Beauty',
        album_track_number: 3,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    suicidenotept2: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    sulpher: {
        song_length: 280909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    summerof69: {
        song_length: 235909,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    summertimeblues: {
        song_id: 1005163,
        song_length: 206363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    summertimerolls: {
        song_id: 1005532,
        song_length: 390000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        alternate_path: true,
    },
    sundaymorning: {
        song_id: 1005372,
        song_length: 276363,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1995,
        year_recorded: 2003,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        alternate_path: true,
        album_name: 'Tragic Kingdom',
        album_track_number: 9,
    },
    sundial: {
        song_length: 230000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    sunhitsthesky: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    superbeast: {
        song_length: 230909,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    superbowlmedley: {
        solo: ['drum'],
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    supersonic: {
        vocal_parts: 2,
        song_length: 160909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    supersoniclive: {
        song_length: 284545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        year_released: 1994,
        year_recorded: 2000,
        extra_authoring: ['disc_update'],
    },
    surfingwiththealien: {
        song_length: 239090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    swamped: {
        song_id: 1005339,
        song_length: 243181,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    sweetleaf: {
        song_id: 1005020,
        preview: [23000, 53000],
        song_length: 304545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1971,
        alternate_path: true,
        album_art: false,
        extra_authoring: ['disc_update'],
    },
    sweetness: {
        song_id: 1005431,
        song_length: 220454,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    sweetnessandlight: {
        song_length: 325909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    sweettalk: {
        song_length: 183181,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    swing: {
        song_id: 1005456,
        song_length: 228636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    swingswing: {
        song_length: 241363,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    synchronicity2: {
        song_id: 1005010,
        preview: [47700, 77700],
        song_length: 288181,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 2,
        year_released: 1983,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Synchronicity',
        album_track_number: 6,
        vocal_parts: 2,
    },
    takebackthecity: {
        song_id: 1005388,
        song_length: 284090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    takeitontherun: {
        song_id: 1005525,
        preview: [5500, 35500],
        song_length: 243181,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    takemeout: {
        song_id: 1005545,
        song_length: 241363,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    takemetotheriver: {
        song_length: 308636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    takenoprisoners: {
        song_id: 1005862,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    takethemoney: {
        song_id: 1005409,
        song_length: 174090,
        solo: ['drum'],
        format: 10,
        game_origin: 'rbtp_classic_rock',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    takethesechains: {
        song_id: 1005094,
        song_length: 214090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1982,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Screaming for Vengeance',
        album_track_number: 5,
        vocal_parts: 3,
    },
    tame: {
        song_id: 1005148,
        song_length: 119545,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    tangledupinblue: {
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    tedjustadmitit: {
        song_id: 1005534,
        song_length: 448181,
        solo: ['drum', 'guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        alternate_path: true,
    },
    teenagelobotomy: {
        song_id: 1005052,
        song_length: 126363,
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 1,
        year_released: 1977,
        alternate_path: true,
        album_art: true,
        album_name: 'Rocket to Russia',
        album_track_number: 8,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    teenageriot: {
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    tellherno: {
        song_id: 1005567,
        song_length: 129545,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    tellme: {
        song_id: 1005446,
        song_length: 172727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    tellmebaby: {
        song_id: 1005159,
        song_length: 249090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    tempted: {
        song_id: 1005355,
        preview: [42289, 72289],
        song_length: 276363,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    tenspeed: {
        song_id: 1005046,
        song_length: 235454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 2005,
        alternate_path: true,
        album_art: false,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    territorialpissing: {
        song_id: 1005271,
        song_length: 147272,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        alternate_path: true,
    },
    testify_srv: {
        song_id: 1005445,
        song_length: 204090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb3dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    texasflood: {
        song_id: 1005447,
        song_length: 327727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    thankyouboys: {
        song_id: 1005529,
        song_length: 63636,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        alternate_path: true,
    },
    thatshowiescaped: {
        song_id: 1005345,
        song_length: 123636,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    thatswhatyouget: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    thatswhenireach: {
        song_id: 1005343,
        song_length: 240454,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    thebanishment: {
        song_id: 1005540,
        song_length: 362272,
        solo: ['drum'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    thebroken: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    theclairvoyant: {
        song_id: 1005582,
        song_length: 270909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    theclimb: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    theconjuring: {
        song_id: 1005217,
        song_length: 305909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    thedopeshow: {
        format: 10,
        genre: 'glam',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thedownfallofusall: {
        song_id: 1005606,
        song_length: 214545,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    theend2: {
        song_length: 175000,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['pearljam'],
    },
    thefeeling: {
        song_id: 1005305,
        song_length: 147727,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 1,
        song_tonality: 1,
    },
    thefinalcountdown: {
        song_length: 309545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'glam',
        vocal_tonic_note: 6,
        song_tonality: 1,
    },
    thefixer: {
        vocal_parts: 2,
        song_length: 191818,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    theflood: {
        song_id: 1005605,
        song_length: 216818,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    thegambler: {
        song_id: 1005461,
        song_length: 215000,
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    thegame: {
        format: 10,
        extra_authoring: ['disc_update'],
    },
    thegreatestman: {
        song_id: 1005151,
        song_length: 350909,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    thegreatsatan: {
        song_id: 1005569,
        song_length: 198181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    thegreatsoutherntrendkill: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    thegreetingsong: {
        song_id: 1005235,
        song_length: 198636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    thehandthatfeeds: {
        song_id: 37,
        preview: [21475, 51475],
        song_length: 183181,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 2005,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'With Teeth',
        album_track_number: 4,
        vocal_parts: 3,
        vocal_tonic_note: 9,
        song_tonality: 1,
    },
    thejack_live: {
        song_id: 1005291,
        song_length: 344545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thejoker: {
        song_id: 1005407,
        song_length: 221818,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_classic_rock',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    thekidsarentalright: {
        song_id: 1005452,
        song_length: 185454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thekill: {
        song_id: 1005028,
        song_length: 246818,
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 1,
        year_released: 2005,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'A Beautiful Lie',
        album_track_number: 3,
        vocal_parts: 3,
    },
    theleavingpt2: {
        song_length: 206818,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    themetal: {
        song_length: 165000,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        encoding: 'latin1',
        vocal_parts: 3,
    },
    thepassenger: {
        song_length: 293636,
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 9,
        song_tonality: 1,
    },
    thepowerofequality: {
        song_id: 1005247,
        song_length: 254545,
        solo: ['guitar'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    thepretender: {
        song_length: 271818,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    theragelive: {
        solo: ['guitar'],
        format: 10,
        year_released: 1980,
        year_recorded: 2010,
        extra_authoring: ['disc_update'],
    },
    theregoesmygun: {
        song_id: 1005139,
        song_length: 114090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    theresnootherway: {
        song_length: 211363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    therewasatime: {
        song_id: 1005513,
        song_length: 402727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    therighteousandthewicked: {
        song_id: 1005240,
        song_length: 253636,
        solo: ['vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    therockshow: {
        song_length: 176818,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    therunningfree: {
        song_id: 1005574,
        song_length: 247272,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thestaticage: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    thetasteofink: {
        solo: ['drum'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    thetimeiswrong: {
        song_id: 1005306,
        song_length: 211818,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 10,
        song_tonality: 1,
    },
    thetrees: {
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 2,
        song_tonality: 1,
    },
    thetrooper: {
        song_id: 1005587,
        song_length: 255000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    thewagon: {
        song_id: 1005642,
        song_length: 299090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thewaitinglive: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    thewaythatitshows: {
        song_id: 1005450,
        song_length: 384090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    theyreredhot: {
        song_id: 1005232,
        song_length: 60454,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    theysay: {
        song_id: 1005181,
        song_length: 172727,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    thirdfloorstory: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    thisaintascene: {
        name: "This Ain't a Scene, It's an Arms Race",
        song_id: 1005098,
        song_length: 214090,
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_2',
        rating: 2,
        year_released: 2007,
        alternate_path: true,
        album_art: true,
        album_name: 'Infinity on High',
        album_track_number: 3,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thiscalling: {
        song_id: 1005205,
        song_length: 219090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    thisilove: {
        song_id: 1005506,
        song_length: 328181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    thisisacall: {
        song_id: 1005386,
        song_length: 233181,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    thisisexile: {
        song_length: 229545,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    thisisit: {
        song_id: 1005178,
        song_length: 228636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    thisisthirteen: {
        song_id: 1005670,
        song_length: 368636,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    thisonesforthegirls: {
        song_id: 1005460,
        song_length: 248181,
        format: 10,
        game_origin: 'rbtp_country_1',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    thrasher: {
        song_id: 1005069,
        song_length: 191363,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_metal',
        rating: 2,
        year_released: 2007,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Enter the Grave',
        album_track_number: 2,
        vocal_parts: 3,
    },
    thrashunreal: {
        song_id: 1005470,
        preview: [117500, 147500],
        song_length: 255909,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    throughbeingcool: {
        song_id: 1005193,
        song_length: 203181,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1981,
        year_recorded: 2008,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    throwingstones: {
        solo: ['guitar'],
        format: 10,
        album_name: 'In the Dark',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thunder: {
        song_length: 244090,
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    thunderstruck_live: {
        song_id: 1005298,
        song_length: 339090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    ticktickboom: {
        song_length: 207272,
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 11,
        song_tonality: 1,
    },
    tieyourmotherdown: {
        song_length: 226818,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    timebomb: {
        song_id: 1005437,
        song_length: 227727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    timebomb2: {
        song_length: 150454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    timeforchange: {
        song_id: 1005257,
        song_length: 306363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        encoding: 'latin1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    timeisrunningout: {
        song_id: 1005154,
        song_length: 207727,
        format: 10,
        game_origin: 'rbtp_vol_2',
        rating: 1,
        encoding: 'latin1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    timesickson: {
        song_id: 1005087,
        song_length: 180454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 2007,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Kiss the Crystal Flake',
        album_track_number: 11,
        vocal_parts: 2,
    },
    timeslikethese: {
        song_id: 1005385,
        song_length: 267272,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    timewehad: {
        song_id: 57,
        preview: [35600, 65600],
        song_length: 188181,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 2007,
        alternate_path: true,
        album_art: true,
        album_name: 'Kiss the Crystal Flake',
        album_track_number: 3,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    timmy: {
        song_id: 58,
        song_length: 126818,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 2000,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Timmy & The Lords of the Underworld',
        album_track_number: 1,
        vocal_parts: 3,
        genre: 'novelty',
        vocal_tonic_note: 3,
        song_tonality: 1,
    },
    tnt_live: {
        song_id: 1005284,
        song_length: 204090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    today: {
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
        vocal_tonic_note: 3,
        song_tonality: 0,
    },
    tomorrow: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    tomsawyer: {
        song_id: 38,
        preview: [197600, 227600],
        song_length: 236363,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 1981,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_tonic_note: 4,
        song_tonality: 1,
    },
    tomsawyer2: {
        song_id: 1005231,
        preview: [9900, 39900],
        song_length: 293181,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    tonightimgonna: {
        song_length: 170909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    toomuchtimeonmyhands: {
        song_id: 1005523,
        song_length: 272272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1981,
        year_recorded: 2009,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    tornadoofsouls: {
        song_id: 1005911,
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    touchofgrey: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        album_name: 'In the Dark',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    towncalledmalice: {
        song_length: 183636,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    toxicity: {
        song_id: 1005182,
        song_length: 227727,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    tragickingdom: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    traininvain: {
        song_id: 1005101,
        song_length: 202272,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1979,
        alternate_path: true,
        album_art: true,
        album_name: 'London Calling',
        album_track_number: 19,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    trainkeptarollin: {
        song_id: 39,
        song_length: 343636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1974,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
        vocal_tonic_note: 4,
        song_tonality: 1,
    },
    transmaniaconmc: {
        song_id: 1005679,
        song_length: 205454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_metal',
        rating: 2,
        extra_authoring: ['disc_update'],
        encoding: 'latin1',
    },
    travellingband: {
        solo: ['guitar'],
        format: 10,
    },
    treatmelikeyourmother: {
        song_length: 257272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    tribute: {
        song_length: 245454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    troublemaker: {
        song_id: 1005150,
        song_length: 167272,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    truckin: {
        song_id: 1005060,
        song_length: 309090,
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 2,
        year_released: 1970,
        alternate_path: true,
        album_art: true,
        album_name: 'American Beauty',
        album_track_number: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    truthhitseverybody: {
        song_id: 1005051,
        song_length: 176818,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_classic_rock',
        rating: 2,
        year_released: 1978,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: "Outlandos d'Amour",
        album_track_number: 7,
        vocal_parts: 3,
    },
    tuttoepossibile: {
        song_id: 1005358,
        song_length: 210454,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        album_name: 'Tutto è Possibile',
        encoding: 'latin1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    twoprinces: {
        song_length: 270909,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    twoweeks: {
        song_id: 1005204,
        song_length: 265000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rbtp_metal',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    typical: {
        song_id: 1005410,
        song_length: 262727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 2006,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    unclejohnsband: {
        song_id: 1005412,
        song_length: 286818,
        solo: ['drum'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    uncontrollableurge: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    undergroundinamerica: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    undermywheelslive: {
        song_id: 1005562,
        song_length: 215909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    underneathitall: {
        song_id: 1005370,
        song_length: 292727,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        alternate_path: true,
        year_released: 2001,
        album_name: 'Rock Steady',
        album_track_number: 4,
    },
    underpressure: {
        song_length: 237272,
        solo: ['drum'],
        format: 10,
        game_origin: 'rb1_dlc',
    },
    underthebridge: {
        song_id: 1005238,
        song_length: 279545,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    undone: {
        song_length: 310000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    unitedlive: {
        format: 10,
        year_released: 1980,
        year_recorded: 2010,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    unthoughtknown: {
        vocal_parts: 2,
        song_length: 251363,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 5,
        song_tonality: 0,
    },
    uparoundthebend: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    upfromtheskies: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    upinarms: {
        song_id: 1005330,
        song_length: 142272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    upthebeach: {
        song_id: 1005537,
        song_length: 185909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        alternate_path: true,
    },
    usblues: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    useit: {
        song_id: 1005473,
        song_length: 209090,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    useme: {
        song_id: 1005299,
        song_length: 231818,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    usuck: {
        song_length: 192727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    valerie: {
        song_length: 243636,
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 3,
        song_tonality: 0,
    },
    valleysofneptune: {
        format: 10,
        year_recorded: 2010,
        extra_authoring: ['disc_update'],
        year_released: 1969,
    },
    vasoline: {
        song_id: 40,
        preview: [61400, 91400],
        song_length: 145909,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1994,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Purple',
        album_track_number: 2,
        vocal_parts: 3,
        vocal_tonic_note: 0,
        song_tonality: 0,
    },
    vengeanceismine: {
        song_id: 1005561,
        song_length: 271818,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    visions: {
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 4,
        song_tonality: 1,
    },
    vitalsigns: {
        song_id: 1005225,
        song_length: 280000,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    vivalagloria: {
        name: '¡Viva la Gloria!',
        format: 10,
        extra_authoring: ['greenday', 'disc_update'],
        vocal_tonic_note: 4,
        encoding: 'latin1',
        song_tonality: 0,
    },
    volcano: {
        song_id: 1005122,
        preview: [14900, 44900],
        song_length: 211818,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1979,
        year_recorded: 2008,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Exclusive 2008 Rock Band Re-Recording',
        album_track_number: 3,
        vocal_parts: 3,
    },
    wakemeup: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    wakeupcall: {
        song_id: 1005602,
        song_length: 185909,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    wakeupdead: {
        song_id: 1005218,
        song_length: 221818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    wakingthedemon: {
        song_id: 1005496,
        song_length: 252272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_metal',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    walkaway: {
        solo: ['guitar'],
        format: 10,
        year_released: 1971,
        year_recorded: 2010,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    walkingafteryou: {
        song_id: 1005325,
        song_length: 283636,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
    },
    walkingonsunshine: {
        song_length: 241363,
        solo: ['vocal_percussion'],
        format: 10,
        year_released: 1985,
        year_recorded: 2004,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 10,
        song_tonality: 0,
    },
    walkingonthemoon: {
        format: 10,
        album_name: 'Reggatta de Blanc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    walklikeanegyptian: {
        song_length: 208181,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    wanteddeadoralive: {
        song_id: 41,
        preview: [214238, 244238],
        song_length: 250454,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 1986,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Slippery When Wet',
        album_track_number: 5,
    },
    warmerthanhell: {
        song_id: 1005596,
        song_length: 230000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        genre: 'metal',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    warpigs: {
        song_id: 1005019,
        song_length: 483636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1970,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
    },
    warriorsoftime: {
        song_id: 1005497,
        song_length: 307727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    warzone: {
        song_id: 1005405,
        song_length: 231818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    wastedagain: {
        song_id: 1005428,
        song_length: 190909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    wastedyears: {
        song_id: 1005586,
        song_length: 309090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    waveofmutilation: {
        song_id: 42,
        preview: [40000, 70000],
        song_length: 106818,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 1989,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Doolittle',
        album_track_number: 3,
        vocal_tonic_note: 5,
        song_tonality: 0,
    },
    weaponofchoice: {
        song_length: 174090,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    wearethechampions: {
        song_length: 192272,
        format: 10,
    },
    wearetheroadcrew: {
        song_length: 171818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        year_released: 1980,
        year_recorded: 2008,
        encoding: 'latin1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    wecarealot: {
        name: 'We Care a Lot',
        song_id: 1005048,
        song_length: 247727,
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_1',
        rating: 2,
        year_released: 1987,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Introduce Yourself',
        album_track_number: 6,
        vocal_parts: 3,
    },
    wedieyoung: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 1,
        vocal_parts: 2,
        song_tonality: 0,
    },
    wegotthebeat: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    weightoftheworld: {
        song_id: 1005594,
        song_length: 218181,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    welcomehome: {
        song_id: 43,
        preview: [198750, 228750],
        song_length: 323181,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 2005,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name:
            "Good Apollo, I'm Burning Star IV, Volume One: From Fear Through the Eyes of Madness",
        album_track_number: 11,
        vocal_parts: 3,
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    wellthoughtouttwinkles: {
        song_id: 1005275,
        song_length: 255454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    wewillrockyou1: {
        song_length: 130909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
    },
    whatahorriblenight: {
        song_length: 232727,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    whatsername: {
        solo: ['guitar'],
        format: 10,
        extra_authoring: ['disc_update'],
    },
    whatsitfeellike: {
        song_id: 1005559,
        preview: [51700, 81700],
        song_length: 230909,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    whatsmyageagain: {
        song_length: 154090,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        alternate_path: true,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    wheels: {
        song_length: 274545,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    whenicomearound: {
        solo: ['guitar'],
        format: 10,
    },
    whenyouwereyoung: {
        song_id: 44,
        song_length: 223636,
        solo: ['guitar'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 2,
        year_released: 2006,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: "Sam's Town",
        album_track_number: 3,
        vocal_parts: 3,
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    wheredyougo: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        genre: 'reggaeska',
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    wheresgary: {
        song_id: 1005493,
        preview: [38500, 68500],
        song_length: 195454,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    whitefalconfuzz: {
        song_length: 264399,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    whiterabbit: {
        song_length: 155000,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    whiteunicorn: {
        song_length: 305454,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    whitewedding: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
        vocal_tonic_note: 6,
        song_tonality: 0,
    },
    whoareyou: {
        song_id: 1005162,
        song_length: 315000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    whoknew: {
        song_length: 210909,
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    wholelottarosie_live: {
        song_id: 1005286,
        song_length: 279090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 2,
    },
    whosgoinghome: {
        song_id: 1005155,
        song_length: 211363,
        solo: ['vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        encoding: 'latin1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    whosyourdaddy: {
        song_id: 1005501,
        song_length: 257272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    whydoyouloveme: {
        song_id: 1005057,
        preview: [34150, 64150],
        song_length: 235909,
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_2',
        rating: 2,
        year_released: 2005,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Bleed Like Me',
        album_track_number: 4,
        vocal_parts: 3,
    },
    whygo: {
        song_id: 1005484,
        vocal_parts: 2,
        song_length: 205909,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['pearljam', 'disc_update'],
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    wilsonlive: {
        song_id: 1005576,
        song_length: 247272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    windmeup: {
        song_id: 1005404,
        song_length: 216363,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    windup: {
        song_id: 1005331,
        preview: [69100, 99100],
        song_length: 154545,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    witchhunt: {
        song_id: 1005226,
        song_length: 285454,
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    withoutyou: {
        song_id: 1005262,
        song_length: 275000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        encoding: 'latin1',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    wolflikeme: {
        song_id: 1005572,
        song_length: 291363,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    woman: {
        song_length: 175000,
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
    },
    wonderwall: {
        song_id: 1005042,
        song_length: 263636,
        solo: ['vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1995,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: "(What's the Story) Morning Glory?",
        album_track_number: 3,
        vocal_parts: 2,
    },
    wontgetfooled: {
        song_id: 45,
        preview: [75750, 105750],
        song_length: 420000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1',
        rating: 1,
        year_released: 1971,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: "Who's Next",
        album_track_number: 9,
        vocal_parts: 2,
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    wordforward: {
        song_length: 232272,
        solo: ['drum'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    wordup: {
        song_length: 171818,
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 6,
        song_tonality: 1,
    },
    workingman: {
        song_id: 1005045,
        song_length: 438636,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 2,
        year_released: 1974,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: false,
    },
    workingman2: {
        song_id: 1005157,
        song_length: 437272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    worldturning: {
        song_length: 234090,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    would: {
        song_length: 222272,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 2,
    },
    yomp: {
        song_id: 1005179,
        song_length: 211818,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    youcandoit: {
        solo: ['vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    youdonthavetobeoldlive: {
        name: "You Don't Have To Be Old To Be Wise (Live)",
        solo: ['guitar'],
        format: 10,
        year_released: 1980,
        year_recorded: 2010,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    youdontknowwhatloveis: {
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    yougiveloveabadname: {
        preview: [60450, 90450],
        song_length: 228636,
        solo: ['guitar'],
        format: 10,
    },
    yougotanotherthingcoming: {
        song_id: 1005091,
        song_length: 305909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_2',
        rating: 2,
        year_released: 1982,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Screaming for Vengeance',
        album_track_number: 8,
        vocal_parts: 3,
    },
    yougotit: {
        song_id: 1005393,
        song_length: 214545,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 1,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    yougotmefloatin: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    young: {
        song_id: 1005304,
        song_length: 204090,
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 0,
        song_tonality: 1,
    },
    youngerbums: {
        song_length: 181363,
        format: 10,
        game_origin: 'rb1_dlc',
        year_released: 1987,
        year_recorded: 2008,
        album_track_number: 13,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    youngmanblues: {
        song_id: 1005161,
        song_length: 307272,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        game_origin: 'rb1_dlc',
        rating: 2,
        extra_authoring: ['disc_update'],
    },
    yououghtaknow: {
        extra_authoring: ['disc_update'],
        genre: 'alternative',
        vocal_tonic_note: 6,
        song_tonality: 0,
    },
    yourdecision: {
        solo: ['guitar'],
        format: 10,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    yourealligot: {
        song_id: 1005116,
        song_length: 260000,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rb1_dlc',
        rating: 1,
        year_released: 1978,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'The Cars',
        album_track_number: 6,
        vocal_parts: 3,
    },
    youregonnahearfromme: {
        song_length: 234090,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rb1_dlc',
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    yourenorocknrollfun: {
        song_id: 1005219,
        song_length: 160909,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 2,
        album_track_number: 5,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    youshookme_live: {
        song_id: 1005285,
        preview: [98000, 128000],
        song_length: 224545,
        solo: ['guitar'],
        format: 10,
        game_origin: 'rbtp_acdc',
        rating: 2,
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    yyz: {
        song_id: 1005229,
        song_length: 271818,
        solo: ['guitar'],
        format: 10,
        version: 2,
        game_origin: 'rb1_dlc',
        rating: 1,
        extra_authoring: ['disc_update'],
    },
    zero: {
        song_id: 1005086,
        song_length: 162727,
        solo: ['guitar', 'vocal_percussion'],
        format: 10,
        version: 1,
        game_origin: 'rbtp_vol_2',
        rating: 2,
        year_released: 1995,
        alternate_path: true,
        extra_authoring: ['disc_update'],
        album_art: true,
        album_name: 'Mellon Collie and the Infinite Sadness',
        album_track_number: 4,
        vocal_parts: 2,
    },
    '50000unstoppablewatts_rbn': {
        game_origin: 'ugc1',
    },
    '5678_rbn': {
        game_origin: 'ugc1',
    },
    abigail_rbn: {
        game_origin: 'ugc1',
    },
    aliveandkicking_rbn: {
        game_origin: 'ugc1',
    },
    alliwant_rbn: {
        game_origin: 'ugc1',
    },
    americandream_rbn: {
        game_origin: 'ugc1',
    },
    anddelinquents_rbn: {
        game_origin: 'ugc1',
    },
    approachthepodium_rbn: {
        game_origin: 'ugc1',
    },
    arcaedion_rbn: {
        game_origin: 'ugc1',
    },
    aspiration_rbn: {
        game_origin: 'ugc1',
    },
    australia_rbn: {
        game_origin: 'ugc1',
    },
    battleroyale_rbn: {
        game_origin: 'ugc1',
    },
    battlesandbrotherhood_rbn: {
        game_origin: 'ugc1',
    },
    berzerker_rbn: {
        game_origin: 'ugc1',
    },
    bleed_rbn: {
        game_origin: 'ugc1',
    },
    bluedress_rbn: {
        game_origin: 'ugc1',
    },
    bodies_rbn: {
        game_origin: 'ugc1',
    },
    bulletwithaname_rbn: {
        game_origin: 'ugc1',
    },
    burnitdown_rbn: {
        game_origin: 'ugc1',
        extra_authoring: ['disc_update'],
    },
    businesstime_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    bustervoodoo_rbn: {
        game_origin: 'ugc1',
    },
    buttersnips_rbn: {
        game_origin: 'ugc1',
    },
    chelsea_rbn: {
        game_origin: 'ugc1',
    },
    cheynestokes_rbn: {
        game_origin: 'ugc1',
    },
    codemonkey_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    creepydoll_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    darkhorse_rbn: {
        game_origin: 'ugc1',
    },
    dayswithout_rbn: {
        game_origin: 'ugc1',
    },
    deathbedatheist_rbn: {
        game_origin: 'ugc1',
    },
    demonwoman_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    disengage_rbn: {
        game_origin: 'ugc1',
    },
    dogscangrowbeards_rbn: {
        game_origin: 'ugc1',
    },
    drunkenlullabies_rbn: {
        game_origin: 'ugc1',
    },
    energy_rbn: {
        game_origin: 'ugc1',
    },
    entertain_rbn: {
        game_origin: 'ugc1',
    },
    fakeit_rbn: {
        game_origin: 'ugc1',
    },
    fateofthemaiden_rbn: {
        game_origin: 'ugc1',
    },
    flagintheground_rbn: {
        game_origin: 'ugc1',
    },
    flightlessbird_rbn: {
        game_origin: 'ugc1',
    },
    foreverinyourhands_rbn: {
        game_origin: 'ugc1',
    },
    fortheloveofgodlive_rbn: {
        game_origin: 'ugc1',
    },
    forwearemany_rbn: {
        game_origin: 'ugc1',
    },
    gasoline_rbn: {
        game_origin: 'ugc1',
    },
    goingunder_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    hanuman_rbn: {
        game_origin: 'ugc1',
    },
    hardtosee_rbn: {
        game_origin: 'ugc1',
    },
    havefaithinme_rbn: {
        game_origin: 'ugc1',
    },
    heimdalsgate_rbn: {
        game_origin: 'ugc1',
    },
    heybabyheresthatsong_rbn: {
        game_origin: 'ugc1',
    },
    heytheremrbrooks_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    higher_rbn: {
        game_origin: 'ugc1',
        extra_authoring: ['disc_update'],
    },
    holdon2_rbn: {
        game_origin: 'ugc1',
    },
    hooklineandsinner_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    htmlrulezdood_rbn: {
        game_origin: 'ugc1',
    },
    icaruslives_rbn: {
        game_origin: 'ugc1',
    },
    ifimjamesdean_rbn: {
        game_origin: 'ugc1',
    },
    ikea_rbn: {
        game_origin: 'ugc1',
    },
    iknowwhatiam_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    imamazed_rbn: {
        game_origin: 'ugc1',
    },
    immadeofwaxlarrywhat_rbn: {
        game_origin: 'ugc1',
    },
    incubus_rbn: {
        game_origin: 'ugc1',
    },
    isthereaghost_rbn: {
        game_origin: 'ugc1',
    },
    itscomplicated_rbn: {
        game_origin: 'ugc1',
    },
    jamieallover_rbn: {
        game_origin: 'ugc1',
    },
    jumpers_rbn: {
        game_origin: 'ugc1',
    },
    kicksomeass09_rbn: {
        game_origin: 'ugc1',
    },
    knifeman_rbn: {
        game_origin: 'ugc1',
    },
    kokko_rbn: {
        game_origin: 'ugc1',
    },
    leaderlessandself_rbn: {
        game_origin: 'ugc1',
    },
    learntolive_rbn: {
        game_origin: 'ugc1',
    },
    lemonmeringuetie_rbn: {
        game_origin: 'ugc1',
    },
    letthegamesbegin_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    lexington_rbn: {
        game_origin: 'ugc1',
    },
    littleblackbackpack_rbn: {
        game_origin: 'ugc1',
    },
    mechanicallove_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    mordecai_rbn: {
        game_origin: 'ugc1',
    },
    neverletyougo09_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    nightonbaldmountain_rbn: {
        game_origin: 'ugc1',
    },
    noonesgonnaloveyou_rbn: {
        game_origin: 'ugc1',
    },
    obfuscation_rbn: {
        game_origin: 'ugc1',
    },
    paralyzer_rbn: {
        game_origin: 'ugc1',
    },
    relentlesschaos_rbn: {
        game_origin: 'ugc1',
    },
    remedy_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    requiemforadyingsong_rbn: {
        game_origin: 'ugc1',
    },
    riseabovethis_rbn: {
        game_origin: 'ugc1',
    },
    riveroftuoni_rbn: {
        game_origin: 'ugc1',
    },
    robotsmaybreak_rbn: {
        game_origin: 'ugc1',
    },
    rollthedice_rbn: {
        game_origin: 'ugc1',
    },
    secondandsebring_rbn: {
        game_origin: 'ugc1',
    },
    semicharmedlife09_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    sequesteredinmemphis_rbn: {
        game_origin: 'ugc1',
    },
    serpentineoffering_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    seven_rbn: {
        game_origin: 'ugc1',
    },
    shallowwaters_rbn: {
        game_origin: 'ugc1',
    },
    smashthecontrol_rbn: {
        game_origin: 'ugc1',
    },
    specialeffects_rbn: {
        game_origin: 'ugc1',
    },
    spin_rbn: {
        game_origin: 'ugc1',
    },
    standforsomething_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    tasteslikekevinbacon_rbn: {
        game_origin: 'ugc1',
        extra_authoring: ['disc_update'],
    },
    theattitudesong_rbn: {
        game_origin: 'ugc1',
    },
    thecomplexityoflight_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thefinalepisode_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thefuneral_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    thegreatsaltlake_rbn: {
        game_origin: 'ugc1',
    },
    thegunshow_rbn: {
        game_origin: 'ugc1',
    },
    thehoundsofanubis_rbn: {
        game_origin: 'ugc1',
    },
    themobgoeswild_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    themostbeautifulgirl_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    theoneyouwant_rbn: {
        game_origin: 'ugc1',
    },
    theorder_rbn: {
        game_origin: 'ugc1',
    },
    thetouch2007_rbn: {
        game_origin: 'ugc1',
    },
    thewaitingone_rbn: {
        game_origin: 'ugc1',
    },
    thoseinglasshouses_rbn: {
        game_origin: 'ugc1',
    },
    treevillage_rbn: {
        game_origin: 'ugc1',
    },
    undone_rbn: {
        game_origin: 'ugc1',
    },
    wakeup_rbn: {
        game_origin: 'ugc1',
    },
    wearenotanonymous_rbn: {
        game_origin: 'ugc1',
    },
    wearetheone_rbn: {
        game_origin: 'ugc1',
    },
    whenigethome_rbn: {
        game_origin: 'ugc1',
    },
    wherewereyou_rbn: {
        game_origin: 'ugc1',
    },
    whiteknuckles_rbn: {
        game_origin: 'ugc1',
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    youngbloods_rbn: {
        game_origin: 'ugc1',
    },
    youreawolf_rbn: {
        game_origin: 'ugc1',
    },
    UGC_5000034: {
        game_origin: 'ugc1',
    },
    UGC_5000202: {
        game_origin: 'ugc1',
    },
    UGC_5000310: {
        game_origin: 'ugc1',
    },
    UGC_5000336: {
        game_origin: 'ugc1',
    },
    UGC_5000345: {
        game_origin: 'ugc1',
    },
    UGC_5000374: {
        game_origin: 'ugc1',
    },
    UGC_5000390: {
        game_origin: 'ugc1',
    },
    UGC_5000406: {
        game_origin: 'ugc1',
    },
    UGC_5000413: {
        game_origin: 'ugc1',
    },
    UGC_5000416: {
        game_origin: 'ugc1',
    },
    UGC_5000437: {
        game_origin: 'ugc1',
    },
    UGC_5000484: {
        game_origin: 'ugc1',
    },
    UGC_5000491: {
        game_origin: 'ugc1',
    },
    UGC_5000492: {
        game_origin: 'ugc1',
    },
    UGC_5000493: {
        game_origin: 'ugc1',
    },
    UGC_5000503: {
        game_origin: 'ugc1',
    },
    UGC_5000507: {
        game_origin: 'ugc1',
    },
    UGC_5000535: {
        game_origin: 'ugc1',
    },
    UGC_5000544: {
        game_origin: 'ugc1',
    },
    UGC_5000548: {
        game_origin: 'ugc1',
    },
    UGC_5000558: {
        game_origin: 'ugc1',
    },
    UGC_5000561: {
        game_origin: 'ugc1',
    },
    UGC_5000569: {
        game_origin: 'ugc1',
    },
    UGC_5000583: {
        game_origin: 'ugc1',
    },
    UGC_5000594: {
        game_origin: 'ugc1',
    },
    UGC_5000596: {
        game_origin: 'ugc1',
    },
    UGC_5000615: {
        game_origin: 'ugc1',
    },
    UGC_5000631: {
        game_origin: 'ugc1',
    },
    UGC_5000673: {
        game_origin: 'ugc1',
    },
    UGC_5000681: {
        game_origin: 'ugc1',
    },
    UGC_5000701: {
        game_origin: 'ugc1',
    },
    UGC_5000708: {
        game_origin: 'ugc1',
    },
    UGC_5000712: {
        game_origin: 'ugc1',
    },
    UGC_5000722: {
        game_origin: 'ugc1',
    },
    UGC_5000727: {
        game_origin: 'ugc1',
    },
    UGC_5000729: {
        game_origin: 'ugc1',
    },
    UGC_5000730: {
        game_origin: 'ugc1',
    },
    UGC_5000739: {
        game_origin: 'ugc1',
    },
    UGC_5000740: {
        game_origin: 'ugc1',
    },
    UGC_5000754: {
        game_origin: 'ugc1',
    },
    UGC_5000767: {
        game_origin: 'ugc1',
    },
    UGC_5000772: {
        game_origin: 'ugc1',
    },
    UGC_5000777: {
        game_origin: 'ugc1',
    },
    UGC_5000780: {
        game_origin: 'ugc1',
    },
    UGC_5000783: {
        game_origin: 'ugc1',
    },
    UGC_5000799: {
        game_origin: 'ugc1',
    },
    UGC_5000804: {
        game_origin: 'ugc1',
    },
    UGC_5000805: {
        game_origin: 'ugc1',
    },
    UGC_5000831: {
        game_origin: 'ugc1',
    },
    UGC_5000833: {
        game_origin: 'ugc1',
    },
    UGC_5000836: {
        game_origin: 'ugc1',
    },
    UGC_5000853: {
        game_origin: 'ugc1',
    },
    UGC_5000869: {
        game_origin: 'ugc1',
    },
    UGC_5000889: {
        game_origin: 'ugc1',
    },
    UGC_5000895: {
        game_origin: 'ugc1',
    },
    UGC_5000925: {
        game_origin: 'ugc1',
    },
    UGC_5000927: {
        game_origin: 'ugc1',
    },
    UGC_5000936: {
        game_origin: 'ugc1',
    },
    UGC_5000959: {
        game_origin: 'ugc1',
    },
    UGC_5000960: {
        game_origin: 'ugc1',
    },
    UGC_5000968: {
        game_origin: 'ugc1',
    },
    UGC_5000971: {
        game_origin: 'ugc1',
    },
    UGC_5000972: {
        game_origin: 'ugc1',
    },
    UGC_5000974: {
        game_origin: 'ugc1',
    },
    UGC_5000988: {
        game_origin: 'ugc1',
    },
    UGC_5000990: {
        game_origin: 'ugc1',
    },
    UGC_5000993: {
        game_origin: 'ugc1',
    },
    UGC_5000994: {
        game_origin: 'ugc1',
    },
    UGC_5000996: {
        game_origin: 'ugc1',
    },
    UGC_5000997: {
        game_origin: 'ugc1',
    },
    UGC_5000999: {
        game_origin: 'ugc1',
    },
    UGC_5001001: {
        game_origin: 'ugc1',
    },
    UGC_5001025: {
        game_origin: 'ugc1',
    },
    UGC_5001045: {
        game_origin: 'ugc1',
    },
    UGC_5001056: {
        game_origin: 'ugc1',
    },
    UGC_5001063: {
        game_origin: 'ugc1',
    },
    UGC_5001075: {
        game_origin: 'ugc1',
    },
    UGC_5001076: {
        game_origin: 'ugc1',
    },
    UGC_5001097: {
        game_origin: 'ugc1',
    },
    UGC_5001105: {
        game_origin: 'ugc1',
    },
    UGC_5001127: {
        game_origin: 'ugc1',
    },
    UGC_5001128: {
        game_origin: 'ugc1',
    },
    UGC_5001156: {
        game_origin: 'ugc1',
    },
    UGC_5001162: {
        game_origin: 'ugc1',
    },
    UGC_5001165: {
        game_origin: 'ugc1',
    },
    UGC_5001180: {
        game_origin: 'ugc1',
    },
    UGC_5001181: {
        game_origin: 'ugc1',
    },
    UGC_5001192: {
        game_origin: 'ugc1',
    },
    UGC_5001202: {
        game_origin: 'ugc1',
    },
    UGC_5001204: {
        game_origin: 'ugc1',
    },
    UGC_5001216: {
        game_origin: 'ugc1',
    },
    UGC_5001220: {
        game_origin: 'ugc1',
    },
    UGC_5001264: {
        game_origin: 'ugc1',
    },
    UGC_5001277: {
        game_origin: 'ugc1',
    },
    UGC_5001288: {
        game_origin: 'ugc1',
    },
    UGC_5001289: {
        game_origin: 'ugc1',
    },
    UGC_5001290: {
        game_origin: 'ugc1',
    },
    UGC_5001291: {
        game_origin: 'ugc1',
    },
    UGC_5001295: {
        game_origin: 'ugc1',
    },
    UGC_5001303: {
        game_origin: 'ugc1',
    },
    UGC_5001316: {
        game_origin: 'ugc1',
    },
    UGC_5001319: {
        game_origin: 'ugc1',
    },
    UGC_5001321: {
        game_origin: 'ugc1',
    },
    UGC_5001323: {
        game_origin: 'ugc1',
    },
    UGC_5001328: {
        game_origin: 'ugc1',
    },
    UGC_5001339: {
        game_origin: 'ugc1',
    },
    UGC_5001341: {
        game_origin: 'ugc1',
    },
    UGC_5001344: {
        game_origin: 'ugc1',
    },
    UGC_5001352: {
        game_origin: 'ugc1',
    },
    UGC_5001353: {
        game_origin: 'ugc1',
    },
    UGC_5001359: {
        game_origin: 'ugc1',
    },
    UGC_5001364: {
        game_origin: 'ugc1',
    },
    UGC_5001370: {
        game_origin: 'ugc1',
    },
    UGC_5001375: {
        game_origin: 'ugc1',
    },
    UGC_5001377: {
        game_origin: 'ugc1',
    },
    UGC_5001392: {
        game_origin: 'ugc1',
    },
    UGC_5001396: {
        game_origin: 'ugc1',
    },
    UGC_5001406: {
        game_origin: 'ugc1',
    },
    UGC_5001414: {
        game_origin: 'ugc1',
    },
    UGC_5001416: {
        game_origin: 'ugc1',
    },
    UGC_5001422: {
        game_origin: 'ugc1',
    },
    UGC_5001426: {
        game_origin: 'ugc1',
    },
    UGC_5001428: {
        game_origin: 'ugc1',
    },
    UGC_5001436: {
        game_origin: 'ugc1',
    },
    UGC_5001440: {
        game_origin: 'ugc1',
    },
    UGC_5001447: {
        game_origin: 'ugc1',
    },
    UGC_5001455: {
        game_origin: 'ugc1',
    },
    UGC_5001458: {
        game_origin: 'ugc1',
    },
    UGC_5001459: {
        game_origin: 'ugc1',
    },
    UGC_5001460: {
        game_origin: 'ugc1',
    },
    UGC_5001464: {
        game_origin: 'ugc1',
    },
    UGC_5001485: {
        game_origin: 'ugc1',
    },
    UGC_5001514: {
        game_origin: 'ugc1',
    },
    UGC_5001515: {
        game_origin: 'ugc1',
    },
    UGC_5001517: {
        game_origin: 'ugc1',
    },
    UGC_5001523: {
        game_origin: 'ugc1',
    },
    UGC_5001524: {
        game_origin: 'ugc1',
    },
    UGC_5001527: {
        game_origin: 'ugc1',
    },
    UGC_5001535: {
        game_origin: 'ugc1',
    },
    UGC_5001537: {
        game_origin: 'ugc1',
    },
    UGC_5001538: {
        game_origin: 'ugc1',
    },
    UGC_5001540: {
        game_origin: 'ugc1',
    },
    UGC_5001547: {
        game_origin: 'ugc1',
    },
    UGC_5001549: {
        game_origin: 'ugc1',
    },
    UGC_5001555: {
        game_origin: 'ugc1',
    },
    UGC_5001557: {
        game_origin: 'ugc1',
    },
    UGC_5001561: {
        game_origin: 'ugc1',
    },
    UGC_5001564: {
        game_origin: 'ugc1',
    },
    UGC_5001565: {
        game_origin: 'ugc1',
    },
    UGC_5001568: {
        game_origin: 'ugc1',
    },
    UGC_5001570: {
        game_origin: 'ugc1',
    },
    UGC_5001575: {
        game_origin: 'ugc1',
    },
    UGC_5001577: {
        game_origin: 'ugc1',
    },
    UGC_5001579: {
        game_origin: 'ugc1',
    },
    UGC_5001580: {
        game_origin: 'ugc1',
    },
    UGC_5001581: {
        game_origin: 'ugc1',
    },
    UGC_5001588: {
        game_origin: 'ugc1',
    },
    UGC_5001591: {
        game_origin: 'ugc1',
    },
    UGC_5001595: {
        game_origin: 'ugc1',
    },
    UGC_5001609: {
        game_origin: 'ugc1',
    },
    UGC_5001623: {
        game_origin: 'ugc1',
    },
    UGC_5001624: {
        game_origin: 'ugc1',
    },
    UGC_5001632: {
        game_origin: 'ugc1',
    },
    UGC_5001633: {
        game_origin: 'ugc1',
    },
    UGC_5001635: {
        game_origin: 'ugc1',
    },
    UGC_5001637: {
        game_origin: 'ugc1',
    },
    UGC_5001638: {
        game_origin: 'ugc1',
    },
    UGC_5001642: {
        game_origin: 'ugc1',
    },
    UGC_5001644: {
        game_origin: 'ugc1',
    },
    UGC_5001646: {
        game_origin: 'ugc1',
    },
    UGC_5001656: {
        game_origin: 'ugc1',
    },
    UGC_5001662: {
        game_origin: 'ugc1',
    },
    UGC_5001674: {
        game_origin: 'ugc1',
    },
    UGC_5001677: {
        game_origin: 'ugc1',
    },
    UGC_5001679: {
        game_origin: 'ugc1',
    },
    UGC_5001688: {
        game_origin: 'ugc1',
    },
    UGC_5001708: {
        game_origin: 'ugc1',
    },
    UGC_5001724: {
        game_origin: 'ugc1',
    },
    UGC_5001730: {
        game_origin: 'ugc1',
    },
    UGC_5001734: {
        game_origin: 'ugc1',
    },
    UGC_5001737: {
        game_origin: 'ugc1',
    },
    UGC_5001739: {
        game_origin: 'ugc1',
    },
    UGC_5001743: {
        game_origin: 'ugc1',
    },
    UGC_5001744: {
        game_origin: 'ugc1',
    },
    UGC_5001765: {
        game_origin: 'ugc1',
    },
    UGC_5001768: {
        game_origin: 'ugc1',
    },
    UGC_5001770: {
        game_origin: 'ugc1',
    },
    UGC_5001771: {
        game_origin: 'ugc1',
    },
    UGC_5001783: {
        game_origin: 'ugc1',
    },
    UGC_5001786: {
        game_origin: 'ugc1',
    },
    UGC_5001788: {
        game_origin: 'ugc1',
    },
    UGC_5001790: {
        game_origin: 'ugc1',
    },
    UGC_5001794: {
        game_origin: 'ugc1',
    },
    UGC_5001797: {
        game_origin: 'ugc1',
    },
    UGC_5001798: {
        game_origin: 'ugc1',
    },
    UGC_5001800: {
        game_origin: 'ugc1',
    },
    UGC_5001804: {
        game_origin: 'ugc1',
    },
    UGC_5001807: {
        game_origin: 'ugc1',
    },
    UGC_5001811: {
        game_origin: 'ugc1',
    },
    UGC_5001814: {
        game_origin: 'ugc1',
    },
    UGC_5001829: {
        game_origin: 'ugc1',
    },
    UGC_5001844: {
        game_origin: 'ugc1',
    },
    UGC_5001851: {
        game_origin: 'ugc1',
    },
    UGC_5001861: {
        game_origin: 'ugc1',
    },
    UGC_5001862: {
        game_origin: 'ugc1',
    },
    UGC_5001871: {
        game_origin: 'ugc1',
    },
    UGC_5001873: {
        game_origin: 'ugc1',
    },
    UGC_5001874: {
        game_origin: 'ugc1',
    },
    UGC_5001876: {
        game_origin: 'ugc1',
    },
    UGC_5001892: {
        game_origin: 'ugc1',
    },
    UGC_5001903: {
        game_origin: 'ugc1',
    },
    UGC_5001904: {
        game_origin: 'ugc1',
    },
    UGC_5001906: {
        game_origin: 'ugc1',
    },
    UGC_5001923: {
        game_origin: 'ugc1',
    },
    UGC_5001924: {
        game_origin: 'ugc1',
    },
    UGC_5001927: {
        game_origin: 'ugc1',
    },
    UGC_5001934: {
        game_origin: 'ugc1',
    },
    UGC_5001937: {
        game_origin: 'ugc1',
    },
    UGC_5001953: {
        game_origin: 'ugc1',
    },
    UGC_5001957: {
        game_origin: 'ugc1',
    },
    UGC_5001965: {
        game_origin: 'ugc1',
    },
    UGC_5001970: {
        game_origin: 'ugc1',
    },
    UGC_5001977: {
        game_origin: 'ugc1',
    },
    UGC_5001979: {
        game_origin: 'ugc1',
    },
    UGC_5001980: {
        game_origin: 'ugc1',
    },
    UGC_5001990: {
        game_origin: 'ugc1',
    },
    UGC_5002011: {
        game_origin: 'ugc1',
    },
    UGC_5002014: {
        game_origin: 'ugc1',
    },
    UGC_5002034: {
        game_origin: 'ugc1',
    },
    UGC_5002036: {
        game_origin: 'ugc1',
    },
    UGC_5002043: {
        game_origin: 'ugc1',
    },
    UGC_5002051: {
        game_origin: 'ugc1',
    },
    UGC_5002062: {
        game_origin: 'ugc1',
    },
    UGC_5002067: {
        game_origin: 'ugc1',
    },
    UGC_5002073: {
        game_origin: 'ugc1',
    },
    UGC_5002076: {
        game_origin: 'ugc1',
    },
    UGC_5002081: {
        game_origin: 'ugc1',
    },
    UGC_5002083: {
        game_origin: 'ugc1',
    },
    UGC_5002089: {
        game_origin: 'ugc1',
    },
    UGC_5002090: {
        game_origin: 'ugc1',
    },
    UGC_5002096: {
        game_origin: 'ugc1',
    },
    UGC_5002103: {
        game_origin: 'ugc1',
    },
    UGC_5002104: {
        game_origin: 'ugc1',
    },
    UGC_5002116: {
        game_origin: 'ugc1',
    },
    UGC_5002117: {
        game_origin: 'ugc1',
    },
    UGC_5002124: {
        game_origin: 'ugc1',
    },
    UGC_5002127: {
        game_origin: 'ugc1',
    },
    UGC_5002129: {
        game_origin: 'ugc1',
    },
    UGC_5002135: {
        game_origin: 'ugc1',
    },
    UGC_5002137: {
        game_origin: 'ugc1',
    },
    UGC_5002141: {
        game_origin: 'ugc1',
    },
    UGC_5002144: {
        game_origin: 'ugc1',
    },
    UGC_5002151: {
        game_origin: 'ugc1',
    },
    UGC_5002176: {
        game_origin: 'ugc1',
    },
    UGC_5002183: {
        game_origin: 'ugc1',
    },
    UGC_5002185: {
        game_origin: 'ugc1',
    },
    UGC_5002188: {
        game_origin: 'ugc1',
    },
    UGC_5002190: {
        game_origin: 'ugc1',
    },
    UGC_5002204: {
        game_origin: 'ugc1',
    },
    UGC_5002205: {
        game_origin: 'ugc1',
    },
    UGC_5002213: {
        game_origin: 'ugc1',
    },
    UGC_5002218: {
        game_origin: 'ugc1',
    },
    UGC_5002220: {
        game_origin: 'ugc1',
    },
    UGC_5002224: {
        game_origin: 'ugc1',
    },
    UGC_5002225: {
        game_origin: 'ugc1',
    },
    UGC_5002229: {
        game_origin: 'ugc1',
    },
    UGC_5002233: {
        game_origin: 'ugc1',
    },
    UGC_5002235: {
        game_origin: 'ugc1',
    },
    UGC_5002237: {
        game_origin: 'ugc1',
    },
    UGC_5002239: {
        game_origin: 'ugc1',
    },
    UGC_5002251: {
        game_origin: 'ugc1',
    },
    UGC_5002259: {
        game_origin: 'ugc1',
    },
    UGC_5002265: {
        game_origin: 'ugc1',
    },
    UGC_5002278: {
        game_origin: 'ugc1',
    },
    UGC_5002280: {
        game_origin: 'ugc1',
    },
    UGC_5002284: {
        game_origin: 'ugc1',
    },
    UGC_5002285: {
        game_origin: 'ugc1',
    },
    UGC_5002291: {
        game_origin: 'ugc1',
    },
    UGC_5002292: {
        game_origin: 'ugc1',
    },
    UGC_5002293: {
        game_origin: 'ugc1',
    },
    UGC_5002297: {
        game_origin: 'ugc1',
    },
    UGC_5002309: {
        game_origin: 'ugc1',
    },
    UGC_5002315: {
        game_origin: 'ugc1',
    },
    UGC_5002316: {
        game_origin: 'ugc1',
    },
    UGC_5002323: {
        game_origin: 'ugc1',
    },
    UGC_5002325: {
        game_origin: 'ugc1',
    },
    UGC_5002344: {
        game_origin: 'ugc1',
    },
    UGC_5002346: {
        game_origin: 'ugc1',
    },
    UGC_5002353: {
        game_origin: 'ugc1',
    },
    UGC_5002359: {
        game_origin: 'ugc1',
    },
    UGC_5002360: {
        game_origin: 'ugc1',
    },
    UGC_5002361: {
        game_origin: 'ugc1',
    },
    UGC_5002363: {
        game_origin: 'ugc1',
    },
    UGC_5002365: {
        game_origin: 'ugc1',
    },
    UGC_5002396: {
        game_origin: 'ugc1',
    },
    UGC_5002407: {
        game_origin: 'ugc1',
    },
    UGC_5002414: {
        game_origin: 'ugc1',
    },
    UGC_5002420: {
        game_origin: 'ugc1',
    },
    UGC_5002427: {
        game_origin: 'ugc1',
    },
    UGC_5002428: {
        game_origin: 'ugc1',
    },
    UGC_5002429: {
        game_origin: 'ugc1',
    },
    UGC_5002434: {
        game_origin: 'ugc1',
    },
    UGC_5002436: {
        game_origin: 'ugc1',
    },
    UGC_5002438: {
        game_origin: 'ugc1',
    },
    UGC_5002440: {
        game_origin: 'ugc1',
    },
    UGC_5002442: {
        game_origin: 'ugc1',
    },
    UGC_5002445: {
        game_origin: 'ugc1',
    },
    UGC_5002446: {
        game_origin: 'ugc1',
    },
    UGC_5002447: {
        game_origin: 'ugc1',
    },
    UGC_5002456: {
        game_origin: 'ugc1',
    },
    UGC_5002462: {
        game_origin: 'ugc1',
    },
    UGC_5002464: {
        game_origin: 'ugc1',
        encoding: 'latin1',
    },
    UGC_5002469: {
        game_origin: 'ugc1',
    },
    UGC_5002478: {
        game_origin: 'ugc1',
    },
    UGC_5002484: {
        game_origin: 'ugc1',
    },
    UGC_5002495: {
        game_origin: 'ugc1',
    },
    UGC_5002502: {
        game_origin: 'ugc1',
    },
    UGC_5002503: {
        game_origin: 'ugc1',
    },
    UGC_5002511: {
        game_origin: 'ugc1',
    },
    UGC_5002512: {
        game_origin: 'ugc1',
    },
    UGC_5002516: {
        game_origin: 'ugc1',
    },
    UGC_5002526: {
        game_origin: 'ugc1',
    },
    UGC_5002528: {
        game_origin: 'ugc1',
    },
    UGC_5002530: {
        game_origin: 'ugc1',
    },
    UGC_5002536: {
        game_origin: 'ugc1',
    },
    UGC_5002550: {
        game_origin: 'ugc1',
    },
    UGC_5002559: {
        game_origin: 'ugc1',
    },
    UGC_5002560: {
        game_origin: 'ugc1',
    },
    UGC_5002561: {
        game_origin: 'ugc1',
    },
    UGC_5002565: {
        game_origin: 'ugc1',
    },
    UGC_5002569: {
        game_origin: 'ugc1',
    },
    UGC_5002577: {
        game_origin: 'ugc1',
    },
    UGC_5002578: {
        game_origin: 'ugc1',
    },
    UGC_5002582: {
        game_origin: 'ugc1',
    },
    UGC_5002586: {
        game_origin: 'ugc1',
    },
    UGC_5002597: {
        game_origin: 'ugc1',
    },
    UGC_5002598: {
        game_origin: 'ugc1',
    },
    UGC_5002617: {
        game_origin: 'ugc1',
    },
    UGC_5002628: {
        game_origin: 'ugc1',
    },
    UGC_5002629: {
        game_origin: 'ugc1',
    },
    UGC_5002631: {
        game_origin: 'ugc1',
    },
    UGC_5002656: {
        game_origin: 'ugc1',
    },
    UGC_5002657: {
        game_origin: 'ugc1',
    },
    UGC_5002660: {
        game_origin: 'ugc1',
    },
    UGC_5002662: {
        game_origin: 'ugc1',
    },
    UGC_5002664: {
        game_origin: 'ugc1',
    },
    UGC_5002668: {
        game_origin: 'ugc1',
    },
    UGC_5002674: {
        game_origin: 'ugc1',
    },
    UGC_5002676: {
        game_origin: 'ugc1',
    },
    UGC_5002708: {
        game_origin: 'ugc1',
    },
    UGC_5002709: {
        game_origin: 'ugc1',
    },
    UGC_5002714: {
        game_origin: 'ugc1',
    },
    UGC_5002715: {
        game_origin: 'ugc1',
    },
    UGC_5002718: {
        game_origin: 'ugc1',
    },
    UGC_5002721: {
        game_origin: 'ugc1',
    },
    UGC_5002723: {
        game_origin: 'ugc1',
    },
    UGC_5002724: {
        game_origin: 'ugc1',
    },
    UGC_5002736: {
        game_origin: 'ugc1',
    },
    UGC_5002738: {
        game_origin: 'ugc1',
    },
    UGC_5002741: {
        game_origin: 'ugc1',
    },
    UGC_5002742: {
        game_origin: 'ugc1',
    },
    UGC_5002743: {
        game_origin: 'ugc1',
    },
    UGC_5002744: {
        game_origin: 'ugc1',
    },
    UGC_5002751: {
        game_origin: 'ugc1',
    },
    UGC_5002764: {
        game_origin: 'ugc1',
    },
    UGC_5002767: {
        game_origin: 'ugc1',
    },
    UGC_5002768: {
        game_origin: 'ugc1',
    },
    UGC_5002776: {
        game_origin: 'ugc1',
    },
    UGC_5002777: {
        game_origin: 'ugc1',
    },
    UGC_5002786: {
        game_origin: 'ugc1',
    },
    UGC_5002806: {
        game_origin: 'ugc1',
    },
    UGC_5002814: {
        game_origin: 'ugc1',
    },
    UGC_5002815: {
        game_origin: 'ugc1',
    },
    UGC_5002817: {
        game_origin: 'ugc1',
    },
    UGC_5002820: {
        game_origin: 'ugc1',
    },
    UGC_5002822: {
        game_origin: 'ugc1',
    },
    UGC_5002823: {
        game_origin: 'ugc1',
    },
    UGC_5002834: {
        game_origin: 'ugc1',
    },
    UGC_5002839: {
        game_origin: 'ugc1',
    },
    UGC_5002844: {
        game_origin: 'ugc1',
    },
    UGC_5002847: {
        game_origin: 'ugc1',
    },
    UGC_5002868: {
        game_origin: 'ugc1',
    },
    UGC_5002881: {
        game_origin: 'ugc1',
    },
    UGC_5002882: {
        game_origin: 'ugc1',
    },
    UGC_5002884: {
        game_origin: 'ugc1',
    },
    UGC_5002886: {
        game_origin: 'ugc1',
    },
    UGC_5002892: {
        game_origin: 'ugc1',
    },
    UGC_5002893: {
        game_origin: 'ugc1',
    },
    UGC_5002905: {
        game_origin: 'ugc1',
    },
    UGC_5002911: {
        game_origin: 'ugc1',
    },
    UGC_5002920: {
        game_origin: 'ugc1',
    },
    UGC_5002926: {
        game_origin: 'ugc1',
    },
    UGC_5002929: {
        game_origin: 'ugc1',
    },
    UGC_5002932: {
        game_origin: 'ugc1',
    },
    UGC_5002933: {
        game_origin: 'ugc1',
    },
    UGC_5002938: {
        game_origin: 'ugc1',
    },
    UGC_5002948: {
        game_origin: 'ugc1',
    },
    UGC_5002949: {
        game_origin: 'ugc1',
    },
    UGC_5002969: {
        game_origin: 'ugc1',
    },
    UGC_5002971: {
        game_origin: 'ugc1',
    },
    UGC_5002972: {
        game_origin: 'ugc1',
    },
    UGC_5002980: {
        game_origin: 'ugc1',
    },
    UGC_5002981: {
        game_origin: 'ugc1',
    },
    UGC_5002990: {
        game_origin: 'ugc1',
    },
    UGC_5002994: {
        game_origin: 'ugc1',
    },
    UGC_5002996: {
        game_origin: 'ugc1',
    },
    UGC_5003000: {
        game_origin: 'ugc1',
    },
    UGC_5003011: {
        game_origin: 'ugc1',
    },
    UGC_5003015: {
        game_origin: 'ugc1',
    },
    UGC_5003019: {
        game_origin: 'ugc1',
    },
    UGC_5003030: {
        game_origin: 'ugc1',
    },
    UGC_5003034: {
        game_origin: 'ugc1',
    },
    UGC_5003035: {
        game_origin: 'ugc1',
    },
    UGC_5003052: {
        game_origin: 'ugc1',
    },
    UGC_5003061: {
        game_origin: 'ugc1',
    },
    UGC_5003064: {
        game_origin: 'ugc1',
    },
    UGC_5003067: {
        game_origin: 'ugc1',
    },
    UGC_5003071: {
        game_origin: 'ugc1',
    },
    UGC_5003077: {
        game_origin: 'ugc1',
    },
    UGC_5003079: {
        game_origin: 'ugc1',
    },
    UGC_5003080: {
        game_origin: 'ugc1',
    },
    UGC_5003085: {
        game_origin: 'ugc1',
    },
    UGC_5003091: {
        game_origin: 'ugc1',
    },
    UGC_5003092: {
        game_origin: 'ugc1',
    },
    UGC_5003093: {
        game_origin: 'ugc1',
    },
    UGC_5003094: {
        game_origin: 'ugc1',
    },
    UGC_5003095: {
        game_origin: 'ugc1',
    },
    UGC_5003099: {
        game_origin: 'ugc1',
    },
    UGC_5003100: {
        game_origin: 'ugc1',
    },
    UGC_5003103: {
        game_origin: 'ugc1',
    },
    UGC_5003105: {
        game_origin: 'ugc1',
    },
    UGC_5003116: {
        game_origin: 'ugc1',
    },
    UGC_5003117: {
        game_origin: 'ugc1',
    },
    UGC_5003120: {
        game_origin: 'ugc1',
    },
    UGC_5003121: {
        game_origin: 'ugc1',
    },
    UGC_5003122: {
        game_origin: 'ugc1',
    },
    UGC_5003123: {
        game_origin: 'ugc1',
    },
    UGC_5003128: {
        game_origin: 'ugc1',
    },
    UGC_5003129: {
        game_origin: 'ugc1',
    },
    UGC_5003146: {
        game_origin: 'ugc1',
    },
    UGC_5003151: {
        game_origin: 'ugc1',
    },
    UGC_5003154: {
        game_origin: 'ugc1',
    },
    UGC_5003157: {
        game_origin: 'ugc1',
    },
    UGC_5003176: {
        game_origin: 'ugc1',
    },
    UGC_5003182: {
        game_origin: 'ugc1',
    },
    UGC_5003183: {
        game_origin: 'ugc1',
    },
    UGC_5003184: {
        game_origin: 'ugc1',
    },
    UGC_5003199: {
        game_origin: 'ugc1',
    },
    UGC_5003204: {
        game_origin: 'ugc1',
    },
    UGC_5003207: {
        game_origin: 'ugc1',
    },
    UGC_5003208: {
        game_origin: 'ugc1',
    },
    UGC_5003209: {
        game_origin: 'ugc1',
    },
    UGC_5003211: {
        game_origin: 'ugc1',
    },
    UGC_5003212: {
        game_origin: 'ugc1',
    },
    UGC_5003213: {
        game_origin: 'ugc1',
    },
    UGC_5003216: {
        game_origin: 'ugc1',
    },
    UGC_5003224: {
        game_origin: 'ugc1',
    },
    UGC_5003225: {
        game_origin: 'ugc1',
    },
    UGC_5003228: {
        game_origin: 'ugc1',
    },
    UGC_5003229: {
        game_origin: 'ugc1',
    },
    UGC_5003230: {
        game_origin: 'ugc1',
    },
    UGC_5003238: {
        game_origin: 'ugc1',
    },
    UGC_5003249: {
        game_origin: 'ugc1',
    },
    UGC_5003262: {
        game_origin: 'ugc1',
    },
    UGC_5003263: {
        game_origin: 'ugc1',
    },
    UGC_5003265: {
        game_origin: 'ugc1',
    },
    UGC_5003266: {
        game_origin: 'ugc1',
    },
    UGC_5003268: {
        game_origin: 'ugc1',
    },
    UGC_5003278: {
        game_origin: 'ugc1',
    },
    UGC_5003280: {
        game_origin: 'ugc1',
    },
    UGC_5003281: {
        game_origin: 'ugc1',
    },
    UGC_5003286: {
        game_origin: 'ugc1',
    },
    UGC_5003294: {
        game_origin: 'ugc1',
    },
    UGC_5003296: {
        game_origin: 'ugc1',
    },
    UGC_5003299: {
        game_origin: 'ugc1',
    },
    UGC_5003300: {
        game_origin: 'ugc1',
    },
    UGC_5003305: {
        game_origin: 'ugc1',
    },
    UGC_5003307: {
        game_origin: 'ugc1',
    },
    UGC_5003313: {
        game_origin: 'ugc1',
    },
    UGC_5003320: {
        game_origin: 'ugc1',
    },
    UGC_5003324: {
        game_origin: 'ugc1',
    },
    UGC_5003329: {
        game_origin: 'ugc1',
    },
    UGC_5003330: {
        game_origin: 'ugc1',
    },
    UGC_5003338: {
        game_origin: 'ugc1',
    },
    UGC_5003339: {
        game_origin: 'ugc1',
    },
    UGC_5003342: {
        game_origin: 'ugc1',
    },
    UGC_5003344: {
        game_origin: 'ugc1',
    },
    UGC_5003347: {
        game_origin: 'ugc1',
    },
    UGC_5003348: {
        game_origin: 'ugc1',
    },
    UGC_5003351: {
        game_origin: 'ugc1',
    },
    UGC_5003352: {
        game_origin: 'ugc1',
    },
    UGC_5003355: {
        game_origin: 'ugc1',
    },
    UGC_5003362: {
        game_origin: 'ugc1',
    },
    UGC_5003364: {
        encoding: 'latin1',
        game_origin: 'ugc1',
    },
    UGC_5003366: {
        game_origin: 'ugc1',
    },
    UGC_5003367: {
        game_origin: 'ugc1',
    },
    UGC_5003376: {
        game_origin: 'ugc1',
    },
    UGC_5003388: {
        game_origin: 'ugc1',
    },
    UGC_5003390: {
        game_origin: 'ugc1',
    },
    UGC_5003394: {
        game_origin: 'ugc1',
    },
    UGC_5003400: {
        game_origin: 'ugc1',
    },
    UGC_5003402: {
        game_origin: 'ugc1',
    },
    UGC_5003403: {
        game_origin: 'ugc1',
    },
    UGC_5003420: {
        game_origin: 'ugc1',
    },
    UGC_5003421: {
        game_origin: 'ugc1',
    },
    UGC_5003423: {
        game_origin: 'ugc1',
    },
    UGC_5003425: {
        game_origin: 'ugc1',
    },
    UGC_5003426: {
        game_origin: 'ugc1',
    },
    UGC_5003428: {
        game_origin: 'ugc1',
    },
    UGC_5003447: {
        game_origin: 'ugc1',
    },
    UGC_5003454: {
        game_origin: 'ugc1',
    },
    UGC_5003462: {
        game_origin: 'ugc1',
    },
    UGC_5003467: {
        game_origin: 'ugc1',
    },
    UGC_5003472: {
        game_origin: 'ugc1',
    },
    UGC_5003474: {
        game_origin: 'ugc1',
    },
    UGC_5003475: {
        game_origin: 'ugc1',
    },
    UGC_5003481: {
        game_origin: 'ugc1',
    },
    UGC_5003484: {
        game_origin: 'ugc1',
    },
    UGC_5003492: {
        game_origin: 'ugc1',
    },
    UGC_5003493: {
        game_origin: 'ugc1',
    },
    UGC_5003497: {
        game_origin: 'ugc1',
    },
    UGC_5003500: {
        game_origin: 'ugc1',
    },
    UGC_5003502: {
        game_origin: 'ugc1',
    },
    UGC_5003503: {
        game_origin: 'ugc1',
    },
    UGC_5003518: {
        game_origin: 'ugc1',
    },
    UGC_5003526: {
        game_origin: 'ugc1',
    },
    UGC_5003527: {
        game_origin: 'ugc1',
    },
    UGC_5003529: {
        game_origin: 'ugc1',
    },
    UGC_5003532: {
        game_origin: 'ugc1',
    },
    UGC_5003536: {
        game_origin: 'ugc1',
    },
    UGC_5003543: {
        game_origin: 'ugc1',
    },
    UGC_5003547: {
        game_origin: 'ugc1',
    },
    UGC_5003563: {
        game_origin: 'ugc1',
    },
    UGC_5003574: {
        game_origin: 'ugc1',
    },
    UGC_5003585: {
        game_origin: 'ugc1',
    },
    UGC_5003590: {
        game_origin: 'ugc1',
    },
    UGC_5003596: {
        game_origin: 'ugc1',
    },
    UGC_5003609: {
        game_origin: 'ugc1',
    },
    UGC_5003610: {
        game_origin: 'ugc1',
    },
    UGC_5003611: {
        game_origin: 'ugc1',
    },
    UGC_5003616: {
        game_origin: 'ugc1',
    },
    UGC_5003622: {
        game_origin: 'ugc1',
    },
    UGC_5003623: {
        game_origin: 'ugc1',
    },
    UGC_5003624: {
        game_origin: 'ugc1',
    },
    UGC_5003632: {
        game_origin: 'ugc1',
    },
    UGC_5003634: {
        game_origin: 'ugc1',
    },
    UGC_5003635: {
        game_origin: 'ugc1',
    },
    UGC_5003653: {
        game_origin: 'ugc1',
    },
    UGC_5003670: {
        game_origin: 'ugc1',
    },
    UGC_5003671: {
        game_origin: 'ugc1',
    },
    UGC_5003675: {
        game_origin: 'ugc1',
    },
    UGC_5003677: {
        game_origin: 'ugc1',
    },
    UGC_5003692: {
        game_origin: 'ugc1',
    },
    UGC_5003695: {
        game_origin: 'ugc1',
    },
    UGC_5003696: {
        game_origin: 'ugc1',
    },
    UGC_5003697: {
        game_origin: 'ugc1',
    },
    UGC_5003701: {
        game_origin: 'ugc1',
    },
    UGC_5003707: {
        game_origin: 'ugc1',
    },
    UGC_5003708: {
        game_origin: 'ugc1',
    },
    UGC_5003723: {
        game_origin: 'ugc1',
    },
    UGC_5003724: {
        game_origin: 'ugc1',
    },
    UGC_5003726: {
        game_origin: 'ugc1',
    },
    UGC_5003729: {
        game_origin: 'ugc1',
    },
    UGC_5003730: {
        game_origin: 'ugc1',
    },
    UGC_5003761: {
        game_origin: 'ugc1',
    },
    UGC_5003766: {
        game_origin: 'ugc1',
    },
    UGC_5003773: {
        game_origin: 'ugc1',
    },
    UGC_5003777: {
        game_origin: 'ugc1',
    },
    UGC_5003782: {
        game_origin: 'ugc1',
    },
    UGC_5003787: {
        game_origin: 'ugc1',
    },
    UGC_5003790: {
        game_origin: 'ugc1',
    },
    UGC_5003797: {
        game_origin: 'ugc1',
    },
    UGC_5003799: {
        game_origin: 'ugc1',
    },
    UGC_5003807: {
        game_origin: 'ugc1',
    },
    UGC_5003808: {
        game_origin: 'ugc1',
    },
    UGC_5003813: {
        game_origin: 'ugc1',
    },
    UGC_5003815: {
        game_origin: 'ugc1',
    },
    UGC_5003816: {
        game_origin: 'ugc1',
    },
    UGC_5003832: {
        game_origin: 'ugc1',
    },
    UGC_5003842: {
        game_origin: 'ugc1',
    },
    UGC_5003845: {
        game_origin: 'ugc1',
    },
    UGC_5003854: {
        game_origin: 'ugc1',
    },
    UGC_5003860: {
        game_origin: 'ugc1',
    },
    UGC_5003861: {
        game_origin: 'ugc1',
    },
    UGC_5003866: {
        game_origin: 'ugc1',
    },
    UGC_5003867: {
        game_origin: 'ugc1',
    },
    UGC_5003868: {
        game_origin: 'ugc1',
    },
    UGC_5003870: {
        game_origin: 'ugc1',
    },
    UGC_5003871: {
        game_origin: 'ugc1',
    },
    UGC_5003883: {
        game_origin: 'ugc1',
    },
    UGC_5003885: {
        game_origin: 'ugc1',
    },
    UGC_5003886: {
        game_origin: 'ugc1',
    },
    UGC_5003888: {
        game_origin: 'ugc1',
    },
    UGC_5003889: {
        game_origin: 'ugc1',
    },
    UGC_5003898: {
        game_origin: 'ugc1',
    },
    UGC_5003905: {
        game_origin: 'ugc1',
    },
    UGC_5003919: {
        game_origin: 'ugc1',
    },
    UGC_5003921: {
        game_origin: 'ugc1',
    },
    UGC_5003928: {
        game_origin: 'ugc1',
    },
    UGC_5003931: {
        game_origin: 'ugc1',
    },
    UGC_5003932: {
        game_origin: 'ugc1',
    },
    UGC_5003933: {
        game_origin: 'ugc1',
    },
    UGC_5003941: {
        game_origin: 'ugc1',
    },
    UGC_5003943: {
        game_origin: 'ugc1',
    },
    UGC_5003944: {
        game_origin: 'ugc1',
    },
    UGC_5003961: {
        game_origin: 'ugc1',
    },
    UGC_5003969: {
        game_origin: 'ugc1',
    },
    UGC_5003974: {
        game_origin: 'ugc1',
    },
    UGC_5003977: {
        game_origin: 'ugc1',
    },
    UGC_5003978: {
        game_origin: 'ugc1',
    },
    UGC_5003981: {
        game_origin: 'ugc1',
    },
    UGC_5003989: {
        game_origin: 'ugc1',
    },
    UGC_5003994: {
        game_origin: 'ugc1',
    },
    UGC_5003998: {
        game_origin: 'ugc1',
    },
    UGC_5004005: {
        game_origin: 'ugc1',
    },
    UGC_5004007: {
        game_origin: 'ugc1',
    },
    UGC_5004013: {
        game_origin: 'ugc1',
    },
    UGC_5004020: {
        game_origin: 'ugc1',
    },
    UGC_5004024: {
        game_origin: 'ugc1',
    },
    UGC_5004028: {
        game_origin: 'ugc1',
    },
    UGC_5004031: {
        game_origin: 'ugc1',
    },
    UGC_5004043: {
        game_origin: 'ugc1',
    },
    UGC_5004044: {
        game_origin: 'ugc1',
    },
    UGC_5004045: {
        game_origin: 'ugc1',
    },
    UGC_5004062: {
        game_origin: 'ugc1',
    },
    UGC_5004068: {
        game_origin: 'ugc1',
    },
    UGC_5004072: {
        game_origin: 'ugc1',
    },
    UGC_5004073: {
        game_origin: 'ugc1',
    },
    UGC_5004078: {
        game_origin: 'ugc1',
    },
    UGC_5004079: {
        game_origin: 'ugc1',
    },
    UGC_5004086: {
        game_origin: 'ugc1',
    },
    UGC_5004087: {
        game_origin: 'ugc1',
    },
    UGC_5004092: {
        game_origin: 'ugc1',
    },
    UGC_5004094: {
        game_origin: 'ugc1',
    },
    UGC_5004098: {
        game_origin: 'ugc1',
    },
    UGC_5004099: {
        game_origin: 'ugc1',
    },
    UGC_5004105: {
        game_origin: 'ugc1',
    },
    UGC_5004113: {
        game_origin: 'ugc1',
    },
    UGC_5004119: {
        game_origin: 'ugc1',
    },
    UGC_5004124: {
        game_origin: 'ugc1',
    },
    UGC_5004126: {
        game_origin: 'ugc1',
    },
    UGC_5004128: {
        game_origin: 'ugc1',
    },
    UGC_5004132: {
        game_origin: 'ugc1',
    },
    UGC_5004135: {
        game_origin: 'ugc1',
    },
    UGC_5004136: {
        game_origin: 'ugc1',
    },
    UGC_5004138: {
        game_origin: 'ugc1',
    },
    UGC_5004143: {
        game_origin: 'ugc1',
    },
    UGC_5004153: {
        game_origin: 'ugc1',
    },
    UGC_5004155: {
        game_origin: 'ugc1',
    },
    UGC_5004163: {
        game_origin: 'ugc1',
    },
    UGC_5004166: {
        game_origin: 'ugc1',
    },
    UGC_5004173: {
        game_origin: 'ugc1',
    },
    UGC_5004175: {
        game_origin: 'ugc1',
    },
    UGC_5004180: {
        game_origin: 'ugc1',
    },
    UGC_5004184: {
        game_origin: 'ugc1',
    },
    UGC_5004186: {
        game_origin: 'ugc1',
    },
    UGC_5004200: {
        game_origin: 'ugc1',
    },
    UGC_5004202: {
        game_origin: 'ugc1',
    },
    UGC_5004205: {
        game_origin: 'ugc1',
    },
    UGC_5004209: {
        game_origin: 'ugc1',
    },
    UGC_5004211: {
        game_origin: 'ugc1',
    },
    UGC_5004214: {
        game_origin: 'ugc1',
    },
    UGC_5004216: {
        game_origin: 'ugc1',
    },
    UGC_5004219: {
        game_origin: 'ugc1',
    },
    UGC_5004227: {
        game_origin: 'ugc1',
    },
    UGC_5004232: {
        game_origin: 'ugc1',
    },
    UGC_5004235: {
        game_origin: 'ugc1',
    },
    UGC_5004246: {
        game_origin: 'ugc1',
    },
    UGC_5004254: {
        game_origin: 'ugc1',
    },
    UGC_5004258: {
        game_origin: 'ugc1',
    },
    UGC_5004267: {
        game_origin: 'ugc1',
    },
    UGC_5004271: {
        game_origin: 'ugc1',
    },
    UGC_5004281: {
        game_origin: 'ugc1',
    },
    UGC_5004298: {
        game_origin: 'ugc1',
    },
    UGC_5004305: {
        game_origin: 'ugc1',
    },
    UGC_5004307: {
        game_origin: 'ugc1',
    },
    UGC_5004310: {
        game_origin: 'ugc1',
    },
    UGC_5004311: {
        game_origin: 'ugc1',
    },
    UGC_5004319: {
        game_origin: 'ugc1',
    },
    UGC_5004326: {
        game_origin: 'ugc1',
    },
    UGC_5004327: {
        game_origin: 'ugc1',
    },
    UGC_5004328: {
        game_origin: 'ugc1',
    },
    UGC_5004336: {
        game_origin: 'ugc1',
    },
    UGC_5004345: {
        game_origin: 'ugc1',
    },
    UGC_5004354: {
        game_origin: 'ugc1',
    },
    UGC_5004356: {
        game_origin: 'ugc1',
    },
    UGC_5004365: {
        game_origin: 'ugc1',
    },
    UGC_5004371: {
        game_origin: 'ugc1',
    },
    UGC_5004381: {
        game_origin: 'ugc1',
    },
    UGC_5004394: {
        game_origin: 'ugc1',
    },
    UGC_5004397: {
        encoding: 'latin1',
        game_origin: 'ugc1',
    },
    UGC_5004402: {
        game_origin: 'ugc1',
    },
    UGC_5004413: {
        game_origin: 'ugc1',
    },
    UGC_5004419: {
        game_origin: 'ugc1',
    },
    UGC_5004431: {
        game_origin: 'ugc1',
    },
    UGC_5004435: {
        game_origin: 'ugc1',
    },
    UGC_5004439: {
        game_origin: 'ugc1',
    },
    UGC_5004443: {
        game_origin: 'ugc1',
    },
    UGC_5004449: {
        game_origin: 'ugc1',
    },
    UGC_5004461: {
        game_origin: 'ugc1',
    },
    UGC_5004463: {
        game_origin: 'ugc1',
    },
    UGC_5004489: {
        game_origin: 'ugc1',
    },
    UGC_5004493: {
        game_origin: 'ugc1',
    },
    UGC_5004498: {
        game_origin: 'ugc1',
    },
    UGC_5004504: {
        game_origin: 'ugc1',
    },
    UGC_5004509: {
        game_origin: 'ugc1',
    },
    UGC_5004510: {
        game_origin: 'ugc1',
    },
    UGC_5004522: {
        game_origin: 'ugc1',
    },
    UGC_5004523: {
        game_origin: 'ugc1',
    },
    UGC_5004524: {
        game_origin: 'ugc1',
    },
    UGC_5004530: {
        game_origin: 'ugc1',
    },
    UGC_5004540: {
        game_origin: 'ugc1',
    },
    UGC_5004543: {
        game_origin: 'ugc1',
    },
    UGC_5004546: {
        game_origin: 'ugc1',
    },
    UGC_5004560: {
        game_origin: 'ugc1',
    },
    UGC_5004565: {
        game_origin: 'ugc1',
    },
    UGC_5004566: {
        game_origin: 'ugc1',
    },
    UGC_5004569: {
        game_origin: 'ugc1',
    },
    UGC_5004583: {
        game_origin: 'ugc1',
    },
    UGC_5004586: {
        game_origin: 'ugc1',
    },
    UGC_5004592: {
        game_origin: 'ugc1',
    },
    UGC_5004605: {
        game_origin: 'ugc1',
    },
    UGC_5004608: {
        game_origin: 'ugc1',
    },
    UGC_5004616: {
        game_origin: 'ugc1',
    },
    UGC_5004627: {
        game_origin: 'ugc1',
    },
    UGC_5004628: {
        game_origin: 'ugc1',
    },
    UGC_5004632: {
        game_origin: 'ugc1',
    },
    UGC_5004643: {
        game_origin: 'ugc1',
    },
    UGC_5004645: {
        game_origin: 'ugc1',
    },
    UGC_5004647: {
        game_origin: 'ugc1',
    },
    UGC_5004658: {
        game_origin: 'ugc1',
    },
    UGC_5004664: {
        game_origin: 'ugc1',
    },
    UGC_5004666: {
        game_origin: 'ugc1',
    },
    UGC_5004668: {
        game_origin: 'ugc1',
    },
    UGC_5004670: {
        game_origin: 'ugc1',
    },
    UGC_5004678: {
        name: 'Esto ya lo Toqué Mañana',
        artist: 'Octavio Suñé',
        game_origin: 'ugc1',
    },
    UGC_5004686: {
        game_origin: 'ugc1',
    },
    UGC_5004689: {
        game_origin: 'ugc1',
        artist: 'Judy Buendía y Los Impostores',
    },
    UGC_5004690: {
        game_origin: 'ugc1',
    },
    UGC_5004691: {
        game_origin: 'ugc1',
    },
    UGC_5004692: {
        game_origin: 'ugc1',
    },
    UGC_5004693: {
        game_origin: 'ugc1',
    },
    UGC_5004705: {
        game_origin: 'ugc1',
    },
    UGC_5004718: {
        game_origin: 'ugc1',
    },
    UGC_5004719: {
        game_origin: 'ugc1',
    },
    UGC_5004722: {
        game_origin: 'ugc1',
    },
    UGC_5004723: {
        game_origin: 'ugc1',
    },
    UGC_5004728: {
        game_origin: 'ugc1',
    },
    UGC_5004738: {
        game_origin: 'ugc1',
    },
    UGC_5004739: {
        game_origin: 'ugc1',
    },
    UGC_5004748: {
        game_origin: 'ugc1',
    },
    UGC_5004752: {
        game_origin: 'ugc1',
    },
    UGC_5004767: {
        game_origin: 'ugc1',
    },
    UGC_5004778: {
        game_origin: 'ugc1',
    },
    UGC_5004779: {
        game_origin: 'ugc1',
    },
    UGC_5004788: {
        game_origin: 'ugc1',
    },
    UGC_5004793: {
        game_origin: 'ugc1',
    },
    UGC_5004820: {
        game_origin: 'ugc1',
    },
    UGC_5004826: {
        game_origin: 'ugc1',
    },
    UGC_5004828: {
        game_origin: 'ugc1',
    },
    UGC_5004835: {
        game_origin: 'ugc1',
    },
    UGC_5004837: {
        game_origin: 'ugc1',
    },
    UGC_5004841: {
        game_origin: 'ugc1',
    },
    UGC_5004846: {
        game_origin: 'ugc1',
    },
    UGC_5004848: {
        game_origin: 'ugc1',
    },
    UGC_5004849: {
        game_origin: 'ugc1',
    },
    UGC_5004853: {
        game_origin: 'ugc1',
    },
    UGC_5004855: {
        game_origin: 'ugc1',
    },
    UGC_5004868: {
        game_origin: 'ugc1',
    },
    UGC_5004875: {
        game_origin: 'ugc1',
    },
    UGC_5004877: {
        game_origin: 'ugc1',
    },
    UGC_5004878: {
        game_origin: 'ugc1',
    },
    UGC_5004879: {
        game_origin: 'ugc1',
    },
    UGC_5004880: {
        game_origin: 'ugc1',
    },
    UGC_5004881: {
        game_origin: 'ugc1',
    },
    UGC_5004885: {
        game_origin: 'ugc1',
    },
    UGC_5004886: {
        game_origin: 'ugc1',
    },
    UGC_5004892: {
        game_origin: 'ugc1',
    },
    UGC_5004893: {
        game_origin: 'ugc1',
    },
    UGC_5004895: {
        game_origin: 'ugc1',
    },
    UGC_5004897: {
        game_origin: 'ugc1',
    },
    UGC_5004901: {
        game_origin: 'ugc1',
    },
    UGC_5004902: {
        game_origin: 'ugc1',
    },
    UGC_5004904: {
        game_origin: 'ugc1',
    },
    UGC_5004907: {
        game_origin: 'ugc1',
    },
    UGC_5004908: {
        game_origin: 'ugc1',
    },
    UGC_5004911: {
        game_origin: 'ugc1',
    },
    UGC_5004912: {
        game_origin: 'ugc1',
    },
    UGC_5004913: {
        game_origin: 'ugc1',
    },
    UGC_5004914: {
        game_origin: 'ugc1',
    },
    UGC_5004916: {
        game_origin: 'ugc1',
    },
    UGC_5004917: {
        game_origin: 'ugc1',
    },
    UGC_5004918: {
        game_origin: 'ugc1',
    },
    UGC_5004919: {
        game_origin: 'ugc1',
    },
    UGC_5004920: {
        game_origin: 'ugc1',
    },
    UGC_5004921: {
        game_origin: 'ugc1',
    },
    UGC_5004922: {
        game_origin: 'ugc1',
    },
    UGC_5004923: {
        game_origin: 'ugc1',
    },
    UGC_5004924: {
        game_origin: 'ugc1',
    },
    UGC_5004925: {
        game_origin: 'ugc1',
    },
    UGC_5004926: {
        game_origin: 'ugc1',
    },
    UGC_5004927: {
        game_origin: 'ugc1',
    },
    UGC_5004928: {
        game_origin: 'ugc1',
    },
    UGC_5004930: {
        game_origin: 'ugc1',
    },
    UGC_5004931: {
        game_origin: 'ugc1',
    },
    UGC_5004932: {
        game_origin: 'ugc1',
    },
    UGC_5004933: {
        game_origin: 'ugc1',
    },
    UGC_5004939: {
        game_origin: 'ugc1',
    },
    UGC_5004940: {
        game_origin: 'ugc1',
    },
    UGC_5004941: {
        game_origin: 'ugc1',
    },
    UGC_5004942: {
        game_origin: 'ugc1',
    },
    UGC_5004948: {
        game_origin: 'ugc1',
    },
    UGC_5004953: {
        game_origin: 'ugc1',
    },
    UGC_5004960: {
        game_origin: 'ugc1',
    },
    UGC_5004965: {
        game_origin: 'ugc1',
    },
    UGC_5004966: {
        game_origin: 'ugc1',
    },
    UGC_5004970: {
        game_origin: 'ugc1',
    },
    UGC_5004975: {
        game_origin: 'ugc1',
    },
    UGC_5004978: {
        game_origin: 'ugc1',
    },
    UGC_5004980: {
        game_origin: 'ugc1',
    },
    UGC_5004983: {
        game_origin: 'ugc1',
    },
    UGC_5004986: {
        game_origin: 'ugc1',
    },
    UGC_5004987: {
        game_origin: 'ugc1',
    },
    UGC_5004989: {
        game_origin: 'ugc1',
    },
    UGC_5004990: {
        game_origin: 'ugc1',
    },
    UGC_5004999: {
        game_origin: 'ugc1',
    },
    UGC_5005000: {
        game_origin: 'ugc1',
    },
    UGC_5005006: {
        game_origin: 'ugc1',
    },
    UGC_5005009: {
        game_origin: 'ugc1',
    },
    UGC_5005010: {
        game_origin: 'ugc1',
    },
    UGC_5005016: {
        game_origin: 'ugc1',
    },
    UGC_5005017: {
        game_origin: 'ugc1',
    },
    UGC_5005021: {
        game_origin: 'ugc1',
    },
    UGC_5005029: {
        game_origin: 'ugc1',
    },
    UGC_5005033: {
        game_origin: 'ugc1',
    },
    UGC_5005034: {
        game_origin: 'ugc1',
    },
    UGC_5005037: {
        game_origin: 'ugc1',
    },
    UGC_5005047: {
        game_origin: 'ugc1',
    },
    UGC_5005050: {
        game_origin: 'ugc1',
    },
    UGC_5005051: {
        game_origin: 'ugc1',
    },
    UGC_5005056: {
        game_origin: 'ugc1',
    },
    UGC_5005057: {
        game_origin: 'ugc1',
    },
    UGC_5005058: {
        game_origin: 'ugc1',
    },
    UGC_5005059: {
        game_origin: 'ugc1',
    },
    UGC_5005062: {
        game_origin: 'ugc1',
    },
    UGC_5005063: {
        game_origin: 'ugc1',
    },
    UGC_5005064: {
        game_origin: 'ugc1',
    },
    UGC_5005069: {
        game_origin: 'ugc1',
    },
    UGC_5005073: {
        game_origin: 'ugc1',
    },
    UGC_5005077: {
        game_origin: 'ugc1',
    },
    UGC_5005079: {
        game_origin: 'ugc1',
    },
    UGC_5005080: {
        game_origin: 'ugc1',
    },
    UGC_5005082: {
        game_origin: 'ugc1',
    },
    UGC_5005085: {
        game_origin: 'ugc1',
    },
    UGC_5005086: {
        game_origin: 'ugc1',
    },
    UGC_5005089: {
        game_origin: 'ugc1',
    },
    UGC_5005092: {
        game_origin: 'ugc1',
    },
    UGC_5005095: {
        game_origin: 'ugc1',
    },
    UGC_5005097: {
        game_origin: 'ugc1',
    },
    UGC_5005102: {
        game_origin: 'ugc1',
    },
    UGC_5005104: {
        game_origin: 'ugc1',
    },
    UGC_5005107: {
        game_origin: 'ugc1',
    },
    UGC_5005114: {
        game_origin: 'ugc1',
    },
    UGC_5005116: {
        game_origin: 'ugc1',
    },
    UGC_5005118: {
        game_origin: 'ugc1',
    },
    UGC_5005119: {
        game_origin: 'ugc1',
    },
    UGC_5005120: {
        game_origin: 'ugc1',
    },
    UGC_5005123: {
        game_origin: 'ugc1',
    },
    UGC_5005127: {
        game_origin: 'ugc1',
    },
    UGC_5005131: {
        game_origin: 'ugc1',
        name: 'La Fórmula',
        artist: 'Sintonía Retro',
    },
    UGC_5005132: {
        game_origin: 'ugc1',
    },
    UGC_5005133: {
        name: 'Caíamos',
        artist: 'Octavio Suñé',
        game_origin: 'ugc1',
    },
    UGC_5005136: {
        game_origin: 'ugc1',
    },
    UGC_5005137: {
        game_origin: 'ugc1',
    },
    UGC_5005138: {
        game_origin: 'ugc1',
    },
    UGC_5005140: {
        game_origin: 'ugc1',
    },
    UGC_5005141: {
        game_origin: 'ugc1',
    },
    UGC_5005142: {
        game_origin: 'ugc1',
    },
    UGC_5005143: {
        game_origin: 'ugc1',
    },
    UGC_5005146: {
        game_origin: 'ugc1',
    },
    UGC_5005148: {
        game_origin: 'ugc1',
        name: 'Plátanos Con Sangre',
    },
    UGC_5005149: {
        game_origin: 'ugc1',
    },
    UGC_5005151: {
        game_origin: 'ugc1',
    },
    UGC_5005152: {
        game_origin: 'ugc1',
    },
    UGC_5005154: {
        game_origin: 'ugc1',
    },
    UGC_5005155: {
        game_origin: 'ugc1',
    },
    UGC_5005158: {
        game_origin: 'ugc1',
    },
    UGC_5005161: {
        game_origin: 'ugc1',
    },
    UGC_5005164: {
        game_origin: 'ugc1',
    },
    UGC_5005166: {
        game_origin: 'ugc1',
    },
    UGC_5005168: {
        game_origin: 'ugc1',
    },
    UGC_5005169: {
        game_origin: 'ugc1',
    },
    UGC_5005170: {
        game_origin: 'ugc1',
        artist: 'Judy Buendía y Los Impostores',
    },
    UGC_5005174: {
        game_origin: 'ugc1',
    },
    UGC_5005176: {
        game_origin: 'ugc1',
    },
    UGC_5005177: {
        game_origin: 'ugc1',
    },
    UGC_5005178: {
        game_origin: 'ugc1',
    },
    UGC_5005180: {
        game_origin: 'ugc1',
    },
    UGC_5005181: {
        game_origin: 'ugc1',
    },
    UGC_5005182: {
        game_origin: 'ugc1',
    },
    UGC_5005183: {
        game_origin: 'ugc1',
    },
    UGC_5005189: {
        game_origin: 'ugc1',
    },
    UGC_5005190: {
        game_origin: 'ugc1',
    },
    UGC_5005191: {
        game_origin: 'ugc1',
    },
    UGC_5005192: {
        game_origin: 'ugc1',
    },
    UGC_5005194: {
        game_origin: 'ugc1',
    },
    UGC_5005195: {
        game_origin: 'ugc1',
    },
    UGC_5005197: {
        game_origin: 'ugc1',
    },
    UGC_5005201: {
        game_origin: 'ugc1',
    },
    UGC_5005202: {
        game_origin: 'ugc1',
    },
    UGC_5005204: {
        game_origin: 'ugc1',
    },
    UGC_5005207: {
        game_origin: 'ugc1',
    },
    UGC_5005212: {
        game_origin: 'ugc1',
    },
    UGC_5005213: {
        game_origin: 'ugc1',
    },
    UGC_5005214: {
        game_origin: 'ugc1',
    },
    UGC_5005215: {
        game_origin: 'ugc1',
    },
    UGC_5005216: {
        game_origin: 'ugc1',
    },
    UGC_5005217: {
        game_origin: 'ugc1',
    },
    UGC_5005219: {
        game_origin: 'ugc1',
    },
    UGC_5005221: {
        game_origin: 'ugc1',
    },
    UGC_5005224: {
        game_origin: 'ugc1',
    },
    UGC_5005225: {
        game_origin: 'ugc1',
    },
    UGC_5005226: {
        game_origin: 'ugc1',
    },
    UGC_5005227: {
        game_origin: 'ugc1',
    },
    UGC_5005228: {
        game_origin: 'ugc1',
    },
    UGC_5005230: {
        game_origin: 'ugc1',
    },
    UGC_5005232: {
        game_origin: 'ugc1',
    },
    UGC_5005234: {
        game_origin: 'ugc1',
    },
    UGC_5005235: {
        game_origin: 'ugc1',
    },
    UGC_5005236: {
        game_origin: 'ugc1',
    },
    UGC_5005238: {
        game_origin: 'ugc1',
    },
    UGC_5005239: {
        game_origin: 'ugc1',
    },
    UGC_5005240: {
        game_origin: 'ugc1',
    },
    UGC_5005247: {
        game_origin: 'ugc1',
    },
    UGC_5005248: {
        game_origin: 'ugc1',
    },
    UGC_5005249: {
        game_origin: 'ugc1',
    },
    UGC_5005250: {
        game_origin: 'ugc1',
    },
    UGC_5005278: {
        game_origin: 'ugc1',
    },
    UGC_5005279: {
        game_origin: 'ugc1',
    },
    UGC_5005285: {
        game_origin: 'ugc1',
    },
    UGC_5005287: {
        game_origin: 'ugc1',
    },
    UGC_5005290: {
        game_origin: 'ugc1',
    },
    UGC_5005292: {
        game_origin: 'ugc1',
    },
    UGC_5005293: {
        game_origin: 'ugc1',
    },
    UGC_5005299: {
        game_origin: 'ugc1',
    },
    UGC_5005304: {
        game_origin: 'ugc1',
    },
    UGC_5005305: {
        game_origin: 'ugc1',
    },
    UGC_5005306: {
        game_origin: 'ugc1',
    },
    UGC_5005322: {
        game_origin: 'ugc1',
    },
    UGC_5005324: {
        game_origin: 'ugc1',
    },
    UGC_5005325: {
        game_origin: 'ugc1',
    },
    UGC_5005328: {
        game_origin: 'ugc1',
    },
    UGC_5005329: {
        game_origin: 'ugc1',
    },
    UGC_5005330: {
        game_origin: 'ugc1',
    },
    UGC_5005332: {
        game_origin: 'ugc1',
    },
    UGC_5005334: {
        game_origin: 'ugc1',
    },
    UGC_5005335: {
        game_origin: 'ugc1',
    },
    UGC_5005337: {
        game_origin: 'ugc1',
    },
    UGC_5005338: {
        game_origin: 'ugc1',
    },
    UGC_5005339: {
        game_origin: 'ugc1',
    },
    UGC_5005340: {
        game_origin: 'ugc1',
    },
    UGC_5005341: {
        game_origin: 'ugc1',
        encoding: 'latin1',
    },
    UGC_5005342: {
        game_origin: 'ugc1',
    },
    UGC_5005344: {
        game_origin: 'ugc1',
    },
    UGC_5005346: {
        game_origin: 'ugc1',
    },
    UGC_5005347: {
        game_origin: 'ugc1',
    },
    UGC_5005348: {
        game_origin: 'ugc1',
    },
    UGC_5005356: {
        game_origin: 'ugc1',
    },
    UGC_5005359: {
        game_origin: 'ugc1',
    },
    UGC_5005360: {
        game_origin: 'ugc1',
    },
    UGC_5005363: {
        game_origin: 'ugc1',
    },
    UGC_5005365: {
        game_origin: 'ugc1',
    },
    UGC_5005366: {
        game_origin: 'ugc1',
    },
    UGC_5005369: {
        game_origin: 'ugc1',
    },
    UGC_5005371: {
        game_origin: 'ugc1',
    },
    UGC_5005373: {
        game_origin: 'ugc1',
    },
    UGC_5005375: {
        game_origin: 'ugc1',
    },
    UGC_5005376: {
        game_origin: 'ugc1',
    },
    UGC_5005378: {
        game_origin: 'ugc1',
    },
    UGC_5005380: {
        game_origin: 'ugc1',
    },
    UGC_5005383: {
        game_origin: 'ugc1',
    },
    UGC_5005384: {
        game_origin: 'ugc1',
    },
    UGC_5005387: {
        game_origin: 'ugc1',
    },
    UGC_5005388: {
        game_origin: 'ugc1',
    },
    UGC_5005389: {
        game_origin: 'ugc1',
    },
    UGC_5005392: {
        game_origin: 'ugc1',
    },
    UGC_5005393: {
        game_origin: 'ugc1',
    },
    UGC_5005395: {
        game_origin: 'ugc1',
    },
    UGC_5005398: {
        game_origin: 'ugc1',
    },
    UGC_5005400: {
        game_origin: 'ugc1',
    },
    UGC_5005401: {
        game_origin: 'ugc1',
    },
    UGC_5005402: {
        game_origin: 'ugc1',
    },
    UGC_5005403: {
        game_origin: 'ugc1',
    },
    UGC_5005404: {
        game_origin: 'ugc1',
    },
    UGC_5005405: {
        game_origin: 'ugc1',
    },
    UGC_5005406: {
        game_origin: 'ugc1',
    },
    UGC_5005410: {
        game_origin: 'ugc1',
    },
    UGC_5005414: {
        game_origin: 'ugc1',
    },
    UGC_5005417: {
        game_origin: 'ugc1',
    },
    UGC_5005420: {
        game_origin: 'ugc1',
    },
    UGC_5005422: {
        game_origin: 'ugc1',
    },
    UGC_5005424: {
        game_origin: 'ugc1',
    },
    UGC_5005427: {
        game_origin: 'ugc1',
    },
    UGC_5005428: {
        game_origin: 'ugc1',
    },
    UGC_5005429: {
        game_origin: 'ugc1',
    },
    UGC_5005431: {
        game_origin: 'ugc1',
    },
    UGC_5005433: {
        game_origin: 'ugc1',
    },
    UGC_5005434: {
        game_origin: 'ugc1',
    },
    UGC_5005436: {
        game_origin: 'ugc1',
    },
    UGC_5005439: {
        game_origin: 'ugc1',
    },
    UGC_5005440: {
        game_origin: 'ugc1',
    },
    UGC_5005441: {
        game_origin: 'ugc1',
    },
    UGC_5005442: {
        game_origin: 'ugc1',
    },
    UGC_5005444: {
        game_origin: 'ugc1',
    },
    UGC_5005445: {
        game_origin: 'ugc1',
    },
    UGC_5005446: {
        game_origin: 'ugc1',
    },
    UGC_5005447: {
        game_origin: 'ugc1',
    },
    UGC_5005448: {
        game_origin: 'ugc1',
    },
    UGC_5005451: {
        game_origin: 'ugc1',
    },
    UGC_5005453: {
        game_origin: 'ugc1',
    },
    UGC_5005454: {
        game_origin: 'ugc1',
    },
    UGC_5005455: {
        game_origin: 'ugc1',
    },
    UGC_5005456: {
        game_origin: 'ugc1',
    },
    UGC_5005461: {
        game_origin: 'ugc1',
    },
    UGC_5005462: {
        game_origin: 'ugc1',
    },
    UGC_5005465: {
        game_origin: 'ugc1',
    },
    UGC_5005479: {
        game_origin: 'ugc1',
    },
    UGC_5005483: {
        game_origin: 'ugc1',
    },
    UGC_5005484: {
        game_origin: 'ugc1',
    },
    UGC_5005485: {
        game_origin: 'ugc1',
    },
    UGC_5011302: {
        game_origin: 'ugc2',
    },
    UGC_5005633: {
        game_origin: 'ugc2',
    },
    UGC_5005691: {
        game_origin: 'ugc2',
    },
    UGC_5005693: {
        game_origin: 'ugc2',
    },
    UGC_5005707: {
        game_origin: 'ugc2',
    },
    UGC_5005720: {
        game_origin: 'ugc2',
    },
    UGC_5005721: {
        game_origin: 'ugc2',
    },
    UGC_5005724: {
        game_origin: 'ugc2',
    },
    UGC_5005735: {
        game_origin: 'ugc2',
    },
    UGC_5005737: {
        game_origin: 'ugc2',
    },
    UGC_5005740: {
        game_origin: 'ugc2',
    },
    UGC_5005746: {
        game_origin: 'ugc2',
    },
    UGC_5005747: {
        game_origin: 'ugc2',
    },
    UGC_5005750: {
        game_origin: 'ugc2',
    },
    UGC_5005751: {
        game_origin: 'ugc2',
    },
    UGC_5005752: {
        game_origin: 'ugc2',
    },
    UGC_5005753: {
        game_origin: 'ugc2',
    },
    UGC_5005756: {
        game_origin: 'ugc2',
    },
    UGC_5005757: {
        game_origin: 'ugc2',
    },
    UGC_5005759: {
        game_origin: 'ugc2',
    },
    UGC_5005760: {
        game_origin: 'ugc2',
    },
    UGC_5005761: {
        game_origin: 'ugc2',
    },
    UGC_5005762: {
        game_origin: 'ugc2',
    },
    UGC_5005765: {
        game_origin: 'ugc2',
    },
    UGC_5005778: {
        game_origin: 'ugc2',
    },
    UGC_5005795: {
        game_origin: 'ugc2',
    },
    UGC_5005796: {
        game_origin: 'ugc2',
    },
    UGC_5005805: {
        game_origin: 'ugc2',
    },
    UGC_5005812: {
        game_origin: 'ugc2',
    },
    UGC_5005816: {
        game_origin: 'ugc2',
    },
    UGC_5005820: {
        game_origin: 'ugc2',
    },
    UGC_5005828: {
        game_origin: 'ugc2',
    },
    UGC_5005837: {
        game_origin: 'ugc2',
    },
    UGC_5005839: {
        game_origin: 'ugc2',
    },
    UGC_5005840: {
        game_origin: 'ugc2',
    },
    UGC_5005848: {
        game_origin: 'ugc2',
    },
    UGC_5005851: {
        game_origin: 'ugc2',
    },
    UGC_5005872: {
        game_origin: 'ugc2',
    },
    UGC_5005893: {
        game_origin: 'ugc2',
    },
    UGC_5005903: {
        game_origin: 'ugc2',
    },
    UGC_5005914: {
        game_origin: 'ugc2',
    },
    UGC_5005919: {
        game_origin: 'ugc2',
    },
    UGC_5005922: {
        game_origin: 'ugc2',
    },
    UGC_5005933: {
        game_origin: 'ugc2',
    },
    UGC_5005935: {
        game_origin: 'ugc2',
    },
    UGC_5005936: {
        game_origin: 'ugc2',
    },
    UGC_5005942: {
        game_origin: 'ugc2',
    },
    UGC_5005950: {
        game_origin: 'ugc2',
    },
    UGC_5005952: {
        game_origin: 'ugc2',
    },
    UGC_5005953: {
        game_origin: 'ugc2',
    },
    UGC_5005954: {
        game_origin: 'ugc2',
    },
    UGC_5005959: {
        game_origin: 'ugc2',
    },
    UGC_5005966: {
        game_origin: 'ugc2',
    },
    UGC_5005967: {
        game_origin: 'ugc2',
    },
    UGC_5005969: {
        game_origin: 'ugc2',
    },
    UGC_5005973: {
        game_origin: 'ugc2',
    },
    UGC_5005974: {
        game_origin: 'ugc2',
    },
    UGC_5005977: {
        game_origin: 'ugc2',
    },
    UGC_5005978: {
        game_origin: 'ugc2',
    },
    UGC_5005982: {
        game_origin: 'ugc2',
    },
    UGC_5005992: {
        game_origin: 'ugc2',
    },
    UGC_5005996: {
        game_origin: 'ugc2',
    },
    UGC_5005998: {
        game_origin: 'ugc2',
    },
    UGC_5005999: {
        game_origin: 'ugc2',
    },
    UGC_5006001: {
        game_origin: 'ugc2',
    },
    UGC_5006007: {
        game_origin: 'ugc2',
    },
    UGC_5006014: {
        game_origin: 'ugc2',
    },
    UGC_5006022: {
        game_origin: 'ugc2',
    },
    UGC_5006026: {
        game_origin: 'ugc2',
    },
    UGC_5006031: {
        game_origin: 'ugc2',
    },
    UGC_5006033: {
        game_origin: 'ugc2',
    },
    UGC_5006034: {
        game_origin: 'ugc2',
    },
    UGC_5006035: {
        game_origin: 'ugc2',
    },
    UGC_5006037: {
        game_origin: 'ugc2',
    },
    UGC_5006040: {
        game_origin: 'ugc2',
    },
    UGC_5006047: {
        game_origin: 'ugc2',
    },
    UGC_5006055: {
        game_origin: 'ugc2',
    },
    UGC_5006062: {
        game_origin: 'ugc2',
    },
    UGC_5006067: {
        game_origin: 'ugc2',
    },
    UGC_5006069: {
        game_origin: 'ugc2',
    },
    UGC_5006071: {
        game_origin: 'ugc2',
    },
    UGC_5006075: {
        game_origin: 'ugc2',
    },
    UGC_5006081: {
        game_origin: 'ugc2',
    },
    UGC_5006085: {
        game_origin: 'ugc2',
    },
    UGC_5006099: {
        game_origin: 'ugc2',
    },
    UGC_5006101: {
        game_origin: 'ugc2',
    },
    UGC_5006112: {
        game_origin: 'ugc2',
    },
    UGC_5006114: {
        game_origin: 'ugc2',
    },
    UGC_5006120: {
        game_origin: 'ugc2',
    },
    UGC_5006125: {
        game_origin: 'ugc2',
    },
    UGC_5006132: {
        game_origin: 'ugc2',
    },
    UGC_5006133: {
        game_origin: 'ugc2',
    },
    UGC_5006142: {
        game_origin: 'ugc2',
    },
    UGC_5006143: {
        game_origin: 'ugc2',
    },
    UGC_5006152: {
        game_origin: 'ugc2',
    },
    UGC_5006155: {
        game_origin: 'ugc2',
    },
    UGC_5006156: {
        game_origin: 'ugc2',
    },
    UGC_5006158: {
        game_origin: 'ugc2',
    },
    UGC_5006159: {
        game_origin: 'ugc2',
    },
    UGC_5006176: {
        game_origin: 'ugc2',
    },
    UGC_5006177: {
        game_origin: 'ugc2',
    },
    UGC_5006178: {
        game_origin: 'ugc2',
    },
    UGC_5006191: {
        game_origin: 'ugc2',
    },
    UGC_5006193: {
        game_origin: 'ugc2',
    },
    UGC_5006194: {
        game_origin: 'ugc2',
    },
    UGC_5006195: {
        game_origin: 'ugc2',
    },
    UGC_5006197: {
        game_origin: 'ugc2',
    },
    UGC_5006199: {
        game_origin: 'ugc2',
    },
    UGC_5006200: {
        game_origin: 'ugc2',
    },
    UGC_5006201: {
        game_origin: 'ugc2',
    },
    UGC_5006202: {
        game_origin: 'ugc2',
    },
    UGC_5006204: {
        game_origin: 'ugc2',
    },
    UGC_5006205: {
        game_origin: 'ugc2',
    },
    UGC_5006206: {
        game_origin: 'ugc2',
    },
    UGC_5006207: {
        game_origin: 'ugc2',
    },
    UGC_5006209: {
        game_origin: 'ugc2',
    },
    UGC_5006211: {
        game_origin: 'ugc2',
    },
    UGC_5006212: {
        game_origin: 'ugc2',
    },
    UGC_5006213: {
        game_origin: 'ugc2',
    },
    UGC_5006220: {
        game_origin: 'ugc2',
    },
    UGC_5006221: {
        game_origin: 'ugc2',
    },
    UGC_5006226: {
        game_origin: 'ugc2',
    },
    UGC_5006232: {
        game_origin: 'ugc2',
    },
    UGC_5006234: {
        game_origin: 'ugc2',
    },
    UGC_5006253: {
        game_origin: 'ugc2',
    },
    UGC_5006257: {
        game_origin: 'ugc2',
    },
    UGC_5006261: {
        game_origin: 'ugc2',
    },
    UGC_5006268: {
        game_origin: 'ugc2',
    },
    UGC_5006270: {
        game_origin: 'ugc2',
    },
    UGC_5006273: {
        game_origin: 'ugc2',
    },
    UGC_5006290: {
        game_origin: 'ugc2',
    },
    UGC_5006318: {
        game_origin: 'ugc2',
    },
    UGC_5006324: {
        game_origin: 'ugc2',
    },
    UGC_5006327: {
        game_origin: 'ugc2',
    },
    UGC_5006329: {
        game_origin: 'ugc2',
    },
    UGC_5006336: {
        game_origin: 'ugc2',
    },
    UGC_5006348: {
        game_origin: 'ugc2',
    },
    UGC_5006354: {
        game_origin: 'ugc2',
    },
    UGC_5006355: {
        game_origin: 'ugc2',
    },
    UGC_5006357: {
        game_origin: 'ugc2',
    },
    UGC_5006359: {
        game_origin: 'ugc2',
    },
    UGC_5006360: {
        game_origin: 'ugc2',
    },
    UGC_5006361: {
        game_origin: 'ugc2',
    },
    UGC_5006362: {
        game_origin: 'ugc2',
    },
    UGC_5006363: {
        game_origin: 'ugc2',
    },
    UGC_5006365: {
        game_origin: 'ugc2',
    },
    UGC_5006370: {
        game_origin: 'ugc2',
    },
    UGC_5006393: {
        game_origin: 'ugc2',
    },
    UGC_5006394: {
        game_origin: 'ugc2',
    },
    UGC_5006395: {
        game_origin: 'ugc2',
    },
    UGC_5006397: {
        game_origin: 'ugc2',
    },
    UGC_5006400: {
        game_origin: 'ugc2',
    },
    UGC_5006412: {
        game_origin: 'ugc2',
    },
    UGC_5006414: {
        game_origin: 'ugc2',
    },
    UGC_5006416: {
        game_origin: 'ugc2',
    },
    UGC_5006417: {
        game_origin: 'ugc2',
    },
    UGC_5006419: {
        game_origin: 'ugc2',
    },
    UGC_5006422: {
        game_origin: 'ugc2',
    },
    UGC_5006425: {
        game_origin: 'ugc2',
    },
    UGC_5006433: {
        game_origin: 'ugc2',
    },
    UGC_5006437: {
        game_origin: 'ugc2',
    },
    UGC_5006439: {
        game_origin: 'ugc2',
    },
    UGC_5006444: {
        game_origin: 'ugc2',
    },
    UGC_5006448: {
        game_origin: 'ugc2',
    },
    UGC_5006453: {
        game_origin: 'ugc2',
    },
    UGC_5006457: {
        game_origin: 'ugc2',
    },
    UGC_5006467: {
        game_origin: 'ugc2',
    },
    UGC_5006470: {
        game_origin: 'ugc2',
    },
    UGC_5006476: {
        game_origin: 'ugc2',
    },
    UGC_5006477: {
        game_origin: 'ugc2',
    },
    UGC_5006478: {
        game_origin: 'ugc2',
    },
    UGC_5006491: {
        game_origin: 'ugc2',
    },
    UGC_5006504: {
        game_origin: 'ugc2',
    },
    UGC_5006511: {
        game_origin: 'ugc2',
    },
    UGC_5006520: {
        game_origin: 'ugc2',
    },
    UGC_5006521: {
        game_origin: 'ugc2',
    },
    UGC_5006524: {
        game_origin: 'ugc2',
    },
    UGC_5006528: {
        game_origin: 'ugc2',
    },
    UGC_5006530: {
        game_origin: 'ugc2',
    },
    UGC_5006540: {
        game_origin: 'ugc2',
    },
    UGC_5006558: {
        game_origin: 'ugc2',
    },
    UGC_5006562: {
        game_origin: 'ugc2',
    },
    UGC_5006563: {
        game_origin: 'ugc2',
    },
    UGC_5006564: {
        game_origin: 'ugc2',
    },
    UGC_5006565: {
        game_origin: 'ugc2',
    },
    UGC_5006566: {
        game_origin: 'ugc2',
    },
    UGC_5006570: {
        game_origin: 'ugc2',
    },
    UGC_5006573: {
        game_origin: 'ugc2',
    },
    UGC_5006596: {
        game_origin: 'ugc2',
    },
    UGC_5006600: {
        game_origin: 'ugc2',
    },
    UGC_5006607: {
        game_origin: 'ugc2',
    },
    UGC_5006618: {
        game_origin: 'ugc2',
    },
    UGC_5006621: {
        game_origin: 'ugc2',
    },
    UGC_5006622: {
        game_origin: 'ugc2',
    },
    UGC_5006623: {
        game_origin: 'ugc2',
    },
    UGC_5006627: {
        game_origin: 'ugc2',
    },
    UGC_5006630: {
        game_origin: 'ugc2',
    },
    UGC_5006635: {
        game_origin: 'ugc2',
    },
    UGC_5006639: {
        game_origin: 'ugc2',
    },
    UGC_5006640: {
        game_origin: 'ugc2',
    },
    UGC_5006642: {
        game_origin: 'ugc2',
    },
    UGC_5006643: {
        game_origin: 'ugc2',
    },
    UGC_5006646: {
        game_origin: 'ugc2',
    },
    UGC_5006647: {
        game_origin: 'ugc2',
    },
    UGC_5006648: {
        game_origin: 'ugc2',
    },
    UGC_5006652: {
        game_origin: 'ugc2',
    },
    UGC_5006656: {
        game_origin: 'ugc2',
    },
    UGC_5006660: {
        game_origin: 'ugc2',
    },
    UGC_5006665: {
        game_origin: 'ugc2',
    },
    UGC_5006673: {
        game_origin: 'ugc2',
    },
    UGC_5006676: {
        game_origin: 'ugc2',
    },
    UGC_5006677: {
        game_origin: 'ugc2',
    },
    UGC_5006678: {
        game_origin: 'ugc2',
    },
    UGC_5006681: {
        game_origin: 'ugc2',
    },
    UGC_5006683: {
        game_origin: 'ugc2',
    },
    UGC_5006692: {
        game_origin: 'ugc2',
    },
    UGC_5006712: {
        game_origin: 'ugc2',
    },
    UGC_5006713: {
        game_origin: 'ugc2',
    },
    UGC_5006714: {
        game_origin: 'ugc2',
    },
    UGC_5006721: {
        game_origin: 'ugc2',
    },
    UGC_5006722: {
        game_origin: 'ugc2',
    },
    UGC_5006723: {
        game_origin: 'ugc2',
    },
    UGC_5006724: {
        game_origin: 'ugc2',
    },
    UGC_5006728: {
        game_origin: 'ugc2',
    },
    UGC_5006732: {
        game_origin: 'ugc2',
    },
    UGC_5006734: {
        game_origin: 'ugc2',
    },
    UGC_5006736: {
        game_origin: 'ugc2',
    },
    UGC_5006741: {
        game_origin: 'ugc2',
    },
    UGC_5006743: {
        game_origin: 'ugc2',
    },
    UGC_5006744: {
        game_origin: 'ugc2',
    },
    UGC_5006745: {
        game_origin: 'ugc2',
    },
    UGC_5006746: {
        game_origin: 'ugc2',
    },
    UGC_5006749: {
        game_origin: 'ugc2',
    },
    UGC_5006759: {
        game_origin: 'ugc2',
    },
    UGC_5006762: {
        game_origin: 'ugc2',
    },
    UGC_5006764: {
        game_origin: 'ugc2',
    },
    UGC_5006765: {
        game_origin: 'ugc2',
    },
    UGC_5006768: {
        game_origin: 'ugc2',
    },
    UGC_5006769: {
        game_origin: 'ugc2',
    },
    UGC_5006771: {
        game_origin: 'ugc2',
    },
    UGC_5006783: {
        game_origin: 'ugc2',
    },
    UGC_5006784: {
        game_origin: 'ugc2',
    },
    UGC_5006785: {
        game_origin: 'ugc2',
    },
    UGC_5006788: {
        game_origin: 'ugc2',
    },
    UGC_5006790: {
        game_origin: 'ugc2',
    },
    UGC_5006796: {
        game_origin: 'ugc2',
    },
    UGC_5006797: {
        game_origin: 'ugc2',
    },
    UGC_5006799: {
        game_origin: 'ugc2',
    },
    UGC_5006800: {
        game_origin: 'ugc2',
    },
    UGC_5006801: {
        game_origin: 'ugc2',
    },
    UGC_5006802: {
        game_origin: 'ugc2',
    },
    UGC_5006815: {
        game_origin: 'ugc2',
    },
    UGC_5006819: {
        game_origin: 'ugc2',
    },
    UGC_5006820: {
        game_origin: 'ugc2',
    },
    UGC_5006821: {
        game_origin: 'ugc2',
    },
    UGC_5006837: {
        game_origin: 'ugc2',
    },
    UGC_5006845: {
        game_origin: 'ugc2',
    },
    UGC_5006846: {
        game_origin: 'ugc2',
    },
    UGC_5006848: {
        game_origin: 'ugc2',
    },
    UGC_5006856: {
        game_origin: 'ugc2',
    },
    UGC_5006859: {
        game_origin: 'ugc2',
    },
    UGC_5006863: {
        game_origin: 'ugc2',
    },
    UGC_5006864: {
        game_origin: 'ugc2',
    },
    UGC_5006865: {
        game_origin: 'ugc2',
    },
    UGC_5006867: {
        game_origin: 'ugc2',
    },
    UGC_5006869: {
        game_origin: 'ugc2',
    },
    UGC_5006875: {
        game_origin: 'ugc2',
    },
    UGC_5006878: {
        game_origin: 'ugc2',
    },
    UGC_5006881: {
        game_origin: 'ugc2',
    },
    UGC_5006888: {
        game_origin: 'ugc2',
    },
    UGC_5006889: {
        game_origin: 'ugc2',
    },
    UGC_5006903: {
        game_origin: 'ugc2',
    },
    UGC_5006939: {
        game_origin: 'ugc2',
    },
    UGC_5006950: {
        game_origin: 'ugc2',
    },
    UGC_5006962: {
        game_origin: 'ugc2',
    },
    UGC_5006964: {
        game_origin: 'ugc2',
    },
    UGC_5006965: {
        game_origin: 'ugc2',
    },
    UGC_5006966: {
        game_origin: 'ugc2',
    },
    UGC_5006968: {
        game_origin: 'ugc2',
    },
    UGC_5006991: {
        game_origin: 'ugc2',
    },
    UGC_5007018: {
        game_origin: 'ugc2',
    },
    UGC_5007024: {
        game_origin: 'ugc2',
    },
    UGC_5007052: {
        game_origin: 'ugc2',
    },
    UGC_5007053: {
        game_origin: 'ugc2',
    },
    UGC_5007076: {
        game_origin: 'ugc2',
    },
    UGC_5007088: {
        game_origin: 'ugc2',
    },
    UGC_5007089: {
        game_origin: 'ugc2',
    },
    UGC_5007097: {
        game_origin: 'ugc2',
    },
    UGC_5007104: {
        game_origin: 'ugc2',
    },
    UGC_5007124: {
        game_origin: 'ugc2',
    },
    UGC_5007126: {
        game_origin: 'ugc2',
    },
    UGC_5007127: {
        game_origin: 'ugc2',
    },
    UGC_5007132: {
        game_origin: 'ugc2',
    },
    UGC_5007139: {
        game_origin: 'ugc2',
    },
    UGC_5007142: {
        game_origin: 'ugc2',
    },
    UGC_5007151: {
        game_origin: 'ugc2',
    },
    UGC_5007164: {
        game_origin: 'ugc2',
    },
    UGC_5007166: {
        game_origin: 'ugc2',
    },
    UGC_5007172: {
        game_origin: 'ugc2',
    },
    UGC_5007176: {
        game_origin: 'ugc2',
    },
    UGC_5007177: {
        game_origin: 'ugc2',
    },
    UGC_5007202: {
        game_origin: 'ugc2',
    },
    UGC_5007213: {
        game_origin: 'ugc2',
    },
    UGC_5007216: {
        game_origin: 'ugc2',
    },
    UGC_5007220: {
        game_origin: 'ugc2',
    },
    UGC_5007231: {
        game_origin: 'ugc2',
    },
    UGC_5007237: {
        game_origin: 'ugc2',
    },
    UGC_5007241: {
        game_origin: 'ugc2',
    },
    UGC_5007242: {
        game_origin: 'ugc2',
    },
    UGC_5007278: {
        game_origin: 'ugc2',
    },
    UGC_5007279: {
        game_origin: 'ugc2',
    },
    UGC_5007281: {
        game_origin: 'ugc2',
    },
    UGC_5007283: {
        game_origin: 'ugc2',
    },
    UGC_5007293: {
        game_origin: 'ugc2',
    },
    UGC_5007299: {
        game_origin: 'ugc2',
    },
    UGC_5007301: {
        game_origin: 'ugc2',
    },
    UGC_5007308: {
        game_origin: 'ugc2',
    },
    UGC_5007317: {
        game_origin: 'ugc2',
    },
    UGC_5007318: {
        game_origin: 'ugc2',
    },
    UGC_5007323: {
        game_origin: 'ugc2',
    },
    UGC_5007327: {
        game_origin: 'ugc2',
    },
    UGC_5007332: {
        game_origin: 'ugc2',
    },
    UGC_5007337: {
        game_origin: 'ugc2',
    },
    UGC_5007338: {
        game_origin: 'ugc2',
    },
    UGC_5007343: {
        game_origin: 'ugc2',
    },
    UGC_5007346: {
        game_origin: 'ugc2',
    },
    UGC_5007349: {
        game_origin: 'ugc2',
    },
    UGC_5007351: {
        game_origin: 'ugc2',
    },
    UGC_5007352: {
        game_origin: 'ugc2',
    },
    UGC_5007360: {
        game_origin: 'ugc2',
    },
    UGC_5007384: {
        game_origin: 'ugc2',
    },
    UGC_5007393: {
        game_origin: 'ugc2',
    },
    UGC_5007402: {
        game_origin: 'ugc2',
    },
    UGC_5007403: {
        game_origin: 'ugc2',
    },
    UGC_5007410: {
        game_origin: 'ugc2',
    },
    UGC_5007414: {
        game_origin: 'ugc2',
    },
    UGC_5007415: {
        game_origin: 'ugc2',
    },
    UGC_5007421: {
        game_origin: 'ugc2',
    },
    UGC_5007424: {
        game_origin: 'ugc2',
    },
    UGC_5007435: {
        game_origin: 'ugc2',
    },
    UGC_5007443: {
        game_origin: 'ugc2',
    },
    UGC_5007444: {
        game_origin: 'ugc2',
    },
    UGC_5007449: {
        game_origin: 'ugc2',
    },
    UGC_5007450: {
        game_origin: 'ugc2',
    },
    UGC_5007454: {
        game_origin: 'ugc2',
    },
    UGC_5007455: {
        game_origin: 'ugc2',
    },
    UGC_5007459: {
        game_origin: 'ugc2',
    },
    UGC_5007460: {
        game_origin: 'ugc2',
    },
    UGC_5007462: {
        game_origin: 'ugc2',
    },
    UGC_5007471: {
        game_origin: 'ugc2',
    },
    UGC_5007476: {
        game_origin: 'ugc2',
    },
    UGC_5007482: {
        game_origin: 'ugc2',
    },
    UGC_5007483: {
        game_origin: 'ugc2',
    },
    UGC_5007485: {
        game_origin: 'ugc2',
    },
    UGC_5007487: {
        game_origin: 'ugc2',
    },
    UGC_5007493: {
        game_origin: 'ugc2',
    },
    UGC_5007494: {
        game_origin: 'ugc2',
    },
    UGC_5007496: {
        game_origin: 'ugc2',
    },
    UGC_5007497: {
        game_origin: 'ugc2',
    },
    UGC_5007499: {
        game_origin: 'ugc2',
    },
    UGC_5007505: {
        game_origin: 'ugc2',
    },
    UGC_5007511: {
        game_origin: 'ugc2',
    },
    UGC_5007512: {
        game_origin: 'ugc2',
    },
    UGC_5007519: {
        game_origin: 'ugc2',
    },
    UGC_5007522: {
        game_origin: 'ugc2',
    },
    UGC_5007524: {
        game_origin: 'ugc2',
    },
    UGC_5007531: {
        game_origin: 'ugc2',
    },
    UGC_5007532: {
        game_origin: 'ugc2',
    },
    UGC_5007537: {
        game_origin: 'ugc2',
    },
    UGC_5007552: {
        game_origin: 'ugc2',
    },
    UGC_5007558: {
        game_origin: 'ugc2',
    },
    UGC_5007563: {
        game_origin: 'ugc2',
    },
    UGC_5007565: {
        game_origin: 'ugc2',
    },
    UGC_5007567: {
        game_origin: 'ugc2',
    },
    UGC_5007569: {
        game_origin: 'ugc2',
    },
    UGC_5007573: {
        game_origin: 'ugc2',
    },
    UGC_5007590: {
        game_origin: 'ugc2',
    },
    UGC_5007598: {
        game_origin: 'ugc2',
    },
    UGC_5007601: {
        game_origin: 'ugc2',
    },
    UGC_5007605: {
        game_origin: 'ugc2',
    },
    UGC_5007617: {
        game_origin: 'ugc2',
    },
    UGC_5007619: {
        game_origin: 'ugc2',
    },
    UGC_5007624: {
        game_origin: 'ugc2',
    },
    UGC_5007636: {
        game_origin: 'ugc2',
    },
    UGC_5007638: {
        game_origin: 'ugc2',
    },
    UGC_5007639: {
        game_origin: 'ugc2',
    },
    UGC_5007643: {
        game_origin: 'ugc2',
    },
    UGC_5007645: {
        game_origin: 'ugc2',
    },
    UGC_5007652: {
        game_origin: 'ugc2',
    },
    UGC_5007654: {
        game_origin: 'ugc2',
    },
    UGC_5007661: {
        game_origin: 'ugc2',
    },
    UGC_5007665: {
        game_origin: 'ugc2',
    },
    UGC_5007670: {
        game_origin: 'ugc2',
    },
    UGC_5007673: {
        game_origin: 'ugc2',
    },
    UGC_5007674: {
        game_origin: 'ugc2',
    },
    UGC_5007676: {
        game_origin: 'ugc2',
    },
    UGC_5007695: {
        game_origin: 'ugc2',
    },
    UGC_5007701: {
        game_origin: 'ugc2',
    },
    UGC_5007716: {
        game_origin: 'ugc2',
    },
    UGC_5007719: {
        game_origin: 'ugc2',
    },
    UGC_5007728: {
        game_origin: 'ugc2',
    },
    UGC_5007733: {
        game_origin: 'ugc2',
    },
    UGC_5007768: {
        game_origin: 'ugc2',
    },
    UGC_5007771: {
        game_origin: 'ugc2',
    },
    UGC_5007773: {
        game_origin: 'ugc2',
    },
    UGC_5007774: {
        game_origin: 'ugc2',
    },
    UGC_5007775: {
        game_origin: 'ugc2',
    },
    UGC_5007784: {
        game_origin: 'ugc2',
    },
    UGC_5007785: {
        game_origin: 'ugc2',
    },
    UGC_5007795: {
        game_origin: 'ugc2',
    },
    UGC_5007799: {
        game_origin: 'ugc2',
    },
    UGC_5007803: {
        game_origin: 'ugc2',
    },
    UGC_5007804: {
        game_origin: 'ugc2',
    },
    UGC_5007822: {
        game_origin: 'ugc2',
    },
    UGC_5007824: {
        game_origin: 'ugc2',
    },
    UGC_5007825: {
        game_origin: 'ugc2',
    },
    UGC_5007829: {
        game_origin: 'ugc2',
    },
    UGC_5007830: {
        game_origin: 'ugc2',
    },
    UGC_5007842: {
        game_origin: 'ugc2',
    },
    UGC_5007853: {
        game_origin: 'ugc2',
    },
    UGC_5007854: {
        game_origin: 'ugc2',
    },
    UGC_5007865: {
        game_origin: 'ugc2',
    },
    UGC_5007867: {
        game_origin: 'ugc2',
    },
    UGC_5007873: {
        game_origin: 'ugc2',
    },
    UGC_5007886: {
        game_origin: 'ugc2',
    },
    UGC_5007889: {
        game_origin: 'ugc2',
    },
    UGC_5007894: {
        game_origin: 'ugc2',
    },
    UGC_5007895: {
        game_origin: 'ugc2',
    },
    UGC_5007905: {
        game_origin: 'ugc2',
    },
    UGC_5007910: {
        game_origin: 'ugc2',
    },
    UGC_5007914: {
        game_origin: 'ugc2',
    },
    UGC_5007933: {
        game_origin: 'ugc2',
    },
    UGC_5007935: {
        game_origin: 'ugc2',
    },
    UGC_5007941: {
        game_origin: 'ugc2',
    },
    UGC_5007942: {
        game_origin: 'ugc2',
    },
    UGC_5007950: {
        game_origin: 'ugc2',
    },
    UGC_5007965: {
        game_origin: 'ugc2',
    },
    UGC_5007971: {
        game_origin: 'ugc2',
    },
    UGC_5007972: {
        game_origin: 'ugc2',
    },
    UGC_5007988: {
        game_origin: 'ugc2',
    },
    UGC_5007992: {
        game_origin: 'ugc2',
    },
    UGC_5008010: {
        game_origin: 'ugc2',
    },
    UGC_5008016: {
        game_origin: 'ugc2',
    },
    UGC_5008020: {
        game_origin: 'ugc2',
    },
    UGC_5008043: {
        game_origin: 'ugc2',
    },
    UGC_5008058: {
        game_origin: 'ugc2',
    },
    UGC_5008063: {
        game_origin: 'ugc2',
    },
    UGC_5008064: {
        game_origin: 'ugc2',
    },
    UGC_5008068: {
        game_origin: 'ugc2',
    },
    UGC_5008079: {
        game_origin: 'ugc2',
    },
    UGC_5008082: {
        game_origin: 'ugc2',
    },
    UGC_5008089: {
        game_origin: 'ugc2',
    },
    UGC_5008090: {
        game_origin: 'ugc2',
    },
    UGC_5008094: {
        game_origin: 'ugc2',
    },
    UGC_5008095: {
        game_origin: 'ugc2',
    },
    UGC_5008100: {
        game_origin: 'ugc2',
    },
    UGC_5008106: {
        game_origin: 'ugc2',
    },
    UGC_5008117: {
        game_origin: 'ugc2',
    },
    UGC_5008121: {
        game_origin: 'ugc2',
    },
    UGC_5008131: {
        game_origin: 'ugc2',
    },
    UGC_5008137: {
        game_origin: 'ugc2',
    },
    UGC_5008143: {
        game_origin: 'ugc2',
    },
    UGC_5008152: {
        game_origin: 'ugc2',
    },
    UGC_5008173: {
        game_origin: 'ugc2',
    },
    UGC_5008176: {
        game_origin: 'ugc2',
    },
    UGC_5008182: {
        game_origin: 'ugc2',
    },
    UGC_5008183: {
        game_origin: 'ugc2',
    },
    UGC_5008191: {
        game_origin: 'ugc2',
    },
    UGC_5008193: {
        game_origin: 'ugc2',
    },
    UGC_5008194: {
        game_origin: 'ugc2',
    },
    UGC_5008198: {
        game_origin: 'ugc2',
    },
    UGC_5008208: {
        game_origin: 'ugc2',
    },
    UGC_5008211: {
        game_origin: 'ugc2',
    },
    UGC_5008213: {
        game_origin: 'ugc2',
    },
    UGC_5008216: {
        game_origin: 'ugc2',
    },
    UGC_5008217: {
        game_origin: 'ugc2',
    },
    UGC_5008219: {
        game_origin: 'ugc2',
    },
    UGC_5008224: {
        game_origin: 'ugc2',
    },
    UGC_5008225: {
        game_origin: 'ugc2',
    },
    UGC_5008229: {
        game_origin: 'ugc2',
    },
    UGC_5008235: {
        game_origin: 'ugc2',
    },
    UGC_5008237: {
        game_origin: 'ugc2',
    },
    UGC_5008239: {
        game_origin: 'ugc2',
    },
    UGC_5008258: {
        game_origin: 'ugc2',
    },
    UGC_5008260: {
        game_origin: 'ugc2',
    },
    UGC_5008270: {
        game_origin: 'ugc2',
    },
    UGC_5008271: {
        game_origin: 'ugc2',
    },
    UGC_5008273: {
        game_origin: 'ugc2',
    },
    UGC_5008275: {
        game_origin: 'ugc2',
    },
    UGC_5008276: {
        game_origin: 'ugc2',
    },
    UGC_5008281: {
        game_origin: 'ugc2',
    },
    UGC_5008285: {
        game_origin: 'ugc2',
    },
    UGC_5008288: {
        game_origin: 'ugc2',
    },
    UGC_5008307: {
        game_origin: 'ugc2',
    },
    UGC_5008308: {
        game_origin: 'ugc2',
    },
    UGC_5008310: {
        game_origin: 'ugc2',
    },
    UGC_5008311: {
        game_origin: 'ugc2',
    },
    UGC_5008312: {
        game_origin: 'ugc2',
    },
    UGC_5008322: {
        game_origin: 'ugc2',
    },
    UGC_5008324: {
        game_origin: 'ugc2',
    },
    UGC_5008329: {
        game_origin: 'ugc2',
    },
    UGC_5008331: {
        game_origin: 'ugc2',
    },
    UGC_5008335: {
        game_origin: 'ugc2',
    },
    UGC_5008339: {
        game_origin: 'ugc2',
    },
    UGC_5008344: {
        game_origin: 'ugc2',
    },
    UGC_5008359: {
        game_origin: 'ugc2',
    },
    UGC_5008364: {
        game_origin: 'ugc2',
    },
    UGC_5008366: {
        game_origin: 'ugc2',
    },
    UGC_5008368: {
        game_origin: 'ugc2',
    },
    UGC_5008370: {
        game_origin: 'ugc2',
    },
    UGC_5008380: {
        game_origin: 'ugc2',
    },
    UGC_5008381: {
        game_origin: 'ugc2',
    },
    UGC_5008384: {
        game_origin: 'ugc2',
    },
    UGC_5008387: {
        game_origin: 'ugc2',
    },
    UGC_5008413: {
        game_origin: 'ugc2',
    },
    UGC_5008414: {
        game_origin: 'ugc2',
    },
    UGC_5008416: {
        game_origin: 'ugc2',
    },
    UGC_5008417: {
        game_origin: 'ugc2',
    },
    UGC_5008419: {
        game_origin: 'ugc2',
    },
    UGC_5008426: {
        game_origin: 'ugc2',
    },
    UGC_5008427: {
        game_origin: 'ugc2',
    },
    UGC_5008431: {
        game_origin: 'ugc2',
    },
    UGC_5008432: {
        game_origin: 'ugc2',
    },
    UGC_5008434: {
        game_origin: 'ugc2',
    },
    UGC_5008437: {
        game_origin: 'ugc2',
    },
    UGC_5008444: {
        game_origin: 'ugc2',
    },
    UGC_5008445: {
        game_origin: 'ugc2',
    },
    UGC_5008449: {
        game_origin: 'ugc2',
    },
    UGC_5008456: {
        game_origin: 'ugc2',
    },
    UGC_5008457: {
        game_origin: 'ugc2',
    },
    UGC_5008460: {
        game_origin: 'ugc2',
    },
    UGC_5008466: {
        game_origin: 'ugc2',
    },
    UGC_5008471: {
        game_origin: 'ugc2',
    },
    UGC_5008473: {
        game_origin: 'ugc2',
    },
    UGC_5008489: {
        game_origin: 'ugc2',
    },
    UGC_5008494: {
        game_origin: 'ugc2',
    },
    UGC_5008495: {
        game_origin: 'ugc2',
    },
    UGC_5008501: {
        game_origin: 'ugc2',
    },
    UGC_5008502: {
        game_origin: 'ugc2',
    },
    UGC_5008505: {
        game_origin: 'ugc2',
    },
    UGC_5008507: {
        game_origin: 'ugc2',
    },
    UGC_5008508: {
        game_origin: 'ugc2',
    },
    UGC_5008514: {
        game_origin: 'ugc2',
    },
    UGC_5008515: {
        game_origin: 'ugc2',
    },
    UGC_5008518: {
        game_origin: 'ugc2',
    },
    UGC_5008519: {
        game_origin: 'ugc2',
    },
    UGC_5008521: {
        game_origin: 'ugc2',
    },
    UGC_5008523: {
        game_origin: 'ugc2',
    },
    UGC_5008524: {
        game_origin: 'ugc2',
    },
    UGC_5008526: {
        game_origin: 'ugc2',
    },
    UGC_5008529: {
        game_origin: 'ugc2',
    },
    UGC_5008546: {
        game_origin: 'ugc2',
    },
    UGC_5008548: {
        game_origin: 'ugc2',
    },
    UGC_5008557: {
        game_origin: 'ugc2',
    },
    UGC_5008560: {
        game_origin: 'ugc2',
    },
    UGC_5008563: {
        game_origin: 'ugc2',
    },
    UGC_5008570: {
        game_origin: 'ugc2',
    },
    UGC_5008571: {
        game_origin: 'ugc2',
    },
    UGC_5008578: {
        game_origin: 'ugc2',
    },
    UGC_5008579: {
        game_origin: 'ugc2',
    },
    UGC_5008583: {
        game_origin: 'ugc2',
    },
    UGC_5008585: {
        game_origin: 'ugc2',
    },
    UGC_5008592: {
        game_origin: 'ugc2',
    },
    UGC_5008596: {
        game_origin: 'ugc2',
    },
    UGC_5008604: {
        game_origin: 'ugc2',
    },
    UGC_5008608: {
        game_origin: 'ugc2',
    },
    UGC_5008609: {
        game_origin: 'ugc2',
    },
    UGC_5008614: {
        game_origin: 'ugc2',
    },
    UGC_5008615: {
        game_origin: 'ugc2',
    },
    UGC_5008616: {
        game_origin: 'ugc2',
    },
    UGC_5008628: {
        game_origin: 'ugc2',
    },
    UGC_5008642: {
        game_origin: 'ugc2',
    },
    UGC_5008645: {
        game_origin: 'ugc2',
    },
    UGC_5008646: {
        game_origin: 'ugc2',
    },
    UGC_5008650: {
        game_origin: 'ugc2',
    },
    UGC_5008652: {
        game_origin: 'ugc2',
    },
    UGC_5008661: {
        game_origin: 'ugc2',
    },
    UGC_5008662: {
        game_origin: 'ugc2',
    },
    UGC_5008681: {
        game_origin: 'ugc2',
    },
    UGC_5008685: {
        game_origin: 'ugc2',
    },
    UGC_5008694: {
        game_origin: 'ugc2',
    },
    UGC_5008695: {
        game_origin: 'ugc2',
    },
    UGC_5008696: {
        game_origin: 'ugc2',
    },
    UGC_5008697: {
        game_origin: 'ugc2',
    },
    UGC_5008699: {
        game_origin: 'ugc2',
    },
    UGC_5008712: {
        game_origin: 'ugc2',
    },
    UGC_5008723: {
        game_origin: 'ugc2',
    },
    UGC_5008724: {
        game_origin: 'ugc2',
    },
    UGC_5008725: {
        game_origin: 'ugc2',
    },
    UGC_5008727: {
        game_origin: 'ugc2',
    },
    UGC_5008731: {
        game_origin: 'ugc2',
    },
    UGC_5008732: {
        game_origin: 'ugc2',
    },
    UGC_5008738: {
        game_origin: 'ugc2',
    },
    UGC_5008754: {
        game_origin: 'ugc2',
    },
    UGC_5008755: {
        game_origin: 'ugc2',
    },
    UGC_5008756: {
        game_origin: 'ugc2',
    },
    UGC_5008770: {
        game_origin: 'ugc2',
    },
    UGC_5008772: {
        game_origin: 'ugc2',
    },
    UGC_5008773: {
        game_origin: 'ugc2',
    },
    UGC_5008775: {
        game_origin: 'ugc2',
    },
    UGC_5008778: {
        game_origin: 'ugc2',
    },
    UGC_5008779: {
        game_origin: 'ugc2',
    },
    UGC_5008780: {
        game_origin: 'ugc2',
    },
    UGC_5008781: {
        game_origin: 'ugc2',
    },
    UGC_5008782: {
        game_origin: 'ugc2',
    },
    UGC_5008784: {
        game_origin: 'ugc2',
    },
    UGC_5008785: {
        game_origin: 'ugc2',
    },
    UGC_5008786: {
        game_origin: 'ugc2',
    },
    UGC_5008789: {
        game_origin: 'ugc2',
    },
    UGC_5008790: {
        game_origin: 'ugc2',
    },
    UGC_5008791: {
        game_origin: 'ugc2',
    },
    UGC_5008793: {
        game_origin: 'ugc2',
    },
    UGC_5008795: {
        game_origin: 'ugc2',
    },
    UGC_5008796: {
        game_origin: 'ugc2',
    },
    UGC_5008797: {
        game_origin: 'ugc2',
    },
    UGC_5008798: {
        game_origin: 'ugc2',
    },
    UGC_5008813: {
        game_origin: 'ugc2',
    },
    UGC_5008820: {
        game_origin: 'ugc2',
    },
    UGC_5008822: {
        game_origin: 'ugc2',
    },
    UGC_5008826: {
        game_origin: 'ugc2',
    },
    UGC_5008829: {
        game_origin: 'ugc2',
    },
    UGC_5008833: {
        game_origin: 'ugc2',
    },
    UGC_5008835: {
        game_origin: 'ugc2',
    },
    UGC_5008844: {
        game_origin: 'ugc2',
    },
    UGC_5008845: {
        game_origin: 'ugc2',
    },
    UGC_5008846: {
        game_origin: 'ugc2',
    },
    UGC_5008850: {
        game_origin: 'ugc2',
    },
    UGC_5008857: {
        game_origin: 'ugc2',
    },
    UGC_5008859: {
        game_origin: 'ugc2',
    },
    UGC_5008869: {
        game_origin: 'ugc2',
    },
    UGC_5008873: {
        game_origin: 'ugc2',
    },
    UGC_5008877: {
        game_origin: 'ugc2',
    },
    UGC_5008893: {
        game_origin: 'ugc2',
    },
    UGC_5008894: {
        game_origin: 'ugc2',
    },
    UGC_5008903: {
        game_origin: 'ugc2',
    },
    UGC_5008904: {
        game_origin: 'ugc2',
    },
    UGC_5008923: {
        game_origin: 'ugc2',
    },
    UGC_5008928: {
        game_origin: 'ugc2',
    },
    UGC_5008930: {
        game_origin: 'ugc2',
    },
    UGC_5008935: {
        game_origin: 'ugc2',
    },
    UGC_5008936: {
        game_origin: 'ugc2',
    },
    UGC_5008937: {
        game_origin: 'ugc2',
    },
    UGC_5008938: {
        game_origin: 'ugc2',
    },
    UGC_5008942: {
        game_origin: 'ugc2',
    },
    UGC_5008947: {
        game_origin: 'ugc2',
    },
    UGC_5008948: {
        game_origin: 'ugc2',
    },
    UGC_5008950: {
        game_origin: 'ugc2',
    },
    UGC_5008951: {
        game_origin: 'ugc2',
    },
    UGC_5008956: {
        game_origin: 'ugc2',
    },
    UGC_5008962: {
        game_origin: 'ugc2',
    },
    UGC_5008965: {
        game_origin: 'ugc2',
    },
    UGC_5008978: {
        game_origin: 'ugc2',
    },
    UGC_5008980: {
        game_origin: 'ugc2',
    },
    UGC_5008983: {
        game_origin: 'ugc2',
    },
    UGC_5008984: {
        game_origin: 'ugc2',
    },
    UGC_5008987: {
        game_origin: 'ugc2',
    },
    UGC_5009009: {
        game_origin: 'ugc2',
    },
    UGC_5009014: {
        game_origin: 'ugc2',
    },
    UGC_5009015: {
        game_origin: 'ugc2',
    },
    UGC_5009019: {
        game_origin: 'ugc2',
    },
    UGC_5009020: {
        game_origin: 'ugc2',
    },
    UGC_5009022: {
        game_origin: 'ugc2',
    },
    UGC_5009025: {
        game_origin: 'ugc2',
    },
    UGC_5009031: {
        game_origin: 'ugc2',
    },
    UGC_5009032: {
        game_origin: 'ugc2',
    },
    UGC_5009033: {
        game_origin: 'ugc2',
    },
    UGC_5009034: {
        game_origin: 'ugc2',
    },
    UGC_5009037: {
        game_origin: 'ugc2',
    },
    UGC_5009040: {
        game_origin: 'ugc2',
    },
    UGC_5009043: {
        game_origin: 'ugc2',
    },
    UGC_5009046: {
        game_origin: 'ugc2',
    },
    UGC_5009049: {
        game_origin: 'ugc2',
    },
    UGC_5009061: {
        game_origin: 'ugc2',
    },
    UGC_5009067: {
        game_origin: 'ugc2',
    },
    UGC_5009081: {
        game_origin: 'ugc2',
    },
    UGC_5009083: {
        game_origin: 'ugc2',
    },
    UGC_5009087: {
        game_origin: 'ugc2',
    },
    UGC_5009090: {
        game_origin: 'ugc2',
    },
    UGC_5009118: {
        game_origin: 'ugc2',
    },
    UGC_5009119: {
        game_origin: 'ugc2',
    },
    UGC_5009121: {
        game_origin: 'ugc2',
    },
    UGC_5009122: {
        game_origin: 'ugc2',
    },
    UGC_5009123: {
        game_origin: 'ugc2',
    },
    UGC_5009124: {
        game_origin: 'ugc2',
    },
    UGC_5009128: {
        game_origin: 'ugc2',
    },
    UGC_5009135: {
        game_origin: 'ugc2',
    },
    UGC_5009136: {
        game_origin: 'ugc2',
    },
    UGC_5009137: {
        game_origin: 'ugc2',
    },
    UGC_5009142: {
        game_origin: 'ugc2',
    },
    UGC_5009151: {
        game_origin: 'ugc2',
    },
    UGC_5009153: {
        game_origin: 'ugc2',
    },
    UGC_5009155: {
        game_origin: 'ugc2',
    },
    UGC_5009158: {
        game_origin: 'ugc2',
    },
    UGC_5009169: {
        game_origin: 'ugc2',
    },
    UGC_5009187: {
        game_origin: 'ugc2',
    },
    UGC_5009190: {
        game_origin: 'ugc2',
    },
    UGC_5009196: {
        game_origin: 'ugc2',
    },
    UGC_5009198: {
        game_origin: 'ugc2',
    },
    UGC_5009201: {
        game_origin: 'ugc2',
    },
    UGC_5009203: {
        game_origin: 'ugc2',
    },
    UGC_5009208: {
        game_origin: 'ugc2',
    },
    UGC_5009209: {
        game_origin: 'ugc2',
    },
    UGC_5009210: {
        game_origin: 'ugc2',
    },
    UGC_5009212: {
        game_origin: 'ugc2',
    },
    UGC_5009223: {
        game_origin: 'ugc2',
    },
    UGC_5009224: {
        game_origin: 'ugc2',
    },
    UGC_5009241: {
        game_origin: 'ugc2',
    },
    UGC_5009245: {
        game_origin: 'ugc2',
    },
    UGC_5009260: {
        game_origin: 'ugc2',
    },
    UGC_5009265: {
        game_origin: 'ugc2',
    },
    UGC_5009267: {
        game_origin: 'ugc2',
    },
    UGC_5009293: {
        game_origin: 'ugc2',
    },
    UGC_5009302: {
        game_origin: 'ugc2',
    },
    UGC_5009303: {
        game_origin: 'ugc2',
    },
    UGC_5009304: {
        game_origin: 'ugc2',
    },
    UGC_5009318: {
        game_origin: 'ugc2',
    },
    UGC_5009324: {
        game_origin: 'ugc2',
    },
    UGC_5009328: {
        game_origin: 'ugc2',
    },
    UGC_5009330: {
        game_origin: 'ugc2',
    },
    UGC_5009333: {
        game_origin: 'ugc2',
    },
    UGC_5009339: {
        game_origin: 'ugc2',
    },
    UGC_5009355: {
        game_origin: 'ugc2',
    },
    UGC_5009360: {
        game_origin: 'ugc2',
    },
    UGC_5009361: {
        game_origin: 'ugc2',
    },
    UGC_5009367: {
        game_origin: 'ugc2',
    },
    UGC_5009370: {
        game_origin: 'ugc2',
    },
    UGC_5009390: {
        game_origin: 'ugc2',
    },
    UGC_5009399: {
        game_origin: 'ugc2',
    },
    UGC_5009400: {
        game_origin: 'ugc2',
    },
    UGC_5009402: {
        game_origin: 'ugc2',
    },
    UGC_5009413: {
        game_origin: 'ugc2',
    },
    UGC_5009422: {
        game_origin: 'ugc2',
    },
    UGC_5009427: {
        game_origin: 'ugc2',
    },
    UGC_5009432: {
        game_origin: 'ugc2',
    },
    UGC_5009435: {
        game_origin: 'ugc2',
    },
    UGC_5009438: {
        game_origin: 'ugc2',
    },
    UGC_5009439: {
        game_origin: 'ugc2',
    },
    UGC_5009440: {
        game_origin: 'ugc2',
    },
    UGC_5009451: {
        game_origin: 'ugc2',
    },
    UGC_5009452: {
        game_origin: 'ugc2',
    },
    UGC_5009454: {
        game_origin: 'ugc2',
    },
    UGC_5009455: {
        game_origin: 'ugc2',
    },
    UGC_5009459: {
        game_origin: 'ugc2',
    },
    UGC_5009463: {
        game_origin: 'ugc2',
    },
    UGC_5009478: {
        game_origin: 'ugc2',
    },
    UGC_5009502: {
        game_origin: 'ugc2',
    },
    UGC_5009506: {
        game_origin: 'ugc2',
    },
    UGC_5009508: {
        game_origin: 'ugc2',
    },
    UGC_5009509: {
        game_origin: 'ugc2',
    },
    UGC_5009510: {
        game_origin: 'ugc2',
    },
    UGC_5009512: {
        game_origin: 'ugc2',
    },
    UGC_5009514: {
        game_origin: 'ugc2',
    },
    UGC_5009525: {
        game_origin: 'ugc2',
    },
    UGC_5009528: {
        game_origin: 'ugc2',
    },
    UGC_5009530: {
        game_origin: 'ugc2',
    },
    UGC_5009541: {
        game_origin: 'ugc2',
    },
    UGC_5009542: {
        game_origin: 'ugc2',
    },
    UGC_5009548: {
        game_origin: 'ugc2',
    },
    UGC_5009551: {
        game_origin: 'ugc2',
    },
    UGC_5009553: {
        game_origin: 'ugc2',
    },
    UGC_5009554: {
        game_origin: 'ugc2',
    },
    UGC_5009560: {
        game_origin: 'ugc2',
    },
    UGC_5009569: {
        game_origin: 'ugc2',
    },
    UGC_5009571: {
        game_origin: 'ugc2',
    },
    UGC_5009572: {
        game_origin: 'ugc2',
    },
    UGC_5009577: {
        game_origin: 'ugc2',
    },
    UGC_5009584: {
        game_origin: 'ugc2',
    },
    UGC_5009585: {
        game_origin: 'ugc2',
    },
    UGC_5009587: {
        game_origin: 'ugc2',
    },
    UGC_5009596: {
        game_origin: 'ugc2',
    },
    UGC_5009608: {
        game_origin: 'ugc2',
    },
    UGC_5009609: {
        game_origin: 'ugc2',
    },
    UGC_5009627: {
        game_origin: 'ugc2',
    },
    UGC_5009645: {
        game_origin: 'ugc2',
    },
    UGC_5009646: {
        game_origin: 'ugc2',
    },
    UGC_5009661: {
        game_origin: 'ugc2',
    },
    UGC_5009674: {
        game_origin: 'ugc2',
    },
    UGC_5009675: {
        game_origin: 'ugc2',
    },
    UGC_5009678: {
        game_origin: 'ugc2',
    },
    UGC_5009696: {
        game_origin: 'ugc2',
    },
    UGC_5009700: {
        game_origin: 'ugc2',
    },
    UGC_5009702: {
        game_origin: 'ugc2',
    },
    UGC_5009704: {
        game_origin: 'ugc2',
    },
    UGC_5009716: {
        game_origin: 'ugc2',
    },
    UGC_5009717: {
        game_origin: 'ugc2',
    },
    UGC_5009718: {
        game_origin: 'ugc2',
    },
    UGC_5009725: {
        game_origin: 'ugc2',
    },
    UGC_5009755: {
        game_origin: 'ugc2',
    },
    UGC_5009757: {
        game_origin: 'ugc2',
    },
    UGC_5009758: {
        game_origin: 'ugc2',
    },
    UGC_5009779: {
        game_origin: 'ugc2',
    },
    UGC_5009785: {
        game_origin: 'ugc2',
    },
    UGC_5009796: {
        game_origin: 'ugc2',
    },
    UGC_5009804: {
        game_origin: 'ugc2',
    },
    UGC_5009809: {
        game_origin: 'ugc2',
    },
    UGC_5009816: {
        game_origin: 'ugc2',
    },
    UGC_5009819: {
        game_origin: 'ugc2',
    },
    UGC_5009825: {
        game_origin: 'ugc2',
    },
    UGC_5009832: {
        game_origin: 'ugc2',
    },
    UGC_5009836: {
        game_origin: 'ugc2',
    },
    UGC_5009846: {
        game_origin: 'ugc2',
    },
    UGC_5009849: {
        game_origin: 'ugc2',
    },
    UGC_5009853: {
        game_origin: 'ugc2',
    },
    UGC_5009857: {
        game_origin: 'ugc2',
    },
    UGC_5009862: {
        game_origin: 'ugc2',
    },
    UGC_5009868: {
        game_origin: 'ugc2',
    },
    UGC_5009876: {
        game_origin: 'ugc2',
    },
    UGC_5009877: {
        game_origin: 'ugc2',
    },
    UGC_5009878: {
        game_origin: 'ugc2',
    },
    UGC_5009885: {
        game_origin: 'ugc2',
    },
    UGC_5009886: {
        game_origin: 'ugc2',
    },
    UGC_5009904: {
        game_origin: 'ugc2',
    },
    UGC_5009905: {
        game_origin: 'ugc2',
    },
    UGC_5009908: {
        game_origin: 'ugc2',
    },
    UGC_5009915: {
        game_origin: 'ugc2',
    },
    UGC_5009923: {
        game_origin: 'ugc2',
    },
    UGC_5009926: {
        game_origin: 'ugc2',
    },
    UGC_5009927: {
        game_origin: 'ugc2',
    },
    UGC_5009937: {
        game_origin: 'ugc2',
    },
    UGC_5009939: {
        game_origin: 'ugc2',
    },
    UGC_5009942: {
        game_origin: 'ugc2',
    },
    UGC_5009949: {
        game_origin: 'ugc2',
    },
    UGC_5009950: {
        game_origin: 'ugc2',
    },
    UGC_5009959: {
        game_origin: 'ugc2',
    },
    UGC_5009979: {
        game_origin: 'ugc2',
    },
    UGC_5009980: {
        game_origin: 'ugc2',
    },
    UGC_5009990: {
        game_origin: 'ugc2',
    },
    UGC_5009991: {
        game_origin: 'ugc2',
    },
    UGC_5009992: {
        game_origin: 'ugc2',
    },
    UGC_5009996: {
        game_origin: 'ugc2',
    },
    UGC_5010004: {
        game_origin: 'ugc2',
    },
    UGC_5010006: {
        game_origin: 'ugc2',
    },
    UGC_5010008: {
        game_origin: 'ugc2',
    },
    UGC_5010012: {
        game_origin: 'ugc2',
    },
    UGC_5010030: {
        game_origin: 'ugc2',
    },
    UGC_5010032: {
        game_origin: 'ugc2',
    },
    UGC_5010053: {
        game_origin: 'ugc2',
    },
    UGC_5010061: {
        game_origin: 'ugc2',
    },
    UGC_5010077: {
        game_origin: 'ugc2',
    },
    UGC_5010079: {
        game_origin: 'ugc2',
    },
    UGC_5010088: {
        game_origin: 'ugc2',
    },
    UGC_5010091: {
        game_origin: 'ugc2',
    },
    UGC_5010097: {
        game_origin: 'ugc2',
    },
    UGC_5010099: {
        game_origin: 'ugc2',
    },
    UGC_5010100: {
        game_origin: 'ugc2',
    },
    UGC_5010101: {
        game_origin: 'ugc2',
    },
    UGC_5010108: {
        game_origin: 'ugc2',
    },
    UGC_5010122: {
        game_origin: 'ugc2',
    },
    UGC_5010125: {
        game_origin: 'ugc2',
    },
    UGC_5010133: {
        game_origin: 'ugc2',
    },
    UGC_5010134: {
        game_origin: 'ugc2',
    },
    UGC_5010136: {
        game_origin: 'ugc2',
    },
    UGC_5010137: {
        game_origin: 'ugc2',
    },
    UGC_5010141: {
        game_origin: 'ugc2',
    },
    UGC_5010152: {
        game_origin: 'ugc2',
    },
    UGC_5010159: {
        game_origin: 'ugc2',
    },
    UGC_5010162: {
        game_origin: 'ugc2',
    },
    UGC_5010178: {
        game_origin: 'ugc2',
    },
    UGC_5010192: {
        game_origin: 'ugc2',
    },
    UGC_5010198: {
        game_origin: 'ugc2',
    },
    UGC_5010199: {
        game_origin: 'ugc2',
    },
    UGC_5010200: {
        game_origin: 'ugc2',
    },
    UGC_5010203: {
        game_origin: 'ugc2',
    },
    UGC_5010204: {
        game_origin: 'ugc2',
    },
    UGC_5010206: {
        game_origin: 'ugc2',
    },
    UGC_5010211: {
        game_origin: 'ugc2',
    },
    UGC_5010213: {
        game_origin: 'ugc2',
    },
    UGC_5010215: {
        game_origin: 'ugc2',
    },
    UGC_5010225: {
        game_origin: 'ugc2',
    },
    UGC_5010228: {
        game_origin: 'ugc2',
    },
    UGC_5010234: {
        game_origin: 'ugc2',
    },
    UGC_5010240: {
        game_origin: 'ugc2',
    },
    UGC_5010246: {
        game_origin: 'ugc2',
    },
    UGC_5010247: {
        game_origin: 'ugc2',
    },
    UGC_5010258: {
        game_origin: 'ugc2',
    },
    UGC_5010259: {
        game_origin: 'ugc2',
    },
    UGC_5010261: {
        game_origin: 'ugc2',
    },
    UGC_5010262: {
        game_origin: 'ugc2',
    },
    UGC_5010274: {
        game_origin: 'ugc2',
    },
    UGC_5010292: {
        game_origin: 'ugc2',
    },
    UGC_5010297: {
        game_origin: 'ugc2',
    },
    UGC_5010298: {
        game_origin: 'ugc2',
    },
    UGC_5010307: {
        game_origin: 'ugc2',
    },
    UGC_5010309: {
        game_origin: 'ugc2',
    },
    UGC_5010338: {
        game_origin: 'ugc2',
    },
    UGC_5010340: {
        game_origin: 'ugc2',
    },
    UGC_5010358: {
        game_origin: 'ugc2',
    },
    UGC_5010363: {
        game_origin: 'ugc2',
    },
    UGC_5010368: {
        game_origin: 'ugc2',
    },
    UGC_5010369: {
        game_origin: 'ugc2',
    },
    UGC_5010374: {
        game_origin: 'ugc2',
    },
    UGC_5010386: {
        game_origin: 'ugc2',
    },
    UGC_5010387: {
        game_origin: 'ugc2',
    },
    UGC_5010391: {
        game_origin: 'ugc2',
    },
    UGC_5010394: {
        game_origin: 'ugc2',
    },
    UGC_5010401: {
        game_origin: 'ugc2',
    },
    UGC_5010405: {
        game_origin: 'ugc2',
    },
    UGC_5010408: {
        game_origin: 'ugc2',
    },
    UGC_5010414: {
        game_origin: 'ugc2',
    },
    UGC_5010415: {
        game_origin: 'ugc2',
    },
    UGC_5010418: {
        game_origin: 'ugc2',
    },
    UGC_5010442: {
        game_origin: 'ugc2',
    },
    UGC_5010449: {
        game_origin: 'ugc2',
    },
    UGC_5010457: {
        game_origin: 'ugc2',
    },
    UGC_5010461: {
        game_origin: 'ugc2',
    },
    UGC_5010477: {
        game_origin: 'ugc2',
    },
    UGC_5010478: {
        game_origin: 'ugc2',
    },
    UGC_5010490: {
        game_origin: 'ugc2',
    },
    UGC_5010498: {
        game_origin: 'ugc2',
    },
    UGC_5010499: {
        game_origin: 'ugc2',
    },
    UGC_5010500: {
        game_origin: 'ugc2',
    },
    UGC_5010507: {
        game_origin: 'ugc2',
    },
    UGC_5010510: {
        game_origin: 'ugc2',
    },
    UGC_5010517: {
        game_origin: 'ugc2',
    },
    UGC_5010518: {
        game_origin: 'ugc2',
    },
    UGC_5010530: {
        game_origin: 'ugc2',
    },
    UGC_5010538: {
        game_origin: 'ugc2',
    },
    UGC_5010539: {
        game_origin: 'ugc2',
    },
    UGC_5010541: {
        game_origin: 'ugc2',
    },
    UGC_5010546: {
        game_origin: 'ugc2',
    },
    UGC_5010552: {
        game_origin: 'ugc2',
    },
    UGC_5010553: {
        game_origin: 'ugc2',
    },
    UGC_5010559: {
        game_origin: 'ugc2',
    },
    UGC_5010560: {
        game_origin: 'ugc2',
    },
    UGC_5010564: {
        game_origin: 'ugc2',
    },
    UGC_5010566: {
        game_origin: 'ugc2',
    },
    UGC_5010578: {
        game_origin: 'ugc2',
    },
    UGC_5010581: {
        game_origin: 'ugc2',
    },
    UGC_5010584: {
        game_origin: 'ugc2',
    },
    UGC_5010586: {
        game_origin: 'ugc2',
    },
    UGC_5010596: {
        game_origin: 'ugc2',
    },
    UGC_5010604: {
        game_origin: 'ugc2',
    },
    UGC_5010614: {
        game_origin: 'ugc2',
    },
    UGC_5010624: {
        game_origin: 'ugc2',
    },
    UGC_5010625: {
        game_origin: 'ugc2',
    },
    UGC_5010628: {
        game_origin: 'ugc2',
    },
    UGC_5010631: {
        game_origin: 'ugc2',
    },
    UGC_5010635: {
        game_origin: 'ugc2',
    },
    UGC_5010636: {
        game_origin: 'ugc2',
    },
    UGC_5010649: {
        game_origin: 'ugc2',
    },
    UGC_5010650: {
        game_origin: 'ugc2',
    },
    UGC_5010654: {
        game_origin: 'ugc2',
    },
    UGC_5010661: {
        game_origin: 'ugc2',
    },
    UGC_5010662: {
        game_origin: 'ugc2',
    },
    UGC_5010663: {
        game_origin: 'ugc2',
    },
    UGC_5010664: {
        game_origin: 'ugc2',
    },
    UGC_5010666: {
        game_origin: 'ugc2',
    },
    UGC_5010685: {
        game_origin: 'ugc2',
    },
    UGC_5010687: {
        game_origin: 'ugc2',
    },
    UGC_5010719: {
        game_origin: 'ugc2',
    },
    UGC_5010722: {
        game_origin: 'ugc2',
    },
    UGC_5010723: {
        game_origin: 'ugc2',
    },
    UGC_5010731: {
        game_origin: 'ugc2',
    },
    UGC_5010743: {
        game_origin: 'ugc2',
    },
    UGC_5010759: {
        game_origin: 'ugc2',
    },
    UGC_5010761: {
        game_origin: 'ugc2',
    },
    UGC_5010762: {
        game_origin: 'ugc2',
    },
    UGC_5010765: {
        game_origin: 'ugc2',
    },
    UGC_5010772: {
        game_origin: 'ugc2',
    },
    UGC_5010776: {
        game_origin: 'ugc2',
    },
    UGC_5010791: {
        game_origin: 'ugc2',
    },
    UGC_5010792: {
        game_origin: 'ugc2',
    },
    UGC_5010795: {
        game_origin: 'ugc2',
    },
    UGC_5010803: {
        game_origin: 'ugc2',
    },
    UGC_5010810: {
        game_origin: 'ugc2',
    },
    UGC_5010829: {
        game_origin: 'ugc2',
    },
    UGC_5010831: {
        game_origin: 'ugc2',
    },
    UGC_5010839: {
        game_origin: 'ugc2',
    },
    UGC_5010840: {
        game_origin: 'ugc2',
    },
    UGC_5010849: {
        game_origin: 'ugc2',
    },
    UGC_5010850: {
        game_origin: 'ugc2',
    },
    UGC_5010857: {
        game_origin: 'ugc2',
    },
    UGC_5010864: {
        game_origin: 'ugc2',
    },
    UGC_5010882: {
        game_origin: 'ugc2',
    },
    UGC_5010889: {
        game_origin: 'ugc2',
    },
    UGC_5010895: {
        game_origin: 'ugc2',
    },
    UGC_5010897: {
        game_origin: 'ugc2',
    },
    UGC_5010918: {
        game_origin: 'ugc2',
    },
    UGC_5010920: {
        game_origin: 'ugc2',
    },
    UGC_5010925: {
        game_origin: 'ugc2',
    },
    UGC_5010932: {
        game_origin: 'ugc2',
    },
    UGC_5010933: {
        game_origin: 'ugc2',
    },
    UGC_5010935: {
        game_origin: 'ugc2',
    },
    UGC_5010961: {
        game_origin: 'ugc2',
    },
    UGC_5010967: {
        game_origin: 'ugc2',
    },
    UGC_5010973: {
        game_origin: 'ugc2',
    },
    UGC_5010974: {
        game_origin: 'ugc2',
    },
    UGC_5010981: {
        game_origin: 'ugc2',
    },
    UGC_5010982: {
        game_origin: 'ugc2',
    },
    UGC_5010993: {
        game_origin: 'ugc2',
    },
    UGC_5010998: {
        game_origin: 'ugc2',
    },
    UGC_5011006: {
        game_origin: 'ugc2',
    },
    UGC_5011009: {
        game_origin: 'ugc2',
    },
    UGC_5011043: {
        game_origin: 'ugc2',
    },
    UGC_5011053: {
        game_origin: 'ugc2',
    },
    UGC_5011054: {
        game_origin: 'ugc2',
    },
    UGC_5011069: {
        game_origin: 'ugc2',
    },
    UGC_5011070: {
        game_origin: 'ugc2',
    },
    UGC_5011075: {
        game_origin: 'ugc2',
    },
    UGC_5011092: {
        game_origin: 'ugc2',
    },
    UGC_5011093: {
        game_origin: 'ugc2',
    },
    UGC_5011104: {
        game_origin: 'ugc2',
    },
    UGC_5011115: {
        game_origin: 'ugc2',
    },
    UGC_5011119: {
        game_origin: 'ugc2',
    },
    UGC_5011120: {
        game_origin: 'ugc2',
    },
    UGC_5011123: {
        game_origin: 'ugc2',
    },
    UGC_5011125: {
        game_origin: 'ugc2',
    },
    UGC_5011126: {
        game_origin: 'ugc2',
    },
    UGC_5011128: {
        game_origin: 'ugc2',
    },
    UGC_5011137: {
        game_origin: 'ugc2',
    },
    UGC_5011140: {
        game_origin: 'ugc2',
    },
    UGC_5011150: {
        game_origin: 'ugc2',
    },
    UGC_5011153: {
        game_origin: 'ugc2',
    },
    UGC_5011158: {
        game_origin: 'ugc2',
    },
    UGC_5011169: {
        game_origin: 'ugc2',
    },
    UGC_5011172: {
        game_origin: 'ugc2',
    },
    UGC_5011179: {
        game_origin: 'ugc2',
    },
    UGC_5011182: {
        game_origin: 'ugc2',
    },
    UGC_5011201: {
        game_origin: 'ugc2',
    },
    UGC_5011211: {
        game_origin: 'ugc2',
    },
    UGC_5011217: {
        game_origin: 'ugc2',
    },
    UGC_5011221: {
        game_origin: 'ugc2',
    },
    UGC_5011226: {
        game_origin: 'ugc2',
    },
    UGC_5011227: {
        game_origin: 'ugc2',
    },
    UGC_5011239: {
        game_origin: 'ugc2',
    },
    UGC_5011246: {
        game_origin: 'ugc2',
    },
    UGC_5011248: {
        game_origin: 'ugc2',
    },
    UGC_5011253: {
        game_origin: 'ugc2',
    },
    UGC_5011260: {
        game_origin: 'ugc2',
    },
    UGC_5011265: {
        game_origin: 'ugc2',
    },
    UGC_5011280: {
        game_origin: 'ugc2',
    },
    UGC_5011284: {
        game_origin: 'ugc2',
    },
    UGC_5011290: {
        game_origin: 'ugc2',
    },
    UGC_5011299: {
        game_origin: 'ugc2',
    },
    UGC_5011300: {
        game_origin: 'ugc2',
    },
    UGC_5011306: {
        game_origin: 'ugc2',
    },
    UGC_5011307: {
        game_origin: 'ugc2',
    },
    UGC_5011316: {
        game_origin: 'ugc2',
    },
    UGC_5011327: {
        game_origin: 'ugc2',
    },
    UGC_5011339: {
        game_origin: 'ugc2',
    },
    UGC_5011346: {
        game_origin: 'ugc2',
    },
    UGC_5011350: {
        game_origin: 'ugc2',
    },
    UGC_5011360: {
        game_origin: 'ugc2',
    },
    UGC_5011373: {
        game_origin: 'ugc2',
    },
    UGC_5011382: {
        game_origin: 'ugc2',
    },
    UGC_5011389: {
        game_origin: 'ugc2',
    },
    UGC_5011395: {
        game_origin: 'ugc2',
    },
    UGC_5011398: {
        game_origin: 'ugc2',
    },
    UGC_5011411: {
        game_origin: 'ugc2',
    },
    UGC_5011414: {
        game_origin: 'ugc2',
    },
    UGC_5011416: {
        game_origin: 'ugc2',
    },
    UGC_5011425: {
        game_origin: 'ugc2',
    },
    UGC_5011432: {
        game_origin: 'ugc2',
    },
    UGC_5011434: {
        game_origin: 'ugc2',
    },
    UGC_5011441: {
        game_origin: 'ugc2',
    },
    UGC_5011442: {
        game_origin: 'ugc2',
    },
    UGC_5011455: {
        game_origin: 'ugc2',
    },
    UGC_5011456: {
        game_origin: 'ugc2',
    },
    UGC_5011468: {
        game_origin: 'ugc2',
    },
    UGC_5011473: {
        game_origin: 'ugc2',
    },
    UGC_5011488: {
        game_origin: 'ugc2',
    },
    UGC_5011496: {
        game_origin: 'ugc2',
    },
    UGC_5011497: {
        game_origin: 'ugc2',
    },
    UGC_5011505: {
        game_origin: 'ugc2',
    },
    UGC_5011509: {
        game_origin: 'ugc2',
    },
    UGC_5011518: {
        game_origin: 'ugc2',
    },
    UGC_5011533: {
        game_origin: 'ugc2',
    },
    UGC_5011543: {
        game_origin: 'ugc2',
    },
    UGC_5011544: {
        game_origin: 'ugc2',
    },
    UGC_5011547: {
        game_origin: 'ugc2',
    },
    UGC_5011548: {
        game_origin: 'ugc2',
    },
    UGC_5011551: {
        game_origin: 'ugc2',
    },
    UGC_5011565: {
        game_origin: 'ugc2',
    },
    UGC_5011566: {
        game_origin: 'ugc2',
    },
    UGC_5011575: {
        game_origin: 'ugc2',
    },
    UGC_5011576: {
        game_origin: 'ugc2',
    },
    UGC_5011577: {
        game_origin: 'ugc2',
    },
    UGC_5011578: {
        game_origin: 'ugc2',
    },
    UGC_5011590: {
        game_origin: 'ugc2',
    },
    UGC_5011596: {
        game_origin: 'ugc2',
    },
    UGC_5011599: {
        game_origin: 'ugc2',
    },
    UGC_5011601: {
        game_origin: 'ugc2',
    },
    UGC_5011602: {
        game_origin: 'ugc2',
    },
    UGC_5011606: {
        game_origin: 'ugc2',
    },
    UGC_5011607: {
        game_origin: 'ugc2',
    },
    UGC_5011610: {
        game_origin: 'ugc2',
    },
    UGC_5011611: {
        game_origin: 'ugc2',
    },
    UGC_5011612: {
        game_origin: 'ugc2',
    },
    UGC_5011625: {
        game_origin: 'ugc2',
    },
    UGC_5011627: {
        game_origin: 'ugc2',
    },
    UGC_5011633: {
        game_origin: 'ugc2',
    },
    UGC_5011638: {
        game_origin: 'ugc2',
    },
    UGC_5011646: {
        game_origin: 'ugc2',
    },
    UGC_5011647: {
        game_origin: 'ugc2',
    },
    UGC_5011659: {
        game_origin: 'ugc2',
    },
    UGC_5011662: {
        game_origin: 'ugc2',
    },
    UGC_5011669: {
        game_origin: 'ugc2',
    },
    UGC_5011670: {
        game_origin: 'ugc2',
    },
    UGC_5011676: {
        game_origin: 'ugc2',
    },
    UGC_5011694: {
        game_origin: 'ugc2',
    },
    UGC_5011706: {
        game_origin: 'ugc2',
    },
    UGC_5011710: {
        game_origin: 'ugc2',
    },
    UGC_5011713: {
        game_origin: 'ugc2',
    },
    UGC_5011715: {
        game_origin: 'ugc2',
    },
    UGC_5011720: {
        game_origin: 'ugc2',
    },
    UGC_5011730: {
        game_origin: 'ugc2',
    },
    UGC_5011734: {
        game_origin: 'ugc2',
    },
    UGC_5011754: {
        game_origin: 'ugc2',
    },
    UGC_5011758: {
        game_origin: 'ugc2',
    },
    UGC_5011767: {
        game_origin: 'ugc2',
    },
    UGC_5011769: {
        game_origin: 'ugc2',
    },
    UGC_5011771: {
        game_origin: 'ugc2',
    },
    UGC_5011783: {
        game_origin: 'ugc2',
    },
    UGC_5011792: {
        game_origin: 'ugc2',
    },
    UGC_5011801: {
        game_origin: 'ugc2',
    },
    UGC_5011820: {
        game_origin: 'ugc2',
    },
    UGC_5011831: {
        game_origin: 'ugc2',
    },
    UGC_5011832: {
        game_origin: 'ugc2',
    },
    UGC_5011846: {
        game_origin: 'ugc2',
    },
    UGC_5011847: {
        game_origin: 'ugc2',
    },
    UGC_5011848: {
        game_origin: 'ugc2',
    },
    UGC_5011857: {
        game_origin: 'ugc2',
    },
    UGC_5011864: {
        game_origin: 'ugc2',
    },
    UGC_5011867: {
        game_origin: 'ugc2',
    },
    UGC_5011928: {
        game_origin: 'ugc2',
    },
    UGC_5011940: {
        game_origin: 'ugc2',
    },
    UGC_5011952: {
        game_origin: 'ugc2',
    },
    UGC_5011962: {
        game_origin: 'ugc2',
    },
    UGC_5011975: {
        game_origin: 'ugc2',
    },
    UGC_5011994: {
        game_origin: 'ugc2',
    },
    UGC_5012036: {
        game_origin: 'ugc2',
    },
    UGC_5012040: {
        game_origin: 'ugc2',
    },
    '18andlife': {
        game_origin: 'rb4_dlc',
    },
    '24kmagic': {
        game_origin: 'rb4_dlc',
    },
    africa: {
        game_origin: 'rb4_dlc',
    },
    aintitfun: {
        game_origin: 'rb4_dlc',
    },
    ainttalkinboutlove: {
        game_origin: 'rb4_dlc',
    },
    andthecradlewillrock: {
        game_origin: 'rb4_dlc',
    },
    angel3: {
        game_origin: 'rb4_dlc',
    },
    badcaseoflovingyou: {
        game_origin: 'rb4_dlc',
    },
    badcompany: {
        game_origin: 'rb4_dlc',
    },
    believer: {
        game_origin: 'rb4_dlc',
    },
    blackbetty: {
        game_origin: 'rb4_dlc',
    },
    blurredlines: {
        game_origin: 'rb4_dlc',
    },
    borntobewild: {
        game_origin: 'rb4_dlc',
    },
    cherrypie: {
        game_origin: 'rb4_dlc',
    },
    closingtime: {
        game_origin: 'rb4_dlc',
    },
    complicated: {
        game_origin: 'rb4_dlc',
    },
    cowboysfromhelllive: {
        game_origin: 'rb4_dlc',
    },
    crazy: {
        game_origin: 'rb4_dlc',
    },
    crazyonyou: {
        game_origin: 'rb4_dlc',
    },
    cryin: {
        game_origin: 'rb4_dlc',
    },
    dancingwithmyself: {
        game_origin: 'rb4_dlc',
    },
    dudelookslikealady: {
        game_origin: 'rb4_dlc',
    },
    escapethepinacoladasong: {
        game_origin: 'rb4_dlc',
    },
    facedownrb4: {
        game_origin: 'rb4_dlc',
    },
    getlucky: {
        game_origin: 'rb4_dlc',
    },
    gimmechocolate: {
        game_origin: 'rb4_dlc',
    },
    hangingbyamoment: {
        game_origin: 'rb4_dlc',
    },
    heavenisaplaceonearth: {
        game_origin: 'rb4_dlc',
    },
    hemorrhage: {
        game_origin: 'rb4_dlc',
    },
    heyya: {
        game_origin: 'rb4_dlc',
    },
    holdtheline: {
        game_origin: 'rb4_dlc',
    },
    hotforteacher: {
        game_origin: 'rb4_dlc',
    },
    idontwanttomissathing: {
        game_origin: 'rb4_dlc',
    },
    ifyoucouldonlysee: {
        game_origin: 'rb4_dlc',
    },
    iris: {
        game_origin: 'rb4_dlc',
    },
    iwannarock: {
        game_origin: 'rb4_dlc',
    },
    janiesgotagun: {
        game_origin: 'rb4_dlc',
    },
    juice: {
        game_origin: 'rb4_dlc',
    },
    jumper: {
        game_origin: 'rb4_dlc',
    },
    labamba: {
        game_origin: 'rb4_dlc',
    },
    lipsofanangel: {
        game_origin: 'rb4_dlc',
    },
    livinontheedge: {
        game_origin: 'rb4_dlc',
    },
    lockedoutofheaven: {
        game_origin: 'rb4_dlc',
    },
    loveinanelevator: {
        game_origin: 'rb4_dlc',
    },
    lovesong: {
        game_origin: 'rb4_dlc',
    },
    nevertoolate: {
        game_origin: 'rb4_dlc',
    },
    oldtownroad: {
        game_origin: 'rb4_dlc',
    },
    pullmeunder: {
        game_origin: 'rb4_dlc',
    },
    radioactive: {
        game_origin: 'rb4_dlc',
    },
    ragdoll: {
        game_origin: 'rb4_dlc',
    },
    redredwine: {
        game_origin: 'rb4_dlc',
    },
    rockthistown: {
        game_origin: 'rb4_dlc',
    },
    runninwiththedevil: {
        game_origin: 'rb4_dlc',
    },
    september: {
        game_origin: 'rb4_dlc',
    },
    seventeen: {
        game_origin: 'rb4_dlc',
    },
    slowride: {
        game_origin: 'rb4_dlc',
    },
    stranglehold: {
        game_origin: 'rb4_dlc',
    },
    takemehomecountryroads2: {
        game_origin: 'rb4_dlc',
    },
    teenagedirtbag: {
        game_origin: 'rb4_dlc',
    },
    thehills: {
        game_origin: 'rb4_dlc',
    },
    thembones: {
        game_origin: 'rb4_dlc',
    },
    thereason: {
        game_origin: 'rb4_dlc',
    },
    thesign: {
        game_origin: 'rb4_dlc',
    },
    thesoundofsilence: {
        game_origin: 'rb4_dlc',
    },
    thestage: {
        game_origin: 'rb4_dlc',
    },
    throughthefireandflames: {
        game_origin: 'rb3dlc',
    },
    trust: {
        game_origin: 'rb4_dlc',
    },
    whatilikeaboutyou: {
        game_origin: 'rb4_dlc',
    },
    witharmswideopen: {
        game_origin: 'rb4_dlc',
    },
    zombie: {
        game_origin: 'rb4_dlc',
    },
    blackbetty2x: {
        game_origin: 'rb4_dlc',
    },
    thestage2x: {
        game_origin: 'rb4_dlc',
    },
    hotforteacher2x: {
        game_origin: 'rb4_dlc',
    },
    tbrb_adayinthelife: {
        game_origin: 'beatles',
    },
    tbrb_aharddaysnight: {
        game_origin: 'beatles',
    },
    tbrb_allyouneedislove: {
        game_origin: 'beatles',
    },
    tbrb_andyourbirdcansing: {
        game_origin: 'beatles',
    },
    tbrb_backintheussr: {
        game_origin: 'beatles',
    },
    tbrb_because: {
        game_origin: 'beatles',
    },
    tbrb_beingformrkite: {
        game_origin: 'beatles',
    },
    tbrb_birthday: {
        game_origin: 'beatles',
    },
    tbrb_boys: {
        game_origin: 'beatles',
    },
    tbrb_cantbuymelove: {
        game_origin: 'beatles',
    },
    tbrb_carrythatweight: {
        game_origin: 'beatles',
    },
    tbrb_cometogether: {
        game_origin: 'beatles',
    },
    tbrb_daytripper: {
        game_origin: 'beatles',
    },
    tbrb_dearprudence: {
        game_origin: 'beatles',
    },
    tbrb_digapony: {
        game_origin: 'beatles',
    },
    tbrb_dontletmedown: {
        game_origin: 'beatles',
    },
    tbrb_drivemycar: {
        game_origin: 'beatles',
    },
    tbrb_eightdaysaweek: {
        game_origin: 'beatles',
    },
    tbrb_fixingahole: {
        game_origin: 'beatles',
    },
    tbrb_getback: {
        game_origin: 'beatles',
    },
    tbrb_gettingbetter: {
        game_origin: 'beatles',
    },
    tbrb_girl: {
        game_origin: 'beatles',
    },
    tbrb_goldencarrytheend: {
        game_origin: 'beatles',
    },
    tbrb_goldenslumbers: {
        game_origin: 'beatles',
    },
    tbrb_goodmorning: {
        game_origin: 'beatles',
    },
    tbrb_hellogoodbye: {
        game_origin: 'beatles',
    },
    tbrb_helterskelter: {
        game_origin: 'beatles',
    },
    tbrb_herecomesthesun: {
        game_origin: 'beatles',
    },
    tbrb_hermajesty: {
        game_origin: 'beatles',
    },
    tbrb_heybulldog: {
        game_origin: 'beatles',
    },
    tbrb_iamthewalrus: {
        game_origin: 'beatles',
    },
    tbrb_ifeelfine: {
        game_origin: 'beatles',
    },
    tbrb_ifineededsomeone: {
        game_origin: 'beatles',
    },
    tbrb_imemine: {
        game_origin: 'beatles',
    },
    tbrb_imlookingthrough: {
        game_origin: 'beatles',
    },
    tbrb_inmylife: {
        game_origin: 'beatles',
    },
    tbrb_isawherstandingthere: {
        game_origin: 'beatles',
    },
    tbrb_ivegotafeeling: {
        game_origin: 'beatles',
    },
    tbrb_iwannabeyourman: {
        game_origin: 'beatles',
    },
    tbrb_iwanttoholdyourhand: {
        game_origin: 'beatles',
    },
    tbrb_iwantyou: {
        game_origin: 'beatles',
    },
    tbrb_knowasecret: {
        game_origin: 'beatles',
    },
    tbrb_lovelyrita: {
        game_origin: 'beatles',
    },
    tbrb_lucyinthesky: {
        game_origin: 'beatles',
    },
    tbrb_maxwells: {
        game_origin: 'beatles',
    },
    tbrb_meanmrmustard: {
        game_origin: 'beatles',
    },
    tbrb_michelle: {
        game_origin: 'beatles',
    },
    tbrb_myguitarweeps: {
        game_origin: 'beatles',
    },
    tbrb_norwegianwood: {
        game_origin: 'beatles',
    },
    tbrb_nowhereman: {
        game_origin: 'beatles',
    },
    tbrb_octopusgarden: {
        game_origin: 'beatles',
    },
    tbrb_ohdarling: {
        game_origin: 'beatles',
    },
    tbrb_paperbackwriter: {
        game_origin: 'beatles',
    },
    tbrb_polythenebathroom: {
        game_origin: 'beatles',
    },
    tbrb_polythenepam: {
        game_origin: 'beatles',
    },
    tbrb_revolution: {
        game_origin: 'beatles',
    },
    tbrb_runforyourlife: {
        game_origin: 'beatles',
    },
    tbrb_sgtpepper: {
        game_origin: 'beatles',
    },
    tbrb_sgtpepperlittlehelp: {
        game_origin: 'beatles',
    },
    tbrb_sgtpepperreprise: {
        game_origin: 'beatles',
    },
    tbrb_shecamethrough: {
        game_origin: 'beatles',
    },
    tbrb_shesleavinghome: {
        game_origin: 'beatles',
    },
    tbrb_shesleavinghomecust: {
        game_origin: 'beatles',
    },
    tbrb_something: {
        game_origin: 'beatles',
    },
    tbrb_sunking: {
        game_origin: 'beatles',
    },
    tbrb_sunkingmeanmustard: {
        game_origin: 'beatles',
    },
    tbrb_taxman: {
        game_origin: 'beatles',
    },
    tbrb_theend: {
        game_origin: 'beatles',
    },
    tbrb_theword: {
        game_origin: 'beatles',
    },
    tbrb_thinkforyourself: {
        game_origin: 'beatles',
    },
    tbrb_tickettoride: {
        game_origin: 'beatles',
    },
    tbrb_tomorrowwithin: {
        game_origin: 'beatles',
    },
    tbrb_twistandshout: {
        game_origin: 'beatles',
    },
    tbrb_wait: {
        game_origin: 'beatles',
    },
    tbrb_whatgoeson: {
        game_origin: 'beatles',
    },
    tbrb_whenim64: {
        game_origin: 'beatles',
    },
    tbrb_withalittlehelp: {
        game_origin: 'beatles',
    },
    tbrb_withinyouwithoutyou: {
        game_origin: 'beatles',
    },
    tbrb_yellowsubmarine: {
        game_origin: 'beatles',
    },
    tbrb_younevergive: {
        game_origin: 'beatles',
    },
    tbrb_youwontseeme: {
        game_origin: 'beatles',
    },
    anywayyouwantit: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    parrtyintheusa: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 6,
        song_tonality: 0,
    },
    aceofspades: {
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 3,
        song_tonality: 1,
    },
    alexchilton: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'punk',
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    chopsuey: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    colonyofbirchmen: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    conventionallover: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 1,
        song_tonality: 0,
    },
    coolforcats: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    floaton: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    getclean: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        vocal_tonic_note: 2,
        song_tonality: 1,
    },
    girlsnotgrey: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'emo',
        vocal_tonic_note: 8,
        song_tonality: 0,
    },
    hellothere: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        genre: 'poprock',
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    iwaswrong: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    kidsinamerica: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        album_art: true,
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    lazyeye: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    maninthebox: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    masterexploder: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 4,
        song_tonality: 1,
    },
    nineintheafternoon: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'emo',
        vocal_tonic_note: 10,
        song_tonality: 0,
    },
    pda: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 11,
        song_tonality: 0,
    },
    pretendweredead: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 7,
        song_tonality: 0,
    },
    ramblinman: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 8,
        song_tonality: 0,
    },
    rebelgirl: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 10,
        song_tonality: 0,
    },
    rocknme: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    shacklersrevenge: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    sowhatchawant: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'hiphoprap',
        vocal_tonic_note: 4,
        song_tonality: 0,
    },
    supremegirl: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 8,
        song_tonality: 0,
    },
    themiddle: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        vocal_tonic_note: 2,
        song_tonality: 0,
    },
    goodriddance: {
        extra_authoring: ['disc_update'],
    },
    letterbomb: {
        extra_authoring: ['disc_update'],
    },
    '7things': {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        genre: 'popdanceelectronic',
    },
    adioslepido: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    again: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    alivepod: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    allamericangirl: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    allstar: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    alotlikeme: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    amicrazy: {
        extra_authoring: ['disc_update'],
    },
    amongtheliving: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    animal: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    anotherwaytodie: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    areyouexperienced: {
        extra_authoring: ['disc_update'],
    },
    asylum: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    badromance: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'popdanceelectronic',
    },
    bandontherunlive: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    bangbang: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    beautiful: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'hiphoprap',
    },
    bigempty: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    bleedamerican: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    bloodonmyhands: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    bluespark: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    borntoquit: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    buffalosoldier: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        genre: 'reggaeska',
        year_released: 1983,
        album_name: 'Confrontation',
        album_track_number: 2,
    },
    buildabridge: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    bulletproof: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    burymealive: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    childrenoftherevolution: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    closertotheedge: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    coffinnails: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    control: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    cosmicdancer: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    couldyoubeloved: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        genre: 'reggaeska',
        year_released: 1980,
        album_name: 'Uprising',
        album_track_number: 8,
    },
    crackerman: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    creepstp: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    darlingdear: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    daysgoby: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    deadandbloated: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    dearestimsosorry: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    decentdaysandnights: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    downfall: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    driver8: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    dropitlikeitshot: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'hiphoprap',
    },
    emptywalls: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    exodus: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        genre: 'reggaeska',
        year_released: 1977,
        album_name: 'Exodus',
        album_track_number: 5,
    },
    fafafafafa: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        genre: 'rbsoulfunk',
    },
    fancy: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    fascination: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    fellinlovewithagirl: {
        extra_authoring: ['disc_update'],
    },
    figuredyouout: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    fijatebien: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    firelive: {
        extra_authoring: ['disc_update'],
    },
    foxeylady: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    futureperfecttense: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    getout: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    givesyouhell: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    gotasdeaguadulce: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    hellontheheart: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    herewearejuggernaut: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    hesarocker: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    heyjoelive: {
        extra_authoring: ['disc_update'],
    },
    heyyou: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    highwaychile: {
        extra_authoring: ['disc_update'],
    },
    holeintheearth: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    holydiver: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    houndsoflove: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    huckleberrycrumble: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    hungrywolf: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    igotmine: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    imnotokay: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    imtheman: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    imustnotthink: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    indians: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    ionlywantyou: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    irishbloodenglishheart: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    ishotthesheriff: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        genre: 'reggaeska',
        year_released: 1973,
        album_name: "Burnin'",
        album_track_number: 3,
    },
    isthislove: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        genre: 'reggaeska',
        year_released: 1978,
        album_name: 'Kaya',
        album_track_number: 3,
    },
    ithappens: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    itstheendoftheworld: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    iturnmycameraon: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    iwannabeyourdog: {
        extra_authoring: ['disc_update'],
    },
    iwantyouto: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    jamming: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        genre: 'reggaeska',
        year_released: 1977,
        album_name: 'Exodus',
        album_track_number: 6,
    },
    jeepster: {
        extra_authoring: ['disc_update'],
    },
    jesusbuiltmyhotrod: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    jesusfreak: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    jetlive: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    justdance: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'popdanceelectronic',
    },
    lacamisanegra: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    letforeverbe: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        genre: 'popdanceelectronic',
    },
    listentothemusic: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    livelifeloud: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    livingthroughme: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    livingwell: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    longtrainrunnin: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    lookinforagoodtime: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    losangeles: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    loveaddict: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    loveorconfusion: {
        extra_authoring: ['disc_update'],
    },
    madhouselive: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    malagente: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    manicdepression: {
        extra_authoring: ['disc_update'],
    },
    maythisbelove: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    meaningoflife: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    meanttolive: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    metalthrashingmadlive: {
        extra_authoring: ['disc_update'],
    },
    minerva: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    monsterskillet: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    mybesttheory: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    neveragain: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    newdarkages: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    nightmare2: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    nineteeneightythree: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    nineteenohone: {
        extra_authoring: ['disc_update'],
    },
    nineteensixtynine: {
        extra_authoring: ['disc_update'],
    },
    nirvana: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    nocontrol: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    nofun: {
        extra_authoring: ['disc_update'],
    },
    nowomannocry: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        genre: 'reggaeska',
        year_released: 1974,
        year_recorded: 1975,
        album_name: 'Live!',
        album_track_number: 5,
    },
    ohyeah: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    onelove: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        genre: 'reggaeska',
        year_released: 1977,
        album_name: 'Exodus',
        album_track_number: 10,
    },
    orangeamber: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    outofline: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    outtathaway: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    pain: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    peekaboo: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    photograph: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    pokerface: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'popdanceelectronic',
    },
    pokerfacecartman: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    proudmary2: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    purplehaze: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    radiofreeeurope: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    rapture: {
        extra_authoring: ['disc_update'],
    },
    rbnmegamix01: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    rebound: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    ride: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    ridininmychevy: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'hiphoprap',
    },
    rocknrollqueen: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    rockstar: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    sandblastedskin: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    satisfymysoul: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        genre: 'reggaeska',
        year_released: 1978,
        album_name: 'Kaya',
        album_track_number: 5,
    },
    saturdaymorning: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    scream: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    seasons: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    seeyouagain: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'popdanceelectronic',
    },
    seizetheday: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    sensualseduction: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'hiphoprap',
    },
    sinsofmyyouth: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    skyisover: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    snoopsupsideyahead: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'hiphoprap',
    },
    stand: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    standintherain: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    standupandshout: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    startallover: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'popdanceelectronic',
    },
    stigmata: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    stiritup: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        genre: 'reggaeska',
        year_released: 1973,
        album_name: 'Catch a Fire',
        album_track_number: 6,
    },
    stonefree: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    stopandstare: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    strangetimes: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    sturmunddrang: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    superman: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thashiznit: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'hiphoprap',
    },
    thatsthahomie: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        genre: 'hiphoprap',
    },
    theanimal: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    theblackparade: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thegreatescape: {
        extra_authoring: ['disc_update'],
        vocal_parts: 3,
    },
    theperfectcrimeno2: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thesedays: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thewindcriesmary: {
        extra_authoring: ['disc_update'],
    },
    thieves: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thirdstonefromthesun: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thisafternoon: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    thischarmingman: {
        extra_authoring: ['disc_update'],
    },
    thisiswar: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    threelittlebirds: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        genre: 'reggaeska',
        year_released: 1977,
        album_name: 'Exodus',
        album_track_number: 9,
    },
    thunderbirdsarego: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    tieyoudown: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    trippinonahole: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    troublecomesrunning: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    voices: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    waitinginvain: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        alternate_path: true,
        genre: 'reggaeska',
        year_released: 1977,
        album_name: 'Exodus',
        album_track_number: 7,
    },
    waituntiltomorrow: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    warnerve: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    weightless: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    whatsthefrequencykenneth: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    whatwasithinkin: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    whoamiwhatsmyname: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    whollstoptherain: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    wingsofabutterfly: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    women: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
    },
    worldgoround: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    wouldyougowithme: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    writingonthewall: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    yerbatero: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    yourtouch: {
        extra_authoring: ['disc_update'],
    },
    dontfeellikethatrbn: {
        vocal_parts: 2,
        extra_authoring: ['disc_update'],
        game_origin: 'rb3dlc',
    },
    freakshowrbn: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
        game_origin: 'rb3dlc',
    },
    totaleclipse: {
        extra_authoring: ['disc_update'],
        game_origin: 'rb3dlc',
    },
    drunkenlullabieslive_rbn: {
        vocal_parts: 3,
        extra_authoring: ['disc_update'],
    },
    peutetreuneangine: {
        name: 'Peut-Être une Angine',
        artist: 'Anaïs',
        game_origin: 'rb3dlc',
    },
    shepherdoffire: {
        album_track_number: 1,
        game_origin: 'rb3dlc',
    },
    silentlucidity: {
        artist: 'Queensrÿche',
        game_origin: 'rb3dlc',
    },
    getupstandup: {
        album_name: "Burnin'",
        album_track_number: 1,
    },
    redemptionsong: {
        alternate_path: true,
        genre: 'reggaeska',
        year_released: 1980,
        album_name: 'Uprising',
        album_track_number: 10,
    },
    letthereberock: {
        genre: 'classicrock',
        vocal_tonic_note: 4,
        song_tonality: 1,
    },
    giveitaway2: {
        name: 'Give It Away (RB3 version)',
        game_origin: 'rb_blitz',
    },
    spoonman2: {
        name: 'Spoonman (RB3 version)',
        game_origin: 'rb_blitz',
    },
    recession: {
        genre: 'popdanceelectronic',
    },
    imsickyall: {
        genre: 'rbsoulfunk',
    },
    loveman: {
        genre: 'rbsoulfunk',
    },
    superbad: {
        genre: 'rbsoulfunk',
        game_origin: 'rb3dlc',
    },
    santeria: {
        genre: 'reggaeska',
        game_origin: 'rb3dlc',
    },
    whatigot: {
        genre: 'reggaeska',
        game_origin: 'rb3dlc',
    },
    wrongway: {
        genre: 'reggaeska',
        game_origin: 'rb3dlc',
    },
    originofspades: {
        genre: 'hiphoprap',
    },
    whoami: {
        genre: 'hiphoprap',
    },
    '20thcenturyboy': {
        year_released: 1973,
        year_recorded: 1994,
    },
    goodvibrationslive: {
        year_released: 1968,
        year_recorded: 1970,
    },
    ifeelgoodalt: {
        year_released: 1974,
        year_recorded: 2010,
    },
    radarlove: {
        album_art: true,
    },
    thepoweroflove: {
        year_released: 1985,
        album_name:
            'Back to the Future: Music from the Motion Picture Soundtrack',
        album_track_number: 1,
    },
    eyeofthetiger: {
        vocal_tonic_note: 0,
        song_tonality: 1,
    },
    psychokiller: {
        vocal_tonic_note: 9,
        song_tonality: 0,
    },
    testify: {
        vocal_tonic_note: 2,
        song_tonality: 1,
    },
    alright: {
        game_origin: 'rbtp_country_2',
    },
    awfulbeautifullife: {
        game_origin: 'rbtp_country_2',
    },
    backwoods: {
        game_origin: 'rbtp_country_2',
    },
    crazytown: {
        game_origin: 'rbtp_country_2',
    },
    giddyonup: {
        game_origin: 'rbtp_country_2',
    },
    intentionalheartache: {
        game_origin: 'rbtp_country_2',
    },
    kissagirl: {
        game_origin: 'rbtp_country_2',
    },
    mamatried: {
        game_origin: 'rbtp_country_2',
    },
    manofme: {
        game_origin: 'rbtp_country_2',
    },
    parrtyfortwo: {
        game_origin: 'rbtp_country_2',
    },
    perfectday: {
        game_origin: 'rbtp_country_2',
    },
    rainisagoodthing: {
        game_origin: 'rbtp_country_2',
    },
    rideadkins: {
        game_origin: 'rbtp_country_2',
    },
    ringoffire2: {
        game_origin: 'rbtp_country_2',
    },
    settlin: {
        game_origin: 'rbtp_country_2',
    },
    sideways: {
        game_origin: 'rbtp_country_2',
    },
    singlewhitefemale: {
        game_origin: 'rbtp_country_2',
    },
    summernights: {
        game_origin: 'rbtp_country_2',
    },
    thatshowcountryboysroll: {
        game_origin: 'rbtp_country_2',
    },
    thenightthelightswentout: {
        game_origin: 'rbtp_country_2',
    },
    twang: {
        game_origin: 'rbtp_country_2',
    },
    alright2: {
        game_origin: 'rb3dlc',
    },
    awfulbeautifullife2: {
        game_origin: 'rb3dlc',
    },
    backwoods2: {
        game_origin: 'rb3dlc',
    },
    crazytown2: {
        game_origin: 'rb3dlc',
    },
    giddyonup2: {
        game_origin: 'rb3dlc',
    },
    intentionalheartache2: {
        game_origin: 'rb3dlc',
    },
    kissagirl2: {
        game_origin: 'rb3dlc',
    },
    mamatried2: {
        game_origin: 'rb3dlc',
    },
    manofme2: {
        game_origin: 'rb3dlc',
    },
    parrtyfortwo2: {
        game_origin: 'rb3dlc',
    },
    perfectday2: {
        game_origin: 'rb3dlc',
    },
    rainisagoodthing2: {
        game_origin: 'rb3dlc',
    },
    rideadkins2: {
        game_origin: 'rb3dlc',
    },
    ringoffire3: {
        game_origin: 'rb3dlc',
    },
    settlin2: {
        game_origin: 'rb3dlc',
    },
    sideways2: {
        game_origin: 'rb3dlc',
    },
    singlewhitefemale2: {
        game_origin: 'rb3dlc',
    },
    summernights2: {
        game_origin: 'rb3dlc',
    },
    thatshowcountryboysroll2: {
        game_origin: 'rb3dlc',
    },
    thenightthelightswentout2: {
        game_origin: 'rb3dlc',
    },
    twang2: {
        game_origin: 'rb3dlc',
    },
    '16candles': {
        game_origin: 'rb3dlc',
    },
    always: {
        game_origin: 'rb3dlc',
    },
    bangyourhead: {
        game_origin: 'rb3dlc',
    },
    cultofpersonality: {
        game_origin: 'rb3dlc',
    },
    deathontwolegs: {
        game_origin: 'rb3dlc',
    },
    diamondeyes: {
        game_origin: 'rb3dlc',
    },
    imstillstanding: {
        game_origin: 'rb3dlc',
    },
    jessiesgirl: {
        game_origin: 'rb3dlc',
    },
    jungleboogie: {
        game_origin: 'rb3dlc',
    },
    kidsinthestreet: {
        game_origin: 'rb3dlc',
    },
    moveslikejagger: {
        game_origin: 'rb3dlc',
    },
    oncebittentwiceshy: {
        game_origin: 'rb3dlc',
    },
    oneweek: {
        game_origin: 'rb3dlc',
    },
    pumpedupkicks: {
        game_origin: 'rb3dlc',
    },
    raiseyourglass: {
        game_origin: 'rb3dlc',
    },
    shine: {
        game_origin: 'rb3dlc',
    },
    shout: {
        game_origin: 'rb3dlc',
    },
    sing: {
        game_origin: 'rb3dlc',
    },
    sofaraway: {
        game_origin: 'rb3dlc',
    },
    thesedaysfoo: {
        game_origin: 'rb3dlc',
    },
    thewickerman: {
        game_origin: 'rb3dlc',
    },
    weareyoung: {
        game_origin: 'rb3dlc',
    },
    whatdoesntkillyou2: {
        game_origin: 'rb3dlc',
    },
    '2112full': {
        game_origin: 'rb3dlc',
    },
    '2112pt1': {
        game_origin: 'rb3dlc',
    },
    '2112pt2': {
        game_origin: 'rb3dlc',
    },
    '2112pt3': {
        game_origin: 'rb3dlc',
    },
    '5minutesalone': {
        game_origin: 'rb3dlc',
    },
    adolescents: {
        game_origin: 'rb3dlc',
    },
    aerials: {
        game_origin: 'rb3dlc',
    },
    airplanes: {
        game_origin: 'rb3dlc',
    },
    alittlerespect: {
        game_origin: 'rb3dlc',
    },
    allalongthewatchtower: {
        game_origin: 'rb3dlc',
    },
    allapologies: {
        game_origin: 'rb3dlc',
    },
    alliwannado: {
        game_origin: 'rb3dlc',
    },
    alone: {
        game_origin: 'rb3dlc',
    },
    amaranth: {
        game_origin: 'rb3dlc',
    },
    amber: {
        game_origin: 'rb3dlc',
    },
    americanpie: {
        game_origin: 'rb3dlc',
    },
    angel2: {
        game_origin: 'rb3dlc',
    },
    angryyoungman: {
        game_origin: 'rb3dlc',
    },
    animalihavebecome: {
        game_origin: 'rb3dlc',
    },
    animallive2: {
        game_origin: 'rb3dlc',
    },
    animals: {
        game_origin: 'rb3dlc',
    },
    antsmarching: {
        game_origin: 'rb3dlc',
    },
    appetiterbn: {
        game_origin: 'rb3dlc',
    },
    atoutlemonde: {
        game_origin: 'rb3dlc',
    },
    audienceofone: {
        game_origin: 'rb3dlc',
    },
    awarriorscall: {
        game_origin: 'rb3dlc',
    },
    away: {
        game_origin: 'rb3dlc',
    },
    awhitershadeofpale: {
        game_origin: 'rb3dlc',
    },
    backinthesaddle: {
        game_origin: 'rb3dlc',
    },
    backtotheshack: {
        game_origin: 'rb3dlc',
    },
    badmedicine: {
        game_origin: 'rb3dlc',
    },
    bandontherun: {
        game_origin: 'rb3dlc',
    },
    barkatthemoon: {
        game_origin: 'rb3dlc',
    },
    barracuda: {
        game_origin: 'rb3dlc',
    },
    beautifuldisaster: {
        game_origin: 'rb3dlc',
    },
    beforehecheats: {
        game_origin: 'rb3dlc',
    },
    benddownlow: {
        game_origin: 'rb3dlc',
    },
    bent: {
        game_origin: 'rb3dlc',
    },
    bicyclerace: {
        game_origin: 'rb3dlc',
    },
    bigbangbaby: {
        game_origin: 'rb3dlc',
    },
    bigshot: {
        game_origin: 'rb3dlc',
    },
    billionaire: {
        game_origin: 'rb3dlc',
    },
    blackmagicwoman: {
        game_origin: 'rb3dlc',
    },
    blazeofglory: {
        game_origin: 'rb3dlc',
    },
    bloodandthunder: {
        game_origin: 'rb3dlc',
    },
    blowuptheoutsideworld: {
        game_origin: 'rb3dlc',
    },
    bluebayou: {
        game_origin: 'rb3dlc',
    },
    bluejean: {
        game_origin: 'rb3dlc',
    },
    bluemonday: {
        game_origin: 'rb3dlc',
    },
    blurry: {
        game_origin: 'rb3dlc',
    },
    bombtrack: {
        game_origin: 'rb3dlc',
    },
    boom: {
        game_origin: 'rb3dlc',
    },
    bornthisway: {
        game_origin: 'rb3dlc',
    },
    brandnewcadillac: {
        game_origin: 'rb3dlc',
    },
    breaking: {
        game_origin: 'rb3dlc',
    },
    breakingthehabit: {
        game_origin: 'rb3dlc',
    },
    breath: {
        game_origin: 'rb3dlc',
    },
    brickbyboringbrick: {
        game_origin: 'rb3dlc',
    },
    bringinontheheartbreak: {
        game_origin: 'rb3dlc',
    },
    bully: {
        game_origin: 'rb3dlc',
    },
    burdeninmyhand: {
        game_origin: 'rb3dlc',
    },
    burninandlootin2: {
        game_origin: 'rb3dlc',
    },
    burningdownthehouse: {
        game_origin: 'rb3dlc',
    },
    burnitdown: {
        game_origin: 'rb3dlc',
    },
    bytheway: {
        game_origin: 'rb3dlc',
    },
    californication: {
        game_origin: 'rb3dlc',
    },
    callmemaybe: {
        game_origin: 'rb3dlc',
    },
    cantgetenough: {
        game_origin: 'rb3dlc',
    },
    cantgetenoughofyoubaby: {
        game_origin: 'rb3dlc',
    },
    captainjack: {
        game_origin: 'rb3dlc',
    },
    caravan: {
        game_origin: 'rb3dlc',
    },
    childintime: {
        game_origin: 'rb3dlc',
    },
    citiesindust: {
        game_origin: 'rb3dlc',
    },
    clampdown: {
        game_origin: 'rb3dlc',
    },
    clocks: {
        game_origin: 'rb3dlc',
    },
    closer2: {
        game_origin: 'rb3dlc',
    },
    cold: {
        game_origin: 'rb3dlc',
    },
    comedown: {
        game_origin: 'rb3dlc',
    },
    comeoneileen: {
        game_origin: 'rb3dlc',
    },
    cominginfromthecold: {
        game_origin: 'rb3dlc',
    },
    control2: {
        game_origin: 'rb3dlc',
    },
    cowboycasanova: {
        game_origin: 'rb3dlc',
    },
    crawling2: {
        game_origin: 'rb3dlc',
    },
    crawlingbacktoyou: {
        game_origin: 'rb3dlc',
    },
    crawlinginthedark: {
        game_origin: 'rb3dlc',
    },
    crippledinside: {
        game_origin: 'rb3dlc',
    },
    crowandthebutterfly: {
        game_origin: 'rb3dlc',
    },
    crycrycry: {
        game_origin: 'rb3dlc',
    },
    crythunder: {
        game_origin: 'rb3dlc',
    },
    curloftheburl: {
        game_origin: 'rb3dlc',
    },
    dameaire2: {
        game_origin: 'rb3dlc',
    },
    dancedance: {
        game_origin: 'rb3dlc',
    },
    daysgoby2: {
        game_origin: 'rb3dlc',
    },
    deathorglory: {
        game_origin: 'rb3dlc',
    },
    diaryofamadman: {
        game_origin: 'rb3dlc',
    },
    dismoi: {
        game_origin: 'rb3dlc',
    },
    dogdaysareover: {
        game_origin: 'rb3dlc',
    },
    dollydagger: {
        game_origin: 'rb3dlc',
    },
    dontknowwhatyougot: {
        game_origin: 'rb3dlc',
    },
    dontletthesungodownonme: {
        game_origin: 'rb3dlc',
    },
    dontstop2: {
        game_origin: 'rb3dlc',
    },
    dontstopmenow: {
        game_origin: 'rb3dlc',
    },
    donttakeyourguns: {
        game_origin: 'rb3dlc',
    },
    donttalktostrangers: {
        game_origin: 'rb3dlc',
    },
    dontyouwantme: {
        game_origin: 'rb3dlc',
    },
    down2: {
        game_origin: 'rb3dlc',
    },
    downunder: {
        game_origin: 'rb3dlc',
    },
    doyoubelieveinlove: {
        game_origin: 'rb3dlc',
    },
    doyoufeellikewedo: {
        game_origin: 'rb3dlc',
    },
    doyoureallywanttohurtme: {
        game_origin: 'rb3dlc',
    },
    dreambaby: {
        game_origin: 'rb3dlc',
    },
    dreamonlive: {
        game_origin: 'rb3dlc',
    },
    dreampolice: {
        game_origin: 'rb3dlc',
    },
    dreams: {
        game_origin: 'rb3dlc',
    },
    driveincu: {
        game_origin: 'rb3dlc',
    },
    dropsofjupiter: {
        game_origin: 'rb3dlc',
    },
    edgeof17: {
        game_origin: 'rb3dlc',
    },
    everybodysfool: {
        game_origin: 'rb3dlc',
    },
    everybodywantsyou: {
        game_origin: 'rb3dlc',
    },
    everybreathyoutake: {
        game_origin: 'rb3dlc',
    },
    everyrosehasitsthorn: {
        game_origin: 'rb3dlc',
    },
    everyteardrop: {
        game_origin: 'rb3dlc',
    },
    everythingzen: {
        game_origin: 'rb3dlc',
    },
    facetothefloor: {
        game_origin: 'rb3dlc',
    },
    fallingawayfromme: {
        game_origin: 'rb3dlc',
    },
    fame: {
        game_origin: 'rb3dlc',
    },
    fantasma2: {
        game_origin: 'rb3dlc',
    },
    fatlip: {
        game_origin: 'rb3dlc',
    },
    feelinstronger: {
        game_origin: 'rb3dlc',
    },
    fellonblackdays: {
        game_origin: 'rb3dlc',
    },
    fireandice: {
        game_origin: 'rb3dlc',
    },
    fireflies: {
        game_origin: 'rb3dlc',
    },
    fireohio: {
        game_origin: 'rb3dlc',
    },
    fivefeethighandrising: {
        game_origin: 'rb3dlc',
    },
    fixyou: {
        game_origin: 'rb3dlc',
    },
    flightoficarus: {
        game_origin: 'rb3dlc',
    },
    flybynight: {
        game_origin: 'rb3dlc',
    },
    flyinghighagain: {
        game_origin: 'rb3dlc',
    },
    folsomprisonblues: {
        game_origin: 'rb3dlc',
    },
    footloose: {
        game_origin: 'rb3dlc',
    },
    forever2: {
        game_origin: 'rb3dlc',
    },
    forwhatitsworth: {
        game_origin: 'rb3dlc',
    },
    fourhorsemen: {
        game_origin: 'rb3dlc',
    },
    frankenstein: {
        game_origin: 'rb3dlc',
    },
    freakonaleash: {
        game_origin: 'rb3dlc',
    },
    freedom: {
        game_origin: 'rb3dlc',
    },
    freeride: {
        game_origin: 'rb3dlc',
    },
    freezeframe: {
        game_origin: 'rb3dlc',
    },
    fromoutofnowhere2: {
        game_origin: 'rb3dlc',
    },
    funhouse: {
        game_origin: 'rb3dlc',
    },
    getthepartystarted: {
        game_origin: 'rb3dlc',
    },
    ghostofperdition: {
        game_origin: 'rb3dlc',
    },
    gimmesometruth: {
        game_origin: 'rb3dlc',
    },
    gloryoflove: {
        game_origin: 'rb3dlc',
    },
    goldcobra: {
        game_origin: 'rb3dlc',
    },
    golddustwoman: {
        game_origin: 'rb3dlc',
    },
    gonzo: {
        game_origin: 'rb3dlc',
    },
    goodgirl: {
        game_origin: 'rb3dlc',
    },
    gotyouwhereiwantyou: {
        game_origin: 'rb3dlc',
    },
    grenade: {
        game_origin: 'rb3dlc',
    },
    gypsyeyes: {
        game_origin: 'rb3dlc',
    },
    hammertofall: {
        game_origin: 'rb3dlc',
    },
    happy: {
        game_origin: 'rb3dlc',
    },
    happyxmas: {
        game_origin: 'rb3dlc',
    },
    hardrockhallelujah: {
        game_origin: 'rb3dlc',
    },
    hashpipe: {
        game_origin: 'rb3dlc',
    },
    hateful: {
        game_origin: 'rb3dlc',
    },
    haveaniceday: {
        game_origin: 'rb3dlc',
    },
    haveyoueverseen: {
        game_origin: 'rb3dlc',
    },
    headlikeahole: {
        game_origin: 'rb3dlc',
    },
    headoverheels: {
        game_origin: 'rb3dlc',
    },
    heartofthesunrise: {
        game_origin: 'rb3dlc',
    },
    heartshapedbox: {
        game_origin: 'rb3dlc',
    },
    helena: {
        game_origin: 'rb3dlc',
    },
    helenabeat: {
        game_origin: 'rb3dlc',
    },
    helenwheels: {
        game_origin: 'rb3dlc',
    },
    helloiloveyou: {
        game_origin: 'rb3dlc',
    },
    helpisontheway: {
        game_origin: 'rb3dlc',
    },
    herewithoutyou: {
        game_origin: 'rb3dlc',
    },
    higherground: {
        game_origin: 'rb3dlc',
    },
    holdonloosely: {
        game_origin: 'rb3dlc',
    },
    hotblooded: {
        game_origin: 'rb3dlc',
    },
    how: {
        game_origin: 'rb3dlc',
    },
    howdoyousleep: {
        game_origin: 'rb3dlc',
    },
    howfarwevecome: {
        game_origin: 'rb3dlc',
    },
    howlinforyou: {
        game_origin: 'rb3dlc',
    },
    howyouremindme: {
        game_origin: 'rb3dlc',
    },
    hypnotize: {
        game_origin: 'rb3dlc',
    },
    ialone: {
        game_origin: 'rb3dlc',
    },
    ibelieveinathingcalled: {
        game_origin: 'rb3dlc',
    },
    icantgoforthat: {
        game_origin: 'rb3dlc',
    },
    idontknow: {
        game_origin: 'rb3dlc',
    },
    idontwannabeasoldier: {
        game_origin: 'rb3dlc',
    },
    iftodaywasyourlastday: {
        game_origin: 'rb3dlc',
    },
    ifyouleavemenow: {
        game_origin: 'rb3dlc',
    },
    ignorance: {
        game_origin: 'rb3dlc',
    },
    igotoextremes: {
        game_origin: 'rb3dlc',
    },
    igotstripes: {
        game_origin: 'rb3dlc',
    },
    ihateeverything: {
        game_origin: 'rb3dlc',
    },
    ijustdiedinyourarms: {
        game_origin: 'rb3dlc',
    },
    illbethereforyou: {
        game_origin: 'rb3dlc',
    },
    imalright: {
        game_origin: 'rb3dlc',
    },
    imbroken: {
        game_origin: 'rb3dlc',
    },
    imeltwithyou: {
        game_origin: 'rb3dlc',
    },
    iminlovewithmycar: {
        game_origin: 'rb3dlc',
    },
    imnotdown: {
        game_origin: 'rb3dlc',
    },
    infinitedreams: {
        game_origin: 'rb3dlc',
    },
    inmyhead: {
        game_origin: 'rb3dlc',
    },
    intheend_linkin2: {
        game_origin: 'rb3dlc',
    },
    invincible: {
        game_origin: 'rb3dlc',
    },
    inwaves: {
        game_origin: 'rb3dlc',
    },
    iran: {
        game_origin: 'rb3dlc',
    },
    islandinthesun: {
        game_origin: 'rb3dlc',
    },
    istillbelieve: {
        game_origin: 'rb3dlc',
    },
    itsbeenawhile: {
        game_origin: 'rb3dlc',
    },
    itsmylife2: {
        game_origin: 'rb3dlc',
    },
    itsnotover: {
        game_origin: 'rb3dlc',
    },
    itssohard: {
        game_origin: 'rb3dlc',
    },
    itsstillrockandroll: {
        game_origin: 'rb3dlc',
    },
    ivedoneeverything: {
        game_origin: 'rb3dlc',
    },
    iveseenallgoodpeople: {
        game_origin: 'rb3dlc',
    },
    iwalktheline: {
        game_origin: 'rb3dlc',
    },
    iwantanewdrug: {
        game_origin: 'rb3dlc',
    },
    iwantitall2: {
        game_origin: 'rb3dlc',
    },
    iwanttobreakfree2: {
        game_origin: 'rb3dlc',
    },
    iwanttoknowwhatloveis: {
        game_origin: 'rb3dlc',
    },
    iwantyoutowantme: {
        game_origin: 'rb3dlc',
    },
    iwillpossessyourheart: {
        game_origin: 'rb3dlc',
    },
    iwish: {
        game_origin: 'rb3dlc',
    },
    iwritesins: {
        game_origin: 'rb3dlc',
    },
    jealousguy: {
        game_origin: 'rb3dlc',
    },
    jenny: {
        game_origin: 'rb3dlc',
    },
    jerkitout: {
        game_origin: 'rb3dlc',
    },
    jessica: {
        game_origin: 'rb3dlc',
    },
    jimmyjazz: {
        game_origin: 'rb3dlc',
    },
    jivetalkin: {
        game_origin: 'rb3dlc',
    },
    justthewayyouare: {
        game_origin: 'rb3dlc',
    },
    kaya: {
        game_origin: 'rb3dlc',
    },
    keeponlovingyou: {
        game_origin: 'rb3dlc',
    },
    keepyourselfalive: {
        game_origin: 'rb3dlc',
    },
    killerqueen2: {
        game_origin: 'rb3dlc',
    },
    killinginthename: {
        game_origin: 'rb3dlc',
    },
    kingofrock: {
        game_origin: 'rb3dlc',
    },
    kokakola: {
        game_origin: 'rb3dlc',
    },
    landslide: {
        game_origin: 'rb3dlc',
    },
    lawoman: {
        game_origin: 'rb3dlc',
    },
    layyourhandsonme: {
        game_origin: 'rb3dlc',
    },
    leftbehind: {
        game_origin: 'rb3dlc',
    },
    legendarychild: {
        game_origin: 'rb3dlc',
    },
    letmerollit: {
        game_origin: 'rb3dlc',
    },
    lightmyfire: {
        game_origin: 'rb3dlc',
    },
    lightningcrashes: {
        game_origin: 'rb3dlc',
    },
    lithium: {
        game_origin: 'rb3dlc',
    },
    livelyupyourself2: {
        game_origin: 'rb3dlc',
    },
    livingdeadgirl: {
        game_origin: 'rb3dlc',
    },
    livingforthecity: {
        game_origin: 'rb3dlc',
    },
    livinonaprayer2: {
        game_origin: 'rb3dlc',
    },
    lodi: {
        game_origin: 'rb3dlc',
    },
    londoncalling: {
        game_origin: 'rb3dlc',
    },
    lonelyboy: {
        game_origin: 'rb3dlc',
    },
    longaway: {
        game_origin: 'rb3dlc',
    },
    longhotsummernight: {
        game_origin: 'rb3dlc',
    },
    longroadtoruin: {
        game_origin: 'rb3dlc',
    },
    lookaround: {
        game_origin: 'rb3dlc',
    },
    lostinthesupermarket: {
        game_origin: 'rb3dlc',
    },
    lovegame: {
        game_origin: 'rb3dlc',
    },
    lovehermadly: {
        game_origin: 'rb3dlc',
    },
    lovehurts: {
        game_origin: 'rb3dlc',
    },
    loveisabattlefield: {
        game_origin: 'rb3dlc',
    },
    loveme2x: {
        game_origin: 'rb3dlc',
    },
    loveralot: {
        game_origin: 'rb3dlc',
    },
    loverollercoaster: {
        game_origin: 'rb3dlc',
    },
    loversrock: {
        game_origin: 'rb3dlc',
    },
    loveshack: {
        game_origin: 'rb3dlc',
    },
    lovewilltearusapart: {
        game_origin: 'rb3dlc',
    },
    machinehead: {
        game_origin: 'rb3dlc',
    },
    madeofscars: {
        game_origin: 'rb3dlc',
    },
    makemesmile2: {
        game_origin: 'rb3dlc',
    },
    makesomenoise: {
        game_origin: 'rb3dlc',
    },
    mamaimcominghome: {
        game_origin: 'rb3dlc',
    },
    maneater2: {
        game_origin: 'rb3dlc',
    },
    manonthemoon: {
        game_origin: 'rb3dlc',
    },
    marryyou: {
        game_origin: 'rb3dlc',
    },
    maybeimamazed: {
        game_origin: 'rb3dlc',
    },
    meandbobbymcgee: {
        game_origin: 'rb3dlc',
    },
    mercy: {
        game_origin: 'rb3dlc',
    },
    miami2017: {
        game_origin: 'rb3dlc',
    },
    misery: {
        game_origin: 'rb3dlc',
    },
    modernlove: {
        game_origin: 'rb3dlc',
    },
    monarchyofroses: {
        game_origin: 'rb3dlc',
    },
    morethanwords: {
        game_origin: 'rb3dlc',
    },
    mouthforwar: {
        game_origin: 'rb3dlc',
    },
    movinout: {
        game_origin: 'rb3dlc',
    },
    mrcrowley: {
        game_origin: 'rb3dlc',
    },
    musthavedonesomething: {
        game_origin: 'rb3dlc',
    },
    mybody: {
        game_origin: 'rb3dlc',
    },
    mylife: {
        game_origin: 'rb3dlc',
    },
    myownsummer: {
        game_origin: 'rb3dlc',
    },
    myway2: {
        game_origin: 'rb3dlc',
    },
    needyounow: {
        game_origin: 'rb3dlc',
    },
    nevergonnagiveyouup: {
        game_origin: 'rb3dlc',
    },
    neverletmedownagain: {
        game_origin: 'rb3dlc',
    },
    newdivide: {
        game_origin: 'rb3dlc',
    },
    nightfever: {
        game_origin: 'rb3dlc',
    },
    nightsonbroadway: {
        game_origin: 'rb3dlc',
    },
    nobodysfool: {
        game_origin: 'rb3dlc',
    },
    nomoretrouble: {
        game_origin: 'rb3dlc',
    },
    nookie2: {
        game_origin: 'rb3dlc',
    },
    nosleeptillbrooklyn: {
        game_origin: 'rb3dlc',
    },
    nosurprise: {
        game_origin: 'rb3dlc',
    },
    notagain: {
        game_origin: 'rb3dlc',
    },
    nothinbutagoodtime: {
        game_origin: 'rb3dlc',
    },
    nowimhere: {
        game_origin: 'rb3dlc',
    },
    numb2: {
        game_origin: 'rb3dlc',
    },
    nureinwort: {
        game_origin: 'rb3dlc',
    },
    obsession: {
        game_origin: 'rb3dlc',
    },
    ohlove: {
        game_origin: 'rb3dlc',
    },
    ohmylove: {
        game_origin: 'rb3dlc',
    },
    ohyoko: {
        game_origin: 'rb3dlc',
    },
    onevision2: {
        game_origin: 'rb3dlc',
    },
    onlyone: {
        game_origin: 'rb3dlc',
    },
    onlythegooddieyoung: {
        game_origin: 'rb3dlc',
    },
    onlythelonely: {
        game_origin: 'rb3dlc',
    },
    onthebacksofangels: {
        game_origin: 'rb3dlc',
    },
    openmyeyes2: {
        game_origin: 'rb3dlc',
    },
    operationgroundandpound: {
        game_origin: 'rb3dlc',
    },
    otherside: {
        game_origin: 'rb3dlc',
    },
    outshined: {
        game_origin: 'rb3dlc',
    },
    overkill: {
        game_origin: 'rb3dlc',
    },
    overthemountain: {
        game_origin: 'rb3dlc',
    },
    ownerofalonelyheart: {
        game_origin: 'rb3dlc',
    },
    pain2: {
        game_origin: 'rb3dlc',
    },
    panic: {
        game_origin: 'rb3dlc',
    },
    paparazzi: {
        game_origin: 'rb3dlc',
    },
    paradisebythe: {
        game_origin: 'rb3dlc',
    },
    paralleluniverse: {
        game_origin: 'rb3dlc',
    },
    pardonme: {
        game_origin: 'rb3dlc',
    },
    parrtyhard: {
        game_origin: 'rb3dlc',
    },
    peacefrog: {
        game_origin: 'rb3dlc',
    },
    peoplearestrange: {
        game_origin: 'rb3dlc',
    },
    perfectsituation: {
        game_origin: 'rb3dlc',
    },
    personaljesus: {
        game_origin: 'rb3dlc',
    },
    phantomoftheopera: {
        game_origin: 'rb3dlc',
    },
    photograph2: {
        game_origin: 'rb3dlc',
    },
    pianoman: {
        game_origin: 'rb3dlc',
    },
    playthegame: {
        game_origin: 'rb3dlc',
    },
    pleasedontleaveme: {
        game_origin: 'rb3dlc',
    },
    policyoftruth: {
        game_origin: 'rb3dlc',
    },
    possumkingdom: {
        game_origin: 'rb3dlc',
    },
    poursomesugarlive: {
        game_origin: 'rb3dlc',
    },
    powerandthepassion: {
        game_origin: 'rb3dlc',
    },
    pressure: {
        game_origin: 'rb3dlc',
    },
    pressure2: {
        game_origin: 'rb3dlc',
    },
    privateeyes: {
        game_origin: 'rb3dlc',
    },
    proibito: {
        game_origin: 'rb3dlc',
    },
    promisesinthedark: {
        game_origin: 'rb3dlc',
    },
    publicenemyno1: {
        game_origin: 'rb3dlc',
    },
    pulseofthemaggots: {
        game_origin: 'rb3dlc',
    },
    radiogaga: {
        game_origin: 'rb3dlc',
    },
    raindancemaggie: {
        game_origin: 'rb3dlc',
    },
    rainingblood: {
        game_origin: 'rb3dlc',
    },
    rapeme: {
        game_origin: 'rb3dlc',
    },
    rearranged: {
        game_origin: 'rb3dlc',
    },
    rebellovesong: {
        game_origin: 'rb3dlc',
    },
    relax: {
        game_origin: 'rb3dlc',
    },
    remedy: {
        game_origin: 'rb3dlc',
    },
    revolutionrock: {
        game_origin: 'rb3dlc',
    },
    rhiannon: {
        game_origin: 'rb3dlc',
    },
    ridersonthestorm: {
        game_origin: 'rb3dlc',
    },
    rimeoftheancientmariner: {
        game_origin: 'rb3dlc',
    },
    rizeofthefenix: {
        game_origin: 'rb3dlc',
    },
    roadhouseblues: {
        game_origin: 'rb3dlc',
    },
    rockandrollallnitelive: {
        game_origin: 'rb3dlc',
    },
    rockofages: {
        game_origin: 'rb3dlc',
    },
    rockthecasbah: {
        game_origin: 'rb3dlc',
    },
    rope: {
        game_origin: 'rb3dlc',
    },
    rosanna: {
        game_origin: 'rb3dlc',
    },
    rudiecantfail: {
        game_origin: 'rb3dlc',
    },
    rumine: {
        game_origin: 'rb3dlc',
    },
    runaway: {
        game_origin: 'rb3dlc',
    },
    rustycage: {
        game_origin: 'rb3dlc',
    },
    sanctified: {
        game_origin: 'rb3dlc',
    },
    santamonica: {
        game_origin: 'rb3dlc',
    },
    satellite: {
        game_origin: 'rb3dlc',
    },
    saturdaynightspecial: {
        game_origin: 'rb3dlc',
    },
    saygoodbyetohollywood: {
        game_origin: 'rb3dlc',
    },
    sayyoullhauntme: {
        game_origin: 'rb3dlc',
    },
    scartissue: {
        game_origin: 'rb3dlc',
    },
    scenesfromanitalian: {
        game_origin: 'rb3dlc',
    },
    screamaimfire: {
        game_origin: 'rb3dlc',
    },
    seasonsintheabyss: {
        game_origin: 'rb3dlc',
    },
    secondchance: {
        game_origin: 'rb3dlc',
    },
    sendthepainbelow: {
        game_origin: 'rb3dlc',
    },
    sevenseasofrhye: {
        game_origin: 'rb3dlc',
    },
    seventhson: {
        game_origin: 'rb3dlc',
    },
    sexandcandy: {
        game_origin: 'rb3dlc',
    },
    shadowoftheday: {
        game_origin: 'rb3dlc',
    },
    shadowsofthenight: {
        game_origin: 'rb3dlc',
    },
    shehatesme: {
        game_origin: 'rb3dlc',
    },
    shelterme: {
        game_origin: 'rb3dlc',
    },
    shesalwaysawoman: {
        game_origin: 'rb3dlc',
    },
    shessomean: {
        game_origin: 'rb3dlc',
    },
    shetalkstoangels: {
        game_origin: 'rb3dlc',
    },
    shootingthemoon: {
        game_origin: 'rb3dlc',
    },
    sirduke: {
        game_origin: 'rb3dlc',
    },
    sleepnowinthefire: {
        game_origin: 'rb3dlc',
    },
    smallaxe: {
        game_origin: 'rb3dlc',
    },
    smooth: {
        game_origin: 'rb3dlc',
    },
    snuff: {
        game_origin: 'rb3dlc',
    },
    sober: {
        game_origin: 'rb3dlc',
    },
    sofaraway2: {
        game_origin: 'rb3dlc',
    },
    solonely: {
        game_origin: 'rb3dlc',
    },
    somebodytolove2: {
        game_origin: 'rb3dlc',
    },
    somebodytoloveairplane: {
        game_origin: 'rb3dlc',
    },
    someday: {
        game_origin: 'rb3dlc',
    },
    somethingfromnothing: {
        game_origin: 'rb3dlc',
    },
    sometimessalvation: {
        game_origin: 'rb3dlc',
    },
    somewhereibelong2: {
        game_origin: 'rb3dlc',
    },
    somuchtosay: {
        game_origin: 'rb3dlc',
    },
    soonerorlater: {
        game_origin: 'rb3dlc',
    },
    soulkitchen: {
        game_origin: 'rb3dlc',
    },
    southofheaven: {
        game_origin: 'rb3dlc',
    },
    southsideofthesky: {
        game_origin: 'rb3dlc',
    },
    spanishbombs: {
        game_origin: 'rb3dlc',
    },
    spillthewine: {
        game_origin: 'rb3dlc',
    },
    spinningwheel: {
        game_origin: 'rb3dlc',
    },
    stackedactors: {
        game_origin: 'rb3dlc',
    },
    standback: {
        game_origin: 'rb3dlc',
    },
    starshiptrooper: {
        game_origin: 'rb3dlc',
    },
    startingover: {
        game_origin: 'rb3dlc',
    },
    startingtoappreciate: {
        game_origin: 'rb3dlc',
    },
    stash: {
        game_origin: 'rb3dlc',
    },
    stayinalive: {
        game_origin: 'rb3dlc',
    },
    staytogetherforthekids: {
        game_origin: 'rb3dlc',
    },
    stealaway: {
        game_origin: 'rb3dlc',
    },
    stereohearts: {
        game_origin: 'rb3dlc',
    },
    stillofthenight: {
        game_origin: 'rb3dlc',
    },
    stillwaiting: {
        game_origin: 'rb3dlc',
    },
    stonecoldcrazy: {
        game_origin: 'rb3dlc',
    },
    stopdragginmyheart: {
        game_origin: 'rb3dlc',
    },
    strutterlive: {
        game_origin: 'rb3dlc',
    },
    subdivisions: {
        game_origin: 'rb3dlc',
    },
    sugarweregoindown: {
        game_origin: 'rb3dlc',
    },
    superchargerheaven: {
        game_origin: 'rb3dlc',
    },
    superstition: {
        game_origin: 'rb3dlc',
    },
    surrender: {
        game_origin: 'rb3dlc',
    },
    susieq: {
        game_origin: 'rb3dlc',
    },
    sweetemotion: {
        game_origin: 'rb3dlc',
    },
    sweethomealabamalive: {
        game_origin: 'rb3dlc',
    },
    symphonyofdestruction: {
        game_origin: 'rb3dlc',
    },
    taintedlove: {
        game_origin: 'rb3dlc',
    },
    takeonme: {
        game_origin: 'rb3dlc',
    },
    talkdirtytome: {
        game_origin: 'rb3dlc',
    },
    tearsdontfall: {
        game_origin: 'rb3dlc',
    },
    teenagers: {
        game_origin: 'rb3dlc',
    },
    teenangst: {
        game_origin: 'rb3dlc',
    },
    tellmesomethinggood: {
        game_origin: 'rb3dlc',
    },
    tenementfunster: {
        game_origin: 'rb3dlc',
    },
    tennesseeflattopbox: {
        game_origin: 'rb3dlc',
    },
    terriblelie: {
        game_origin: 'rb3dlc',
    },
    theadventure: {
        game_origin: 'rb3dlc',
    },
    theanthem: {
        game_origin: 'rb3dlc',
    },
    thearmsofsorrow: {
        game_origin: 'rb3dlc',
    },
    theballadofirahayes: {
        game_origin: 'rb3dlc',
    },
    thebitchisback: {
        game_origin: 'rb3dlc',
    },
    thecardcheat: {
        game_origin: 'rb3dlc',
    },
    thecrystalship: {
        game_origin: 'rb3dlc',
    },
    thedayitriedtolive: {
        game_origin: 'rb3dlc',
    },
    theendofheartache: {
        game_origin: 'rb3dlc',
    },
    theentertainer: {
        game_origin: 'rb3dlc',
    },
    thegoodleftundone: {
        game_origin: 'rb3dlc',
    },
    thegoodlife: {
        game_origin: 'rb3dlc',
    },
    thegunsofbrixton: {
        game_origin: 'rb3dlc',
    },
    theheartofrockandroll: {
        game_origin: 'rb3dlc',
    },
    thelocomotion: {
        game_origin: 'rb3dlc',
    },
    thembellyfull: {
        game_origin: 'rb3dlc',
    },
    theonlyexception: {
        game_origin: 'rb3dlc',
    },
    theonlytime: {
        game_origin: 'rb3dlc',
    },
    thepartysong: {
        game_origin: 'rb3dlc',
    },
    theprisoner: {
        game_origin: 'rb3dlc',
    },
    thered: {
        game_origin: 'rb3dlc',
    },
    therightprofile: {
        game_origin: 'rb3dlc',
    },
    thescientist: {
        game_origin: 'rb3dlc',
    },
    theshowmustgoon: {
        game_origin: 'rb3dlc',
    },
    thespiritofradiolive: {
        game_origin: 'rb3dlc',
    },
    thestranger: {
        game_origin: 'rb3dlc',
    },
    thestroke: {
        game_origin: 'rb3dlc',
    },
    thethrillisgone: {
        game_origin: 'rb3dlc',
    },
    theweight: {
        game_origin: 'rb3dlc',
    },
    thislove: {
        game_origin: 'rb3dlc',
    },
    thismeanswar: {
        game_origin: 'rb3dlc',
    },
    thnksfrthmmrs: {
        game_origin: 'rb3dlc',
    },
    throughglass: {
        game_origin: 'rb3dlc',
    },
    thunderkiss65: {
        game_origin: 'rb3dlc',
    },
    tightenup: {
        game_origin: 'rb3dlc',
    },
    tobewithyou: {
        game_origin: 'rb3dlc',
    },
    tonighttonight: {
        game_origin: 'rb3dlc',
    },
    touchme: {
        game_origin: 'rb3dlc',
    },
    tragedy: {
        game_origin: 'rb3dlc',
    },
    tubthumping: {
        game_origin: 'rb3dlc',
    },
    tuesdaysgone: {
        game_origin: 'rb3dlc',
    },
    turningjapanese: {
        game_origin: 'rb3dlc',
    },
    tweezer: {
        game_origin: 'rb3dlc',
    },
    twoticketstoparadise: {
        game_origin: 'rb3dlc',
    },
    tyler: {
        game_origin: 'rb3dlc',
    },
    unbelievable: {
        game_origin: 'rb3dlc',
    },
    undefeated: {
        game_origin: 'rb3dlc',
    },
    undercoverofdarkness: {
        game_origin: 'rb3dlc',
    },
    underpressure2: {
        game_origin: 'rb3dlc',
    },
    unholyconfessions: {
        game_origin: 'rb3dlc',
    },
    unskinnybop: {
        game_origin: 'rb3dlc',
    },
    untiltheend: {
        game_origin: 'rb3dlc',
    },
    upallnight: {
        game_origin: 'rb3dlc',
    },
    urgent: {
        game_origin: 'rb3dlc',
    },
    verdamplangher: {
        game_origin: 'rb3dlc',
    },
    vivalavida: {
        game_origin: 'rb3dlc',
    },
    voodoochildlive: {
        game_origin: 'rb3dlc',
    },
    waitandbleed: {
        game_origin: 'rb3dlc',
    },
    waitingforagirl: {
        game_origin: 'rb3dlc',
    },
    waitingfortheend: {
        game_origin: 'rb3dlc',
    },
    walk: {
        game_origin: 'rb3dlc',
    },
    walkfoo: {
        game_origin: 'rb3dlc',
    },
    walkthisway: {
        game_origin: 'rb3dlc',
    },
    wanteddeadoralive2: {
        game_origin: 'rb3dlc',
    },
    wearethechampions2: {
        game_origin: 'rb3dlc',
    },
    webelong: {
        game_origin: 'rb3dlc',
    },
    webuiltthiscity: {
        game_origin: 'rb3dlc',
    },
    wedidntstartthefire: {
        game_origin: 'rb3dlc',
    },
    weirdscience: {
        game_origin: 'rb3dlc',
    },
    welcometothefamily: {
        game_origin: 'rb3dlc',
    },
    wereanamericanband: {
        game_origin: 'rb3dlc',
    },
    wewerentborn: {
        game_origin: 'rb3dlc',
    },
    wewillrockyou2: {
        game_origin: 'rb3dlc',
    },
    whativedone2: {
        game_origin: 'rb3dlc',
    },
    whatsyourname: {
        game_origin: 'rb3dlc',
    },
    whatyouwant: {
        game_origin: 'rb3dlc',
    },
    whenimgone: {
        game_origin: 'rb3dlc',
    },
    whenyoureyoung: {
        game_origin: 'rb3dlc',
    },
    whosaysyoucantgohome: {
        game_origin: 'rb3dlc',
    },
    whycantwebefriends: {
        game_origin: 'rb3dlc',
    },
    wishyouwerehere: {
        game_origin: 'rb3dlc',
    },
    wontgohomewithoutyou: {
        game_origin: 'rb3dlc',
    },
    workingfortheweekend: {
        game_origin: 'rb3dlc',
    },
    wrongemboyo: {
        game_origin: 'rb3dlc',
    },
    yellow: {
        game_origin: 'rb3dlc',
    },
    yougiveloveabadname2: {
        game_origin: 'rb3dlc',
    },
    youknowyoureright: {
        game_origin: 'rb3dlc',
    },
    youmakemefeel: {
        game_origin: 'rb3dlc',
    },
    youmayberight: {
        game_origin: 'rb3dlc',
    },
    youngamericans: {
        game_origin: 'rb3dlc',
    },
    yourbetrayal: {
        game_origin: 'rb3dlc',
    },
    youremybestfriend: {
        game_origin: 'rb3dlc',
    },
    youshouldbedancing: {
        game_origin: 'rb3dlc',
    },
    youthofthenation: {
        game_origin: 'rb3dlc',
    },
    ziggystardust: {
        game_origin: 'rb3dlc',
    },
    beastandtheharlot: {
        extra_authoring: ['disc_update'],
    },
    oyemiamor: {
        artist: 'Maná',
        album_name: '¿Dónde Jugarán los Niños?',
        encoding: 'latin1',
    },
}

interface HMXParserOptions {
    /** Changes the sorting of the songs.
     */
    sortBy?: SortByOptionsTypes
    /**
     * Applies direct values updates on any song inside the `.dta` file based on the song's unique string ID.
     */
    update?: {
        [id: string]: UpdateDataOptions
    }
    /**
     * Applies direct values updates on all songs inside the `.dta` file.
     */
    updateAll?: Pick<UpdateDataOptions, 'author' | 'multitrack' | 'pack_name'>
}

/**
 * Specific parser for official Harmonix DTA files.
 * - - - -
 * @param {string} dtaFileContents The .dta file contents.
 * @param {DTAParserOptions} options `OPTIONAL` Customizing options for the parsing process.
 * @returns {DTADocument[]} An array of parsed song objects.
 *
 * @see [`DTADocument`](@types/DTADocument.ts) interface.
 */
const HMXSongsParser = (
    dtaFileContents: string,
    options?: HMXParserOptions
): DTADocument[] => {
    if (!options) {
        options = {} as HMXParserOptions
    }

    const { sortBy, update, updateAll } = options

    const depackedSongs = depackDTA(dtaFileContents)

    let parsedSongs: DTADocument[] = depackedSongs.map((value) => {
        const song = parseDTA(value)
        return song
    })

    const updatedSongs = parsedSongs.map((song) => {
        const songname = song.content.id
        const songUpdates = songsUpdates[songname as keyof typeof songsUpdates]
        if (songUpdates) {
            song.content = {
                ...song.content,
                ...songUpdates,
                author: 'Harmonix',
                multitrack: true,
            }
        }
        return song
    })

    parsedSongs = updatedSongs

    if (update) {
        const updateKeys = Object.keys(update)

        updateKeys.forEach((keys) => {
            const selectedSong = getSongByID(parsedSongs, keys)
            const updateObject = update?.[keys]

            if (selectedSong && updateObject) {
                selectedSong.update(updateObject)
            }
        })
    }

    if (updateAll) {
        parsedSongs = parsedSongs.map((song) => {
            if (updateAll.author) {
                song.content.author = updateAll.author
            }
            if (updateAll.multitrack !== undefined) {
                song.content.multitrack = updateAll.multitrack
            }
            if (updateAll.pack_name) {
                song.content.pack_name = updateAll.pack_name
            }
            return song
        })
    }

    if (sortBy) {
        parsedSongs = sortDTA(parsedSongs, sortBy)
    }

    return parsedSongs
}

export default HMXSongsParser
