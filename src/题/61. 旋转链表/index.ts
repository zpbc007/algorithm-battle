import { ListNode } from '@utils/list-node'

export function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || head.next == null) {
        return head
    }

    let first: ListNode | null = head
    let last: ListNode | null = head
    let step = 0

    // 第一个指针先移动 K
    let index = 0
    while (index < k) {
        first = move2Next({ cur: first, head })

        index++
    }

    while (first.next !== null) {
        first = move2Next({ cur: first, head })
        last = move2Next({ cur: last, head })

        step++
    }

    first.next = head
    const newHead = last!.next
    last!.next = null

    return newHead
}

/**
 * 考虑循环移动的场景
 */
function move2Next({ cur, head }: { cur: ListNode; head: ListNode }) {
    if (cur.next) {
        return cur.next
    }

    return head
}
