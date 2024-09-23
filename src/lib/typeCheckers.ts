import { type DTAFile, type DTAFileRecipe, type DTAFileWithUpdates, type PartialDTAFile, type PartialDTAFileRecipe, type PartialDTAFileWithUpdates } from '../core.js'

export type DTASongObjectTypes = DTAFile | DTAFile[] | DTAFileRecipe | DTAFileRecipe[] | PartialDTAFile | PartialDTAFileRecipe | DTAFileWithUpdates | PartialDTAFileWithUpdates | Buffer

/**
 * Type guard function to check through all known parsed song types if the provided parsed song
 * is a `DTAFile` object.
 * - - - -
 * @param {DTASongObjectTypes} song Any type of parsed song object or class.
 * @returns {boolean} A boolean value that tells the provided parsed song is a
 * `DTAFile` object.
 */
export const isDTAFile = (song: DTASongObjectTypes): song is DTAFile => {
  return typeof song === 'object' && 'name' in song && 'artist' in song && 'id' in song && 'tracks_count' in song && 'preview' in song && 'pans' in song && 'vols' in song && 'vocal_parts' in song && 'bank' in song && 'anim_tempo' in song && 'rank_band' in song && 'game_origin' in song && 'rating' in song && 'genre' in song && 'vocal_gender' in song && 'year_released' in song
}

/**
 * Type guard function to check through all known parsed song types if the provided parsed song
 * is a `DTAFileRecipe` object.
 * - - - -
 * @param {DTASongObjectTypes} song Any type of parsed song object or class.
 * @returns {boolean} A boolean value that tells the provided parsed song is a
 * `DTAFileRecipe` object.
 */
export const isDTAFileRecipe = (song: DTASongObjectTypes): song is DTAFileRecipe => {
  return !isDTAFile(song) && 'tracks' in song
}
