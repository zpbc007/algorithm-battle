export function maxSlidingWindow(nums: number[], k: number): number[] {
    const queue: number[] = []

    // 初始化窗口
    for (let i = 0; i < k; i++) {
        while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
            queue.pop()
        }

        queue.push(i)
    }

    const ans: number[] = [nums[queue[0]]]

    for (let i = k; i < nums.length; i++) {
        while (queue.length && nums[i] > nums[queue[queue.length - 1]]) {
            queue.pop()
        }

        queue.push(i)

        // 窗口的左边界在 i - k - 1，右边界在 i
        while (queue[0] <= i - k) {
            queue.shift()
        }

        ans.push(nums[queue[0]])
    }

    return ans
}
