import { DTADocument } from '../@types/DTADocument'
import { genTabs, trackCountStringGenerator } from '../exports'

export interface StringifyDataOptions {
    /**
     * Specify the generated type of the DTA.
     *
     * Default is `'default'`.
     */
    type?: 'default' | 'rb3_dlc'
    /**
     * By setting this to `true`, it places 1 to the
     * guitar audio channels on `cores`.
     *
     * Default is `false`.
     */
    guitarCores?: boolean
    /**
     * Places C3 MAGMA-generated information as DTA comments.
     *
     * Default is `true`.
     */
    placeCustomAttributes?: boolean
    /**
     * Omits main unranked instruments for the content.
     *
     * Default is `false`.
     */
    omitUnusedRanks?: boolean
    /**
     * Uses spaces rather than tabs. This can be either a number or a boolean value. Default is `false`.
     *
     * If this argument is a boolean value (specially `true`), it will use 3 (three) spaces as default. You can change the amount of space characters by placing a number.
     */
    useSpaces?: boolean | number
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

// /**
//  * Specific stringify method for Non-MAGMA C3 `.dta` file contents.
//  * - - - -
//  * @param {DTADocument} value The parsed song you want to be stringified.
//  * @param {StringifyDataOptions | undefined} options `OPTIONAL` Customize options for the stringifying process.
//  * @returns {string} A stringified version of the song.
//  */
// const stringifyCustom = (value: DTADocument, options: StringifyDataOptions): string => {
//     let output = ''
//     let trackCount = 0
//     let firstTrackDone = false
//     const guitarTrackStarts = value.content.tracks_count[0] + value.content.tracks_count[1] - 1
//     const guitarTrackEnds = guitarTrackStarts + value.content.tracks_count[2]
//     let instrumentCount = 0
//     let hasOnlyOneInstrument = false

//     value.content.tracks_count.forEach((track, i) => {
//         if (i < 5 && track !== 0) instrumentCount++
//     })

//     if (instrumentCount > 1) hasOnlyOneInstrument = false
//     else hasOnlyOneInstrument = true

//     output += `(${value.content.id}\n`
//     output += `\t(name "${value.content.name.replaceAll('"', '\\q')}")\n`
//     output += `\t(artist "${value.content.artist.replaceAll('"', '\\q')}")\n`
//     output += `\t(master ${value.content.master ? 'TRUE' : 'FALSE'})\n`
//     if (value.content.context) {
//         output += `\t(context ${value.content.context})\n`
//     }
//     output += `\t(song_id ${value.content.song_id})\n`
//     output += `\t(song\n`
//     output += `\t\t(name "`
//     if (options?.wiiMode)
//         output += `dlc/${options.wiiMode.gen}/${options.wiiMode.slot.toString().padStart(3, '0')}/content/songs/${value.content.songname}/${value.content.songname
//             }`
//     else output += `songs/${value.content.songname}/${value.content.songname}`
//     output += `")\n`
//     output += `\t\t(tracks${options?.type === 'rb3' ? ' (' : `\n\t\t\t(`}`

//     const drumTrack = value.content.tracks_count[0]
//     const bassTrack = value.content.tracks_count[1]
//     const guitarTrack = value.content.tracks_count[2]
//     const vocalsTrack = value.content.tracks_count[3]
//     const keysTrack = value.content.tracks_count[4]

//     if (options?.type === 'rb3_dlc') {
//         if (drumTrack) {
//             output += `${!firstTrackDone ? '' : '\n\t\t\t '}(drum (${trackCountIterator(trackCount, value.content.tracks_count[0])}))`
//             trackCount += value.content.tracks_count[0]
//             firstTrackDone = true
//         }
//         if (bassTrack) {
//             output += `${!firstTrackDone ? '' : '\n\t\t\t '}(bass (${trackCountIterator(trackCount, value.content.tracks_count[1])}))`
//             trackCount += value.content.tracks_count[1]
//             firstTrackDone = true
//         }
//         if (guitarTrack) {
//             output += `${!firstTrackDone ? '' : '\n\t\t\t '}(guitar (${trackCountIterator(trackCount, value.content.tracks_count[2])}))`
//             trackCount += value.content.tracks_count[2]
//             firstTrackDone = true
//         }
//         if (vocalsTrack) {
//             output += `${!firstTrackDone ? '' : '\n\t\t\t '}(vocals (${trackCountIterator(trackCount, value.content.tracks_count[3])}))`
//             trackCount += value.content.tracks_count[3]
//             firstTrackDone = true
//         }
//         if (keysTrack) {
//             output += `${!firstTrackDone ? '' : '\n\t\t\t '}(keys (${trackCountIterator(trackCount, value.content.tracks_count[4])}))`
//             trackCount += value.content.tracks_count[4]
//             firstTrackDone = true
//         }

//         output += hasOnlyOneInstrument ? `)\n\t\t)\n` : `\n\t\t\t)\n\t\t)\n`
//     } else {
//         if (drumTrack) {
//             output += `${!firstTrackDone ? '' : '\n\t\t\t\t'}(drum ${drumTrack > 1 ? '(' : ''}`
//             if (drumTrack > 2) {
//                 const drummix = `${trackCountIterator(trackCount, value.content.tracks_count[0])}`.replaceAll(' ', '\n\t\t\t\t\t\t')

//                 output += drummix
//             } else output += `${trackCountIterator(trackCount, value.content.tracks_count[0])}`
//             output += `${drumTrack > 1 ? ')' : ''})`
//             trackCount += value.content.tracks_count[0]
//             firstTrackDone = true
//         }
//         if (bassTrack) {
//             output += `${!firstTrackDone ? '' : '\n\t\t\t\t'}(bass ${bassTrack > 1 ? '(' : ''}${trackCountIterator(
//                 trackCount,
//                 value.content.tracks_count[1]
//             )}${bassTrack > 1 ? ')' : ''})`
//             trackCount += value.content.tracks_count[1]
//             firstTrackDone = true
//         }
//         if (guitarTrack) {
//             output += `${!firstTrackDone ? '' : '\n\t\t\t\t'}(guitar ${guitarTrack > 1 ? '(' : ''}${trackCountIterator(
//                 trackCount,
//                 value.content.tracks_count[2]
//             )}${guitarTrack > 1 ? ')' : ''})`
//             trackCount += value.content.tracks_count[2]
//             firstTrackDone = true
//         }
//         if (vocalsTrack) {
//             output += `${!firstTrackDone ? '' : '\n\t\t\t\t'}(vocals ${vocalsTrack > 1 ? '(' : ''}${trackCountIterator(
//                 trackCount,
//                 value.content.tracks_count[3]
//             )}${vocalsTrack > 1 ? ')' : ''})`
//             trackCount += value.content.tracks_count[3]
//             firstTrackDone = true
//         }
//         if (keysTrack) {
//             output += `${!firstTrackDone ? '' : '\n\t\t\t\t'}(keys ${keysTrack > 1 ? '(' : ''}${trackCountIterator(
//                 trackCount,
//                 value.content.tracks_count[4]
//             )}${keysTrack > 1 ? ')' : ''})`
//             trackCount += value.content.tracks_count[4]
//             firstTrackDone = true
//         }
//         output += `))\n`
//     }
//     output += `\t\t(vocal_parts ${value.content.vocal_parts === undefined ? 0 : value.content.vocal_parts})\n`
//     output += `\t\t(pans (`
//     value.content.pans.forEach((pans, i) => {
//         if (options?.type === 'rb3') {
//             if (i === 0) output += `${pans.toFixed(2)}`
//             else if (i === value.content.pans.length - 1) output += `${'\n\t\t\t\t'}${pans.toFixed(2)}))\n`
//             else output += `${'\n\t\t\t\t'}${pans.toFixed(2)}`
//         } else {
//             if (i === 0) output += `${pans.toFixed(1)}`
//             else if (i === value.content.pans.length - 1) output += `${' '}${pans.toFixed(1)}))\n`
//             else output += `${' '}${pans.toFixed(1)}`
//         }
//     })
//     output += `\t\t(vols (`
//     value.content.vols.forEach((vols, i) => {
//         if (options?.type === 'rb3') {
//             if (i === 0) output += `${vols.toFixed(2)}`
//             else if (i === value.content.vols.length - 1) output += `${'\n\t\t\t\t'}${vols.toFixed(2)}))\n`
//             else output += `${'\n\t\t\t\t'}${vols.toFixed(2)}`
//         } else {
//             if (i === 0) output += `${vols.toFixed(1)}`
//             else if (i === value.content.vols.length - 1) output += `${' '}${vols.toFixed(1)}))\n`
//             else output += `${' '}${vols.toFixed(1)}`
//         }
//     })
//     output += `\t\t(cores (`
//     value.content.vols.forEach((vols, i) => {
//         if (options?.type === 'rb3') {
//             if (i === 0) {
//                 if (options?.guitarCores === undefined || options?.guitarCores) {
//                     output += `${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}`
//                     return
//                 }
//                 output += `-1`
//                 return
//             } else if (i === value.content.vols.length - 1) {
//                 if (options?.guitarCores === undefined || options?.guitarCores) {
//                     output += `${'\n\t\t\t\t'}${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}))\n`
//                     return
//                 }
//                 output += `${'\n\t\t\t\t'}${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}))\n`
//                 return
//             }
//             if (options?.guitarCores === undefined || options?.guitarCores) {
//                 output += `${'\n\t\t\t\t'}${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}`
//                 return
//             }

//             output += `${'\n\t\t\t\t'}-1`
//             return
//         } else {
//             if (i === 0) {
//                 if (options?.guitarCores === undefined || options?.guitarCores) {
//                     output += `${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}`
//                     return
//                 }
//                 output += `-1`
//                 return
//             } else if (i === value.content.vols.length - 1) {
//                 if (options?.guitarCores === undefined || options?.guitarCores) {
//                     output += `${' '}${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}))\n`
//                     return
//                 }
//                 output += `${' '}${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}))\n`
//                 return
//             }
//             if (options?.guitarCores === undefined || options?.guitarCores) {
//                 output += `${' '}${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}`
//                 return
//             }

//             output += `${' '}-1`
//             return
//         }
//     })
//     if (value.content.tracks_count[6]) {
//         const crowdCount =
//             value.content.tracks_count[0] +
//             value.content.tracks_count[1] +
//             value.content.tracks_count[2] +
//             value.content.tracks_count[3] +
//             value.content.tracks_count[4] +
//             value.content.tracks_count[5]
//         output += `\t\t(crowd_channels ${trackCountIterator(crowdCount, 2)})\n`
//     }
//     if (options?.type === 'rb3')
//         output += `\t\t(drum_solo (seqs (kick.cue${'\n\t\t\t\t\t'}snare.cue${'\n\t\t\t\t\t'}tom1.cue${'\n\t\t\t\t\t'}tom2.cue${'\n\t\t\t\t\t'}crash.cue)))\n\t\t(drum_freestyle (seqs (kick.cue${'\n\t\t\t\t\t'}snare.cue${'\n\t\t\t\t\t'}hat.cue${'\n\t\t\t\t\t'}ride.cue${'\n\t\t\t\t\t'}crash.cue)))`
//     else
//         output += `\t\t(drum_solo\n\t\t\t(seqs (kick.cue${' '}snare.cue${' '}tom1.cue${' '}tom2.cue${' '}crash.cue))\n\t\t)\n\t\t(drum_freestyle\n\t\t\t(seqs (kick.cue${' '}snare.cue${' '}hat.cue${' '}ride.cue${' '}crash.cue))\n\t\t)`

//     if (value.content.hopo_threshold) {
//         output += `\n\t\t(hopo_threshold ${value.content.hopo_threshold})`
//     }

//     output += `${options?.type === 'rb3' ? `)\n` : `\n\t)\n`}`
//     output += `\t(bank ${value.content.bank})\n`
//     output += `\t(drum_bank ${value.content.drum_bank})\n`
//     if (value.content.anim_tempo === 16) {
//         output += `\t(anim_tempo kTempoSlow)\n`
//     } else if (value.content.anim_tempo === 32) {
//         output += `\t(anim_tempo kTempoMedium)\n`
//     } else if (value.content.anim_tempo === 64) {
//         output += `\t(anim_tempo kTempoFast)\n`
//     }

//     if (value.content.band_fail_cue) {
//         output += `\t(band_fail_cue ${value.content.band_fail_cue})\n`
//     }

//     output += `\t(song_scroll_speed ${value.content.song_scroll_speed ? value.content.song_scroll_speed : '2300'})\n`

//     if (options?.type === 'rb3') output += `\t(preview${'\n\t\t'}${value.content.preview[0]}${'\n\t\t'}${value.content.preview[1]})\n`
//     else output += `\t(preview${' '}${value.content.preview[0]}${' '}${value.content.preview[1]})\n`

//     output += `\t(song_length ${value.content.song_length})\n`
//     output += `\t(rank\n`

//     if (!options?.omitUnusedRanks) {
//         output += `\t\t(drum ${value.content.rank_drum ? value.content.rank_drum : '0'})\n`
//         output += `\t\t(guitar ${value.content.rank_guitar ? value.content.rank_guitar : '0'})\n`
//         output += `\t\t(bass ${value.content.rank_bass ? value.content.rank_bass : '0'})\n`
//         output += `\t\t(vocals ${value.content.rank_vocals ? value.content.rank_vocals : '0'})\n`
//         output += `\t\t(keys ${value.content.rank_keys ? value.content.rank_keys : '0'})\n`
//         output += `\t\t(real_keys ${value.content.rank_real_keys ? value.content.rank_real_keys : '0'})\n`
//     } else {
//         if (value.content.rank_drum) output += `\t\t(drum ${value.content.rank_drum})\n`
//         if (value.content.rank_guitar) output += `\t\t(guitar ${value.content.rank_guitar})\n`
//         if (value.content.rank_bass) output += `\t\t(bass ${value.content.rank_bass})\n`
//         if (value.content.rank_vocals) output += `\t\t(vocals ${value.content.rank_vocals})\n`
//         if (value.content.rank_keys) output += `\t\t(keys ${value.content.rank_keys})\n`
//         if (value.content.rank_real_keys) output += `\t\t(real_keys ${value.content.rank_real_keys})\n`
//     }

//     if (value.content.rank_real_guitar) {
//         output += `\t\t(real_guitar ${value.content.rank_real_guitar})\n`
//     }
//     if (value.content.rank_real_bass) {
//         output += `\t\t(real_bass ${value.content.rank_real_bass})\n`
//     }

//     output += `\t\t(band ${value.content.rank_band}))\n`

//     if (value.content.solo && value.content.solo.length > 0) {
//         output += `\t(solo (${value.content.solo.join(' ')}))\n`
//     }

//     output += `\t(format ${value.content.format ? value.content.format : '10'})\n`
//     output += `\t(version ${value.content.version ? value.content.version : '30'})\n`
//     output += `\t(game_origin ${value.content.game_origin === undefined ? 'ugc_plus' : value.content.game_origin})\n`
//     if (value.content.encoding !== undefined && value.content.encoding !== 'latin1') {
//         output += `\t(encoding ${value.content.encoding})\n`
//     }
//     output += `\t(rating ${value.content.rating === undefined ? 4 : value.content.rating})\n`
//     output += `\t(genre ${value.content.genre === undefined ? 'other' : value.content.genre})\n`
//     if (value.content.sub_genre) {
//         output += `\t(sub_genre ${value.content.sub_genre})\n`
//     }
//     output += `\t(vocal_gender ${value.content.vocal_gender})\n`
//     output += `\t(year_released ${value.content.year_released})\n`
//     if (value.content.year_recorded) {
//         output += `\t(year_recorded ${value.content.year_recorded})\n`
//     }
//     output += `\t(album_art ${value.content.album_art ? 'TRUE' : 'FALSE'})\n`

//     if (value.content.album_name) {
//         output += `\t(album_name "${value.content.album_name.replaceAll('"', '\\q')}")\n`
//     }
//     if (value.content.album_track_number) {
//         output += `\t(album_track_number ${value.content.album_track_number})\n`
//     }
//     if (value.content.vocal_tonic_note !== undefined) {
//         output += `\t(vocal_tonic_note ${value.content.vocal_tonic_note})\n`
//     }
//     if (value.content.song_tonality !== undefined) {
//         output += `\t(song_tonality ${value.content.song_tonality})\n`
//     }
//     if (value.content.song_key !== undefined) {
//         output += `\t(song_key ${value.content.song_key})\n`
//     }
//     if (value.content.tuning_offset_cents !== undefined) {
//         output += `\t(tuning_offset_cents ${value.content.tuning_offset_cents})\n`
//     }
//     if (value.content.alternate_path) {
//         output += `\t(alternate_path ${value.content.alternate_path ? 'TRUE' : 'FALSE'})\n`
//     }
//     if (value.content.extra_authoring) {
//         output += `\t(extra_authoring (${value.content.extra_authoring.join(' ')}))\n`
//     }
//     if (value.content.pack_name) {
//         output += `\t(pack_name "${value.content.pack_name.replaceAll('"', '\\q')}")\n`
//     }
//     if (value.content.base_points) {
//         output += `\t(base_points ${value.content.base_points})\n`
//     }

//     if (options?.type === 'rb3') {
//         if (value.content.real_guitar_tuning) {
//             output += `\t(real_guitar_tuning (`
//             value.content.real_guitar_tuning.forEach((tuning, i) => {
//                 if (i === 0) {
//                     output += `${tuning}`
//                     return
//                 } else if (value.content.real_guitar_tuning && i === value.content.real_guitar_tuning.length - 1) {
//                     output += `${'\n\t\t\t'}${tuning}))${value.content.real_bass_tuning ? '\n' : ''}`
//                     return
//                 }
//                 output += `${'\n\t\t\t'}${tuning}`
//             })
//         }
//         if (value.content.real_bass_tuning) {
//             output += `\t(real_bass_tuning (`
//             value.content.real_bass_tuning.forEach((tuning, i) => {
//                 if (i === 0) {
//                     output += `${tuning}`
//                     return
//                 } else if (value.content.real_bass_tuning && i === value.content.real_bass_tuning.length - 1) {
//                     output += `${'\n\t\t\t'}${tuning}))${options?.placeCustomAttributes ? '\n' : ''}`
//                     return
//                 }
//                 output += `${'\n\t\t\t'}${tuning}`
//             })
//         }
//     } else {
//         if (value.content.real_guitar_tuning) {
//             output += `\t(real_guitar_tuning (`
//             value.content.real_guitar_tuning.forEach((tuning, i) => {
//                 if (i === 0) {
//                     output += `${tuning}`
//                     return
//                 } else if (value.content.real_guitar_tuning && i === value.content.real_guitar_tuning.length - 1) {
//                     output += `${' '}${tuning}))${value.content.real_bass_tuning ? '\n' : ''}`
//                     return
//                 }
//                 output += `${' '}${tuning}`
//             })
//         }
//         if (value.content.real_bass_tuning) {
//             output += `\t(real_bass_tuning (`
//             value.content.real_bass_tuning.forEach((tuning, i) => {
//                 if (i === 0) {
//                     output += `${tuning}`
//                     return
//                 } else if (value.content.real_bass_tuning && i === value.content.real_bass_tuning.length - 1) {
//                     output += `${' '}${tuning}))${options?.placeCustomAttributes ? '\n' : ''}`
//                     return
//                 }
//                 output += `${' '}${tuning}`
//             })
//         }
//     }
//     if (options?.placeCustomAttributes !== undefined && options?.placeCustomAttributes) {
//         output += `\n \n;DO NOT EDIT THE FOLLOWING LINES MANUALLY\n;Created using Magma: C3 Roks Edition v3.3.5\n;Song authored by ${value.content.author ? value.content.author : 'Unknown Charter'
//             }\n;Song=${value.content.name}\n;Language(s)=${value.content.languages
//                 ? value.content.languages.length === 1
//                     ? `${value.content.languages.join(',')},`
//                     : value.content.languages.join(',')
//                 : 'English,'
//             }\n;Karaoke=${value.content.karaoke ? 1 : 0}\n;Multitrack=${value.content.multitrack ? 1 : 0}\n;Convert=${value.content.convert ? 1 : 0
//             }\n;2xBass=${value.content.doubleKick ? 1 : 0}\n;RhythmKeys=${value.content.rhythmOnKeys ? 1 : 0}\n;RhythmBass=${value.content.rhythmOnBass ? 1 : 0
//             }\n;CATemh=${value.content.CATemh ? 1 : 0}\n;ExpertOnly=${value.content.expertOnly ? 1 : 0}\n`
//     }

//     output += `${options?.type === 'rb3_dlc' ? '\n' : ''})\n`
//     return output
// }

/**
 * Converts an array of parsed song objects back to `.dta` file contents string.
 * - - - -
 * @param {DTADocument[]} songs An array of parsed song objects.
 * @param {StringifyDataOptions} options `OPTIONAL` Customization options for the stringifying process. If an object
 * is not passed as argument at all, it will use default configurations to generate MAGMA C3's `.dta` file contents type.
 *
 * Only some values can be customized on the default option for maximum compatibility with other `.dta` file parsers.
 * @returns {string} A string representation of this parsed song object as a `.dta` file contents string.
 */
export const stringifyDTA = (songs: DTADocument[], options?: StringifyDataOptions): string => {
    if (options === undefined) {
        options = {
            placeCustomAttributes: true,
            useSpaces: true,
        } as StringifyDataOptions
    }

    let output = ''

    const { type, useSpaces } = options

    songs.forEach((value) => {
        if (type === 'rb3_dlc') output += stringifyRB3DLC(value, options as StringifyDataOptions)
        else output += stringifyDefault(value, options as StringifyDataOptions)
    })

    if (useSpaces !== undefined) {
        if (typeof useSpaces === 'boolean') {
            output = output.replace(/\t/g, '   ')
        } else {
            output = output.replace(/\t/g, ' '.repeat(useSpaces))
        }
    }

    return (
        output
            .split('\n')
            .filter((line) => line)
            .join('\n') + '\n'
    )
}

/**
 * Specific stringify method for MAGMA C3-generated `.dta` file contents.
 * - - - -
 * @param {DTADocument} value The parsed song you want to be stringified.
 * @param {StringifyDataOptions} options Customize options for the stringifying process.
 * @returns {string} A stringified version of the song.
 */
const stringifyDefault = (value: DTADocument, options: StringifyDataOptions): string => {
    const { guitarCores, omitUnusedRanks, placeCustomAttributes, wiiMode } = options

    const {
        id,
        name,
        artist,
        master,
        songname,
        context,
        tracks_count,
        pans,
        vols,
        vocal_parts,
        mute_volume,
        mute_volume_vocals,
        hopo_threshold,
        song_scroll_speed,
        bank,
        drum_bank,
        band_fail_cue,
        anim_tempo,
        song_length,
        preview,
        rank_drum,
        rank_bass,
        rank_guitar,
        rank_vocals,
        rank_keys,
        rank_real_keys,
        rank_real_guitar,
        rank_real_bass,
        rank_band,
        genre,
        vocal_gender,
        version,
        format,
        album_art,
        year_released,
        year_recorded,
        rating,
        sub_genre,
        song_id,
        solo,
        tuning_offset_cents,
        guide_pitch_volume,
        game_origin,
        encoding,
        album_name,
        album_track_number,
        vocal_tonic_note,
        song_tonality,
        song_key,
        real_guitar_tuning,
        real_bass_tuning,
        pack_name,
        base_points,
        author,
        languages,
        karaoke,
        multitrack,
        convert,
        doubleKick,
        rhythmOnKeys,
        rhythmOnBass,
        CATemh,
        expertOnly,
    } = value.content

    const [drum, bass, guitar, vocals, keys, backing, crowd] = tracks_count

    let trackCount = 0
    const guitarTrackStarts = drum + bass - 1
    const guitarTrackEnds = guitarTrackStarts + guitar
    const crowdTrackStarts = drum + bass + guitar + vocals + keys + backing

    let output = ''

    output += `(${genTabs()}'${id}'${genTabs()}(${genTabs(2)}'name'${genTabs(2)}"${name.replace(/"/g, '\\q')}"${genTabs()})${genTabs()}(${genTabs(2)}'artist'${genTabs(2)}"${artist.replace(/"/g, '\\q')}"${genTabs()})${genTabs()}('master' ${master ? 1 : 0})${context ? `${genTabs()}('context' ${context})` : ''}${genTabs()}(${genTabs(2)}'song'${genTabs(2)}(${genTabs(3)}'name'${genTabs(3)}"${
        wiiMode ? `dlc/${wiiMode.gen}/${wiiMode.slot.toString().padStart(3, '0')}/content/songs/${songname}/${songname}` : `songs/${songname}/${songname}`
    }"${genTabs(2)})${genTabs(2)}(${genTabs(3)}'tracks_count'${genTabs(3)}(${tracks_count.join(' ')})${genTabs(2)})${genTabs(2)}(${genTabs(3)}'tracks'${genTabs(3)}(${genTabs(4)}`

    if (drum) {
        output += `(${genTabs(5)}'drum'${genTabs(5)}(${trackCountStringGenerator(trackCount, drum)})${genTabs(4)})`
        trackCount += drum
    }
    if (bass) {
        if (drum !== 0) output += `${genTabs(4)}`
        output += `(${genTabs(5)}'bass'${genTabs(5)}(${trackCountStringGenerator(trackCount, bass)})${genTabs(4)})`
        trackCount += bass
    }
    if (guitar) {
        if (drum !== 0 || bass !== 0) output += `${genTabs(4)}`
        output += `(${genTabs(5)}'guitar'${genTabs(5)}(${trackCountStringGenerator(trackCount, guitar)})${genTabs(4)})`
        trackCount += guitar
    }
    if (vocals) {
        if (drum !== 0 || bass !== 0 || guitar !== 0) output += `${genTabs(4)}`
        output += `(${genTabs(5)}'vocals'${genTabs(5)}(${trackCountStringGenerator(trackCount, vocals)})${genTabs(4)})`
        trackCount += vocals
    }
    if (keys) {
        if (drum !== 0 || bass !== 0 || guitar !== 0 || vocals !== 0) output += `${genTabs(4)}`
        output += `(${genTabs(5)}'keys'${genTabs(5)}(${trackCountStringGenerator(trackCount, keys)})${genTabs(4)})`
        trackCount += keys
    }
    output += `${genTabs(3)})${genTabs(2)})${genTabs(2)}(${genTabs(3)}'pans'${genTabs(3)}(`

    pans.forEach((num, i) => {
        output += `${num.toFixed(2)}${i === vols.length - 1 ? `)${genTabs(2)})` : ' '}`
    })

    output += `${genTabs(2)}(${genTabs(3)}'vols'${genTabs(3)}(`

    vols.forEach((num, i) => {
        output += `${num.toFixed(2)}${i === vols.length - 1 ? `)${genTabs(2)})` : ' '}`
    })

    output += `${genTabs(2)}(${genTabs(3)}'cores'${genTabs(3)}(`

    vols.forEach((_, i) => {
        if (guitarCores !== undefined && guitarCores) {
            output += `${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}${i === vols.length - 1 ? `)${genTabs(2)})` : ' '}`
        } else {
            output += `-1${i === vols.length - 1 ? `)${genTabs(2)})` : ' '}`
        }
        return
    })

    output += `${crowd ? `${genTabs(2)}('crowd_channels' ${trackCountStringGenerator(crowdTrackStarts, 2)})` : ``}${genTabs(2)}('vocal_parts' ${vocal_parts === undefined ? (vocals > 0 ? 1 : 0) : vocal_parts})${genTabs(2)}(${genTabs(3)}'drum_solo'${genTabs(3)}(${genTabs(4)}'seqs'${genTabs(4)}('kick.cue' 'snare.cue' 'tom1.cue' 'tom2.cue' 'crash.cue')${genTabs(3)})${genTabs(2)})${genTabs(2)}(${genTabs(3)}'drum_freestyle'${genTabs(3)}(${genTabs(4)}'seqs'${genTabs(
        4
    )}('kick.cue' 'snare.cue' 'hat.cue' 'ride.cue' 'crash.cue')${genTabs(3)})${genTabs(2)})${genTabs(2)}(mute_volume ${mute_volume === undefined ? '-96' : mute_volume})${genTabs(2)}(mute_volume_vocals ${mute_volume_vocals === undefined ? '-12' : mute_volume_vocals})${genTabs(2)}(hopo_threshold ${hopo_threshold === undefined ? '170' : hopo_threshold})${genTabs()})${genTabs()}('song_scroll_speed' ${song_scroll_speed === undefined ? '2300' : song_scroll_speed})${genTabs()}(${genTabs(
        2
    )}'bank'${genTabs(2)}"${bank}"${genTabs()})${genTabs()}(drum_bank ${drum_bank})${genTabs()}('anim_tempo' ${anim_tempo})${band_fail_cue === undefined ? '' : `${genTabs()}(band_fail_cue ${band_fail_cue})`}${genTabs()}('song_length' ${song_length})${genTabs()}('preview' ${preview.join(' ')})${genTabs()}(${genTabs(2)}'rank'`

    if (omitUnusedRanks && (rank_drum === undefined || rank_drum === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}('drum' ${rank_drum === undefined ? 0 : rank_drum})`
    }

    if (omitUnusedRanks && (rank_guitar === undefined || rank_guitar === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}('guitar' ${rank_guitar === undefined ? 0 : rank_guitar})`
    }

    if (omitUnusedRanks && (rank_bass === undefined || rank_bass === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}('bass' ${rank_bass === undefined ? 0 : rank_bass})`
    }

    if (omitUnusedRanks && (rank_vocals === undefined || rank_vocals === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}('vocals' ${rank_vocals === undefined ? 0 : rank_vocals})`
    }

    if (omitUnusedRanks && (rank_keys === undefined || rank_keys === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}('keys' ${rank_keys === undefined ? 0 : rank_keys})`
    }

    if (omitUnusedRanks && (rank_real_keys === undefined || rank_real_keys === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}('real_keys' ${rank_real_keys === undefined ? 0 : rank_real_keys})`
    }

    if (omitUnusedRanks && (rank_real_guitar === undefined || rank_real_guitar === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}('real_guitar' ${rank_real_guitar === undefined ? 0 : rank_real_guitar})`
    }

    if (omitUnusedRanks && (rank_real_bass === undefined || rank_real_bass === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}('real_bass' ${rank_real_bass === undefined ? 0 : rank_real_bass})`
    }

    output += `${genTabs(2)}('band' ${rank_band})${genTabs()})${genTabs()}('genre' '${genre === undefined ? 'other' : genre}')${genTabs()}('vocal_gender' '${vocal_gender}')${genTabs()}('version' ${version === undefined ? 30 : version})${genTabs()}('format' ${format === undefined ? 10 : format})${genTabs()}('album_art' ${album_art ? 1 : 0})${genTabs()}('year_released' ${year_released})${year_recorded === undefined ? '' : `${genTabs()}('year_recorded' ${year_recorded})`}${genTabs()}('rating' ${
        rating === undefined ? 4 : rating
    })${sub_genre ? `${genTabs()}('sub_genre' '${sub_genre}')` : ''}${genTabs()}('song_id' ${song_id})`

    if (solo && solo.length > 0) {
        output += `${genTabs()}(solo (`

        solo.forEach((flag, flagIndex) => {
            if (flagIndex === solo.length - 1) {
                output += `${flag}))`
            } else {
                output += `${flag} `
            }
        })
    }

    output += `${genTabs()}('tuning_offset_cents' ${tuning_offset_cents === undefined ? 0 : tuning_offset_cents})${genTabs()}('guide_pitch_volume' ${guide_pitch_volume === undefined ? '-3.00' : guide_pitch_volume})${genTabs()}('game_origin' '${game_origin === undefined ? 'ugc_plus' : game_origin}')${genTabs()}('encoding' '${encoding === undefined ? 'latin1' : encoding}')${album_name ? `${genTabs()}(${genTabs(2)}'album_name'${genTabs(2)}"${album_name.replace(/"/g, '\\q')}"${genTabs()})` : ''}${
        album_track_number ? `${genTabs()}('album_track_number' ${album_track_number})` : ''
    }${vocal_tonic_note === undefined ? '' : `${genTabs()}(vocal_tonic_note ${vocal_tonic_note})`}${song_tonality === undefined ? '' : `${genTabs()}(song_tonality ${song_tonality})`}${song_key === undefined ? '' : `${genTabs()}(song_key ${song_key})`}${real_guitar_tuning ? `${genTabs()}(real_guitar_tuning (${real_guitar_tuning.join(' ')}))` : ''}${real_bass_tuning ? `${genTabs()}(real_bass_tuning (${real_bass_tuning.join(' ')}))` : ''}${
        pack_name ? `${genTabs(1)}(pack_name "${pack_name.replace(/"/g, '\\q')}")` : ''
    }${base_points ? `${genTabs(1)}(base_points ${base_points})` : ''}`

    if (placeCustomAttributes === undefined || placeCustomAttributes === true) {
        output += `${genTabs()}${genTabs(0)};DO NOT EDIT THE FOLLOWING LINES MANUALLY${genTabs(0)};Created using Magma: C3 Roks Edition v3.3.5${genTabs(0)};Song authored by ${author ? author : 'Unknown Charter'}${genTabs(0)};Song=${name}${genTabs(0)};Language(s)=${languages ? (languages.length === 1 ? `${languages[0]},` : `${languages.join(',')},`) : `English,`}${genTabs(0)};Karaoke=${karaoke ? 1 : 0}${genTabs(0)};Multitrack=${multitrack ? 1 : 0}${genTabs(0)};Convert=${convert ? 1 : 0}${genTabs(
            0
        )};2xBass=${doubleKick ? 1 : 0}${genTabs(0)};RhythmKeys=${rhythmOnKeys ? 1 : 0}${genTabs(0)};RhythmBass=${rhythmOnBass ? 1 : 0}${genTabs(0)};CATemh=${CATemh ? 1 : 0}${genTabs(0)};ExpertOnly=${expertOnly ? 1 : 0}`
    }

    output += `${genTabs(0)})${genTabs(0)}`

    return output
}

/**
 * Specific stringify method to generate RB3 DLC `.dta` file contents type.
 * - - - -
 * @param {DTADocument} value The parsed song you want to be stringified.
 * @param {StringifyDataOptions | undefined} options Customize options for the stringifying process.
 * @returns {string} A stringified version of the song.
 */
const stringifyRB3DLC = (value: DTADocument, options: StringifyDataOptions): string => {
    const { guitarCores, omitUnusedRanks, placeCustomAttributes, wiiMode } = options

    const {
        id,
        name,
        artist,
        master,
        songname,
        context,
        tracks_count,
        pans,
        vols,
        vocal_parts,
        mute_volume,
        mute_volume_vocals,
        hopo_threshold,
        song_scroll_speed,
        bank,
        drum_bank,
        band_fail_cue,
        anim_tempo,
        song_length,
        preview,
        rank_drum,
        rank_bass,
        rank_guitar,
        rank_vocals,
        rank_keys,
        rank_real_keys,
        rank_real_guitar,
        rank_real_bass,
        rank_band,
        genre,
        vocal_gender,
        version,
        format,
        album_art,
        year_released,
        year_recorded,
        rating,
        sub_genre,
        song_id,
        solo,
        tuning_offset_cents,
        guide_pitch_volume,
        game_origin,
        encoding,
        album_name,
        album_track_number,
        vocal_tonic_note,
        song_tonality,
        song_key,
        real_guitar_tuning,
        real_bass_tuning,
        pack_name,
        base_points,
        author,
        languages,
        karaoke,
        multitrack,
        convert,
        doubleKick,
        rhythmOnKeys,
        rhythmOnBass,
        CATemh,
        expertOnly,
    } = value.content

    const [drum, bass, guitar, vocals, keys, backing, crowd] = tracks_count

    let trackCount = 0
    const guitarTrackStarts = drum + bass - 1
    const guitarTrackEnds = guitarTrackStarts + guitar
    const crowdTrackStarts = drum + bass + guitar + vocals + keys + backing

    let output = ''

    output += `(${id}${genTabs()}(name "${name.replace(/"/g, '\\q')}")${genTabs()}(artist "${artist.replace(/"/g, '\\q')}")${genTabs()}(master ${master ? 'TRUE' : 'FALSE'})${context ? `${genTabs()}(context ${context})` : ''}${genTabs()}(song_id ${song_id})${genTabs()}(song${genTabs(2)}(name "${wiiMode ? `dlc/${wiiMode.gen}/${wiiMode.slot.toString().padStart(3, '0')}/content/songs/${songname}/${songname}` : `songs/${songname}/${songname}`}")${genTabs(2)}(tracks${genTabs(3)}(`

    if (drum) {
        output += `(drum (${trackCountStringGenerator(trackCount, drum)}))`
        trackCount += drum
        if (!bass && !guitar && !vocals && !keys) output += `)${genTabs(2)})`
        else output += `${genTabs(3)} `
    }

    if (bass) {
        output += `(bass (${trackCountStringGenerator(trackCount, bass)}))`
        trackCount += bass
        if (!guitar && !vocals && !keys) output += `)${genTabs(2)})`
        else output += `${genTabs(3)} `
    }

    if (guitar) {
        output += `(guitar (${trackCountStringGenerator(trackCount, guitar)}))`
        trackCount += guitar
        if (!vocals && !keys) output += `)${genTabs(2)})`
        else output += `${genTabs(3)} `
    }

    if (vocals) {
        output += `(vocals (${trackCountStringGenerator(trackCount, vocals)}))`
        trackCount += vocals
        if (!keys) output += `)${genTabs(2)})`
        else output += `${genTabs(3)} `
    }

    if (keys) {
        output += `(keys (${trackCountStringGenerator(trackCount, keys)})))${genTabs(2)})`
        trackCount += keys
    }

    output += `${genTabs(2)}(pans (`

    pans.forEach((num, i) => {
        output += `${num.toFixed(1)}${i === pans.length - 1 ? `))` : ` `}`
    })

    output += `${genTabs(2)}(vols (`

    vols.forEach((num, i) => {
        output += `${num.toFixed(1)}${i === pans.length - 1 ? `))` : ` `}`
    })

    output += `${genTabs(2)}(cores (`

    vols.forEach((_, i) => {
        if (guitarCores !== undefined && guitarCores) {
            output += `${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}${i === vols.length - 1 ? `))` : ' '}`
        } else {
            output += `-1${i === vols.length - 1 ? `))` : ' '}`
        }
        return
    })

    output += `${crowd ? `${genTabs(2)}(crowd_channels ${trackCountStringGenerator(crowdTrackStarts, 2)})` : ``}${genTabs(2)}(vocal_parts ${vocal_parts === undefined ? (vocals > 0 ? 1 : 0) : vocal_parts})${genTabs(2)}(drum_solo${genTabs(3)}(seqs (kick.cue snare.cue tom1.cue tom2.cue crash.cue))${genTabs(2)})${genTabs(2)}(drum_freestyle${genTabs(3)}(seqs (kick.cue snare.cue hat.cue ride.cue crash.cue))${genTabs(2)})${mute_volume === undefined ? `` : `${genTabs(2)}(mute_volume ${mute_volume})`}${
        mute_volume_vocals === undefined ? `` : `${genTabs(2)}(mute_volume_vocals ${mute_volume_vocals}`
    }${hopo_threshold === undefined ? `` : `${genTabs(2)}(hopo_threshold ${hopo_threshold})`}${genTabs()})${genTabs()}(bank ${bank})${drum_bank === 'sfx/kit01_bank.milo' ? `` : `${genTabs()}(drum_bank ${drum_bank})`}${genTabs()}(anim_tempo ${anim_tempo === 16 ? `kTempoSlow` : anim_tempo === 32 ? `kTempoMedium` : `kTempoFast`})${band_fail_cue === undefined ? `` : `${genTabs()}(band_fail_cue ${band_fail_cue})`}${genTabs()}(song_scroll_speed ${
        song_scroll_speed === undefined ? 2300 : song_scroll_speed
    })${genTabs()}(preview ${preview.join(' ')})${genTabs()}(song_length ${song_length})`

    if (solo && solo.length > 0) {
        output += `${genTabs()}(solo (`

        solo.forEach((flag, flagIndex) => {
            if (flagIndex === solo.length - 1) {
                output += `${flag}))`
            } else {
                output += `${flag} `
            }
        })
    }

    output += `${genTabs()}(rank`

    if (omitUnusedRanks && (rank_drum === undefined || rank_drum === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}(drum ${rank_drum === undefined ? 0 : rank_drum})`
    }

    if (omitUnusedRanks && (rank_guitar === undefined || rank_guitar === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}(guitar ${rank_guitar === undefined ? 0 : rank_guitar})`
    }

    if (omitUnusedRanks && (rank_bass === undefined || rank_bass === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}(bass ${rank_bass === undefined ? 0 : rank_bass})`
    }

    if (omitUnusedRanks && (rank_vocals === undefined || rank_vocals === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}(vocals ${rank_vocals === undefined ? 0 : rank_vocals})`
    }

    if (omitUnusedRanks && (rank_keys === undefined || rank_keys === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}(keys ${rank_keys === undefined ? 0 : rank_keys})`
    }

    if (omitUnusedRanks && (rank_real_keys === undefined || rank_real_keys === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}(real_keys ${rank_real_keys === undefined ? 0 : rank_real_keys})`
    }

    if (omitUnusedRanks && (rank_real_guitar === undefined || rank_real_guitar === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}(real_guitar ${rank_real_guitar === undefined ? 0 : rank_real_guitar})`
    }

    if (omitUnusedRanks && (rank_real_bass === undefined || rank_real_bass === 0)) {
        // Do nothing
    } else {
        output += `${genTabs(2)}(real_bass ${rank_real_bass === undefined ? 0 : rank_real_bass})`
    }

    output += `${genTabs(2)}(band ${rank_band})${genTabs()})${genTabs()}(format ${format === undefined ? 10 : format})${genTabs()}(version ${version === undefined ? 30 : version})${genTabs()}(game_origin ${game_origin === undefined ? 'ugc_plus' : game_origin})${genTabs()}(rating ${rating === undefined ? 4 : rating})${genTabs()}(genre ${genre === undefined ? 'other' : genre})${genTabs()}(sub_genre ${
        sub_genre === undefined ? 'subgenre_other' : sub_genre
    })${genTabs()}(vocal_gender ${vocal_gender})${genTabs()}(year_released ${year_released})${year_recorded ? `${genTabs()}(year_recorded ${year_recorded})` : ``}${genTabs()}(album_art ${album_art ? 'TRUE' : 'FALSE'})${album_name ? `${genTabs()}(album_name "${album_name.replace(/"/g, '\\q')}")` : ``}${album_track_number ? `${genTabs()}(album_track_number ${album_track_number})` : ``}${vocal_tonic_note === undefined ? `` : `${genTabs()}(vocal_tonic_note ${vocal_tonic_note})`}${
        song_tonality === undefined ? `` : `${genTabs()}(song_tonality ${song_tonality})`
    }${song_key === undefined ? `` : `${genTabs()}(song_key ${song_key})`}${tuning_offset_cents === undefined ? `` : `${genTabs()}(tuning_offset_cents ${tuning_offset_cents})`}${guide_pitch_volume === undefined ? `` : `${genTabs()}(guide_pitch_volume ${guide_pitch_volume.toFixed(1)})`}${real_guitar_tuning ? `${genTabs()}(real_guitar_tuning (${real_guitar_tuning.join(' ')}))` : ``}${real_bass_tuning ? `${genTabs()}(real_bass_tuning (${real_bass_tuning.join(' ')}))` : ``}${
        encoding === undefined || encoding === 'latin1' ? `` : `${genTabs()}(encoding ${encoding})`
    }${pack_name ? `${genTabs()}(pack_name "${pack_name.replace(/"/g, '\\q')}")` : ``}${base_points ? `${genTabs()}(base_points ${base_points})` : ``}`

    if (placeCustomAttributes === undefined || placeCustomAttributes === true) {
        output += `${genTabs()}${genTabs(0)};DO NOT EDIT THE FOLLOWING LINES MANUALLY${genTabs(0)};Created using Magma: C3 Roks Edition v3.3.5${genTabs(0)};Song authored by ${author ? author : 'Unknown Charter'}${genTabs(0)};Song=${name}${genTabs(0)};Language(s)=${languages ? (languages.length === 1 ? `${languages[0]},` : `${languages.join(',')},`) : `English,`}${genTabs(0)};Karaoke=${karaoke ? 1 : 0}${genTabs(0)};Multitrack=${multitrack ? 1 : 0}${genTabs(0)};Convert=${convert ? 1 : 0}${genTabs(
            0
        )};2xBass=${doubleKick ? 1 : 0}${genTabs(0)};RhythmKeys=${rhythmOnKeys ? 1 : 0}${genTabs(0)};RhythmBass=${rhythmOnBass ? 1 : 0}${genTabs(0)};CATemh=${CATemh ? 1 : 0}${genTabs(0)};ExpertOnly=${expertOnly ? 1 : 0}`
    }

    output += `${genTabs(0)})${genTabs(0)}`

    return output
}
