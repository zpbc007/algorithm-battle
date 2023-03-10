# 75.颜色分类

## 思路

共设置三个指针，left 指针指向第一个不为0的位置，middle 代表当前遍历的位置，right 指针指向最后一个不为2的数。这样就将数组分为了三个区间：

- [0, left) 此区间都是0
- [left, middle) 此区间都是1
- (right, length - 1] 此区间都是2

当 middle 与 right 相遇时，排序完成。
遍历过程中
1. 如果 middle 对应的值为0，则交换 left 与 middle 位置的数值，同时 left 与 middle 向后移位，保证 left 之前都是 0。
2. 如果 middle 对应的值为1，则 middle 向后移位，保证 [left, middle)区间内都是1
3. 如果 middle 对应的值为2，则交换 right 与 middle 位置的数值，同时 right 前移，保证 right 之后都是2。