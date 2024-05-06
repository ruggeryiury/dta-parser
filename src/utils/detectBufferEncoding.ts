import { detect } from 'jschardet'
import { SongEncoding } from '../core'

/**
 * Figures out the encoding of a string of buffer.
 * - - - -
 * @param {string | Buffer} data The data you want to know the encoding type.
 * @returns {SongEncoding} The encoding of the Buffer (formatted to DTA file).
 */
export const detectBufferEncoding = (data: string | Buffer): SongEncoding => {
  const enc = detect(data).encoding
  return enc === 'windows-1252' || enc === 'ascii' ? 'latin1' : 'utf8'
}
