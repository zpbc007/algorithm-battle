import { findBottomLeftValue as findBottomLeftValueByDfs } from '../index.dfs'
import { findBottomLeftValue as findBottomLeftValueByBfs } from '../index.bfs'
import { TreeNode } from '@utils/tree-node'

describe('513. 找树左下角的值', () => {
    it('input [2,1,3], should output 1', () => {
        expect(findBottomLeftValueByDfs(new TreeNode(2, new TreeNode(1), new TreeNode(3)))).toBe(1)
        expect(findBottomLeftValueByBfs(new TreeNode(2, new TreeNode(1), new TreeNode(3)))).toBe(1)
    })
})
