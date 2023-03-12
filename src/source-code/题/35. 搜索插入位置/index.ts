export function searchInsert(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const middle = left + ((right - left) >> 1)

        if (target <= nums[middle]) {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }

    return left
}
