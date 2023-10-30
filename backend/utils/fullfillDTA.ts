import { DTAFile, DTAFileContents } from '../../src/@types/DTAFile'

/**
 * Type-safety injects custom attributes to create custom DTA file contents types by passing the desired type as type parameter.
 *
 * @param {DTAFile | DTAFileContents} song The parsed song you want to inserts new information to.
 * @param {Omit<T, keyof DTAFileContents>} newValues The new values to want to insert on the parsed song object.
 * @returns {T} The parsed song object with new informations added.
 * - - - -
 */
export const fullfillDTA = <T extends DTAFileContents>(song: DTAFile | DTAFileContents, newValues: Omit<T, keyof DTAFileContents>): T => {
  const returnType = 'content' in song ? (song.content as T) : (song as T)
  const keys = Object.keys(newValues) as (keyof Omit<T, keyof DTAFileContents>)[]

  keys.forEach((key) => {
    returnType[key] = (newValues as Exclude<T, DTAFileContents>)[key]
  })

  return returnType
}
