import { genDTARecipe } from '../../src/lib/recipe'
import { genMAGMAFiles } from '../utils/genMAGMAFiles'
import { genSongsDTAFile } from '../utils/genSongsDTAFile'

const DTAGenerators = {
  contentToDTAFile: genSongsDTAFile,
  contentToMAGMAFiles: genMAGMAFiles,
  contentToDTARecipe: genDTARecipe,
}

export type DTAGeneratorsModule = typeof DTAGenerators

export default DTAGenerators
