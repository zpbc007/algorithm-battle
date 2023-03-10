# 142 环形链表 II

## 思路

有两个指针，快指针 fast 和 慢指针 slow. slow 每次遍历一个元素， fast 每次遍历两个元素。
- 如果链表无环，则 fast 肯定会先遍历到末尾即 fast === null。
- 如果链表有环。设链表无环长度为 a，环长度为 b，fast 指针走过的距离为 F, slow 指针走过的距离为 S。

1. F = 2S （fast 每次走2个， slow 每次走1个）
2. 两指针在环内相遇时 F - S = nb => 2S -S = nb => S = nb（fast 比 slow 多走了 n 圈）
3. 第一个入环点满足节点位置 k = a + nb （无环长度 + 在环内走了 n 圈）

则当前 slow 已经走了 nb 再走 a 就到了 k 的位置即（第一个入环点）。
将 fast 重置到链表头部 fast 每次走 1 个，当 fast 与 slow 再次相遇时，fast 与 slow 都走了 a 的长度。相遇的位置即为第一个入环点。

## 代码

```ts
export function detectCycle(head: IListNode) {
    let fast = head
    let slow = head

    // 两指针第一次相遇
    do {
        // 到达链表末尾
        if (!fast || !fast.next) {
            return null
        }
        slow = slow.next
        fast = fast.next.next
    } while (fast !== slow)

    fast = head
    while (fast !== slow) {
        fast = fast.next
        slow = slow.next
    }

    return slow
}
```


## 思路
- slow 指针移动 S，fast 指针移动 F，则有 F = 2S (快节点移动的距离是慢节点的2倍)
- 非环长度为 a，环长度为 b，二者相遇时，F - S = n*b (套圈了) 
- 因此 2S - S = n * b => S = n * b (慢节点移动的总距离是环的长度的 n 倍)
- 入口节点位置：a + nb 
- 只要 slow 指针再移动 a 即可到达入口

## 代码
```ts
function detectCycle(head: ListNode | null): ListNode | null {
    if (!head) {
        return null
    }    

    let slow: ListNode | null = head
    let fast:  ListNode | null = head

    while(fast !== null) {
        slow = slow?.next  || null
        fast = fast?.next?.next || null

        /**
         * 快慢节点相遇
         */
        if (slow === fast && fast !== null) {
            fast = head
            while (slow !== fast) {
                fast = fast!.next
                slow = slow!.next
            }

            return slow
        }
    }

    return null
};
```
## 复杂度
- 空间复杂度 O(1)
- 时间复杂度 O(N)