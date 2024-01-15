import { DTAFile } from './dta'
import { tracksCountToString } from '../utils/audioChannels'
import { quoteToSlashQ, genTabs } from '../utils/stringProcessors'

export interface StringifyDataOptions {
  /**
   * Specify the generated type of the DTA. Default is `'default'`.
   */
  type?: 'default' | 'rb3_dlc'
  /**
   * By setting this to `true`, it places 1 to the
   * guitar audio channels on `cores`. Default is `false`.
   */
  guitarCores?: boolean
  /**
   * Places C3 MAGMA-generated information as DTA comments. Default is `true`.
   */
  placeCustomAttributes?: boolean
  /**
   * Omits main unranked instruments for the content. Default is `false`.
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
     * Odd, positive numbers only.
     */
    slot: number
  }
}

/**
 * Converts an array of parsed song objects back to `.dta` file contents string.
 * - - - -
 * @param {DTAFile[] | DTAFile} songs An array of parsed song objects.
 * @param {StringifyDataOptions} options `OPTIONAL` Customization options for the stringifying process. If an object
 * is not passed as argument at all, it will use default configurations to generate MAGMA C3's `.dta` file contents type.
 *
 * Only some values can be customized on the default option for maximum compatibility with other `.dta` file parsers.
 * @returns {string} A string representation of this parsed song object as a `.dta` file contents string.
 */
export const stringifyDTA = (songs: DTAFile[] | DTAFile, options?: StringifyDataOptions): string => {
  if (options === undefined) {
    options = {
      placeCustomAttributes: true,
      useSpaces: true,
    } as StringifyDataOptions
  }

  let output = ''

  const { type, useSpaces } = options

  if (Array.isArray(songs)) {
    songs.forEach((value) => {
      if (type === 'rb3_dlc') output += stringifyRB3DLC(value, options as StringifyDataOptions)
      else output += stringifyDefault(value, options as StringifyDataOptions)
    })
  } else {
    if (type === 'rb3_dlc') output += stringifyRB3DLC(songs, options)
    else output += stringifyDefault(songs, options)
  }

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
 * @param {DTAFile} value The parsed song you want to be stringified.
 * @param {StringifyDataOptions} options Customize options for the stringifying process.
 * @returns {string} A stringified version of the song.
 */
const stringifyDefault = (value: DTAFile, options: StringifyDataOptions): string => {
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
  } = value

  const [drum, bass, guitar, vocals, keys, backing, crowd] = tracks_count

  let trackCount = 0
  const guitarTrackStarts = drum + bass - 1
  const guitarTrackEnds = guitarTrackStarts + guitar
  const crowdTrackStarts = drum + bass + guitar + vocals + keys + backing

  let output = ''

  output += `(${genTabs()}'${id}'${genTabs()}(${genTabs(2)}'name'${genTabs(2)}"${quoteToSlashQ(name)}"${genTabs()})${genTabs()}(${genTabs(2)}'artist'${genTabs(2)}"${quoteToSlashQ(
    artist
  )}"${genTabs()})${genTabs()}('master' ${master ? 1 : 0})${context ? `${genTabs()}('context' ${context})` : ''}${genTabs()}(${genTabs(2)}'song'${genTabs(2)}(${genTabs(3)}'name'${genTabs(3)}"${
    wiiMode ? `dlc/${wiiMode.gen}/${wiiMode.slot.toString().padStart(3, '0')}/content/songs/${songname}/${songname}` : `songs/${songname}/${songname}`
  }"${genTabs(2)})${genTabs(2)}(${genTabs(3)}'tracks_count'${genTabs(3)}(${tracks_count.join(' ')})${genTabs(2)})${genTabs(2)}(${genTabs(3)}'tracks'${genTabs(3)}(${genTabs(4)}`

  if (drum) {
    output += `(${genTabs(5)}'drum'${genTabs(5)}(${tracksCountToString(trackCount, drum)})${genTabs(4)})`
    trackCount += drum
  }
  if (bass) {
    if (drum !== 0) output += `${genTabs(4)}`
    output += `(${genTabs(5)}'bass'${genTabs(5)}(${tracksCountToString(trackCount, bass)})${genTabs(4)})`
    trackCount += bass
  }
  if (guitar) {
    if (drum !== 0 || bass !== 0) output += `${genTabs(4)}`
    output += `(${genTabs(5)}'guitar'${genTabs(5)}(${tracksCountToString(trackCount, guitar)})${genTabs(4)})`
    trackCount += guitar
  }
  if (vocals) {
    if (drum !== 0 || bass !== 0 || guitar !== 0) output += `${genTabs(4)}`
    output += `(${genTabs(5)}'vocals'${genTabs(5)}(${tracksCountToString(trackCount, vocals)})${genTabs(4)})`
    trackCount += vocals
  }
  if (keys) {
    if (drum !== 0 || bass !== 0 || guitar !== 0 || vocals !== 0) output += `${genTabs(4)}`
    output += `(${genTabs(5)}'keys'${genTabs(5)}(${tracksCountToString(trackCount, keys)})${genTabs(4)})`
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

  output += `${crowd ? `${genTabs(2)}('crowd_channels' ${tracksCountToString(crowdTrackStarts, 2)})` : ``}${genTabs(2)}('vocal_parts' ${
    vocal_parts === undefined ? (vocals > 0 ? 1 : 0) : vocal_parts
  })${genTabs(2)}(${genTabs(3)}'drum_solo'${genTabs(3)}(${genTabs(4)}'seqs'${genTabs(4)}('kick.cue' 'snare.cue' 'tom1.cue' 'tom2.cue' 'crash.cue')${genTabs(3)})${genTabs(2)})${genTabs(2)}(${genTabs(
    3
  )}'drum_freestyle'${genTabs(3)}(${genTabs(4)}'seqs'${genTabs(4)}('kick.cue' 'snare.cue' 'hat.cue' 'ride.cue' 'crash.cue')${genTabs(3)})${genTabs(2)})${genTabs(2)}(mute_volume ${
    mute_volume === undefined ? '-96' : mute_volume
  })${genTabs(2)}(mute_volume_vocals ${mute_volume_vocals === undefined ? '-12' : mute_volume_vocals})${genTabs(2)}(hopo_threshold ${
    hopo_threshold === undefined ? '170' : hopo_threshold
  })${genTabs()})${genTabs()}('song_scroll_speed' ${song_scroll_speed === undefined ? '2300' : song_scroll_speed})${genTabs()}(${genTabs(2)}'bank'${genTabs(
    2
  )}"${bank}"${genTabs()})${genTabs()}(drum_bank ${drum_bank})${genTabs()}('anim_tempo' ${anim_tempo})${
    band_fail_cue === undefined ? '' : `${genTabs()}(band_fail_cue ${band_fail_cue})`
  }${genTabs()}('song_length' ${song_length})${genTabs()}('preview' ${preview.join(' ')})${genTabs()}(${genTabs(2)}'rank'`

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

  output += `${genTabs(2)}('band' ${rank_band})${genTabs()})${genTabs()}('genre' '${genre === undefined ? 'other' : genre}')${genTabs()}('vocal_gender' '${vocal_gender}')${genTabs()}('version' ${
    version === undefined ? 30 : version
  })${genTabs()}('format' ${format === undefined ? 10 : format})${genTabs()}('album_art' ${album_art ? 1 : 0})${genTabs()}('year_released' ${year_released})${
    year_recorded === undefined ? '' : `${genTabs()}('year_recorded' ${year_recorded})`
  }${genTabs()}('rating' ${rating === undefined ? 4 : rating})${sub_genre ? `${genTabs()}('sub_genre' '${sub_genre}')` : ''}${genTabs()}('song_id' ${song_id})`

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

  output += `${genTabs()}('tuning_offset_cents' ${tuning_offset_cents === undefined ? 0 : tuning_offset_cents})${genTabs()}('guide_pitch_volume' ${
    guide_pitch_volume === undefined ? '-3.00' : guide_pitch_volume
  })${genTabs()}('game_origin' '${game_origin === undefined ? 'ugc_plus' : game_origin}')${genTabs()}('encoding' '${encoding === undefined ? 'latin1' : encoding}')${
    album_name ? `${genTabs()}(${genTabs(2)}'album_name'${genTabs(2)}"${quoteToSlashQ(album_name)}"${genTabs()})` : ''
  }${album_track_number ? `${genTabs()}('album_track_number' ${album_track_number})` : ''}${vocal_tonic_note === undefined ? '' : `${genTabs()}(vocal_tonic_note ${vocal_tonic_note})`}${
    song_tonality === undefined ? '' : `${genTabs()}(song_tonality ${song_tonality})`
  }${song_key === undefined ? '' : `${genTabs()}(song_key ${song_key})`}${real_guitar_tuning ? `${genTabs()}(real_guitar_tuning (${real_guitar_tuning.join(' ')}))` : ''}${
    real_bass_tuning ? `${genTabs()}(real_bass_tuning (${real_bass_tuning.join(' ')}))` : ''
  }${pack_name ? `${genTabs(1)}(pack_name "${quoteToSlashQ(pack_name)}")` : ''}${base_points ? `${genTabs(1)}(base_points ${base_points})` : ''}`

  if (placeCustomAttributes === undefined || placeCustomAttributes === true) {
    output += `${genTabs()}${genTabs(0)};DO NOT EDIT THE FOLLOWING LINES MANUALLY${genTabs(0)};Created using Magma: C3 Roks Edition v3.3.5${genTabs(0)};Song authored by ${
      author ? author : 'Unknown Charter'
    }${genTabs(0)};Song=${name}${genTabs(0)};Language(s)=${languages ? (languages.length === 1 ? `${languages[0]},` : `${languages.join(',')},`) : `English,`}${genTabs(0)};Karaoke=${
      karaoke ? 1 : 0
    }${genTabs(0)};Multitrack=${multitrack ? 1 : 0}${genTabs(0)};Convert=${convert ? 1 : 0}${genTabs(0)};2xBass=${doubleKick ? 1 : 0}${genTabs(0)};RhythmKeys=${rhythmOnKeys ? 1 : 0}${genTabs(
      0
    )};RhythmBass=${rhythmOnBass ? 1 : 0}${genTabs(0)};CATemh=${CATemh ? 1 : 0}${genTabs(0)};ExpertOnly=${expertOnly ? 1 : 0}`
  }

  output += `${genTabs(0)})${genTabs(0)}`

  return output
}

/**
 * Specific stringify method to generate RB3 DLC `.dta` file contents type.
 * - - - -
 * @param {DTAFile} value The parsed song you want to be stringified.
 * @param {StringifyDataOptions | undefined} options Customize options for the stringifying process.
 * @returns {string} A stringified version of the song.
 */
const stringifyRB3DLC = (value: DTAFile, options: StringifyDataOptions): string => {
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
  } = value

  const [drum, bass, guitar, vocals, keys, backing, crowd] = tracks_count

  let trackCount = 0
  const guitarTrackStarts = drum + bass - 1
  const guitarTrackEnds = guitarTrackStarts + guitar
  const crowdTrackStarts = drum + bass + guitar + vocals + keys + backing

  let output = ''

  output += `(${id}${genTabs()}(name "${quoteToSlashQ(name)}")${genTabs()}(artist "${quoteToSlashQ(artist)}")${genTabs()}(master ${master ? 'TRUE' : 'FALSE'})${
    context ? `${genTabs()}(context ${context})` : ''
  }${genTabs()}(song_id ${song_id})${genTabs()}(song${genTabs(2)}(name "${
    wiiMode ? `dlc/${wiiMode.gen}/${wiiMode.slot.toString().padStart(3, '0')}/content/songs/${songname}/${songname}` : `songs/${songname}/${songname}`
  }")${genTabs(2)}(tracks${genTabs(3)}(`

  if (drum) {
    output += `(drum (${tracksCountToString(trackCount, drum)}))`
    trackCount += drum
    if (!bass && !guitar && !vocals && !keys) output += `)${genTabs(2)})`
    else output += `${genTabs(3)} `
  }

  if (bass) {
    output += `(bass (${tracksCountToString(trackCount, bass)}))`
    trackCount += bass
    if (!guitar && !vocals && !keys) output += `)${genTabs(2)})`
    else output += `${genTabs(3)} `
  }

  if (guitar) {
    output += `(guitar (${tracksCountToString(trackCount, guitar)}))`
    trackCount += guitar
    if (!vocals && !keys) output += `)${genTabs(2)})`
    else output += `${genTabs(3)} `
  }

  if (vocals) {
    output += `(vocals (${tracksCountToString(trackCount, vocals)}))`
    trackCount += vocals
    if (!keys) output += `)${genTabs(2)})`
    else output += `${genTabs(3)} `
  }

  if (keys) {
    output += `(keys (${tracksCountToString(trackCount, keys)})))${genTabs(2)})`
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

  output += `${crowd ? `${genTabs(2)}(crowd_channels ${tracksCountToString(crowdTrackStarts, 2)})` : ``}${genTabs(2)}(vocal_parts ${
    vocal_parts === undefined ? (vocals > 0 ? 1 : 0) : vocal_parts
  })${genTabs(2)}(drum_solo${genTabs(3)}(seqs (kick.cue snare.cue tom1.cue tom2.cue crash.cue))${genTabs(2)})${genTabs(2)}(drum_freestyle${genTabs(
    3
  )}(seqs (kick.cue snare.cue hat.cue ride.cue crash.cue))${genTabs(2)})${mute_volume === undefined ? `` : `${genTabs(2)}(mute_volume ${mute_volume})`}${
    mute_volume_vocals === undefined ? `` : `${genTabs(2)}(mute_volume_vocals ${mute_volume_vocals})`
  }${hopo_threshold === undefined ? `` : `${genTabs(2)}(hopo_threshold ${hopo_threshold})`}${genTabs()})${genTabs()}(bank ${bank})${genTabs()}(drum_bank ${drum_bank})${genTabs()}(anim_tempo ${
    anim_tempo === 16 ? `kTempoSlow` : anim_tempo === 32 ? `kTempoMedium` : `kTempoFast`
  })${band_fail_cue === undefined ? `` : `${genTabs()}(band_fail_cue ${band_fail_cue})`}${genTabs()}(song_scroll_speed ${
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

  output += `${genTabs(2)}(band ${rank_band})${genTabs()})${genTabs()}(format ${format === undefined ? 10 : format})${genTabs()}(version ${
    version === undefined ? 30 : version
  })${genTabs()}(game_origin ${game_origin === undefined ? 'ugc_plus' : game_origin})${genTabs()}(rating ${rating === undefined ? 4 : rating})${genTabs()}(genre ${
    genre === undefined ? 'other' : genre
  })${genTabs()}(sub_genre ${sub_genre === undefined ? 'subgenre_other' : sub_genre})${genTabs()}(vocal_gender ${vocal_gender})${genTabs()}(year_released ${year_released})${
    year_recorded ? `${genTabs()}(year_recorded ${year_recorded})` : ``
  }${genTabs()}(album_art ${album_art ? 'TRUE' : 'FALSE'})${album_name ? `${genTabs()}(album_name "${quoteToSlashQ(album_name)}")` : ``}${
    album_track_number ? `${genTabs()}(album_track_number ${album_track_number})` : ``
  }${vocal_tonic_note === undefined ? `` : `${genTabs()}(vocal_tonic_note ${vocal_tonic_note})`}${song_tonality === undefined ? `` : `${genTabs()}(song_tonality ${song_tonality})`}${
    song_key === undefined ? `` : `${genTabs()}(song_key ${song_key})`
  }${tuning_offset_cents === undefined ? `` : `${genTabs()}(tuning_offset_cents ${tuning_offset_cents})`}${
    guide_pitch_volume === undefined ? `` : `${genTabs()}(guide_pitch_volume ${guide_pitch_volume.toFixed(1)})`
  }${real_guitar_tuning ? `${genTabs()}(real_guitar_tuning (${real_guitar_tuning.join(' ')}))` : ``}${real_bass_tuning ? `${genTabs()}(real_bass_tuning (${real_bass_tuning.join(' ')}))` : ``}${
    encoding === undefined || encoding === 'latin1' ? `` : `${genTabs()}(encoding ${encoding})`
  }${pack_name ? `${genTabs()}(pack_name "${quoteToSlashQ(pack_name)}")` : ``}${base_points ? `${genTabs()}(base_points ${base_points})` : ``}`

  if (placeCustomAttributes === undefined || placeCustomAttributes === true) {
    output += `${genTabs()}${genTabs(0)};DO NOT EDIT THE FOLLOWING LINES MANUALLY${genTabs(0)};Created using Magma: C3 Roks Edition v3.3.5${genTabs(0)};Song authored by ${
      author ? author : 'Unknown Charter'
    }${genTabs(0)};Song=${name}${genTabs(0)};Language(s)=${languages ? (languages.length === 1 ? `${languages[0]},` : `${languages.join(',')},`) : `English,`}${genTabs(0)};Karaoke=${
      karaoke ? 1 : 0
    }${genTabs(0)};Multitrack=${multitrack ? 1 : 0}${genTabs(0)};Convert=${convert ? 1 : 0}${genTabs(0)};2xBass=${doubleKick ? 1 : 0}${genTabs(0)};RhythmKeys=${rhythmOnKeys ? 1 : 0}${genTabs(
      0
    )};RhythmBass=${rhythmOnBass ? 1 : 0}${genTabs(0)};CATemh=${CATemh ? 1 : 0}${genTabs(0)};ExpertOnly=${expertOnly ? 1 : 0}`
  }

  output += `${genTabs(0)})${genTabs(0)}`

  return output
}
