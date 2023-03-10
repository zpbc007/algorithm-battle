/**
 * 插入排序
 * 外层遍历从1开始 i之前的视为已排序的
 * 将 i 插到它应该在的位置上
 */
export function insertSort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        let preIndex = i - 1
        const current = arr[i]
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }

        arr[preIndex + 1] = current
    }

    return arr
}
