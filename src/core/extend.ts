import { cloneDeep } from 'lodash'
import { DTAFile, UpdateDataOptions, updateDTA } from '../core'

export type ExtendNewValuesOnlyObject<T> = Omit<T, keyof DTAFile>

/**
 * Type-safety injects custom attributes to create custom DTA file contents types by passing the desired type as type parameter.
 * - - - -
 * @param {DTAFile} song The parsed song you want to inserts new information to.
 * @param {ExtendNewValuesOnlyObject<T>} newValues The new values to want to insert on the parsed song object.
 * @param {UpdateDataOptions} update `OPTIONAL` An object with values to update any default `DTAFile` value.
 * @returns {T} The parsed song object with new informations added.
 */
export const extendDTAFile = <T extends DTAFile>(
  song: DTAFile,
  newValues: ExtendNewValuesOnlyObject<T>,
  update?: UpdateDataOptions
): T => {
  const extendedSongObject = {
    ...cloneDeep(song),
    ...cloneDeep(newValues),
  } as T

  if (update) {
    return updateDTA(extendedSongObject, update) as T
  }

  return extendedSongObject
}
