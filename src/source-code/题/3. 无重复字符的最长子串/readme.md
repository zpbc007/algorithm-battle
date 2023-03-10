# 思路

双指针，一个指向当前遍历位置，一个指向当前不重复子串的起点。遍历过程中，不断更新各个字符所处的最后 index，存储在 map 中。
- 当 map 中存在当前 char 的位置时，更新 start 位置（为了避免删除 map 中的数据，需要使用 `Math.max(start, currentCharPreIndex + 1)` 更新 star）
- 当前不重复子串的长度为 `end - start + 1`

# 代码

`index2.ts`

# 复杂度

-   时间复杂度: O(N) 两个指针各遍历字符串一次
-   空间复杂度: O(N) 存储 index
