import { cloneDeep } from 'lodash'
import { DTAFile } from './dta'
import { updateDTA, UpdateDataOptions, TrackUpdateOptions, SongGenreUpdateOptions } from './update'
import { dtaDefault } from './dta'
import { Song } from '../classes'

export interface DTAFileRecipe extends UpdateDataOptions {
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
  song_id: string | number
  /**
   * The file name used inside the song's CON file structure.
   */
  songname: string
  /**
   * An object specifying the whole song's instruments and audio channels structure.
   *
   * Here, you specify the channels, ranking, and solo of all instruments. On `vocals`, you also specify the gender and
   * the quantity of vocal parts. You specify if the song has crowd channels as well.
   *
   * By placing a valid `tracks` options, it will override the whole song's structure.
   */
  tracks: TrackUpdateOptions
  /**
   * The start of the preview (the end of the preview is automatically calculated). It can be either a number, or a string.
   *
   * If it's a number, you must place the length of the song in milliseconds.
   *
   * You can also place a formatted time string (for example: `'2:30'`)
   */
  preview: string | number
  /**
   * The length of the song. It can be either a number, or a string.
   *
   * If it's a number, you must place the length of the song in milliseconds.
   *
   * You can also place a formatted time string (for example: `'2:30'`)
   */
  song_length: string | number
  /**
   * An object with the song's genre and sub-genre.
   */
  genre: SongGenreUpdateOptions
  /**
   * The song's release year.
   */
  year_released: number
}

/**
 * Creates a new parsed song object.
 * - - - -
 * @param {DTAFileRecipe} values `OPTIONAL` Options for the `DTAFile` creation process. If `undefined`, It will be created using a all-default, all-blank options.
 * @param {RT} asClass Refines the object to a `Song` class.
 * @returns {DTAFile} A new parsed song object.
 */
export const createDTA = <RT extends boolean | undefined = undefined>(values?: DTAFileRecipe, asClass?: RT): RT extends true ? Song : DTAFile => {
  let newDTAInstance = cloneDeep(dtaDefault)

  if (values) {
    newDTAInstance = updateDTA(newDTAInstance, values)
  }

  if (asClass) {
    return new Song(newDTAInstance) as RT extends true ? Song : DTAFile
  }

  return newDTAInstance as RT extends true ? Song : DTAFile
}
