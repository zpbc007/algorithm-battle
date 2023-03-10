import { Comparator, ICompareFunction } from '@utils/comparator'
import { DoubleLinkedListNode } from './double-linked-list-node'

export class DoubleLinkedList<T> {
    head: DoubleLinkedListNode<T> = null
    tail: DoubleLinkedListNode<T> = null
    compare: Comparator<T>
    constructor(compareFunction?: ICompareFunction<T>) {
        this.compare = new Comparator(compareFunction)
    }

    /** 头部插入 */
    prepend(value: T) {
        // 新建节点，next 指针指向当前头结点
        const node = new DoubleLinkedListNode(value, this.head)

        // 头部节点 previous 指针指向新建节点
        if (this.head) {
            this.head.previous = node
        }

        // 改变头部节点
        this.head = node

        // 尾部节点不存在指向当前节点
        if (!this.tail) {
            this.tail = node
        }

        return this
    }

    /** 尾部插入 */
    append(value: T) {
        // 新建节点，previous 指针指向当前尾结点
        const node = new DoubleLinkedListNode(value, null, this.tail)

        // 头结点不存在直接赋值
        if (!this.head) {
            this.head = this.tail = node

            return this
        }

        this.tail.next = node
        this.tail = node

        return this
    }

    /** 删除 */
    delete(value: T) {
        const delNodes: Array<DoubleLinkedListNode<T>> = []
        if (!this.head) {
            return delNodes
        }

        // 是否需要删除头节点
        while (this.head && this.compare.equal(this.head.value, value)) {
            delNodes.push(this.head)
            if (this.head.next) {
                // 置空头节点下一节点的 previous 指向
                this.head.next.previous = null

                // 已经遍历到尾节点
            } else {
                this.tail = null
            }
            this.head = this.head.next
        }

        let curNode = this.head

        if (curNode) {
            while (curNode.next) {
                if (this.compare.equal(curNode.next.value, value)) {
                    delNodes.push(curNode.next)
                    if (curNode.next.next) {
                        // 当前节点的孙子节点的 previous 指向当前节点
                        curNode.next.next.previous = curNode

                        // 没有孙子节点说明被删除的为尾节点，因此当前节点为新的尾节点
                    } else {
                        this.tail = curNode
                    }
                    curNode.next = curNode.next.next
                } else {
                    curNode = curNode.next
                }
            }

            // 是否需要删除尾节点
            if (this.tail && this.compare.equal(this.tail.value, value)) {
                delNodes.push(this.tail)
                curNode.next = null
            }
        }

        return delNodes
    }

    /** 查找 */
    find({ value, callback }: { value?: T; callback?: (value: T) => boolean }) {
        let curNode = this.head
        const findNodes: Array<DoubleLinkedListNode<T>> = []
        const cb = callback || ((curValue: T) => this.compare.equal(curValue, value))

        while (curNode) {
            if (cb(curNode.value)) {
                findNodes.push(curNode)
            }
            curNode = curNode.next
        }

        return findNodes
    }

    /** 删除尾节点 */
    deleteTail() {
        // 空链表
        if (!this.tail) {
            return null
        }

        // 被删除节点
        const tail = this.tail

        // 只有一个节点
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.tail.previous.next = null
            this.tail = this.tail.previous
        }

        return tail
    }

    /** 删除头结点 */
    deleteHead() {
        if (!this.head) {
            return null
        }

        const head = this.head
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.head.next.previous = null
            this.head = this.head.next
        }

        return head
    }

    fromArray(values: T[]) {
        for (const value of values) {
            this.append(value)
        }

        return this
    }

    toArray() {
        const result = []
        if (!this.head) {
            return result
        }

        let curNode = this.head
        while (curNode) {
            result.push(curNode.value)
            curNode = curNode.next
        }

        return result
    }

    toString(stringifier?: (value: T) => string) {
        let resultString = ''
        if (!this.head) {
            return resultString
        }

        let curNode = this.head
        while (curNode) {
            resultString += curNode.toString(stringifier)
            curNode = curNode.next
        }

        return resultString
    }

    /** 反转 */
    reverse() {
        let curNode = this.head

        while (curNode) {
            const nextNode = curNode.next
            const previous = curNode.previous
            curNode.previous = nextNode
            curNode.next = previous
            curNode = nextNode
        }

        const head = this.head
        this.head = this.tail
        this.tail = head

        return this
    }
}
