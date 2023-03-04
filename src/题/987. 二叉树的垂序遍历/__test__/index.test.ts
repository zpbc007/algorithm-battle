import { verticalTraversal } from '../index'
import { TreeNode } from '@utils/tree-node'

describe('987. 二叉树的垂序遍历', () => {
    it('input [3,9,20,null,null,15,7]', () => {
        const root = new TreeNode(
            3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7)),
        )

        expect(verticalTraversal(root)).toEqual([[9], [3, 15], [20], [7]])
    })

    it('input [1,2,3,4,5,6,7]', () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5)),
            new TreeNode(3, new TreeNode(6), new TreeNode(7)),
        )

        expect(verticalTraversal(root)).toEqual([[4], [2], [1, 5, 6], [3], [7]])
    })
})
