import { TreeNode } from '@utils/tree-node'

export function findBottomLeftValue(root: TreeNode | null): number {
    let resultLevel = -1
    let result = 0
    const dfs = (node: TreeNode | null, level: number) => {
        if (!node) {
            return
        }

        if (level > resultLevel) {
            result = node.val
            resultLevel = level
        }

        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }

    dfs(root, 0)

    return result
}
