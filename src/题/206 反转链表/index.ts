interface IListNode {
    val: number
    next: null | IListNode
}

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

export function getListFromArray(valArr: number[]) {
    const head: IListNode = {
        val: undefined,
        next: null,
    }

    let temp = head
    for (let index = 0; index < valArr.length; index++) {
        const val = valArr[index]
        temp.val = val
        if (index < valArr.length - 1) {
            temp.next = {
                val: undefined,
                next: null,
            }

            temp = temp.next
        }
    }

    return head
}

export function getArrayFromList(head: IListNode) {
    const result = []

    while (head) {
        result.push(head.val)
        head = head.next
    }

    return result
}
