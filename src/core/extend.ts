import { updateDTA, type AnyDTAType, type DTASelfReturnType, type DTAUpdateOptionsForExtend, type PartialDTAFile } from '../core.js'

export type ExtendNewValuesOnlyObject<T> = Omit<T, keyof PartialDTAFile>

/**
 * Type-safety injects custom attributes to create custom DTA file contents types by passing the desired type as type parameter.
 * - - - -
 * @param {PartialDTAFile} song The parsed song you want to inserts new information to.
 * @param {ExtendNewValuesOnlyObject<T>} newValues The new values to want to insert on the parsed song object.
 * @param {UpdateDataOptions} update `OPTIONAL` An object with values to update any value.
 * @returns {T} The parsed song object with new informations added.
 */
export const extendDTAFile = <T extends AnyDTAType>(song: T, newValues: ExtendNewValuesOnlyObject<T>, update?: DTAUpdateOptionsForExtend): DTASelfReturnType<T> => {
  const extendedSongObject = {
    ...song,
    ...newValues,
  } as DTASelfReturnType<T>

  
  if (update) {
    return updateDTA(extendedSongObject, update) as DTASelfReturnType<T>
  }

  return extendedSongObject
}
