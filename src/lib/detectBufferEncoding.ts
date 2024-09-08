import { detectAll } from 'jschardet'

/**
 * Figures out the encoding of a string of buffer for DTA file exporting.
 * - - - -
 * @param {string | Buffer} data The data you want to know the encoding type.
 * @returns {string} The encoding of the Buffer (formatted to DTA file).
 */
export const detectBufferEncoding = (data: string | Buffer): BufferEncoding => {
  let bufEnc: BufferEncoding = 'latin1'
  let encodingSure = false
  const encodings = detectAll(data)
  encodings.forEach((enc) => {
    if (encodingSure) return
    if (enc.encoding === 'ASCII' && enc.confidence === 1) {
      bufEnc = 'ascii'
      encodingSure = true
      return
    } else if (enc.encoding === 'UTF-8' && enc.confidence >= 0.975) {
      bufEnc = 'utf8'
      encodingSure = true
      return
    }
    else if (enc.encoding.includes('windows-125') || (enc.encoding.includes('ISO-8859') && enc.confidence >= 0.95)) {
      encodingSure = true
      return
    }
  })

  return bufEnc
}
