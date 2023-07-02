export const millisecondsToTimeString = (milliseconds: number): string => {
    const totalSeconds = Math.floor(milliseconds / 1000)
    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    const timeParts: string[] = []
    if (hours > 0) {
        timeParts.push(hours.toString().padStart(2, '0'))
        timeParts.push(minutes.toString().padStart(2, '0'))
    } else {
        timeParts.push(minutes.toString())
    }
    timeParts.push(seconds.toString().padStart(2, '0'))

    return timeParts.join(':')
}
