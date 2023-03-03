import { TreeNode } from '@utils/tree-node'
export function serialize(root: TreeNode | null): string {
    let list = ''
    if (root) {
        list += root.val + ' '
        list += serialize(root.left)
        list += serialize(root.right)
    } else {
        return '_ '
    }
    return list
}

/*
 * Decodes your encoded data to tree.
 */
export function deserialize(data: string): TreeNode | null {
    let index = 0
    function generate(val: string[]): TreeNode | null {
        if (val[index]) {
            index++
            if (val[index - 1] == '_') {
                return null
            } else {
                return new TreeNode(Number(val[index - 1]), generate(val), generate(val))
            }
        } else {
            return null
        }
    }

    return generate(data.split(' '))
}
