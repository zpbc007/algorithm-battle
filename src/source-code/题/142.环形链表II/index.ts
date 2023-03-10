import { IListNode } from '@utils/arrayToList'

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export function detectCycle(head: IListNode) {
    let fast = head
    let slow = head

    // 两指针第一次相遇
    do {
        // 到达链表末尾
        if (!fast || !fast.next) {
            return null
        }
        slow = slow.next
        fast = fast.next.next
    } while (fast !== slow)

    fast = head
    while (fast !== slow) {
        fast = fast.next
        slow = slow.next
    }

    return slow
}
