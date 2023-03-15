# 思路

构建图，遍历节点尝试对节点染色：

-   节点未染过色，设置为蓝色，dfs 递归与他相连的节点
    -   相连节点未染过色，设置为相反的颜色（红色），继续 dfs 递归与他相连的节点
    -   相连节点已经染色，颜色与节点颜色相同，此时已经不满足条件 `return false`
    -   所有节点都能染色成功则 `return true`，否则 `return false`

# 代码

`index.ts`

# 复杂度

- 时间复杂度：O(n + m), m 为 dislike 数组大小（dislike 要遍历一遍 + 所有节点染色）
- 空间复杂度：O(n + m), m 为 dislike 数组大小 (graph + color)
