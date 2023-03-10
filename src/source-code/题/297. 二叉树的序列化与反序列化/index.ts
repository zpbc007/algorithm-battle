import { TreeNode } from '@utils/tree-node'

/*
 * Encodes a tree to a single string.
 */
export function serialize(root: TreeNode | null): string {
    const heap: Array<number | null> = []
    const dfs = (root: TreeNode | null, index: number) => {
        if (!root) {
            return
        }

        heap[index] = root.val
        const leftIndex = 2 * index
        const rightIndex = leftIndex + 1

        dfs(root.left, leftIndex)
        dfs(root.right, rightIndex)
    }

    dfs(root, 1)

    return heap.join(',')
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
    if (!data) {
        return null
    }
    const heap = data.split(',')

    const result: TreeNode[] = []
    heap.forEach((val, index) => {
        if (index === 0 || !val) {
            return
        }

        const currentNode = new TreeNode(Number(val))
        result[index] = currentNode

        // 根节点
        if (index === 1) {
            return
        }

        const parentIndex = Math.floor(index / 2)
        const isLeft = index % 2 === 0

        if (isLeft) {
            result[parentIndex].left = currentNode
        } else {
            result[parentIndex].right = currentNode
        }
    })

    return result[1]
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
