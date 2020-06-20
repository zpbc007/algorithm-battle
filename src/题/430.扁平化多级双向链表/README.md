# 430 扁平化多级双向链表

## 思路

深度优先遍历

## 代码

递归：

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

迭代:
```ts
export function flatten(head: Node) {
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
```