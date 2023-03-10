export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val
        this.next = next === undefined ? null : next
    }
}

export function createNodeFromArr(arr: number[]) {
    const { head } = arr.reduce<{ head: null | ListNode; cur: null | ListNode }>(
        (acc, val, index) => {
            const curNode = new ListNode(val)
            if (index === 0) {
                return {
                    head: curNode,
                    cur: curNode,
                }
            }

            if (acc.cur) {
                acc.cur.next = curNode
            }
            acc.cur = curNode

            return acc
        },
        {
            head: null,
            cur: null,
        },
    )

    return head
}

export function createArrFromNode(head: null | ListNode) {
    if (!head) {
        return []
    }

    let result: number[] = []

    while (head) {
        result.push(head.val)
        head = head.next
    }

    return result
}
