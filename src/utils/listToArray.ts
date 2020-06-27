import { IListNode } from './arrayToList'

export function getArrayFromList(head: IListNode) {
    const result = []

    while (head) {
        result.push(head.val)
        head = head.next
    }

    return result
}
