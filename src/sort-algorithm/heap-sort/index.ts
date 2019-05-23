import { swap } from 'src/utils/swap'
import { buildHeap } from './build-heap'
import { heapify } from './heapify'

export function heapSort<T = any>(arr: T[]) {
    buildHeap(arr)

    for (let index = arr.length - 1; index > 0; index--) {
        swap<T>(arr, 0, index)
        heapify(arr, 0, index)
    }

    return arr
}
