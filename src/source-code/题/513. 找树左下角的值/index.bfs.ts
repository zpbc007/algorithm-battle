import { TreeNode } from '@utils/tree-node'

export function findBottomLeftValue(root: TreeNode | null): number {
    const queue = [root]
    let result = 0

    while (queue.length) {
        const node = queue.shift()
        if (node?.right) {
            queue.push(node.right)
        }

        if (node?.left) {
            queue.push(node.left)
        }

        if (node) {
            result = node.val
        }
    }

    return result
}
