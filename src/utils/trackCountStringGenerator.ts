/**
 * Generates a string representing a series of track counts incremented by a specified value.
 * - - - -
 * @param {number} trackCount The starting track count.
 * @param {number} add The value to increment the track count by.
 * @returns {string} A string representing the series of track counts.
 */
export const trackCountStringGenerator = (trackCount: number, add: number): string => {
  let returnString = ''
  const iterator = Array(add).fill(0)
  iterator.forEach((value, i) => {
    returnString += `${trackCount}${i === iterator.length - 1 ? '' : ' '}`
    trackCount++
    return
  })
  return returnString
}
