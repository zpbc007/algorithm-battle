import { heapify } from './heapify'

/**
 * 创建堆
 * 由于为二叉树 只需调整一半就够了
 */
export function buildHeap<T>(arr: T[]) {
    const len = arr.length
    for (let i = Math.floor((len - 1) / 2); i >= 0; i--) {
        heapify(arr, i, len)
    }
}
