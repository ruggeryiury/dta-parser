import { detect } from 'jschardet'
import { SongEncoding } from '../../core'

/**
 * Figures out the encoding of a string of buffer.
 * - - - -
 * @param {string | Buffer} data The data you want to know the encoding type.
 * @returns {SongEncoding}
 */
const detectBufferEncoding = (data: string | Buffer): SongEncoding => {
  const enc = detect(data).encoding
  return enc === 'windows-1252' || enc === 'ascii' ? 'latin1' : 'utf8'
}

export default detectBufferEncoding
