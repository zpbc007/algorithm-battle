export function topKFrequent(nums: number[], k: number): number[] {
    const frequentMap = nums.reduce((frequentMap, num) => {
        frequentMap.set(num, (frequentMap.get(num) || 0) + 1)

        return frequentMap
    }, new Map<number, number>())

    return Array.from(frequentMap.keys())
        .map((num) => {
            return {
                num,
                frequent: frequentMap.get(num)!,
            }
        })
        .sort((a, b) => b.frequent - a.frequent)
        .slice(0, k)
        .map((item) => item.num)
}
