# 思路

-   通过 item 之间的依赖关系推导出 group 之间的依赖关系
-   计算 item、group 的拓扑排序结果
-   建立 group 与 item 的多对一关系
-   按 item 的拓扑顺序设置 group 的值
-   按 group 的拓扑顺序输出结果
-   这里边的指向根据先输出哪个来确定

# 代码

`index.ts`

# 复杂度

-   时间复杂度：O(m + n^2)
-   空间复杂度：O(m + n^2)
