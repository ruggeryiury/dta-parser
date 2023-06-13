export type RankingTypeOptions =
    | 'default'
    | 'alternate'
    | 'raw'
    | 'verbose'
    | 'graphic'
    | undefined

export type DTARankParserReturn<T extends RankingTypeOptions> = T extends
    | undefined
    | 'default'
    | 'alternate'
    | 'raw'
    ? number
    : string
