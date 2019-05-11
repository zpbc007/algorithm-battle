import { heapify } from "./heapify";

export function buildHeap<T>(arr: T[]) {
    const len = arr.length
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(arr, i, len)
    }
}