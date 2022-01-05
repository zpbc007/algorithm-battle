/**
 * 136. 只出现一次的数字
 * https://leetcode-cn.com/problems/single-number/
 *
 * 使用异或遍历数组
 */
export function singleNumber(nums: number[]): number {
    return nums.reduce((acc, num) => {
        return acc ^ num;
    }, 0);
}
