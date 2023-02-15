export function shortestToChar(s: string, c: string): number[] {
    const result: number[] = []

    let lastIndex = -1
    for (let index = 0; index < s.length ; index++) {
        const char = s[index]

        if (char === c) {
            lastIndex = index
        }

        result[index] = lastIndex === -1 ? s.length : index - lastIndex
    }

    lastIndex = -1
    for (let index = s.length - 1; index >= 0; index--) {
        const char = s[index]

        if (char === c) {
            lastIndex = index
        }

        result[index] = lastIndex === -1 ? result[index] : (result[index] < lastIndex - index ? result[index] : lastIndex - index)
    }

    return result
};