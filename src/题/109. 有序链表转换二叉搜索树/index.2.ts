import { ListNode } from '@utils/list-node'
import { TreeNode } from '@utils/tree-node'

export function sortedListToBST(head: ListNode | null): TreeNode | null {
    if (!head) {
        return null
    }
    const nodeArr = list2Array(head)

    return sortedArr2BST(nodeArr, 0, nodeArr.length)
}

function list2Array(head: ListNode | null) {
    const result: ListNode[] = []

    while (head) {
        result.push(head)
        head = head.next
    }

    return result
}

function sortedArr2BST(arr: ListNode[], start: number, end: number): TreeNode {
    // 到子节点了
    if (end - start === 1) {
        return new TreeNode(arr[start].val)
    }

    // 只有两个节点了，右侧节点做父节点，左侧节点做左子节点
    if (end - start === 2) {
        return new TreeNode(arr[end - 1].val, new TreeNode(arr[start].val), null)
    }

    const mid = start + Math.floor((end - start - 1) / 2)
    return new TreeNode(
        arr[mid].val,
        sortedArr2BST(arr, start, mid),
        sortedArr2BST(arr, mid + 1, end),
    )
}
