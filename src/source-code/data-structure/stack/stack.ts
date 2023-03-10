import { LinkedList } from '../linked-list'

export class Stack<T> {
    linkedList: LinkedList<T>
    constructor() {
        this.linkedList = new LinkedList<T>()
    }

    isEmpty() {
        return !this.linkedList.head
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }

        return this.linkedList.head.value
    }

    push(value: T) {
        this.linkedList.prepend(value)

        return this
    }

    pop() {
        const removedHead = this.linkedList.deleteHead()
        return removedHead ? removedHead.value : null
    }

    toArray() {
        return this.linkedList.toArray()
    }

    toString(stringifier?: (value: T) => string) {
        return this.linkedList.toString(stringifier)
    }
}
