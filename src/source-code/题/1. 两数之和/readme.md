# 思路

遍历数组，在遍历过程中构建 map。map 的 key 为数组元素的值，value 为值对应的 index。
如果在 map 中存在 target - currentValue 的元素，就找到了结果

# 代码

`index.ts`

# 复杂度

-   时间复杂度：O(N) 数组的遍历
-   空间复杂度：O(N) 构建了一个 map
