import { type SongUpdateObject, localeValueToKey } from '../core.js'
import { genTabs, quoteToSlashQ, useDefaultOptions } from '../utils.js'

export interface StringifySongUpdatesOptions {
  /**
   * If `true`, each song updates will be placed on a single line. Default is `false`.
   */
  inline?: boolean
}

export const keySignatureMap = {
  A: { tonicNote: 9, tonality: 0 },
  'A Major': { tonicNote: 9, tonality: 0 },
  Am: { tonicNote: 9, tonality: 1 },
  'A Minor': { tonicNote: 9, tonality: 1 },
  'A#': { tonicNote: 10, tonality: 0 },
  'A# Major': { tonicNote: 10, tonality: 0 },
  Bb: { tonicNote: 10, tonality: 0 },
  'Bb Major': { tonicNote: 10, tonality: 0 },
  'A#m': { tonicNote: 10, tonality: 1 },
  'A# Minor': { tonicNote: 10, tonality: 1 },
  Bbm: { tonicNote: 10, tonality: 1 },
  'Bb Minor': { tonicNote: 10, tonality: 1 },
  B: { tonicNote: 11, tonality: 0 },
  'B Major': { tonicNote: 11, tonality: 0 },
  Bm: { tonicNote: 11, tonality: 1 },
  'B Minor': { tonicNote: 11, tonality: 1 },
  C: { tonicNote: 0, tonality: 0 },
  'C Major': { tonicNote: 0, tonality: 0 },
  Cm: { tonicNote: 0, tonality: 1 },
  'C Minor': { tonicNote: 0, tonality: 1 },
  'C#': { tonicNote: 1, tonality: 0 },
  'C# Major': { tonicNote: 1, tonality: 0 },
  Db: { tonicNote: 1, tonality: 0 },
  'Db Major': { tonicNote: 1, tonality: 0 },
  'C#m': { tonicNote: 1, tonality: 1 },
  'C# Minor': { tonicNote: 1, tonality: 1 },
  Dbm: { tonicNote: 1, tonality: 1 },
  'Db Minor': { tonicNote: 1, tonality: 1 },
  D: { tonicNote: 2, tonality: 0 },
  'D Major': { tonicNote: 2, tonality: 0 },
  Dm: { tonicNote: 2, tonality: 1 },
  'D Minor': { tonicNote: 2, tonality: 1 },
  'D#': { tonicNote: 3, tonality: 0 },
  'D# Major': { tonicNote: 3, tonality: 0 },
  Eb: { tonicNote: 3, tonality: 0 },
  'Eb Major': { tonicNote: 3, tonality: 0 },
  'D#m': { tonicNote: 3, tonality: 1 },
  'D# Minor': { tonicNote: 3, tonality: 1 },
  Ebm: { tonicNote: 3, tonality: 1 },
  'Eb Minor': { tonicNote: 3, tonality: 1 },
  E: { tonicNote: 4, tonality: 0 },
  'E Major': { tonicNote: 4, tonality: 0 },
  Em: { tonicNote: 4, tonality: 1 },
  'E Minor': { tonicNote: 4, tonality: 1 },
  F: { tonicNote: 5, tonality: 0 },
  'F Major': { tonicNote: 5, tonality: 0 },
  Fm: { tonicNote: 5, tonality: 1 },
  'F Minor': { tonicNote: 5, tonality: 1 },
  'F#': { tonicNote: 6, tonality: 0 },
  'F# Major': { tonicNote: 6, tonality: 0 },
  Gb: { tonicNote: 6, tonality: 0 },
  'Gb Major': { tonicNote: 6, tonality: 0 },
  'F#m': { tonicNote: 6, tonality: 1 },
  'F# Minor': { tonicNote: 6, tonality: 1 },
  Gbm: { tonicNote: 6, tonality: 1 },
  'Gb Minor': { tonicNote: 6, tonality: 1 },
  G: { tonicNote: 7, tonality: 0 },
  'G Major': { tonicNote: 7, tonality: 0 },
  Gm: { tonicNote: 7, tonality: 1 },
  'G Minor': { tonicNote: 7, tonality: 1 },
  'G#': { tonicNote: 8, tonality: 0 },
  'G# Major': { tonicNote: 8, tonality: 0 },
  Ab: { tonicNote: 8, tonality: 0 },
  'Ab Major': { tonicNote: 8, tonality: 0 },
  'G#m': { tonicNote: 8, tonality: 1 },
  'G# Minor': { tonicNote: 8, tonality: 1 },
  Abm: { tonicNote: 8, tonality: 1 },
  'Ab Minor': { tonicNote: 8, tonality: 1 },
} as const

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
  const opts = useDefaultOptions<StringifySongUpdatesOptions, true>({ inline: false }, options)
  const { inline } = opts

  let rtnString = ''

  const upgKeys = Object.keys(updates).sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) return 1
    else if (a.toLowerCase() < b.toLowerCase()) return -1
    return 0
  })

  for (const key of upgKeys) {
    const { key: key_signature, genre, rating, name, album, id, artist, alternate_path, vocal_gender, author } = updates[key]
    if (id) break
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
      rtnString += `${inline ? ' ' : genTabs()}(rating ${typeof rating === 'number' ? rating.toString() : localeValueToKey.rating(rating).toString()})`
    }

    if (album) {
      const { hasArt, name: album_name, track_number } = album
      rtnString += `${hasArt !== undefined ? `${inline ? ' ' : genTabs()}(album_art ${hasArt ? 'TRUE' : 'FALSE'})` : ''}${album_name ? `${inline ? ' ' : genTabs()}(album_name "${quoteToSlashQ(album_name)}")` : ''}${track_number ? `${inline ? ' ' : genTabs()}(album_track_number ${track_number.toString()})` : ''}`
    }

    if (key_signature) {
      if (typeof key_signature === 'object') {
        const { key: real_key_signature, trainer_key_override } = key_signature
        const keyInfo = keySignatureMap[real_key_signature]
        rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note ${keyInfo.tonicNote.toString()})${inline ? ' ' : genTabs()}(song_tonality ${keyInfo.tonality.toString()})`

        if (trainer_key_override) {
          const trainerKeyInfo = keySignatureMap[trainer_key_override]
          rtnString += `${inline ? ' ' : genTabs()}(song_key ${trainerKeyInfo.tonicNote.toString()})`
        }
      } else {
        const keyInfo = keySignatureMap[key_signature]
        rtnString += `${inline ? ' ' : genTabs()}(vocal_tonic_note ${keyInfo.tonicNote.toString()})${inline ? ' ' : genTabs()}(song_tonality ${keyInfo.tonality.toString()})`
      }
    }

    if (alternate_path) rtnString += `${inline ? ' ' : genTabs()}(alternate_path TRUE)`

    if (author) rtnString += `${inline ? ' ' : genTabs()}(author "${quoteToSlashQ(author)}")`

    rtnString += `)${genTabs(0)}`
  }
  return rtnString
}
