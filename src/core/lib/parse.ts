import { DTAFile, createDTA } from '..'
import { slashQToQuote } from '../../utils'

/**
 * Parses a `.dta` file contents into a `DTAFile`.
 * - - - -
 * @param {string} song A depacked `.dta` file contents.
 * @returns {DTAFile} The song parsed as a `DTAFile` object.
 */
export const parseDTA = (song: string): DTAFile => {
  let namingIndex = 0,
    hasName = -1,
    hasArtist = -1,
    hasAlbumName = -1,
    hasPackName = -1,
    gotID = false,
    tracksStarted = false,
    processedTrack = '',
    processedAudio = '',
    rankStarted = false,
    rankFinished = false,
    soloStarted = false

  const parsed = createDTA(undefined, true)
  const split = song.split(/[;(]/).map((value) => value.trim())

  split.forEach((value) => {
    const [key, ...content] = value.split(' ')
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
  })

  try {
    const names = Array.from(song.match(/"(.*?)"/g) as RegExpMatchArray)
      .map((name) => name.slice(1, -1))
      .filter((name) => {
        if (!(name.startsWith('songs/') || name.endsWith('.mid') || name.startsWith('sfx/') || name.endsWith('.milo') || name.endsWith('.cue'))) return name
      })

    names.forEach((name, i) => {
      if (i === hasName) parsed.name = slashQToQuote(name)
      else if (i === hasArtist) parsed.artist = slashQToQuote(name)
      else if (i === hasAlbumName) parsed.album_name = slashQToQuote(name)
      else if (i === hasPackName) parsed.pack_name = slashQToQuote(name)
    })
  } catch (e) {
    // Do nothing
  }

  split.forEach((value) => {
    const clean = value.replaceAll("'", '').trim()
    const [key, ...content] = value.split(' ')
    const keyFilter = key.replaceAll("'", '')
    const newValue = content.join(' ').replaceAll(')', '').replaceAll("'", '').trim()

    if (!gotID) {
      if (clean) {
        parsed.id = clean
        gotID = true
        return
      }

      return
    }

    if (keyFilter === 'master') {
      if (Number(newValue) === 1 || newValue.toLowerCase() === 'true') {
        parsed.master = true
        return
      }

      parsed.master = false
      return
    }

    if (keyFilter === 'context') {
      parsed.context = Number(newValue)
      return
    }

    if (keyFilter === 'song_id') {
      if (!Number.isNaN(Number(newValue))) {
        parsed.song_id = Number(newValue)
        return
      }

      parsed.song_id = newValue
      return
    }

    if (keyFilter === 'name' && (content.join(' ').startsWith('songs/') || content.join(' ').startsWith('"songs/') || content.join(' ').startsWith("'songs/"))) {
      parsed.songname = newValue.replaceAll('"', '').split('/')[1]
      return
    }

    if (keyFilter === 'tracks') {
      tracksStarted = true
      return
    }

    if (tracksStarted) {
      if (keyFilter === 'drum') {
        if (content.filter((val) => val !== ')').length > 0) {
          parsed.tracks_count[0] = content.filter((val) => val !== ')').length
          return
        } else {
          processedTrack = 'drum'
          tracksStarted = false
          return
        }
      } else if (keyFilter === 'bass') {
        if (content.filter((val) => val !== ')').length > 0) {
          parsed.tracks_count[1] = content.filter((val) => val !== ')').length
          return
        } else {
          processedTrack = 'bass'
          tracksStarted = false
          return
        }
      } else if (keyFilter === 'guitar') {
        if (content.filter((val) => val !== ')').length > 0) {
          parsed.tracks_count[2] = content.filter((val) => val !== ')').length
          return
        } else {
          processedTrack = 'guitar'
          tracksStarted = false
          return
        }
      } else if (keyFilter === 'vocals') {
        if (content.filter((val) => val !== ')').length > 0) {
          parsed.tracks_count[3] = content.filter((val) => val !== ')').length
          return
        } else {
          processedTrack = 'vocals'
          tracksStarted = false
          return
        }
      } else if (keyFilter === 'keys') {
        if (content.filter((val) => val !== ')').length > 0) {
          parsed.tracks_count[4] = content.filter((val) => val !== ')').length
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
      if (processedTrack === 'drum') parsed.tracks_count[0] = count
      else if (processedTrack === 'bass') parsed.tracks_count[1] = count
      else if (processedTrack === 'guitar') parsed.tracks_count[2] = count
      else if (processedTrack === 'vocals') parsed.tracks_count[3] = count
      else if (processedTrack === 'keys') parsed.tracks_count[4] = count
      tracksStarted = true
      processedTrack = ''
      return
    }

    if (keyFilter === 'crowd_channels') {
      if (parsed.tracks_count[6]) {
        parsed.tracks_count[6] = content.length
        return
      }

      if (parsed.tracks_count.length === 6) {
        parsed.tracks_count.push(content.length)
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
      if (processedAudio === 'pans') parsed.pans = numbers
      else if (processedAudio === 'vols') {
        parsed.vols = numbers
        const tracksCount = numbers.length

        let diffTracksCount = 0
        parsed.tracks_count.forEach((count) => {
          if (count) {
            diffTracksCount += count
          }
        })
        if (tracksCount - diffTracksCount > 2) {
          parsed.tracks_count[5] = tracksCount - diffTracksCount - 2
        } else {
          parsed.tracks_count[5] = tracksCount - diffTracksCount
        }
      } else if (processedAudio === 'real_guitar_tuning') parsed.real_guitar_tuning = numbers as typeof parsed.real_guitar_tuning
      else if (processedAudio === 'real_bass_tuning') parsed.real_bass_tuning = numbers as typeof parsed.real_bass_tuning
      processedAudio = ''
      return
    }

    if (keyFilter === 'vocal_parts') {
      if (Number(newValue) === 0) return
      parsed.vocal_parts = Number(newValue) as typeof parsed.vocal_parts
      return
    }

    if (keyFilter === 'mute_volume') {
      if (Number(newValue) === -96) return
      parsed.mute_volume = Number(newValue)
      return
    }

    if (keyFilter === 'mute_volume_vocals') {
      if (Number(newValue) === -12) return
      parsed.mute_volume_vocals = Number(newValue)
      return
    }

    if (keyFilter === 'hopo_threshold') {
      if (Number(newValue) === 170) return
      parsed.hopo_threshold = Number(newValue)
      return
    }

    if (keyFilter === 'song_scroll_speed') {
      if (Number(newValue) === 2300) return
      parsed.song_scroll_speed = Number(newValue) as typeof parsed.song_scroll_speed
      return
    }

    if (keyFilter === 'bank') {
      parsed.bank = newValue.replaceAll('"', '') as typeof parsed.bank
    }

    if (keyFilter === 'drum_bank') {
      parsed.drum_bank = newValue.replaceAll('"', '') as typeof parsed.drum_bank
      return
    }

    if (keyFilter === 'anim_tempo') {
      if (newValue === 'kTempoSlow' || Number(newValue) === 16) {
        parsed.anim_tempo = 16
        return
      } else if (newValue === 'kTempoMedium' || Number(newValue) === 32) {
        parsed.anim_tempo = 32
        return
      } else if (newValue === 'kTempoFast' || Number(newValue) === 64) {
        parsed.anim_tempo = 64
        return
      }
    }

    if (keyFilter === 'song_length') {
      parsed.song_length = Number(newValue)
      return
    }

    if (keyFilter === 'band_fail_cue') {
      parsed.band_fail_cue = newValue.replaceAll('"', '') as typeof parsed.band_fail_cue
      return
    }

    if (keyFilter === 'preview') {
      const [previewStart, previewFinish] = newValue.split(' ')
      parsed.preview[0] = Number(previewStart)
      parsed.preview[1] = Number(previewFinish)
      return
    }

    if (keyFilter === 'rank') {
      rankStarted = true
      return
    }

    if (rankStarted && !rankFinished) {
      if (keyFilter === 'drum') {
        parsed.rank_drum = Number(newValue)
        return
      } else if (keyFilter === 'bass') {
        parsed.rank_bass = Number(newValue)
        return
      } else if (keyFilter === 'guitar') {
        parsed.rank_guitar = Number(newValue)
        return
      } else if (keyFilter === 'keys') {
        parsed.rank_keys = Number(newValue)
        return
      } else if (keyFilter === 'vocals') {
        parsed.rank_vocals = Number(newValue)
        return
      } else if (keyFilter === 'real_bass') {
        parsed.rank_real_bass = Number(newValue)
        return
      } else if (keyFilter === 'real_guitar') {
        parsed.rank_real_guitar = Number(newValue)
        return
      } else if (keyFilter === 'real_keys') {
        parsed.rank_real_keys = Number(newValue)
        return
      } else if (keyFilter === 'band') {
        parsed.rank_band = Number(newValue)
        return
      } else {
        rankFinished = true
      }
    }

    if (keyFilter === 'genre') {
      parsed.genre = newValue as typeof parsed.genre
      return
    }

    if (keyFilter === 'vocal_gender') {
      parsed.vocal_gender = newValue as typeof parsed.vocal_gender
      return
    }

    if (keyFilter === 'version') {
      if (Number(newValue) === 30) return
      parsed.version = Number(newValue)
      return
    }

    if (keyFilter === 'format') {
      if (Number(newValue) === 10) return
      parsed.format = Number(newValue)
      return
    }

    if (keyFilter === 'album_art') {
      if (Number(newValue) === 1 || newValue.toLowerCase() === 'true') {
        parsed.album_art = true
        return
      }
    }

    if (keyFilter === 'year_released') {
      parsed.year_released = Number(newValue)
      return
    }

    if (keyFilter === 'year_recorded') {
      parsed.year_recorded = Number(newValue)
      return
    }

    if (keyFilter === 'rating') {
      parsed.rating = Number(newValue) as typeof parsed.rating
      return
    }

    if (keyFilter === 'sub_genre') {
      parsed.sub_genre = newValue as typeof parsed.sub_genre
      return
    }

    if (keyFilter === 'solo') {
      soloStarted = true
      return
    }

    if (soloStarted) {
      const soloFlags = value.replaceAll(')', '').replaceAll("'", '').split(' ') as typeof parsed.solo
      soloFlags &&
        soloFlags.forEach((flag) => {
          if (!parsed.solo) parsed.solo = []
          parsed.solo.push(flag)
        })
      soloStarted = false
      return
    }

    if (keyFilter === 'tuning_offset_cents') {
      if (Number(newValue) === 0) return
      parsed.tuning_offset_cents = Number(newValue)
      return
    }

    if (keyFilter === 'guide_pitch_volume') {
      if (Number(newValue) === -3) return
      parsed.guide_pitch_volume = Number(newValue)
      return
    }

    if (keyFilter === 'game_origin') {
      parsed.game_origin = newValue as typeof parsed.game_origin
      return
    }

    if (keyFilter === 'encoding') {
      parsed.encoding = newValue as typeof parsed.encoding
      return
    }

    if (keyFilter === 'album_track_number') {
      parsed.album_track_number = Number(newValue)
      return
    }

    if (keyFilter === 'vocal_tonic_note') {
      parsed.vocal_tonic_note = Number(newValue) as typeof parsed.vocal_tonic_note
      return
    }

    if (keyFilter === 'song_tonality') {
      parsed.song_tonality = Number(newValue) as typeof parsed.song_tonality
      return
    }

    if (keyFilter === 'song_key') {
      parsed.song_key = Number(newValue) as typeof parsed.song_key
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

    if (keyFilter === 'alternate_path') {
      if (Number(newValue) === 1 || newValue.toLowerCase() === 'true') {
        parsed.alternate_path = true
        return
      }
    }

    if (keyFilter === 'base_points') {
      parsed.base_points = Number(newValue)
      return
    }

    if (value.includes('Song authored by')) {
      const [, , , ...authorArray] = value.split(' ')

      parsed.author = authorArray.join(' ').trim()
      return
    }

    if (value.includes('s)=')) {
      const [, ...langs] = value.split(/[=,]/).filter((value) => value)
      if (!parsed.languages) {
        parsed.languages = []
      }
      langs.forEach((lang) => {
        parsed.languages?.push(lang)
      })
    }

    if (value.includes('Karaoke=')) {
      const proof = Boolean(Number(value.split('=')[1].replaceAll(')', '').trim()))

      if (proof) {
        parsed.karaoke = proof
      }

      return
    }

    if (value.includes('Multitrack=')) {
      const proof = Boolean(Number(value.split('=')[1].replaceAll(')', '').trim()))

      if (proof) {
        parsed.multitrack = proof
      }

      return
    }

    if (value.includes('Convert=')) {
      const proof = Boolean(Number(value.split('=')[1].replaceAll(')', '').trim()))

      if (proof) {
        parsed.convert = proof
      }

      return
    }

    if (value.includes('2xBass=')) {
      const proof = Boolean(Number(value.split('=')[1].replaceAll(')', '').trim()))

      if (proof) {
        parsed.doubleKick = proof
      }

      return
    }

    if (value.includes('RhythmKeys=')) {
      const proof = Boolean(Number(value.split('=')[1].replaceAll(')', '').trim()))

      if (proof) {
        parsed.rhythmOnKeys = proof
      }

      return
    }

    if (value.includes('RhythmBass=')) {
      const proof = Boolean(Number(value.split('=')[1].replaceAll(')', '').trim()))

      if (proof) {
        parsed.rhythmOnBass = proof
      }

      return
    }

    if (value.includes('CATemh=')) {
      const proof = Boolean(Number(value.split('=')[1].replaceAll(')', '').trim()))

      if (proof) {
        parsed.CATemh = proof
      }

      return
    }

    if (value.includes('ExpertOnly=')) {
      const proof = Boolean(Number(value.split('=')[1].replaceAll(')', '').trim()))

      if (proof) {
        parsed.expertOnly = proof
      }

      return
    }
  })

  if (parsed.vocal_tonic_note !== undefined && parsed.song_tonality === undefined) parsed.song_tonality = 0

  return parsed
}
