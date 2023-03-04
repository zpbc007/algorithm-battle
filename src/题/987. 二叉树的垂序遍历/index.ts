import { TreeNode } from '@utils/tree-node'

export function verticalTraversal(root: TreeNode | null): number[][] {
    if (!root) {
        return []
    }

    const result: Map<number, number[][]> = new Map()

    const dfs = (node: TreeNode | null, { row, col }: { row: number; col: number }) => {
        if (!node) {
            return
        }

        if (!result.has(col)) {
            result.set(col, [])
        }

        const colData = result.get(col)!
        if (!colData[row]) {
            colData[row] = []
        }

        colData[row].push(node.val)
        dfs(node.left, { row: row + 1, col: col - 1 })
        dfs(node.right, { row: row + 1, col: col + 1 })
    }

    dfs(root, { row: 0, col: 0 })

    return (
        Array.from(result.keys())
            // 保证顺序
            .sort((a, b) => a - b)
            .map((col) => {
                const rowData = result.get(col)!

                return rowData
                    .map((rowItem) => {
                        if (rowItem.length === 1) {
                            return rowItem[0]
                        }

                        return rowItem.sort()
                    })
                    .flat()
            })
    )
}
