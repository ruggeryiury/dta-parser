import { DTAFile } from './dta'
import {
  AnimTempo,
  BandFailCueNames,
  BandRankingNames,
  BandRankingNumbers,
  DrumBankNames,
  SongEncoding,
  SongGenreNames,
  SongRating,
  SongRatingNames,
  SongScrollSpeedNames,
  VocalGenderNames,
  VocalParts,
  VocalPartsNames,
  VocalPercussionNames,
  localeValueToKey,
} from './locale'
import { panValueToArray } from '../../utils/pansAndVols'
import { rankValuesToDTARankSystem, bandAverageRankCalculator } from '../../utils/rankCalculations'
import { timeStringToMilliseconds } from '../../utils/timeCalculations'

export type DrumTracksTypes =
  | 2
  | 'Stereo Else'
  | 3
  | 'Mono Kick + Stereo Else'
  | 4
  | 'Mono Kick + Mono Snare + Stereo Else'
  | 5
  | 'Mono Kick + Stereo Snare + Stereo Else'
  | 6
  | 'Stereo Kick + Stereo Snare + Stereo Else'

export type InstrumentTracksTypes = 'Mono' | 'Stereo' | 1 | 2

export type PansVolsDrumsInformation<T extends DrumTracksTypes> = T extends 2 | 'Stereo Else'
  ? [number, number]
  : T extends 3 | 'Mono Kick + Stereo Else'
  ? [number, number, number]
  : T extends 4 | 'Mono Kick + Mono Snare + Stereo Else'
  ? [number, number, number, number]
  : T extends 5 | 'Mono Kick + Stereo Snare + Stereo Else'
  ? [number, number, number, number, number]
  : T extends 6 | 'Stereo Kick + Stereo Snare + Stereo Else'
  ? [number, number, number, number, number, number]
  : never

export type PansVolsInformation<T extends InstrumentTracksTypes> = T extends 1 | 'Mono' ? [number] : T extends 2 | 'Stereo' ? [number, number] : never

export type DrumUpdateOptionsTypes = {
  [P in DrumTracksTypes]: DrumUpdateOptions<P>
}[DrumTracksTypes]
export type BassUpdateOptionsTypes = {
  [P in InstrumentTracksTypes]: BassUpdateOptions<P>
}[InstrumentTracksTypes]
export type GuitarUpdateOptionsTypes = {
  [P in InstrumentTracksTypes]: GuitarUpdateOptions<P>
}[InstrumentTracksTypes]
export type VocalsUpdateOptionsTypes = {
  [P in InstrumentTracksTypes]: VocalsUpdateOptions<P>
}[InstrumentTracksTypes]
export type KeysUpdateOptionsTypes = {
  [P in InstrumentTracksTypes]: KeysUpdateOptions<P>
}[InstrumentTracksTypes]
export type BackingUpdateOptionsTypes = {
  [P in InstrumentTracksTypes]: BackingUpdateOptions<P>
}[InstrumentTracksTypes]

export interface TrackUpdateOptions {
  /**
   * An object specifying the structure of the drum part.
   */
  drum?: DrumUpdateOptionsTypes
  /**
   * An object specifying the structure of the bass part.
   */
  bass?: BassUpdateOptionsTypes
  /**
   * An object specifying the structure of the guitar part.
   */
  guitar?: GuitarUpdateOptionsTypes
  /**
   * An object specifying the structure of the vocals part.
   */
  vocals?: VocalsUpdateOptionsTypes
  /**
   * An object specifying the structure of the keys part.
   */
  keys?: KeysUpdateOptionsTypes
  /**
   * The quantity of channels for the backing track. Can be either `'Mono'` or `'Stereo'`.
   */
  backing: InstrumentTracksTypes | BackingUpdateOptionsTypes
  /**
   * Tells if the song has crowd channels.
   *
   * If `true`, crowd channels will be placed as stereo tracks with `0dB` volume.
   *
   * if it's an `array`, you can specify the volume of the crowd tracks.
   *
   * Crowd channels are always stereo.
   */
  crowd?: true | [number, number]
}

export type DrumUpdateOptions<T extends DrumTracksTypes> = {
  /**
   * The quantity of channels for the drum part.
   *
   * Valid values are:
   * - `Stereo Else` (or `2`)
   * - `Mono Kick + Stereo Else` (or `3`)
   * - `Mono Kick + Mono Snare + Stereo Else` (or `4`)
   * - `Mono Kick + Stereo Snare + Stereo Else` (or `5`)
   * - `Stereo Kick + Stereo Snare + Stereo Else` (or `6`)
   */
  channels: T
  /**
   * The ranking of the instrument.
   */
  rank: BandRankingNames | BandRankingNumbers
  /**
   * Set to `true` if the instrument has solo sessions.
   */
  hasSolo?: boolean
  /**
   * Custom panning information. If not specified, mono tracks will have centered
   * `0.0` panning, and stereo tracks will be `-1.0` (for the left track) and `1.0` (for the right track).
   */
  pans?: PansVolsDrumsInformation<T>
  /**
   * Custom volume information. If not specified, all tracks from the insturment
   * will have no volume change (`0.0`).
   */
  vols?: PansVolsDrumsInformation<T>
}

export interface BassUpdateOptions<T extends InstrumentTracksTypes> {
  /**
   * The quantity of channels for the instrument.
   *
   * Valid values are:
   * - `Mono` (or `1`)
   * - `Stereo` (or `2`)
   */
  channels: T
  /**
   * The ranking of the instrument.
   */
  rank: BandRankingNames | BandRankingNumbers
  /**
   * Set to `true` if the instrument has solo sessions.
   */
  hasSolo?: boolean
  /**
   * The ranking of the PRO Bass part.
   */
  real_rank?: BandRankingNames | BandRankingNumbers
  /**
   * An array with the tuning of all 4 strings of the PRO Bass part.
   *
   * If the PRO Bass rank is specified, it will use E Standard `[0, 0, 0, 0]` as default.
   */
  tuning?: [number, number, number, number]
  /**
   * Custom panning information. If not specified, mono tracks will have centered
   * `0.0` panning, and stereo tracks will be `-1.0` (for the left track) and `1.0` (for the right track).
   */
  pans?: PansVolsInformation<T>
  /**
   * Custom volume information. If not specified, all tracks from the insturment
   * will have no volume change (`0.0`).
   */
  vols?: PansVolsInformation<T>
}

export interface GuitarUpdateOptions<T extends InstrumentTracksTypes> {
  /**
   * The quantity of channels for the instrument.
   *
   * Valid values are:
   * - `Mono` (or `1`)
   * - `Stereo` (or `2`)
   */
  channels: T
  /**
   * The ranking of the instrument.
   */
  rank: BandRankingNames | BandRankingNumbers
  /**
   * Set to `true` if the instrument has solo sessions.
   */
  hasSolo?: boolean
  /**
   * The ranking of the PRO Guitar part.
   */
  real_rank?: BandRankingNames | BandRankingNumbers
  /**
   * An array with the tuning of all 6 strings of the PRO Guitar part.
   *
   * If the PRO Guitar rank is specified, it will use E Standard `[0, 0, 0, 0, 0, 0]` as default.
   */
  tuning?: [number, number, number, number, number, number]
  /**
   * Custom panning information. If not specified, mono tracks will have centered
   * `0.0` panning, and stereo tracks will be `-1.0` (for the left track) and `1.0` (for the right track).
   */
  pans?: PansVolsInformation<T>
  /**
   * Custom volume information. If not specified, all tracks from the insturment
   * will have no volume change (`0.0`).
   */
  vols?: PansVolsInformation<T>
}

export interface VocalsUpdateOptions<T extends InstrumentTracksTypes> {
  /**
   * The quantity of channels for the instrument.
   *
   * Valid values are:
   * - `Mono` (or `1`)
   * - `Stereo` (or `2`)
   */
  channels: InstrumentTracksTypes
  /**
   * The ranking of the instrument.
   */
  rank: BandRankingNames | BandRankingNumbers
  /**
   * Set to `true` if the instrument has solo sessions.
   */
  hasSolo?: boolean
  /**
   * The quantity of vocal parts of the song.
   */
  vocal_parts: Exclude<VocalPartsNames, 'No Vocals'> | Exclude<VocalParts, 0>
  /**
   * The gender of the lead vocalist. Default is `Male`.
   */
  vocal_gender?: VocalGenderNames
  /**
   * Custom panning information. If not specified, mono tracks will have centered
   * `0.0` panning, and stereo tracks will be `-1.0` (for the left track) and `1.0` (for the right track).
   */
  pans?: PansVolsInformation<T>
  /**
   * Custom volume information. If not specified, all tracks from the insturment
   * will have no volume change (`0.0`).
   */
  vols?: PansVolsInformation<T>
}

export interface KeysUpdateOptions<T extends InstrumentTracksTypes> {
  /**
   * The quantity of channels for the instrument.
   *
   * Valid values are:
   * - `Mono` (or `1`)
   * - `Stereo` (or `2`)
   */
  channels: InstrumentTracksTypes
  /**
   * The ranking of the instrument.
   */
  rank: BandRankingNames | BandRankingNumbers
  /**
   * Set to `true` if the instrument has solo sessions.
   */
  hasSolo?: boolean
  /**
   * The ranking of the PRO Keys part.
   */
  real_rank?: BandRankingNames | BandRankingNumbers
  /**
   * Custom panning information. If not specified, mono tracks will have centered
   * `0.0` panning, and stereo tracks will be `-1.0` (for the left track) and `1.0` (for the right track).
   */
  pans?: PansVolsInformation<T>
  /**
   * Custom volume information. If not specified, all tracks from the insturment
   * will have no volume change (`0.0`).
   */
  vols?: PansVolsInformation<T>
}

export type BackingUpdateOptions<T extends InstrumentTracksTypes> = {
  /**
   * The quantity of channels for the drum part.
   *
   * Valid values are:
   * - `Mono` (or `1`)
   * - `Stereo` (or `2`)
   */
  channels: T
  /**
   * Custom panning information. If not specified, mono tracks will have centered
   * `0.0` panning, and stereo tracks will be `-1.0` (for the left track) and `1.0` (for the right track).
   */
  pans?: PansVolsInformation<T>
  /**
   * Custom volume information. If not specified, all tracks from the insturment
   * will have no volume change (`0.0`).
   */
  vols?: PansVolsInformation<T>
}

export interface GenreUpdateOptions<G extends SongGenreNames> {
  /**
   * The song's genre.
   */
  genre: G
  /**
   * The song's sub-genre.
   */
  sub_genre: SubGenreUpdateValues<G>
}

export type SongGenreUpdateOptions = { [P in SongGenreNames]: GenreUpdateOptions<P> }[SongGenreNames]

export interface AlbumUpdateOptions {
  /**
   * Tells if the song has an album artwork file to be displayed. Default is `true`.
   */
  hasArt: boolean
  /**
   * The name of the song's album.
   */
  name?: string
  /**
   * The track number of the song. Default is `1` if you specify an album name.
   */
  track_number?: number
}

export type SongKeyMajorValues =
  | 'C'
  | 'C Major'
  | 'C#'
  | 'Db'
  | 'C# Major'
  | 'Db Major'
  | 'D'
  | 'D Major'
  | 'D#'
  | 'Eb'
  | 'D# Major'
  | 'Eb Major'
  | 'E'
  | 'E Major'
  | 'F'
  | 'F Major'
  | 'F#'
  | 'Gb'
  | 'F# Major'
  | 'Gb Major'
  | 'G'
  | 'G Major'
  | 'G#'
  | 'Ab'
  | 'G# Major'
  | 'Ab Major'
  | 'A'
  | 'A Major'
  | 'A#'
  | 'Bb'
  | 'A# Major'
  | 'Bb Major'
  | 'B'
  | 'B Major'

export type SongKeyMinorValues =
  | 'Cm'
  | 'C Minor'
  | 'C#m'
  | 'Dbm'
  | 'C# Minor'
  | 'Db Minor'
  | 'Dm'
  | 'D Minor'
  | 'D#m'
  | 'Ebm'
  | 'D# Minor'
  | 'Eb Minor'
  | 'Em'
  | 'E Minor'
  | 'Fm'
  | 'F Minor'
  | 'F#m'
  | 'Gbm'
  | 'F# Minor'
  | 'Gb Minor'
  | 'Gm'
  | 'G Minor'
  | 'G#m'
  | 'Abm'
  | 'G# Minor'
  | 'Ab Minor'
  | 'Am'
  | 'A Minor'
  | 'A#m'
  | 'Bbm'
  | 'A# Minor'
  | 'Bb Minor'
  | 'Bm'
  | 'B Minor'

export type TrainerKeyOverrideValues = 'C' | 'C#' | 'Db' | 'D' | 'D#' | 'Eb' | 'E' | 'F' | 'F#' | 'Gb' | 'G' | 'G#' | 'Ab' | 'A' | 'A#' | 'Bb' | 'B'

export interface SongKeyUpdateOptions {
  key: SongKeyMajorValues | SongKeyMinorValues
  trainer_key_override?: TrainerKeyOverrideValues
}

export type SubGenreUpdateValues<G extends SongGenreNames> = G extends
  | 'Classical'
  | 'Classic Rock'
  | 'Emo'
  | 'Fusion'
  | 'Grunge'
  | 'Inspirational'
  | 'J-Rock'
  | 'Latin'
  | 'Novelty'
  | 'Nu-Metal'
  | 'Southern Rock'
  | 'World'
  ? G
  : G extends 'Alternative'
  ? 'Alternative' | 'College' | 'Other'
  : G extends 'Blues'
  ? 'Acoustic' | 'Chicago' | 'Classic' | 'Contemporary' | 'Country' | 'Delta' | 'Electric' | 'Other'
  : G extends 'Country'
  ? 'Alternative' | 'Bluegrass' | 'Contemporary' | 'Honky Tonk' | 'Outlaw' | 'Traditional Folk' | 'Other'
  : G extends 'Glam'
  ? 'Glam' | 'Goth' | 'Other'
  : G extends 'Hip-Hop/Rap'
  ? 'Alternative Rap' | 'Gangsta' | 'Hardcore Rap' | 'Hip Hop' | 'Old School Hip Hop' | 'Rap' | 'Trip Hop' | 'Underground Rap' | 'Other'
  : G extends 'Indie Rock'
  ? 'Indie Rock' | 'Lo-fi' | 'Math Rock' | 'Noise' | 'Post Rock' | 'Shoegazing' | 'Other'
  : G extends 'Jazz'
  ? 'Acid Jazz' | 'Contemporary' | 'Experimental' | 'Ragtime' | 'Smooth' | 'Other'
  : G extends 'Metal'
  ? 'Alternative' | 'Black' | 'Core' | 'Death' | 'Hair' | 'Industrial' | 'Metal' | 'Power' | 'Prog' | 'Speed' | 'Thrash' | 'Other'
  : G extends 'New Wave'
  ? 'Dark Wave' | 'Electroclash' | 'New Wave' | 'Synthpop' | 'Other'
  : G extends 'Pop/Dance/Electronic'
  ? 'Ambient' | 'Breakbeat' | 'Chiptune' | 'Dance' | 'Downtempo' | 'Dub' | 'Drum and Bass' | 'Electronica' | 'Garage' | 'Hardcore Dance' | 'House' | 'Industrial' | 'Techno' | 'Trance' | 'Other'
  : G extends 'Pop-Rock'
  ? 'Contemporary' | 'Pop' | 'Soft Rock' | 'Teen' | 'Other'
  : G extends 'Prog'
  ? 'Prog Rock'
  : G extends 'Punk'
  ? 'Alternative' | 'Classic' | 'Dance Punk' | 'Garage' | 'Hardcore' | 'Pop' | 'Other'
  : G extends 'R&B/Soul/Funk'
  ? 'Disco' | 'Funk' | 'Motown' | 'Rhythm and Blues' | 'Soul' | 'Other'
  : G extends 'Reggae/Ska'
  ? 'Reggae' | 'Ska' | 'Other'
  : G extends 'Rock'
  ? 'Arena' | 'Blues' | 'Folk Rock' | 'Garage' | 'Hard Rock' | 'Psychedelic' | 'Rock' | 'Rockabilly' | 'Rock and Roll' | 'Surf' | 'Other'
  : G extends 'Other'
  ? 'A capella' | 'Acoustic' | 'Contemporary Folk' | 'Experimental' | 'Oldies' | 'Other'
  : never

export interface UpdateDataOptions {
  /**
   * Unique string ID of the song.
   */
  id?: string
  /**
   * The song's title.
   */
  name?: string
  /**
   * The song's artist/band.
   */
  artist?: string
  /**
   * Tells if the song is a master recording.
   */
  master?: boolean
  /**
   * The numerical, unique number ID of the song. Might be a string ID as well.
   */
  song_id?: string | number
  /**
   * The file name used inside the song's CON file structure.
   */
  songname?: string
  /**
   * An object specifying the whole song's instruments and audio channels structure.
   *
   * Here, you specify the channels, ranking, and solo of all instruments. On `vocals`, you also specify the gender and
   * the quantity of vocal parts. You specify if the song has crowd channels as well.
   *
   * By placing a valid `tracks` options, it will override the whole song's structure.
   */
  tracks?: TrackUpdateOptions
  /**
   * Adjusts the entire MIDI vocal chart up or down by cents. Default is `0`.
   */
  tuning_offset_cents?: number
  /**
   * This controls the volume reduction of a stem when the player misses notes/fails out.
   * Number value is in decibels. Default is `-96`.
   *
   * If your song has "fake" stems produced by frequency banding, you can use this to make the game mute the stems less harshly when players make mistakes or fail, in order to prevent the overall sound from becoming too deadened.
   */
  mute_volume?: number
  /**
   * This controls the volume reduction of the vocal stem if the vocalist fails. Default is `-12`.
   */
  mute_volume_vocals?: number
  hopo_threshold?: number
  /**
   * The audio cue type of the vocal percussion.
   */
  bank?: VocalPercussionNames
  /**
   * The audio cue type of the drums on Drum Fills/Freestyle Mode.
   */
  drum_bank?: DrumBankNames
  /**
   * The song animation's speed.
   */
  anim_tempo?: AnimTempo
  band_fail_cue?: BandFailCueNames
  song_scroll_speed?: SongScrollSpeedNames
  /**
   * The start of the preview (the end of the preview is automatically calculated). It can be either a number, or a string.
   *
   * If it's a number, you must place the length of the song in milliseconds.
   *
   * You can also place a formatted time string (for example: `'2:30'`)
   */
  preview?: string | number
  /**
   * The length of the song. It can be either a number, or a string.
   *
   * If it's a number, you must place the length of the song in milliseconds.
   *
   * You can also place a formatted time string (for example: `'2:30'`)
   */
  song_length?: string | number
  /**
   * The song's band ranking number.
   *
   * If not specified, it will be calculated based on the non-PRO ranks of all playable instruments.
   */
  rank_band?: BandRankingNames | BandRankingNumbers
  /**
   * The encoding of the MIDI song file. Default is `latin1`.
   *
   * Songs which MIDI file is exported with UTF-8 encoding should have `utf8` as encoding.
   */
  encoding?: SongEncoding
  game_origin?: string
  /**
   * The song's rating.
   */
  rating?: SongRating | SongRatingNames
  /**
   * An object with the song's genre and sub-genre.
   */
  genre?: SongGenreUpdateOptions
  /**
   * The song's release year.
   */
  year_released?: number
  year_recorded?: number
  album?: AlbumUpdateOptions
  key?: SongKeyMajorValues | SongKeyMinorValues | SongKeyUpdateOptions
  /**
   * The name of the song's pack.
   */
  pack_name?: string
  /**
   * The author of the song.
   */
  author?: string
  /**
   * Tells if the song has separate vocal and backing stems.
   */
  karaoke?: boolean
  /**
   * Tells if the song has separate audio stems.
   */
  multitrack?: boolean
  /**
   * Tells if the song is a 2x Kick Pedal song.
   */
  doubleKick?: boolean
  /**
   * Tells if the song is a conversion from another game.
   */
  convert?: boolean
  /**
   * Tells if the song has rhythm guitar charted on the Keys track.
   */
  rhythmOnKeys?: boolean
  /**
   * Tells if the song has rhythm guitar charted on the Bass track.
   */
  rhythmOnBass?: boolean
  /**
   * Tells if the song has EMH autogenerated by CAT.
   */
  CATemh?: boolean
  /**
   * Tells if the song only has Expert difficulty charted.
   */
  expertOnly?: boolean
}

/**
 * Updates a song with the provided update options.
 * - - - -
 * @param {DTAFile} dta  The parsed song to update.
 * @param {UpdateDataOptions} update The options for the parsed song updating process.
 */
export const updateDTA = (dta: DTAFile, update: UpdateDataOptions): DTAFile => {
  const {
    id,
    name,
    artist,
    master,
    song_id,
    songname,
    tracks,
    tuning_offset_cents,
    mute_volume,
    mute_volume_vocals,
    hopo_threshold,
    bank,
    drum_bank,
    anim_tempo,
    band_fail_cue,
    song_scroll_speed,
    preview,
    song_length,
    rank_band,
    encoding,
    game_origin,
    rating,
    genre,
    year_released,
    year_recorded,
    album,
    key: key_signature,
    pack_name,
    author,
    karaoke,
    multitrack,
    doubleKick,
    convert,
    rhythmOnKeys,
    rhythmOnBass,
    CATemh,
    expertOnly,
  } = update

  if (id) dta.id = id

  if (name) dta.name = name

  if (artist) dta.artist = artist

  if (master !== undefined) dta.master = master

  if (song_id !== undefined) dta.song_id = song_id

  if (songname) dta.songname = songname

  if (tracks) {
    dta.tracks_count = [0, 0, 0, 0, 0, 0]
    dta.pans = []
    dta.vols = []
    dta.vocal_parts = 0
    dta.rank_band = 0
    dta.rank_drum = 0
    dta.rank_bass = 0
    dta.rank_guitar = 0
    dta.rank_vocals = 0
    dta.rank_keys = 0
    dta.rank_real_guitar = 0
    dta.rank_real_bass = 0
    dta.rank_real_keys = 0
    dta.vocal_gender = 'male'
    let instrumentCount = 0

    const drumT = tracks.drum ? panValueToArray(tracks.drum.channels === undefined ? 'Stereo Else' : tracks.drum.channels).length : 0
    const bassT = tracks.bass ? panValueToArray(tracks.bass.channels === undefined ? 'Stereo' : tracks.bass.channels).length : 0
    const guitarT = tracks.guitar ? panValueToArray(tracks.guitar.channels === undefined ? 'Stereo' : tracks.guitar.channels).length : 0
    const vocalsT = tracks.vocals ? panValueToArray(tracks.vocals.channels === undefined ? 'Stereo' : tracks.vocals.channels).length : 0
    const keysT = tracks.keys ? panValueToArray(tracks.keys.channels === undefined ? 'Stereo' : tracks.keys.channels).length : 0
    const backingT = tracks.backing ? panValueToArray(typeof tracks.backing === 'object' ? tracks.backing.channels : tracks.backing).length : 0

    dta.tracks_count = [drumT, bassT, guitarT, vocalsT, keysT, backingT]

    let drumR = 0,
      bassR = 0,
      guitarR = 0,
      vocalsR = 0,
      keysR = 0,
      real_guitarR = 0,
      real_bassR = 0,
      real_keysR = 0

    if (tracks.drum) {
      instrumentCount++

      drumR = rankValuesToDTARankSystem('drum', tracks.drum.rank)
      dta.rank_drum = drumR

      panValueToArray(tracks.drum.channels === undefined ? 'Stereo Else' : tracks.drum.channels).forEach((pan) => {
        dta.pans.push(pan)
        dta.vols.push(0)
      })

      if (tracks.drum.pans) {
        dta.pans = dta.pans.slice(0, tracks.drum.pans.length * -1)
        tracks.drum.pans.forEach((pan) => dta.pans.push(pan))
      }

      if (tracks.drum.vols) {
        dta.vols = dta.vols.slice(0, tracks.drum.vols.length * -1)
        tracks.drum.vols.forEach((pan) => dta.pans.push(pan))
      }

      if (tracks.drum.hasSolo !== undefined && tracks.drum.hasSolo) {
        if (!dta.solo) dta.solo = []
        dta.solo.push('drum')
      }
    }

    if (tracks.bass) {
      instrumentCount++

      bassR = rankValuesToDTARankSystem('bass', tracks.bass.rank)
      real_bassR = rankValuesToDTARankSystem('real_bass', tracks.bass.real_rank !== undefined ? tracks.bass.real_rank : -1)
      dta.rank_bass = bassR
      dta.rank_real_bass = real_bassR

      if (real_bassR > 0) {
        if (tracks.bass.tuning !== undefined) {
          dta.real_bass_tuning = tracks.bass.tuning
        } else dta.real_bass_tuning = [0, 0, 0, 0]
      }

      panValueToArray(tracks.bass.channels === undefined ? 'Stereo' : tracks.bass.channels).forEach((pan) => {
        dta.pans.push(pan)
        dta.vols.push(0)
      })

      if (tracks.bass.pans) {
        dta.pans = dta.pans.slice(0, tracks.bass.pans.length * -1)
        tracks.bass.pans.forEach((pan) => dta.pans.push(pan))
      }

      if (tracks.bass.vols) {
        dta.vols = dta.vols.slice(0, tracks.bass.vols.length * -1)
        tracks.bass.vols.forEach((pan) => dta.pans.push(pan))
      }

      if (tracks.bass.hasSolo !== undefined && tracks.bass.hasSolo) {
        if (!dta.solo) dta.solo = []
        dta.solo.push('bass')
      }
    }

    if (tracks.guitar) {
      instrumentCount++

      guitarR = rankValuesToDTARankSystem('guitar', tracks.guitar.rank)
      real_guitarR = rankValuesToDTARankSystem('real_guitar', tracks.guitar.real_rank !== undefined ? tracks.guitar.real_rank : -1)
      dta.rank_guitar = guitarR
      dta.rank_real_guitar = real_guitarR

      if (real_guitarR > 0) {
        if (tracks.guitar.tuning !== undefined) {
          dta.real_guitar_tuning = tracks.guitar.tuning
        } else dta.real_guitar_tuning = [0, 0, 0, 0, 0, 0]
      }

      panValueToArray(tracks.guitar.channels === undefined ? 'Stereo' : tracks.guitar.channels).forEach((pan) => {
        dta.pans.push(pan)
        dta.vols.push(0)
      })

      if (tracks.guitar.pans) {
        dta.pans = dta.pans.slice(0, tracks.guitar.pans.length * -1)
        tracks.guitar.pans.forEach((pan) => dta.pans.push(pan))
      }

      if (tracks.guitar.vols) {
        dta.vols = dta.vols.slice(0, tracks.guitar.vols.length * -1)
        tracks.guitar.vols.forEach((pan) => dta.pans.push(pan))
      }

      if (tracks.guitar.hasSolo !== undefined && tracks.guitar.hasSolo) {
        if (!dta.solo) dta.solo = []
        dta.solo.push('guitar')
      }
    }

    if (tracks.vocals) {
      instrumentCount++

      vocalsR = rankValuesToDTARankSystem('vocals', tracks.vocals.rank)
      dta.rank_vocals = vocalsR

      if (tracks.vocals.vocal_parts !== undefined) {
        dta.vocal_parts = localeValueToKey.vocal_parts(
          tracks.vocals.vocal_parts === 1 ? 'Solo Vocals' : tracks.vocals.vocal_parts === 2 ? '2-Part Harmonies' : tracks.vocals.vocal_parts === 3 ? '3-Part Harmonies' : tracks.vocals.vocal_parts
        )
      } else dta.vocal_parts = 1

      panValueToArray(tracks.vocals.channels === undefined ? 'Stereo' : tracks.vocals.channels).forEach((pan) => {
        dta.pans.push(pan)
        dta.vols.push(0)
      })

      if (tracks.vocals.pans) {
        dta.pans = dta.pans.slice(0, tracks.vocals.pans.length * -1)
        tracks.vocals.pans.forEach((pan) => dta.pans.push(pan))
      }

      if (tracks.vocals.vols) {
        dta.vols = dta.vols.slice(0, tracks.vocals.vols.length * -1)
        tracks.vocals.vols.forEach((pan) => dta.pans.push(pan))
      }

      if (tracks.vocals.hasSolo !== undefined && tracks.vocals.hasSolo) {
        if (!dta.solo) dta.solo = []
        dta.solo.push('vocal_percussion')
      }

      if (tracks.vocals.vocal_gender) dta.vocal_gender = localeValueToKey.vocal_gender(tracks.vocals.vocal_gender)
      else dta.vocal_gender = 'male'
    }

    if (tracks.keys) {
      instrumentCount++

      keysR = rankValuesToDTARankSystem('keys', tracks.keys.rank)
      real_keysR = rankValuesToDTARankSystem('real_keys', tracks.keys.real_rank !== undefined ? tracks.keys.real_rank : -1)
      dta.rank_keys = keysR
      dta.rank_real_keys = real_keysR

      panValueToArray(tracks.keys.channels === undefined ? 'Stereo' : tracks.keys.channels).forEach((pan) => {
        dta.pans.push(pan)
        dta.vols.push(0)
      })

      if (tracks.keys.pans) {
        dta.pans = dta.pans.slice(0, tracks.keys.pans.length * -1)
        tracks.keys.pans.forEach((pan) => dta.pans.push(pan))
      }

      if (tracks.keys.vols) {
        dta.vols = dta.vols.slice(0, tracks.keys.vols.length * -1)
        tracks.keys.vols.forEach((pan) => dta.pans.push(pan))
      }

      if (tracks.keys.hasSolo !== undefined && tracks.keys.hasSolo) {
        if (!dta.solo) dta.solo = []
        dta.solo.push('keys')
      }
    }

    if (typeof tracks.backing === 'object') {
      panValueToArray(tracks.backing.channels).forEach((pan) => {
        dta.pans.push(pan)
        dta.vols.push(0)
      })

      if (tracks.backing.pans) {
        dta.pans = dta.pans.slice(0, tracks.backing.pans.length * -1)
        tracks.backing.pans.forEach((pan) => dta.pans.push(pan))
      }

      if (tracks.backing.vols) {
        dta.vols = dta.vols.slice(0, tracks.backing.vols.length * -1)
        tracks.backing.vols.forEach((pan) => dta.pans.push(pan))
      }
    } else {
      panValueToArray(tracks.backing).forEach((pan) => {
        dta.pans.push(pan)
        dta.vols.push(0)
      })
    }

    if (tracks.crowd !== undefined) {
      dta.tracks_count.push(2)
      dta.pans.push(-2.5, 2.5)
      if (tracks.crowd === true) dta.vols.push(0, 0)
      else {
        const [leftC, rightC] = tracks.crowd
        dta.vols.push(leftC)
        dta.vols.push(rightC)
      }
    }

    if (rank_band) dta.rank_band = rankValuesToDTARankSystem('band', rank_band)
    else dta.rank_band = bandAverageRankCalculator(guitarR + bassR + drumR + keysR + vocalsR, instrumentCount)
  }

  if (tuning_offset_cents && tuning_offset_cents !== 0) dta.tuning_offset_cents = tuning_offset_cents

  if (mute_volume) dta.mute_volume = mute_volume

  if (mute_volume_vocals) dta.mute_volume_vocals = mute_volume_vocals

  if (hopo_threshold) dta.hopo_threshold = hopo_threshold

  if (bank) dta.bank = localeValueToKey.bank(bank)

  if (drum_bank) dta.drum_bank = localeValueToKey.drum_bank(drum_bank)

  if (anim_tempo) dta.anim_tempo = typeof anim_tempo === 'number' ? anim_tempo : localeValueToKey.anim_tempo(anim_tempo)

  if (band_fail_cue) dta.band_fail_cue = localeValueToKey.band_fail_cue(band_fail_cue)

  if (song_scroll_speed) dta.song_scroll_speed = localeValueToKey.song_scroll_speed(song_scroll_speed)

  if (preview) {
    if (typeof preview === 'string') {
      const time = timeStringToMilliseconds(preview)
      dta.preview = [time, time + 30000]
    } else {
      // if (typeof preview === 'number')
      dta.preview = [preview, preview + 30000]
    }
  }

  if (song_length) {
    if (typeof song_length === 'string') {
      const time = timeStringToMilliseconds(song_length)
      dta.song_length = time
    } else {
      // if (typeof song_length === 'number')
      dta.song_length = song_length
    }
  }

  if (encoding) dta.encoding = encoding

  if (game_origin) dta.game_origin = game_origin as typeof dta.game_origin

  if (rating) dta.rating = typeof rating === 'number' ? rating : localeValueToKey.rating(rating)

  if (genre) {
    dta.genre = localeValueToKey.genre(genre.genre)
    dta.sub_genre = localeValueToKey.sub_genre(genre.sub_genre)
  }

  if (year_released) dta.year_released = year_released
  if (year_recorded) dta.year_recorded = year_recorded

  if (album) {
    dta.album_art = album.hasArt
    if (album.name) dta.album_name = album.name
    if (album.track_number) dta.album_track_number = album.track_number !== undefined ? album.track_number : 1
  }

  if (typeof key_signature === 'object') {
    delete dta.vocal_tonic_note
    delete dta.song_tonality
    delete dta.song_key

    if (key_signature.key === 'C Major' || key_signature.key === 'C') {
      dta.vocal_tonic_note = 0
      dta.song_tonality = 0
    } else if (key_signature.key === 'Db Major' || key_signature.key === 'C# Major' || key_signature.key === 'Db' || key_signature.key === 'C#') {
      dta.vocal_tonic_note = 1
      dta.song_tonality = 0
    } else if (key_signature.key === 'D Major' || key_signature.key === 'D') {
      dta.vocal_tonic_note = 2
      dta.song_tonality = 0
    } else if (key_signature.key === 'Eb Major' || key_signature.key === 'D# Major' || key_signature.key === 'Eb' || key_signature.key === 'D#') {
      dta.vocal_tonic_note = 3
      dta.song_tonality = 0
    } else if (key_signature.key === 'E Major' || key_signature.key === 'E') {
      dta.vocal_tonic_note = 4
      dta.song_tonality = 0
    } else if (key_signature.key === 'F Major' || key_signature.key === 'F') {
      dta.vocal_tonic_note = 5
      dta.song_tonality = 0
    } else if (key_signature.key === 'F# Major' || key_signature.key === 'Gb Major' || key_signature.key === 'F#' || key_signature.key === 'Gb') {
      dta.vocal_tonic_note = 6
      dta.song_tonality = 0
    } else if (key_signature.key === 'G Major' || key_signature.key === 'G') {
      dta.vocal_tonic_note = 7
      dta.song_tonality = 0
    } else if (key_signature.key === 'Ab Major' || key_signature.key === 'G# Major' || key_signature.key === 'Ab' || key_signature.key === 'G#') {
      dta.vocal_tonic_note = 8
      dta.song_tonality = 0
    } else if (key_signature.key === 'A Major' || key_signature.key === 'A') {
      dta.vocal_tonic_note = 9
      dta.song_tonality = 0
    } else if (key_signature.key === 'Bb Major' || key_signature.key === 'A# Major' || key_signature.key === 'Bb' || key_signature.key === 'A#') {
      dta.vocal_tonic_note = 10
      dta.song_tonality = 0
    } else if (key_signature.key === 'B Major' || key_signature.key === 'B') {
      dta.vocal_tonic_note = 11
      dta.song_tonality = 0
    } else if (key_signature.key === 'C Minor' || key_signature.key === 'Cm') {
      dta.vocal_tonic_note = 0
      dta.song_tonality = 1
    } else if (key_signature.key === 'C# Minor' || key_signature.key === 'Db Minor' || key_signature.key === 'C#m' || key_signature.key === 'Dbm') {
      dta.vocal_tonic_note = 1
      dta.song_tonality = 1
    } else if (key_signature.key === 'D Minor' || key_signature.key === 'Dm') {
      dta.vocal_tonic_note = 2
      dta.song_tonality = 1
    } else if (key_signature.key === 'D# Minor' || key_signature.key === 'Eb Minor' || key_signature.key === 'D#m' || key_signature.key === 'Ebm') {
      dta.vocal_tonic_note = 3
      dta.song_tonality = 1
    } else if (key_signature.key === 'E Minor' || key_signature.key === 'Em') {
      dta.vocal_tonic_note = 4
      dta.song_tonality = 1
    } else if (key_signature.key === 'F Minor' || key_signature.key === 'Fm') {
      dta.vocal_tonic_note = 5
      dta.song_tonality = 1
    } else if (key_signature.key === 'F# Minor' || key_signature.key === 'Gb Minor' || key_signature.key === 'F#m' || key_signature.key === 'Gbm') {
      dta.vocal_tonic_note = 6
      dta.song_tonality = 1
    } else if (key_signature.key === 'G Minor' || key_signature.key === 'Gm') {
      dta.vocal_tonic_note = 7
      dta.song_tonality = 1
    } else if (key_signature.key === 'G# Minor' || key_signature.key === 'Ab Minor' || key_signature.key === 'G#m' || key_signature.key === 'Abm') {
      dta.vocal_tonic_note = 8
      dta.song_tonality = 1
    } else if (key_signature.key === 'A Minor' || key_signature.key === 'Am') {
      dta.vocal_tonic_note = 9
      dta.song_tonality = 1
    } else if (key_signature.key === 'A# Minor' || key_signature.key === 'Bb Minor' || key_signature.key === 'A#m' || key_signature.key === 'Bbm') {
      dta.vocal_tonic_note = 10
      dta.song_tonality = 1
    } else {
      dta.vocal_tonic_note = 11
      dta.song_tonality = 0
    }

    if (key_signature.trainer_key_override) {
      if (key_signature.trainer_key_override === 'C') dta.song_key = 0
      if (key_signature.trainer_key_override === 'C#' || key_signature.trainer_key_override === 'Db') dta.song_key = 1
      if (key_signature.trainer_key_override === 'D') dta.song_key = 2
      if (key_signature.trainer_key_override === 'D#' || key_signature.trainer_key_override === 'Eb') dta.song_key = 3
      if (key_signature.trainer_key_override === 'E') dta.song_key = 4
      if (key_signature.trainer_key_override === 'F') dta.song_key = 5
      if (key_signature.trainer_key_override === 'F#' || key_signature.trainer_key_override === 'Gb') dta.song_key = 6
      if (key_signature.trainer_key_override === 'G') dta.song_key = 7
      if (key_signature.trainer_key_override === 'G#' || key_signature.trainer_key_override === 'Ab') dta.song_key = 8
      if (key_signature.trainer_key_override === 'A') dta.song_key = 9
      if (key_signature.trainer_key_override === 'A#' || key_signature.trainer_key_override === 'Bb') dta.song_key = 10
      if (key_signature.trainer_key_override === 'B') dta.song_key = 11
    }
  } else {
    if (key_signature === 'C Major' || key_signature === 'C') {
      dta.vocal_tonic_note = 0
      dta.song_tonality = 0
    } else if (key_signature === 'Db Major' || key_signature === 'C# Major' || key_signature === 'Db' || key_signature === 'C#') {
      dta.vocal_tonic_note = 1
      dta.song_tonality = 0
    } else if (key_signature === 'D Major' || key_signature === 'D') {
      dta.vocal_tonic_note = 2
      dta.song_tonality = 0
    } else if (key_signature === 'Eb Major' || key_signature === 'D# Major' || key_signature === 'Eb' || key_signature === 'D#') {
      dta.vocal_tonic_note = 3
      dta.song_tonality = 0
    } else if (key_signature === 'E Major' || key_signature === 'E') {
      dta.vocal_tonic_note = 4
      dta.song_tonality = 0
    } else if (key_signature === 'F Major' || key_signature === 'F') {
      dta.vocal_tonic_note = 5
      dta.song_tonality = 0
    } else if (key_signature === 'F# Major' || key_signature === 'Gb Major' || key_signature === 'F#' || key_signature === 'Gb') {
      dta.vocal_tonic_note = 6
      dta.song_tonality = 0
    } else if (key_signature === 'G Major' || key_signature === 'G') {
      dta.vocal_tonic_note = 7
      dta.song_tonality = 0
    } else if (key_signature === 'Ab Major' || key_signature === 'G# Major' || key_signature === 'Ab' || key_signature === 'G#') {
      dta.vocal_tonic_note = 8
      dta.song_tonality = 0
    } else if (key_signature === 'A Major' || key_signature === 'A') {
      dta.vocal_tonic_note = 9
      dta.song_tonality = 0
    } else if (key_signature === 'Bb Major' || key_signature === 'A# Major' || key_signature === 'Bb' || key_signature === 'A#') {
      dta.vocal_tonic_note = 10
      dta.song_tonality = 0
    } else if (key_signature === 'B Major' || key_signature === 'B') {
      dta.vocal_tonic_note = 11
      dta.song_tonality = 0
    } else if (key_signature === 'C Minor' || key_signature === 'Cm') {
      dta.vocal_tonic_note = 0
      dta.song_tonality = 1
    } else if (key_signature === 'C# Minor' || key_signature === 'Db Minor' || key_signature === 'C#m' || key_signature === 'Dbm') {
      dta.vocal_tonic_note = 1
      dta.song_tonality = 1
    } else if (key_signature === 'D Minor' || key_signature === 'Dm') {
      dta.vocal_tonic_note = 2
      dta.song_tonality = 1
    } else if (key_signature === 'D# Minor' || key_signature === 'Eb Minor' || key_signature === 'D#m' || key_signature === 'Ebm') {
      dta.vocal_tonic_note = 3
      dta.song_tonality = 1
    } else if (key_signature === 'E Minor' || key_signature === 'Em') {
      dta.vocal_tonic_note = 4
      dta.song_tonality = 1
    } else if (key_signature === 'F Minor' || key_signature === 'Fm') {
      dta.vocal_tonic_note = 5
      dta.song_tonality = 1
    } else if (key_signature === 'F# Minor' || key_signature === 'Gb Minor' || key_signature === 'F#m' || key_signature === 'Gbm') {
      dta.vocal_tonic_note = 6
      dta.song_tonality = 1
    } else if (key_signature === 'G Minor' || key_signature === 'Gm') {
      dta.vocal_tonic_note = 7
      dta.song_tonality = 1
    } else if (key_signature === 'G# Minor' || key_signature === 'Ab Minor' || key_signature === 'G#m' || key_signature === 'Abm') {
      dta.vocal_tonic_note = 8
      dta.song_tonality = 1
    } else if (key_signature === 'A Minor' || key_signature === 'Am') {
      dta.vocal_tonic_note = 9
      dta.song_tonality = 1
    } else if (key_signature === 'A# Minor' || key_signature === 'Bb Minor' || key_signature === 'A#m' || key_signature === 'Bbm') {
      dta.vocal_tonic_note = 10
      dta.song_tonality = 1
    } else {
      dta.vocal_tonic_note = 11
      dta.song_tonality = 0
    }
  }

  if (pack_name) dta.pack_name = pack_name

  if (author) dta.author = author

  if (karaoke !== undefined) dta.karaoke = karaoke

  if (multitrack !== undefined) dta.multitrack = multitrack

  if (doubleKick !== undefined) dta.doubleKick = doubleKick

  if (convert !== undefined) dta.convert = convert

  if (rhythmOnBass !== undefined) dta.rhythmOnBass = rhythmOnBass

  if (rhythmOnKeys !== undefined) dta.rhythmOnKeys = rhythmOnKeys

  if (CATemh !== undefined) dta.CATemh = CATemh

  if (expertOnly !== undefined) dta.expertOnly = expertOnly

  return dta
}
