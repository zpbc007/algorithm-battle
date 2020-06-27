import { IListNode } from '@utils/arrayToList'

export function reverseList(head: IListNode) {
    if (!head || !head.next) {
        return head
    }

    let pre = null
    let cur = head

    while (cur) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
    }

    return pre
}

export function reverseList2(head: IListNode) {
    if (!head) {
        return head
    }
    let cur = head
    let next = head.next
    cur.next = null
    while (next) {
        const temp = cur

        cur = next
        next = next.next

        cur.next = temp
    }

    return cur
}
