import { readDTAFile, readDTAFileSync, readParseDTAFile, readParseDTAFileSync } from '../utils/readDTAFile'

/**
 * Module with functions to handle with reading and parsing of `.dta` files or directories.
 */
const DTANode = {
  readParse: readParseDTAFile,
  readParseSync: readParseDTAFileSync,
  readSync: readDTAFileSync,
  read: readDTAFile,
}

export type DTANodeModule = typeof DTANode

export default DTANode
