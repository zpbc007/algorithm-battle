# 思路

- 检查 `s` 中每一个长度为 `words[0].length * words.length` 的字符串是否满足条件
- 构建 map 存储单词频次，每个在 `words` 中出现的词，频次 `+ 1`
- 对待检查的子串 `s1`，按 `words[0].length` 进行分割后，每个 `s1` 中出现的单词：
    - 在 map 中不存在，当前子串不满足条件
    - 在 map 中存在，频次 `- 1`，如果频次为 0，则在 map 中删除
- `map.size === 0` 则子串 `s1` 满足条件，否则不满足

# 代码

`index.ts`

# 复杂度分析

- 时间复杂度：O(ls * m) ls 为 s 长度，m 为单词数
- 空间复杂度: O(m * n) m 为 words 的单词数，n 为 words 中的单词长度（使用 map 存储频次）