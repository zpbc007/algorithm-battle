import { minSubarray } from '../index'

describe('1590. 使数组和能被 P 整除', () => {
    it('input: nums = [3,1,4,2], p = 6, output: 1', () => {
        expect(minSubarray([3, 1, 4, 2], 6)).toBe(1)
    })

    it('input: nums = [6,3,5,2], p = 9, output: 2', () => {
        expect(minSubarray([6, 3, 5, 2], 9)).toBe(2)
    })

    it('input: nums = [1,2,3], p = 3, output: 0', () => {
        expect(minSubarray([1, 2, 3], 3)).toBe(0)
    })

    it('input: nums = [1,2,3], p = 7, output: -1', () => {
        expect(minSubarray([1, 2, 3], 7)).toBe(-1)
    })

    it('input: nums = [8,32,31,18,34,20,21,13,1,27,23,22,11,15,30,4,2], p = 148, output: 7', () => {
        expect(
            minSubarray([8, 32, 31, 18, 34, 20, 21, 13, 1, 27, 23, 22, 11, 15, 30, 4, 2], 148),
        ).toBe(7)
    })
})
