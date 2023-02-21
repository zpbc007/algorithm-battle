import { ListNode } from '@utils/list-node'

export function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }
    let tmp: ListNode | null = null
    let newHead: ListNode | null = null
    let pre: ListNode | null = null

    while (head && head.next) {
        // 两两交换
        tmp = head.next
        head.next = head.next.next
        tmp.next = head

        if (pre) {
            pre.next = tmp
        }
        // 移动到下个位置
        head = tmp.next.next
        pre = tmp.next
        if (!newHead) {
            newHead = tmp
        }
    }

    return newHead
}
