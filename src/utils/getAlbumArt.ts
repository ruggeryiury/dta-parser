import { DTADocument } from "../@types/DTADocument"

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
            images: []
            name: string
            release_date: string
            release_date_precision: 'day'
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

export const getAlbumArt = async (dta: DTADocument): Promise<SpotifyAlbumSearchDocument | undefined> => {
    if (!dta.content.album_name) return undefined

    const query = `${dta.content.artist.replaceAll('&', 'and')} ${dta.content.album_name.replaceAll('&', 'and')}`

    const apiEndpoint = 'https://api.spotify.com/v1'
    const authEndpoint = 'https://accounts.spotify.com/api/token'
    const clientId = '3f974573800a4ff5b325de9795b8e603'
    const clientSecret = 'ff188d2860ff44baa57acc79c121a3b9'

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
        .then((res) => res.json() as Promise<SpotifyAuthTokenRes>)
        .then((json) => json.access_token)
        .catch((err: Error) => {
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
            .then((res) => res.json() as Promise<SpotifyAlbumSearchDocument>)
            .catch((err: Error) => {
                return undefined
            })

        if (!response || response.albums.items.length === 0) {
            return undefined
        }
        else return response
    }
    else return undefined
}