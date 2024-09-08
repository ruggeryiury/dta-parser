import { localeObject, sortDTA, type DTAMap, type PartialDTAFile, type SongSortingTypes } from '../core.js'
import { genTracksCountArray, isDTAFile, quoteToSlashQ, useDefaultOptions, capitalizeFirstLetter } from '../lib.js'

export type DTAStringifyTypes = 'songs' | 'songs_updates'
export type StringGeneratorTypes = 'localeString' | 'string' | 'number' | 'numberOrLocaleString' | 'boolean' | 'array'
export type StringGeneratorValueType<T extends StringGeneratorTypes> = T extends 'localeString' ? string : T extends 'string' ? string : T extends 'number' ? number : T extends 'boolean' ? boolean : T extends 'numberOrLocaleString' ? number | string : (string | number)[]

export interface DTAStringifyOptions {
  /**
   * Specify the generated type of the DTA. Default is `'rbn'`.
   */
  format?: 'rbn' | 'rb3_dlc'
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
   * Places information used on Rock Band 3 Deluxe, such as author name. Default is `true`.
   */
  placeRB3DXAttributes?: boolean
  /**
   * If `false`, fake songs won't be ignored from the generated DTA file contents. Default is `true`.
   */
  ignoreFakeSongs?: boolean
  /**
   * Changes the sorting of the songs. This property has no influence if you want to stringify a single song.
   */
  sortBy?: SongSortingTypes
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
  /**
   * If `true`, all songs will occupy only one line of the document. Default is `false`.
   */
  allSongsInline?: boolean
}

/**
 * A class that registers all songs' values individually to be stringified.
 * - - - -
 */
export class DTAStringIO {
  /**
   * An object containing all songs that will be stringified when calling the `DTAStringIO.finish()` method.
   */
  content: Record<string, DTAMap | undefined>
  /**
   * An object with values that changes the behavior of the DTA stringify process.
   */
  private opts: Required<DTAStringifyOptions>
  /**
   * The DTA type of the generated string. With this, the stringify process can keep track of
   * which values are needed to perform a song or song updates, throwing specific errors
   * when necessary values are not found on the stringify process for any specific type.
   */
  private type: DTAStringifyTypes

  /**
   * @param {DTAStringifyTypes} type The DTA type of the generated string.
   * @param {Required<DTAStringifyOptions>} opts An object with values that
   * changes the behavior of the DTA stringify process.
   */
  constructor(type: DTAStringifyTypes, opts: Required<DTAStringifyOptions>) {
    this.content = {}
    this.opts = opts
    this.type = type
  }

  /**
   * Creates an empty map entry for a song.
   * - - - -
   * @param {string} id The unique string ID of the song.
   * @returns {DTAMap} A `Map` object that holds all registered values of a song.
   */
  private createDefaultEntry(id: string): DTAMap {
    const newMap = new Map() as DTAMap
    newMap.set('id', id)
    return newMap
  }

  /**
   * Generates a string for each type of key value.
   * - - - -
   * @param {T} type The type of the value.
   * @param {StringGeneratorValueType<T>} value The value itself.
   * @returns {string} A string representation of the value to be inserted on the DTA file contents.
   */
  private renderToStringValue<T extends StringGeneratorTypes = 'string'>(type: T, value: StringGeneratorValueType<T>): string {
    if (type === 'localeString' && typeof value === 'string') {
      return value
    } else if (type === 'string' && typeof value === 'string') {
      return quoteToSlashQ(value)
    }
    if (typeof value === 'number' && typeof value === 'number') {
      return value.toString()
    }
    if (type === 'boolean' && typeof value === 'boolean') {
      return value ? 'TRUE' : 'FALSE'
    }
    if (type === 'numberOrLocaleString') {
      const val = value as string | number
      if (typeof val === 'number') return val.toFixed()
      else return val
    }
    if (type === 'array') {
      const tCountStr = (value as (string | number)[])
        .map((v) => (typeof v === 'string' ? v : v.toString()))
        .join(' ')
        .trim()
      return tCountStr
    }
    return ''
  }

  /**
   * Registers any value on a song map.
   * - - - -
   * @param {string} id The unique string ID of the song.
   * @param {T} key The name of the key you want to register.
   * @param {PartialDTAFile[T]} value The key value.
   * @returns {void}
   */
  add<T extends keyof PartialDTAFile>(id: string, key: T, value: PartialDTAFile[T]): void {
    if (this.content[id]) {
      if (key !== 'id') this.content[id]?.set(key, value)
      else return
    }
  }

  /**
   * Registers any song on the class content.
   * - - - -
   * @param {string} id The unique string ID of the song.
   * @returns {void}
   */
  open(id: string): void {
    if (!this.content[id]) this.content[id] = this.createDefaultEntry(id)
  }

  /**
   * Starts the stringify process of all songs from the class content.
   * - - - -
   * @returns {string} The DTA file contents as string.
   */
  finish(): string {
    /**
     * Inserts a new line, or a space if the `allSongsInline` class option is set to `true`.
     * - - - -
     * @param {number} count The count of new line characters that will be repeated on the generated string.
     * @returns {string} The generated string with a new line or space.
     */
    const n = (count = 1): string => {
      return this.opts.allSongsInline ? ' ' : '\n'.repeat(count)
    }
    /**
     * Inserts a tab character, or an empty string if the `allSongsInline` class option is set to `true`.
     * - - - -
     * @param {number} count The count of tab characters that will be repeated on the generated string.
     * @returns {string} The generated string with a new line or empty string.
     */
    const t = (count = 1): string => {
      return this.opts.allSongsInline ? '' : '\t'.repeat(count)
    }

    const generateRBNMultiLineStrValue = (keyName: string, value: string, tab = 1): string => {
      return `${t(tab)}(${n()}${t(tab + 1)}'${keyName}'${n()}${t(tab + 1)}"${value}"${n()}${t(tab)})${n()}`
    }
    let s = ''
    const allSongsID = Object.keys(this.content)
    const allSongs: PartialDTAFile[] = []
    for (const id of allSongsID) {
      const song = this.content[id]
      if (song !== undefined) allSongs.push(Object.fromEntries(song) as PartialDTAFile)
    }
    const sortedSongs = sortDTA(allSongs, this.opts.sortBy)
    for (const song of sortedSongs) {
      if (this.opts.ignoreFakeSongs && song.fake === true) break
      if (this.type === 'songs' && !isDTAFile(song)) throw new Error('DTAStringIOError: Tried to stringify a song with incomplete information, try to use type "songs_upgrades" as argument instead.')

      const { id, name, artist, fake, master, song_id, songname, tracks_count, pans, vols, cores, vocal_parts, mute_volume, mute_volume_vocals, hopo_threshold, bank, drum_bank, anim_tempo, song_scroll_speed, preview, song_length, rank_band, rank_bass, rank_drum, rank_guitar, rank_keys, rank_real_bass, rank_real_guitar, rank_real_keys, rank_vocals, format, version, game_origin, encoding, rating, genre, sub_genre, vocal_gender, year_released, year_recorded, album_art, album_name, album_track_number, vocal_tonic_note, song_key, song_tonality, real_guitar_tuning, real_bass_tuning, author, strings_author, keys_author, loading_phrase, languages, karaoke, multitrack, convert, double_kick, rhythm_on_bass, rhythm_on_keys, cat_ehm, expert_only, alternate_path, band_fail_cue, base_points, context, extra_authoring, guide_pitch_volume, pack_name, solo, tuning_offset_cents, upgrade_version } = song

      const tracks = tracks_count ? genTracksCountArray(tracks_count) : undefined

      let songEntriesCount = 0
      if (songname !== undefined) songEntriesCount++
      if (tracks_count !== undefined) songEntriesCount++
      if (pans !== undefined) songEntriesCount++
      if (vols !== undefined) songEntriesCount++
      if (cores !== undefined) songEntriesCount++
      if (vocal_parts !== undefined) songEntriesCount++
      if (mute_volume !== undefined) songEntriesCount++
      if (mute_volume_vocals !== undefined) songEntriesCount++
      if (hopo_threshold !== undefined) songEntriesCount++
      let availableTracksCount = 0
      let rankEntriesCount = 0
      if (rank_band !== undefined) rankEntriesCount++
      if (rank_drum !== undefined) {
        rankEntriesCount++
        if (rank_drum > 0) availableTracksCount++
      }
      if (rank_bass !== undefined) {
        rankEntriesCount++
        if (rank_bass > 0) availableTracksCount++
      }
      if (rank_guitar !== undefined) {
        rankEntriesCount++
        if (rank_guitar > 0) availableTracksCount++
      }
      if (rank_vocals !== undefined) {
        rankEntriesCount++
        if (rank_vocals > 0) availableTracksCount++
      }
      if (rank_keys !== undefined) {
        rankEntriesCount++
        if (rank_keys > 0) availableTracksCount++
      }
      if (rank_real_keys !== undefined) rankEntriesCount++
      if (rank_real_guitar !== undefined) rankEntriesCount++
      if (rank_real_bass !== undefined) rankEntriesCount++

      const f = this.opts.format

      if (f === 'rbn') s += `(${n()}${t()}'${id}'${n()}`
      else s += `(${id}${n()}`

      if (name !== undefined) {
        const value = this.renderToStringValue('string', name)
        if (f === 'rbn') s += generateRBNMultiLineStrValue('name', value)
        else s += `${t()}(name "${value}")${n()}`
      }
      if (artist !== undefined) {
        const value = this.renderToStringValue('string', artist)
        if (f === 'rbn') s += generateRBNMultiLineStrValue('artist', value)
        else s += `${t()}(artist "${value}")${n()}`
      }
      if (fake !== undefined) {
        const value = this.renderToStringValue('boolean', fake)
        if (f === 'rbn') s += `${t()}('fake' ${value.toLowerCase() === 'true' ? '1' : '0'})${n()}`
        else s += `${t()}(fake ${value})${n()}`
      }
      if (master !== undefined) {
        const value = this.renderToStringValue('boolean', master)
        if (f === 'rbn') s += `${t()}('master' ${value.toLowerCase() === 'true' ? '1' : '0'})${n()}`
        else s += `${t()}(master ${value})${n()}`
      }
      if (song_id !== undefined && f === 'rb3_dlc') {
        s += `${t()}(song_id ${this.renderToStringValue('numberOrLocaleString', song_id)})${n()}`
      }
      if (context !== undefined) {
        s += `${t()}(context ${this.renderToStringValue('number', context)})`
        s += n()
      }
      if (base_points !== undefined) {
        s += `${t()}(base_points ${this.renderToStringValue('number', base_points)})`
        s += n()
      }

      if (this.type !== 'songs') {
        if (upgrade_version !== undefined) {
          s += `${t()}(upgrade_version ${this.renderToStringValue('number', upgrade_version)})`
          s += n()
        }
      }

      if (songEntriesCount > 0) {
        if (f === 'rbn') s += `${t()}(${n()}${t(2)}'song'${n()}`
        else s += `${t()}(song${n()}`
        if (songname !== undefined) {
          const sn = this.renderToStringValue('localeString', songname)
          if (f === 'rbn') s += generateRBNMultiLineStrValue('name', `songs/${sn}/${sn}`, 2)
          else s += `${t(2)}(name "songs/${sn}/${sn}")${n()}`
        }
        if (tracks_count && tracks) {
          s += `${t(2)}(tracks`
          if (availableTracksCount > 1) {
            s += n()
            s += `${t(3)}(`
          } else {
            s += ' ('
          }
          let isTracksStarted = false

          if (tracks.drum !== undefined) {
            const count = tracks.drum.length
            s += '(drum '
            if (count > 1) {
              s += '('
            }
            s += tracks.drum.join(' ')

            if (count > 1) {
              s += ')'
            }
            s += ')'
            isTracksStarted = true
          }
          if (tracks.bass !== undefined) {
            const count = tracks.bass.length
            if (isTracksStarted) {
              s += n()
              s += this.opts.allSongsInline ? t(3) : `${t(3)} `
            }
            s += '(bass '
            if (count > 1) {
              s += '('
            }
            s += tracks.bass.join(' ')

            if (count > 1) {
              s += ')'
            }
            s += ')'
            isTracksStarted = true
          }
          if (tracks.guitar !== undefined) {
            const count = tracks.guitar.length
            if (isTracksStarted) {
              s += n()
              s += this.opts.allSongsInline ? t(3) : `${t(3)} `
            }
            s += '(guitar '
            if (count > 1) {
              s += '('
            }
            s += tracks.guitar.join(' ')

            if (count > 1) {
              s += ')'
            }
            s += ')'
            isTracksStarted = true
          }
          if (tracks.vocals !== undefined) {
            const count = tracks.vocals.length
            if (isTracksStarted) {
              s += n()
              s += this.opts.allSongsInline ? t(3) : `${t(3)} `
            }
            s += '(vocals '
            if (count > 1) {
              s += '('
            }
            s += tracks.vocals.join(' ')

            if (count > 1) {
              s += ')'
            }
            s += ')'
            isTracksStarted = true
          }
          if (tracks.keys !== undefined) {
            const count = tracks.keys.length
            if (isTracksStarted) {
              s += n()
              s += this.opts.allSongsInline ? t(3) : `${t(3)} `
            }
            s += '(keys '
            if (count > 1) {
              s += '('
            }
            s += tracks.keys.join(' ')

            if (count > 1) {
              s += ')'
            }
            s += ')'
            isTracksStarted = true
          }
          s += ')'
          if (availableTracksCount > 1) {
            s += n()
            s += `${t(2)})`
          } else {
            s += ')'
          }
          s += n()
        }

        if (pans !== undefined) {
          s += `${t(2)}(pans (${this.renderToStringValue(
            'array',
            pans.map((p) => String(p.toFixed(1)))
          )}))`
          s += n()
        }
        if (vols !== undefined) {
          s += `${t(2)}(vols (${this.renderToStringValue(
            'array',
            vols.map((p) => String(p.toFixed(1)))
          )}))`
          s += n()
        }
        if (cores !== undefined) {
          s += `${t(2)}(cores (${this.renderToStringValue('array', cores)}))`
          s += n()
        } else if (this.type === 'songs') {
          if (tracks === undefined) throw new Error('DTAStringIOError: Tried to stringify a song with incomplete information, try to use type "songs_upgrades" as argument instead.')
          const { allTracksCount, guitar } = tracks
          const arr: number[] = (Array(allTracksCount) as number[]).fill(-1)
          if (this.opts.guitarCores) {
            s += `${t(2)}(cores (${arr
              .map((v, i) => {
                if (guitar?.includes(i)) {
                  return 1
                }
                return v
              })
              .join(' ')}))`
          } else {
            s += `${t(2)}(cores (${arr.join(' ')}))`
          }
          s += n()
        }
        if (tracks?.crowd) {
          s += `${t(2)}(crowd_channels (${this.renderToStringValue('array', tracks.crowd)}))`
          s += n()
        }
        if (vocal_parts !== undefined) {
          s += `${t(2)}(vocal_parts ${this.renderToStringValue('number', vocal_parts)})`
          s += n()
        }
        if (this.type === 'songs') {
          s += `${t(2)}(drum_solo`
          s += n()
          s += `${t(3)}(seqs (kick.cue snare.cue tom1.cue tom2.cue crash.cue))`
          s += n()
          s += `${t(2)})`
          s += n()
          s += `${t(2)}(drum_freestyle`
          s += n()
          s += `${t(3)}(seqs (kick.cue snare.cue hat.cue ride.cue crash.cue))`
          s += n()
          s += `${t(2)})`
          s += n()
        }
        if (mute_volume !== undefined) {
          s += `${t(2)}(mute_volume ${this.renderToStringValue('number', mute_volume)})`
          s += n()
        }
        if (mute_volume_vocals !== undefined) {
          s += `${t(2)}(mute_volume_vocals ${this.renderToStringValue('number', mute_volume_vocals)})`
          s += n()
        }
        if (hopo_threshold !== undefined) {
          s += `${t(2)}(hopo_threshold ${this.renderToStringValue('number', hopo_threshold)})`
          s += n()
        }
        s += `${t()})`
        s += n()
      }

      if (bank !== undefined) {
        s += `${t()}(bank ${this.renderToStringValue('localeString', bank)})`
        s += n()
      }
      if (drum_bank !== undefined) {
        s += `${t()}(drum_bank ${this.renderToStringValue('localeString', drum_bank)})`
        s += n()
      }
      if (anim_tempo !== undefined) {
        s += `${t()}(anim_tempo ${this.renderToStringValue('localeString', anim_tempo === 16 ? 'kTempoSlow' : anim_tempo === 32 ? 'kTempoMedium' : 'kTempoFast')})`
        s += n()
      }
      if (band_fail_cue !== undefined) {
        s += `${t()}(band_fail_cue ${this.renderToStringValue('localeString', band_fail_cue)})`
        s += n()
      }
      if (song_scroll_speed !== undefined) {
        s += `${t()}(song_scroll_speed ${this.renderToStringValue('number', song_scroll_speed)})`
        s += n()
      } else if (this.type === 'songs') {
        s += `${t()}(song_scroll_speed 2300)`
        s += n()
      }
      if (preview !== undefined) {
        s += `${t()}(preview ${this.renderToStringValue('array', preview)})`
        s += n()
      }
      if (song_length !== undefined) {
        s += `${t()}(song_length ${this.renderToStringValue('number', song_length)})`
        s += n()
      }

      if (rankEntriesCount > 0) {
        s += `${t()}(rank`
        s += n()

        if (rank_drum !== undefined) {
          s += `${t(2)}(drum ${this.renderToStringValue('number', rank_drum)})`
          s += n()
        }
        if (rank_guitar !== undefined) {
          s += `${t(2)}(guitar ${this.renderToStringValue('number', rank_guitar)})`
          s += n()
        }
        if (rank_bass !== undefined) {
          s += `${t(2)}(bass ${this.renderToStringValue('number', rank_bass)})`
          s += n()
        }
        if (rank_vocals !== undefined) {
          s += `${t(2)}(vocals ${this.renderToStringValue('number', rank_vocals)})`
          s += n()
        }
        if (rank_keys !== undefined) {
          s += `${t(2)}(keys ${this.renderToStringValue('number', rank_keys)})`
          s += n()
        }
        if (rank_real_keys !== undefined) {
          s += `${t(2)}(real_keys ${this.renderToStringValue('number', rank_real_keys)})`
          s += n()
        }
        if (rank_real_guitar !== undefined) {
          s += `${t(2)}(real_guitar ${this.renderToStringValue('number', rank_real_guitar)})`
          s += n()
        }
        if (rank_real_bass !== undefined) {
          s += `${t(2)}(real_bass ${this.renderToStringValue('number', rank_real_bass)})`
          s += n()
        }
        if (rank_band !== undefined) {
          s += `${t(2)}(band ${this.renderToStringValue('number', rank_band)})`
          s += n()
        }
        s += `${t()})`
        s += n()
      }

      if (solo !== undefined) {
        if (game_origin !== undefined) {
          s += `${t()}(solo (${this.renderToStringValue('array', solo)}))`
          s += n()
        }
      }

      if (format !== undefined) {
        s += `${t()}(format ${this.renderToStringValue('number', format)})`
        s += n()
      } else if (this.type === 'songs') {
        s += `${t()}(format 10)`
        s += n()
      }

      if (version !== undefined) {
        s += `${t()}(version ${this.renderToStringValue('number', version)})`
        s += n()
      } else if (this.type === 'songs') {
        s += `${t()}(version 30)`
        s += n()
      }

      if (game_origin !== undefined) {
        s += `${t()}(game_origin ${this.renderToStringValue('localeString', game_origin)})`
        s += n()
      }

      if (encoding !== undefined) {
        s += `${t()}(encoding ${this.renderToStringValue('localeString', encoding)})`
        s += n()
      } else {
        if (this.type === 'songs') {
          s += `${t()}(encoding latin1)`
          s += n()
        }
      }

      if (rating !== undefined) {
        s += `${t()}(rating ${this.renderToStringValue('number', rating)})`
        s += n()
      }

      if (genre !== undefined) {
        s += `${t()}(genre ${this.renderToStringValue('localeString', genre)})`
        s += n()
      }

      if (sub_genre !== undefined) {
        s += `${t()}(sub_genre ${this.renderToStringValue('localeString', sub_genre)})`
        s += n()
      }

      if (vocal_gender !== undefined) {
        s += `${t()}(vocal_gender ${this.renderToStringValue('localeString', vocal_gender)})`
        s += n()
      }

      if (guide_pitch_volume !== undefined) {
        s += `${t()}(guide_pitch_volume ${this.renderToStringValue('number', guide_pitch_volume)})`
        s += n()
      }

      if (tuning_offset_cents !== undefined) {
        s += `${t()}(tuning_offset_cents ${this.renderToStringValue('number', tuning_offset_cents)})`
        s += n()
      }

      if (year_released !== undefined) {
        s += `${t()}(year_released ${this.renderToStringValue('number', year_released)})`
        s += n()
      }

      if (year_recorded !== undefined) {
        s += `${t()}(year_recorded ${this.renderToStringValue('number', year_recorded)})`
        s += n()
      }
      if (album_art !== undefined) {
        s += `${t()}(album_art ${this.renderToStringValue('boolean', album_art)})`
        s += n()
      }
      if (album_name !== undefined) {
        s += `${t()}(album_name "${this.renderToStringValue('string', album_name)}")`
        s += n()
      }

      if (album_track_number !== undefined) {
        s += `${t()}(album_track_number ${this.renderToStringValue('number', album_track_number)})`
        s += n()
      }

      if (vocal_tonic_note !== undefined) {
        s += `${t()}(vocal_tonic_note ${this.renderToStringValue('number', vocal_tonic_note)})`
        s += n()
      }

      if (song_key !== undefined) {
        s += `${t()}(song_key ${this.renderToStringValue('number', song_key)})`
        s += n()
      }

      if (song_tonality !== undefined) {
        s += `${t()}(song_tonality ${this.renderToStringValue('number', song_tonality)})`
        s += n()
      }

      if (real_guitar_tuning !== undefined) {
        s += `${t()}(real_guitar_tuning (${this.renderToStringValue('array', real_guitar_tuning)}))`
        s += n()
      }

      if (real_bass_tuning !== undefined) {
        s += `${t()}(real_bass_tuning (${this.renderToStringValue('array', real_bass_tuning)}))`
        s += n()
      }

      if (this.type !== 'songs') {
        if (alternate_path !== undefined) {
          s += `${t()}(alternate_path ${this.renderToStringValue('boolean', alternate_path)})`
          s += n()
        }
        if (extra_authoring !== undefined) {
          s += `${t()}(extra_authoring ${this.renderToStringValue('array', extra_authoring)})`
          s += n()
        }
      }

      if (this.opts.placeRB3DXAttributes) {
        if (author !== undefined) {
          s += `${t()}(author "${this.renderToStringValue('string', author)}")`
          s += n()
        }
        if (strings_author !== undefined) {
          s += `${t()}(strings_author "${this.renderToStringValue('string', strings_author)}")`
          s += n()
        }
        if (keys_author !== undefined) {
          s += `${t()}(keys_author "${this.renderToStringValue('string', keys_author)}")`
          s += n()
        }
        if (pack_name !== undefined) {
          s += `${t()}(pack_name "${this.renderToStringValue('string', pack_name)}")`
          s += n()
        }
        if (loading_phrase !== undefined) {
          s += `${t()}(loading_phrase "${this.renderToStringValue('string', loading_phrase)}")`
          s += n()
        }
      }

      if (this.opts.placeCustomAttributes && this.type === 'songs') {
        s += `${this.opts.allSongsInline ? '\n' : ''}\n;DO NOT EDIT THE FOLLOWING LINES MANUALLY\n`
        s += `;Created using Magma: C3 Roks Edition v3.3.5\n`

        s += `;Song authored by ${author ? author : 'Unknown Charter'}\n`
        s += `;Song=${name ? name : 'Untitled Song'}\n`
        s += `;Language(s)=${languages ? `${languages.map((lang) => capitalizeFirstLetter(lang)).join(',')},` : 'English,'}\n`
        s += `;Karaoke=${karaoke ? '1' : '0'}\n`
        s += `;Multitrack=${multitrack ? '1' : '0'}\n`
        s += `;Convert=${convert ? '1' : '0'}\n`
        s += `;2xBass=${double_kick ? '1' : '0'}\n`
        s += `;RhythmKeys=${rhythm_on_keys ? '1' : '0'}\n`
        s += `;RhythmBass=${rhythm_on_bass ? '1' : '0'}\n`
        s += `;CATemh=${cat_ehm ? '1' : '0'}\n`
        s += `;ExpertOnly=${expert_only ? '1' : '0'}\n`
      }

      s += `)\n`
    }
    return s
  }
}

/**
 * Converts a `DTAFile` object to DTA file contents.
 * - - - -
 * @param {PartialDTAFile | PartialDTAFile[]} songs An object containing all songs to be stringified.
 * @param {DTAStringifyTypes | undefined} type `OPTIONAL` The DTA type of the convertion. Default is `songs`.
 * @param {DTAStringifyOptions | undefined} options `OPTIONAL` An object with values that changes the behavior
 * of the DTA stringify process.
 * @returns {string} The generated DTA file contents.
 */
export const stringifyDTA = (songs: PartialDTAFile | PartialDTAFile[], type: DTAStringifyTypes = 'songs', options?: DTAStringifyOptions): string => {
  const opts = useDefaultOptions<DTAStringifyOptions, true>(
    {
      guitarCores: false,
      ignoreFakeSongs: false,
      placeCustomAttributes: true,
      placeRB3DXAttributes: true,
      sortBy: null,
      format: 'rbn',
      wiiMode: null,
      allSongsInline: false,
    },
    options
  )
  const io = new DTAStringIO(type, opts)
  if (Array.isArray(songs)) {
    songs.forEach((song) => {
      if (opts.ignoreFakeSongs && song.fake === true) return
      io.open(song.id)
      for (const key of localeObject.sortedKeys) {
        if (song[key] !== undefined) io.add(song.id, key, song[key])
      }
    })

    return io.finish()
  }

  io.open(songs.id)
  for (const key of localeObject.sortedKeys) {
    if (songs[key] !== undefined) io.add(songs.id, key, songs[key])
  }
  return io.finish()
}
