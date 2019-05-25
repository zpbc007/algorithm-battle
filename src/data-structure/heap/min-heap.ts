import { Heap } from './heap'

export class MinHeap<T> extends Heap<T> {
    pairIsInCorrectOrder = (first: T, second: T) => {
        return this.compare.lessThanOrEqual(first, second)
    }
}
