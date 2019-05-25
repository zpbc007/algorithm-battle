import { Comparator, ICompareFunction } from '@utils/comparator'
import { swap } from '@utils/swap'

export abstract class Heap<T> {
    /**
     * 检查当前两节点位置是否正确
     * 最小堆 前一个应该比后一个小
     * 最大堆 前一个应该比后一个大
     */
    protected abstract pairIsInCorrectOrder: (first: T, second: T) => boolean
    protected compare: Comparator<T>
    private heapContainer: T[] = []
    constructor(compareFunction?: ICompareFunction<T>) {
        if (new.target === Heap) {
            throw new Error('Heap 为一个基础类，不能直接实例化，请使用最大、最小堆')
        }
        this.compare = new Comparator(compareFunction)
    }

    /** 查看头节点 */
    peek() {
        if (this.heapContainer.length === 0) {
            return null
        }

        return this.heapContainer[0]
    }

    /** 取出最大或最小节点 */
    poll() {
        if (this.heapContainer.length === 0) {
            return null
        }

        if (this.heapContainer.length === 1) {
            return this.heapContainer.pop()
        }

        const head = this.heapContainer[0]

        // 将最后一个节点放到头节点上并进行下沉操作
        this.heapContainer[0] = this.heapContainer.pop()
        this.heapifyDown()

        return head
    }

    /** 查找对应节点的位置 */
    find(item: T, comparator = this.compare) {
        const indexArr: number[] = []

        for (const [index, valueItem] of this.heapContainer.entries()) {
            if (comparator.equal(valueItem, item)) {
                indexArr.push(index)
            }
        }

        return indexArr
    }

    /** 添加节点 直接放到末尾 并进行上浮操作 */
    add(item: T) {
        this.heapContainer.push(item)

        this.heapifyUp()
    }

    isEmpty() {
        return this.heapContainer.length === 0
    }

    /** 删除节点 */
    remove(item: T, comparator = this.compare) {
        const numberToRemove = this.find(item, comparator).length

        for (let i = 0; i < numberToRemove; i++) {
            // 需要被删除的位置
            const removeIndex = this.find(item, comparator).pop()

            // 删除最后一位直接移除
            if (removeIndex === this.heapContainer.length - 1) {
                this.heapContainer.pop()
            } else {
                const parentIndex = this.getParentIndex(removeIndex)
                const parentNode = this.heapContainer[parentIndex]
                // 删除节点
                this.heapContainer[removeIndex] = this.heapContainer.pop()

                // 如果有子节点，且没有父节点或者 父节点位置已经有序
                if (
                    this.hasLeftChild(removeIndex) && // 有子节点
                    (!parentNode || // 没有父级节点
                        this.pairIsInCorrectOrder(parentNode, this.heapContainer[removeIndex])) // 父节点已经有序
                ) {
                    this.heapifyDown(removeIndex)
                } else {
                    this.heapifyUp(removeIndex)
                }
            }
        }

        return this
    }

    toString() {
        return this.heapContainer.toString()
    }

    /** 获取左侧子节点位置 */
    private getLeftChildIndex(parentIndex: number) {
        return 2 * parentIndex + 1
    }

    /** 获取右侧子节点位置 */
    private getRightChildIndex(parentIndex: number) {
        return 2 * parentIndex + 2
    }

    /** 获取父级节点位置 */
    private getParentIndex(childIndex: number) {
        return Math.floor((childIndex - 1) / 2)
    }

    /** 是否有父级节点 */
    private hasParent(childIndex: number) {
        return this.getParentIndex(childIndex) >= 0
    }

    /** 是否有左侧节点 */
    private hasLeftChild(parentIndex: number) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length
    }

    /** 是否有右侧节点 */
    private hasRightChild(parentIndex: number) {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length
    }

    /** 左侧节点 */
    private getLeftChild(parentIndex: number) {
        return this.heapContainer[this.getLeftChildIndex(parentIndex)]
    }

    /** 右侧节点 */
    private getRightChild(parentIndex: number) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)]
    }

    /** 父级节点 */
    private getParent(childIndex) {
        return this.heapContainer[this.getParentIndex(childIndex)]
    }

    /**
     * 节点下沉 将节点下沉到合适的位置 用于删除操作
     */
    private heapifyDown(startIndex = 0) {
        let curIndex = startIndex
        let nextIndex = null

        // 循环直到叶子节为止
        while (this.hasLeftChild(curIndex)) {
            const curNode = this.heapContainer[curIndex]
            const leftIndex = this.getLeftChildIndex(curIndex)
            const leftNdoe = this.heapContainer[leftIndex]
            const rightIndex = this.getRightChildIndex(curIndex)
            const rightNode = this.heapContainer[rightIndex]

            // 与叶子节点中 最大(最大堆) 或 最小（最小堆） 的换位置
            if (this.hasRightChild(curIndex) && this.pairIsInCorrectOrder(rightNode, leftNdoe)) {
                nextIndex = rightIndex
            } else {
                nextIndex = leftIndex
            }

            // 已经有序
            if (this.pairIsInCorrectOrder(curNode, this.heapContainer[nextIndex])) {
                break
            }

            // 换位置
            swap(this.heapContainer, curIndex, nextIndex)

            curIndex = nextIndex
        }
    }

    /** 上浮操作 将节点上浮到合适的位置 插入时使用 */
    private heapifyUp(startIndex = this.heapContainer.length - 1) {
        // 从尾节点开始
        let curIndex = startIndex

        while (this.hasParent(curIndex)) {
            const parentIndex = this.getParentIndex(curIndex)
            const parentNode = this.heapContainer[parentIndex]

            // 已经有序
            if (this.pairIsInCorrectOrder(parentNode, this.heapContainer[curIndex])) {
                break
            }

            // 交换位置
            swap(this.heapContainer, curIndex, parentIndex)
            curIndex = parentIndex
        }
    }
}
