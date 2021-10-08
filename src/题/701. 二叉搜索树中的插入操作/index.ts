interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) {
        return {
            val,
            left: null,
            right: null
        }
    }

    if (val < root.val) {
        root.left = insertIntoBST(root.left, val)
        return root
    }

    if (val > root.val) {
        root.right = insertIntoBST(root.right, val)
        return root
    }
}
