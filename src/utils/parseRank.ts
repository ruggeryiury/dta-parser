import { DTADocument, DTARankPartTypes } from '../@types/DTADocument'
import { DTARankParserReturn, RankingTypeOptions } from '../@types/parseRank'

const ranksMap = {
    drum: [124, 151, 178, 242, 345, 448],
    bass: [135, 181, 228, 293, 364, 436],
    guitar: [139, 176, 221, 267, 333, 409],
    vocals: [132, 175, 218, 279, 353, 427],
    keys: [153, 211, 269, 327, 385, 443],
    real_keys: [153, 211, 269, 327, 385, 443],
    real_bass: [150, 208, 267, 325, 384, 442],
    real_guitar: [150, 205, 264, 323, 382, 442],
    band: [163, 215, 243, 267, 292, 345],
}
const verbose = [
    'Warmup',
    'Apprentice',
    'Solid',
    'Moderate',
    'Challenging',
    'Nightmare',
    'Impossible',
]
const graphic = [
    '⚪⚪⚪⚪⚪',
    '⚫⚪⚪⚪⚪',
    '⚫⚫⚪⚪⚪',
    '⚫⚫⚫⚪⚪',
    '⚫⚫⚫⚫⚪',
    '⚫⚫⚫⚫⚫',
    '🔴🔴🔴🔴🔴',
]

export const parseRank = <T extends RankingTypeOptions>(
    part: DTARankPartTypes,
    dtaDocument: DTADocument,
    type?: T
): DTARankParserReturn<T> => {
    let parseRankReturn = -1
    const rank = dtaDocument.rawContent[`rank_${part}`]

    if (!rank || rank === 0) {
        if (type === 'alternate') {
            return (parseRankReturn + 1) as DTARankParserReturn<T>
        } else if (type === 'raw') {
            return rank as DTARankParserReturn<T>
        } else if (type === 'verbose') {
            return 'No Part' as DTARankParserReturn<T>
        } else if (type === 'graphic') {
            return 'NO PART' as DTARankParserReturn<T>
        } else {
            // (type === 'default')
            return parseRankReturn as DTARankParserReturn<T>
        }
    }

    parseRankReturn++

    ranksMap[part].forEach((value) => {
        if (rank >= value) {
            parseRankReturn++
        }
    })

    if (type === 'alternate') {
        return (parseRankReturn + 1) as DTARankParserReturn<T>
    }
    if (type === 'raw') {
        return rank as DTARankParserReturn<T>
    }
    if (type === 'verbose') {
        return verbose[parseRankReturn] as DTARankParserReturn<T>
    }
    if (type === 'graphic') {
        return graphic[parseRankReturn] as DTARankParserReturn<T>
    }
    return parseRankReturn as DTARankParserReturn<T>
}
