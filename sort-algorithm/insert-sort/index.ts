export function insertSort(arr: number[]) {
    for (let i = 1; i < arr.length; i++) {
        let preIndex = i - 1
        const current = arr[i]
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--
        }

        arr[preIndex+1] = current
    }
}