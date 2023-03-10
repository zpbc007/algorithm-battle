interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function kthSmallest(root: TreeNode | null, k: number): number {
    let result: TreeNode | null = null
    let index = 0
    traverseTree(root, (node) => {
        index++
        if (index === k) {
            result = node

            return true
        }

        return false
    })

    return result.val
}

function traverseTree(root: TreeNode | null, cb: (node: TreeNode) => boolean) {
    if (!root) {
        return
    }
    traverseTree(root.left, cb)
    const shouldReturn = cb(root)

    if (shouldReturn) {
        return 
    }
    traverseTree(root.right, cb)
}
