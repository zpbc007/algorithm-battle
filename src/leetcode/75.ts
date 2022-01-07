import { swapByXOR } from '..';

/**
 * 75. 颜色分类
 * https://leetcode-cn.com/problems/sort-colors/
 *
 * 思路：双指针，左侧指向小于位置，右侧指向大于位置，不断向中间移动两个指针
 */
export function sortColors(nums: number[]): void {
    if (nums.length <= 1) {
        return;
    }

    let left = -1;
    let right = nums.length;
    let current = 0;

    while (current < right) {
        const item = nums[current];
        if (item < 1) {
            // 指针不相邻，交换元素
            if (current !== left + 1) {
                swapByXOR(nums, current, left + 1);
            } else {
                current++;
            }

            left++;
        }

        if (item === 1) {
            current++;
        }

        if (item > 1) {
            swapByXOR(nums, current, right - 1);

            right--;
        }
    }
}
