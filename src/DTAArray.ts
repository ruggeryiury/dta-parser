import { filterDTA } from './core/filterDTA'
import { getHeaders } from './utils/getHeaders'
import { getSongByID } from './utils/getSongByID'
import { sortDTA } from './core/sortDTA'
import { stringifyDTA } from './core/stringifyDTA'
import { genArraySongList } from './utils/songList'
import { updateSongArray } from './utils/updateSongArray'
import { DTAArraytoJSONArray } from './utils/DTAtoJSON'
import { JSONtoDTA } from './utils/JSONtoDTA'

interface DTAArrayModule {
    filter: typeof filterDTA
    fromJSON: typeof JSONtoDTA
    getHeaders: typeof getHeaders
    getSongByID: typeof getSongByID
    update: typeof updateSongArray
    songList: typeof genArraySongList
    sort: typeof sortDTA
    stringify: typeof stringifyDTA
    toJSON: typeof DTAArraytoJSONArray
}
/**
 * Module with functions to handle arrays of parsed song objects.
 */
const DTAArray: DTAArrayModule = {
    filter: filterDTA,
    fromJSON: JSONtoDTA,
    getHeaders: getHeaders,
    getSongByID: getSongByID,
    update: updateSongArray,
    songList: genArraySongList,
    sort: sortDTA,
    stringify: stringifyDTA,
    toJSON: DTAArraytoJSONArray,
}

export default DTAArray
