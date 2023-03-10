export function findSubstring(s: string, words: string[]): number[] {
    if (!words.length) {
        return []
    }

    const { check, wordStrLen } = isWordString(words)

    let result: number[] = []
    for (let start = 0; start < s.length - wordStrLen + 1; start++) {
        // 需要被检查的字符串
        const currentStr = s.slice(start, start + wordStrLen)

        // 满足条件
        if (check(currentStr)) {
            result.push(start)
        }
    }

    return result
}

const isWordString = (words: string[]) => {
    const wordItemLen = words[0].length
    const wordStrLen = wordItemLen * words.length

    return {
        wordStrLen,
        check: (str: string) => {
            // 长度不够
            if (str.length < wordStrLen) {
                return false
            }
            
            const wordMap = words.reduce((map, word) => {
                map.set(word, (map.get(word) || 0) + 1)
                return map
            }, new Map<string, number>())
            const strWords = splitStringByLen(str, wordItemLen)

            for (const word of strWords) {
                // 不存在的词
                if (!wordMap.has(word)) {
                    return false
                }

                // 剩余次数
                const num = wordMap.get(word)!

                // 次数归零，直接删除
                if (num - 1 === 0) {
                    wordMap.delete(word)
                } else {
                    wordMap.set(word, num - 1)
                }
            }

            // map 里不应该再有剩余
            return wordMap.size === 0
        },
    }
}

const splitStringByLen = (str: string, len: number) => {
    const result: string[] = []

    for (let i = 0; i < str.length; i = i + len) {
        result.push(str.slice(i, i + len))
    }

    return result
}
