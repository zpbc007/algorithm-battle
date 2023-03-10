interface ListNode {
    val: number
    next: ListNode | null
}

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head) {
        return head
    }

    let start = head
    let end = head

    for (let i = 0; i < k; i++) {
        // 不够 k 个
        if (!end) {
            return head
        }

        end = end.next
    }

    const newHead = reverse(start, end)
    // 翻转后，start 成为末尾节点，链接下一个结果
    start.next = reverseKGroup(end, k)

    return newHead
}

/**
 * 翻转链表 head，到 end 停止 [head, end)
 * @param head 
 * @param end 
 * @returns 
 */
function reverse(start: ListNode, end: ListNode) {
    let pre = null
    let cur = start

    while(cur !== end) {
        const next = cur.next
        cur.next = pre

        pre = cur
        cur = next
    }

    return pre
}