/**
 * 162. 寻找峰值
 * https://leetcode-cn.com/problems/find-peak-element/
 */
export function findPeakElement(nums: number[]): number {
    if (nums.length === 1) {
        return 0;
    }

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = left + ((right - left) >> 1);

        if (isPeak(nums, mid)) {
            return mid;
        }

        if (nums[mid - 1] > nums[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}

function isPeak(nums: number[], index: number) {
    if (index === 0) {
        return nums[index] > nums[index + 1];
    }

    return nums[index] > nums[index - 1] && nums[index] > nums[index + 1];
}
