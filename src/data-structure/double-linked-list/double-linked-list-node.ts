export class DoubleLinkedListNode<T> {
    next: DoubleLinkedListNode<T> = null
    previous: DoubleLinkedListNode<T> = null
    value: T
    constructor(
        value: T,
        next: DoubleLinkedListNode<T> = null,
        previous: DoubleLinkedListNode<T> = null,
    ) {
        this.value = value
        this.next = next
        this.previous = previous
    }

    toString(stringifier?: (value: T) => string) {
        if (stringifier) {
            return `${stringifier(this.value)} <-> `
        }

        return `${this.value} <-> `
    }
}
