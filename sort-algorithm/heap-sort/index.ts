import { swap } from "@utils/swap";
import { heapify } from "./heapify";
import { buildHeap } from "./build-heap";

export function heapSort<T = any>(arr: T[]) {
    buildHeap(arr)

    for (let index = arr.length - 1; index > 0; index--) {
        swap<T>(arr, 0, index)
        heapify(arr, 0, index)   
    }

    return arr
}