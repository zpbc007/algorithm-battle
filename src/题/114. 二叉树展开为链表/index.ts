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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    if (!root) {
        return null
    }

    flatten(root.left)
    flatten(root.right)

    // 左右子树已经被拉平
    const left = root.left
    const right = root.right

    root.left = null
    root.right = left

    // 找到最后的节点
    let tmp = root
    while(tmp.right !== null) {
        tmp = tmp.right
    }

    tmp.right = right
}
