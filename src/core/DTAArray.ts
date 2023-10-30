import { DTAArraytoJSONArray } from '../utils/DTAtoJSON'
import { JSONtoDTA } from '../utils/JSONtoDTA'
import { filterDTA } from '../utils/filterDTA'
import { genArtistHeader } from '../utils/genArtistHeader'
import { getHeaders } from '../utils/getHeaders'
import { getSongByID } from '../utils/getSongByID'
import { getSongsFromAuthor } from '../utils/getSongsFromAuthor'
import { genArraySongList } from '../utils/songList'
import { sortDTA } from '../utils/sortDTA'
import { stringifyDTA } from '../utils/stringifyDTA'
import { updateSongArray } from '../utils/updateSongArray'

/**
 * Module with functions to handle arrays of parsed song objects.
 */
const DTAArray = {
  filter: filterDTA,
  fromJSON: JSONtoDTA,
  genArtistHeader: genArtistHeader,
  getHeaders,
  getSongByID,
  getSongsFromAuthor,
  update: updateSongArray,
  songList: genArraySongList,
  sort: sortDTA,
  stringify: stringifyDTA,
  toJSON: DTAArraytoJSONArray,
}

export type DTAArrayModule = typeof DTAArray

export default DTAArray
