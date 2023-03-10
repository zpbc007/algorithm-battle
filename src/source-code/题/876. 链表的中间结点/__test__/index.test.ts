import { middleNode } from '../index'
import { ListNode } from '@utils/list-node'

describe('876. 链表的中间结点', () => {
    it('input: [1,2,3,4,5], output: [3,4,5]', () => {
        const head = new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
        )

        let middle = middleNode(head)
        ;[3, 4, 5].forEach((val) => {
            expect(middle?.val).toBe(val)
            middle = middle?.next!
        })
    })
})
