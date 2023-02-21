import { ListNode, rotateRight } from '../index'

function createNodeFromArr(arr: number[]) {
    const { head } = arr.reduce<{ head: null | ListNode; cur: null | ListNode }>(
        (acc, val, index) => {
            const curNode = new ListNode(val)
            if (index === 0) {
                return {
                    head: curNode,
                    cur: curNode,
                }
            }

            if (acc.cur) {
                acc.cur.next = curNode
            }
            acc.cur = curNode

            return acc
        },
        {
            head: null,
            cur: null,
        },
    )

    return head
}

function createArrFromNode(head: null | ListNode) {
    if (!head) {
        return []
    }

    let result: number[] = []

    while (head) {
        result.push(head.val)
        head = head.next
    }

    return result
}

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
