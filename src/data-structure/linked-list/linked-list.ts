import { Comparator, ICompareFunction } from '@utils/comparator'
import { LinkedListNode } from './linked-list-node'

export class LinkedList<T> {
    // 头结点
    head: LinkedListNode<T> = null
    // 尾节点
    tail: LinkedListNode<T> = null
    // 比较函数
    compare: Comparator<T>
    constructor(compareFunction?: ICompareFunction<T>) {
        this.compare = new Comparator(compareFunction)
    }

    /** 头部插入 */
    prepend(value: T) {
        const node = new LinkedListNode(value, this.head)
        this.head = node

        if (!this.tail) {
            this.tail = node
        }

        return this
    }

    /** 尾部插入 */
    append(value: T) {
        const node = new LinkedListNode(value)

        // 没有头结点，直接赋值
        if (!this.head) {
            this.head = this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }

        return this
    }

    /** 删除 */
    delete(value: T) {
        if (!this.head) {
            return null
        }
        // 被删除节点
        const delNodes: Array<LinkedListNode<T>> = []

        // 检查是否需要删除头结点
        while (this.head && this.compare.equal(this.head.value, value)) {
            delNodes.push(this.head)
            this.head = this.head.next
        }

        let curNode = this.head

        if (curNode !== null) {
            // 遍历中间节点
            while (curNode.next) {
                if (this.compare.equal(curNode.next.value, value)) {
                    delNodes.push(curNode.next)
                    // 此时不应移动指针
                    curNode.next = curNode.next.next
                } else {
                    curNode = curNode.next
                }
            }
            //  检查是否需要删除尾节点
            if (this.compare.equal(this.tail.value, value)) {
                delNodes.push(this.tail)
                this.tail = curNode
            }
        }

        return delNodes
    }

    /** 查找 */
    find({ value, callback }: { value?: T; callback?: (value: T) => boolean }) {
        let curNode = this.head
        const findNodes: Array<LinkedListNode<T>> = []
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

        // 被删除的节点
        const tail = this.tail

        // 只有一个元素
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
            return tail
        }

        // 遍历时的节点
        let curNode = this.head
        // 遍历到尾节点的前一个节点
        while (curNode.next.next) {
            curNode = curNode.next
        }
        // 当前节点为尾节点
        curNode.next = null
        this.tail = curNode

        return tail
    }

    /** 删除头结点 */
    deleteHead() {
        // 空链表
        if (!this.head) {
            return null
        }

        const head = this.head
        if (this.head === this.tail) {
            this.head = null
            this.tail = null
        } else {
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
        let preNode = null
        while (curNode) {
            // 保存下一节点的引用
            const nextNode = curNode.next
            // 当前节点指向前一节点
            curNode.next = preNode
            // 移动指针
            preNode = curNode
            curNode = nextNode
        }

        this.tail = this.head
        this.head = preNode

        return this
    }
}
