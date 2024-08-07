import { type DTAFile, type SongSortingTypes, sortDTA } from '../core.js'
import { genAudioFileStructure, genRB3DLCDetailedTracksStructure as genRB3DLCDetailedTrack, quoteToSlashQ, genTabs as t, genSpaces as s, incrementTracksCount, useDefaultOptions } from '../utils.js'

export interface StringifyDataOptions {
  /**
   * Specify the generated type of the DTA. Default is `'rbn'`.
   */
  type?: 'rbn' | 'rb3_dlc'
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
   * Places information used on Rock Band 3 Deluxe, such as author name. Default is `false`.
   */
  placeRB3DXAttributes?: boolean
  /**
   * Place the game origin of all songs as `rb3_dlc`, ignoring the game origin of the DTA. Default is `false`.
   */
  gameOriginAsRB3DLC?: boolean
  /**
   * Omits main unranked instruments for the content. Default is `false`.
   */
  omitUnusedRanks?: boolean
  /**
   * If `false`, fake songs won't be ignored from the generated DTA file contents. Default is `true`.
   */
  ignoreFakeSongs?: boolean
  /**
   * Changes the sorting of the songs. This property has no influence if you want to stringify a single song.
   */
  sortBy?: SongSortingTypes
  /**
   * Aligns information of panning, volume, and cores based on each audio file track name. Default is `false`.
   *
   * This only works using `'rb3_dlc'` as type.
   */
  detailedTracksStructure?: boolean
  /**
   * Uses spaces rather than tabs. This can be either a number or a boolean value. Default is `false`.
   *
   * If this argument is a boolean value (specially `true`), it will use 3 (three) spaces as default. You can change the amount of space characters by placing a number.
   *
   * _This value won't have any effect when property `detailedTracksStructure` is set to `false`._
   */
  useSpaces?: boolean | number | null
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
  } | null
}

/**
 * Specific stringify method for MAGMA C3-generated `.dta` file contents.
 * - - - -
 * @param {DTAFile} value The parsed song you want to be stringified.
 * @param {StringifyDataOptions} options Customize options for the stringifying process.
 * @returns {string} A stringified version of the song.
 */
const stringifyDefault = (value: DTAFile, options: StringifyDataOptions): string => {
  const { guitarCores, omitUnusedRanks, placeCustomAttributes, placeRB3DXAttributes, wiiMode, gameOriginAsRB3DLC } = options

  const { id, name, artist, master, songname, context, tracks_count, pans, vols, vocal_parts, mute_volume, mute_volume_vocals, hopo_threshold, song_scroll_speed, bank, drum_bank, band_fail_cue, anim_tempo, song_length, preview, rank_drum, rank_bass, rank_guitar, rank_vocals, rank_keys, rank_real_keys, rank_real_guitar, rank_real_bass, rank_band, genre, vocal_gender, version, format, album_art, year_released, year_recorded, rating, sub_genre, song_id, solo, tuning_offset_cents, guide_pitch_volume, game_origin, encoding, album_name, album_track_number, vocal_tonic_note, song_tonality, song_key, real_guitar_tuning, real_bass_tuning, pack_name, base_points, author, loading_phrase, languages, karaoke, multitrack, convert, doubleKick, rhythmOnKeys, rhythmOnBass, CATemh, expertOnly } = value

  const [drum, bass, guitar, vocals, keys, backing, crowd] = tracks_count

  let trackCount = 0
  const guitarTrackStarts = drum + bass - 1
  const guitarTrackEnds = guitarTrackStarts + guitar
  const crowdTrackStarts = drum + bass + guitar + vocals + keys + backing

  let output = ''

  output += `(${t()}'${id}'${t()}(${t(2)}'name'${t(2)}"${quoteToSlashQ(name)}"${t()})${t()}(${t(2)}'artist'${t(2)}"${quoteToSlashQ(artist)}"${t()})${t()}('master' ${master ? '1' : '0'})${context ? `${t()}('context' ${context.toString()})` : ''}${t()}(${t(2)}'song'${t(2)}(${t(3)}'name'${t(3)}"${wiiMode ? `dlc/${wiiMode.gen}/${wiiMode.slot.toString().padStart(3, '0')}/content/songs/${songname}/${songname}` : `songs/${songname}/${songname}`}"${t(2)})${t(2)}(${t(3)}'tracks_count'${t(3)}(${tracks_count.join(' ')})${t(2)})${t(2)}(${t(3)}'tracks'${t(3)}(${t(4)}`

  if (drum) {
    output += `(${t(5)}'drum'${t(5)}(${incrementTracksCount(trackCount, drum)})${t(4)})`
    trackCount += drum
  }
  if (bass) {
    if (drum !== 0) output += t(4)
    output += `(${t(5)}'bass'${t(5)}(${incrementTracksCount(trackCount, bass)})${t(4)})`
    trackCount += bass
  }
  if (guitar) {
    if (drum !== 0 || bass !== 0) output += t(4)
    output += `(${t(5)}'guitar'${t(5)}(${incrementTracksCount(trackCount, guitar)})${t(4)})`
    trackCount += guitar
  }
  if (vocals) {
    if (drum !== 0 || bass !== 0 || guitar !== 0) output += t(4)
    output += `(${t(5)}'vocals'${t(5)}(${incrementTracksCount(trackCount, vocals)})${t(4)})`
    trackCount += vocals
  }
  if (keys) {
    if (drum !== 0 || bass !== 0 || guitar !== 0 || vocals !== 0) output += t(4)
    output += `(${t(5)}'keys'${t(5)}(${incrementTracksCount(trackCount, keys)})${t(4)})`
    trackCount += keys
  }
  output += `${t(3)})${t(2)})${t(2)}(${t(3)}'pans'${t(3)}(`

  pans.forEach((num, i) => {
    output += `${num.toFixed(2)}${i === vols.length - 1 ? `)${t(2)})` : ' '}`
  })

  output += `${t(2)}(${t(3)}'vols'${t(3)}(`

  vols.forEach((num, i) => {
    output += `${num.toFixed(2)}${i === vols.length - 1 ? `)${t(2)})` : ' '}`
  })

  output += `${t(2)}(${t(3)}'cores'${t(3)}(`

  vols.forEach((_, i) => {
    if (guitarCores !== undefined && guitarCores) {
      output += `${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}${i === vols.length - 1 ? `)${t(2)})` : ' '}`
    } else {
      output += `-1${i === vols.length - 1 ? `)${t(2)})` : ' '}`
    }
    return
  })

  output += `${crowd ? `${t(2)}('crowd_channels' ${incrementTracksCount(crowdTrackStarts, 2)})` : ``}${t(2)}('vocal_parts' ${vocal_parts.toString()})${t(2)}(${t(3)}'drum_solo'${t(3)}(${t(4)}'seqs'${t(4)}('kick.cue' 'snare.cue' 'tom1.cue' 'tom2.cue' 'crash.cue')${t(3)})${t(2)})${t(2)}(${t(3)}'drum_freestyle'${t(3)}(${t(4)}'seqs'${t(4)}('kick.cue' 'snare.cue' 'hat.cue' 'ride.cue' 'crash.cue')${t(3)})${t(2)})${t(2)}(mute_volume ${mute_volume?.toString() ?? '-96'})${t(2)}(mute_volume_vocals ${mute_volume_vocals?.toString() ?? '-12'})${t(2)}(hopo_threshold ${hopo_threshold?.toString() ?? '170'})${t()})${t()}('song_scroll_speed' ${song_scroll_speed?.toString() ?? '2300'})${t()}(${t(2)}'bank'${t(2)}"${bank}"${t()})${t()}(drum_bank ${drum_bank})${t()}('anim_tempo' ${anim_tempo.toString()})${!band_fail_cue ? '' : `${t()}(band_fail_cue ${band_fail_cue})`}${t()}('song_length' ${song_length.toString()})${t()}('preview' ${preview.join(' ')})${t()}(${t(2)}'rank'`

  if (omitUnusedRanks && (rank_drum === undefined || rank_drum === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}('drum' ${rank_drum?.toString() ?? '0'})`
  }

  if (omitUnusedRanks && (rank_guitar === undefined || rank_guitar === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}('guitar' ${rank_guitar?.toString() ?? '0'})`
  }

  if (omitUnusedRanks && (rank_bass === undefined || rank_bass === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}('bass' ${rank_bass?.toString() ?? '0'})`
  }

  if (omitUnusedRanks && (rank_vocals === undefined || rank_vocals === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}('vocals' ${rank_vocals?.toString() ?? '0'})`
  }

  if (omitUnusedRanks && (rank_keys === undefined || rank_keys === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}('keys' ${rank_keys?.toString() ?? '0'})`
  }

  if (omitUnusedRanks && (rank_real_keys === undefined || rank_real_keys === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}('real_keys' ${rank_real_keys?.toString() ?? '0'})`
  }

  if (omitUnusedRanks && (rank_real_guitar === undefined || rank_real_guitar === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}('real_guitar' ${rank_real_guitar?.toString() ?? '0'})`
  }

  if (omitUnusedRanks && (rank_real_bass === undefined || rank_real_bass === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}('real_bass' ${rank_real_bass?.toString() ?? '0'})`
  }

  output += `${t(2)}('band' ${rank_band.toString()})${t()})${t()}('genre' '${genre}')${t()}('vocal_gender' '${vocal_gender}')${t()}('version' ${version?.toString() ?? '30'})${t()}('format' ${format?.toString() ?? '10'})${t()}('album_art' ${album_art ? '1' : '0'})${t()}('year_released' ${year_released.toString()})${year_recorded === undefined ? '' : `${t()}('year_recorded' ${year_recorded.toString()})`}${t()}('rating' ${rating.toString()})${sub_genre ? `${t()}('sub_genre' '${sub_genre}')` : ''}${t()}('song_id' ${song_id.toString()})`

  if (solo && solo.length > 0) {
    output += `${t()}(solo (`

    solo.forEach((flag, flagIndex) => {
      if (flagIndex === solo.length - 1) {
        output += `${flag}))`
      } else {
        output += `${flag} `
      }
    })
  }

  output += `${t()}('tuning_offset_cents' ${tuning_offset_cents?.toString() ?? '0'})${t()}('guide_pitch_volume' ${guide_pitch_volume?.toString() ?? '-3.00'})${t()}('game_origin' '${gameOriginAsRB3DLC ? 'rb3_dlc' : game_origin}')${t()}('encoding' '${encoding ?? 'latin1'}')${album_name ? `${t()}(${t(2)}'album_name'${t(2)}"${quoteToSlashQ(album_name)}"${t()})` : ''}${album_track_number ? `${t()}('album_track_number' ${album_track_number.toString()})` : ''}${vocal_tonic_note === undefined ? '' : `${t()}(vocal_tonic_note ${vocal_tonic_note.toString()})`}${song_tonality === undefined ? '' : `${t()}(song_tonality ${song_tonality.toString()})`}${song_key === undefined ? '' : `${t()}(song_key ${song_key.toString()})`}${real_guitar_tuning ? `${t()}(real_guitar_tuning (${real_guitar_tuning.join(' ')}))` : ''}${real_bass_tuning ? `${t()}(real_bass_tuning (${real_bass_tuning.join(' ')}))` : ''}${pack_name ? `${t(1)}(pack_name "${quoteToSlashQ(pack_name)}")` : ''}${base_points ? `${t(1)}(base_points ${base_points.toString()})` : ''}${placeRB3DXAttributes && author ? `${t(1)}(${t(2)}'author'${t(2)}"${quoteToSlashQ(author)}"${t()})` : ''}${placeRB3DXAttributes && loading_phrase ? `${t(1)}(${t(2)}'loading_phrase'${t(2)}"${quoteToSlashQ(loading_phrase)}"${t()})` : ''}`

  if (placeCustomAttributes === undefined || placeCustomAttributes) {
    output += `${t()}${t(0)};DO NOT EDIT THE FOLLOWING LINES MANUALLY${t(0)};Created using Magma: C3 Roks Edition v3.3.5${t(0)};Song authored by ${author ? author : 'Unknown Charter'}${t(0)};Song=${name}${t(0)};Language(s)=${languages ? (languages.length === 1 ? `${languages[0]},` : `${languages.join(',')},`) : `English,`}${t(0)};Karaoke=${karaoke ? '1' : '0'}${t(0)};Multitrack=${multitrack ? '1' : '0'}${t(0)};Convert=${convert ? '1' : '0'}${t(0)};2xBass=${doubleKick ? '1' : '0'}${t(0)};RhythmKeys=${rhythmOnKeys ? '1' : '0'}${t(0)};RhythmBass=${rhythmOnBass ? '1' : '0'}${t(0)};CATemh=${CATemh ? '1' : '0'}${t(0)};ExpertOnly=${expertOnly ? '1' : '0'}`
  }

  output += `${t(0)})${t(0)}`

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
  const { guitarCores, omitUnusedRanks, placeCustomAttributes, placeRB3DXAttributes, wiiMode, gameOriginAsRB3DLC, detailedTracksStructure } = options
  const panVol = genAudioFileStructure(value)

  const { id, name, artist, master, songname, context, tracks_count, pans, vols, vocal_parts, mute_volume, mute_volume_vocals, hopo_threshold, song_scroll_speed, bank, drum_bank, band_fail_cue, anim_tempo, song_length, preview, rank_drum, rank_bass, rank_guitar, rank_vocals, rank_keys, rank_real_keys, rank_real_guitar, rank_real_bass, rank_band, genre, vocal_gender, version, format, album_art, year_released, year_recorded, rating, sub_genre, song_id, solo, tuning_offset_cents, guide_pitch_volume, game_origin, encoding, album_name, album_track_number, vocal_tonic_note, song_tonality, song_key, real_guitar_tuning, real_bass_tuning, pack_name, base_points, author, loading_phrase, languages, karaoke, multitrack, convert, doubleKick, rhythmOnKeys, rhythmOnBass, CATemh, expertOnly } = value

  const [drum, bass, guitar, vocals, keys, backing, crowd] = tracks_count

  let trackCount = 0
  const guitarTrackStarts = drum + bass - 1
  const guitarTrackEnds = guitarTrackStarts + guitar
  const crowdTrackStarts = drum + bass + guitar + vocals + keys + backing

  let output = ''

  output += `(${id}${t()}(name "${quoteToSlashQ(name)}")${t()}(artist "${quoteToSlashQ(artist)}")${t()}(master ${master ? 'TRUE' : 'FALSE'})${context ? `${t()}(context ${context.toString()})` : ''}${t()}(song_id ${song_id.toString()})${t()}(song${t(2)}(name "${wiiMode ? `dlc/${wiiMode.gen}/${wiiMode.slot.toString().padStart(3, '0')}/content/songs/${songname}/${songname}` : `songs/${songname}/${songname}`}")${t(2)}(tracks${t(3)}(`

  if (drum) {
    output += `(drum (${incrementTracksCount(trackCount, drum)}))`
    trackCount += drum
    if (!bass && !guitar && !vocals && !keys) output += `)${t(2)})`
    else output += `${t(3)} `
  }

  if (bass) {
    output += `(bass (${incrementTracksCount(trackCount, bass)}))`
    trackCount += bass
    if (!guitar && !vocals && !keys) output += `)${t(2)})`
    else output += `${t(3)} `
  }

  if (guitar) {
    output += `(guitar (${incrementTracksCount(trackCount, guitar)}))`
    trackCount += guitar
    if (!vocals && !keys) output += `)${t(2)})`
    else output += `${t(3)} `
  }

  if (vocals) {
    output += `(vocals (${incrementTracksCount(trackCount, vocals)}))`
    trackCount += vocals
    if (!keys) output += `)${t(2)})`
    else output += `${t(3)} `
  }

  if (keys) {
    output += `(keys (${incrementTracksCount(trackCount, keys)})))${t(2)})`
    trackCount += keys
  }

  if (detailedTracksStructure) {
    output += `${t(2)};${s(12)}${drum === 2 ? `${s(6)}${genRB3DLCDetailedTrack('drums', 'desc', panVol, guitarCores)}` : ''}${drum > 2 ? `${s(6)}${genRB3DLCDetailedTrack('kick', 'desc', panVol, guitarCores)}` : ''}${drum > 3 ? `${s(6)}${genRB3DLCDetailedTrack('snare', 'desc', panVol, guitarCores)}` : ''}${drum > 2 ? `${s(6)}${genRB3DLCDetailedTrack('drumkit', 'desc', panVol, guitarCores)}` : ''}${bass > 0 ? `${s(6)}${genRB3DLCDetailedTrack('bass', 'desc', panVol, guitarCores)}` : ''}${guitar > 0 ? `${s(6)}${genRB3DLCDetailedTrack('guitar', 'desc', panVol, guitarCores)}` : ''}${vocals > 0 ? `${s(6)}${genRB3DLCDetailedTrack('vocals', 'desc', panVol, guitarCores)}` : ''}${keys > 0 ? `${s(6)}${genRB3DLCDetailedTrack('keys', 'desc', panVol, guitarCores)}` : ''}${backing > 0 ? `${s(6)}${genRB3DLCDetailedTrack('trks', 'desc', panVol, guitarCores)}` : ''}${crowd && crowd > 0 ? `${s(6)}${genRB3DLCDetailedTrack('crowd', 'desc', panVol, guitarCores)}` : ''}`
    output += `${t(2)}( pans${s(6)}(${drum === 2 ? `${s(6)}${genRB3DLCDetailedTrack('drums', 'pans', panVol, guitarCores)}` : ''}${drum > 2 ? `${s(6)}${genRB3DLCDetailedTrack('kick', 'pans', panVol, guitarCores)}` : ''}${drum > 3 ? `${s(6)}${genRB3DLCDetailedTrack('snare', 'pans', panVol, guitarCores)}` : ''}${drum > 2 ? `${s(6)}${genRB3DLCDetailedTrack('drumkit', 'pans', panVol, guitarCores)}` : ''}${bass > 0 ? `${s(6)}${genRB3DLCDetailedTrack('bass', 'pans', panVol, guitarCores)}` : ''}${guitar > 0 ? `${s(6)}${genRB3DLCDetailedTrack('guitar', 'pans', panVol, guitarCores)}` : ''}${vocals > 0 ? `${s(6)}${genRB3DLCDetailedTrack('vocals', 'pans', panVol, guitarCores)}` : ''}${keys > 0 ? `${s(6)}${genRB3DLCDetailedTrack('keys', 'pans', panVol, guitarCores)}` : ''}${backing > 0 ? `${s(6)}${genRB3DLCDetailedTrack('trks', 'pans', panVol, guitarCores)}` : ''}${crowd && crowd > 0 ? `${s(6)}${genRB3DLCDetailedTrack('crowd', 'pans', panVol, guitarCores)}` : ''}${s(6)}))`
    output += `${t(2)}( vols${s(6)}(${drum === 2 ? `${s(6)}${genRB3DLCDetailedTrack('drums', 'vols', panVol, guitarCores)}` : ''}${drum > 2 ? `${s(6)}${genRB3DLCDetailedTrack('kick', 'vols', panVol, guitarCores)}` : ''}${drum > 3 ? `${s(6)}${genRB3DLCDetailedTrack('snare', 'vols', panVol, guitarCores)}` : ''}${drum > 2 ? `${s(6)}${genRB3DLCDetailedTrack('drumkit', 'vols', panVol, guitarCores)}` : ''}${bass > 0 ? `${s(6)}${genRB3DLCDetailedTrack('bass', 'vols', panVol, guitarCores)}` : ''}${guitar > 0 ? `${s(6)}${genRB3DLCDetailedTrack('guitar', 'vols', panVol, guitarCores)}` : ''}${vocals > 0 ? `${s(6)}${genRB3DLCDetailedTrack('vocals', 'vols', panVol, guitarCores)}` : ''}${keys > 0 ? `${s(6)}${genRB3DLCDetailedTrack('keys', 'vols', panVol, guitarCores)}` : ''}${backing > 0 ? `${s(6)}${genRB3DLCDetailedTrack('trks', 'vols', panVol, guitarCores)}` : ''}${crowd && crowd > 0 ? `${s(6)}${genRB3DLCDetailedTrack('crowd', 'vols', panVol, guitarCores)}` : ''}${s(6)}))`
    output += `${t(2)}( cores     (${drum === 2 ? `${s(6)}${genRB3DLCDetailedTrack('drums', 'cores', panVol, guitarCores)}` : ''}${drum > 2 ? `${s(6)}${genRB3DLCDetailedTrack('kick', 'cores', panVol, guitarCores)}` : ''}${drum > 3 ? `${s(6)}${genRB3DLCDetailedTrack('snare', 'cores', panVol, guitarCores)}` : ''}${drum > 2 ? `${s(6)}${genRB3DLCDetailedTrack('drumkit', 'cores', panVol, guitarCores)}` : ''}${bass > 0 ? `${s(6)}${genRB3DLCDetailedTrack('bass', 'cores', panVol, guitarCores)}` : ''}${guitar > 0 ? `${s(6)}${genRB3DLCDetailedTrack('guitar', 'cores', panVol, guitarCores)}` : ''}${vocals > 0 ? `${s(6)}${genRB3DLCDetailedTrack('vocals', 'cores', panVol, guitarCores)}` : ''}${keys > 0 ? `${s(6)}${genRB3DLCDetailedTrack('keys', 'cores', panVol, guitarCores)}` : ''}${backing > 0 ? `${s(6)}${genRB3DLCDetailedTrack('trks', 'cores', panVol, guitarCores)}` : ''}${crowd && crowd > 0 ? `${s(6)}${genRB3DLCDetailedTrack('crowd', 'cores', panVol, guitarCores)}` : ''}${s(6)}))`
  } else {
    output += `${t(2)}(pans (`

    pans.forEach((num, i) => {
      output += `${num.toFixed(1)}${i === pans.length - 1 ? `))` : ` `}`
    })

    output += `${t(2)}(vols (`

    vols.forEach((num, i) => {
      output += `${num.toFixed(1)}${i === pans.length - 1 ? `))` : ` `}`
    })

    output += `${t(2)}(cores (`

    vols.forEach((_, i) => {
      if (guitarCores !== undefined && guitarCores) {
        output += `${i <= guitarTrackStarts || i > guitarTrackEnds ? '-1' : '1'}${i === vols.length - 1 ? `))` : ' '}`
      } else {
        output += `-1${i === vols.length - 1 ? `))` : ' '}`
      }
      return
    })
  }

  output += `${crowd ? `${t(2)}(crowd_channels ${incrementTracksCount(crowdTrackStarts, 2)})` : ``}${t(2)}(vocal_parts ${vocal_parts.toString()})${t(2)}(drum_solo${t(3)}(seqs (kick.cue snare.cue tom1.cue tom2.cue crash.cue))${t(2)})${t(2)}(drum_freestyle${t(3)}(seqs (kick.cue snare.cue hat.cue ride.cue crash.cue))${t(2)})${mute_volume === undefined ? `` : `${t(2)}(mute_volume ${mute_volume.toString()})`}${mute_volume_vocals === undefined ? `` : `${t(2)}(mute_volume_vocals ${mute_volume_vocals.toString()})`}${hopo_threshold === undefined ? `` : `${t(2)}(hopo_threshold ${hopo_threshold.toString()})`}${t()})${t()}(bank ${bank})${t()}(drum_bank ${drum_bank})${t()}(anim_tempo ${anim_tempo === 16 ? `kTempoSlow` : anim_tempo === 32 ? `kTempoMedium` : `kTempoFast`})${band_fail_cue === undefined ? `` : `${t()}(band_fail_cue ${band_fail_cue})`}${t()}(song_scroll_speed ${song_scroll_speed?.toString() ?? '2300'})${t()}(preview ${preview.join(' ')})${t()}(song_length ${song_length.toString()})`

  if (solo && solo.length > 0) {
    output += `${t()}(solo (`

    solo.forEach((flag, flagIndex) => {
      if (flagIndex === solo.length - 1) {
        output += `${flag}))`
      } else {
        output += `${flag} `
      }
    })
  }

  output += `${t()}(rank`

  if (omitUnusedRanks && (rank_drum === undefined || rank_drum === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}(drum ${rank_drum?.toString() ?? '0'})`
  }

  if (omitUnusedRanks && (rank_guitar === undefined || rank_guitar === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}(guitar ${rank_guitar?.toString() ?? '0'})`
  }

  if (omitUnusedRanks && (rank_bass === undefined || rank_bass === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}(bass ${rank_bass?.toString() ?? '0'})`
  }

  if (omitUnusedRanks && (rank_vocals === undefined || rank_vocals === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}(vocals ${rank_vocals?.toString() ?? '0'})`
  }

  if (omitUnusedRanks && (rank_keys === undefined || rank_keys === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}(keys ${rank_keys?.toString() ?? '0'})`
  }

  if (omitUnusedRanks && (rank_real_keys === undefined || rank_real_keys === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}(real_keys ${rank_real_keys?.toString() ?? '0'})`
  }

  if (omitUnusedRanks && (rank_real_guitar === undefined || rank_real_guitar === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}(real_guitar ${rank_real_guitar?.toString() ?? '0'})`
  }

  if (omitUnusedRanks && (rank_real_bass === undefined || rank_real_bass === 0)) {
    // Do nothing
  } else {
    output += `${t(2)}(real_bass ${rank_real_bass?.toString() ?? '0'})`
  }

  output += `${t(2)}(band ${rank_band.toString()})${t()})${t()}(format ${format?.toString() ?? '10'})${t()}(version ${version?.toString() ?? '30'})${t()}(game_origin ${gameOriginAsRB3DLC ? 'rb3_dlc' : game_origin})${t()}(rating ${rating.toString()})${t()}(genre ${genre})${sub_genre ? `${t()}(sub_genre ${sub_genre})` : ''}${t()}(vocal_gender ${vocal_gender})${t()}(year_released ${year_released.toString()})${year_recorded ? `${t()}(year_recorded ${year_recorded.toString()})` : ``}${t()}(album_art ${album_art ? 'TRUE' : 'FALSE'})${album_name ? `${t()}(album_name "${quoteToSlashQ(album_name)}")` : ``}${album_track_number ? `${t()}(album_track_number ${album_track_number.toString()})` : ``}${vocal_tonic_note === undefined ? `` : `${t()}(vocal_tonic_note ${vocal_tonic_note.toString()})`}${song_tonality === undefined ? `` : `${t()}(song_tonality ${song_tonality.toString()})`}${song_key === undefined ? `` : `${t()}(song_key ${song_key.toString()})`}${tuning_offset_cents === undefined ? `` : `${t()}(tuning_offset_cents ${tuning_offset_cents.toString()})`}${guide_pitch_volume === undefined ? `` : `${t()}(guide_pitch_volume ${guide_pitch_volume.toFixed(1)})`}${real_guitar_tuning ? `${t()}(real_guitar_tuning (${real_guitar_tuning.join(' ')}))` : ``}${real_bass_tuning ? `${t()}(real_bass_tuning (${real_bass_tuning.join(' ')}))` : ``}${encoding === undefined || encoding === 'latin1' ? `` : `${t()}(encoding ${encoding})`}${pack_name ? `${t()}(pack_name "${quoteToSlashQ(pack_name)}")` : ``}${base_points ? `${t()}(base_points ${base_points.toString()})` : ``}${placeRB3DXAttributes && author ? `${t(1)}(author "${quoteToSlashQ(author)}")` : ''}${placeRB3DXAttributes && loading_phrase ? `${t(1)}(loading_phrase "${quoteToSlashQ(loading_phrase)}")` : ''}`

  if (placeCustomAttributes === undefined || placeCustomAttributes) {
    output += `${t()}${t(0)};DO NOT EDIT THE FOLLOWING LINES MANUALLY${t(0)};Created using Magma: C3 Roks Edition v3.3.5${t(0)};Song authored by ${author ? author : 'Unknown Charter'}${t(0)};Song=${name}${t(0)};Language(s)=${languages ? (languages.length === 1 ? `${languages[0]},` : `${languages.join(',')},`) : `English,`}${t(0)};Karaoke=${karaoke ? '1' : '0'}${t(0)};Multitrack=${multitrack ? '1' : '0'}${t(0)};Convert=${convert ? '1' : '0'}${t(0)};2xBass=${doubleKick ? '1' : '0'}${t(0)};RhythmKeys=${rhythmOnKeys ? '1' : '0'}${t(0)};RhythmBass=${rhythmOnBass ? '1' : '0'}${t(0)};CATemh=${CATemh ? '1' : '0'}${t(0)};ExpertOnly=${expertOnly ? '1' : '0'}`
  }

  output += `${t(0)})${t(0)}`

  return output
}

/**
 * Converts a parsed song object or an array of parsed song objects back to `.dta` file contents string.
 * - - - -
 * @param {DTAFile[] | DTAFile} songs A parsed song object or an array of parsed song objects.
 * @param {StringifyDataOptions} options `OPTIONAL` An object with options that customizes the stringify process. If an object
 * is not passed as argument at all, it will use default configurations to generate MAGMA C3's `.dta` file contents type.
 *
 * Only some values can be customized on the default option for maximum compatibility with other `.dta` file parsers.
 * @returns {string} A string representation of this parsed song object as a `.dta` file contents string.
 */
export const stringifyDTA = (songs: DTAFile[] | DTAFile, options?: StringifyDataOptions): string => {
  const opts = useDefaultOptions<StringifyDataOptions, true>(
    {
      detailedTracksStructure: false,
      gameOriginAsRB3DLC: false,
      guitarCores: false,
      ignoreFakeSongs: true,
      omitUnusedRanks: false,
      placeCustomAttributes: true,
      placeRB3DXAttributes: false,
      sortBy: null,
      type: 'rbn',
      useSpaces: false,
      wiiMode: null,
    },
    options
  )
  let output = ''

  const { type, useSpaces, ignoreFakeSongs, sortBy, detailedTracksStructure } = opts

  if (Array.isArray(songs) && sortBy) {
    songs = sortDTA(songs, sortBy)
  }

  if (Array.isArray(songs)) {
    for (const value of songs) {
      if (ignoreFakeSongs && value.fake) {
        // Don't add to songs...
      } else {
        if (type === 'rb3_dlc') output += stringifyRB3DLC(value, opts)
        else output += stringifyDefault(value, opts)
      }
    }
  } else {
    if (ignoreFakeSongs && songs.fake) {
      // Don't add to songs...
    } else {
      if (type === 'rb3_dlc') output += stringifyRB3DLC(songs, opts)
      else output += stringifyDefault(songs, opts)
    }
  }

  if (useSpaces !== null) {
    if (detailedTracksStructure) {
      // output = output.replace(/\t/g, '   ')
    } else if (typeof useSpaces === 'boolean') {
      output = output.replace(/\t/g, '   ')
    } else if (typeof useSpaces === 'number') {
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
