import { DTADocument } from '../@types/DTADocument'

export interface StringifyDataOptions {
    /**
     * Specify the generated type of the DTA.
     * @default 'default'
     */
    type?: 'default' | 'rb3' | 'rb3_dlc'
    /**
     * By setting this to `true`, it places 1 to the
     * guitar audio channels on `cores`.
     *
     * @default false
     */
    guitarCores?: boolean
    /**
     * Places C3 MAGMA-generated information as DTA comments.
     * @default true if type === 'default'
     * @default false if type === 'rb3' | 'rb3_dlc'
     */
    placeCustomAttributes?: boolean
    /**
     * Omits main unranked instruments for the content.
     *
     * @default false
     */
    omitUnusedRanks?: boolean
    /**
     * Uses spaces rather than tabs.
     * @default false
     */
    useSpaces?: boolean
    /**
     * Changes some properties to generate `.dta` file contents for Wii systems.
     */
    wiiMode?: {
        /**
         * The generation of the pack you want to build.
         */
        gen: 'sZAE' | 'sZBE' | 'sZCE' | 'sZDE' | 'sZEE' | 'sZFE' | 'sZGE' | 'sZHE' | 'sZJE' | 'sZKE'
        /**
         * The slot of the pack you want to build.
         *
         * **Odd, positive numbers only**.
         */
        slot: number
    }
}

/**
 * Generates a string representing a series of track counts incremented by a specified value.
 * - - - -
 * @param {number} trackCount - The starting track count.
 * @param {number} add - The value to increment the track count by.
 * @returns {string} A string representing the series of track counts.
 */
const trackCountIterator = (trackCount: number, add: number): string => {
    let returnString = ''
    const iterator = Array(add).fill(0)
    iterator.forEach((value, i) => {
        returnString += `${trackCount}${i === iterator.length - 1 ? '' : ' '}`
        trackCount++
        return
    })
    return returnString
}

/**
 * Specific stringify method for MAGMA C3-generated `.dta` file contents.
 * - - - -
 * @param {DTADocument} value The parsed song you want to be stringified.
 * @param {StringifyDataOptions | undefined} options `OPTIONAL` Customize options for the stringifying process.
 * @returns {string} A stringified version of the song.
 */
const stringifyDefault = (value: DTADocument, options?: StringifyDataOptions): string => {
    let output = ''
    let trackCount = 0
    const guitarTrackStarts = value.content.tracks_count[0] + value.content.tracks_count[1] - 1
    const guitarTrackEnds = guitarTrackStarts + value.content.tracks_count[2]
    output += `(\n`
    output += `\t'${value.content.id}'\n`
    output += `\t(\n\t\t'name'\n\t\t"${value.content.name.replaceAll('"', '\\q')}"\n\t)\n`
    output += `\t(\n\t\t'artist'\n\t\t"${value.content.artist.replaceAll('"', '\\q')}"\n\t)\n`
    output += `\t('master' ${value.content.master ? '1' : '0'})\n`
    if (value.content.context) {
        output += `\t('context' ${value.content.context})\n`
    }
    output += `\t(\n\t\t'song'\n\t\t(\n\t\t\t'name'\n\t\t\t"`
    if (options?.wiiMode)
        output += `dlc/${options.wiiMode.gen}/${options.wiiMode.slot.toString().padStart(3, '0')}/content/songs/${value.content.songname}/${
            value.content.songname
        }`
    else output += `songs/${value.content.songname}/${value.content.songname}`

    output += `"\n\t\t)\n`

    output += `\t\t(\n\t\t\t'tracks_count'\n\t\t\t(${value.content.tracks_count.join(' ')})\n\t\t)\n`
    output += `\t\t(\n\t\t\t'tracks'\n\t\t\t(\n`
    if (value.content.tracks_count[0]) {
        output += `\t\t\t\t(\n\t\t\t\t\t'drum'\n\t\t\t\t\t(${trackCountIterator(trackCount, value.content.tracks_count[0])})\n\t\t\t\t)\n`
        trackCount += value.content.tracks_count[0]
    }
    if (value.content.tracks_count[1]) {
        output += `\t\t\t\t(\n\t\t\t\t\t'bass'\n\t\t\t\t\t(${trackCountIterator(trackCount, value.content.tracks_count[1])})\n\t\t\t\t)\n`
        trackCount += value.content.tracks_count[1]
    }
    if (value.content.tracks_count[2]) {
        output += `\t\t\t\t(\n\t\t\t\t\t'guitar'\n\t\t\t\t\t(${trackCountIterator(trackCount, value.content.tracks_count[2])})\n\t\t\t\t)\n`
        trackCount += value.content.tracks_count[2]
    }
    if (value.content.tracks_count[3]) {
        output += `\t\t\t\t(\n\t\t\t\t\t'vocals'\n\t\t\t\t\t(${trackCountIterator(trackCount, value.content.tracks_count[3])})\n\t\t\t\t)\n`
        trackCount += value.content.tracks_count[3]
    }
    if (value.content.tracks_count[4]) {
        output += `\t\t\t\t(\n\t\t\t\t\t'keys'\n\t\t\t\t\t(${trackCountIterator(trackCount, value.content.tracks_count[4])})\n\t\t\t\t)\n`
        trackCount += value.content.tracks_count[4]
    }
    output += `\t\t\t)\n\t\t)\n`
    output += `\t\t(\n\t\t\t'pans'\n\t\t\t(`
    value.content.pans.forEach((num, i) => {
        output += `${num.toFixed(2)}${i === value.content.pans.length - 1 ? '' : ' '}`
        return
    })
    output += `)\n\t\t)\n`
    output += `\t\t(\n\t\t\t'vols'\n\t\t\t(`
    value.content.vols.forEach((num, i) => {
        output += `${num.toFixed(2)}${i === value.content.vols.length - 1 ? '' : ' '}`
        return
    })
    output += `)\n\t\t)\n`
    output += `\t\t(\n\t\t\t'cores'\n\t\t\t(`
    value.content.vols.forEach((num, i) => {
        if (options?.guitarCores !== undefined && options?.guitarCores) {
            output += `${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}${i === value.content.vols.length - 1 ? '' : ' '}`
        } else {
            output += `-1${i === value.content.vols.length - 1 ? '' : ' '}`
        }
        return
    })
    output += `)\n\t\t)\n`
    if (value.content.tracks_count[6]) {
        const crowdCount =
            value.content.tracks_count[0] +
            value.content.tracks_count[1] +
            value.content.tracks_count[2] +
            value.content.tracks_count[3] +
            value.content.tracks_count[4] +
            value.content.tracks_count[5]
        output += `\t\t('crowd_channels' ${trackCountIterator(crowdCount, 2)})\n`
    }
    output += `\t\t('vocal_parts' ${value.content.vocal_parts})\n`

    output += `\t\t(\n\t\t\t'drum_solo'\n\t\t\t(\n\t\t\t\t'seqs'\n\t\t\t\t('kick.cue' 'snare.cue' 'tom1.cue' 'tom2.cue' 'crash.cue')\n\t\t\t)\n\t\t)\n`
    output += `\t\t(\n\t\t\t'drum_freestyle'\n\t\t\t(\n\t\t\t\t'seqs'\n\t\t\t\t('kick.cue' 'snare.cue' 'hat.cue' 'ride.cue' 'crash.cue')\n\t\t\t)\n\t\t)\n`

    output += `\t\t('mute_volume' ${value.content.mute_volume ? value.content.mute_volume : '-96'})\n`
    output += `\t\t('mute_volume_vocals' ${value.content.mute_volume_vocals ? value.content.mute_volume_vocals : '-12'})\n`
    output += `\t\t('hopo_threshold' ${value.content.hopo_threshold ? value.content.hopo_threshold : '170'})\n`
    output += `\t)\n`
    output += `\t('song_scroll_speed' ${value.content.song_scroll_speed ? value.content.song_scroll_speed : '2300'})\n`
    output += `\t(\n\t\t'bank'\n\t\t"${value.content.bank}"\n\t)\n`
    output += `\t('drum_bank' "${value.content.drum_bank}")\n`
    output += `\t('anim_tempo' ${value.content.anim_tempo})\n`
    if (value.content.band_fail_cue) {
        output += `\t('band_fail_cue' '${value.content.band_fail_cue}')\n`
    }
    output += `\t('song_length' ${value.content.song_length})\n`
    output += `\t('preview' ${value.content.preview.join(' ')})\n`
    output += `\t(\n\t\t'rank'\n`
    output += `\t\t('drum' ${value.content.rank_drum ? value.content.rank_drum : '0'})\n`
    output += `\t\t('guitar' ${value.content.rank_guitar ? value.content.rank_guitar : '0'})\n`
    output += `\t\t('bass' ${value.content.rank_bass ? value.content.rank_bass : '0'})\n`
    output += `\t\t('vocals' ${value.content.rank_vocals ? value.content.rank_vocals : '0'})\n`
    output += `\t\t('keys' ${value.content.rank_keys ? value.content.rank_keys : '0'})\n`
    output += `\t\t('real_keys' ${value.content.rank_real_keys ? value.content.rank_real_keys : '0'})\n`
    if (value.content.rank_real_guitar) {
        output += `\t\t('real_guitar' ${value.content.rank_real_guitar})\n`
    }
    if (value.content.rank_real_bass) {
        output += `\t\t('real_bass' ${value.content.rank_real_bass})\n`
    }
    output += `\t\t('band' ${value.content.rank_band})\n`
    output += `\t)\n`
    output += `\t('genre' '${value.content.genre}')\n`
    output += `\t('vocal_gender' '${value.content.vocal_gender}')\n`
    output += `\t('version' ${value.content.version ? value.content.version : '30'})\n`
    output += `\t('format' ${value.content.format ? value.content.format : '10'})\n`
    output += `\t('album_art' ${value.content.album_art ? '1' : '0'})\n`
    output += `\t('year_released' ${value.content.year_released})\n`
    if (value.content.year_recorded) {
        output += `\t('year_recorded' ${value.content.year_recorded})\n`
    }
    output += `\t('rating' ${value.content.rating})\n`
    if (value.content.sub_genre) {
        output += `\t('sub_genre' '${value.content.sub_genre}')\n`
    }
    output += `\t('song_id' ${value.content.song_id})\n`
    if (value.content.solo && value.content.solo.length > 0) {
        output += `\t('solo' (`
        value.content.solo.forEach((flag, i) => {
            if (value.content.solo && i === value.content.solo.length - 1) output += `'${flag}'`
            else output += `'${flag}' `
        })
        output += `))\n`
    }
    output += `\t('tuning_offset_cents' ${value.content.tuning_offset_cents ? value.content.tuning_offset_cents : '0'})\n`
    output += `\t('guide_pitch_volume' ${value.content.guide_pitch_volume ? value.content.guide_pitch_volume.toFixed(2) : (-3).toFixed(2)})\n`
    output += `\t('game_origin' '${value.content.game_origin}')\n`
    output += `\t('encoding' '${value.content.encoding ? value.content.encoding : 'latin1'}')\n`
    if (value.content.album_name) {
        output += `\t(\n\t\t'album_name'\n\t\t"${value.content.album_name.replaceAll('"', '\\q')}"\n\t)\n`
    }
    if (value.content.album_track_number) {
        output += `\t('album_track_number' ${value.content.album_track_number})\n`
    }
    if (value.content.vocal_tonic_note !== undefined) {
        output += `\t('vocal_tonic_note' ${value.content.vocal_tonic_note})\n`
    }
    if (value.content.song_tonality !== undefined) {
        output += `\t('song_tonality' ${value.content.song_tonality})\n`
    }
    if (value.content.song_key !== undefined) {
        output += `\t('song_key' ${value.content.song_key})\n`
    }
    if (value.content.real_guitar_tuning) {
        output += `\t('real_guitar_tuning' (${value.content.real_guitar_tuning.join(' ')}))\n`
    }
    if (value.content.real_bass_tuning) {
        output += `\t('real_bass_tuning' (${value.content.real_bass_tuning.join(' ')}))\n`
    }
    if (value.content.alternate_path) {
        output += `\t('alternate_path' ${value.content.alternate_path ? '1' : '0'})\n`
    }
    if (value.content.extra_authoring) {
        output += `\t('extra_authoring' (`
        value.content.extra_authoring.forEach((extra, i) => {
            if (value.content.extra_authoring && i === value.content.extra_authoring.length - 1) output += `'${extra}'`
            else output += `'${extra}' `
        })
        output += `))\n`
    }
    if (value.content.pack_name) {
        output += `\t('pack_name' "${value.content.pack_name.replaceAll('"', '\\q')}")\n`
    }
    if (value.content.base_points) {
        output += `\t('base_points' ${value.content.base_points})\n`
    }
    if (options?.placeCustomAttributes === undefined || options?.placeCustomAttributes === true) {
        output += `\n \n;DO NOT EDIT THE FOLLOWING LINES MANUALLY\n;Created using Magma: C3 Roks Edition v3.3.5\n;Song authored by ${
            value.content.author ? value.content.author : 'Unknown Charter'
        }\n;Song=${value.content.name}\n;Language(s)=${
            value.content.languages
                ? value.content.languages.length === 1
                    ? `${value.content.languages.join(',')},`
                    : value.content.languages.join(',')
                : 'English,'
        }\n;Karaoke=${value.content.karaoke ? 1 : 0}\n;Multitrack=${value.content.multitrack ? 1 : 0}\n;Convert=${
            value.content.convert ? 1 : 0
        }\n;2xBass=${value.content.doubleKick ? 1 : 0}\n;RhythmKeys=${value.content.rhythmOnKeys ? 1 : 0}\n;RhythmBass=${
            value.content.rhythmOnBass ? 1 : 0
        }\n;CATemh=${value.content.CATemh ? 1 : 0}\n;ExpertOnly=${value.content.expertOnly ? 1 : 0}\n`
    }
    output += `)\n`
    return output
}

/**
 * Specific stringify method for Non-MAGMA C3 `.dta` file contents.
 * - - - -
 * @param {DTADocument} value The parsed song you want to be stringified.
 * @param {StringifyDataOptions | undefined} options `OPTIONAL` Customize options for the stringifying process.
 * @returns {string} A stringified version of the song.
 */
const stringifyCustom = (value: DTADocument, options?: StringifyDataOptions): string => {
    let output = ''
    let trackCount = 0
    let firstTrackDone = false
    const guitarTrackStarts = value.content.tracks_count[0] + value.content.tracks_count[1] - 1
    const guitarTrackEnds = guitarTrackStarts + value.content.tracks_count[2]
    let instrumentCount = 0
    let hasOnlyOneInstrument = false

    value.content.tracks_count.forEach((track, i) => {
        if (i < 5 && track !== 0) instrumentCount++
    })

    if (instrumentCount > 1) hasOnlyOneInstrument = false
    else hasOnlyOneInstrument = true

    output += `(${value.content.id}\n`
    output += `\t(name "${value.content.name.replaceAll('"', '\\q')}")\n`
    output += `\t(artist "${value.content.artist.replaceAll('"', '\\q')}")\n`
    output += `\t(master ${value.content.master ? 'TRUE' : 'FALSE'})\n`
    if (value.content.context) {
        output += `\t(context ${value.content.context})\n`
    }
    output += `\t(song_id ${value.content.song_id})\n`
    output += `\t(song\n`
    output += `\t\t(name "`
    if (options?.wiiMode)
        output += `dlc/${options.wiiMode.gen}/${options.wiiMode.slot.toString().padStart(3, '0')}/content/songs/${value.content.songname}/${
            value.content.songname
        }`
    else output += `songs/${value.content.songname}/${value.content.songname}`
    output += `")\n`
    output += `\t\t(tracks${options?.type === 'rb3' ? ' (' : `\n\t\t\t(`}`

    const drumTrack = value.content.tracks_count[0]
    const bassTrack = value.content.tracks_count[1]
    const guitarTrack = value.content.tracks_count[2]
    const vocalsTrack = value.content.tracks_count[3]
    const keysTrack = value.content.tracks_count[4]

    if (options?.type === 'rb3_dlc') {
        if (drumTrack) {
            output += `${!firstTrackDone ? '' : '\n\t\t\t '}(drum (${trackCountIterator(trackCount, value.content.tracks_count[0])}))`
            trackCount += value.content.tracks_count[0]
            firstTrackDone = true
        }
        if (bassTrack) {
            output += `${!firstTrackDone ? '' : '\n\t\t\t '}(bass (${trackCountIterator(trackCount, value.content.tracks_count[1])}))`
            trackCount += value.content.tracks_count[1]
            firstTrackDone = true
        }
        if (guitarTrack) {
            output += `${!firstTrackDone ? '' : '\n\t\t\t '}(guitar (${trackCountIterator(trackCount, value.content.tracks_count[2])}))`
            trackCount += value.content.tracks_count[2]
            firstTrackDone = true
        }
        if (vocalsTrack) {
            output += `${!firstTrackDone ? '' : '\n\t\t\t '}(vocals (${trackCountIterator(trackCount, value.content.tracks_count[3])}))`
            trackCount += value.content.tracks_count[3]
            firstTrackDone = true
        }
        if (keysTrack) {
            output += `${!firstTrackDone ? '' : '\n\t\t\t '}(keys (${trackCountIterator(trackCount, value.content.tracks_count[4])}))`
            trackCount += value.content.tracks_count[4]
            firstTrackDone = true
        }

        output += hasOnlyOneInstrument ? `)\n\t\t)\n` : `\n\t\t\t)\n\t\t)\n`
    } else {
        if (drumTrack) {
            output += `${!firstTrackDone ? '' : '\n\t\t\t\t'}(drum ${drumTrack > 1 ? '(' : ''}`
            if (drumTrack > 2) {
                const drummix = `${trackCountIterator(trackCount, value.content.tracks_count[0])}`.replaceAll(' ', '\n\t\t\t\t\t\t')

                output += drummix
            } else output += `${trackCountIterator(trackCount, value.content.tracks_count[0])}`
            output += `${drumTrack > 1 ? ')' : ''})`
            trackCount += value.content.tracks_count[0]
            firstTrackDone = true
        }
        if (bassTrack) {
            output += `${!firstTrackDone ? '' : '\n\t\t\t\t'}(bass ${bassTrack > 1 ? '(' : ''}${trackCountIterator(
                trackCount,
                value.content.tracks_count[1]
            )}${bassTrack > 1 ? ')' : ''})`
            trackCount += value.content.tracks_count[1]
            firstTrackDone = true
        }
        if (guitarTrack) {
            output += `${!firstTrackDone ? '' : '\n\t\t\t\t'}(guitar ${guitarTrack > 1 ? '(' : ''}${trackCountIterator(
                trackCount,
                value.content.tracks_count[2]
            )}${guitarTrack > 1 ? ')' : ''})`
            trackCount += value.content.tracks_count[2]
            firstTrackDone = true
        }
        if (vocalsTrack) {
            output += `${!firstTrackDone ? '' : '\n\t\t\t\t'}(vocals ${vocalsTrack > 1 ? '(' : ''}${trackCountIterator(
                trackCount,
                value.content.tracks_count[3]
            )}${vocalsTrack > 1 ? ')' : ''})`
            trackCount += value.content.tracks_count[3]
            firstTrackDone = true
        }
        if (keysTrack) {
            output += `${!firstTrackDone ? '' : '\n\t\t\t\t'}(keys ${keysTrack > 1 ? '(' : ''}${trackCountIterator(
                trackCount,
                value.content.tracks_count[4]
            )}${keysTrack > 1 ? ')' : ''})`
            trackCount += value.content.tracks_count[4]
            firstTrackDone = true
        }
        output += `))\n`
    }
    output += `\t\t(vocal_parts ${value.content.vocal_parts})\n`
    output += `\t\t(pans (`
    value.content.pans.forEach((pans, i) => {
        if (options?.type === 'rb3') {
            if (i === 0) output += `${pans.toFixed(2)}`
            else if (i === value.content.pans.length - 1) output += `${'\n\t\t\t\t'}${pans.toFixed(2)}))\n`
            else output += `${'\n\t\t\t\t'}${pans.toFixed(2)}`
        } else {
            if (i === 0) output += `${pans.toFixed(1)}`
            else if (i === value.content.pans.length - 1) output += `${' '}${pans.toFixed(1)}))\n`
            else output += `${' '}${pans.toFixed(1)}`
        }
    })
    output += `\t\t(vols (`
    value.content.vols.forEach((vols, i) => {
        if (options?.type === 'rb3') {
            if (i === 0) output += `${vols.toFixed(2)}`
            else if (i === value.content.vols.length - 1) output += `${'\n\t\t\t\t'}${vols.toFixed(2)}))\n`
            else output += `${'\n\t\t\t\t'}${vols.toFixed(2)}`
        } else {
            if (i === 0) output += `${vols.toFixed(1)}`
            else if (i === value.content.vols.length - 1) output += `${' '}${vols.toFixed(1)}))\n`
            else output += `${' '}${vols.toFixed(1)}`
        }
    })
    output += `\t\t(cores (`
    value.content.vols.forEach((vols, i) => {
        if (options?.type === 'rb3') {
            if (i === 0) {
                if (options?.guitarCores === undefined || options?.guitarCores) {
                    output += `${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}`
                    return
                }
                output += `-1`
                return
            } else if (i === value.content.vols.length - 1) {
                if (options?.guitarCores === undefined || options?.guitarCores) {
                    output += `${'\n\t\t\t\t'}${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}))\n`
                    return
                }
                output += `${'\n\t\t\t\t'}${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}))\n`
                return
            }
            if (options?.guitarCores === undefined || options?.guitarCores) {
                output += `${'\n\t\t\t\t'}${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}`
                return
            }

            output += `${'\n\t\t\t\t'}-1`
            return
        } else {
            if (i === 0) {
                if (options?.guitarCores === undefined || options?.guitarCores) {
                    output += `${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}`
                    return
                }
                output += `-1`
                return
            } else if (i === value.content.vols.length - 1) {
                if (options?.guitarCores === undefined || options?.guitarCores) {
                    output += `${' '}${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}))\n`
                    return
                }
                output += `${' '}${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}))\n`
                return
            }
            if (options?.guitarCores === undefined || options?.guitarCores) {
                output += `${' '}${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}`
                return
            }

            output += `${' '}-1`
            return
        }
    })
    if (value.content.tracks_count[6]) {
        const crowdCount =
            value.content.tracks_count[0] +
            value.content.tracks_count[1] +
            value.content.tracks_count[2] +
            value.content.tracks_count[3] +
            value.content.tracks_count[4] +
            value.content.tracks_count[5]
        output += `\t\t(crowd_channels ${trackCountIterator(crowdCount, 2)})\n`
    }
    if (options?.type === 'rb3')
        output += `\t\t(drum_solo (seqs (kick.cue${'\n\t\t\t\t\t'}snare.cue${'\n\t\t\t\t\t'}tom1.cue${'\n\t\t\t\t\t'}tom2.cue${'\n\t\t\t\t\t'}crash.cue)))\n\t\t(drum_freestyle (seqs (kick.cue${'\n\t\t\t\t\t'}snare.cue${'\n\t\t\t\t\t'}hat.cue${'\n\t\t\t\t\t'}ride.cue${'\n\t\t\t\t\t'}crash.cue)))`
    else
        output += `\t\t(drum_solo\n\t\t\t(seqs (kick.cue${' '}snare.cue${' '}tom1.cue${' '}tom2.cue${' '}crash.cue))\n\t\t)\n\t\t(drum_freestyle\n\t\t\t(seqs (kick.cue${' '}snare.cue${' '}hat.cue${' '}ride.cue${' '}crash.cue))\n\t\t)`

    if (value.content.hopo_threshold) {
        output += `\n\t\t(hopo_threshold ${value.content.hopo_threshold})`
    }

    output += `${options?.type === 'rb3' ? `)\n` : `\n\t)\n`}`
    output += `\t(bank ${value.content.bank})\n`
    output += `\t(drum_bank ${value.content.drum_bank})\n`
    if (value.content.anim_tempo === 16) {
        output += `\t(anim_tempo kTempoSlow)\n`
    } else if (value.content.anim_tempo === 32) {
        output += `\t(anim_tempo kTempoMedium)\n`
    } else if (value.content.anim_tempo === 64) {
        output += `\t(anim_tempo kTempoFast)\n`
    }

    if (value.content.band_fail_cue) {
        output += `\t(band_fail_cue ${value.content.band_fail_cue})\n`
    }

    output += `\t(song_scroll_speed ${value.content.song_scroll_speed ? value.content.song_scroll_speed : '2300'})\n`

    if (options?.type === 'rb3') output += `\t(preview${'\n\t\t'}${value.content.preview[0]}${'\n\t\t'}${value.content.preview[1]})\n`
    else output += `\t(preview${' '}${value.content.preview[0]}${' '}${value.content.preview[1]})\n`

    output += `\t(song_length ${value.content.song_length})\n`
    output += `\t(rank\n`

    if (!options?.omitUnusedRanks) {
        output += `\t\t(drum ${value.content.rank_drum ? value.content.rank_drum : '0'})\n`
        output += `\t\t(guitar ${value.content.rank_guitar ? value.content.rank_guitar : '0'})\n`
        output += `\t\t(bass ${value.content.rank_bass ? value.content.rank_bass : '0'})\n`
        output += `\t\t(vocals ${value.content.rank_vocals ? value.content.rank_vocals : '0'})\n`
        output += `\t\t(keys ${value.content.rank_keys ? value.content.rank_keys : '0'})\n`
        output += `\t\t(real_keys ${value.content.rank_real_keys ? value.content.rank_real_keys : '0'})\n`
    } else {
        if (value.content.rank_drum) output += `\t\t(drum ${value.content.rank_drum})\n`
        if (value.content.rank_guitar) output += `\t\t(guitar ${value.content.rank_guitar})\n`
        if (value.content.rank_bass) output += `\t\t(bass ${value.content.rank_bass})\n`
        if (value.content.rank_vocals) output += `\t\t(vocals ${value.content.rank_vocals})\n`
        if (value.content.rank_keys) output += `\t\t(keys ${value.content.rank_keys})\n`
        if (value.content.rank_real_keys) output += `\t\t(real_keys ${value.content.rank_real_keys})\n`
    }

    if (value.content.rank_real_guitar) {
        output += `\t\t(real_guitar ${value.content.rank_real_guitar})\n`
    }
    if (value.content.rank_real_bass) {
        output += `\t\t(real_bass ${value.content.rank_real_bass})\n`
    }

    output += `\t\t(band ${value.content.rank_band}))\n`

    if (value.content.solo && value.content.solo.length > 0) {
        output += `\t(solo (${value.content.solo.join(' ')}))\n`
    }

    output += `\t(format ${value.content.format ? value.content.format : '10'})\n`
    output += `\t(version ${value.content.version ? value.content.version : '30'})\n`
    output += `\t(game_origin ${value.content.game_origin})\n`
    if (value.content.encoding !== undefined && value.content.encoding !== 'latin1') {
        output += `\t(encoding ${value.content.encoding})\n`
    }
    output += `\t(rating ${value.content.rating})\n`
    output += `\t(genre ${value.content.genre})\n`
    if (value.content.sub_genre) {
        output += `\t(sub_genre ${value.content.sub_genre})\n`
    }
    output += `\t(vocal_gender ${value.content.vocal_gender})\n`
    output += `\t(year_released ${value.content.year_released})\n`
    if (value.content.year_recorded) {
        output += `\t(year_recorded ${value.content.year_recorded})\n`
    }
    output += `\t(album_art ${value.content.album_art ? 'TRUE' : 'FALSE'})\n`

    if (value.content.album_name) {
        output += `\t(album_name "${value.content.album_name.replaceAll('"', '\\q')}")\n`
    }
    if (value.content.album_track_number) {
        output += `\t(album_track_number ${value.content.album_track_number})\n`
    }
    if (value.content.vocal_tonic_note !== undefined) {
        output += `\t(vocal_tonic_note ${value.content.vocal_tonic_note})\n`
    }
    if (value.content.song_tonality !== undefined) {
        output += `\t(song_tonality ${value.content.song_tonality})\n`
    }
    if (value.content.song_key !== undefined) {
        output += `\t(song_key ${value.content.song_key})\n`
    }
    if (value.content.tuning_offset_cents !== undefined) {
        output += `\t(tuning_offset_cents ${value.content.tuning_offset_cents})\n`
    }
    if (value.content.alternate_path) {
        output += `\t(alternate_path ${value.content.alternate_path ? 'TRUE' : 'FALSE'})\n`
    }
    if (value.content.extra_authoring) {
        output += `\t(extra_authoring (${value.content.extra_authoring.join(' ')}))\n`
    }
    if (value.content.pack_name) {
        output += `\t(pack_name "${value.content.pack_name.replaceAll('"', '\\q')}")\n`
    }
    if (value.content.base_points) {
        output += `\t(base_points ${value.content.base_points})\n`
    }

    if (options?.type === 'rb3') {
        if (value.content.real_guitar_tuning) {
            output += `\t(real_guitar_tuning (`
            value.content.real_guitar_tuning.forEach((tuning, i) => {
                if (i === 0) {
                    output += `${tuning}`
                    return
                } else if (value.content.real_guitar_tuning && i === value.content.real_guitar_tuning.length - 1) {
                    output += `${'\n\t\t\t'}${tuning}))${value.content.real_bass_tuning ? '\n' : ''}`
                    return
                }
                output += `${'\n\t\t\t'}${tuning}`
            })
        }
        if (value.content.real_bass_tuning) {
            output += `\t(real_bass_tuning (`
            value.content.real_bass_tuning.forEach((tuning, i) => {
                if (i === 0) {
                    output += `${tuning}`
                    return
                } else if (value.content.real_bass_tuning && i === value.content.real_bass_tuning.length - 1) {
                    output += `${'\n\t\t\t'}${tuning}))${options?.placeCustomAttributes ? '\n' : ''}`
                    return
                }
                output += `${'\n\t\t\t'}${tuning}`
            })
        }
    } else {
        if (value.content.real_guitar_tuning) {
            output += `\t(real_guitar_tuning (`
            value.content.real_guitar_tuning.forEach((tuning, i) => {
                if (i === 0) {
                    output += `${tuning}`
                    return
                } else if (value.content.real_guitar_tuning && i === value.content.real_guitar_tuning.length - 1) {
                    output += `${' '}${tuning}))${value.content.real_bass_tuning ? '\n' : ''}`
                    return
                }
                output += `${' '}${tuning}`
            })
        }
        if (value.content.real_bass_tuning) {
            output += `\t(real_bass_tuning (`
            value.content.real_bass_tuning.forEach((tuning, i) => {
                if (i === 0) {
                    output += `${tuning}`
                    return
                } else if (value.content.real_bass_tuning && i === value.content.real_bass_tuning.length - 1) {
                    output += `${' '}${tuning}))${options?.placeCustomAttributes ? '\n' : ''}`
                    return
                }
                output += `${' '}${tuning}`
            })
        }
    }
    if (options?.placeCustomAttributes !== undefined && options?.placeCustomAttributes) {
        output += `\n \n;DO NOT EDIT THE FOLLOWING LINES MANUALLY\n;Created using Magma: C3 Roks Edition v3.3.5\n;Song authored by ${
            value.content.author ? value.content.author : 'Unknown Charter'
        }\n;Song=${value.content.name}\n;Language(s)=${
            value.content.languages
                ? value.content.languages.length === 1
                    ? `${value.content.languages.join(',')},`
                    : value.content.languages.join(',')
                : 'English,'
        }\n;Karaoke=${value.content.karaoke ? 1 : 0}\n;Multitrack=${value.content.multitrack ? 1 : 0}\n;Convert=${
            value.content.convert ? 1 : 0
        }\n;2xBass=${value.content.doubleKick ? 1 : 0}\n;RhythmKeys=${value.content.rhythmOnKeys ? 1 : 0}\n;RhythmBass=${
            value.content.rhythmOnBass ? 1 : 0
        }\n;CATemh=${value.content.CATemh ? 1 : 0}\n;ExpertOnly=${value.content.expertOnly ? 1 : 0}\n`
    }

    output += `${options?.type === 'rb3_dlc' ? '\n' : ''})\n`
    return output
}

/**
 * Converts an array of parsed song objects back to `.dta` file contents string.
 * - - - -
 * @param {DTADocument[]} songs An array of parsed song objects.
 * @param {StringifyDataOptions} options `OPTIONAL` Customization options for the stringifying process.
 * @returns {string} A string representation of this parsed song object as a `.dta` file contents string.
 */
export const stringifyDTA = (songs: DTADocument[], options?: StringifyDataOptions): string => {
    let output = ''

    songs.forEach((value) => {
        if (options?.type === 'rb3') output += stringifyCustom(value, options)
        else if (options?.type === 'rb3_dlc') output += stringifyCustom(value, options)
        else output += stringifyDefault(value, options).replace(/\t/g, '   ')
    })

    if (options?.useSpaces) {
        output = output.replace(/\t/g, '   ')
    }

    return (
        output
            .split('\n')
            .filter((line) => line)
            .join('\n') + '\n'
    )
}
