import { partition } from "./partition";

export function quickSort<T = any>(arr: T[], left: number = 0, right: number = arr.length - 1) {
    if (left < right) {
        const partitionIndex = partition<T>(arr, left, right)
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
    }

    return arr
}