import { checkDrumMix } from './utils/checkDrumMix'
import { createDTA } from './core/createDTA'
import { JSONtoDTA } from './utils/JSONtoDTA'

interface DTAToolsModule {
    create: typeof createDTA
    checkDrumMix: typeof checkDrumMix
    readJSON: typeof JSONtoDTA
}

/**
 * Module with general utility functions.
 */
const DTATools: DTAToolsModule = {
    create: createDTA,
    checkDrumMix,
    readJSON: JSONtoDTA,
}

export default DTATools
