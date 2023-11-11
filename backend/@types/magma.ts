import { DTAFileContents, ExpandedDTAFileContents } from '../../src'

export type AutogenValues =
  | 'Default'
  | 'AggressiveMetal'
  | 'ArenaRock'
  | 'DarkHeavyRock'
  | 'DustyVintage'
  | 'EdgyProgRock'
  | 'FeelGoodPopRock'
  | 'GaragePunkRock'
  | 'PsychJamRock'
  | 'SlowJam'
  | 'SynthPop'

export type DoubleKickOptions = {
  /**
   * If `true`, the kick drum stems path on MAGMA will use `kick2x.wav` rather than `kick.wav`,
   * and customs with a single stereo stem for drums will use `drums2x.wav` rather than `drums.wav`.
   *
   * This is useful if you managed to have a mix excluding the double kicks.
   */
  kickwav?: boolean
}

export interface MAGMAFileKeysValues extends DTAFileContents {
  /**
   * Sets the autogen option when generating the song's MAGMA file. Default is `ArenaRock` (Arena Rock template).
   */
  autogenTheme: AutogenValues
  /**
   * The date when the custom was originally released.
   */
  releasedAt: string
  /**
   * The date when the custom was updated.
   */
  updatedAt: string
  /**
   * Default is `1`.
   */
  releaseVer: number
  /**
   * Tells if the song is not yet available to be used through any metadata generator.
   */
  fake: boolean
  /**
   * Tells if the custom has vocals lipsync files. Default is `false`.
   */
  hasLipSyncFiles: boolean
  /**
   * Tells if the custom has authored venues. Default is `false`.
   */
  hasAuthoredVenues: boolean
  /**
   * Customize options for double kick songs.
   */
  doubleKickOptions: DoubleKickOptions
  /**
   * This can be used on solo vocals or 2-part harmonies songs to force MAGMA
   * to compile lipsync for unused harmonies fields.
   *
   * You must compile the song with fake HARM2/HARM3 tracks on the MIDI, and
   * replacing the MIDI file of the generated CON file.
   */
  fakeHarm: 2 | 3
}

/**
 * An extension of the basic `DTAFileContents` type.
 */
export type MAGMAProject = ExpandedDTAFileContents<Partial<MAGMAFileKeysValues>>
