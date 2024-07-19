import { type DTAFile, type DTAFileRecipe, Song, SongCollection } from '../core.js'

export type DTASongObjectTypes = DTAFile | DTAFile[] | Song | SongCollection | DTAFileRecipe

/**
 * Type guard function to check through all known parsed song types if the provided parsed song
 * is a `Song` class instance.
 * - - - -
 * @param {DTASongObjectTypes} song Any type of parsed song object or class.
 * @returns {song is Song} A boolean value that tells the provided parsed song is a
 * `Song` class instance.
 */
export const isSongClass = (song: DTASongObjectTypes): song is Song => {
  return song instanceof Song
}

/**
 * Type guard function to check through all known parsed song types if the provided parsed song
 * is a `SongCollection` class instance.
 * - - - -
 * @param {DTASongObjectTypes} song Any type of parsed song object or class.
 * @returns {song is SongCollection} A boolean value that tells the provided parsed song is a
 * `SongCollection` class instance.
 */
export const isSongCollection = (song: DTASongObjectTypes): song is SongCollection => {
  return song instanceof SongCollection
}

/**
 * Type guard function to check through all known parsed song types if the provided parsed song
 * is a `DTAFile` object.
 * - - - -
 * @param {DTASongObjectTypes} song Any type of parsed song object or class.
 * @returns {song is DTAFile} A boolean value that tells the provided parsed song is a
 * `DTAFile` object.
 */
export const isDTAFile = (song: DTASongObjectTypes): song is DTAFile => {
  return typeof song === 'object' && 'tracks_count' in song
}

/**
 * Type guard function to check through all known parsed song types if the provided parsed song
 * is an array of `DTAFile` objects.
 * - - - -
 * @param {DTASongObjectTypes} song Any type of parsed song object or class.
 * @returns {song is DTAFile[]} A boolean value that tells the provided parsed song is a
 * array of `DTAFile` objects.
 */
export const isDTAFileArray = (song: DTASongObjectTypes): song is DTAFile[] => {
  return Array.isArray(song)
}

/**
 * Type guard function to check through all known parsed song types if the provided parsed song
 * is a `DTAFileRecipe` object.
 * - - - -
 * @param {DTASongObjectTypes} song Any type of parsed song object or class.
 * @returns {song is DTAFileRecipe} A boolean value that tells the provided parsed song is a
 * `DTAFileRecipe` object.
 */
export const isDTAFileRecipe = (song: DTASongObjectTypes): song is DTAFileRecipe => {
  return !isSongClass(song) && !isSongCollection(song) && !isDTAFileArray(song) && !isDTAFile(song)
}
