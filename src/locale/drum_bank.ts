const allDrumBanks = {
    'sfx/kit01_bank.milo': 'Hard Rock Kit',
    'sfx/kit02_bank.milo': 'Arena Kit',
    'sfx/kit03_bank.milo': 'Vintage Kit',
    'sfx/kit04_bank.milo': 'Trashy Kit',
    'sfx/kit05_bank.milo': 'Electronic Kit',
}

export type SongDrumBankTypes = keyof typeof allDrumBanks

export const drumBankLocale = (drum_bank: SongDrumBankTypes): string => {
    return allDrumBanks[drum_bank]
}