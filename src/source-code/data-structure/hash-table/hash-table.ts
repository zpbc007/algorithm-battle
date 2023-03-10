import { LinkedList } from '../linked-list'
interface IItem<T> {
    key: string
    value: T
}

export class HashTable<T> {
    buckets: Array<LinkedList<IItem<T>>>
    keys: { [key: number]: string }
    constructor(size = 32) {
        this.buckets = Array(size)
            .fill(null)
            .map(() => new LinkedList<IItem<T>>())

        this.keys = {}
    }

    /** hash 算法将 key 转到一个特定的 bucket */
    hash(key: string) {
        // 为了简化 只使用了简单的 hash 算法
        const hash = Array.from(key).reduce(
            (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
            0,
        )

        return hash % this.buckets.length
    }

    set(key: string, value: T) {
        if (!this.keys[key]) {
            const has = this.hash(key)
            this.keys[key] = has
        }
        const keyHash = this.keys[key]
        const bucketLinkedList = this.buckets[keyHash]
        const node = bucketLinkedList.find({ callback: (item) => item.key === key })
        if (node.length === 0) {
            bucketLinkedList.append({ key, value })
        } else {
            node[0].value.value = value
        }

        return this
    }

    delete(key: string) {
        const keyHash = this.hash(key)
        delete this.keys[key]
        const bucketLinkedList = this.buckets[keyHash]
        const node = bucketLinkedList.find({ callback: (item) => item.key === key })
        if (node.length > 0) {
            return bucketLinkedList.delete(node[0].value)
        }

        return null
    }

    get(key: string) {
        if (!this.keys[key] && this.keys[key] !== 0) {
            return undefined
        }

        const bucketLinkedList = this.buckets[this.keys[key]]
        const node = bucketLinkedList.find({ callback: (item) => item.key === key })

        if (node.length > 0) {
            return node[0].value.value
        }

        return undefined
    }

    has(key: string) {
        return this.keys.hasOwnProperty(key)
    }

    getKeys() {
        return Object.keys(this.keys)
    }
}
