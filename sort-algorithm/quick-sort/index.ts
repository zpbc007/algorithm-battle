import { swap } from "@utils/swap";

export function quickSort<T = any>(arr: T[], left: number = 0, right: number = arr.length - 1) {
    if (left < right) {
        const partitionIndex = partition<T>(arr, left, right)
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
    }

    return arr
}

/**
 * 找到数组的中间值位置并排序
 * @returns 数组的中间值位置
 */
function partition<T>(arr: T[], left: number, right: number) {
    if (left === right) {
        return left
    }
    let base = arr[left],
        index = left + 1

    for (let i = index; i <= right; i++) {
        if (arr[i] < base) {
            swap(arr, i, index)
            index++
        }
    }

    swap(arr, left, index - 1)

    return index - 1
}