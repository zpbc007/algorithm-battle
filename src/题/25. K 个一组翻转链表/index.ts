interface ListNode {
    val: number
    next: ListNode | null
}
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    // 添加头结点
    const myHead = {
        val: -1,
        next: head
    }
    reverseNextKGroup(myHead, k)

    return myHead.next
}

function reverseNextKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || !hasNextK(head, k)) {
        return head
    }

    // 头结点不参与翻转
    let pre = null
    let cur = head.next
    let count = 0
    let groupHead = head.next

    while(count < k) {
        const next = cur.next
        cur.next = pre
        pre = cur
        cur = next
        count++
    }

    groupHead.next = cur
    head.next = pre

    reverseNextKGroup(groupHead, k)
}

function hasNextK(head: ListNode | null, k: number) {
    if (!head) {
        return false
    }

    let count = 0
    let tmp = head
    while(count < k && !!tmp) {
        tmp = tmp.next
        count++
    }
    
    return !!tmp 
}
