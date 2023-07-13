import { DTADocument } from '../@types/DTADocument'
import { songsUpdates } from '../locale/songs_updates'

export const applyUpdates = (parsedSongs: DTADocument[]): DTADocument[] => {
    const updatedSongs = parsedSongs.map((song) => {
        const songname = song.content.id
        if (songsUpdates[songname as keyof typeof songsUpdates]) {
            song.content = {
                ...song.content,
                ...songsUpdates[songname as keyof typeof songsUpdates],
            }
        }
        return song
    })

    return updatedSongs
}
