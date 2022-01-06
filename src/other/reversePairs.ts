/**
 * 剑指 Offer 51. 数组中的逆序对
 * https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
 *
 * 思路：求一个数在数组中，右边有几个比自己小
 */
export function reversePairs(
    nums: number[],
    left = 0,
    right = nums.length - 1
): number {
    let result = 0;
    if (left >= right) {
        return result;
    }

    const mid = left + ((right - left) >> 1);

    result += reversePairs(nums, left, mid);
    result += reversePairs(nums, mid + 1, right);
    result += merge(nums, left, mid, right);

    return result;
}

function merge(
    arr: number[],
    left: number,
    mid: number,
    right: number
): number {
    const tmpArr: number[] = [];
    let leftPoint = left;
    let rightPoint = mid + 1;
    let result = 0;

    while (leftPoint <= mid && rightPoint <= right) {
        if (arr[leftPoint] < arr[rightPoint]) {
            tmpArr.push(arr[leftPoint++]);
        } else {
            result += mid - leftPoint + 1;
            tmpArr.push(arr[rightPoint++]);
        }
    }

    while (leftPoint <= mid) {
        tmpArr.push(arr[leftPoint++]);
    }

    while (rightPoint <= right) {
        tmpArr.push(arr[rightPoint++]);
    }

    tmpArr.forEach((item, index) => {
        arr[left + index] = item;
    });

    return result;
}
