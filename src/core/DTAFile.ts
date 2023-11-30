import { DTAFileContents } from '../@types/dta'
import { CreateDTAFileRecipe, createDTA } from '../lib/create'
import { GetNamingOptions, getSongArtist, getSongTitle } from '../lib/get'
import { SortByOptionsTypes, sortDTA } from '../lib/sort'
import { StringifyDataOptions, stringifyDTA } from '../lib/stringify'
import { UpdateDataOptions, updateDTA } from '../lib/update'

/**
 * Main module of the `DTAParser` package.
 * 
 * This includes functions to handle creation, data fetching and manipulation,
 * sorting, stringifying, and updating `DTAFileContents` objects.
 */
export interface DTAFileModule {
  create: (values?: CreateDTAFileRecipe | undefined) => DTAFileContents
  get: {
    songTitle: (song: DTAFileContents, options?: GetNamingOptions) => string
    songArtist: (song: DTAFileContents, options?: GetNamingOptions) => string
  }
  sort: (songs: DTAFileContents[], sortBy?: SortByOptionsTypes | undefined) => DTAFileContents[]
  stringify: (songs: DTAFileContents | DTAFileContents[], options?: StringifyDataOptions | undefined) => string
  update: (dta: DTAFileContents, update: UpdateDataOptions) => DTAFileContents
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
