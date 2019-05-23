import { swap } from 'src/utils/swap'

export function bubbleSort(arr: number[]) {
    const len = arr.length
    for (let i = len - 1; i >= 0; i--) {
        for (let j = len - 1; j >= len - i; j--) {
            if (arr[j] < arr[j - 1]) {
                swap(arr, j - 1, j)
            }
        }
    }

    return arr
}
