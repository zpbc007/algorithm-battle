# 109 有序链表转换二叉搜索树

## 左右递归

### 思路

- 二叉搜索树的根节点的左子树的所有节点的值都要比根节点要小，右子树的所有节点的值都要比跟节点大，因此根节点就是链表的中间位置的值。
- 使用快慢指针可以找到链表的中间位置。该位置为根节点
- 递归找到根节点的左子树和右子树。

### 实现

```ts
function sortedListToBST(head: IListNode): ITreeNode {
    if (!head) {
        return null
    }
    const root: ITreeNode = {
        val: null,
        left: null,
        right: null,
    }

    // 只有一个节点了
    if (!head.next) {
        root.val = head.val
        return root
    }

    let slow = head
    let fast = head
    let pre = head

    while (fast && fast.next) {
        pre = slow
        slow = slow.next
        fast = fast.next.next
    }

    /** 断开链表 */
    pre.next = null
    root.val = slow.val
    // 递归获取左子树
    root.left = sortedListToBST(head)
    // 递归获取右子树
    root.right = sortedListToBST(slow.next)

    return root
}
```

## 使用数组

### 思路

在递归之前把链表转成数组，由于数组对中间值的查找是 O(1) 整体复杂度降为 O(n)

### 实现

```ts
function sortedListToBST(head: IListNode): ITreeNode {
    const arr: number[] = []

    // 链表转数组
    while (head) {
        arr.push(head.val)
        head = head.next
    }

    return sortedArrayToBST(arr, 0, arr.length)
}

function sortedArrayToBST(arr: number[], start: number, end: number) {
    const diff = end - start
    if (diff === 0) {
        return null
    }
    if (diff === 1) {
        return {
            val: arr[start],
            left: null,
            right: null,
        }
    }

    const mid = Math.floor((end - start) / 2) + start
    const root: ITreeNode = {
        val: arr[mid],
        left: null,
        right: null,
    }
    root.left = sortedArrayToBST(arr, start, mid)
    root.right = sortedArrayToBST(arr, mid + 1, end)

    return root
}
```