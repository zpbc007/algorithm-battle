export function searchRange(nums: number[], target: number): number[] {
    return [binarySearch(nums, target, true), binarySearch(nums, target, false)]
};

function binarySearch(nums: number[], target: number, lower: boolean): number {
    if (nums.length === 0) {
        return -1
    }

    let left = 0
    let right = nums.length

    while(left < right) {
        const mid = left + Math.floor((right - left) / 2)

        if (nums[mid] === target) {
            if (lower) {
                right = mid
            } else {
                left = mid + 1
            }
        } else if (nums[mid] < target) {
            left = mid + 1
        } else if (nums[mid] > target) {
            right = mid
        }
    }

    if (lower) {
        if (left === nums.length) {
            return -1
        }

        return nums[left] === target ? left : -1
    } else {
        if (left === 0) {
            return -1
        }

        return nums[left - 1] === target ? left - 1 : -1
    }
}