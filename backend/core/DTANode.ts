import { readDTA, readDTASync } from '../utils/readDTA'

interface DTANodeModule {
    readDTA: typeof readDTA
    readDTASync: typeof readDTASync
}
/**
 * Utility module for Node environment operations.
 */
const DTANode: DTANodeModule = {
    readDTA,
    readDTASync,
}

export default DTANode
