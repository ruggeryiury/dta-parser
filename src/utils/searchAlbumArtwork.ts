import { DTAFile } from '../core.js'

export interface SpotifyAuthToken {
  /**
   * A valid token to use on the Spotify API.
   */
  access_token: string
  /**
   * The type of the token. Always returns `'Bearer'`.
   */
  token_type: string
  /**
   * The time that the token expires. Always returns `3600`.
   */
  expires_in: number
}

export interface SpotifyAlbumSearchDocument {
  albums: {
    href: string
    items: {
      album_type: string
      artists: {
        external_urls: {
          spotify: string
        }
        href: string
        /** The internal Spotify ID for the artist. */
        id: string
        /** The name of the artist. */
        name: string
        /** The type of the artist. */
        type: string
        uri: string
      }[]
      /** An array with country codes which the album is available. */
      available_markets: string[]
      external_urls: {
        spotify: string
      }
      href: string
      /** The internal Spotify ID for the album. */
      id: string
      /** An array with different image sizes of the album. */
      images: {
        /** The height of the album artwork. */
        height: number
        /** The URL of the album artwork. */
        url: string
        /** The width of the album artwork. */
        width: number
      }[]
      /** The name of the album. */
      name: string
      /** The release date of the album formatted as `YYYY-MM-DD`. */
      release_date: string
      /** The precision of the release date. */
      release_date_precision: string
      /** The amount of tracks from the album. */
      total_tracks: number
      /** The type of the content. Always returns `'album'` */
      type: string
      uri: string
    }[]
    /** The limit of the search query. Always returns `1`. */
    limit: number
    next: string
    offset: number
    previous: null
    /** The total amount of results found. */
    total: number
  }
}

export type SearchAlbumArtworkImageSize = 'small' | 'medium' | 'large'

/**
 * Fetches an album artwork URL using the Spotify API.
 * - - - -
 * @param {DTAFile} song A parsed song that you want to fetch the album artwork URL from.
 * @param {SearchAlbumArtworkImageSize | undefined} imageSize `OPTIONAL` The size of the album artwork. Default is `'large'`.
 * @throws {Error} If the function is unable to encode authorization string to base64 using `btoa()` or using the `Buffer` constructor.
 * @returns {Promise<string | undefined>} The album artwork URL as string. Returns `undefined` if the connection to the API has been refused
 * at any point, if the provided song has no album name, or if no album has been found on the Spotify database.
 */
export const searchAlbumArtwork = async (
  song: DTAFile,
  imageSize: SearchAlbumArtworkImageSize = 'large'
): Promise<string | undefined> => {
  if (!song.album_name) return undefined
  else {
    const query = `${song.artist.replaceAll('&', 'and')} ${song.album_name.replaceAll('&', 'and')}`
    const apiEndpoint = 'https://api.spotify.com/v1'
    const queryParams = `?q=${encodeURIComponent(query)}&type=album&limit=1`
    const searchUrl = `${apiEndpoint}/search${queryParams}`

    const authEndpoint = 'https://accounts.spotify.com/api/token'
    const authString = `6cfb201730dd4d0093eef69a96623fe9:796f9f01577f4104891dbda684d25463`

    const authorization = Buffer.from(authString).toString('base64')

    const authToken = await fetch(authEndpoint, {
      method: 'post',
      body: 'grant_type=client_credentials',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${authorization}`,
      },
    })
      .then<SpotifyAuthToken>((res) => res.json())
      .then((json) => json.access_token)
      .catch(() => undefined)

    if (!authToken) return undefined
    else {
      const response = await fetch(searchUrl, {
        method: 'get',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${authToken}`,
        },
      })
        .then<SpotifyAlbumSearchDocument>((res) => res.json())
        .catch(() => undefined)

      if (!response || response.albums.items.length === 0) {
        return undefined
      } else {
        // console.log(JSON.stringify(response, null, 4))
        const items = response.albums.items[0].images.sort((a, b) => {
          if (a.width < b.width) return 1
          if (a.width > b.width) return -1
          return 0
        })

        if (imageSize === 'large') return items[0].url
        else if (imageSize === 'small') return items[2].url
        else return items[1].url
      }
    }
  }
}
