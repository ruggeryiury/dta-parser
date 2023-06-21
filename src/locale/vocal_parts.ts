const allVocalParts = [
    'No Vocals',
    'Solo Vocals',
    '2-Part Harmonies',
    '3-Part Harmonies'
]

export const vocalPartsLocale = (vocal_parts: number): string => {
    return allVocalParts[vocal_parts]
}