import { checkDrumMix } from '../utils/checkDrumMix'
import { createDTA } from '../utils/createDTA'
import { getDTA } from '../utils/getDTA'
import { stringifyDTA } from '../utils/stringifyDTA'
import { updateDTA } from '../utils/updateDTA'

/**
 * Module with general utility functions.
 */
const DTATools = {
  create: createDTA,
  checkDrumMix,
  get: getDTA,
  stringify: stringifyDTA,
  update: updateDTA,
}

export type DTAToolsModule = typeof DTATools

export default DTATools
