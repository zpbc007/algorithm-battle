export function swap<T>(arr: T[], i: number, j: number) {
    if (i === j) {
        return 
    }
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}