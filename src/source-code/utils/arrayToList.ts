export interface IListNode {
    val: number
    next: null | IListNode
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
