/**
 * 260. 只出现一次的数字 III
 * https://leetcode-cn.com/problems/single-number-iii/
 */
export function singleNumber260(nums: number[]): number[] {
    // 使用异或遍历一次数组得到 a ^ b
    const aXORb = nums.reduce((acc, num) => acc ^ num, 0);
    // a ^ b 二进制表示为 1 的最低位
    const flag = getFirstOne(aXORb);
    // 根据 flag 划分数组
    const group = nums.filter((item) => item & flag);
    // a ^ b 异或遍历其中一个数组，得到 a | b
    const a = group.reduce((acc, num) => acc ^ num, aXORb);

    return [a, a ^ aXORb];
}

/**
 * 获取数字二进制表示的最低位的1
 * @param   111010
 * @returns 000010
 */
function getFirstOne(num: number) {
    return num & (~num + 1);
}
