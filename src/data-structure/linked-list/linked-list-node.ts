export class LinkedListNode<T> {
    value: T
    next: LinkedListNode<T>
    constructor(value: T, next: LinkedListNode<T> = null) {
        this.value = value
        this.next = next
    }

    toString(stringifier?: (value: T) => string) {
        if (stringifier) {
            return `${stringifier(this.value)} -> `
        }

        return `${this.value} -> `
    }
}
