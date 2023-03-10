import { partition } from './partition'

/**
 * 快速排序
 */
export function quickSort<T = any>(arr: T[], left: number = 0, right: number = arr.length - 1) {
    // 递归退出条件
    if (left < right) {
        // 找到中间位置
        const middle = partition(arr, left, right)
        // 使左侧有序
        quickSort(arr, left, middle - 1)
        // 使右侧有序
        quickSort(arr, middle + 1, right)
    }

    return arr
}
