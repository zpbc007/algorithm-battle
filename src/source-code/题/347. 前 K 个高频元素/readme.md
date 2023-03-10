# 思路

遍历数组，将数字出现的频次存储在 map 中。依照出现频次，对 map 的 key 排序，取出前 k 个

# 优化

对 key 的排序的复杂度为 N(logN)，由于我们只需要前 K 个，可以构造一个最小堆，

-   如果 `heap.size() < K` 直接将当前 key 加入堆中，
-   如果 `heap.size() >= K` & 堆顶 key 对应的频次小于当前 key 对应的频次，将对顶推出，当前 key 加入堆

# 代码

```ts
function topKFrequent(nums: number[], k: number): number[] {
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
```

# 复杂度

- 时间复杂度：O(NlogK)
- 空间复杂度：O(N)