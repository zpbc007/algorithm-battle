import { createArrFromNode, createNodeFromArr } from '@utils/list-node'
import { rotateRight } from '../index'

describe('61. 旋转链表', () => {
    it('[1,2,3,4,5] rotate 2 should be [4,5,1,2,3]', () => {
        expect(createArrFromNode(rotateRight(createNodeFromArr([1, 2, 3, 4, 5]), 2))).toEqual([
            4,
            5,
            1,
            2,
            3,
        ])
    })

    it('[0,1,2] rotate 1 should be [2,0,1]', () => {
        expect(createArrFromNode(rotateRight(createNodeFromArr([0, 1, 2]), 1))).toEqual([2, 0, 1])
    })

    it('[0,1,2] rotate 2 should be [1,2,0]', () => {
        expect(createArrFromNode(rotateRight(createNodeFromArr([0, 1, 2]), 2))).toEqual([1, 2, 0])
    })

    it('[0,1,2] rotate 3 should be [0,1,2]', () => {
        expect(createArrFromNode(rotateRight(createNodeFromArr([0, 1, 2]), 3))).toEqual([0, 1, 2])
    })

    it('[0,1,2] rotate 3 should be [2,0,1]', () => {
        expect(createArrFromNode(rotateRight(createNodeFromArr([0, 1, 2]), 4))).toEqual([2, 0, 1])
    })
})
