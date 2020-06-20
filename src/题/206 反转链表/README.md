# 206 反转链表

## 思路

使用两个指引，一个 cur 指向当前遍历到的位置，一个 pre 记录它的上一个位置，遍历过程中不断的让 cur.next 指向 pre, pre 指向 cur, cur 指向 cur.next 即可

## 代码

```ts
function reverseList(head: IListNode) {
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
```