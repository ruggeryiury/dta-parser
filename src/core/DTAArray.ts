import { filterDTA } from './filterDTA'
import { getHeaders } from '../utils/getHeaders'
import { getSongByID } from '../utils/getSongByID'
import { sortDTA } from './sortDTA'
import { stringifyDTA } from './stringifyDTA'
import { genArraySongList } from '../utils/songList'
import { updateSongArray } from '../utils/updateSongArray'

interface DTAArrayModule {
    filter: typeof filterDTA
    getHeaders: typeof getHeaders
    getSongByID: typeof getSongByID
    update: typeof updateSongArray
    songList: typeof genArraySongList
    sort: typeof sortDTA
    stringify: typeof stringifyDTA
}
/**
 * Module with functions to handle arrays of parsed song objects.
 */
const DTAArray: DTAArrayModule = {
    filter: filterDTA,
    getHeaders: getHeaders,
    getSongByID: getSongByID,
    update: updateSongArray,
    songList: genArraySongList,
    sort: sortDTA,
    stringify: stringifyDTA,
}

export default DTAArray
