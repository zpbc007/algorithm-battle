import { heapify } from './heapify'

export function buildHeap<T>(arr: T[]) {
    const len = arr.length
    for (let i = Math.floor((len - 1) / 2); i >= 0; i--) {
        heapify(arr, i, len)
    }
}
