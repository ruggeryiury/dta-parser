import { genTabs, quoteToSlashQ } from '../utils/stringProcessors'
import { localeValueToKey } from './locale'
import { SongUpdateObject } from './update'

export interface StringifySongUpdatesOptions {
  /**
   * If `true`, each song updates will be placed on a single line. Default is `false`.
   */
  inline?: boolean
}

/**
 * Converts a `SongUpdateObject` object to `.dta` file contents string.
 *
 * Unlike the standard stringify function available on `Song` classes, which expects complete information
 * of the song, this function accepts partial information about any song.
 *
 * This type of stringify function generates file contents compatible as Rock Band 3's internal `songs_updates.dta` file,
 * that can be injected on a modified patch file for the game like Rock Band 3 Deluxe or RB3Enhanced.
 * - - - -
 * @param {SongUpdateObject} updates An object with `UpdateDataOptions` objects, which keys are each
 * song unique string ID.
 * @param {StringifySongUpdatesOptions} options `OPTIONAL` An object with options that customizes the stringify process.
 * @returns {string} The new upgrade file contents
 */
export const stringifySongUpdates = (updates: SongUpdateObject, options?: StringifySongUpdatesOptions): string => {
  if (!options) options = { inline: false }

  const { inline } = options
  let rtnString = ''

  const upgKeys = Object.keys(updates).sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) return 1
    else if (a.toLowerCase() < b.toLowerCase()) return -1
    return 0
  })

  upgKeys.forEach((key) => {
    const { key: key_signature, genre, rating, name, album, id, artist, alternate_path, vocal_gender } = updates[key]
    if (id) return
    rtnString += `(${key}`

    if (name) {
      rtnString += `${inline ? ' ' : genTabs()}(name "${quoteToSlashQ(name)}")`
    }

    if (artist) {
      rtnString += `${inline ? ' ' : genTabs()}(artist "${quoteToSlashQ(artist)}")`
    }

    if (genre) {
      const { genre: song_genre, sub_genre } = genre
      rtnString += `${inline ? ' ' : genTabs()}(genre ${localeValueToKey.genre(song_genre)})`

      if (sub_genre) {
        rtnString += `${inline ? ' ' : genTabs()}(sub_genre ${localeValueToKey.sub_genre(sub_genre)})`
      }
    }

    if (vocal_gender) {
      rtnString += `${inline ? ' ' : genTabs()}(vocal_gender ${localeValueToKey.vocal_gender(vocal_gender)})`
    }

    if (rating) {
      rtnString += `${inline ? ' ' : genTabs()}(rating ${typeof rating === 'number' ? rating : localeValueToKey.rating(rating)})`
    }

    if (album) {
      const { hasArt, name: album_name, track_number } = album
      rtnString += `${hasArt !== undefined ? `${inline ? ' ' : genTabs()}(album_art ${hasArt ? 'TRUE' : 'FALSE'})` : ''}${
        album_name ? `${inline ? ' ' : genTabs()}(album_name "${quoteToSlashQ(album_name)}")` : ''
      }${track_number ? `${inline ? ' ' : genTabs()}(album_track_number ${track_number})` : ''}`
    }

    if (key_signature) {
      if (typeof key_signature === 'object') {
        const { key: real_key_signature, trainer_key_override } = key_signature
        if (real_key_signature === 'A' || real_key_signature === 'A Major') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 9)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (real_key_signature === 'Am' || real_key_signature === 'A Minor') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 9)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (real_key_signature === 'A#' || real_key_signature === 'A# Major' || real_key_signature === 'Bb' || real_key_signature === 'Bb Major')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 10)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (real_key_signature === 'A#m' || real_key_signature === 'A# Minor' || real_key_signature === 'Bbm' || real_key_signature === 'Bb Minor')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 10)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (real_key_signature === 'B' || real_key_signature === 'B Major') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 11)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (real_key_signature === 'Bm' || real_key_signature === 'B Minor') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 11)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (real_key_signature === 'C' || real_key_signature === 'C Major') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 0)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (real_key_signature === 'Cm' || real_key_signature === 'C Minor') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 0)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (real_key_signature === 'C#' || real_key_signature === 'C# Major' || real_key_signature === 'Db' || real_key_signature === 'Db Major')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 1)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (real_key_signature === 'C#m' || real_key_signature === 'C# Minor' || real_key_signature === 'Dbm' || real_key_signature === 'Db Minor')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 1)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (real_key_signature === 'D' || real_key_signature === 'D Major') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 2)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (real_key_signature === 'Dm' || real_key_signature === 'D Minor') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 2)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (real_key_signature === 'D#' || real_key_signature === 'D# Major' || real_key_signature === 'Eb' || real_key_signature === 'Eb Major')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 3)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (real_key_signature === 'D#m' || real_key_signature === 'D# Minor' || real_key_signature === 'Ebm' || real_key_signature === 'Eb Minor')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 3)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (real_key_signature === 'E' || real_key_signature === 'E Major') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 4)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (real_key_signature === 'Em' || real_key_signature === 'E Minor') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 4)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (real_key_signature === 'F' || real_key_signature === 'F Major') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 5)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (real_key_signature === 'Fm' || real_key_signature === 'F Minor') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 5)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (real_key_signature === 'F#' || real_key_signature === 'F# Major' || real_key_signature === 'Gb' || real_key_signature === 'Gb Major')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 6)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (real_key_signature === 'F#m' || real_key_signature === 'F# Minor' || real_key_signature === 'Gbm' || real_key_signature === 'Gb Minor')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 6)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (real_key_signature === 'G' || real_key_signature === 'G Major') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 7)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (real_key_signature === 'Gm' || real_key_signature === 'G Minor') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 7)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (real_key_signature === 'G#' || real_key_signature === 'G# Major' || real_key_signature === 'Ab' || real_key_signature === 'Ab Major')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 8)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (real_key_signature === 'G#m' || real_key_signature === 'G# Minor' || real_key_signature === 'Abm' || real_key_signature === 'Ab Minor')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 8)${inline ? ' ' : genTabs()}(song_tonality 1)`

        if (trainer_key_override) {
          if (trainer_key_override === 'A') rtnString += `${inline ? ' ' : genTabs()}(song_key 9)`
          else if (trainer_key_override === 'A#' || trainer_key_override === 'Bb') rtnString += `${inline ? ' ' : genTabs()}(song_key 10)`
          else if (trainer_key_override === 'B') rtnString += `${inline ? ' ' : genTabs()}(song_key 11)`
          else if (trainer_key_override === 'C') rtnString += `${inline ? ' ' : genTabs()}(song_key 0)`
          else if (trainer_key_override === 'C#' || trainer_key_override === 'Db') rtnString += `${inline ? ' ' : genTabs()}(song_key 1)`
          else if (trainer_key_override === 'D') rtnString += `${inline ? ' ' : genTabs()}(song_key 2)`
          else if (trainer_key_override === 'D#' || trainer_key_override === 'Eb') rtnString += `${inline ? ' ' : genTabs()}(song_key 3)`
          else if (trainer_key_override === 'E') rtnString += `${inline ? ' ' : genTabs()}(song_key 4)`
          else if (trainer_key_override === 'F') rtnString += `${inline ? ' ' : genTabs()}(song_key 5)`
          else if (trainer_key_override === 'F#' || trainer_key_override === 'Gb') rtnString += `${inline ? ' ' : genTabs()}(song_key 6)`
          else if (trainer_key_override === 'G') rtnString += `${inline ? ' ' : genTabs()}(song_key 7)`
          else if (trainer_key_override === 'G#' || trainer_key_override === 'Ab') rtnString += `${inline ? ' ' : genTabs()}(song_key 8)`
        }
      } else {
        if (key_signature === 'A' || key_signature === 'A Major') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 9)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (key_signature === 'Am' || key_signature === 'A Minor') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 9)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (key_signature === 'A#' || key_signature === 'A# Major' || key_signature === 'Bb' || key_signature === 'Bb Major')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 10)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (key_signature === 'A#m' || key_signature === 'A# Minor' || key_signature === 'Bbm' || key_signature === 'Bb Minor')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 10)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (key_signature === 'B' || key_signature === 'B Major') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 11)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (key_signature === 'Bm' || key_signature === 'B Minor') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 11)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (key_signature === 'C' || key_signature === 'C Major') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 0)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (key_signature === 'Cm' || key_signature === 'C Minor') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 0)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (key_signature === 'C#' || key_signature === 'C# Major' || key_signature === 'Db' || key_signature === 'Db Major')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 1)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (key_signature === 'C#m' || key_signature === 'C# Minor' || key_signature === 'Dbm' || key_signature === 'Db Minor')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 1)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (key_signature === 'D' || key_signature === 'D Major') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 2)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (key_signature === 'Dm' || key_signature === 'D Minor') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 2)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (key_signature === 'D#' || key_signature === 'D# Major' || key_signature === 'Eb' || key_signature === 'Eb Major')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 3)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (key_signature === 'D#m' || key_signature === 'D# Minor' || key_signature === 'Ebm' || key_signature === 'Eb Minor')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 3)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (key_signature === 'E' || key_signature === 'E Major') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 4)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (key_signature === 'Em' || key_signature === 'E Minor') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 4)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (key_signature === 'F' || key_signature === 'F Major') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 5)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (key_signature === 'Fm' || key_signature === 'F Minor') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 5)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (key_signature === 'F#' || key_signature === 'F# Major' || key_signature === 'Gb' || key_signature === 'Gb Major')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 6)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (key_signature === 'F#m' || key_signature === 'F# Minor' || key_signature === 'Gbm' || key_signature === 'Gb Minor')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 6)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (key_signature === 'G' || key_signature === 'G Major') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 7)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (key_signature === 'Gm' || key_signature === 'G Minor') rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 7)${inline ? ' ' : genTabs()}(song_tonality 1)`
        else if (key_signature === 'G#' || key_signature === 'G# Major' || key_signature === 'Ab' || key_signature === 'Ab Major')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 8)${inline ? ' ' : genTabs()}(song_tonality 0)`
        else if (key_signature === 'G#m' || key_signature === 'G# Minor' || key_signature === 'Abm' || key_signature === 'Ab Minor')
          rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note 8)${inline ? ' ' : genTabs()}(song_tonality 1)`
      }
    }

    if (alternate_path) rtnString += `${inline ? ' ' : genTabs()}(alternate_path TRUE)`

    rtnString += `)${genTabs(0)}`
  })
  return rtnString
}
