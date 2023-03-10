export class Node {
    constructor(
        public val: number,
        public prev: Node | null = null,
        public next: Node | null = null,
        public child: Node | null = null,
    ) {}
}

export function getNodeFromArray(input: number[]) {
    const head = new Node(111)

    let cur = head
    let addChild = false
    input.forEach((val) => {
        if (val === null) {
            cur = cur.prev
            addChild = true
        } else {
            if (addChild) {
                cur.child = new Node(val)
                cur = cur.child
                addChild = false
            } else {
                cur.next = new Node(val, cur)
                cur = cur.next
            }
        }
    })

    head.next.prev = null
    return head.next
}

export function getArrayFromNode(head: Node) {
    let cur = head
    const result = []
    while (cur) {
        result.push(cur.val)
        cur = cur.next
    }

    return result
}

/** 递归 */
export function flatten(head: Node) {
    const { head: result } = flattenAndGetLast(head)

    return result
}

export function flatten2(head: Node) {
    let cur = head

    while (cur) {
        // 存在子节点
        if (cur.child) {
            const { child, next } = cur
            child.prev = cur
            cur.child = null
            cur.next = child

            let temp = child
            // 找到子节点的最后一位
            while (temp.next) {
                temp = temp.next
            }
            temp.next = next
            if (next) {
                next.prev = temp
            }
        }
        cur = cur.next
    }

    return head
}

function flattenAndGetLast(head: Node) {
    let cur = head
    let pre = null
    while (cur) {
        // 深度优先
        if (cur.child) {
            // 递归
            const { head: flattenedChild, last } = flattenAndGetLast(cur.child)
            const next = cur.next
            // 指向子节点
            cur.next = flattenedChild
            // 修正指针
            flattenedChild.prev = cur
            cur.child = null
            last.next = next
            if (next) {
                next.prev = last
            }

            pre = last
            cur = next
        } else {
            pre = cur
            cur = cur.next
        }
    }

    return {
        head,
        last: pre ? pre : head,
    }
}
