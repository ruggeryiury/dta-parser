import { DTADocument } from '../@types/DTADocument'
import { GetDataAlbumArtOptions } from '../exports'

export interface SpotifyAuthTokenRes {
    access_token: string
    token_type: string
    expires_in: number
}

export interface SpotifyAlbumSearchDocument {
    albums: {
        href: string
        items: {
            album_type: string
            artists: {
                height: number
                url: string
                width: number
            }[]
            available_markets: string[]
            external_urls: {
                spotify: string
            }
            href: string
            id: string
            images: {
                height: number
                url: string
                width: number
            }[]
            name: string
            release_date: string
            release_date_precision: string
            total_tracks: number
            type: string
            uri: string
        }[]
        limit: number
        next: string
        offset: number
        previous: null
        total: number
    }
}

/**
 * Fetches a song's album art URL through Spotify API.
 * - - - -
 * @param {DTADocument} dta The parsed song you want to parse the album's art to.
 * @param {GetDataAlbumArtOptions} options Customize options for the album art fetching process.
 * @returns {Promise<string | undefined>} The URL of the album's art as `string`, `undefined` if no album art available.
 */
export const getAlbumArt = async (
    dta: DTADocument,
    options: GetDataAlbumArtOptions
): Promise<string | undefined> => {
    if (!dta.content.album_name) return undefined

    const query = `${dta.content.artist.replaceAll(
        '&',
        'and'
    )} ${dta.content.album_name.replaceAll('&', 'and')}`

    const apiEndpoint = 'https://api.spotify.com/v1'
    const authEndpoint = 'https://accounts.spotify.com/api/token'
    const clientId = '6cfb201730dd4d0093eef69a96623fe9'
    const clientSecret = '796f9f01577f4104891dbda684d25463'

    const queryParams = `?q=${encodeURIComponent(query)}&type=album&limit=1`

    const searchUrl = `${apiEndpoint}/search${queryParams}`
    const authString = `${clientId}:${clientSecret}`

    const authorization = Buffer.from(authString).toString('base64')
    const authToken = await fetch(authEndpoint, {
        method: 'post',
        body: 'grant_type=client_credentials',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${authorization}`,
        },
    })
        .then<SpotifyAuthTokenRes>((res) => res.json())
        .then((json) => json.access_token)
        .catch(() => {
            return undefined
        })

    if (authToken !== undefined) {
        const response = await fetch(searchUrl, {
            method: 'get',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Bearer ${authToken}`,
            },
        })
            .then<SpotifyAlbumSearchDocument>((res) => res.json())
            .catch(() => {
                return undefined
            })

        if (!response || response.albums.items.length === 0) {
            return undefined
        } else {
            const items = response.albums.items[0].images.sort((a, b) => {
                if (a.width < b.width) return 1
                if (a.width > b.width) return -1
                return 0
            })

            if (options?.size === 'large') return items[0].url
            else if (options?.size === 'small') return items[2].url
            else return items[1].url
        }
    } else return undefined
}
