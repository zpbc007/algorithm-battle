class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val
        this.left = left === undefined ? null : left
        this.right = right === undefined ? null : right
    }
}

export function minDepth(root: TreeNode | null): number {
    if (!root) {
        return 0
    }
    let depth = 1
    const nodes: TreeNode[] = [root]

    while(nodes.length !== 0) {
        const size = nodes.length
        for (let i = 0; i < size; i++) {
            // 要拿出来啊。。。 在干什么
            const curNode = nodes.shift()
            if (isLeaf(curNode)) {
                return depth
            }

            if (curNode.left) {
                nodes.push(curNode.left)
            }

            if (curNode.right) {
                nodes.push(curNode.right)
            }
        }

        depth++
    }

    return depth
}

function isLeaf(node: TreeNode) {
    return node.left === null && node.right === null
}