import { TreeNode } from '@utils/tree-node'
import { sumNumbers, sumNumbers2 } from '../index'

describe('129. 求根节点到叶节点数字之和', () => {
    it('input [1,2,3], output 25', () => {
        const inputTree = new TreeNode(1, new TreeNode(2), new TreeNode(3))

        expect(sumNumbers(inputTree)).toBe(25)
        expect(sumNumbers2(inputTree)).toBe(25)
    })
})
