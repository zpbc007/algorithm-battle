interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) {
        return null
    }

    if (val < root.val) {
        return searchBST(root.left, val)
    }

    if (val > root.val) {
        return searchBST(root.right, val)
    }

    return root
}
