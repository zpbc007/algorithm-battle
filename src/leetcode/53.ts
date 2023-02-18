/** 三重循环 */
export function maxSubArray(nums: number[]): number {
    let maxValue = -Infinity

    for (let startIndex = 0; startIndex < nums.length; startIndex++) {
        for (let endIndex = startIndex; endIndex < nums.length; endIndex++) {
            const rangeSum = sum(nums, startIndex, endIndex)
            if (rangeSum > maxValue) {
                maxValue = rangeSum
            }
        }
    }

    return maxValue
};

/** 利用之前的计算结果 */
export function maxSubArray1(nums: number[]): number {
    let maxValue = -Infinity

    for (let startIndex = 0; startIndex < nums.length; startIndex++) {
        let pre = 0
        for (let endIndex = startIndex; endIndex < nums.length; endIndex++) {
            pre += nums[endIndex]
            if (pre > maxValue) {
                maxValue = pre
            }
        }
    }

    return maxValue
};

export function maxSubArray2(arr: number[]) {
    let pre = 0, max = arr[0]

    arr.forEach(num => {
        pre = Math.max(pre + num, num)
        max = Math.max(max, pre)
    })

    return max
}

export function maxSubArray3(arr: number[]) {
    return getMaxSum(arr, 0, arr.length).mSum
}

interface SumData {
    // l r 内的和
    sum: number
    // 以 l 为起点的最大 sum
    lSum: number
    // 以 r 为起点的最大 sum
    rSum: number
    // l r 内的最大 sum 
    mSum: number
}

function getMaxSum(arr: number[], l: number, r: number): SumData {
    // 只有一个元素
    if (l == r - 1) {
        return {
            sum: arr[l],
            lSum: arr[l],
            rSum: arr[l],
            mSum: arr[l]
        }
    }

    const m = l + Math.floor((r - l) / 2)
    const leftData = getMaxSum(arr, l, m)
    const rightData = getMaxSum(arr, m, r)
    return merge(leftData, rightData)
}

function merge(left: SumData, right: SumData): SumData {
    const sum = left.sum + right.sum
    // 左侧的 lSum | 左侧的 sum + 右侧的 lSum(跨区间)
    const lSum = Math.max(left.lSum, left.sum + right.lSum)
    // 右侧的 rSum | 右侧的 sum + 左侧的 rSum(跨区间)
    const rSum = Math.max(right.rSum, right.sum + left.rSum)
    // 左侧或右侧的 mSum(不跨区间) | 左侧的 rSum + 右侧的 lSum（跨区间）
    const mSum = Math.max(Math.max(left.mSum, right.mSum), left.rSum + right.lSum)

    return {
        sum,
        lSum,
        rSum,
        mSum
    }
}

/** 计算范围内的数字之和 */
function sum(arr: number[], startIndex: number, endIndex: number) {
    let result = 0

    for (; startIndex <= endIndex; startIndex++) {
        result += arr[startIndex]
    }

    return result
}