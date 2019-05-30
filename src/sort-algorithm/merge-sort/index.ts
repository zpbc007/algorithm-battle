/**
 * 归并排序
 * 将数组分成左右两份 直到数组只有一个元素为止
 * 将分离后的数组按顺序合并
 */
export function mergeSort(arr: number[]) {
    const len = arr.length
    if (len < 2) {
        return arr
    }

    // 中点位置
    const middle = Math.floor(len / 2)
    const left = arr.slice(0, middle)
    const right = arr.slice(middle)

    // 合并左右
    return merge(mergeSort(left), mergeSort(right))
}

/**
 * 合并
 * left 与 right 为各自有序的数组
 */
function merge(left: number[], right: number[]) {
    const result = []
    // 左右各自有序 只需取第一个进行比对
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    while (left.length) {
        result.push(left.shift())
    }

    while (right.length) {
        result.push(right.shift())
    }

    return result
}
