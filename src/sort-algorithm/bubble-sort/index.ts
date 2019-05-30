import { swap } from 'src/utils/swap'

/**
 * 冒泡排序
 * 两层循环
 * 外层用于遍历整个数组 每次循环会有一个元素（最大、最小）被确定
 * 内层用于将本次的的最大、最小筛选出来
 */
export function bubbleSort(arr: number[]) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = 1; j < len - i; j++) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j, j - 1)
            }
        }
    }

    return arr
}
