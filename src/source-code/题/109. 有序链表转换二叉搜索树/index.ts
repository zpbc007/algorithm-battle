import { IListNode } from '@utils/arrayToList'
import { ITreeNode } from '@utils/tree/type'

export function sortedListToBST(head: IListNode): ITreeNode {
    if (!head) {
        return null
    }
    const root: ITreeNode = {
        val: null,
        left: null,
        right: null,
    }

    // 只有一个节点了
    if (!head.next) {
        root.val = head.val
        return root
    }

    let slow = head
    let fast = head
    let pre = head

    while (fast && fast.next) {
        pre = slow
        slow = slow.next
        fast = fast.next.next
    }

    /** 断开链表 */
    pre.next = null
    root.val = slow.val
    // 递归获取左子树
    root.left = sortedListToBST(head)
    // 递归获取右子树
    root.right = sortedListToBST(slow.next)

    return root
}

export function sortedListToBSTByArray(head: IListNode): ITreeNode {
    const arr: number[] = []

    // 链表转数组
    while (head) {
        arr.push(head.val)
        head = head.next
    }

    return sortedArrayToBST(arr, 0, arr.length)
}

function sortedArrayToBST(arr: number[], start: number, end: number) {
    const diff = end - start
    if (diff === 0) {
        return null
    }
    if (diff === 1) {
        return {
            val: arr[start],
            left: null,
            right: null,
        }
    }

    const mid = Math.floor((end - start) / 2) + start
    const root: ITreeNode = {
        val: arr[mid],
        left: null,
        right: null,
    }
    root.left = sortedArrayToBST(arr, start, mid)
    root.right = sortedArrayToBST(arr, mid + 1, end)

    return root
}
