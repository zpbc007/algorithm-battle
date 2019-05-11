import { swap } from "@utils/swap";

/**
 * 找到数组的中间值位置并排序
 * @returns 数组的中间值位置
 */
export function partition<T>(arr: T[], left: number, right: number) {
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