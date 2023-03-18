import { MinHeap } from '@app/data-structure/heap/min-heap'

interface Task {
    index: number
    processingTime: number
}

export function getOrder(tasks: number[][]): number[] {
    // 按入队时间排序
    tasks = tasks
        .map(([enqueueTime, processingTime], index) => [enqueueTime, processingTime, index])
        .sort((a, b) => a[0] - b[0])

    const taskHeap = new MinHeap<Task>((a, b) => {
        if (a.processingTime === b.processingTime) {
            return a.index - b.index
        }

        return a.processingTime - b.processingTime
    })
    let currentTime = 0
    const result: number[] = []

    while (tasks.length > 0 || !taskHeap.isEmpty()) {
        // 把所有满足条件的任务加入队列中
        while (tasks[0] && tasks[0][0] <= currentTime) {
            const [_, processingTime, index] = tasks.shift()!

            taskHeap.add({
                processingTime,
                index,
            })
        }

        // 都执行完了，快进到下个任务时间
        if (taskHeap.isEmpty() && tasks.length > 0) {
            currentTime = tasks[0][0]
        } else {
            const { index, processingTime } = taskHeap.poll()!
            currentTime += processingTime
            result.push(index)
        }
    }

    return result
}
