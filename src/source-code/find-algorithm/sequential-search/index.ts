class Node<Value> {
    constructor(public key: string, public val: Value, public next: Node<Value>) {}

    *[Symbol.iterator]() {
        let next = this

        while (next) {
            yield next
            next = next.next as any
        }
    }
}
export class SequentialSearchST<Value> {
    private first: Node<Value>

    get(key: string) {
        if (!this.first) {
            return null
        }

        for (const { key: itemKey, val } of this.first) {
            if (key === itemKey) {
                return val
            }
        }

        return null
    }

    put(key: string, val: Value) {
        if (!this.first) {
            this.first = new Node(key, val, this.first)
        }

        for (const item of this.first) {
            if (key === item.key) {
                item.val = val
                return
            }
        }

        this.first = new Node(key, val, this.first)
    }

    size() {
        let size = 0
        for (const _ of this.first) {
            size++
        }

        return size
    }

    keys() {
        const keys = []
        for (const { key } of this.first) {
            keys.push(key)
        }

        return keys
    }

    delete(key: string) {
        let preNode: Node<Value>
        for (const item of this.first) {
            if (item.key === key) {
                if (preNode) {
                    preNode.next = item.next
                } else {
                    this.first = item.next
                }
                return item
            }
            preNode = item
        }

        console.warn(`can not find the key: ${key}`)
        return null
    }

    *[Symbol.iterator]() {
        for (const item of this.first) {
            yield item
        }
    }
}
