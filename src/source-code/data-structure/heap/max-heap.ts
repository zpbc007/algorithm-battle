import { Heap } from './heap'

export class MaxHeap<T> extends Heap<T> {
    pairIsInCorrectOrder = (first: T, second: T) => {
        return this.compare.greaterThanOrEqual(first, second)
    }
}
