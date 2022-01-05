import { swapByXOR } from '..';

/**
 * 插入排序
 * 左侧为已经有序部分，不断扩大有序部分的范围
 */
export function insertSort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        let index = i;

        while (index - 1 >= 0 && arr[index] < arr[index - 1]) {
            swapByXOR(arr, index, index - 1);
            index--;
        }
    }

    return arr;
}
