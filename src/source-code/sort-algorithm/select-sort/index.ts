import { swap } from '@utils/swap'

/**
 * 选择排序
 * 两层循环
 * 外层用于遍历整个数组 将本次最小的那个与首位交换
 * 内层循环 找出剩下的里面的最小的
 */
export function selectSort(arr: number[]) {
    const len = arr.length
    for (let i = 0; i < len; i++) {
        let minIndex = i

        // 找出当剩下的元素中的最小的那个
        for (let j = i + 1; j < len; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }

        // 与首位交换
        swap(arr, i, minIndex)
    }

    return arr
}
