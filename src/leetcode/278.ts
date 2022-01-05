/**
 * 278. 第一个错误的版本
 * https://leetcode-cn.com/problems/first-bad-version/
 *
 * 二分法查找左侧边界
 */
export const solution278 = function (
    isBadVersion: (version: number) => boolean
) {
    return function (n: number): number {
        let left = 1;
        let right = n;

        while (left < right) {
            const mid = left + ((right - left) >> 1);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
};
