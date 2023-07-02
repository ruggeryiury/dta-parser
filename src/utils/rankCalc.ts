import { InstrumentRankingsOptions } from '../core'

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

export type RankTypes = keyof typeof ranksMap

export const rankCalc = (type: RankTypes, rank?: number): number => {
    let parseRankReturn = -1

    if (rank === undefined || rank === 0) {
        return parseRankReturn
    }

    parseRankReturn++

    ranksMap[type].forEach((value) => {
        if (rank >= value) parseRankReturn++
    })

    return parseRankReturn
}

export const dtaRankCalc = (
    type: RankTypes,
    rank: InstrumentRankingsOptions
): number => {
    if (rank === 'No Part') return 0
    else if (rank === 'Warmup') return 1
    else if (rank === 'Apprentice') return ranksMap[type][0]
    else if (rank === 'Solid') return ranksMap[type][1]
    else if (rank === 'Moderate') return ranksMap[type][2]
    else if (rank === 'Challenging') return ranksMap[type][3]
    else if (rank === 'Nightmare') return ranksMap[type][4]
    else {
        // if (rank === 'Impossible')
        return ranksMap[type][5]
    }
}
