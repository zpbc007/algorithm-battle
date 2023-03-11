export function removeDuplicates(nums: number[]): number {
    const len = nums.length
    if (len === 0 || len === 1) {
        return len
    }
    let fast = 1
    let slow = 0

    while (fast < len) {
        const current = nums[fast]

        // 不重复
        if (current !== nums[slow]) {
            nums[++slow] = nums[fast]
        }

        fast++
    }

    return slow + 1
}
