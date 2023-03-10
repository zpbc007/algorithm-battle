export function lengthOfLongestSubstring(s: string): number {
    const len = s.length
    let result = 0
    const charIndexMap = new Map<string, number>()

    for (let start = 0, end = 0; end < len; end++) {
        const currentChar = s[end]
        // 需要考虑 index 为 0 的情况
        const currentCharPreIndex =
            charIndexMap.get(currentChar) === undefined ? -1 : charIndexMap.get(currentChar)!
        charIndexMap.set(currentChar, end)

        // 有重复的字符，重置起点
        if (currentCharPreIndex !== -1) {
            start = Math.max(start, currentCharPreIndex + 1)
        }

        result = Math.max(end - start + 1, result)
    }

    return result
}
