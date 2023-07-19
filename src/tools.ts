import { JSONContenttoDTA, createDTA } from './core'

interface DTAToolsModule {
    /**
     * Creates a new parsed song object.
     * @param {CreateDataRequired} options `OPTIONAL` Options for the `DTADocument` creation process.
     * If `null`, It will be created using a all-default, all-blank options.
     * @returns {DTADocument} A new parsed song object.
     */
    create: typeof createDTA
    /**
     * Returns a new instance of `DTADocument` from JSON file contents.
     * @param {string} jsonFileContents The JSON file contents as string.
     * @returns {DTADocument} A new `DTADocument` instance in memory.
     */
    read: typeof JSONContenttoDTA
}

/**
 * Module with general utility functions.
 */
const DTATools: DTAToolsModule = {
    create: createDTA,
    read: JSONContenttoDTA,
}

export default DTATools
