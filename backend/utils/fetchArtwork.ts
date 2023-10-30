import fs from 'fs'
import axios from 'axios'
import path from 'path'
import sharp from 'sharp'

/**
 * Asynchronously fetch an album artwork and save it on `backend/gen`.
 * - - - -
 * @param {string} url The URL of the artwork.
 * @param {string} fn The file name.
 */
export const fetchArtwork = async (url: string, fn: string): Promise<void> => {
  if (!url) throw Error('fetchArtwork: URL is empty')
  if (!fn) throw Error('fetchArtwork: File name is empty')

  const saveFn = path.resolve(`./backend/gen/${fn}_keep.png`)

  const imgArrBuffer = await axios<ArrayBuffer>({
    url,
    method: 'GET',
    responseType: 'arraybuffer',
  })

  const t = sharp(imgArrBuffer.data).png().resize(512, 512)
  await fs.promises.writeFile(saveFn, await t.toBuffer())
}
