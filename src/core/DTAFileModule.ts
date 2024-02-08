import { createDTA } from '../lib/dta/create'
import { getSongAlbumTitle, getSongArtist, getSongRank, getSongTitle } from '../lib/dta/get'
import { sortDTA } from '../lib/dta/sort'
import { stringifyDTA } from '../lib/dta/stringify'
import { updateDTA } from '../lib/dta/update'

/**
 * Main module of the `DTAParser` package.
 *
 * This includes functions to handle creation, data fetching and manipulation,
 * sorting, stringifying, and updating `DTAFile` objects.
 */
export interface DTAFileModuleType {
  create: typeof createDTA
  get: {
    title: typeof getSongTitle
    artist: typeof getSongArtist
    albumTitle: typeof getSongAlbumTitle
    rank: typeof getSongRank
  }
  sort: typeof sortDTA
  stringify: typeof stringifyDTA
  update: typeof updateDTA
}

const DTAFileModule: DTAFileModuleType = {
  create: createDTA,
  get: {
    title: getSongTitle,
    artist: getSongArtist,
    albumTitle: getSongAlbumTitle,
    rank: getSongRank,
  },
  sort: sortDTA,
  stringify: stringifyDTA,
  update: updateDTA,
}

export default DTAFileModule
