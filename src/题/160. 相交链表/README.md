# 160.相交链表

## 使用 map

### 思路

先遍历一个链表，使用 map 存储所有的数据，再遍历另一个链表看 map 中是否存在对应的值。

### 代码

```ts
function getIntersectionNodeByMap(headA: IListNode, headB: IListNode) {
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
```

## 使用双指针


### 思路

指针 1、2 分别指向链表 a, b，指针 1、2沿着链表同步进行迭代，当指针指向到链表尾部时，指针指向另一个链表。当两个指针相交时就是链表的交点。

### 代码

```ts
function getIntersectionNodeByPointer(headA: IListNode, headB: IListNode) {
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
```