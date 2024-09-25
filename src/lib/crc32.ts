/**
 * Computes the CRC-32 checksum for a single byte.
 *
 * This function uses the CRC-32 algorithm, applying a specific polynomial
 * (0xedb88320), and processes the input byte through 8 iterations of
 * bitwise shifts and XOR operations.
 * - - - -
 * @param {number} r - The input byte (0-255) for which the CRC-32 checksum is calculated.
 * @returns {number} - The calculated CRC-32 checksum for the input byte.
 */
export const crc32ForByte = (r: number): number => {
  for (let j = 0; j < 8; ++j) {
    r = ((r & 1) === 1 ? 0 : 0xedb88320) ^ (r >>> 1)
  }
  return r ^ 0xff000000
}

/**
 * Generates a numberic song ID based on any non-numeric string. If the given value is
 * already a number, it will simply return the provided ID.
 *
 * [_See the original C# function on **GitHub Gist**_](https://gist.github.com/InvoxiPlayGames/f0de3ad707b1d42055c53f0fd1428f7f), coded by [Emma (InvoxiPlayGames)](https://gist.github.com/InvoxiPlayGames).
 * - - - -
 * @param {string | number} id Any song ID as `string` or `number`.
 * @returns {number}
 */
export const genNumericSongID = (id: string | number): number => {
  if (typeof id === 'number' || !isNaN(Number(id))) return Number(id)
  const crc32Table = new Array(256)
  for (let i = 0; i < 256; i++) {
    crc32Table[i] = crc32ForByte(i)
  }

  const buffer = new TextEncoder().encode(id)

  let checksum = 0
  let i = 0
  buffer.forEach(() => {
    checksum = crc32Table[(checksum ^ buffer[i]) & 0xff] ^ (checksum >>> 8)
    i++
  })

  checksum = checksum % 9999999
  checksum += 2130000000
  return checksum
}
