import { TreeNode } from '@utils/tree-node'

export function serialize(root: TreeNode | null): string {
    const dfs = (node: TreeNode | null, str: string): string => {
        if (!node) {
            return str ? `${str},null` : 'null'
        }

        str = str ? `${str},${node.val}` : `${node.val}`
        str = dfs(node.left, str)
        str = dfs(node.right, str)

        return str
    }

    return dfs(root, '')
}

export function deserialize(data: string): TreeNode | null {
    if (!data) {
        return null
    }

    const buildNode = (valueArr: string[]): TreeNode | null => {
        const nodeValue = valueArr.shift()
        if (nodeValue === 'null') {
            return null
        }

        const node = new TreeNode(Number(nodeValue))
        node.left = buildNode(valueArr)
        node.right = buildNode(valueArr)

        return node
    }

    return buildNode(data.split(','))
}
