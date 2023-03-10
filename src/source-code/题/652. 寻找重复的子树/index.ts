interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

function findDuplicateSubtrees(root: TreeNode | null): Array<TreeNode | null> {
    const NodeMap: { [key: string]: number } = {}
    const result: Array<TreeNode> = []

    stringifyTree(
        root,
        (cur, left, right) => `${left},${right},${cur}`,
        (node, nodeStr) => {
            if (NodeMap[nodeStr] === 1) {
                result.push(node)
            }

            if (!NodeMap[nodeStr]) {
                NodeMap[nodeStr] = 0
            }

            NodeMap[nodeStr]++
        },
        '#',
    )

    return result
}

function stringifyTree(
    root: TreeNode | null,
    strCreator: (cur: number, left: string, right: string) => string,
    cb: (node: TreeNode, nodeStr: string) => void,
    emptyNodeStr: string,
): string {
    if (!root) {
        return emptyNodeStr
    }
    const leftStr = stringifyTree(root.left, strCreator, cb, emptyNodeStr)
    const rightStr = stringifyTree(root.right, strCreator, cb, emptyNodeStr)

    const nodeStr = strCreator(root.val, leftStr, rightStr)
    cb(root, nodeStr)
    return nodeStr
}
