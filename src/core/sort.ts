import type { AnyDTATypeArray, DTASelfReturnType } from '../core.js'
import { omitLeadingArticle } from '../lib.js'

const sortingLocale = {
  name: 'Song Title',
  artist: 'Artist',
  artist_and_name: 'Artist -> Song Title',
  artist_set: 'Artist -> Year Released -> Album Name -> Album Track Number',
  id: 'ID',
  song_id: 'Song ID',
} as const

export type SongSortingTypes = (typeof sortingLocale)[keyof typeof sortingLocale] | null

/**
 * Sorts an array of parsed song objects.
 * - - - -
 * @param {AnyDTATypeArray} songs An array with parsed song objects.
 * @param {SongSortingTypes} sortBy The sorting type.
 * @returns {PartialDTAFile[]} A sorted array of parsed song objects.
 */
export const sortDTA = <T extends AnyDTATypeArray>(songs: T, sortBy: SongSortingTypes): DTASelfReturnType<T> => {
  if (sortBy === 'Song Title') {
    return songs.sort((a, b) => {
      const AID = a.id.toLowerCase()
      const BID = b.id.toLowerCase()
      const nameA = a.name ? omitLeadingArticle(a.name.toLowerCase()) : undefined
      const nameB = b.name ? omitLeadingArticle(b.name.toLowerCase()) : undefined

      if (nameA !== undefined && nameB !== undefined) return nameA.localeCompare(nameB)

      if (nameA !== undefined) return -1
      if (nameB !== undefined) return 1
      return AID.localeCompare(BID)
    }) as DTASelfReturnType<T>
  } else if (sortBy === 'Artist') {
    return songs.sort((a, b) => {
      const AID = a.id.toLowerCase()
      const BID = b.id.toLowerCase()
      const artistA = a.artist ? omitLeadingArticle(a.artist.toLowerCase()) : undefined
      const artistB = b.artist ? omitLeadingArticle(b.artist.toLowerCase()) : undefined

      if (artistA !== undefined && artistB !== undefined) return artistA.localeCompare(artistB)

      if (artistA !== undefined) return -1
      if (artistB !== undefined) return 1
      return AID.localeCompare(BID)
    }) as DTASelfReturnType<T>
  } else if (sortBy === 'Artist -> Song Title') {
    return songs.sort((a, b) => {
      const AID = a.id.toLowerCase()
      const BID = b.id.toLowerCase()
      const nameA = a.name ? omitLeadingArticle(a.name.toLowerCase()) : undefined
      const nameB = b.name ? omitLeadingArticle(b.name.toLowerCase()) : undefined
      const artistA = a.artist ? omitLeadingArticle(a.artist.toLowerCase()) : undefined
      const artistB = b.artist ? omitLeadingArticle(b.artist.toLowerCase()) : undefined

      if (nameA !== undefined && nameB !== undefined) return nameA.localeCompare(nameB)
      if (artistA !== undefined && artistB !== undefined) return artistA.localeCompare(artistB)

      if (nameA !== undefined) return -1
      if (nameB !== undefined) return 1
      if (artistA !== undefined) return -1
      if (artistB !== undefined) return 1

      return AID.localeCompare(BID)
    }) as DTASelfReturnType<T>
  } else if (sortBy === 'Artist -> Year Released -> Album Name -> Album Track Number') {
    return songs.sort((a, b) => {
      const AID = a.id.toLowerCase()
      const BID = b.id.toLowerCase()
      const artistA = a.artist ? omitLeadingArticle(a.artist.toLowerCase()) : undefined
      const artistB = b.artist ? omitLeadingArticle(b.artist.toLowerCase()) : undefined
      const yearA = a.year_released ? a.year_released : undefined
      const yearB = b.year_released ? a.year_released : undefined
      const albumA = a.album_name ? omitLeadingArticle(a.album_name.toLowerCase()) : undefined
      const albumB = b.album_name ? omitLeadingArticle(b.album_name.toLowerCase()) : undefined
      const trackA = a.album_track_number ? a.album_track_number : undefined
      const trackB = b.album_track_number ? b.album_track_number : undefined

      if (artistA !== undefined && artistB !== undefined) return artistA.localeCompare(artistB)
      if (yearA !== undefined && yearB !== undefined) return yearA.toString().localeCompare(yearB.toString())
      if (albumA !== undefined && albumB !== undefined) return albumA.localeCompare(albumB)
      if (trackA !== undefined && trackB !== undefined) return trackA.toString().localeCompare(trackB.toString())

      if (artistA !== undefined) return -1
      if (artistB !== undefined) return 1
      if (yearA !== undefined) return -1
      if (yearB !== undefined) return 1
      if (albumA !== undefined) return -1
      if (albumB !== undefined) return 1
      if (trackA !== undefined) return -1
      if (trackB !== undefined) return 1

      return AID.localeCompare(BID)
    }) as DTASelfReturnType<T>
  } else if (sortBy === 'ID') {
    return songs.sort((a, b) => {
      const AID = a.id.toLowerCase()
      const BID = b.id.toLowerCase()
      return AID.localeCompare(BID)
    }) as DTASelfReturnType<T>
  } else if (sortBy === 'Song ID') {
    // Sorting by Song ID
    return songs.sort((a, b) => {
      const AID = a.id.toLowerCase()
      const BID = b.id.toLowerCase()
      const ASID = a.song_id ? (typeof a.song_id === 'number' ? a.song_id.toString().toLowerCase() : a.song_id.toLowerCase()) : undefined
      const BSID = b.song_id ? (typeof b.song_id === 'number' ? b.song_id.toString().toLowerCase() : b.song_id.toLowerCase()) : undefined

      if (ASID !== undefined && BSID !== undefined) return ASID.localeCompare(BSID)

      if (ASID !== undefined) return -1
      if (BSID !== undefined) return 1
      return AID.localeCompare(BID)
    }) as DTASelfReturnType<T>
  }
  return songs
}
