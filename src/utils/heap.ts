import { swap } from './swap';

export class Heap<T> {
    private arr: T[] = [];

    constructor(
        private readonly compare: (a: T, b: T) => number = (a: any, b: any) =>
            a - b
    ) {}

    add(item: T) {
        this.arr.push(item);
        this.heapUp();
    }

    shift(): T | null {
        if (this.isEmpty()) {
            return null;
        }

        if (this.arr.length <= 2) {
            return this.arr.shift()!;
        }

        swap(this.arr, 0, this.arr.length - 1);
        const result = this.arr.pop()!;

        this.heapDown();
        return result;
    }

    isEmpty(): boolean {
        return this.arr.length === 0;
    }

    private toLeftChildIndex(index: number) {
        return 2 * index + 1;
    }

    private toRightChildIndex(index: number) {
        return 2 * index + 2;
    }

    private toParentIndex(index: number) {
        return Math.floor((index - 1) / 2);
    }

    private hasChild(index: number) {
        return this.toLeftChildIndex(index) < this.arr.length;
    }

    private heapDown(startIndex = 0) {
        let current = startIndex;

        while (this.hasChild(current)) {
            const leftIndex = this.toLeftChildIndex(current);
            const rightIndex = this.toRightChildIndex(current);

            let minIndex =
                rightIndex < this.arr.length &&
                this.compare(this.arr[leftIndex], this.arr[rightIndex]) > 0
                    ? rightIndex
                    : leftIndex;

            if (this.compare(this.arr[minIndex], this.arr[current]) > 0) {
                break;
            }
            swap(this.arr, minIndex, current);
            current = minIndex;
        }
    }

    private heapUp(startIndex = this.arr.length - 1) {
        if (this.arr.length <= 1) {
            return;
        }

        let current = startIndex;

        while (current > 0) {
            const parentIndex = this.toParentIndex(current);

            if (this.compare(this.arr[parentIndex], this.arr[current]) < 0) {
                break;
            }

            swap(this.arr, current, parentIndex);
            current = parentIndex;
        }
    }
}
