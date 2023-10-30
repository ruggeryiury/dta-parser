import { DTAFile, DTAFileContents } from '../../src'
import { CreateDTAFileRecipe } from '../../src/utils/createDTA'
import { BandRankingsNumberOptions, Locale, SubGenreTypes } from '../../src/utils/locale'
import { panVolInfoGen } from '../../src/utils/panVolInfoGen'
import { rankCalculator } from '../../src/utils/rankCalculations'
import { AlbumUpdateOptions, BackingUpdateOptionsTypes, BassUpdateOptionsTypes, DrumUpdateOptionsTypes, GenreUpdateOptionsTypes, GuitarUpdateOptionsTypes, KeysUpdateOptionsTypes, SongKeyUpdateOptions, TrackUpdateOptions, VocalsUpdateOptionsTypes } from '../../src/utils/updateDTA'

/**
 * Converts a parsed song to a parsed song "recipe".
 * - - - -
 * @param {DTAFile | DTAFileContents} song The song you want to generate a parsed song recipe from.
 * @returns {CreateDTAFileRecipe} The song's recipe object.
 */
export const genDTARecipe = (song: DTAFile | DTAFileContents): CreateDTAFileRecipe => {
  const { id, name, artist, master, song_id, songname, rank_drum, rank_bass, rank_real_bass, real_bass_tuning, rank_guitar, rank_real_guitar, real_guitar_tuning, rank_vocals, vocal_gender, vocal_parts, rank_keys, rank_real_keys, tuning_offset_cents, mute_volume, mute_volume_vocals, hopo_threshold, bank, drum_bank, anim_tempo, band_fail_cue, song_scroll_speed, rank_band, encoding, rating, genre, sub_genre, song_length, preview, year_released, year_recorded, album_art, album_name, album_track_number, vocal_tonic_note, song_tonality, song_key, multitrack, CATemh, author, doubleKick } = 'content' in song ? song.content : song

  const { backing, bass, drum, guitar, keys, vocals } = panVolInfoGen(song)

  const returnObject: CreateDTAFileRecipe = {
    id,
    name,
    artist,
    master,
    song_id,
    songname,
    tracks: {} as TrackUpdateOptions,
    tuning_offset_cents: tuning_offset_cents && tuning_offset_cents !== 0 ? tuning_offset_cents : undefined,
    mute_volume,
    mute_volume_vocals,
    hopo_threshold,
    bank: Locale.bank(bank) === 'Tambourine' ? undefined : Locale.bank(bank),
    drum_bank: Locale.drum_bank(drum_bank) === 'Hard Rock Kit' ? undefined : Locale.drum_bank(drum_bank),
    anim_tempo,
    band_fail_cue: Locale.band_fail_cue(band_fail_cue) === 'Not Specified' ? undefined : Locale.band_fail_cue(band_fail_cue),
    song_scroll_speed: song_scroll_speed === undefined ? 'Normal' : Locale.song_scroll_speed(song_scroll_speed),
    preview: preview[0],
    song_length,
    rank_band: rankCalculator('band', rank_band) as BandRankingsNumberOptions,
    encoding,
    rating,
    genre: {
      genre: Locale.genre(genre),
      sub_genre: Locale.sub_genre(sub_genre as SubGenreTypes),
    } as GenreUpdateOptionsTypes,
    year_released,
    year_recorded,
    album: {} as AlbumUpdateOptions,

    key:
      song_key !== undefined && vocal_tonic_note !== undefined && song_tonality !== undefined
        ? ({
            key: Locale.song_key(vocal_tonic_note, song_tonality),
            trainer_key_override: song_key === 0 ? 'C' : song_key === 1 ? 'C#/Db' : song_key === 2 ? 'D' : song_key === 3 ? 'D#/Eb' : song_key === 4 ? 'E' : song_key === 5 ? 'F' : song_key === 6 ? 'F#/Gb' : song_key === 7 ? 'G' : song_key === 8 ? 'G#/Ab' : song_key === 9 ? 'A' : song_key === 10 ? 'A#/Ab' : 'B',
          } as SongKeyUpdateOptions)
        : vocal_tonic_note !== undefined && song_tonality !== undefined
        ? Locale.song_key(vocal_tonic_note, song_tonality)
        : undefined,
    multitrack,
    CATemh,
    author,
    doubleKick,
  }

  const allKeys = Object.keys(returnObject) as (keyof typeof returnObject)[]

  allKeys.forEach((key) => {
    if (returnObject[key] === undefined) delete returnObject[key]
  })

  if (song_scroll_speed === undefined) delete returnObject.song_scroll_speed
  if (anim_tempo === 32) delete returnObject.anim_tempo
  if (encoding === 'latin1') delete returnObject.encoding

  if (drum.enabled) {
    returnObject.tracks.drum = {
      rank: rankCalculator('drum', rank_drum),
      channels: drum.channels,
      pans: drum.pan,
      vols: drum.vol,
      hasSolo: drum.hasSolo,
    } as DrumUpdateOptionsTypes

    if (drum.channels === 2) {
      if (drum.pan.join(' ') === '-1 1') delete returnObject.tracks.drum.pans
      if (drum.vol.join(' ') === '0 0') delete returnObject.tracks.drum.vols
    } else if (drum.channels === 3) {
      if (drum.pan.join(' ') === '0 -1 1') delete returnObject.tracks.drum.pans
      if (drum.vol.join(' ') === '0 0 0') delete returnObject.tracks.drum.vols
    } else if (drum.channels === 4) {
      if (drum.pan.join(' ') === '0 0 -1 1') delete returnObject.tracks.drum.pans
      if (drum.vol.join(' ') === '0 0 0 0') delete returnObject.tracks.drum.vols
    } else if (drum.channels === 5) {
      if (drum.pan.join(' ') === '0 -1 1 -1 1') delete returnObject.tracks.drum.pans
      if (drum.vol.join(' ') === '0 0 0 0 0') delete returnObject.tracks.drum.vols
    } else {
      if (drum.pan.join(' ') === '-1 1 -1 1 -1 1') delete returnObject.tracks.drum.pans
      if (drum.vol.join(' ') === '0 0 0 0 0 0') delete returnObject.tracks.drum.vols
    }

    if (!drum.hasSolo) delete returnObject.tracks.drum.hasSolo
  }

  if (bass.enabled) {
    returnObject.tracks.bass = {
      rank: rankCalculator('bass', rank_bass),
      real_rank: rankCalculator('real_bass', rank_real_bass),
      channels: bass.channels,
      pans: bass.pan,
      vols: bass.vol,
      tuning: real_bass_tuning,
      hasSolo: bass.hasSolo,
    } as BassUpdateOptionsTypes

    if (rank_real_bass === 0 || rank_real_bass === undefined) {
      delete returnObject.tracks.bass.real_rank
      delete returnObject.tracks.bass.real_rank
    }

    if (bass.channels === 2) {
      if (bass.pan.join(' ') === '-1 1') delete returnObject.tracks.bass.pans
      if (bass.vol.join(' ') === '0 0') delete returnObject.tracks.bass.vols
    } else {
      if (bass.pan.join(' ') === '0') delete returnObject.tracks.bass.pans
      if (bass.vol.join(' ') === '0') delete returnObject.tracks.bass.vols
    }

    if (!bass.hasSolo) delete returnObject.tracks.bass.hasSolo
  }

  if (guitar.enabled) {
    returnObject.tracks.guitar = {
      rank: rankCalculator('guitar', rank_guitar),
      real_rank: rankCalculator('real_guitar', rank_real_guitar),
      channels: guitar.channels,
      pans: guitar.pan,
      vols: guitar.vol,
      tuning: real_guitar_tuning,
      hasSolo: guitar.hasSolo,
    } as GuitarUpdateOptionsTypes

    if (rank_real_guitar === 0 || rank_real_guitar === undefined) {
      delete returnObject.tracks.guitar.real_rank
      delete returnObject.tracks.guitar.real_rank
    }

    if (guitar.channels === 2) {
      if (guitar.pan.join(' ') === '-1 1') delete returnObject.tracks.guitar.pans
      if (guitar.vol.join(' ') === '0 0') delete returnObject.tracks.guitar.vols
    } else {
      if (guitar.pan.join(' ') === '0') delete returnObject.tracks.guitar.pans
      if (guitar.vol.join(' ') === '0') delete returnObject.tracks.guitar.vols
    }

    if (!guitar.hasSolo) delete returnObject.tracks.guitar.hasSolo
  }

  if (vocals.enabled) {
    returnObject.tracks.vocals = {
      rank: rankCalculator('vocals', rank_vocals),
      channels: vocals.channels,
      vocal_parts,
      vocal_gender: Locale.vocal_gender(vocal_gender),
      pans: vocals.pan,
      vols: vocals.vol,
      hasSolo: vocals.hasSolo,
    } as VocalsUpdateOptionsTypes

    if (vocals.channels === 2) {
      if (vocals.pan.join(' ') === '-1 1') delete returnObject.tracks.vocals.pans
      if (vocals.vol.join(' ') === '0 0') delete returnObject.tracks.vocals.vols
    } else {
      if (vocals.pan.join(' ') === '0') delete returnObject.tracks.vocals.pans
      if (vocals.vol.join(' ') === '0') delete returnObject.tracks.vocals.vols
    }

    if (!vocals.hasSolo) delete returnObject.tracks.vocals.hasSolo
  }

  if (keys.enabled) {
    returnObject.tracks.keys = {
      rank: rankCalculator('keys', rank_keys),
      real_rank: rankCalculator('real_keys', rank_real_keys),
      channels: keys.channels,
      pans: keys.pan,
      vols: keys.vol,
      hasSolo: keys.hasSolo,
    } as KeysUpdateOptionsTypes

    if (keys.channels === 2) {
      if (keys.pan.join(' ') === '-1 1') delete returnObject.tracks.keys.pans
      if (keys.vol.join(' ') === '0 0') delete returnObject.tracks.keys.vols
    } else {
      if (keys.pan.join(' ') === '0') delete returnObject.tracks.keys.pans
      if (keys.vol.join(' ') === '0') delete returnObject.tracks.keys.vols
    }

    if (!keys.hasSolo) delete returnObject.tracks.keys.hasSolo
  }

  if (backing.channels === 1) {
    if (backing.pan.join(' ') === '0' && backing.vol.join(' ') === '0') {
      returnObject.tracks.backing = 1
    } else {
      returnObject.tracks.backing = {
        channels: 1,
        pans: backing.pan,
        vols: backing.vol,
      } as BackingUpdateOptionsTypes

      if (backing.pan.join(' ') === '0') delete returnObject.tracks.backing.pans
      if (backing.vol.join(' ') === '0') delete returnObject.tracks.backing.vols
    }
  } else {
    if (backing.pan.join(' ') === '-1 1' && backing.vol.join(' ') === '0 0') {
      returnObject.tracks.backing = 2
    } else {
      returnObject.tracks.backing = {
        channels: 2,
        pans: backing.pan,
        vols: backing.vol,
      } as BackingUpdateOptionsTypes

      if (backing.pan.join(' ') === '-1 1') delete returnObject.tracks.backing.pans
      if (backing.vol.join(' ') === '0 0') delete returnObject.tracks.backing.vols
    }
  }

  if (album_name || album_art) {
    returnObject.album = {
      hasArt: album_art,
      name: album_name === undefined ? '' : album_name,
      track_number: album_track_number === undefined ? 1 : album_track_number,
    }
  } else delete returnObject.album

  return returnObject
}
