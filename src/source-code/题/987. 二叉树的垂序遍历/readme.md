# 思路

使用先序遍历，将节点放入 map 中，map 的 key 为 col, value 为每一行的节点值。
需要注意的是需要对 map 的 key 做一次排序

# 代码

`index.ts`

# 复杂度分析

- 时间复杂度: O(NLogN) 每行的节点排序
- 空间复杂度：O(N)