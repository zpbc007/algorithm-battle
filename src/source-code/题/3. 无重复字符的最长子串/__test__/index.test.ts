import { lengthOfLongestSubstring } from '../index'
import { lengthOfLongestSubstring as lengthOfLongestSubstring2 } from '../index2'

describe('3. 无重复字符的最长子串', () => {
    it('input: "abcabcbb", output: 3', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3)
        expect(lengthOfLongestSubstring2('abcabcbb')).toBe(3)
    })

    it('input: "bbbbb", output: 1', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1)
        expect(lengthOfLongestSubstring2('bbbbb')).toBe(1)
    })

    it('input: "pwwkew", output: 3', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3)
        expect(lengthOfLongestSubstring2('pwwkew')).toBe(3)
    })

    it('input: " ", output: 1', () => {
        expect(lengthOfLongestSubstring(' ')).toBe(1)
        expect(lengthOfLongestSubstring2(' ')).toBe(1)
    })
})
