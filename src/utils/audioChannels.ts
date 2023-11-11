/**
 * Generates a string representing a series of track counts incremented by a specified value.
 * - - - -
 * @param {number} trackStart The starting track count.
 * @param {number} add The value to increment the track count by.
 * @returns {string} A string representing the series of track counts.
 */
export const tracksCountToString = (trackStart: number, add: number): string => {
  let returnString = ''
  const iterator = Array(add).fill(0)
  iterator.forEach((value, i) => {
    returnString += `${trackStart}${i === iterator.length - 1 ? '' : ' '}`
    trackStart++
    return
  })
  return returnString
}
