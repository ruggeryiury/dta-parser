import type { DTAFile } from '../core.js'
import { millisecondsToTimeString } from './timeCalculations.js'

export const genDTAStat = (song: DTAFile) => {
  return {
    name: song.name,
    artist: song.artist,
    hasAlbumName: song.album_name ? true : false,
    hasKeysSupport: Boolean(song.rank_keys),
    hasProGtrBassSupport: Boolean(song.rank_real_guitar ?? song.rank_real_bass),
    songLength: millisecondsToTimeString(song.song_length),
  }
}
