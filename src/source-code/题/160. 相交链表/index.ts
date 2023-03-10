import { IListNode } from '@utils/arrayToList'

export function getIntersectionNodeByMap(headA: IListNode, headB: IListNode) {
    const nodeMap = new Map<IListNode, boolean>()
    while (headA) {
        nodeMap.set(headA, true)
        headA = headA.next
    }

    while (headB) {
        if (nodeMap.has(headB)) {
            return headB
        }
        headB = headB.next
    }

    return null
}

export function getIntersectionNodeByPointer(headA: IListNode, headB: IListNode) {
    if (!headA || !headB) {
        return null
    }
    let pointer1 = headA
    let pointer2 = headB
    let pointer1Finished = false
    let pointer2Finished = false
    let pointer1Changed = false
    let pointer2Changed = false

    while (!pointer1Finished || !pointer2Finished) {
        if (pointer1 === pointer2) {
            return pointer1
        }
        if (!pointer1Finished) {
            pointer1 = pointer1.next
        }
        if (!pointer2Finished) {
            pointer2 = pointer2.next
        }

        if (pointer1 === null) {
            if (pointer1Changed) {
                pointer1Finished = true
            } else {
                pointer1Changed = true
                pointer1 = headB
            }
        }

        if (pointer2 === null) {
            if (pointer2Changed) {
                pointer2Finished = true
            } else {
                pointer2Changed = true
                pointer2 = headA
            }
        }

        if (pointer1 === pointer2) {
            return pointer1
        }
    }

    return null
}
