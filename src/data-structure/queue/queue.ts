import { LinkedList } from '../linked-list'

export class Queue<T> {
    linkedList: LinkedList<T>
    constructor() {
        this.linkedList = new LinkedList<T>()
    }

    isEmpty() {
        return !this.linkedList.head
    }

    /** 读取头结点 */
    peek() {
        if (!this.linkedList.head) {
            return null
        }

        return this.linkedList.head.value
    }

    enqueue(value: T) {
        this.linkedList.append(value)

        return this
    }

    dequeue() {
        const removedHead = this.linkedList.deleteHead()
        return removedHead ? removedHead.value : null
    }

    toString(stringifier?: (value: T) => string) {
        return this.linkedList.toString(stringifier)
    }
}
