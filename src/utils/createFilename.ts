import { DTAFile, Song } from '../core'
import { leadingArticleToTrailing } from './stringProcessor'

/**
 * Creates a file name for a `DTAFile` object based on its values.
 *
 * The `format` argument must be a string with the format you want for the file name, any
 * formatted value must be placed inside double brackets (`{{title}}`, for example).
 * - - - -
 * @param {DTAFile | Song} song A `DTAFile` object, or a `Song` class you want to generate
 * a file name for.
 * @param {string} format A string with format values you want to add.
 * @returns {string}
 */
export const createFilename = (song: DTAFile | Song, format: string): string => {
  const regex = /\{\{([^}]+)\}\}/g

  const name = format.replace(regex, (match, key) => {
    let value: string
    console.log(match, key)
    switch (key) {
      case 'title':
      case 'name':
        value = song instanceof Song ? song.getValue.name({ leadingArticle: 'emit' }) : song.name
        break
      case 'artist':
        value = song instanceof Song ? song.getValue.artist({ leadingArticle: 'emit' }) : song.artist
        break
      case 'title-the':
      case 'name-the':
        value = song instanceof Song ? song.getValue.name({ leadingArticle: 'trailing' }) : leadingArticleToTrailing(song.name)
        break
      case 'artist-the':
        value = song instanceof Song ? song.getValue.artist({ leadingArticle: 'trailing' }) : leadingArticleToTrailing(song.artist)
        break
      case 'songname':
        value = song instanceof Song ? song.value.songname : song.songname
        break
      default:
        value = match
    }
    return value !== undefined ? value : match
  })

  return name.endsWith('.dta') ? name : `${name}.dta`
}
