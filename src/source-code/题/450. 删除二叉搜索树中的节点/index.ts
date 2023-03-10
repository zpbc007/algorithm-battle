interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (!root) {
        return null
    }

    if (key < root.val) {
        root.left = deleteNode(root.left, key)

        return root
    }

    if (key > root.val) {
        root.right = deleteNode(root.right, key)

        return root
    }

    // 没有子节点，直接删除
    if (root.left === null && root.right === null) {
        return null
    }

    // 有一个子节点，把子节点弄上去
    if (root.left === null || root.right === null) {
        return root.left ? root.left : root.right
    }

    // 有两个子节点，把左侧最大的，或者右侧最小的弄上去
    const maxLeft = max(root.left)
    root.val = maxLeft.val
    // 删除对应节点
    root.left = deleteNode(root.left, maxLeft.val)
    return root
}

function max(root: TreeNode) {
    let maxNode = root
    while (maxNode.right) {
        maxNode = maxNode.right
    }

    return maxNode
}
