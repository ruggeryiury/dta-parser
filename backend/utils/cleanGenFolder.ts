import path from 'path'
import fs from 'fs'

export type GenFolderFilesTypes = 'songs.dta' | 'id.dta' | 'c3_rbdeps_rbproj' | 'png'

/**
 * Cleans the `backend/gen` folder.
 * - - - -
 * @param {GenFolderFilesTypes[]} files An array with the type of the files you want to clean on the `backend/gen` folder.
 */
export const cleanGenFolder = (files: GenFolderFilesTypes[]) => {
  const genFolderPath = fs.readdirSync(path.resolve('backend/gen')).map((fn) => path.resolve(`backend/gen/${fn}`))
  const songsDTAPath = path.resolve('backend/gen/songs.dta')
  const idDTAPath = path.resolve('backend/gen/songs.dta')
  files.forEach((file) => {
    if (file === 'songs.dta' && fs.existsSync(songsDTAPath)) {
      fs.unlinkSync(songsDTAPath)
      return
    } else if (file === 'id.dta' && fs.existsSync(idDTAPath)) {
      fs.unlinkSync(idDTAPath)
      return
    } else if (file === 'c3_rbdeps_rbproj') {
      genFolderPath.forEach((filename) => {
        if (filename.endsWith('.c3') || filename.endsWith('.rbdeps') || filename.endsWith('.rbproj') || filename.endsWith('.rbdeps.new')) {
          fs.unlinkSync(filename)
          return
        }
      })
    } else if (file === 'png') {
      genFolderPath.forEach((filename) => {
        if (filename.endsWith('.png')) {
          fs.unlinkSync(filename)
          return
        }
      })
    }
  })
}
