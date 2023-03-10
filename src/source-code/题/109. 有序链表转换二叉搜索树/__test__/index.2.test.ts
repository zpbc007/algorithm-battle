import { createNodeFromArr } from '@utils/list-node'
import { frontBfs, frontDfs } from '@utils/tree/iterator'
import { sortedListToBST } from '../index.2'

describe('109. 有序链表转换二叉搜索树', () => {
    it('', () => {
        const head = createNodeFromArr([-10, -3, 0, 5, 9])
        const tree = sortedListToBST(head)

        const treeVal: Array<null | number> = []

        frontBfs(tree, (node) => {
            treeVal.push(node ? node.val : null)
        })

        // 去掉最后的几个 null 节点
        const { result } = treeVal.reduceRight<{ isLast: boolean; result: Array<null | number> }>(
            (acc, value) => {
                if (acc.isLast && value === null) {
                    return acc
                }

                return {
                    isLast: false,
                    result: [value, ...acc.result],
                }
            },
            { isLast: true, result: [] },
        )

        expect(result).toEqual([0, -3, 9, -10, null, 5])
    })
})
