import { VocalPartsTypes, BankTypes, DrumBankTypes, BandFailCueTypes, SongScrollSpeedTypes, RatingTypes, GenreTypes, SubGenreTypes, VocalGenderTypes, AnimTempoNumeralTypes } from './locale'

export type SoloFlags = 'drum' | 'bass' | 'guitar' | 'keys' | 'vocal_percussion'
export type SongKeyValues = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11
export type SongTonalityValues = 0 | 1
export type ExtraAuthoringFlags = 'disc_update' | 'pearljam' | 'greenday'
export type EncodingValues = 'latin1' | 'utf8'
export type GameOriginValues = 'rb1' | 'rb1_dlc' | 'rb2' | 'rb2_dlc' | 'rb3' | 'rb3_dlc' | 'lego' | 'greenday' | 'ugc' | 'ugc_plus'

/**
 * A parsed song object with all its contents.
 */
export interface DTAFileContents {
  /**
   * Unique string ID of the song.
   */
  id: string
  /**
   * The song's title.
   */
  name: string
  /**
   * The song's artist/band.
   */
  artist: string
  /**
   * Tells if the song is a master recording.
   */
  master: boolean
  /**
   * The numerical, unique number ID of the song. Might be a string ID as well.
   */
  song_id: number | string
  /**
   * The file name used inside the song's CON file structure.
   */
  songname: string
  /**
   * An array with the tracks count of all instruments, backing, and crowd channels.
   */
  tracks_count: [number, number, number, number, number, number, number?]
  /**
   * Tracks panning information of all audio channels.
   */
  pans: number[]
  /**
   * Volume information of all audio channels.
   */
  vols: number[]
  /**
   * The quantity of vocal parts of the song.
   */
  vocal_parts: VocalPartsTypes
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
  /**
   * Default is `170`.
   */
  hopo_threshold?: number
  /**
   * The audio cue type of the vocal percussion. Default is `sfx/tambourine_bank.milo` (Tambourine).
   */
  bank: BankTypes
  /**
   * The audio cue type of the drums on Drum Fills/Freestyle Mode. Default is `sfx/kit01_bank.milo` (Hard Rock Kit).
   */
  drum_bank: DrumBankTypes
  /**
   * The song animation's speed. Default is `32` (Normal).
   */
  anim_tempo: AnimTempoNumeralTypes
  band_fail_cue?: BandFailCueTypes
  /**
   * Default is `2300`.
   */
  song_scroll_speed?: SongScrollSpeedTypes
  /**
   * An array with start and end of the preview, in milliseconds
   */
  preview: [number, number]
  /**
   * The length of the song, in milliseconds.
   */
  song_length: number
  /**
   * The song's band ranking number.
   */
  rank_band: number
  /**
   * The song's drums ranking number.
   */
  rank_drum?: number
  /**
   * The song's bass ranking number.
   */
  rank_bass?: number
  /**
   * The song's guitar ranking number.
   */
  rank_guitar?: number
  /**
   * The song's vocals ranking number.
   */
  rank_vocals?: number
  /**
   * The song's keys ranking number.
   */
  rank_keys?: number
  /**
   * The song's PRO Bass ranking number.
   */
  rank_real_bass?: number
  /**
   * The song's PRO Guitar ranking number.
   */
  rank_real_guitar?: number
  /**
   * The song's PRO Keys ranking number.
   */
  rank_real_keys?: number
  /**
   * An array specifying which instrument parts has solo sessions.
   */
  solo?: SoloFlags[]
  /**
   * Adjusts the entire MIDI vocal chart up or down by cents. Default is `0`.
   */
  tuning_offset_cents?: number
  /**
   * The volume of the vocal guide pitch on the vocal practice menu. Default is `-3`.
   */
  guide_pitch_volume?: number
  /**
   * The encoding of the MIDI song file. Default is `latin1`.
   *
   * Songs which MIDI file is exported with UTF-8 encoding should have `utf8` as encoding.
   */
  encoding?: EncodingValues
  format?: number
  version?: number
  /**
   * The game origin of the song.
   *
   * All customs are compiled on MAGMA using `ugc_plus`.
   */
  game_origin?: GameOriginValues
  /**
   * The song's rating.
   */
  rating: RatingTypes
  /**
   * The song's genre.
   */
  genre: GenreTypes
  /**
   * The song's sub-genre.
   */
  sub_genre?: SubGenreTypes
  /**
   * The gender of the lead vocalist.
   */
  vocal_gender: VocalGenderTypes
  /**
   * The song's release year.
   */
  year_released: number
  /**
   * The song's recorded year.
   *
   * This is used on re-recordings or alternative versions of
   * the song.
   */
  year_recorded?: number
  /**
   * Tells if the song has an album artwork file to be displayed.
   */
  album_art: boolean
  /**
   * The name of the song's album.
   */
  album_name?: string
  /**
   * The song's track number on the album.
   */
  album_track_number?: number
  /**
   * The vocal tonic note of the song. This changes the HUD on the vocal tracks based on the given note.
   *
   * If `song_key` is not specified, it'll be used as song key in general, changing the accident symbol on
   * PRO Guitar/Bass parts and showing the song key on PRO Keys trainers based on it.
   */
  vocal_tonic_note?: SongKeyValues
  /**
   * The song tonality of the song.
   *
   * Values can be `0` (Major tonality) or `1` (Minor tonality).
   */
  song_tonality?: SongTonalityValues
  /**
   * Specific parameter to override the `vocal_tonic_note` on PRO Guitar/Bass/Keys parts.
   */
  song_key?: SongKeyValues
  /**
   * An array with the tuning of all 6 strings of the PRO Guitar part.
   */
  real_guitar_tuning?: [number, number, number, number, number, number]
  /**
   * An array with the tuning of all 4 strings of the PRO Bass part.
   */
  real_bass_tuning?: [number, number, number, number]
  extra_authoring?: ExtraAuthoringFlags[]
  alternate_path?: boolean
  context?: number
  /**
   * The name of the song's pack.
   */
  pack_name?: string
  base_points?: number
  /**
   * The author of the song.
   */
  author?: string
  /**
   * An array with the languages of the song.
   */
  languages?: string[]
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
 * Type with all available keys from a DTA File.
 */
export type DTAFileContentsKeys = keyof DTAFileContents

/**
 * All options from `DTAFileContents` converted to optional.
 */
export type PartialDTAFileContents = Partial<DTAFileContents>

/**
 * Generic type for custom `DTAFileContents` type.
 */
export type ExpandedDTAFileContents<T> = Omit<DTAFileContents, keyof T> & T

export const dtaDefault: DTAFileContents = {
  id: '',
  name: '',
  artist: '',
  master: false,
  song_id: 0,
  songname: '',
  tracks_count: [0, 0, 0, 0, 0, 0],
  pans: [],
  vols: [],
  vocal_parts: 0,
  bank: 'sfx/tambourine_bank.milo',
  drum_bank: 'sfx/kit01_bank.milo',
  anim_tempo: 32,
  preview: [0, 0],
  song_length: 0,
  rank_band: 1,
  game_origin: 'ugc_plus',
  rating: 4,
  genre: 'other',
  vocal_gender: 'male',
  year_released: new Date().getFullYear(),
  album_art: false,
  album_name: '',
}