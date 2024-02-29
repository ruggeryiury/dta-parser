import { DTAFile } from './dta'
import { omitLeadingArticle } from '../utils/stringProcessors'

type SortingFunction = (a: DTAFile, b: DTAFile) => 1 | -1 | 0

const sortByName: SortingFunction = (a, b) => {
  if (omitLeadingArticle(a.name.toLowerCase()) > omitLeadingArticle(b.name.toLowerCase())) return 1
  if (omitLeadingArticle(a.name.toLowerCase()) < omitLeadingArticle(b.name.toLowerCase())) return -1
  return 0
}

const sortByArtist: SortingFunction = (a, b) => {
  if (omitLeadingArticle(a.artist.toLowerCase()) > omitLeadingArticle(b.artist.toLowerCase())) return 1
  if (omitLeadingArticle(a.artist.toLowerCase()) < omitLeadingArticle(b.artist.toLowerCase())) return -1
  return 0
}

const sortByArtistAndName: SortingFunction = (a, b) => {
  if (omitLeadingArticle(a.artist.toLowerCase()) > omitLeadingArticle(b.artist.toLowerCase())) return 1
  if (omitLeadingArticle(a.artist.toLowerCase()) < omitLeadingArticle(b.artist.toLowerCase())) return -1
  if (omitLeadingArticle(a.name.toLowerCase()) > omitLeadingArticle(b.name.toLowerCase())) return 1
  if (omitLeadingArticle(a.name.toLowerCase()) < omitLeadingArticle(b.name.toLowerCase())) return -1
  return 0
}

const sortByArtistSet: SortingFunction = (a, b) => {
  if (omitLeadingArticle(a.artist.toLowerCase()) > omitLeadingArticle(b.artist.toLowerCase())) return 1
  if (omitLeadingArticle(a.artist.toLowerCase()) < omitLeadingArticle(b.artist.toLowerCase())) return -1
  if (a.year_released > b.year_released) return 1
  if (a.year_released < b.year_released) return -1
  if (a.album_name && b.album_name && a.album_name.toLowerCase() > b.album_name.toLowerCase()) return 1
  if (a.album_name && b.album_name && a.album_name.toLowerCase() < b.album_name.toLowerCase()) return -1
  if (a.album_track_number && a.album_track_number > a.album_track_number && b.album_track_number) return 1
  if (a.album_track_number && a.album_track_number < a.album_track_number && b.album_track_number) return -1

  return 0
}

const sortByID: SortingFunction = (a, b) => {
  if (a.id.toLowerCase() > b.id.toLowerCase()) return 1
  if (a.id.toLowerCase() < b.id.toLowerCase()) return -1
  return 0
}

const sortBySongID: SortingFunction = (a, b) => {
  if (String(a.song_id).toLowerCase() > String(b.song_id).toLowerCase()) return 1
  if (String(a.song_id).toLowerCase() < String(b.song_id).toLowerCase()) return -1
  return 0
}

export type SortByOptionsTypes = 'name' | 'artist' | 'artist_and_name' | 'artist_set' | 'id' | 'song_id'
/**
 * Sorts an array of parsed song objects.
 * - - - -
 * @param {DTAFile[]} songs An array with parsed song objects.
 * @param {SortByOptionsTypes | undefined} sortBy `OPTIONAL` The sorting type. Default is `song_id`.
 * @returns {DTAFile[]} A sorted array of parsed song objects.
 */
export const sortDTA = (songs: DTAFile[], sortBy: SortByOptionsTypes = 'song_id'): DTAFile[] => {
  if (sortBy === 'name') {
    return songs.sort(sortByName)
  } else if (sortBy === 'artist') {
    return songs.sort(sortByArtist)
  } else if (sortBy === 'artist_and_name') {
    return songs.sort(sortByArtistAndName)
  } else if (sortBy === 'artist_set') {
    return songs.sort(sortByArtistSet)
  } else if (sortBy === 'id') {
    return songs.sort(sortByID)
  }
  return songs.sort(sortBySongID)
}
