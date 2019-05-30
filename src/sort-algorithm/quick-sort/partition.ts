import { swap } from 'src/utils/swap'

/**
 * 找出数组 left right 间的中间位置
 */
export function partition<T>(arr: T[], left: number, right: number) {
    // 将第一个作为基础值
    const base = arr[left]
    // left - smallIndex 之间的元素都比 base 小
    let smallIndex = left + 1

    for (let i = smallIndex; i <= right; i++) {
        if (arr[i] < base) {
            swap(arr, i, smallIndex)
            // 移动指针
            smallIndex++
        }
    }

    // 将中间值移到中间
    swap(arr, left, smallIndex - 1)

    return smallIndex - 1
}
