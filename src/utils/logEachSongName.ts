import { DTAFileContents, DTAFile } from '..'

/**
 * Log each song's name from an array with parsed songs or an array with JSON representations of parsed songs
 * - - - -
 * @param {DTAFile[] | DTAFileContents[]} songs An array with parsed songs or with JSON representations of parsed songs.
 */
export const logEachSongName = (songs: DTAFile[] | DTAFileContents[]) => {
  songs.forEach((song) => {
    if ('content' in song) console.log(song.content.name)
    else console.log(song.name)
  })

  return
}
