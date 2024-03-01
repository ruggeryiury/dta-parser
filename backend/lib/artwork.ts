import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

/**
 * Asynchronously fetches an album artwork and save it on `backend/gen`.
 * - - - -
 * @param {string} url The URL of the artwork.
 * @param {string | string[]} songname The file nam or an array of file names to be saved, `_keep` will be added to file name automatically.
 */
export const fetchArtwork = async (url: string, songname: string | string[]): Promise<void> => {
  if (Array.isArray(songname)) {
    // eslint-disable-next-line  @typescript-eslint/no-misused-promises
    songname.forEach(async (name) => {
      if (name) {
        const saveFn = path.resolve(`./backend/gen/${name}_keep.png`)

        const imgResponse = await fetch(url, { method: 'GET' })
        const imgArrBuffer = await imgResponse.arrayBuffer()

        const img = sharp(imgArrBuffer).png().resize(256, 256)
        await fs.promises.writeFile(saveFn, await img.toBuffer())
      }
    })
  } else {
    if (songname) {
      const saveFn = path.resolve(`./backend/gen/${songname}_keep.png`)

      const imgResponse = await fetch(url, { method: 'GET' })
      const imgArrBuffer = await imgResponse.arrayBuffer()

      const img = sharp(imgArrBuffer).png().resize(256, 256)
      await fs.promises.writeFile(saveFn, await img.toBuffer())
    }
  }
}

/**
 * Asynchronously converts any image file to a 256x256 PNG image file.
 * - - - -
 * @param {string} fp The file path of image.
 * @param {string} songname The file name to be saved, `_keep` will be added to file name automatically.
 */
export const imageFileToPNG = async (fp: string, songname: string): Promise<void> => {
  const saveFn = path.resolve(`./backend/gen/${songname}_keep.png`)
  const img = sharp(fp).resize(512, 512).png()
  await fs.promises.writeFile(saveFn, await img.toBuffer())
}
