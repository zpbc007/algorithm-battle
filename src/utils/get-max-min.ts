export function getMinAndMax<T>(arr: T[]) {
    if (!arr || arr.length === 0) {
        return {
            max: 0,
            min: 0,
        }
    }

    let max = arr[0]
    let min = arr[0]
    for (const val of arr) {
        if (val > max) {
            max = val
        }
        if (val < min) {
            min = val
        }
    }

    return {
        max,
        min,
    }
}
