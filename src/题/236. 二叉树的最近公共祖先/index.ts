interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
): TreeNode | null {
    if (!root) {
        return null
    }

    if (root === p || root === q) {
        return root
    }

    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)

    // 没找到
    if (left === null && right === null) {
        return null
    }

    // 当前节点就是要找的那个
    if (left !== null && right !== null) {
        return root
    }

    // 找到了 p 或 q
    return left ? left : right
}
