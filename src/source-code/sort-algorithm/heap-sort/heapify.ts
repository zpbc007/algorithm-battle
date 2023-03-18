import { Comparator } from '@utils/comparator'
import { swap } from '@utils/swap'

/**
 * 调整堆 不包括end
 */
export function heapify<T>(arr: T[], start: number, end: number, comparator: Comparator<T>) {
    const parent = start
    const left = 2 * start + 1
    const right = 2 * start + 2
    let bigger = left

    // 超过范围 退出
    if (left >= end) {
        return
    }

    if (right < end && comparator.lessThan(arr[left], arr[right])) {
        bigger = right
    }

    // 如果父级节点小于子节点 递归调整
    if (comparator.lessThanOrEqual(arr[parent], arr[bigger])) {
        swap(arr, parent, bigger)
        heapify(arr, bigger, end, comparator)
    }
}
