import { ListNode } from '@utils/list-node'

function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) {
        return null
    }
    let slow: ListNode | null = head
    let fast: ListNode | null = head

    while (slow && fast) {
        slow = slow.next
        fast = fast.next?.next || null

        if (fast === null) {
            return null
        }

        // 相遇
        if (slow === fast) {
            fast = head

            while (slow !== fast) {
                slow = slow!.next
                fast = fast!.next
            }

            return slow
        }
    }

    return null
}
