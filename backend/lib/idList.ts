import path from 'path'
import { mySongsList } from '../core/database'
import fs from 'fs'

export const genSongIDList = async () => {
  const mySongs = mySongsList()
  let index = 1
  let contents = ''

  mySongs.forEach((song) => {
    const id = Number(song.song_id.toString().slice(-4))
    while (index < id) {
      contents += `${index.toString().padStart(3, '0')} ------\n`
      index++
    }
    if (song.fake) {
      contents += `${id.toString().padStart(3, '0')} ${song.id.slice(4)} (fake)\n`
      index++
    } else {
      contents += `${id.toString().padStart(3, '0')} ${song.id.slice(4)}\n`
      index++
    }
  })

  await fs.promises.writeFile(path.resolve(`./backend/gen/id.dta`), contents)
}
