import { ListNode } from '@utils/list-node'
import { TreeNode } from '@utils/tree-node'

export function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (!head) {
        return null
    }

    const len = getListLen(head)

    function buildBSTFromList(start: number, end: number): TreeNode | null {
        if (end <= start) {
            return null
        }

        const mid = (start + end) >>> 1
        const leftNode = buildBSTFromList(start, mid)
        const root = new TreeNode(head!.val)
        head = head!.next
        const rightNode = buildBSTFromList(mid + 1, end)

        root.left = leftNode
        root.right = rightNode

        return root
    }

    return buildBSTFromList(0, len)
}

/** 获取链表长度 */
function getListLen(head: ListNode | null) {
    let len = 0

    while (head) {
        len++
        head = head.next
    }

    return len
}
