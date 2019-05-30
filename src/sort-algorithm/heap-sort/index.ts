import { swap } from 'src/utils/swap'
import { buildHeap } from './build-heap'
import { heapify } from './heapify'

/**
 * 堆排序
 */
export function heapSort<T = any>(arr: T[]) {
    // 创建堆
    buildHeap(arr)

    for (let i = arr.length - 1; i >= 0; i--) {
        // 最大值放入末尾
        swap(arr, 0, i)
        // 重新构建堆
        heapify(arr, 0, i)
    }

    return arr
}
