import { swapByXOR } from '..';

/**
 * 快速排序
 * 1. 每次随机选择一个数字作为 partition 的中点值
 * 2. 荷兰国旗逻辑 < 放左边 = 放中间 > 放右边
 */
export function quickSort(nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums;
    }
    sortInScope(nums, 0, nums.length - 1);

    return nums;
}

function sortInScope(nums: number[], left: number, right: number) {
    if (left >= right) {
        return;
    }
    const targetIndex = Math.floor(Math.random() * (right - left) + left);
    swapByXOR(nums, targetIndex, right);
    const [leftRight, rightLeft] = partition(nums, left, right);
    // console.warn(
    //     `partition left: ${left}, right: ${right}, leftRight: ${leftRight}, rightLeft: ${rightLeft}, nums: ${JSON.stringify(
    //         nums
    //     )}`
    // );

    sortInScope(nums, left, leftRight - 1);
    sortInScope(nums, rightLeft + 1, right);
}

/**
 *
 * @param nums
 * @param left
 * @param right
 */
function partition(
    nums: number[],
    left: number,
    right: number
): [number, number] {
    let leftPoint = left - 1;
    let rightPoint = right;

    while (left < rightPoint) {
        if (nums[left] < nums[right]) {
            swapByXOR(nums, ++leftPoint, left++);
        } else if (nums[left] === nums[right]) {
            left++;
        } else {
            swapByXOR(nums, left, --rightPoint);
        }
    }

    swapByXOR(nums, rightPoint, right);

    return [leftPoint + 1, rightPoint];
}
