export function maxChunksToSorted(arr: number[]): number {
    // 排序后的数组
    const sortedArr = [...arr].sort((a, b) => a - b)
    const map = new Map<number, number>()
    let result = 0

    for (let i = 0; i < arr.length; i++) {
        const sortedNum = sortedArr[i]
        const num = arr[i]

        // 在排序数组中出现，频次 +1
        map.set(sortedNum, (map.get(sortedNum) || 0) + 1)
        if (map.get(sortedNum) === 0) {
            map.delete(sortedNum)
        } 

        // 在原始数组中出现，频次 -1
        map.set(num, (map.get(num) || 0) - 1)
        if (map.get(num) === 0) {
            map.delete(num)
        }

        // 频次相等，可以分隔
        if (map.size === 0) {
            result++
        }
    }

    return result
};