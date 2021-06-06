export function coinChange(coins: number[], amount: number): number {
    // 缓存之前的遍历结果
    const cache = new Map<number, number>()

    const main = (target: number) => {
        // 目标为 0 需要 0 个
        if (target === 0) {
            return 0
        }
        
        // 目标为负数 不可能存在
        if (target < 0) {
            return -1
        }

        // 有缓存 用缓存
        if (cache.has(target)) {
            return cache.get(target)
        }

        console.warn('cache not found: ', target)

        // 取每一个硬币
        const result = coins.reduce((acc, coinAmount) => {
            const subProblem = main(target - coinAmount)

            // 无解
            if (subProblem === -1 || subProblem === null) {
                return acc
            }

            // 之前一直无解
            if(acc === null || acc === -1) {
                return subProblem + 1
            }

            // 取当前解和之前解中的最小值
            return Math.min(subProblem + 1, acc)
        }, null)

        const res = result === null ? -1 : result

        cache.set(target, res)
        console.warn('set cache: ', target)
        
        return res
    }

    return main(amount)
};
