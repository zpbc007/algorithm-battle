import { Comparator } from '@utils/comparator'
import { MinHeap } from '../heap/min-heap'

export class PriorityQueue<T> extends MinHeap<T> {
    private priorities = new Map<T, number>()
    private valueComparator: Comparator<T>
    constructor() {
        super()

        this.compare = new Comparator(this.comparePriority)
        this.valueComparator = new Comparator(this.compareValue)
    }

    enqueue(item: T, priority: number) {
        this.priorities.set(item, priority)
        super.add(item)
        return this
    }

    removeItem(item: T, comparator: Comparator<T>) {
        super.remove(item, comparator)
        this.priorities.delete(item)

        return this
    }

    changePriority(item: T, priority: number) {
        this.removeItem(item, this.valueComparator)
        this.enqueue(item, priority)

        return this
    }

    findByValue(value: T) {
        return this.find(value, this.valueComparator)
    }

    hasValue(value: T) {
        return this.findByValue(value).length > 0
    }

    private comparePriority = (a: T, b: T) => {
        const priorityA = this.priorities.get(a)
        const priorityB = this.priorities.get(b)

        return priorityA - priorityB
    }

    private compareValue(a: T, b: T) {
        if (a === b) {
            return 0
        }

        return a < b ? -1 : 1
    }
}
