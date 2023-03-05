import { MinHeap } from '@app/data-structure/heap/min-heap'

export function topKFrequent(nums: number[], k: number): number[] {
    const frequentMap = nums.reduce((frequentMap, num) => {
        frequentMap.set(num, (frequentMap.get(num) || 0) + 1)

        return frequentMap
    }, new Map<number, number>())

    const minHeap = Array.from(frequentMap.keys()).reduce((minHeap, num) => {
        const frequent = frequentMap.get(num)!
        if (minHeap.size() < k) {
            minHeap.add({
                num,
                frequent,
            })
        } else {
            const head = minHeap.peek()!
            if (frequent > head.frequent) {
                minHeap.poll()
                minHeap.add({
                    num,
                    frequent,
                })
            }
        }
        return minHeap
    }, new MinHeap<{ num: number; frequent: number }>((a, b) => a.frequent - b.frequent))

    const result: number[] = []
    while (minHeap.size()) {
        result.unshift(minHeap.poll()!.num)
    }

    return result
}
