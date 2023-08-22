import { DTADocument } from '../@types/DTADocument'
import { filterDTA } from './filterDTA'
import { sortDTA } from './sortDTA'

export interface ArtistHeaderAlbums {
    name: string
    artist: string
    songs: DTADocument[]
}

export interface ArtistHeaderOptions {
    minLengthToAlbum?: number
}

export interface ArtistHeaderReturnObject {
    allAlbumNames: string[]
    albums: ArtistHeaderAlbums[]
    singles: DTADocument[]
}

const genArtistHeader = (
    songs: DTADocument[],
    artist: string,
    options?: ArtistHeaderOptions
): ArtistHeaderReturnObject => {
    const minLengthToAlbum =
        options?.minLengthToAlbum !== undefined ? options.minLengthToAlbum : 3

    const allFromArtistUnsorted = filterDTA(songs, 'artist', {
        filterSelectorValues: artist.toLowerCase(),
    })

    const albums: ArtistHeaderAlbums[] = []

    const singlesUnsorted: DTADocument[] = []

    const artistSongs = sortDTA(allFromArtistUnsorted, 'artist_set')

    const allAlbumNames = Array.from(
        new Set(
            artistSongs
                .map((song) => {
                    if (
                        song.content.artist.toLowerCase() ===
                            artist.toLowerCase() &&
                        song.content.album_name !== undefined
                    )
                        return song.content.album_name
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
            artist,
            songs: allSongsFromTheAlbum,
        })
        return
    })

    const singles = sortDTA(singlesUnsorted, 'name')

    return { allAlbumNames, albums, singles }
}

export default genArtistHeader
