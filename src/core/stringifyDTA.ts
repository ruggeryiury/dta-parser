import { DTADocument } from '../@types/DTADocument'

/**
 * Internal function to generate the tracks' count.
 */
const trackOperator = (track: number, add: number): string => {
    let returnString = ''
    const iterator = Array(add).fill(0)
    iterator.forEach((value, i) => {
        if (i === iterator.length - 1) {
            returnString += `${track}`
            return
        }

        returnString += `${track} `
        track++
        return
    })
    return returnString
}

/**
 * Internal function to generate the DTA file content (MAGMA).
 */
const dtaOutputStringGenerator = (value: DTADocument): string => {
    let output = ''
    let track = 0
    output += `(\n\t'${
        value.rawContent.songname
    }'\n\t(\n\t\t'name'\n\t\t"${value.get(
        'name'
    )}"\n\t)\n\t(\n\t\t'artist'\n\t\t"${value.get(
        'artist'
    )}"\n\t)\n\t('master' ${
        value.rawContent.master ? 1 : 0
    })\n\t(\n\t\t'song'\n\t\t(\n\t\t\t'name'\n\t\t\t"songs/${
        value.rawContent.songname
    }/${
        value.rawContent.songname
    }"\n\t\t)\n\t\t(\n\t\t\t'tracks_count'\n\t\t\t(${
        value.rawContent.tracks_count.at(-1) === 0
            ? value.rawContent.tracks_count.slice(0, -1).join(' ')
            : value.rawContent.tracks_count.join(' ')
    })\n\t\t)\n\t\t(\n\t\t\t'tracks'\n\t\t\t(\n\t\t\t`
    if (value.rawContent.tracks_count[0]) {
        output += `\t(\t\n\t\t\t\t\t'drum'\n\t\t\t\t\t(`
        output += trackOperator(track, value.rawContent.tracks_count[0])
        track += value.rawContent.tracks_count[0]
        output += `)\n\t\t\t\t)\n\t\t\t`
    }
    if (value.rawContent.tracks_count[1]) {
        output += `\t(\n\t\t\t\t\t'bass'\n\t\t\t\t\t(`
        output += trackOperator(track, value.rawContent.tracks_count[1])
        track += value.rawContent.tracks_count[1]
        output += `)\n\t\t\t\t)\n\t\t\t`
    }
    if (value.rawContent.tracks_count[2]) {
        output += `\t(\n\t\t\t\t\t'guitar'\n\t\t\t\t\t(`
        output += trackOperator(track, value.rawContent.tracks_count[2])
        track += value.rawContent.tracks_count[2]
        output += `)\n\t\t\t\t)\n\t\t\t`
    }
    if (value.rawContent.tracks_count[3]) {
        output += `\t(\n\t\t\t\t\t'vocals'\n\t\t\t\t\t(`
        output += trackOperator(track, value.rawContent.tracks_count[3])
        track += value.rawContent.tracks_count[3]
        output += `)\n\t\t\t\t)\n\t\t\t`
    }
    if (value.rawContent.tracks_count[4]) {
        output += `\t(\n\t\t\t\t\t'keys'\n\t\t\t\t\t(`
        output += trackOperator(track, value.rawContent.tracks_count[4])
        track += value.rawContent.tracks_count[4]
        output += `)\n\t\t\t\t)\n\t\t\t`
    }
    output += `)\n\t\t)\n\t\t(\n\t\t\t'pans'\n\t\t\t(`
    value.rawContent.pans.forEach((num, i) => {
        if (i === value.rawContent.pans.length - 1) {
            output += `${num.toFixed(2)})`
            return
        }

        output += `${num.toFixed(2)} `
        return
    })
    output += `\n\t\t)\n\t\t(\n\t\t\t'vols'\n\t\t\t(`
    value.rawContent.vols.forEach((num, i) => {
        if (i === value.rawContent.vols.length - 1) {
            output += `${num.toFixed(2)})`
            return
        }

        output += `${num.toFixed(2)} `
        return
    })
    output += `\n\t\t)\n\t\t(\n\t\t\t'cores'\n\t\t\t(`
    value.rawContent.vols.forEach((num, i) => {
        if (i === value.rawContent.vols.length - 1) {
            output += `-1)`
            return
        }

        output += `-1 `
        return
    })
    output += `\n\t\t)\n\t\t('vocal_parts' ${
        value.rawContent.vocal_parts
    })\n\t\t(\n\t\t\t'drum_solo'\n\t\t\t(\n\t\t\t\t'seqs'\n\t\t\t\t('kick.cue' 'snare.cue' 'tom1.cue' 'tom2.cue' 'crash.cue')\n\t\t\t)\n\t\t)\n\t\t(\n\t\t\t'drum_freestyle'\n\t\t\t(\n\t\t\t\t'seqs'\n\t\t\t\t('kick.cue' 'snare.cue' 'hat.cue' 'ride.cue' 'crash.cue')\n\t\t\t)\n\t\t)\n\t\t(mute_volume ${
        value.rawContent.mute_volume
    })\n\t\t(mute_volume_vocals ${
        value.rawContent.mute_volume_vocals
    })\n\t\t(hopo_threshold ${
        value.rawContent.hopo_threshold
    })\n\t)\n\t('song_scroll_speed' ${
        value.rawContent.song_scroll_speed
    })\n\t(\n\t\t'bank'\n\t\t"${value.rawContent.bank}"\n\t)\n\t(drum_bank ${
        value.rawContent.drum_bank
    })\n\t('anim_tempo' ${value.rawContent.anim_tempo})\n\t('song_length' ${
        value.rawContent.song_length
    })\n\t('preview' ${value.rawContent.preview.join(
        ' '
    )})\n\t(\n\t\t'rank'\n\t\t`
    if (value.rawContent.rank_drum) {
        output += `('drum' ${value.rawContent.rank_drum})\n\t\t`
    } else {
        output += `('drum' 0)\n\t\t`
    }
    if (value.rawContent.rank_guitar) {
        output += `('guitar' ${value.rawContent.rank_guitar})\n\t\t`
    } else {
        output += `('guitar' 0)\n\t\t`
    }
    if (value.rawContent.rank_bass) {
        output += `('bass' ${value.rawContent.rank_bass})\n\t\t`
    } else {
        output += `('bass' 0)\n\t\t`
    }
    if (value.rawContent.rank_vocals) {
        output += `('vocals' ${value.rawContent.rank_vocals})\n\t\t`
    } else {
        output += `('vocals' 0)\n\t\t`
    }
    if (value.rawContent.rank_keys) {
        output += `('keys' ${value.rawContent.rank_keys})\n\t\t`
    } else {
        output += `('keys' 0)\n\t\t`
    }
    if (value.rawContent.rank_real_keys) {
        output += `('real_keys' ${value.rawContent.rank_real_keys})\n\t\t`
    } else {
        output += `('real_keys' 0)\n\t\t`
    }
    if (value.rawContent.rank_real_guitar) {
        output += `('real_guitar' ${value.rawContent.rank_real_guitar})\n\t\t`
    }
    if (value.rawContent.rank_real_bass) {
        output += `('real_bass' ${value.rawContent.rank_real_bass})\n\t\t`
    }
    output += `('band' ${value.rawContent.rank_band})\n\t)\n\t('genre' '${
        value.rawContent.genre
    }')\n\t('vocal_gender' '${value.rawContent.vocal_gender}')\n\t('version' ${
        value.rawContent.version
    })\n\t('format' ${value.rawContent.format})\n\t('album_art' ${
        value.rawContent.album_art ? 1 : 0
    })\n\t('year_released' ${value.rawContent.year_released})\n\t`
    if (value.rawContent.year_recorded) {
        output += `('year_recorded' ${value.rawContent.year_recorded})`
    }
    output += `('rating' ${value.rawContent.rating})\n\t('sub_genre' '${value.rawContent.sub_genre}')\n\t('song_id' ${value.rawContent.song_id})\n\t`
    if (value.rawContent.solo && Array.isArray(value.rawContent.solo)) {
        output += `(solo (${value.rawContent.solo.join(' ')}))\n\t`
    }
    output += `('tuning_offset_cents' ${
        value.rawContent.tuning_offset_cents
    })\n\t('guide_pitch_volume' ${value.rawContent.guide_pitch_volume.toFixed(
        2
    )})\n\t('game_origin' '${value.rawContent.game_origin}')\n\t('encoding' '${
        value.rawContent.encoding
    }')\n`
    if (value.rawContent.album_name) {
        output += `\t(\n\t\t'album_name'\n\t\t"${value.rawContent.album_name}"\n\t)\n`
    }
    if (value.rawContent.album_track_number) {
        output += `\t('album_track_number' ${value.rawContent.album_track_number})\n`
    }
    if (value.rawContent.vocal_tonic_note !== undefined) {
        output += `\t(vocal_tonic_note ${value.rawContent.vocal_tonic_note})\n`
    }
    if (value.rawContent.song_tonality !== undefined) {
        output += `\t(song_tonality ${value.rawContent.song_tonality})\n`
    }
    if (value.rawContent.song_key !== undefined) {
        output += `\t(song_key ${value.rawContent.song_key})\n`
    }
    if (
        value.rawContent.real_guitar_tuning !== undefined &&
        Array.isArray(value.rawContent.real_guitar_tuning)
    ) {
        output += `\t(real_guitar_tuning (${value.rawContent.real_guitar_tuning.join(
            ' '
        )}))\n`
    }
    if (
        value.rawContent.real_bass_tuning !== undefined &&
        Array.isArray(value.rawContent.real_bass_tuning)
    ) {
        output += `\t(real_bass_tuning (${value.rawContent.real_bass_tuning.join(
            ' '
        )}))\n`
    }
    if (value.customContent) {
        output += `\n;DO NOT EDIT THE FOLLOWING LINES MANUALLY\n;Created using Magma: C3 Roks Edition v3.3.5\n;Song authored by ${
            value.customContent.author ? value.customContent.author : '???'
        }\n;Song=${value.get('name')}\n;Language(s)=${
            value.customContent.languages
                ? value.customContent.languages.join(',')
                : 'English'
        },\n;Karaoke=${value.customContent.karaoke ? 1 : 0}\n;Multitrack=${
            value.customContent.multitrack ? 1 : 0
        }\n;Convert=${value.customContent.convert ? 1 : 0}\n;2xBass=${
            value.customContent.doubleKick ? 1 : 0
        }\n;RhythmKeys=${
            value.customContent.rhythmOnKeys ? 1 : 0
        }\n;RhythmBass=${value.customContent.rhythmOnBass ? 1 : 0}\n;CATemh=${
            value.customContent.CATemh ? 1 : 0
        }\n;ExpertOnly=${value.customContent.expertOnly ? 1 : 0}\n`
    }

    output += `)\n`

    return output
}

/**
 * Stringify a `DTADocument[]` back to .dta file contents.
 * @returns A DTA file content.
 * @since v0.1.2
 */
export const stringifyDTA = (
    /**
     * An `Array` of parsed songs.
     */
    dtaArray: DTADocument[]
): string => {
    let output = ''
    dtaArray.forEach((value) => {
        output += dtaOutputStringGenerator(value)
    })

    return output.replace(/\t/g, '   ')
}
