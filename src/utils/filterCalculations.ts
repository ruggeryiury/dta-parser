import {
  type DTAFile,
  type DTAFileWithIndex,
  type InstrRankingNumbers,
  type InstrumentDifficultyTypes,
  localeObject,
  sortDTA,
} from '../core.js'
import { rankCalculator } from './rankCalculations.js'
import { formatStringFromDTA, omitLeadingArticle } from './stringProcessing.js'

export interface BasicSongFilterOptions {
  /**
   * An unique ID of the filter option.
   */
  id: string
  /**
   * The name of the filter option.
   */
  name: string
}

export interface FilteredSongsObject<T> extends BasicSongFilterOptions {
  /**
   * An array with the contents of the given filter option.
   */
  songs: T[]
}

export interface ArtistFilteredSongsObject<T> extends BasicSongFilterOptions {
  /**
   * An array with the contents of the given filter option.
   */
  albums: T[]
}

export interface SongsFilteredByTitleObject {
  /**
   * The sorting type.
   */
  sortedBy: 'title'
  /**
   * An array with headers from the provided sorting type.
   */
  headers: FilteredSongsObject<number>[]
}

export interface SongsFilteredByGenreObject {
  /**
   * The sorting type.
   */
  sortedBy: 'genre'
  /**
   * An array with headers from the provided sorting type.
   */
  headers: FilteredSongsObject<number>[]
}

export interface SongsFilteredBySongDifficultyObject {
  /**
   * The sorting type.
   */
  sortedBy: 'songdifficulty'
  /**
   * An array with headers from the provided sorting type.
   */
  headers: FilteredSongsObject<number>[]
}

export interface SongsFilteredByArtistObject {
  /**
   * The sorting type.
   */
  sortedBy: 'artist'
  /**
   * An array with headers from the provided sorting type.
   */
  headers: ArtistFilteredSongsObject<FilteredSongsObject<number>>[]
}

export interface SongsFilteredByAuthorObject {
  /**
   * The sorting type.
   */
  sortedBy: 'author'
  /**
   * An array with headers from the provided sorting type.
   */
  headers: FilteredSongsObject<number>[]
}

export const dtaFilterCalculator = {
  byTitle(songs: DTAFileWithIndex[]): SongsFilteredByTitleObject {
    const headers: FilteredSongsObject<number>[] = []

    const localeNames = Object.keys(
      localeObject.name
    ) as (keyof (typeof localeObject)['name'])[]

    for (const key of localeNames) {
      const newHeader = {
        id: localeObject.name[key],
        name: key,
        songs: [],
      }
      headers.push(newHeader)
    }

    const sortedSongs = sortDTA(songs, 'Song Title') as DTAFileWithIndex[]

    for (const song of sortedSongs) {
      const name = formatStringFromDTA(song, '{{title.omit}}', 'id')
      const char = name
        .slice(0, 1)
        .toUpperCase() as (typeof localeNames)[number]
      const charIndex = localeNames.includes(char)
        ? localeNames.indexOf(char)
        : 0
      const { songs: songlist } = headers[charIndex]
      songlist.push(song.index)
    }
    return {
      sortedBy: 'title',
      headers: headers.filter((song) => song.songs.length > 0),
    }
  },

  byGenre(songs: DTAFileWithIndex[]): SongsFilteredByGenreObject {
    const headers: FilteredSongsObject<number>[] = []

    const localeGenres = Object.keys(
      localeObject.genre
    ) as (keyof (typeof localeObject)['genre'])[]

    for (const key of localeGenres) {
      const newHeader = {
        id: key,
        name: localeObject.genre[key],
        songs: [],
      }
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
      headers: headers.filter((song) => song.songs.length > 0),
    }
  },

  bySongDifficulty(
    songs: DTAFileWithIndex[],
    instrument: InstrumentDifficultyTypes
  ): SongsFilteredBySongDifficultyObject {
    const headers: FilteredSongsObject<number>[] = []

    const localeRank = [0, 1, 2, 3, 4, 5, 6, -1] as InstrRankingNumbers[]

    for (const key of localeRank) {
      const newHeader = {
        id: key.toString(),
        name: localeObject.rank.name[key],
        songs: [],
      }
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
      headers: headers.filter((song) => song.songs.length > 0),
    }
  },

  byArtist(
    songs: DTAFileWithIndex[],
    albumQuantityThreshold: number
  ): SongsFilteredByArtistObject {
    const headers: ArtistFilteredSongsObject<FilteredSongsObject<number>>[] = []

    const sortedSongs = sortDTA(songs, 'Song Title') as DTAFileWithIndex[]

    const allArtists = Array.from(
      new Set(sortedSongs.map((song) => song.artist))
    ).sort((a, b) => {
      if (
        formatStringFromDTA(null, omitLeadingArticle(a), 'id') >
        formatStringFromDTA(null, omitLeadingArticle(b), 'id')
      )
        return 1
      else if (
        formatStringFromDTA(null, omitLeadingArticle(a), 'id') <
        formatStringFromDTA(null, omitLeadingArticle(b), 'id')
      )
        return -1
      return 0
    })

    for (const artist of allArtists) {
      headers.push({
        id: formatStringFromDTA(null, omitLeadingArticle(artist), 'id'),
        name: artist,
        albums: [],
      })
    }

    for (const artist of headers) {
      const allArtistAlbums = Array.from(
        new Set(
          sortedSongs
            .filter(
              (song) =>
                formatStringFromDTA(song, '{{artist.omit}}', 'id') === artist.id
            )
            .map((song) => song.album_name)
        )
      )

      const songsWithAlbum: FilteredSongsObject<number>[] = []
      const WOAlbumProcessed: DTAFileWithIndex[] = []
      const WithAlbumProcessed: FilteredSongsObject<DTAFileWithIndex>[] = []

      for (const album of allArtistAlbums) {
        const trackFromAlbum = sortedSongs.filter((song) => {
          if (
            song.artist.toLowerCase() === artist.name.toLowerCase() &&
            song.album_name?.toLowerCase() === album?.toLowerCase()
          )
            return true
          return false
        })

        if (trackFromAlbum.length >= albumQuantityThreshold) {
          WithAlbumProcessed.push({
            id: album
              ? formatStringFromDTA(null, omitLeadingArticle(album), 'id')
              : 'noalbum',
            name: album ?? 'No Album',
            songs: trackFromAlbum.map((track) => track),
          })
        } else WOAlbumProcessed.push(...trackFromAlbum.map((track) => track))
      }
      if (WOAlbumProcessed.length > 0)
        artist.albums.push({
          id: 'other',
          name: 'Other Songs',
          songs: WOAlbumProcessed.sort((a, b) => {
            if (
              omitLeadingArticle(a.name).toLowerCase() >
              omitLeadingArticle(b.name).toLowerCase()
            )
              return 1
            else if (
              omitLeadingArticle(a.name).toLowerCase() <
              omitLeadingArticle(b.name).toLowerCase()
            )
              return -1
            return 0
          }).map((song) => song.index),
        })

      for (const s of WithAlbumProcessed) {
        console.log(s.songs.map((ss) => ss.album_name))
        songsWithAlbum.push({
          id: s.id,
          name: s.name,
          songs: s.songs
            .sort((a, b) => {
              if (
                a.album_name &&
                b.album_name &&
                omitLeadingArticle(a.album_name).toLowerCase() >
                  omitLeadingArticle(b.album_name).toLowerCase()
              )
                return 1
              else if (
                a.album_name &&
                b.album_name &&
                omitLeadingArticle(a.album_name).toLowerCase() < a.album_name &&
                b.album_name &&
                omitLeadingArticle(b.album_name).toLowerCase()
              )
                return -1
              return 0
            })
            .map((ss) => ss.index),
        })
      }

      artist.albums.push(
        ...songsWithAlbum.sort((a, b) => {
          if (
            omitLeadingArticle(a.name).toLowerCase() >
            omitLeadingArticle(b.name).toLowerCase()
          )
            return 1
          else if (
            omitLeadingArticle(a.name).toLowerCase() <
            omitLeadingArticle(b.name).toLowerCase()
          )
            return -1
          return 0
        })
      )
    }

    return {
      sortedBy: 'artist',
      headers,
    }
  },

  byAuthor(songs: DTAFileWithIndex[]): SongsFilteredByAuthorObject {
    const headers: FilteredSongsObject<number>[] = []

    const allAuthors = Array.from(
      new Set(songs.map((song) => song.author ?? 'Unknown Charter'))
    )

    for (const author of allAuthors) {
      const newHeader = {
        id: formatStringFromDTA(null, author, 'id'),
        name: author,
        songs: [],
      }
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
        .filter((song) => song.songs.length > 0)
        .sort((a, b) => {
          if (a.id > b.id) return 1
          else if (a.id < b.id) return -1
          return 0
        }),
    }
  },
}
