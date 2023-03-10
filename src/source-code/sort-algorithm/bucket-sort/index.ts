import { quickSort } from '@app/sort-algorithm/quick-sort'
import { getMinAndMax } from '@utils/get-max-min'

export function bucketSort(arr: number[], bucketSize = 5) {
    const { max, min } = getMinAndMax(arr)

    // 桶的数量
    const bucketCount = Math.floor((max - min) / bucketSize) + 1
    const buckets: number[][] = []
    for (let i = 0; i < bucketCount; i++) {
        buckets[i] = []
    }

    for (let i = 0; i < arr.length; i++) {
        buckets[Math.floor((arr[i] - min) / bucketSize)].push(arr[i])
    }

    arr = []
    buckets.map((item, index) => {
        quickSort(item)

        item.map((value) => {
            arr.push(value)
        })
    })

    return arr
}
