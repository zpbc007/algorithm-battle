import { ListNode } from '@utils/list-node'

/**
 * A 不相交长度 = m, B 不相交长度 = n, 相交部分长度 c
 * 1. 相交
 *  1.1 lengthA === lengthB
 *      两个指针同时走到相交节点
 *  1.2 lengthA !== lengthB
 *      pointA 移动：m + c + n
 *      pointB 移动: n + c + m
 *      同时移动到相交节点
 * 2. 不相交
 *  2.1 lengthA === lengthB
 *      两个指针同时走到尾结点 Null
 *  2.2 lengthA !== lengthB
 *      pointA 移动: m + c + n + c
 *      pointB 移动: n + c + m + c
 * @param headA
 * @param headB
 */
export function getIntersectionNode(
    headA: ListNode | null,
    headB: ListNode | null,
): ListNode | null {
    if (!headA || !headB) {
        return null
    }
    let pointA: ListNode | null = headA
    let pointB: ListNode | null = headB
    let pointAChanged = false
    let pointBChanged = false

    while (pointA || pointB) {
        if (!pointA && !pointAChanged) {
            pointA = headB
            pointAChanged = true
        }

        if (!pointB && !pointBChanged) {
            pointB = headA
            pointBChanged = true
        }

        if (pointA === pointB) {
            return pointA
        }

        pointA = pointA!.next
        pointB = pointB!.next
    }

    return null
}

function getIntersectionNode2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) {
        return null
    }

    let pointA: ListNode | null = headA
    let pointB: ListNode | null = headB

    while (pointA !== pointB) {
        pointA = pointA === null ? headB : pointA.next
        pointB = pointB === null ? headA : pointB.next
    }

    return pointA
}
