import { createDTA } from '../lib/create'
import { getSongAlbumTitle, getSongArtist, getSongRank, getSongTitle } from '../lib/get'
import { sortDTA } from '../lib/sort'
import { stringifyDTA } from '../lib/stringify'
import { updateDTA } from '../lib/update'

/**
 * Main module of the `DTAParser` package.
 *
 * This includes functions to handle creation, data fetching and manipulation,
 * sorting, stringifying, and updating `DTAFileContents` objects.
 */
export interface DTAFileModule {
  create: typeof createDTA
  get: {
    title: typeof getSongTitle
    artist: typeof getSongArtist
    albumTitle: typeof getSongAlbumTitle,
    rank: typeof getSongRank
  }
  sort: typeof sortDTA
  stringify: typeof stringifyDTA
  update: typeof updateDTA
}

const DTAFile: DTAFileModule = {
  create: createDTA,
  get: {
    title: getSongTitle,
    artist: getSongArtist,
    albumTitle: getSongAlbumTitle,
    rank: getSongRank
  },
  sort: sortDTA,
  stringify: stringifyDTA,
  update: updateDTA,
}

export default DTAFile
