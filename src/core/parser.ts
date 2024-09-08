import { localeObject } from '../core.js'
import { isDTAFile, slashQToQuote, useDefaultOptions, type DTASongObjectTypes } from '../lib.js'
import { dtaDefault, type DTAFile, type DTAMap, type PartialDTAFile } from './dta.js'

/**
 * Converts a DTAFile `Map` class to a `DTAFile` object, sorting all key values to match common `.dta` file structure.
 * - - - -
 * @param {DTAMap} song A `Map` class with `DTAFile` keys and values.
 * @returns {DTAMap} A `Map` class with `DTAFile` keys and values.
 */
export const sortDTAMap = (song: DTAMap): DTAMap => {
  const sortedDTA = new Map() as DTAMap

  for (const key of localeObject.sortedKeys) {
    if (song.has(key)) {
      sortedDTA.set(key, song.get(key))
    }
  }

  return sortedDTA
}

/**
 * Checks if a tracks count array is empty (having all tracks with 0 channels).
 * - - - -
 * @param {number[]} tracksCount An array with the counting of all audio tracks.
 * @returns {boolean} A boolean value that tells if the provided tracks count array is empty.
 */
export const isTracksCountEmpty = (tracksCount: number[]): boolean => {
  let proof = true
  for (const track of tracksCount) {
    if (track !== 0) proof = false
  }

  return proof
}

export type DTAContentParserFormatTypes = 'complete' | 'partial'

export interface DTAContentParserOptions {
  /**
   * The format you want to parse a `.dta` file contents. Default is `'complete'`.
   *
   * On actual songs, the `'complete'` value (also the default value) is the best choice, since
   * default values will still be placed on functions, such as the DTA stringify function when
   * necessary without having these values explicively settled in the object, saving memory usage.
   *
   * On songs metadata updates, the `'partial'` value, combining with `omitUnusedValues` to `false`,
   * is the best choice.
   */
  format?: DTAContentParserFormatTypes
  /**
   * If `true`, certain values treated as default on the Rock Band 3 parsing process will be omitted from
   * the generated `DTAFile` object. Default is `false`.
   */
  omitUnusedValues?: boolean
  /**
   * The `cores` is generally an array filled with `-1` values on almost every DTA (except for official songs),
   * so not registering it lowers the memory usage, set this to `true` if you want to have them registered anyway.
   * Default is `false`.
   */
  registerCores?: boolean
}

/**
 * Parses a song contents into a `DTAFile`.
 *
 * This function can parse and create complete `DTAFile` objects with all required values
 * (used on actual songs), or partial `DTAFile` objects, omitting unused keys values
 * (used on songs metadata updates).
 *
 * For songs metadata updates parsing, changing the options to both `format` to `'partial'`
 * and `omitUnusedValues` to `false` is the best choice, since you might have updates that
 * changes non-default values to default values.
 * - - - -
 * @param {string} song A depacked `.dta` file contents as string.
 * @param {DTAContentParserOptions} options d
 * @returns {DTAMap} The song parsed as a `DTAFile` Map object.
 */
export const parseDTA = (song: string, options?: DTAContentParserOptions): DTAMap => {
  const opts = useDefaultOptions<DTAContentParserOptions, true>(
    {
      format: 'complete',
      omitUnusedValues: true,
      registerCores: false,
    },
    options
  )
  let namingIndex = 0,
    hasName = -1,
    hasArtist = -1,
    hasAlbumName = -1,
    hasPackName = -1,
    hasLoadingPhrase = -1,
    hasAuthorName = -1,
    hasStringAuthorName = -1,
    hasKeysAuthorName = -1,
    gotID = false,
    tracksStarted = false,
    processedTrack = '',
    processedKey = '',
    rankStarted = false,
    rankFinished = false,
    soloStarted = false

  const tracksCount: number[] = [0, 0, 0, 0, 0, 0]
  const preview: number[] = [0, 0]
  const solo: string[] = []
  const languages: string[] = []
  const extraAuthoring: string[] = []

  const newDTA = new Map() as DTAMap

  const splitValues = song.split(/[;(]/).map((value) => value.trim())

  for (const splitValue of splitValues) {
    const [key, ...content] = splitValue.split(' ')
    const keyFilter = key.replaceAll("'", '')

    if (keyFilter === 'name' && !(content.join(' ').startsWith('songs/') || content.join(' ').startsWith('"songs/') || content.join(' ').startsWith("'songs/"))) {
      hasName = namingIndex
      namingIndex++
    }

    if (keyFilter === 'artist') {
      hasArtist = namingIndex
      namingIndex++
    }

    if (keyFilter === 'album_name') {
      hasAlbumName = namingIndex
      namingIndex++
    }

    if (keyFilter === 'pack_name') {
      hasPackName = namingIndex
      namingIndex++
    }

    if (keyFilter === 'loading_phrase') {
      hasLoadingPhrase = namingIndex
      namingIndex++
    }

    if (keyFilter === 'author') {
      hasAuthorName = namingIndex
      namingIndex++
    }

    if (keyFilter === 'strings_author') {
      hasStringAuthorName = namingIndex
      namingIndex++
    }

    if (keyFilter === 'keys_author') {
      hasKeysAuthorName = namingIndex
      namingIndex++
    }
  }

  const quoteMatches = song.match(/"(.*?)"/g)
  if (quoteMatches) {
    const names = Array.from(quoteMatches)
      .map((name) => name.slice(1, -1))
      .filter((name) => {
        if (!(name.startsWith('songs/') || name.endsWith('.mid') || name.startsWith('sfx/') || name.endsWith('.milo') || name.endsWith('.cue'))) return name
      })

    names.forEach((name, i) => {
      if (i === hasName) newDTA.set('name', slashQToQuote(name))
      else if (i === hasArtist) newDTA.set('artist', slashQToQuote(name))
      else if (i === hasAlbumName) newDTA.set('album_name', slashQToQuote(name))
      else if (i === hasPackName) newDTA.set('pack_name', slashQToQuote(name))
      else if (i === hasLoadingPhrase) newDTA.set('loading_phrase', slashQToQuote(name))
      else if (i === hasAuthorName) newDTA.set('author', slashQToQuote(name))
      else if (i === hasStringAuthorName) newDTA.set('strings_author', slashQToQuote(name))
      else if (i === hasKeysAuthorName) newDTA.set('keys_author', slashQToQuote(name))
    })
  }

  splitValues.forEach((s) => {
    const clean = s.replaceAll("'", '').trim()
    const [key, ...content] = s.split(' ')
    const keyFilter = key.replaceAll("'", '')
    const newValue = content.join(' ').replaceAll(')', '').replaceAll("'", '').trim()

    if (!gotID) {
      if (clean) {
        newDTA.set('id', clean)
        gotID = true
        return
      }

      return
    }

    // Processing all boolean-typed values
    if (keyFilter === 'master' || keyFilter === 'fake' || keyFilter === 'album_art' || keyFilter === 'alternate_path') {
      if (Number(newValue) === 1 || newValue.toLowerCase() === 'true') {
        newDTA.set(keyFilter, true)
        return
      }

      newDTA.set(keyFilter, false)
      return
    }

    // Processing all number-typed values
    if (keyFilter === 'context' || keyFilter === 'vocal_parts' || keyFilter === 'mute_volume' || keyFilter === 'mute_volume_vocals' || keyFilter === 'hopo_threshold' || keyFilter === 'song_scroll_speed' || keyFilter === 'song_length' || keyFilter === 'version' || keyFilter === 'format' || keyFilter === 'year_released' || keyFilter === 'year_recorded' || keyFilter === 'rating' || keyFilter === 'tuning_offset_cents' || keyFilter === 'guide_pitch_volume' || keyFilter === 'album_track_number' || keyFilter === 'vocal_tonic_note' || keyFilter === 'song_tonality' || keyFilter === 'song_key' || keyFilter === 'upgrade_version' || keyFilter === 'base_points') {
      newDTA.set(keyFilter, Number(newValue))
      return
    }

    // Processing all string-typed values
    if (keyFilter === 'bank' || keyFilter === 'drum_bank' || keyFilter === 'band_fail_cue' || keyFilter === 'genre' || keyFilter === 'vocal_gender' || keyFilter === 'sub_genre' || keyFilter === 'game_origin' || keyFilter === 'encoding') {
      newDTA.set(keyFilter, newValue.replaceAll('"', '').replaceAll("'", ''))
      return
    }

    // Etc Processing...
    if (keyFilter === 'song_id') {
      if (!Number.isNaN(Number(newValue))) {
        newDTA.set('song_id', Number(newValue))
        return
      }

      newDTA.set('song_id', newValue)
      return
    }

    if (keyFilter === 'name' && (content.join(' ').startsWith('songs/') || content.join(' ').startsWith('"songs/') || content.join(' ').startsWith("'songs/"))) {
      newDTA.set('songname', newValue.replaceAll('"', '').split('/')[1])
      return
    }

    if (keyFilter === 'tracks') {
      tracksStarted = true
      return
    }

    if (tracksStarted) {
      if (keyFilter === 'drum') {
        if (content.filter((val) => val !== ')').length > 0) {
          tracksCount[0] = content.filter((val) => val !== ')').length
          return
        } else {
          processedTrack = 'drum'
          tracksStarted = false
          return
        }
      } else if (keyFilter === 'bass') {
        if (content.filter((val) => val !== ')').length > 0) {
          tracksCount[1] = content.filter((val) => val !== ')').length
          return
        } else {
          processedTrack = 'bass'
          tracksStarted = false
          return
        }
      } else if (keyFilter === 'guitar') {
        if (content.filter((val) => val !== ')').length > 0) {
          tracksCount[2] = content.filter((val) => val !== ')').length
          return
        } else {
          processedTrack = 'guitar'
          tracksStarted = false
          return
        }
      } else if (keyFilter === 'vocals') {
        if (content.filter((val) => val !== ')').length > 0) {
          tracksCount[3] = content.filter((val) => val !== ')').length
          return
        } else {
          processedTrack = 'vocals'
          tracksStarted = false
          return
        }
      } else if (keyFilter === 'keys') {
        if (content.filter((val) => val !== ')').length > 0) {
          tracksCount[4] = content.filter((val) => val !== ')').length
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
      const count = s.replaceAll(')', '').trim().split(' ').length
      if (processedTrack === 'drum') tracksCount[0] = count
      else if (processedTrack === 'bass') tracksCount[1] = count
      else if (processedTrack === 'guitar') tracksCount[2] = count
      else if (processedTrack === 'vocals') tracksCount[3] = count
      else if (processedTrack === 'keys') tracksCount[4] = count
      tracksStarted = true
      processedTrack = ''
      return
    }

    if (keyFilter === 'crowd_channels') {
      if (tracksCount.length === 7) {
        tracksCount[6] = content.length
        return
      }
      tracksCount.push(content.length)
      return
    }

    if (keyFilter === 'pans' || keyFilter === 'vols' || (keyFilter === 'cores' && opts.registerCores) || keyFilter === 'real_guitar_tuning' || keyFilter === 'real_bass_tuning') {
      processedKey = keyFilter
      return
    }

    if (processedKey) {
      const numbers = s
        .replaceAll(')', '')
        .trim()
        .split(' ')
        .map((value) => Number(value))
      if (processedKey === 'pans') newDTA.set('pans', numbers)
      else if (processedKey === 'vols') {
        newDTA.set('vols', numbers)
        const tracksCount2 = numbers.length

        let diffTracksCount = 0
        for (const count of tracksCount) {
          if (count) {
            diffTracksCount += count
          }
        }
        if (tracksCount2 - diffTracksCount > 2) {
          tracksCount[5] = tracksCount2 - diffTracksCount - 2
        } else {
          tracksCount[5] = tracksCount2 - diffTracksCount
        }
      } else if (processedKey === 'cores') newDTA.set('cores', numbers)
      else if (processedKey === 'real_guitar_tuning') newDTA.set('real_guitar_tuning', numbers)
      else if (processedKey === 'real_bass_tuning') newDTA.set('real_bass_tuning', numbers)
      processedKey = ''
      return
    }

    if (keyFilter === 'anim_tempo') {
      if (newValue === 'kTempoSlow' || Number(newValue) === 16) {
        newDTA.set('anim_tempo', 16)
        return
      } else if (newValue === 'kTempoMedium' || Number(newValue) === 32) {
        newDTA.set('anim_tempo', 32)
        return
      } else if (newValue === 'kTempoFast' || Number(newValue) === 64) {
        newDTA.set('anim_tempo', 64)
        return
      }
    }

    if (keyFilter === 'preview') {
      const [previewStart, previewFinish] = newValue.split(' ')
      preview[0] = Number(previewStart)
      preview[1] = Number(previewFinish)
      return
    }

    if (keyFilter === 'rank') {
      rankStarted = true
      return
    }

    if (rankStarted && !rankFinished) {
      if (keyFilter === 'drum' || keyFilter === 'bass' || keyFilter === 'guitar' || keyFilter === 'keys' || keyFilter === 'vocals' || keyFilter === 'real_bass' || keyFilter === 'real_guitar' || keyFilter === 'real_keys' || keyFilter === 'band') {
        const rankKey = `rank_${keyFilter}` as keyof PartialDTAFile
        newDTA.set(rankKey, Number(newValue))
        return
      } else {
        rankFinished = true
      }
    }

    if (keyFilter === 'solo') {
      soloStarted = true
      return
    }

    if (soloStarted) {
      const soloFlags = s.replaceAll(')', '').replaceAll("'", '').split(' ') as string[] | undefined
      soloFlags &&
        soloFlags.forEach((flag) => {
          solo.push(flag)
        })
      soloStarted = false
      return
    }

    if (keyFilter === 'extra_authoring') {
      for (const extra of newValue.split(' ')) {
        extraAuthoring.push(extra)
      }
    }

    if (s.includes('Song authored by')) {
      const [, , , ...authorArray] = s.split(' ')

      newDTA.set('author', authorArray.join(' ').trim())
      return
    }

    if (s.includes('s)=')) {
      const [, ...langs] = s.split(/[=,]/).filter((value) => value)
      for (const lang of langs) {
        languages.push(lang.toLowerCase())
      }
    }

    if (s.includes('Karaoke=')) {
      const proof = Boolean(Number(s.split('=')[1].replaceAll(')', '').trim()))
      newDTA.set('karaoke', proof)
      return
    }

    if (s.includes('Multitrack=')) {
      const proof = Boolean(Number(s.split('=')[1].replaceAll(')', '').trim()))
      newDTA.set('multitrack', proof)
      return
    }

    if (s.includes('Convert=')) {
      const proof = Boolean(Number(s.split('=')[1].replaceAll(')', '').trim()))
      newDTA.set('convert', proof)
      return
    }

    if (s.includes('2xBass=')) {
      const proof = Boolean(Number(s.split('=')[1].replaceAll(')', '').trim()))
      newDTA.set('double_kick', proof)
      return
    }

    if (s.includes('RhythmKeys=')) {
      const proof = Boolean(Number(s.split('=')[1].replaceAll(')', '').trim()))
      newDTA.set('rhythm_on_keys', proof)
      return
    }

    if (s.includes('RhythmBass=')) {
      const proof = Boolean(Number(s.split('=')[1].replaceAll(')', '').trim()))
      newDTA.set('rhythm_on_bass', proof)
      return
    }

    if (s.includes('CATemh=')) {
      const proof = Boolean(Number(s.split('=')[1].replaceAll(')', '').trim()))
      newDTA.set('cat_ehm', proof)
      return
    }

    if (s.includes('ExpertOnly=')) {
      const proof = Boolean(Number(s.split('=')[1].replaceAll(')', '').trim()))
      newDTA.set('expert_only', proof)
      return
    }
  })

  if (!isTracksCountEmpty(tracksCount)) newDTA.set('tracks_count', tracksCount)
  if (preview[0] !== 0 && preview[1] !== 0) newDTA.set('preview', preview)
  if (solo.length > 0) newDTA.set('solo', solo)
  if (languages.length > 0) newDTA.set('languages', languages)
  if (extraAuthoring.length > 0) newDTA.set('extra_authoring', extraAuthoring)

  if (opts.format === 'complete' && newDTA.has('rank_vocals') && (newDTA.get('rank_vocals') as number) > 0 && newDTA.get('vocal_parts') === 0) newDTA.set('vocal_parts', 1)

  if (opts.format === 'complete' && !isDTAFile(Object.fromEntries(newDTA) as DTASongObjectTypes)) throw new Error(`SongsDTAError: Tried to parse songs with complete information but all necessary values were not found. Try to use "DTASongUpdatesParser()" function instead.`)

  const defaultValuesObject = dtaDefault()

  if (opts.format === 'complete') {
    for (const defaultKeys of Object.keys(defaultValuesObject) as (keyof DTAFile)[]) {
      if (newDTA.has(defaultKeys)) break
      newDTA.set(defaultKeys, defaultValuesObject[defaultKeys])
    }
  }

  if (opts.omitUnusedValues && opts.format !== 'complete') {
    if (newDTA.get('mute_volume') === -96) newDTA.delete('mute_volume')
    if (newDTA.get('mute_volume_vocals') === -12) newDTA.delete('mute_volume_vocals')
    if (newDTA.get('hopo_threshold') === 170) newDTA.delete('hopo_threshold')
    if (newDTA.get('song_scroll_speed') === 2300) newDTA.delete('song_scroll_speed')
    if (newDTA.get('version') === 30) newDTA.delete('version')
    if (newDTA.get('format') === 10) newDTA.delete('format')
    if (newDTA.get('tuning_offset_cents') === 0) newDTA.delete('tuning_offset_cents')
    if (newDTA.get('guide_pitch_volume') === -3) newDTA.delete('guide_pitch_volume')
    if (newDTA.get('karaoke') === false) newDTA.delete('karaoke')
    if (newDTA.get('multitrack') === false) newDTA.delete('multitrack')
    if (newDTA.get('convert') === false) newDTA.delete('convert')
    if (newDTA.get('double_kick') === false) newDTA.delete('double_kick')
    if (newDTA.get('rhythm_on_keys') === false) newDTA.delete('rhythm_on_keys')
    if (newDTA.get('rhythm_on_bass') === false) newDTA.delete('rhythm_on_bass')
    if (newDTA.get('cat_ehm') === false) newDTA.delete('cat_ehm')
    if (newDTA.get('expert_only') === false) newDTA.delete('expert_only')
  }

  const sorted = sortDTAMap(newDTA)

  return sorted
}
