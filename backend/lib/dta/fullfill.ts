import { DTAFile } from '../../../src/lib/dta/dta'

/**
 * Type-safety injects custom attributes to create custom DTA file contents types by passing the desired type as type parameter.
 *
 * @param {DTAFile} song The parsed song you want to inserts new information to.
 * @param {Omit<T, keyof DTAFile>} newValues The new values to want to insert on the parsed song object.
 * @returns {T} The parsed song object with new informations added.
 * - - - -
 */
export const fullfillDTA = <T extends DTAFile>(song: DTAFile, newValues: Omit<T, keyof DTAFile>): T => {
  const returnType = song as T
  const keys = Object.keys(newValues) as (keyof Omit<T, keyof DTAFile>)[]

  keys.forEach((key) => {
    returnType[key] = (newValues as Exclude<T, DTAFile>)[key]
  })

  return returnType
}
