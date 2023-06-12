import { DTADocument } from '../@types/DTADocument'
import { generateDTA } from '../utils'

/**
 * Parses a .dta file contents into a `DTADocument`.
 * @param dtaFileContents The .dta file contents.
 * @returns A `DTADocument`, that represents a parsed .dta file into an `Object`.
 * @since v0.1.0
 */
export const parseDTA = (dtaFileContents: string): DTADocument => {
    const dtaContent = generateDTA()

    // Split dta file by lines
    const splitLines = dtaFileContents.split('\r\n')

    // This will be a new, formatted dta file string removing
    // empty lines and parsing the song's id, track title, artist,
    // and album name.

    // eslint-disable-next-line prefer-const
    let newLines: string[] = []

    // A simple operator for the splitLines array map.

    /**
     * `0` *songname*
     *
     * `1` *name*
     *
     * `2` *artist*
     *
     * `3` *album_name*
     *
     * `4` *tracks_count*
     *
     * `5` *pans*
     *
     * `6` *vols*
     *
     * `7` *bank*
     */
    // eslint-disable-next-line prefer-const
    let register = [false, false, false, false, false, false, false, false]
    let operator = ''

    splitLines.map((value) => {
        const newValue = value.trimStart()
        const formattedText = newValue
            .replaceAll('(', '')
            .replaceAll(')', '')
            .replaceAll("'", '')
        // console.log(register, formattedText)

        if (!register[0] && formattedText) {
            register[0] = true
            dtaContent.rawContent.songname = formattedText
            return
        }

        if (operator) {
            if (operator === 'name') {
                register[1] = true
                dtaContent.rawContent.name = newValue.slice(1, -1)
                operator = ''
                return
            }
            if (operator === 'artist') {
                register[2] = true
                dtaContent.rawContent.artist = newValue.slice(1, -1)
                operator = ''
                return
            }
            if (operator === 'album_name') {
                register[3] = true
                dtaContent.rawContent.album_name = newValue.slice(1, -1)
                operator = ''
                return
            }
            if (operator === 'tracks_count') {
                register[4] = true
                formattedText.split(' ').map((value) => {
                    dtaContent.rawContent.tracks_count.push(Number(value))
                })
                operator = ''
                return
            }
            if (operator === 'pans') {
                register[5] = true
                formattedText.split(' ').map((value) => {
                    dtaContent.rawContent.pans.push(Number(value))
                })
                operator = ''
                return
            }
            if (operator === 'vols') {
                register[6] = true
                formattedText.split(' ').map((value) => {
                    dtaContent.rawContent.vols.push(Number(value))
                })
                operator = ''
                return
            }
            if (operator === 'bank') {
                register[7] = true
                dtaContent.rawContent.bank = newValue.slice(1, -1)
                operator = ''
                return
            }
        }

        if (
            (newValue.includes("'name'") && !register[1]) ||
            (newValue.includes("'artist'") && !register[2]) ||
            (newValue.includes("'album_name'") && !register[3]) ||
            (newValue.includes("'tracks_count'") && !register[4]) ||
            (newValue.includes("'pans'") && !register[5]) ||
            (newValue.includes("'vols'") && !register[6]) ||
            (newValue.includes("'bank'") && !register[7])
        ) {
            operator = formattedText
            return
        }

        if (formattedText) {
            newLines.push(formattedText)
        }
    })

    if (dtaContent.rawContent.tracks_count.length <= 6) {
        dtaContent.rawContent.tracks_count.push(0)
    }
    operator = ''
    newLines.map((value) => {
        const splitLines = value.split(' ')

        if (splitLines[0] === 'rank') {
            operator = 'rank'
            return
        }
        if (operator) {
            if (splitLines[0] && splitLines[1]) {
                if (splitLines[0] === 'band') {
                    dtaContent.rawContent.rank_band = Number(splitLines[1])
                    operator = ''
                } else if (splitLines[0] === 'guitar') {
                    dtaContent.rawContent.rank_guitar = Number(splitLines[1])
                } else if (splitLines[0] === 'bass') {
                    dtaContent.rawContent.rank_bass = Number(splitLines[1])
                } else if (splitLines[0] === 'drum') {
                    dtaContent.rawContent.rank_drum = Number(splitLines[1])
                } else if (splitLines[0] === 'keys') {
                    dtaContent.rawContent.rank_keys = Number(splitLines[1])
                } else if (splitLines[0] === 'vocals') {
                    dtaContent.rawContent.rank_vocals = Number(splitLines[1])
                } else if (splitLines[0] === 'real_keys') {
                    dtaContent.rawContent.rank_real_keys = Number(splitLines[1])
                } else if (splitLines[0] === 'real_bass') {
                    dtaContent.rawContent.rank_real_bass = Number(splitLines[1])
                } else if (splitLines[0] === 'real_guitar') {
                    dtaContent.rawContent.rank_real_guitar = Number(
                        splitLines[1]
                    )
                }
            }
        }

        if (splitLines[0] === 'master' && Number(splitLines[1]) > 0) {
            dtaContent.rawContent.master = true
        }
        if (splitLines[0] === 'vocal_parts') {
            dtaContent.rawContent.vocal_parts = Number(splitLines[1])
        }
        if (splitLines[0] === 'mute_volume') {
            dtaContent.rawContent.mute_volume = Number(splitLines[1])
        }
        if (splitLines[0] === 'mute_volume_vocals') {
            dtaContent.rawContent.mute_volume_vocals = Number(splitLines[1])
        }
        if (splitLines[0] === 'hopo_threshold') {
            dtaContent.rawContent.hopo_threshold = Number(splitLines[1])
        }
        if (splitLines[0] === 'drum_bank') {
            dtaContent.rawContent.drum_bank = splitLines[1]
        }
        if (splitLines[0] === 'anim_tempo') {
            dtaContent.rawContent.anim_tempo = Number(splitLines[1])
        }
        if (splitLines[0] === 'song_length') {
            dtaContent.rawContent.song_length = Number(splitLines[1])
        }
        if (splitLines[0] === 'preview') {
            dtaContent.rawContent.preview[0] = Number(splitLines[1])
            dtaContent.rawContent.preview[1] = Number(splitLines[2])
        }

        if (splitLines[0] === 'solo') {
            const allSolos = splitLines.slice(1)
            allSolos.map((value) => {
                if (!dtaContent.rawContent.solo) {
                    dtaContent.rawContent.solo = []
                }
                dtaContent.rawContent.solo.push(value)
            })
        }
        if (splitLines[0] === 'genre') {
            dtaContent.rawContent.genre = splitLines[1]
        }
        if (splitLines[0] === 'vocal_gender') {
            dtaContent.rawContent.vocal_gender =
                splitLines[1] as typeof dtaContent.rawContent.vocal_gender
        }
        if (splitLines[0] === 'version') {
            dtaContent.rawContent.version = Number(splitLines[1])
        }
        if (splitLines[0] === 'format') {
            dtaContent.rawContent.format = Number(splitLines[1])
        }
        if (splitLines[0] === 'album_art' && Number(splitLines[1]) > 0) {
            dtaContent.rawContent.album_art = true
        }
        if (splitLines[0] === 'year_released') {
            dtaContent.rawContent.year_released = Number(splitLines[1])
        }
        if (splitLines[0] === 'year_recorded') {
            dtaContent.rawContent.year_recorded = Number(splitLines[1])
        }
        if (splitLines[0] === 'rating') {
            dtaContent.rawContent.rating = Number(
                splitLines[1]
            ) as typeof dtaContent.rawContent.rating
        }
        if (splitLines[0] === 'sub_genre') {
            dtaContent.rawContent.sub_genre = splitLines[1]
        }
        if (splitLines[0] === 'song_id') {
            dtaContent.rawContent.song_id = splitLines[1]
        }
        if (splitLines[0] === 'tuning_offset_cents') {
            dtaContent.rawContent.tuning_offset_cents = Number(splitLines[1])
        }
        if (splitLines[0] === 'guide_pitch_volumez') {
            dtaContent.rawContent.guide_pitch_volume = Number(splitLines[1])
        }
        if (splitLines[0] === 'game_origin') {
            dtaContent.rawContent.game_origin = splitLines[1]
        }
        if (splitLines[0] === 'encoding') {
            dtaContent.rawContent.encoding = splitLines[1]
        }
        if (splitLines[0] === 'album_track_number') {
            dtaContent.rawContent.album_track_number = Number(splitLines[1])
        }
        if (splitLines[0] === 'vocal_tonic_note') {
            dtaContent.rawContent.vocal_tonic_note = Number(
                splitLines[1]
            ) as typeof dtaContent.rawContent.vocal_tonic_note
        }
        if (splitLines[0] === 'song_tonality') {
            dtaContent.rawContent.song_tonality = Number(
                splitLines[1]
            ) as typeof dtaContent.rawContent.song_tonality
        }
        if (splitLines[0] === 'song_key') {
            dtaContent.rawContent.song_key = Number(
                splitLines[1]
            ) as typeof dtaContent.rawContent.song_key
        }
        if (splitLines[0] === 'real_guitar_tuning') {
            const gtrTunings = splitLines.slice(1)
            gtrTunings.map((value, index) => {
                if (!dtaContent.rawContent.real_guitar_tuning) {
                    dtaContent.rawContent.real_guitar_tuning = [
                        0, 0, 0, 0, 0, 0,
                    ]
                }
                dtaContent.rawContent.real_guitar_tuning[index] = Number(value)
            })
        }
        if (splitLines[0] === 'real_bass_tuning') {
            const bassTunings = splitLines.slice(1)
            bassTunings.map((value, index) => {
                if (!dtaContent.rawContent.real_bass_tuning) {
                    dtaContent.rawContent.real_bass_tuning = [0, 0, 0, 0]
                }
                dtaContent.rawContent.real_bass_tuning[index] = Number(value)
            })
        }
        if (splitLines.join(' ').includes(';Song authored by')) {
            if (!dtaContent.customContent) dtaContent.customContent = {}
            dtaContent.customContent.author = splitLines.slice(3).join(' ')
        }
        if (splitLines.join(' ').includes(';Languages=')) {
            if (!dtaContent.customContent) dtaContent.customContent = {}
            if (!dtaContent.customContent.languages)
                dtaContent.customContent.languages = []

            const languages = splitLines
                .join(' ')
                .split('=')[1]
                .split(',')
                .slice(0, -1)
            languages.forEach((langValue) => {
                dtaContent.customContent?.languages?.push(langValue)
            })
        }
        if (splitLines.join(' ').includes(';Karaoke=')) {
            if (!dtaContent.customContent) dtaContent.customContent = {}
            const isKaraoke = Boolean(
                Number(splitLines.join(' ').split('=')[1])
            )
            dtaContent.customContent.karaoke = isKaraoke
        }
        if (splitLines.join(' ').includes(';Multitrack=')) {
            if (!dtaContent.customContent) dtaContent.customContent = {}
            const isMultitrack = Boolean(
                Number(splitLines.join(' ').split('=')[1])
            )
            dtaContent.customContent.multitrack = isMultitrack
        }
        if (splitLines.join(' ').includes(';Convert=')) {
            if (!dtaContent.customContent) dtaContent.customContent = {}
            const isConvert = Boolean(
                Number(splitLines.join(' ').split('=')[1])
            )
            dtaContent.customContent.convert = isConvert
        }
        if (splitLines.join(' ').includes(';2xBass=')) {
            if (!dtaContent.customContent) dtaContent.customContent = {}
            const isDoubleKick = Boolean(
                Number(splitLines.join(' ').split('=')[1])
            )
            dtaContent.customContent.doubleKick = isDoubleKick
        }
        if (splitLines.join(' ').includes(';RhythmKeys=')) {
            if (!dtaContent.customContent) dtaContent.customContent = {}
            const isRhythmKeys = Boolean(
                Number(splitLines.join(' ').split('=')[1])
            )
            dtaContent.customContent.rhythmOnKeys = isRhythmKeys
        }
        if (splitLines.join(' ').includes(';RhythmBass=')) {
            if (!dtaContent.customContent) dtaContent.customContent = {}
            const isRhythmBass = Boolean(
                Number(splitLines.join(' ').split('=')[1])
            )
            dtaContent.customContent.rhythmOnBass = isRhythmBass
        }
        if (splitLines.join(' ').includes(';CATemh=')) {
            if (!dtaContent.customContent) dtaContent.customContent = {}
            const isCATemh = Boolean(Number(splitLines.join(' ').split('=')[1]))
            dtaContent.customContent.CATemh = isCATemh
        }
        if (splitLines.join(' ').includes(';ExpertOnly=')) {
            if (!dtaContent.customContent) dtaContent.customContent = {}
            const isExpertOnly = Boolean(
                Number(splitLines.join(' ').split('=')[1])
            )
            dtaContent.customContent.expertOnly = isExpertOnly
        }
    })

    return dtaContent
}

export default parseDTA
