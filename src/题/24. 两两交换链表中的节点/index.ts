import { ListNode } from '@utils/list-node'

export function swapPairs(head: ListNode | null): ListNode | null {
    // 头结点不存在 | 只有一个节点
    if (!head || !head.next) {
        return head
    }

    let tmp: ListNode | null = null

    tmp = head.next
    head.next = swapPairs(head.next.next)
    tmp.next = head

    return tmp
}
