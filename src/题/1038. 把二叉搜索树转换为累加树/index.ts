interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

function bstToGst(root: TreeNode | null): TreeNode | null {
    let acc = 0
    traverseTree(root, (node) => {
        node.val = acc + node.val
        acc = node.val
    })

    return root
}

function traverseTree(root: TreeNode | null, cb: (node: TreeNode) => void) {
    if (!root) {
        return 
    }

    traverseTree(root.right, cb)
    cb(root)
    traverseTree(root.left, cb)
}
