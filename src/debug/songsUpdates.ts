import { depackDTA } from '../core'
import fs from 'fs'
import path from 'path'

type SongsUpdatesObject = {
    [key: string]: SongsUpdatesKeys
}

interface SongsUpdatesKeys {
    song_length?: number
    format?: number
    version?: number
    game_origin?: string
    vocal_tonic_note?: number
    song_tonality?: number
    song_id?: number
    rating?: number
    year_released?: number
    year_recorded?: number
    album_name?: string
    album_track_number?: number
    album_art?: boolean
    encoding?: string
    alternate_path?: boolean
    extra_authoring?: string[]
    solo?: string[]
    name?: string
    artist?: string
    vocal_parts?: number
    hopo_threshold?: number
    vols?: number[]
    preview?: [number, number]
    genre?: string
}
/**
 * Generates a JSON file from Rock Band 3 Deluxe's `songs_updates.dta` file.
 *
 * `WARNING`: This function won't work on browser environments.
 * @returns {SongsUpdatesObject} An object with parsed songs updates.
 */
const generateJSONfromUpdates = (): SongsUpdatesObject => {
    const returnObject: SongsUpdatesObject = {}
    let namesIndex: number

    const updateFileContents = fs.readFileSync(path.resolve(__dirname, '../database/songs_updates.dta'), { encoding: 'utf-8' })

    const eachSongRegistry = depackDTA(updateFileContents)

    eachSongRegistry.forEach((song) => {
        const [, songnameRaw, ...content] = song.split('(')
        const songname = songnameRaw.trim()
        if (!returnObject[songname]) returnObject[songname] = {}
        const values = content.map((value) => value.trim())
        const names = song.match(/"(.*?)"/g) as RegExpMatchArray

        namesIndex = 0

        let processing = ''
        values.forEach((single) => {
            if (!processing) {
                const [keyName, ...keyValue] = single.split(' ')
                const processedValue = keyValue.join(' ').replaceAll(')', '').trim()

                if (keyName === 'name') {
                    returnObject[songname].name = names[namesIndex].replaceAll('"', '')
                    namesIndex++
                } else if (keyName === 'artist') {
                    returnObject[songname].artist = names[namesIndex].replaceAll('"', '')
                    namesIndex++
                } else if (keyName === 'song_id') returnObject[songname].song_id = Number(processedValue)
                else if (keyName === 'vocal_parts') returnObject[songname].vocal_parts = Number(processedValue)
                else if (keyName === 'vols') {
                    processing = 'vols'
                    return
                } else if (keyName === 'hopo_threshold') returnObject[songname].hopo_threshold = Number(processedValue)
                else if (keyName === 'preview') {
                    const previews = processedValue.split(' ').map((values) => Number(values))
                    returnObject[songname].preview = previews as [number, number]
                } else if (keyName === 'song_length') returnObject[songname].song_length = Number(processedValue)
                else if (keyName === 'solo') {
                    processing = 'solo'
                    return
                } else if (keyName === 'format') returnObject[songname].format = Number(processedValue)
                else if (keyName === 'version') returnObject[songname].version = Number(processedValue)
                else if (keyName === 'game_origin') returnObject[songname].game_origin = processedValue
                else if (keyName === 'encoding') returnObject[songname].encoding = processedValue
                else if (keyName === 'rating') returnObject[songname].rating = Number(processedValue)
                else if (keyName === 'genre') returnObject[songname].genre = processedValue
                else if (keyName === 'year_released') returnObject[songname].year_released = Number(processedValue)
                else if (keyName === 'year_recorded') returnObject[songname].year_recorded = Number(processedValue)
                else if (keyName === 'album_art') {
                    if (processedValue.toLowerCase() === 'true') returnObject[songname].album_art = true
                    else returnObject[songname].album_art = false
                } else if (keyName === 'album_name') {
                    returnObject[songname].album_name = names[namesIndex].replaceAll('"', '')
                    namesIndex++
                } else if (keyName === 'album_track_number') returnObject[songname].album_track_number = Number(processedValue)
                else if (keyName === 'vocal_tonic_note') returnObject[songname].vocal_tonic_note = Number(processedValue)
                else if (keyName === 'song_tonality') returnObject[songname].song_tonality = Number(processedValue)
                else if (keyName === 'alternate_path') {
                    if (processedValue.toLowerCase() === 'true') returnObject[songname].alternate_path = true
                    else returnObject[songname].alternate_path = false
                } else if (keyName === 'extra_authoring') {
                    const extras = keyValue.map((value) => value.replaceAll(')', ''))
                    if (!returnObject[songname].extra_authoring) returnObject[songname].extra_authoring = []
                    extras.forEach((extra) => returnObject[songname].extra_authoring?.push(extra.replaceAll(')', '')))
                }
            } else {
                if (processing === 'vols') {
                    const flags = single
                        .replaceAll(')', '')
                        .split(' ')
                        .map((value) => Number(value))
                    returnObject[songname].vols = flags
                }
                if (processing === 'solo') {
                    const flags = single.replaceAll(')', '').split(' ')
                    returnObject[songname].solo = flags
                }
                processing = ''
            }
        })
    })

    const allSongsNames = Object.keys(returnObject)

    allSongsNames.forEach((song) => {
        if (returnObject[song].extra_authoring) {
            const newExtras = new Set(returnObject[song].extra_authoring)
            returnObject[song].extra_authoring = Array.from(newExtras)
        }
        if (returnObject[song].vocal_tonic_note && !returnObject[song].song_tonality) returnObject[song].song_tonality = 0
    })

    return returnObject
}

/**
 * Regnerates the songs updates `.dta` file from Rock Band 3 Deluxe.
 *
 * `WARNING`: This function won't work on browser environments.
 */
export const regenerateSongsUpdates = (): void => {
    let newSongsUpdates = ''
    const allSongsUpdates = generateJSONfromUpdates()

    fs.writeFileSync(path.resolve(__dirname, '../database/new_updates.json'), JSON.stringify(allSongsUpdates, null, 4), { encoding: 'utf-8' })

    const allSongsNames = Object.keys(allSongsUpdates).sort((a, b) => {
        if (a.toLowerCase() > b.toLowerCase()) return 1
        else if (a.toLowerCase() < b.toLowerCase()) return -1
        return 0
    })

    allSongsNames.forEach((songname) => {
        let placedSong = false
        const allKeys = Object.keys(allSongsUpdates[songname])

        const desiredSongKeys: ('vocal_parts' | 'vols' | 'hopo_threshold')[] = ['vocal_parts', 'vols', 'hopo_threshold']
        const filteredObject = Object.fromEntries(
            Object.entries(allSongsUpdates[songname]).filter(([key]) => desiredSongKeys.includes(key as (typeof desiredSongKeys)[number]))
        ) as Pick<SongsUpdatesKeys, (typeof desiredSongKeys)[number]>

        newSongsUpdates += `(${songname}`

        allKeys.forEach((keys) => {
            if (keys === 'vocal_parts' || keys === 'vols' || keys === 'hopo_threshold') {
                if (!placedSong) {
                    const songLength = Object.keys(filteredObject).length
                    newSongsUpdates += `\n\t(song${songLength > 1 ? '' : ' '}`
                    if (filteredObject.vocal_parts !== undefined) {
                        newSongsUpdates += `${songLength > 1 ? '\n\t\t' : ''}(vocal_parts ${filteredObject.vocal_parts})`
                    }
                    if (filteredObject.vols !== undefined) {
                        newSongsUpdates += `${songLength > 1 ? '\n\t\t' : ''}(vols ${filteredObject.vols.map((vol) => vol.toFixed(1)).join(' ')})`
                    }
                    if (filteredObject.hopo_threshold !== undefined) {
                        newSongsUpdates += `${songLength > 1 ? '\n\t\t' : ''}(hopo_threshold ${filteredObject.hopo_threshold})`
                    }
                    newSongsUpdates += `)`
                    placedSong = true
                }
            } else if (keys === 'artist' || keys === 'album_name' || keys === 'name') {
                newSongsUpdates += `\n\t(${keys} "${(
                    allSongsUpdates[songname][keys as keyof SongsUpdatesObject[typeof songname]] as string
                ).replaceAll('"', '\\q')}")`
            } else if (keys === 'extra_authoring') {
                newSongsUpdates += `\n\t(${keys} ${(allSongsUpdates[songname][keys as keyof SongsUpdatesObject[typeof songname]] as []).join(' ')})`
            } else if (keys === 'solo') {
                newSongsUpdates += `\n\t(${keys} (${(allSongsUpdates[songname][keys as keyof SongsUpdatesObject[typeof songname]] as []).join(' ')}))`
            } else if (keys === 'preview') {
                newSongsUpdates += `\n\t(${keys} ${(allSongsUpdates[songname][keys as keyof SongsUpdatesObject[typeof songname]] as []).join(' ')})`
            } else if (keys === 'album_art' || keys === 'alternate_path') {
                newSongsUpdates += `\n\t(${keys} ${
                    (allSongsUpdates[songname][keys as keyof SongsUpdatesObject[typeof songname]] as boolean) ? 'TRUE' : 'FALSE'
                })`
            } else {
                newSongsUpdates += `\n\t(${keys} ${allSongsUpdates[songname][keys as keyof SongsUpdatesObject[typeof songname]] as string})`
            }
        })

        newSongsUpdates += ')\n'
    })

    fs.writeFileSync(path.resolve(__dirname, '../database/new_updates.dta'), newSongsUpdates, { encoding: 'utf-8' })
}
