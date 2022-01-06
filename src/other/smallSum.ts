/**
 * 小和问题
 * https://mp.weixin.qq.com/s/rMsbcUf9ZPhvfRoyZGW6HA
 *
 * 问题描述：
 * 在一个数组中，每一个数左边比当前数小的数累加起来，叫做这个数组的小和。求一个数组的小和。
 * 例子：
 * [1,3,4,2,5]
 * 1左边比1小的数，没有；
 * 3左边比3小的数，1；
 * 4左边比4小的数，1、3；
 * 2左边比2小的数，1；
 * 5左边比5小的数，1、3、4、2；
 * 所以小和为1+1+3+1+1+3+4+2=16
 * 要求时间复杂度O(NlogN)，空间复杂度O(N)
 *
 * 解题思路：
 * 一个数右侧有几个比自己大，自己就被加了多少次。
 * 使用归并排序
 */
export function smallSum(arr: number[]) {
    return sum(arr, 0, arr.length - 1);
}

function sum(arr: number[], left: number, right: number): number {
    let result = 0;
    if (left >= right) {
        return 0;
    }

    const mid = left + ((right - left) >> 1);
    result += sum(arr, left, mid);
    result += sum(arr, mid + 1, right);
    result += merge(arr, left, mid, right);

    return result;
}

function merge(
    arr: number[],
    left: number,
    mid: number,
    right: number
): number {
    let leftPoint = left;
    let rightPoint = mid + 1;
    let result = 0;
    const tmpArr = [];

    while (leftPoint <= mid && rightPoint <= right) {
        if (arr[leftPoint] < arr[rightPoint]) {
            const item = arr[leftPoint++];
            result += item * (right - rightPoint + 1);
            tmpArr.push(item);
        } else {
            tmpArr.push(arr[rightPoint++]);
        }
    }

    // 左侧剩余
    while (leftPoint <= mid) {
        tmpArr.push(arr[leftPoint++]);
    }

    // 右侧剩余
    while (rightPoint <= right) {
        tmpArr.push(arr[rightPoint++]);
    }

    // 放回原数组中
    tmpArr.forEach((value, index) => {
        arr[index + left] = value;
    });

    return result;
}
