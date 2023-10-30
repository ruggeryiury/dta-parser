import path from 'path'
import fs from 'fs'

export type GenFolderFilesTypes = 'songs.dta' | 'id.dta' | 'c3_rbdeps_rbproj'

export const cleanGenFolder = (files: GenFolderFilesTypes[]) => {
  const genFolderPath = fs.readdirSync(path.resolve('backend/gen')).map((fn) => path.resolve(`backend/gen/${fn}`))
  const songsDTAPath = path.resolve('backend/gen/songs.dta')
  const idDTAPath = path.resolve('backend/gen/songs.dta')
  files.forEach((file) => {
    if (file === 'songs.dta' && fs.existsSync(songsDTAPath)) {
      fs.unlinkSync(path.resolve('backend/gen/songs.dta'))
      return
    } else if (file === 'id.dta' && fs.existsSync(idDTAPath)) {
      fs.unlinkSync(idDTAPath)
      return
    } else if (file === 'c3_rbdeps_rbproj') {
      genFolderPath.forEach((filename) => {
        if (filename.endsWith('.c3') || filename.endsWith('.rbdeps') || filename.endsWith('.rbproj')) {
          fs.unlinkSync(filename)
          return
        }
      })
    }
  })
}
