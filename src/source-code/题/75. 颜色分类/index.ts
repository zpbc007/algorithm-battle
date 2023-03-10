import { swap } from '@utils/swap'

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export function sortColors(nums: number[]) {
    // 遍历下标
    let middle = 0
    // 指向第一个不为0的数
    let left = 0
    // 指向最后一个不为2的数
    let right = nums.length - 1

    while (middle <= right) {
        const current = nums[middle]
        switch (current) {
            case 0: {
                swap(nums, middle, left)
                middle++
                left++
                break
            }
            case 1: {
                middle++
                break
            }
            case 2: {
                swap(nums, middle, right)
                right--
                break
            }
        }
    }
}
