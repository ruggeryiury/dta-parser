/**
 * Converts milliseconds to formatted `HH:MM:SS` time string.
 * - - - -
 * @param {number} milliseconds Quantity of milliseconds.
 * @returns {string} The formatted time string.
 */
export const millisecondsToTimeString = (milliseconds: number): string => {
  const totalSeconds = Math.floor(milliseconds / 1000)
  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  const timeParts: string[] = []
  if (hours > 0) {
    timeParts.push(hours.toString().padStart(2, '0'))
    timeParts.push(minutes.toString().padStart(2, '0'))
  } else {
    timeParts.push(minutes.toString())
  }
  timeParts.push(seconds.toString().padStart(2, '0'))

  return timeParts.join(':')
}

/**
 * Converts formatted `HH:MM:SS` time string to milliseconds, as number.
 * - - - -
 * @param {string} timeString The time string you want to be calculated.
 * @returns {number} The calculated time as number.
 */
export const timeStringToMilliseconds = (timeString: string): number => {
  const timeParts = timeString.split(':').map(Number)

  if (timeParts.length === 3) {
    const [hours, minutes, seconds] = timeParts
    const totalMilliseconds = ((hours * 60 + minutes) * 60 + seconds) * 1000
    return totalMilliseconds
  } else if (timeParts.length === 2) {
    const [minutes, seconds] = timeParts
    const totalMilliseconds = (minutes * 60 + seconds) * 1000
    return totalMilliseconds
  } else {
    throw new Error(
      'Invalid time format. Expected either "HH:MM:SS" or "MM:SS".'
    )
  }
}

/**
 * Converts milliseconds to seconds.
 * - - - -
 * @param {number} milliseconds Quantity of milliseconds.
 * @returns {number} The calculated time as seconds.
 */
export const millisecondsToSeconds = (milliseconds: number): number => {
  return milliseconds / 1000
}
