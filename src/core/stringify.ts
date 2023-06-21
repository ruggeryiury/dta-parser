import { DTADocument } from '../@types/DTADocument'

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
const stringifyDTADocumentC3 = (value: DTADocument): string => {
    let output = ''
    let trackCount = 0
    output += `(\n`
    output += `\t'${value.content.id}'\n`
    output += `\t(\n\t\t'name'\n\t\t"${value.content.name}"\n\t)\n`
    output += `\t(\n\t\t'artist'\n\t\t"${value.content.artist}"\n\t)\n`
    output += `\t('master' ${value.content.master ? '1' : '0'})\n`
    output += `\t(\n\t\t'song'\n\t\t(\n\t\t\t'name'\n\t\t\t"songs/${value.content.songname}/${value.content.songname}"\n\t\t)\n`
    output += `\t\t(\n\t\t\t'tracks_count'\n\t\t\t(${value.content.tracks_count.join(
        ' '
    )})\n\t\t)\n`
    output += `\t\t(\n\t\t\t'tracks'\n\t\t\t(\n`
    if (value.content.tracks_count[0]) {
        output += `\t\t\t\t(\n\t\t\t\t\t'drum'\n\t\t\t\t\t(${trackCountIterator(
            trackCount,
            value.content.tracks_count[0]
        )})\n\t\t\t\t)\n`
        trackCount += value.content.tracks_count[0]
    }
    if (value.content.tracks_count[1]) {
        output += `\t\t\t\t(\n\t\t\t\t\t'bass'\n\t\t\t\t\t(${trackCountIterator(
            trackCount,
            value.content.tracks_count[1]
        )})\n\t\t\t\t)\n`
        trackCount += value.content.tracks_count[1]
    }
    if (value.content.tracks_count[2]) {
        output += `\t\t\t\t(\n\t\t\t\t\t'guitar'\n\t\t\t\t\t(${trackCountIterator(
            trackCount,
            value.content.tracks_count[2]
        )})\n\t\t\t\t)\n`
        trackCount += value.content.tracks_count[2]
    }
    if (value.content.tracks_count[3]) {
        output += `\t\t\t\t(\n\t\t\t\t\t'vocals'\n\t\t\t\t\t(${trackCountIterator(
            trackCount,
            value.content.tracks_count[3]
        )})\n\t\t\t\t)\n`
        trackCount += value.content.tracks_count[3]
    }
    if (value.content.tracks_count[4]) {
        output += `\t\t\t\t(\n\t\t\t\t\t'keys'\n\t\t\t\t\t(${trackCountIterator(
            trackCount,
            value.content.tracks_count[4]
        )})\n\t\t\t\t)\n`
        trackCount += value.content.tracks_count[4]
    }
    output += `\t\t\t)\n\t\t)\n`
    output += `\t\t(\n\t\t\t'pans'\n\t\t\t(`
    value.content.pans.forEach((num, i) => {
        output += `${num.toFixed(2)}${
            i === value.content.pans.length - 1 ? '' : ' '
        }`
        return
    })
    output += `)\n\t\t)\n`
    output += `\t\t(\n\t\t\t'vols'\n\t\t\t(`
    value.content.vols.forEach((num, i) => {
        output += `${num.toFixed(2)}${
            i === value.content.vols.length - 1 ? '' : ' '
        }`
        return
    })
    output += `)\n\t\t)\n`
    output += `\t\t(\n\t\t\t'cores'\n\t\t\t(`
    value.content.vols.forEach((num, i) => {
        output += `-1${i === value.content.vols.length - 1 ? '' : ' '}`
        return
    })
    output += `)\n\t\t)\n`
    output += `\t\t('vocal_parts' ${value.content.vocal_parts})\n`
    output += `\t\t(\n\t\t\t'drum_solo'\n\t\t\t(\n\t\t\t\t'seqs'\n\t\t\t\t('kick.cue' 'snare.cue' 'tom1.cue' 'tom2.cue' 'crash.cue')\n\t\t\t)\n\t\t)\n`
    output += `\t\t(\n\t\t\t'drum_freestyle'\n\t\t\t(\n\t\t\t\t'seqs'\n\t\t\t\t('kick.cue' 'snare.cue' 'hat.cue' 'ride.cue' 'crash.cue')\n\t\t\t)\n\t\t)\n`
    output += `\t\t(mute_volume ${
        value.content.mute_volume ? value.content.mute_volume : '-96'
    })\n`
    output += `\t\t(mute_volume_vocals ${
        value.content.mute_volume_vocals
            ? value.content.mute_volume_vocals
            : '-12'
    })\n`
    output += `\t\t(hopo_threshold ${
        value.content.hopo_threshold ? value.content.hopo_threshold : '170'
    })\n`
    output += `\t)\n`
    output += `\t('song_scroll_speed' ${
        value.content.song_scroll_speed
            ? value.content.song_scroll_speed
            : '2300'
    })\n`
    output += `\t(\n\t\t'bank'\n\t\t"${value.content.bank}"\n\t)\n`
    output += `\t(drum_bank ${value.content.drum_bank})\n`
    output += `\t('anim_tempo' ${value.content.anim_tempo})\n`
    output += `\t('song_length' ${value.content.song_length})\n`
    output += `\t('preview' ${value.content.preview.join(' ')})\n`
    output += `\t(\n\t\t'rank'\n`
    output += `\t\t('drum' ${
        value.content.rank_drum ? value.content.rank_drum : '0'
    })\n`
    output += `\t\t('bass' ${
        value.content.rank_bass ? value.content.rank_bass : '0'
    })\n`
    output += `\t\t('guitar' ${
        value.content.rank_guitar ? value.content.rank_guitar : '0'
    })\n`
    output += `\t\t('vocals' ${
        value.content.rank_vocals ? value.content.rank_vocals : '0'
    })\n`
    output += `\t\t('keys' ${
        value.content.rank_keys ? value.content.rank_keys : '0'
    })\n`
    output += `\t\t('real_keys' ${
        value.content.rank_real_keys ? value.content.rank_real_keys : '0'
    })\n`
    if (value.content.rank_real_bass) {
        output += `\t\t('real_bass' ${value.content.rank_real_bass})\n`
    }
    if (value.content.rank_real_guitar) {
        output += `\t\t('real_guitar' ${value.content.rank_real_guitar})\n`
    }
    output += `\t\t('band' ${value.content.rank_band})\n`
    output += `\t)\n`
    output += `\t('genre' '${value.content.genre}')\n`
    output += `\t('vocal_gender' '${value.content.vocal_gender}')\n`
    output += `\t('version' ${
        value.content.version ? value.content.version : '30'
    })\n`
    output += `\t('format' ${
        value.content.format ? value.content.format : '10'
    })\n`
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
        output += `\t(solo (${value.content.solo.join(' ')}))\n`
    }
    output += `\t('tuning_offset_cents' ${
        value.content.tuning_offset_cents
            ? value.content.tuning_offset_cents
            : '0'
    })\n`
    output += `\t('guide_pitch_volume' ${
        value.content.guide_pitch_volume
            ? value.content.guide_pitch_volume.toFixed(2)
            : (-3).toFixed(2)
    })\n`
    output += `\t('game_origin' '${value.content.game_origin}')\n`
    // Encoding?
    if (value.content.album_name) {
        output += `\t(\n\t\t'album_name'\n\t\t"${value.content.album_name}"\n\t)\n`
    }
    if (value.content.album_track_number) {
        output += `\t('album_track_number' ${value.content.album_track_number})\n`
    }
    if (typeof value.content.vocal_tonic_note !== 'undefined') {
        output += `\t(vocal_tonic_note ${value.content.vocal_tonic_note})\n`
    }
    if (typeof value.content.song_tonality !== 'undefined') {
        output += `\t(song_tonality ${value.content.song_tonality})\n`
    }
    if (typeof value.content.song_key !== 'undefined') {
        output += `\t(song_key ${value.content.song_key})\n`
    }
    if (value.content.real_guitar_tuning) {
        output += `\t(real_guitar_tuning (${value.content.real_guitar_tuning.join(
            ' '
        )}))\n`
    }
    if (value.content.real_bass_tuning) {
        output += `\t(real_bass_tuning (${value.content.real_bass_tuning.join(
            ' '
        )}))\n`
    }
    if (value.custom) {
        output += `\n;DO NOT EDIT THE FOLLOWING LINES MANUALLY\n;Created using Magma: C3 Roks Edition v3.3.5\n;Song authored by ${
            value.custom.author
        }\n;Song=${value.content.name}\n;Language(s)=${
            value.custom.languages
                ? value.custom.languages.length === 1
                    ? `${value.custom.languages.join(',')},`
                    : value.custom.languages.join(',')
                : 'English,'
        }\n;Karaoke=${value.custom.karaoke ? 1 : 0}\n;Multitrack=${
            value.custom.multitrack ? 1 : 0
        }\n;Convert=${value.custom.convert ? 1 : 0}\n;2xBass=${
            value.custom.doubleKick ? 1 : 0
        }\n;RhythmKeys=${value.custom.rhythmOnKeys ? 1 : 0}\n;RhythmBass=${
            value.custom.rhythmOnBass ? 1 : 0
        }\n;CATemh=${value.custom.CATemh ? 1 : 0}\n;ExpertOnly=${
            value.custom.expertOnly ? 1 : 0
        }\n`
    }
    output += `)\n`
    return output
}

export const stringifyDTA = (songs: DTADocument[]): string => {
    let output = ''

    songs.forEach((value) => {
        output += stringifyDTADocumentC3(value)
    })
    return output.replace(/\t/g, '   ')
}
