import { DTAFile } from '..'
import { omitLeadingArticle } from '../../utils'

const sortingLocale = {
  name: 'Song Title',
  artist: 'Artist',
  artist_and_name: 'Artist -> Song Title',
  artist_set: 'Artist -> Year Released -> Album Name -> Album Track Number',
  id: 'Shortname',
  song_id: 'Song ID',
} as const

export type SongSortingTypes = (typeof sortingLocale)[keyof typeof sortingLocale] | null

/**
 * Sorts an array of parsed song objects.
 * - - - -
 * @param {DTAFile[]} songs An array with parsed song objects.
 * @param {SongSortingTypes} sortBy The sorting type.
 * @returns {DTAFile[]} A sorted array of parsed song objects.
 */
export const sortDTA = (songs: DTAFile[], sortBy: SongSortingTypes): DTAFile[] => {
  if (sortBy === 'Song Title') {
    return songs.sort((a, b) => {
      if (omitLeadingArticle(a.name.toLowerCase()) > omitLeadingArticle(b.name.toLowerCase())) return 1
      if (omitLeadingArticle(a.name.toLowerCase()) < omitLeadingArticle(b.name.toLowerCase())) return -1
      return 0
    })
  } else if (sortBy === 'Artist') {
    return songs.sort((a, b) => {
      if (omitLeadingArticle(a.artist.toLowerCase()) > omitLeadingArticle(b.artist.toLowerCase())) return 1
      if (omitLeadingArticle(a.artist.toLowerCase()) < omitLeadingArticle(b.artist.toLowerCase())) return -1
      return 0
    })
  } else if (sortBy === 'Artist -> Song Title') {
    return songs.sort((a, b) => {
      if (omitLeadingArticle(a.artist.toLowerCase()) > omitLeadingArticle(b.artist.toLowerCase())) return 1
      if (omitLeadingArticle(a.artist.toLowerCase()) < omitLeadingArticle(b.artist.toLowerCase())) return -1
      if (omitLeadingArticle(a.name.toLowerCase()) > omitLeadingArticle(b.name.toLowerCase())) return 1
      if (omitLeadingArticle(a.name.toLowerCase()) < omitLeadingArticle(b.name.toLowerCase())) return -1
      return 0
    })
  } else if (sortBy === 'Artist -> Year Released -> Album Name -> Album Track Number') {
    return songs.sort((a, b) => {
      if (omitLeadingArticle(a.artist.toLowerCase()) > omitLeadingArticle(b.artist.toLowerCase())) return 1
      if (omitLeadingArticle(a.artist.toLowerCase()) < omitLeadingArticle(b.artist.toLowerCase())) return -1
      if (a.year_released > b.year_released) return 1
      if (a.year_released < b.year_released) return -1
      if (a.album_name && b.album_name && a.album_name.toLowerCase() > b.album_name.toLowerCase()) return 1
      if (a.album_name && b.album_name && a.album_name.toLowerCase() < b.album_name.toLowerCase()) return -1
      if (a.album_track_number && a.album_track_number > a.album_track_number && b.album_track_number) return 1
      if (a.album_track_number && a.album_track_number < a.album_track_number && b.album_track_number) return -1
      return 0
    })
  } else if (sortBy === 'Shortname') {
    return songs.sort((a, b) => {
      if (a.id.toLowerCase() > b.id.toLowerCase()) return 1
      if (a.id.toLowerCase() < b.id.toLowerCase()) return -1
      return 0
    })
  } else if (sortBy === 'Song ID') {
    // Sorting by Song ID
    return songs.sort((a, b) => {
      if (String(a.song_id).toLowerCase() > String(b.song_id).toLowerCase()) return 1
      if (String(a.song_id).toLowerCase() < String(b.song_id).toLowerCase()) return -1
      return 0
    })
  } else return songs
}
