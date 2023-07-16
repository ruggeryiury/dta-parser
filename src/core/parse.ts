import { DTADocument } from '../@types/DTADocument'
import { createDTA } from './create'

/**
 * Parses a .dta file contents into a `DTADocument`.
 * - - - -
 * @param {string} songContent The song contents taken from a .dta file.
 * @returns {DTADocument} A song parsed as a `DTADocument` object.
 */
export const parseDTA = (songContent: string): DTADocument => {
    const operators = {
        gotID: false,
        gotName: false,
        stillName: false,
        gotArtist: false,
        stillArtist: false,
        gotSongname: false,
        tracksStarted: false,
        processedTrack: '',
        processedAudio: '',
        rankStarted: false,
        rankFinished: false,
        soloStarted: false,
        gotAlbumName: false,
        stillAlbumName: false,
    }
    let {
        gotID,
        gotName,
        stillName,
        gotArtist,
        stillArtist,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        gotSongname,
        tracksStarted,
        processedTrack,
        processedAudio,
        rankStarted,
        rankFinished,
        soloStarted,
        gotAlbumName,
        stillAlbumName,
    } = operators
    const parsed = createDTA()
    const split = songContent.split(/[;(]/).map((value) => value.trim())

    split.map((value) => {
        const clean = value.replaceAll("'", '').trim()
        const [key, ...content] = value.split(' ')
        const keyFilter = key.replaceAll("'", '')
        const newValue = content
            .join(' ')
            .replaceAll(')', '')
            .replaceAll("'", '')
            .trim()

        // console.log(key, content)
        // console.log(i, clean)

        if (!gotID) {
            if (clean) {
                parsed.content.id = clean
                gotID = true
                return
            }
            return
        }

        if (keyFilter === 'name' && !gotName) {
            const nameStr = content.join(' ').trim()
            const nameCompletes = nameStr.charAt(nameStr.length - 1) === ')'

            if (nameCompletes) {
                const match = nameStr.match(/"([^"]*)"/)
                if (match && match.length > 1) {
                    const newName = match[1].replaceAll('\\q', '"')
                    parsed.content.name = newName
                    gotName = true
                    return
                }
            }

            stillName = true
            const afterQuote = nameStr.split('"').filter((value) => value)
            if (afterQuote.length === 1)
                parsed.content.name = `${afterQuote.join(' ')} (`
            else parsed.content.name = `${afterQuote.join(' ')}(`
            return
        }

        if (!gotName && stillName) {
            const nameCompletes = value.charAt(value.length - 1) === ')'

            if (nameCompletes) {
                const quoteIndex = value.indexOf('"')

                if (quoteIndex !== -1) {
                    const newName = value.substring(0, quoteIndex)
                    parsed.content.name += newName
                    gotName = true
                    stillName = false
                    return
                }
            }

            parsed.content.name += value + '('
            return
        }

        if (keyFilter === 'artist' && !gotArtist) {
            const nameStr = content.join(' ').trim()
            const nameCompletes = nameStr.charAt(nameStr.length - 1) === ')'

            if (nameCompletes) {
                const match = nameStr.match(/"([^"]*)"/)
                if (match && match.length > 1) {
                    const newName = match[1].replaceAll('\\q', '"')
                    parsed.content.artist = newName
                    gotArtist = true
                    return
                }
            }

            stillArtist = true
            const afterQuote = nameStr.split('"').filter((value) => value)
            if (afterQuote.length === 1)
                parsed.content.artist = `${afterQuote.join(' ')} (`
            else parsed.content.artist = `${afterQuote.join(' ')}(`
            return
        }

        if (!gotArtist && stillArtist) {
            const nameCompletes = value.charAt(value.length - 1) === ')'

            if (nameCompletes) {
                const quoteIndex = value.indexOf('"')

                if (quoteIndex !== -1) {
                    const newName = value.substring(0, quoteIndex)
                    parsed.content.artist += newName
                    gotArtist = true
                    stillArtist = false
                    return
                }
            }
            parsed.content.artist += value + '('
            return
        }

        if (keyFilter === 'master') {
            if (Number(newValue) === 1 || newValue.toLowerCase() === 'true') {
                parsed.content.master = true
                return
            }

            parsed.content.master = false
            return
        }

        if (keyFilter === 'song_id') {
            if (!Number.isNaN(Number(newValue))) {
                parsed.content.song_id = Number(newValue)
                return
            }

            parsed.content.song_id = newValue
            return
        }

        if (keyFilter === 'name' && gotName) {
            gotSongname = true
            const songname = content.join(' ').split('/')[1]
            parsed.content.songname = songname
            return
        }

        if (keyFilter === 'tracks') {
            tracksStarted = true
            return
        }

        if (tracksStarted) {
            if (keyFilter === 'drum') {
                if (content.filter((val) => val !== ')').length > 0) {
                    parsed.content.tracks_count[0] = content.filter(
                        (val) => val !== ')'
                    ).length
                    return
                } else {
                    processedTrack = 'drum'
                    tracksStarted = false
                    return
                }
            } else if (keyFilter === 'bass') {
                if (content.filter((val) => val !== ')').length > 0) {
                    parsed.content.tracks_count[1] = content.filter(
                        (val) => val !== ')'
                    ).length
                    return
                } else {
                    processedTrack = 'bass'
                    tracksStarted = false
                    return
                }
            } else if (keyFilter === 'guitar') {
                if (content.filter((val) => val !== ')').length > 0) {
                    parsed.content.tracks_count[2] = content.filter(
                        (val) => val !== ')'
                    ).length
                    return
                } else {
                    processedTrack = 'guitar'
                    tracksStarted = false
                    return
                }
            } else if (keyFilter === 'vocals') {
                if (content.filter((val) => val !== ')').length > 0) {
                    parsed.content.tracks_count[3] = content.filter(
                        (val) => val !== ')'
                    ).length
                    return
                } else {
                    processedTrack = 'vocals'
                    tracksStarted = false
                    return
                }
            } else if (keyFilter === 'keys') {
                if (content.filter((val) => val !== ')').length > 0) {
                    parsed.content.tracks_count[4] = content.filter(
                        (val) => val !== ')'
                    ).length
                    return
                } else {
                    processedTrack = 'keys'
                    tracksStarted = false
                    return
                }
            } else if (!keyFilter) {
                return
            } else {
                tracksStarted = false
            }
        }
        if (processedTrack) {
            const count = value.replaceAll(')', '').trim().split(' ').length
            if (processedTrack === 'drum')
                parsed.content.tracks_count[0] = count
            else if (processedTrack === 'bass')
                parsed.content.tracks_count[1] = count
            else if (processedTrack === 'guitar')
                parsed.content.tracks_count[2] = count
            else if (processedTrack === 'vocals')
                parsed.content.tracks_count[3] = count
            else if (processedTrack === 'keys')
                parsed.content.tracks_count[4] = count
            tracksStarted = true
            processedTrack = ''
            return
        }

        if (keyFilter === 'crowd_channels') {
            if (parsed.content.tracks_count[6]) {
                parsed.content.tracks_count[6] = content.length
                return
            }

            if (parsed.content.tracks_count.length === 6) {
                parsed.content.tracks_count.push(content.length)
                return
            }
        }

        if (keyFilter === 'pans') {
            processedAudio = 'pans'
            return
        }

        if (keyFilter === 'vols') {
            processedAudio = 'vols'
            return
        }

        if (processedAudio) {
            const numbers = value
                .replaceAll(')', '')
                .trim()
                .split(' ')
                .map((value) => Number(value))
            if (processedAudio === 'pans') parsed.content.pans = numbers
            else if (processedAudio === 'vols') {
                parsed.content.vols = numbers
                const tracksCount = numbers.length

                let diffTracksCount = 0
                parsed.content.tracks_count.forEach((count) => {
                    diffTracksCount += count
                })
                if (tracksCount - diffTracksCount > 2) {
                    parsed.content.tracks_count[5] =
                        tracksCount - diffTracksCount - 2
                } else {
                    parsed.content.tracks_count[5] =
                        tracksCount - diffTracksCount
                }
            } else if (processedAudio === 'real_guitar_tuning')
                parsed.content.real_guitar_tuning =
                    numbers as typeof parsed.content.real_guitar_tuning
            else if (processedAudio === 'real_bass_tuning')
                parsed.content.real_bass_tuning =
                    numbers as typeof parsed.content.real_bass_tuning
            processedAudio = ''
            return
        }

        if (keyFilter === 'vocal_parts') {
            parsed.content.vocal_parts = Number(
                newValue
            ) as typeof parsed.content.vocal_parts
            return
        }

        if (keyFilter === 'mute_volume') {
            if (Number(newValue) === -96) return
            parsed.content.mute_volume = Number(newValue)
            return
        }

        if (keyFilter === 'mute_volume_vocals') {
            if (Number(newValue) === -12) return
            parsed.content.mute_volume_vocals = Number(newValue)
            return
        }

        if (keyFilter === 'hopo_threshold') {
            if (Number(newValue) === 170) return
            parsed.content.hopo_threshold = Number(newValue)
            return
        }

        if (keyFilter === 'song_scroll_speed') {
            if (Number(newValue) === 2300) return
            parsed.content.song_scroll_speed = Number(
                newValue
            ) as typeof parsed.content.song_scroll_speed
            return
        }

        if (keyFilter === 'bank') {
            parsed.content.bank = newValue.replaceAll(
                '"',
                ''
            ) as typeof parsed.content.bank
        }

        if (keyFilter === 'drum_bank') {
            parsed.content.drum_bank =
                newValue as typeof parsed.content.drum_bank
            return
        }

        if (keyFilter === 'anim_tempo') {
            if (newValue === 'kTempoSlow' || Number(newValue) === 16) {
                parsed.content.anim_tempo = 16
                return
            } else if (newValue === 'kTempoMedium' || Number(newValue) === 32) {
                parsed.content.anim_tempo = 32
                return
            } else if (newValue === 'kTempoFast' || Number(newValue) === 64) {
                parsed.content.anim_tempo = 64
                return
            }
        }

        if (keyFilter === 'song_length') {
            parsed.content.song_length = Number(newValue)
            return
        }

        if (keyFilter === 'band_fail_cue') {
            parsed.content.band_fail_cue =
                newValue as typeof parsed.content.band_fail_cue
            return
        }

        if (keyFilter === 'preview') {
            const [previewStart, previewFinish] = newValue.split(' ')
            parsed.content.preview[0] = Number(previewStart)
            parsed.content.preview[1] = Number(previewFinish)
            return
        }

        if (keyFilter === 'rank') {
            rankStarted = true
            return
        }

        if (rankStarted && !rankFinished) {
            if (keyFilter === 'drum') {
                parsed.content.rank_drum = Number(newValue)
                return
            }
            if (keyFilter === 'bass') {
                parsed.content.rank_bass = Number(newValue)
                return
            }
            if (keyFilter === 'guitar') {
                parsed.content.rank_guitar = Number(newValue)
                return
            }
            if (keyFilter === 'keys') {
                parsed.content.rank_keys = Number(newValue)
                return
            }
            if (keyFilter === 'vocals') {
                parsed.content.rank_vocals = Number(newValue)
                return
            }
            if (keyFilter === 'real_bass') {
                parsed.content.rank_real_bass = Number(newValue)
                return
            }
            if (keyFilter === 'real_guitar') {
                parsed.content.rank_real_guitar = Number(newValue)
                return
            }
            if (keyFilter === 'real_keys') {
                parsed.content.rank_real_keys = Number(newValue)
                return
            }
            if (keyFilter === 'band') {
                parsed.content.rank_band = Number(newValue)
                rankFinished = true
                return
            }
        }

        if (keyFilter === 'genre') {
            parsed.content.genre = newValue as typeof parsed.content.genre
            return
        }

        if (keyFilter === 'vocal_gender') {
            parsed.content.vocal_gender =
                newValue as typeof parsed.content.vocal_gender
            return
        }

        if (keyFilter === 'version') {
            if (Number(newValue) === 30) return
            parsed.content.version = Number(newValue)
            return
        }

        if (keyFilter === 'format') {
            if (Number(newValue) === 10) return
            parsed.content.format = Number(newValue)
            return
        }

        if (keyFilter === 'album_art') {
            if (Number(newValue) === 1 || newValue.toLowerCase() === 'true') {
                parsed.content.album_art = true
                return
            }

            parsed.content.album_art = false
            return
        }

        if (keyFilter === 'year_released') {
            parsed.content.year_released = Number(newValue)
            return
        }

        if (keyFilter === 'year_recorded') {
            parsed.content.year_recorded = Number(newValue)
            return
        }

        if (keyFilter === 'rating') {
            parsed.content.rating = Number(
                newValue
            ) as typeof parsed.content.rating
            return
        }

        if (keyFilter === 'sub_genre') {
            parsed.content.sub_genre =
                newValue as typeof parsed.content.sub_genre
            return
        }

        if (keyFilter === 'solo') {
            soloStarted = true
            return
        }

        if (soloStarted) {
            const soloFlags = value
                .replaceAll(')', '')
                .split(' ') as typeof parsed.content.solo
            soloFlags &&
                soloFlags.forEach((flag) => {
                    if (!parsed.content.solo) parsed.content.solo = []
                    parsed.content.solo.push(flag)
                })
            soloStarted = false
            return
        }

        if (keyFilter === 'tuning_offset_cents') {
            if (Number(newValue) === 0) return
            parsed.content.tuning_offset_cents = Number(newValue)
            return
        }

        if (keyFilter === 'guide_pitch_volume') {
            if (Number(newValue) === -3) return
            parsed.content.guide_pitch_volume = Number(newValue)
            return
        }

        if (keyFilter === 'game_origin') {
            parsed.content.game_origin = newValue
            return
        }

        if (keyFilter === 'encoding') {
            parsed.content.encoding = newValue as typeof parsed.content.encoding
            return
        }

        if (keyFilter === 'album_name' && !gotAlbumName) {
            const nameStr = content.join(' ').trim()
            const nameCompletes = nameStr.charAt(nameStr.length - 1) === ')'

            if (nameCompletes) {
                const match = nameStr.match(/"([^"]*)"/)
                if (match && match.length > 1) {
                    const newName = match[1].replaceAll('\\q', '"')
                    parsed.content.album_name = newName
                    gotAlbumName = true
                    return
                }
            }

            stillAlbumName = true
            const afterQuote = nameStr.split('"').filter((value) => value)
            if (afterQuote.length === 1)
                parsed.content.album_name = `${afterQuote.join(' ')} (`
            else parsed.content.album_name = afterQuote.join(' ') + '('
            return
        }

        if (!gotAlbumName && stillAlbumName) {
            const nameCompletes = value.charAt(value.length - 1) === ')'

            if (nameCompletes) {
                const quoteIndex = value.indexOf('"')

                if (quoteIndex !== -1) {
                    const newName = value.substring(0, quoteIndex)
                    parsed.content.album_name += newName
                    gotAlbumName = true
                    stillAlbumName = false
                    return
                }
            }
            parsed.content.album_name += value + ' ('
            return
        }

        if (keyFilter === 'album_track_number') {
            parsed.content.album_track_number = Number(newValue)
            return
        }

        if (keyFilter === 'vocal_tonic_note') {
            parsed.content.vocal_tonic_note = Number(
                newValue
            ) as typeof parsed.content.vocal_tonic_note
            return
        }

        if (keyFilter === 'song_tonality') {
            parsed.content.song_tonality = Number(
                newValue
            ) as typeof parsed.content.song_tonality
            return
        }

        if (keyFilter === 'song_key') {
            parsed.content.song_key = Number(
                newValue
            ) as typeof parsed.content.song_key
            return
        }

        if (keyFilter === 'real_guitar_tuning') {
            processedAudio = 'real_guitar_tuning'
            return
        }

        if (keyFilter === 'real_bass_tuning') {
            processedAudio = 'real_bass_tuning'
            return
        }

        if (value.includes('Song authored by')) {
            const [, , , ...authorArray] = value.split(' ')
            if (!parsed.custom) {
                parsed.custom = {}
            }

            parsed.custom.author = authorArray.join(' ').trim()
            return
        }

        if (value.includes('s)=')) {
            const [, ...langs] = value.split(/[=,]/).filter((value) => value)
            if (!parsed.custom) {
                parsed.custom = {}
            }
            if (!parsed.custom.languages) {
                parsed.custom.languages = []
            }
            langs.forEach((lang) => {
                parsed.custom &&
                    parsed.custom.languages &&
                    parsed.custom.languages.push(lang)
            })
        }

        if (value.includes('Karaoke=')) {
            const proof = Boolean(
                Number(value.split('=')[1].replaceAll(')', '').trim())
            )
            if (!parsed.custom) {
                parsed.custom = {}
            }

            if (proof) {
                parsed.custom.karaoke = proof
            }

            return
        }

        if (value.includes('Multitrack=')) {
            const proof = Boolean(
                Number(value.split('=')[1].replaceAll(')', '').trim())
            )
            if (!parsed.custom) {
                parsed.custom = {}
            }

            if (proof) {
                parsed.custom.karaoke = proof
            }

            return
        }

        if (value.includes('Convert=')) {
            const proof = Boolean(
                Number(value.split('=')[1].replaceAll(')', '').trim())
            )
            if (!parsed.custom) {
                parsed.custom = {}
            }

            if (proof) {
                parsed.custom.convert = proof
            }

            return
        }

        if (value.includes('2xBass=')) {
            const proof = Boolean(
                Number(value.split('=')[1].replaceAll(')', '').trim())
            )
            if (!parsed.custom) {
                parsed.custom = {}
            }

            if (proof) {
                parsed.custom.doubleKick = proof
            }

            return
        }

        if (value.includes('RhythmKeys=')) {
            const proof = Boolean(
                Number(value.split('=')[1].replaceAll(')', '').trim())
            )
            if (!parsed.custom) {
                parsed.custom = {}
            }

            if (proof) {
                parsed.custom.rhythmOnKeys = proof
            }

            return
        }

        if (value.includes('RhythmBass=')) {
            const proof = Boolean(
                Number(value.split('=')[1].replaceAll(')', '').trim())
            )
            if (!parsed.custom) {
                parsed.custom = {}
            }

            if (proof) {
                parsed.custom.rhythmOnBass = proof
            }

            return
        }

        if (value.includes('CATemh=')) {
            const proof = Boolean(
                Number(value.split('=')[1].replaceAll(')', '').trim())
            )
            if (!parsed.custom) {
                parsed.custom = {}
            }

            if (proof) {
                parsed.custom.CATemh = proof
            }

            return
        }

        if (value.includes('ExpertOnly=')) {
            const proof = Boolean(
                Number(value.split('=')[1].replaceAll(')', '').trim())
            )
            if (!parsed.custom) {
                parsed.custom = {}
            }

            if (proof) {
                parsed.custom.expertOnly = proof
            }

            return
        }
    })

    return parsed
}
