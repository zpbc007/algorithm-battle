import { swapByXOR } from '..';

/**
 * 选择排序，每次循环中找到当前范围内最小的数
 */
export function selectSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (arr[i] !== arr[minIndex]) {
            swapByXOR(arr, i, minIndex);
        }
    }

    return arr;
}
