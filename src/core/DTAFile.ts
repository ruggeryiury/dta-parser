import { createDTA } from '../lib/create'
import { getSongArtist, getSongTitle } from '../lib/get'
import { stringifyDTA } from '../lib/stringify'
import { updateDTA } from '../lib/update'

const DTAFile = {
  create: createDTA,
  get: {
    songTitle: getSongTitle,
    songArtist: getSongArtist,
  },
  stringify: stringifyDTA,
  update: updateDTA,
}

export type DTAFileModule = typeof DTAFile

export default DTAFile
