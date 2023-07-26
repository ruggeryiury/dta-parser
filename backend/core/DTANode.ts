import { readDTA } from './readDTA'

interface DTANodeModule {
    read: typeof readDTA
}
/**
 * Utility module for Node.js operations.
 *
 * `WARNING`: This whole module won't work on browser environments.
 */
const DTANode: DTANodeModule = {
    read: readDTA,
}

export default DTANode
