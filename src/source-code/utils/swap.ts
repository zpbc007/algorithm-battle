/**
 * 交换数组中 两节点
 */
export function swap<T = number>(arr: T[], i: number, j: number) {
    if (i === j) {
        return
    }

    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
