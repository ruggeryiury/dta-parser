import { ExtDTAFileContents } from '../../src'

export type AutogenValues = 'Default' | 'AggressiveMetal' | 'ArenaRock' | 'DarkHeavyRock' | 'DustyVintage' | 'EdgyProgRock' | 'FeelGoodPopRock' | 'GaragePunkRock' | 'PsychJamRock' | 'SlowJam' | 'SynthPop'

export type DoubleKickOptions = {
  /**
   * If `true`, the kick drum stems path on MAGMA will use `kick2x.wav` rather than `kick.wav`,
   * and customs with a single stereo stem for drums will use `drums2x.wav` rather than `drums.wav`.
   *
   * This is useful if you managed to have a mix excluding the double kicks.
   */
  kickwav?: boolean
}

export interface MAGMAFileContentsOptions {
  /**
   * Sets the autogen option when generating the song's MAGMA file. Default is `ArenaRock` (Arena Rock template).
   */
  autogenTheme: AutogenValues
  pack_name: string
  releasedAt: string
  updatedAt: string
  /**
   * Default is `1`.
   */
  releaseVer: number
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
}

/**
 * An extension of the basic `DTAFileContents` type.
 */
export type MAGMAFileContents = ExtDTAFileContents<Partial<MAGMAFileContentsOptions>>
