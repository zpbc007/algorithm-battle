export function quickSort<T = any>(arr: T[], left: number = 0, right: number = arr.length - 1) {
    if (left < right) {
        const partitionIndex = partition<T>(arr, left, right)
        quickSort(arr, left, partitionIndex - 1)
        quickSort(arr, partitionIndex + 1, right)
    }

    return arr
}

function partition<T>(arr: T[], left: number, right: number) {
    if (left === right) {
        return left
    }
    let base = arr[left],
        index = left + 1

    for (let i = index; i <= right; i++) {
        if (arr[i] < base) {
            swap(arr, i, index)
            index++
        }
    }

    swap(arr, left, index - 1)

    return index - 1
}

function swap<T>(arr: T[], i: number, j: number) {
    if (i === j) {
        return 
    }
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}