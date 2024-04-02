import {
  AlbumUpdateOptions,
  BackingUpdateOptionsTypes,
  BandFailCueNames,
  BandRankingNumbers,
  BassUpdateOptionsTypes,
  DTAFile,
  DTAFileRecipe,
  DrumUpdateOptionsTypes,
  GuitarUpdateOptionsTypes,
  KeysUpdateOptionsTypes,
  SongGenreUpdateOptions,
  SongKeyUpdateOptions,
  TrackUpdateOptions,
  VocalsUpdateOptionsTypes,
  localeKeyToValue,
} from '..'
import { genAudioFileStructure, rankCalculator } from '../../utils'

/**
 * Generates an object specifying the whole song's instruments and audio channels structure.
 * - - - -
 * @param {DTAFile} song The song you want to generate a track update recipe from.
 * @returns {TrackUpdateOptions} An object specifying the whole song's instruments and audio channels structure.
 */
export const genAudioTracksRecipe = (song: DTAFile): TrackUpdateOptions => {
  const tracks = {} as TrackUpdateOptions
  const { rank_drum, rank_bass, rank_guitar, rank_vocals, rank_keys, rank_real_bass, rank_real_guitar, rank_real_keys, real_bass_tuning, real_guitar_tuning, vocal_parts } = song
  const { backing, bass, drum, guitar, keys, vocals, crowd } = genAudioFileStructure(song)

  if (drum.enabled) {
    tracks.drum = {
      rank: rankCalculator('drum', rank_drum),
      channels: drum.channels,
      pans: drum.pan,
      vols: drum.vol,
      hasSolo: drum.hasSolo,
    } as DrumUpdateOptionsTypes

    if (drum.channels === 2) {
      if (drum.pan.join(' ') === '-1 1') delete tracks.drum.pans
      if (drum.vol.join(' ') === '0 0') delete tracks.drum.vols
    } else if (drum.channels === 3) {
      if (drum.pan.join(' ') === '0 -1 1') delete tracks.drum.pans
      if (drum.vol.join(' ') === '0 0 0') delete tracks.drum.vols
    } else if (drum.channels === 4) {
      if (drum.pan.join(' ') === '0 0 -1 1') delete tracks.drum.pans
      if (drum.vol.join(' ') === '0 0 0 0') delete tracks.drum.vols
    } else if (drum.channels === 5) {
      if (drum.pan.join(' ') === '0 -1 1 -1 1') delete tracks.drum.pans
      if (drum.vol.join(' ') === '0 0 0 0 0') delete tracks.drum.vols
    } else {
      if (drum.pan.join(' ') === '-1 1 -1 1 -1 1') delete tracks.drum.pans
      if (drum.vol.join(' ') === '0 0 0 0 0 0') delete tracks.drum.vols
    }

    if (!drum.hasSolo) delete tracks.drum.hasSolo
  }

  if (bass.enabled) {
    tracks.bass = {
      rank: rankCalculator('bass', rank_bass),
      real_rank: rankCalculator('real_bass', rank_real_bass),
      channels: bass.channels,
      pans: bass.pan,
      vols: bass.vol,
      tuning: real_bass_tuning,
      hasSolo: bass.hasSolo,
    } as BassUpdateOptionsTypes

    if (rank_real_bass === 0 || rank_real_bass === undefined) {
      delete tracks.bass.real_rank
      delete tracks.bass.real_rank
      delete tracks.bass.tuning
    }

    if (tracks.bass.tuning?.[0] === 0 && tracks.bass.tuning?.[1] === 0 && tracks.bass.tuning?.[2] === 0 && tracks.bass.tuning?.[3] === 0) delete tracks.bass.tuning

    if (bass.channels === 2) {
      if (bass.pan.join(' ') === '-1 1') delete tracks.bass.pans
      if (bass.vol.join(' ') === '0 0') delete tracks.bass.vols
    } else {
      if (bass.pan.join(' ') === '0') delete tracks.bass.pans
      if (bass.vol.join(' ') === '0') delete tracks.bass.vols
    }

    if (!bass.hasSolo) delete tracks.bass.hasSolo
  }

  if (guitar.enabled) {
    tracks.guitar = {
      rank: rankCalculator('guitar', rank_guitar),
      real_rank: rankCalculator('real_guitar', rank_real_guitar),
      channels: guitar.channels,
      pans: guitar.pan,
      vols: guitar.vol,
      tuning: real_guitar_tuning,
      hasSolo: guitar.hasSolo,
    } as GuitarUpdateOptionsTypes

    if (rank_real_guitar === 0 || rank_real_guitar === undefined) {
      delete tracks.guitar.real_rank
      delete tracks.guitar.real_rank
      delete tracks.guitar.tuning
    }

    if (
      tracks.guitar.tuning?.[0] === 0 &&
      tracks.guitar.tuning?.[1] === 0 &&
      tracks.guitar.tuning?.[2] === 0 &&
      tracks.guitar.tuning?.[3] === 0 &&
      tracks.guitar.tuning?.[4] === 0 &&
      tracks.guitar.tuning?.[5] === 0
    )
      delete tracks.guitar.tuning

    if (guitar.channels === 2) {
      if (guitar.pan.join(' ') === '-1 1') delete tracks.guitar.pans
      if (guitar.vol.join(' ') === '0 0') delete tracks.guitar.vols
    } else {
      if (guitar.pan.join(' ') === '0') delete tracks.guitar.pans
      if (guitar.vol.join(' ') === '0') delete tracks.guitar.vols
    }

    if (!guitar.hasSolo) delete tracks.guitar.hasSolo
  }

  if (vocals.enabled) {
    tracks.vocals = {
      rank: rankCalculator('vocals', rank_vocals),
      channels: vocals.channels,
      vocal_parts,
      pans: vocals.pan,
      vols: vocals.vol,
      hasSolo: vocals.hasSolo,
    } as VocalsUpdateOptionsTypes

    if (vocals.channels === 2) {
      if (vocals.pan.join(' ') === '-1 1') delete tracks.vocals.pans
      if (vocals.vol.join(' ') === '0 0') delete tracks.vocals.vols
    } else {
      if (vocals.pan.join(' ') === '0') delete tracks.vocals.pans
      if (vocals.vol.join(' ') === '0') delete tracks.vocals.vols
    }

    if (!vocals.hasSolo) delete tracks.vocals.hasSolo
  }

  if (keys.enabled) {
    tracks.keys = {
      rank: rankCalculator('keys', rank_keys),
      real_rank: rankCalculator('real_keys', rank_real_keys),
      channels: keys.channels,
      pans: keys.pan,
      vols: keys.vol,
      hasSolo: keys.hasSolo,
    } as KeysUpdateOptionsTypes

    if (keys.channels === 2) {
      if (keys.pan.join(' ') === '-1 1') delete tracks.keys.pans
      if (keys.vol.join(' ') === '0 0') delete tracks.keys.vols
    } else {
      if (keys.pan.join(' ') === '0') delete tracks.keys.pans
      if (keys.vol.join(' ') === '0') delete tracks.keys.vols
    }

    if (!keys.hasSolo) delete tracks.keys.hasSolo
  }

  if (backing.channels === 1) {
    if (backing.pan.join(' ') === '0' && backing.vol.join(' ') === '0') {
      tracks.backing = 1
    } else {
      tracks.backing = {
        channels: 1,
        pans: backing.pan,
        vols: backing.vol,
      } as BackingUpdateOptionsTypes

      if (backing.pan.join(' ') === '0') delete tracks.backing.pans
      if (backing.vol.join(' ') === '0') delete tracks.backing.vols
    }
  } else {
    if (backing.pan.join(' ') === '-1 1' && backing.vol.join(' ') === '0 0') {
      tracks.backing = 2
    } else {
      tracks.backing = {
        channels: 2,
        pans: backing.pan,
        vols: backing.vol,
      } as BackingUpdateOptionsTypes

      if (backing.pan.join(' ') === '-1 1') delete tracks.backing.pans
      if (backing.vol.join(' ') === '0 0') delete tracks.backing.vols
    }
  }

  if (crowd.enabled) {
    if (crowd.vol === 0) tracks.crowd = true
    else {
      tracks.crowd = [crowd.vol, crowd.vol] as [number, number]
    }
  }
  return tracks
}

/**
 * Converts a parsed song to a parsed song recipe.
 * - - - -
 * @param {DTAFile} song The song you want to generate a parsed song recipe from.
 * @returns {DTAFileRecipe} The song's recipe object.
 */
export const genDTARecipe = (song: DTAFile): DTAFileRecipe => {
  const {
    id,
    name,
    artist,
    master,
    song_id,
    songname,
    tuning_offset_cents,
    mute_volume,
    mute_volume_vocals,
    hopo_threshold,
    bank,
    drum_bank,
    anim_tempo,
    band_fail_cue,
    song_scroll_speed,
    rank_band,
    encoding,
    rating,
    genre,
    sub_genre,
    song_length,
    preview,
    vocal_gender,
    year_released,
    year_recorded,
    album_art,
    album_name,
    album_track_number,
    vocal_tonic_note,
    song_tonality,
    song_key,
    multitrack,
    CATemh,
    author,
    doubleKick,
  } = song

  const returnObject: DTAFileRecipe = {
    id,
    name,
    artist,
    master,
    song_id,
    songname,
    tracks: genAudioTracksRecipe(song),
    tuning_offset_cents: tuning_offset_cents && tuning_offset_cents !== 0 ? tuning_offset_cents : undefined,
    mute_volume,
    mute_volume_vocals,
    hopo_threshold,
    bank: localeKeyToValue.bank(bank) === 'Tambourine' ? undefined : localeKeyToValue.bank(bank),
    drum_bank: localeKeyToValue.drum_bank(drum_bank) === 'Hard Rock Kit' ? undefined : localeKeyToValue.drum_bank(drum_bank),
    anim_tempo,
    band_fail_cue: localeKeyToValue.band_fail_cue(band_fail_cue) === 'Not Specified' ? undefined : (localeKeyToValue.band_fail_cue(band_fail_cue) as Exclude<BandFailCueNames, 'Not Specified'>),
    song_scroll_speed: song_scroll_speed === undefined ? 'Normal' : localeKeyToValue.song_scroll_speed(song_scroll_speed),
    preview: preview && preview[0] ? preview[0] : 0,
    song_length,
    rank_band: rankCalculator('band', rank_band) as BandRankingNumbers,
    encoding,
    rating,
    genre: {
      genre: localeKeyToValue.genre(genre),
      sub_genre: localeKeyToValue.sub_genre(sub_genre),
    } as SongGenreUpdateOptions,
    vocal_gender: localeKeyToValue.vocal_gender(vocal_gender),
    year_released,
    year_recorded,
    album: {} as AlbumUpdateOptions,

    key:
      song_key !== undefined && vocal_tonic_note !== undefined && song_tonality !== undefined
        ? ({
            key: localeKeyToValue.song_key(vocal_tonic_note, song_tonality),
            trainer_key_override:
              song_key === 0
                ? 'C'
                : song_key === 1
                  ? 'Db'
                  : song_key === 2
                    ? 'D'
                    : song_key === 3
                      ? 'Eb'
                      : song_key === 4
                        ? 'E'
                        : song_key === 5
                          ? 'F'
                          : song_key === 6
                            ? 'F#'
                            : song_key === 7
                              ? 'G'
                              : song_key === 8
                                ? 'Ab'
                                : song_key === 9
                                  ? 'A'
                                  : song_key === 10
                                    ? 'Ab'
                                    : 'B',
          } as SongKeyUpdateOptions)
        : vocal_tonic_note !== undefined && song_tonality !== undefined
          ? localeKeyToValue.song_key(vocal_tonic_note, song_tonality)
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

  if (album_name || album_art) {
    returnObject.album = {
      hasArt: album_art,
      name: album_name === undefined ? '' : album_name,
      track_number: album_track_number === undefined ? 1 : album_track_number,
    }
  } else delete returnObject.album

  return returnObject
}
