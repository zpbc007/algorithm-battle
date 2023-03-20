export function numberOfRounds(loginTime: string, logoutTime: string): number {
    const { hour: loginHour, minute: loginMinute } = parseTime(loginTime)
    const { hour: logoutHour, minute: logoutMinute } = parseTime(logoutTime)

    const loginTotalMinute = loginHour * 60 + loginMinute
    let logoutTotalMinute = logoutHour * 60 + logoutMinute
    if (logoutTotalMinute < loginTotalMinute) {
        logoutTotalMinute += 24 * 60
    }

    logoutTotalMinute = Math.floor(logoutTotalMinute / 15) * 15

    return Math.max(0, Math.floor((logoutTotalMinute - loginTotalMinute) / 15))
}

function parseTime(timeStr: string) {
    const [hour, minute] = timeStr.split(':')

    return {
        hour: Number(hour),
        minute: Number(minute),
    }
}
