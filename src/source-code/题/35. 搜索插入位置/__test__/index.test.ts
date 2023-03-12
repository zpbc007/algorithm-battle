import { searchInsert } from '../index'

describe('35. 搜索插入位置', () => {
    it('input nums = [1,3,5,6], target = 5, output: 2', () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2)
    })

    it('input nums = [1,3,5,6], target = 2, output: 1', () => {
        expect(searchInsert([1, 3, 5, 6], 2)).toBe(1)
    })

    it('input nums = [1,3,5,6], target = 7, output: 4', () => {
        expect(searchInsert([1, 3, 5, 6], 7)).toBe(4)
    })

    it('input nums = [1,3], target = 3, output: 1', () => {
        expect(searchInsert([1, 3], 3)).toBe(1)
    })

    it('input nums = [1,3,5], target = 4, output: 2', () => {
        expect(searchInsert([1, 3, 5], 4)).toBe(2)
    })
})
