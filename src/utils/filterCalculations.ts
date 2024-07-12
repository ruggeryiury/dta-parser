import {
  type DTAFile,
  type DTAFileWithIndex,
  type InstrRankingNumbers,
  type InstrumentDifficultyTypes,
  localeObject,
  type SongFilterSortingTypes,
  sortDTA,
} from '../core.js'
import { rankCalculator } from './rankCalculations.js'
import {
  formatStringFromDTA as formatstr,
  omitLeadingArticle as omit,
} from './stringProcessing.js'

export interface SongFilterHeaderObject {
  /**
   * An unique ID of the filter option.
   */
  id: string
  /**
   * The name of the filter option.
   */
  name: string
  /**
   * An array with indexes that points to actual songs from the original array of songs.
   */
  songs: number[]
  /**
   * The quantity of songs of the filter option.
   */
  count: number
}

export interface SongFilteringResultsObject {
  /**
   * The sorting type.
   */
  sortedBy: SongFilterSortingTypes
  /**
   * An array with headers from the provided sorting type.
   */
  headers: SongFilterHeaderObject[]
}

export interface SongsFilteredByTitleObject extends SongFilteringResultsObject {
  sortedBy: 'title'
}

export interface SongsFilteredByGenreObject extends SongFilteringResultsObject {
  sortedBy: 'genre'
}

export interface SongsFilteredBySongDifficultyObject
  extends SongFilteringResultsObject {
  sortedBy: 'songdifficulty'
}

export interface SongsFilteredByAuthorObject
  extends SongFilteringResultsObject {
  sortedBy: 'author'
}

export interface ArtistFilterHeaderObject extends SongFilterHeaderObject {
  /**
   * An array with the contents of the given filter option.
   */
  albums: SongFilterHeaderObject[]
}

export interface SongsFilteredByArtistObject
  extends SongFilteringResultsObject {
  sortedBy: 'artist'
  headers: ArtistFilterHeaderObject[]
}

export const filterSongsByTitle = (
  songs: DTAFileWithIndex[]
): SongsFilteredByTitleObject => {
  const headers: SongFilterHeaderObject[] = []

  const localeNames = Object.keys(
    localeObject.name
  ) as (keyof (typeof localeObject)['name'])[]

  for (const key of localeNames) {
    const newHeader = {
      id: localeObject.name[key],
      name: key,
      songs: [],
      count: 0,
    } as SongFilterHeaderObject
    headers.push(newHeader)
  }

  const sortedSongs = sortDTA(songs, 'Song Title') as DTAFileWithIndex[]

  for (const song of sortedSongs) {
    const name = formatstr(song, '{{title.omit}}', 'id')
    const char = name.slice(0, 1).toUpperCase() as (typeof localeNames)[number]
    const charIndex = localeNames.includes(char) ? localeNames.indexOf(char) : 0
    const { songs: songlist } = headers[charIndex]
    songlist.push(song.index)
  }

  return {
    sortedBy: 'title',
    headers: headers
      .map((header) => ({ ...header, count: header.songs.length }))
      .filter((song) => song.songs.length > 0),
  }
}

export const filterSongsByGenre = (
  songs: DTAFileWithIndex[]
): SongsFilteredByGenreObject => {
  const headers: SongFilterHeaderObject[] = []

  const localeGenres = Object.keys(
    localeObject.genre
  ) as (keyof (typeof localeObject)['genre'])[]

  for (const key of localeGenres) {
    const newHeader = {
      id: key,
      name: localeObject.genre[key],
      songs: [],
      count: 0,
    } as SongFilterHeaderObject
    headers.push(newHeader)
  }

  const sortedSongs = sortDTA(songs, 'Song Title') as DTAFileWithIndex[]

  for (const song of sortedSongs) {
    const genreIndex = localeGenres.indexOf(song.genre)
    const { songs: songlist } = headers[genreIndex]
    songlist.push(song.index)
  }
  return {
    sortedBy: 'genre',
    headers: headers
      .map((header) => ({ ...header, count: header.songs.length }))
      .filter((song) => song.songs.length > 0),
  }
}

export const filterSongsBySongDifficulty = (
  songs: DTAFileWithIndex[],
  instrument: InstrumentDifficultyTypes
): SongsFilteredBySongDifficultyObject => {
  const headers: SongFilterHeaderObject[] = []

  const localeRank = [0, 1, 2, 3, 4, 5, 6, -1] as InstrRankingNumbers[]

  for (const key of localeRank) {
    const newHeader = {
      id: `rank_${instrument}_${localeObject.rank.name[key].toLowerCase()}`,
      name: localeObject.rank.name[key],
      songs: [],
      count: 0,
    } as SongFilterHeaderObject
    headers.push(newHeader)
  }

  const sortedSongs = sortDTA(songs, 'Song Title') as DTAFileWithIndex[]

  for (const song of sortedSongs) {
    const diffKey = `rank_${instrument}` as keyof DTAFile
    const diff = song[diffKey] as number | undefined
    const rank = rankCalculator(instrument, diff)
    const index = localeRank.indexOf(rank)
    const { songs: songlist } = headers[index]
    songlist.push(song.index)
  }
  return {
    sortedBy: 'songdifficulty',
    headers: headers
      .map((header) => ({ ...header, count: header.songs.length }))
      .filter((song) => song.songs.length > 0),
  }
}

export const filterSongsByAuthor = (
  songs: DTAFileWithIndex[]
): SongsFilteredByAuthorObject => {
  const headers: SongFilterHeaderObject[] = []

  const allAuthors = Array.from(
    new Set(songs.map((song) => song.author ?? 'Unknown Charter'))
  )

  for (const author of allAuthors) {
    const newHeader = {
      id: formatstr(null, author, 'id'),
      name: author,
      songs: [],
      count: 0,
    } as SongFilterHeaderObject
    headers.push(newHeader)
  }

  const sortedSongs = sortDTA(songs, 'Song Title') as DTAFileWithIndex[]

  for (const song of sortedSongs) {
    const authorName = song.author ?? 'Unknown Charter'
    const authorIndex = allAuthors.includes(authorName)
      ? allAuthors.indexOf(authorName)
      : 0
    const { songs: songlist } = headers[authorIndex]
    songlist.push(song.index)
  }
  return {
    sortedBy: 'author',
    headers: headers
      .map((header) => ({ ...header, count: header.songs.length }))
      .filter((song) => song.songs.length > 0)
      .sort((a, b) => {
        if (a.id > b.id) return 1
        else if (a.id < b.id) return -1
        return 0
      }),
  }
}

export const filterSongsByArtist = (
  songs: DTAFileWithIndex[],
  albumQuantityThreshold: number
) => {
  // <-- Sortings
  const allArtistSorting = (a: string, b: string): number => {
    if (formatstr(null, omit(a), 'id') > formatstr(null, omit(b), 'id'))
      return 1
    else if (formatstr(null, omit(a), 'id') < formatstr(null, omit(b), 'id'))
      return -1
    return 0
  }

  const tracksFromAlbumSorting = (
    a: DTAFileWithIndex,
    b: DTAFileWithIndex
  ): number => {
    if (
      a.album_track_number &&
      b.album_track_number &&
      a.album_track_number > b.album_track_number
    )
      return 1
    else if (
      a.album_track_number &&
      b.album_track_number &&
      a.album_track_number < b.album_track_number
    )
      return -1
    return 0
  }

  // <-- Function
  const headers: ArtistFilterHeaderObject[] = []
  const sortedSongs = sortDTA(songs, 'Song Title') as DTAFileWithIndex[]
  const allArtists = Array.from(
    new Set(sortedSongs.map((song) => song.artist))
  ).sort(allArtistSorting)

  for (const artist of allArtists) {
    headers.push({
      id: formatstr(null, artist, 'id'),
      name: artist,
      songs: [],
      albums: [],
      count: 0,
    })
  }

  for (const header of headers) {
    let noAlbumSpecifiedCount = 0
    const allSongsFromArtist = sortedSongs.filter(
      (song) => formatstr(song, '{{artist}}', 'id') === header.id
    )
    header.count = allSongsFromArtist.length
    const allArtistAlbums = Array.from(
      new Set(allSongsFromArtist.map((song) => song.album_name))
    )

    for (const album of allArtistAlbums) {
      const allTracksFromAlbum = allSongsFromArtist.filter(
        (song) => song.album_name?.toLowerCase() === album?.toLowerCase()
      )
      if (allTracksFromAlbum.length >= albumQuantityThreshold) {
        header.albums.push({
          id: album
            ? `album_${header.id}_${formatstr(null, album, 'id')}`
            : `album_${header.id}_${formatstr(null, 'No Album Specified', 'id')}_${noAlbumSpecifiedCount.toString()}`,
          name: album ?? 'No Album Specified',
          songs: allTracksFromAlbum
            .map((track) => track)
            .sort(tracksFromAlbumSorting)
            .map((track) => track.index),
          count: allTracksFromAlbum.length,
        })
        if (!album) noAlbumSpecifiedCount++
      } else
        header.songs.push(
          ...(
            sortDTA(allTracksFromAlbum, 'Song Title') as DTAFileWithIndex[]
          ).map((song) => song.index)
        )
    }
  }

  return {
    sortedBy: 'artist',
    headers,
  }
}
