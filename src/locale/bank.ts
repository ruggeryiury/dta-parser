const allBanks = {
    'sfx/tambourine_bank.milo': 'Tambourine',
    'sfx/cowbell_bank.milo': 'Cowbell',
    'sfx/handclap_bank.milo': 'Hand Clap',
    'sfx/cowbell3_bank.milo': 'Cowbell (Alternate)',
}

export type SongBankTypes = keyof typeof allBanks

export const bankLocale = (bank: SongBankTypes): string => {
    return allBanks[bank]
}
