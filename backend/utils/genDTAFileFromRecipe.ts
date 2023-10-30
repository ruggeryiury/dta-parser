import { DTAFileContents, DTATools } from '../../src'
import { CreateDTAFileRecipe } from '../../src/utils/createDTA'
import { fullfillDTA } from './fullfillDTA'
import { MAGMAFileContents } from '../@types/MAGMAFileContents'

/**
 * Generates a parsed song file with additional attributes for MAGMA related actions from a parsed song "recipe" object.
 * - - - -
 * @param {CreateDTAFileRecipe} songRecipe An object that represents a parsed song "recipe" for its generation.
 * @param {Omit<MAGMAFileContents, keyof DTAFileContents>} newValues The new values to want to insert on the parsed song object.
 * @returns {MAGMAFileContents} The parsed song object with new informations added.
 */
export const genDTAFileFromRecipe = (songRecipe: CreateDTAFileRecipe, newValues?: Omit<MAGMAFileContents, keyof DTAFileContents>): MAGMAFileContents => fullfillDTA<MAGMAFileContents>(DTATools.create(songRecipe, true), newValues ? newValues : {})
