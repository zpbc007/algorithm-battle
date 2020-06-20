# 430 扁平化多级双向链表

## 思路

深度优先遍历

## 代码

```ts
export class Node {
    constructor(
        public val: number,
        public prev: Node | null = null,
        public next: Node | null = null,
        public child: Node | null = null,
    ) {}
}

export function flatten(head: Node) {
    const { head: result } = flattenAndGetLast(head)

    return result
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
```