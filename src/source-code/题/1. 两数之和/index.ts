export function twoSum(nums: number[], target: number): number[] {
    const numMap = nums.reduce((acc, num, index) => {
        acc.set(num, index)
        return acc
    }, new Map<number, number>())

    const targetIndex = nums.findIndex((num, index) => {
        const another = target - num

        return numMap.has(another) && numMap.get(another) !== index
    })

    return [targetIndex, numMap.get(target - nums[targetIndex])!]
}

export function twoSum2(nums: number[], target: number): number[] {
    return nums.reduce<{ done: boolean; numIndexMap: Map<number, number>; result: number[] }>(
        (acc, num, index) => {
            if (acc.done) {
                return acc
            }

            if (acc.numIndexMap.has(target - num)) {
                return {
                    ...acc,
                    done: true,
                    result: [index, acc.numIndexMap.get(target - num)!],
                }
            }

            acc.numIndexMap.set(num, index)
            return acc
        },
        {
            done: false,
            numIndexMap: new Map(),
            result: [],
        },
    ).result
}
