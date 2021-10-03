interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    next: TreeNode | null
}
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null
    }

    connectNode(root.left, root.right)

    return root
}

function connectNode(node1: TreeNode, node2: TreeNode) {
    if (!node1 || !node2) {
        return 
    }

    node1.next = node2

    // 相同父节点
    connectNode(node1.left, node1.right)
    connectNode(node2.left, node2.right)

    // 跨父节点
    connectNode(node1.right, node2.left)
}
