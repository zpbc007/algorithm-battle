export function minSubarray(nums: number[], p: number): number {
    const { preSum, total } = nums.reduce<{
        preSum: number[]
        total: number
    }>(
        (acc, item) => {
            acc.total = acc.total + item
            acc.preSum.push(acc.total)

            return acc
        },
        {
            preSum: [],
            total: 0,
        },
    )

    const mod = total % p
    if (mod === 0) {
        return 0
    }

    let result = nums.length
    const modMap = new Map<number, number>()
    // 如果数组前部分为答案，需要找到 mod 为 0 的 index
    modMap.set(0, -1)

    preSum.forEach((num, index) => {
        const currentMod = num % p
        // 为了避免是负数这里加了个 p
        const targetMod = (currentMod - mod + p) % p

        if (modMap.has(targetMod)) {
            const targetIndex = modMap.get(targetMod)!
            result = Math.min(result, index - targetIndex)
        }

        modMap.set(currentMod, index)
    })

    return result === nums.length ? -1 : result
}
