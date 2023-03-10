interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) {
        return null
    }

    const tmp = root.right
    root.right = root.left
    root.left = tmp

    invertTree(root.left)
    invertTree(root.right)

    return root
}
