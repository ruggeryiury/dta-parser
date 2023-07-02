export const timeStringToMilliseconds = (timeString: string): number => {
    const timeParts = timeString.split(':').map(Number)

    if (timeParts.length === 3) {
        const [hours, minutes, seconds] = timeParts
        const totalMilliseconds = ((hours * 60 + minutes) * 60 + seconds) * 1000
        return totalMilliseconds
    } else if (timeParts.length === 2) {
        const [minutes, seconds] = timeParts
        const totalMilliseconds = (minutes * 60 + seconds) * 1000
        return totalMilliseconds
    } else {
        throw new Error(
            'Invalid time format. Expected either "HH:MM:SS" or "MM:SS".'
        )
    }
}
