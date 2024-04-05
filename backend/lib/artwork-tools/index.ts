import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

export type ArtworkImageSizeTypes = '256x256' | '512x512'

/**
 * Asynchronously fetches an album artwork and save it as a `.png` file on the `backend/gen` folder.
 * - - - -
 * @param {string} url The URL of the artwork.
 * @param {string | string[]} songname The file name or an array of file names to be saved the artwork image.
 *
 * `*_keep` will be added to the end of the file name automatically, if not present.
 * @param {ArtworkImageSizeTypes | undefined} imageSize `OPTIONAL` The size of the image that will be saved. Default if `'256x256'`.
 */
export const fetchArtwork = async (url: string, songname: string | string[], imageSize?: ArtworkImageSizeTypes): Promise<void> => {
  if (Array.isArray(songname)) {
    await Promise.all(
      songname.map(async (name) => {
        if (name) {
          const newName = name.endsWith('_keep') ? name : `${name}_keep`
          const saveFn = path.resolve(`./backend/gen/${newName}.png`)

          const imgResponse = await fetch(url, { method: 'GET' })
          const imgArrBuffer = await imgResponse.arrayBuffer()

          if (imageSize === undefined || imageSize === '256x256') {
            const img = sharp(imgArrBuffer).png().resize(256, 256)
            await fs.promises.writeFile(saveFn, await img.toBuffer())
          } else {
            const img = sharp(imgArrBuffer).png().resize(512, 512)
            await fs.promises.writeFile(saveFn, await img.toBuffer())
          }
        }
      })
    )
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
 * Asynchronously converts any image file to a PNG image file.
 * - - - -
 * @param {string} fp The file path of image.
 * @param {string} songname The file name to be saved. `*_keep` will be added to the end of the file name automatically, if not present.
 * @param {ArtworkImageSizeTypes | undefined} imageSize `OPTIONAL` The size of the image that will be saved. Default if `'256x256'`.
 */
export const imageFileToPNG = async (fp: string, songname: string, imageSize?: ArtworkImageSizeTypes): Promise<void> => {
  const newName = songname.endsWith('_keep') ? songname : `${songname}_keep`
  const saveFn = path.resolve(`./backend/gen/${newName}.png`)
  if (imageSize === undefined || imageSize === '256x256') {
    const img = sharp(fp).resize(256, 256).png()
    await fs.promises.writeFile(saveFn, await img.toBuffer())
  } else {
    const img = sharp(fp).resize(512, 512).png()
    await fs.promises.writeFile(saveFn, await img.toBuffer())
  }
}
