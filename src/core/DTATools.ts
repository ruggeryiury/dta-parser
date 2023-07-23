import { checkDrumMix } from '../utils/checkDrumMix'
import { createDTA } from './createDTA'
import { JSONContenttoDTA } from './DTAtoJSON'

interface DTAToolsModule {
    /**
     * Creates a new parsed song object.
     * - - - -
     * @param {CreateDataRequired} options `OPTIONAL` Options for the `DTADocument` creation process.
     * If `null`, It will be created using a all-default, all-blank options.
     * @returns {DTADocument} A new parsed song object.
     */
    create: typeof createDTA
    /**
     * Returns the drum mix of the song.
     *
     * Returns `undefined` if there's no drum part or compatible drum mixing.
     * - - - -
     * @param {DTADocument} song The parsed song you want the drum mixing information from.
     * @returns {string | undefined} The drum mix of the song. Returns `undefined` if there's no
     * drum part or compatible drum mixing.
     */
    checkDrumMix: typeof checkDrumMix
    /**
     * Returns a new instance of `DTADocument` from JSON file contents.
     * - - - -
     * @param {string} jsonFileContents The JSON file contents as string.
     * @returns {DTADocument} A new `DTADocument` instance in memory.
     */
    readJSON: typeof JSONContenttoDTA
}

/**
 * Module with general utility functions.
 */
const DTATools: DTAToolsModule = {
    create: createDTA,
    checkDrumMix,
    readJSON: JSONContenttoDTA,
}

export default DTATools
