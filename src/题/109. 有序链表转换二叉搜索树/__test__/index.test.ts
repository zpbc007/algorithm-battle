import { getListFromArray, IListNode } from '@utils/arrayToList'
import { frontBfs } from '@utils/tree/iterator'
import { ITreeNode } from '@utils/tree/type'
import { sortedListToBST, sortedListToBSTByArray } from '..'

describe('有序链表转换二插搜索树', () => {
    const inputs = [[-10, -3, 0, 5, 9]]
    const outPuts = [[0, -3, 9, -10, null, 5, null]]

    const testFunc = (getRootFunc: (head: IListNode) => ITreeNode) => {
        inputs.forEach((input, index) => {
            const head = getListFromArray(input)
            const root = getRootFunc(head)
            const treeArr = []
            frontBfs(root, (node) => treeArr.push(node ? node.val : null))

            expect(treeArr).toEqual(outPuts[index])
        })
    }

    it('递归左右', () => {
        testFunc(sortedListToBST)
    })

    it('使用数组递归', () => {
        testFunc(sortedListToBSTByArray)
    })
})
