import { type DTAFile, type DTAFileWithUpdates } from '../core.js'

export type SimplifiedDTAFileWithUpdates = Omit<DTAFileWithUpdates, 'pans' | 'vols' | 'cores' | 'fake' | 'tracks_count' | 'mute_volume' | 'mute_volume_vocals' | 'bank' | 'drum_bank' | 'band_fail_cue' | 'song_scroll_speed' | 'preview' | 'solo' | 'guide_pitch_volume' | 'format' | 'version' | 'game_origin' | 'extra_authoring' | 'alternate_path' | 'context' | 'pack_name' | 'base_points' | 'loading_phrase' | 'languages' | 'karaoke' | 'convert' | 'rhythmOnKeys' | 'rhythmOnBass' | 'CATemh' | 'expertOnly'>

export type SimplifiedDTAFile = Omit<SimplifiedDTAFileWithUpdates, 'update'>

const excludedKeys = ['pans', 'vols', 'cores', 'fake', 'tracks_count', 'mute_volume', 'mute_volume_vocals', 'bank', 'drum_bank', 'band_fail_cue', 'song_scroll_speed', 'preview', 'solo', 'guide_pitch_volume', 'format', 'version', 'game_origin', 'extra_authoring', 'alternate_path', 'context', 'pack_name', 'base_points', 'loading_phrase', 'languages', 'karaoke', 'convert', 'rhythmOnKeys', 'rhythmOnBass', 'CATemh', 'expertOnly'] as (keyof DTAFile)[]

export type SimplifyDTAReturnType<T extends DTAFileWithUpdates | DTAFileWithUpdates[]> = T extends DTAFileWithUpdates ? SimplifiedDTAFileWithUpdates : SimplifiedDTAFileWithUpdates[]

/**
 * Simplifies a `DTAFile` object for simple metdata informations only, removing several values.
 * - - - -
 * @param {T} songs A parsed song object, or an array of parsed songs.
 * @returns {SimplifyDTAReturnType<T>} All songs simplified.
 */
export const simplifyDTA = <T extends DTAFileWithUpdates | DTAFileWithUpdates[]>(songs: T): SimplifyDTAReturnType<T> => {
  if (Array.isArray(songs)) {
    return songs.map((song) => {
      const simplifiedSong = { ...song }
      for (const key of excludedKeys) {
        delete simplifiedSong[key]
      }
      return simplifiedSong as SimplifiedDTAFileWithUpdates
    }) as SimplifyDTAReturnType<T>
  }
  const simplifiedSong = { ...songs }
  for (const key of excludedKeys) {
    delete (simplifiedSong as DTAFileWithUpdates)[key]
  }
  return simplifiedSong as SimplifyDTAReturnType<T>
}
