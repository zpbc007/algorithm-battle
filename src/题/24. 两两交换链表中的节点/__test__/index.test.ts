import { createArrFromNode, createNodeFromArr } from '@utils/list-node'
import { swapPairs as swapPairs2 } from '../index.2'
import { swapPairs } from '../index'

describe('24. 两两交换链表中的节点', () => {
    it('input: [1,2,3,4], output: [2,1,4,3]', () => {
        expect(createArrFromNode(swapPairs(createNodeFromArr([1, 2, 3, 4])))).toEqual([2, 1, 4, 3])
    })

    it('input: [1,2,3,4], output: [2,1,4,3]', () => {
        expect(createArrFromNode(swapPairs2(createNodeFromArr([1, 2, 3, 4])))).toEqual([2, 1, 4, 3])
    })
})
