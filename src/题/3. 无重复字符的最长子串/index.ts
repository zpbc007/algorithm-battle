export function lengthOfLongestSubstring(s: string): number {
    if (!s.length) {
        return 0
    }

    let point1 = 0
    let point2 = 0
    let result = 0
    const charMap = new Map<string, number>()

    while (point1 < s.length && point2 < s.length) {
        const currentChar = s[point1]

        // 无重复字符，继续移动
        if (!charMap.has(currentChar)) {
            charMap.set(currentChar, point1)
            point1++
            continue
        } else {
            const currentStrLen = point1 - point2
            result = result > currentStrLen ? result : currentStrLen

            // 新的无重复起点
            const point2NextPos = charMap.get(currentChar)! + 1
            // 删除起点前的 char
            s.slice(point2, point2NextPos)
                .split('')
                .forEach((char) => charMap.delete(char))
            // 移动到下一个位置
            point2 = point2NextPos
        }
    }

    const currentStrLen = point1 - point2
    result = result > currentStrLen ? result : currentStrLen

    return result
}
