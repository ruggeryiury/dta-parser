import { filterDTA } from './filterDTA'
import { getHeaders } from './getHeaders'
import { getSongByID } from './getSongByID'
import { sortDTA } from './sortDTA'
import { stringifyDTA } from './stringifyDTA'

interface DTAArrayModule {
    filter: typeof filterDTA
    getHeaders: typeof getHeaders
    getSongByID: typeof getSongByID
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
    sort: sortDTA,
    stringify: stringifyDTA,
}

export default DTAArray
