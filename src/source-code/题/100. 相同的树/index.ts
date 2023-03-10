import { TreeNode } from '@utils/tree-node'

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (p === null || q === null) {
        return p === q
    }

    if (p.val !== q.val) {
        return false
    }

    return (
        isSameTree(p.left || null, q.left || null) && isSameTree(p.right || null, q.right || null)
    )
}
