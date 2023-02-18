import { maxSubArray, maxSubArray1, maxSubArray2, maxSubArray3 } from '../../src/leetcode/53'

describe('53', () => {
    const testFuncs = (nums: number[], result: number) => [
        maxSubArray,
        maxSubArray1,
        maxSubArray2,
        maxSubArray3
    ].forEach(testFunc => {
        expect(testFunc(nums)).toBe(result)
    })

    test('[-2,1,-3,4,-1,2,1,-5,4] should return 6', () => {
        testFuncs([-2, 1, -3, 4, -1, 2, 1, -5, 4], 6)
    })

    test('[1] should return 1', () => {
        testFuncs([1], 1)
    })
    test('[5,4,-1,7,8] should return 23', () => {

        testFuncs([5, 4, -1, 7, 8], 23)
    })
})