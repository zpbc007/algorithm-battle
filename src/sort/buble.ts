import { swapByXOR } from '..';

/**
 * 冒泡排序
 * 两两比较，每次外层循环确定一个极值
 */
export function bubleSort(arr: number[]) {
    if (arr.length <= 1) {
        return arr;
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swapByXOR(arr, j, j + 1);
            }
        }
    }

    return arr;
}
