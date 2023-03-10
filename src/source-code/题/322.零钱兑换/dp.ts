export function coinChange(coins: number[], amount: number): number {
    // dp 数组，下标对应 amount 对应的最小数量。（dpArr[i] : 目标金币数为 i 时对应的最小数量为 dpArr[i]）
    // amount + 1 填充的原因是，该值为最大上限
    const dpArr = new Array(amount + 1).fill(amount + 1)

    // base case ，目标金币数为0时对应0个金币
    dpArr[0] = 0

    // 每一个 target 
    for (let i = 0; i < amount + 1; i++) {
        // 选择每一个金币
        for (const coin of coins) {
            // 为负数，跳过
            if (i - coin < 0) {
                continue
            }

            // 当前值为前一个的最小值 + 1，如果前一个无解，则设为上限
            dpArr[i] = Math.min(dpArr[i], dpArr[i - coin] + 1)
        }
    }

    // 判断是否有解
    return dpArr[amount] === amount + 1 ? -1 : dpArr[amount]
};
