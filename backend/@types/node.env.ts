declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv {
            RB1_DTA: string
            RB2_DTA: string
            RB3_DTA: string
            RB1_DLC_DTA: string
            RB3_DLC_DTA: string
            LEGO_DTA: string
            GREENDAY_DTA: string
            BLITZ_DTA: string
            MYSONGS: string
            SONGS_UPDATES: string
            TEST_GEN_DTA: string
            CUSTOM_DTAS: string
        }
    }
}

export {}
