import { DTAFile } from '../@types/DTAFile'
import { filterDTA } from './filterDTA'
import { sortDTA } from './sortDTA'

export interface ArtistHeaderAlbums {
  /**
   * The name of the album.
   */
  name: string
  /**
   * All songs found from the album, sorted by track number.
   */
  songs: DTAFile[]
}

export interface ArtistHeaderOptions {
  /**
   * The amount of tracks available from an album to be placed separately. Default is `3`.
   */
  minLengthToAlbum?: number
}

export interface ArtistHeaderReturnObject {
  /**
   * The name of the artist.
   */
  artist: string
  /**
   * An array with all album names from the artist.
   */
  allAlbumNames: string[]
  /**
   * An array with objects representing every album that met the minimum length of songs
   * needed to be separated from singles.
   */
  albums: ArtistHeaderAlbums[]
  /**
   * An array with parsed songs from albums that didn't meet the minimum length of songs
   * needed to be separated, all sorted by track name.
   */
  singles: DTAFile[]
}

/**
 * Generates a detailed header about the artist.
 *
 * This will separate single songs from albums that meets the minimum length
 * of songs (customized on the `options.minLengthToAlbum` object argument). All songs
 * from an album will be sorted by the track number, and all singles will be sorted
 * by the name of the song.
 * - - - -
 * @param {DTAFile[]} songs An array with parsed songs.
 * @param {string} artist The artist/band name you want to generate the header from.
 * @param {ArtistHeaderOptions} options `OPTIONAL` Options for the header generator
 * @returns {ArtistHeaderReturnObject} An object that contains all album names from the artist, their
 * songs, and singles.
 */
export const genArtistHeader = (songs: DTAFile[], artist: string, options?: ArtistHeaderOptions): ArtistHeaderReturnObject => {
  const minLengthToAlbum = options?.minLengthToAlbum !== undefined ? options.minLengthToAlbum : 3

  const allFromArtistUnsorted = filterDTA(songs, 'artist', {
    filterSelectorValues: artist.toLowerCase(),
  })

  const albums: ArtistHeaderAlbums[] = []

  const singlesUnsorted: DTAFile[] = []

  const artistSongs = sortDTA(allFromArtistUnsorted, 'artist_set')

  const allAlbumNames = Array.from(
    new Set(
      artistSongs
        .map((song) => {
          if (song.content.artist.toLowerCase() === artist.toLowerCase() && song.content.album_name !== undefined) return song.content.album_name
          return ''
        })
        .filter((valid) => valid)
    )
  )

  allAlbumNames.forEach((album_name) => {
    const allSongsFromTheAlbum = filterDTA(artistSongs, 'album_name', {
      filterSelectorValues: [
        {
          artist,
          album_name,
        },
      ],
    })

    if (allSongsFromTheAlbum.length < minLengthToAlbum) {
      allSongsFromTheAlbum.forEach((song) => singlesUnsorted.push(song))
      return
    }

    albums.push({
      name: album_name,
      songs: allSongsFromTheAlbum,
    })
    return
  })

  const singles = sortDTA(singlesUnsorted, 'name')

  return { artist, allAlbumNames, albums, singles }
}
