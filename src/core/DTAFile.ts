import { createDTA } from '../lib/create'
import { getSongArtist, getSongTitle } from '../lib/get'
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
  create: typeof createDTA,
  get: {
    songTitle: typeof getSongTitle
    songArtist: typeof getSongArtist
  }
  sort: typeof sortDTA
  stringify: typeof stringifyDTA
  update: typeof updateDTA
}

const DTAFile: DTAFileModule = {
  create: createDTA,
  get: {
    songTitle: getSongTitle,
    songArtist: getSongArtist,
  },
  sort: sortDTA,
  stringify: stringifyDTA,
  update: updateDTA,
}

export default DTAFile
