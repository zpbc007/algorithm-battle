import { searchRange } from '../index'

describe('34.在排序数组中查找元素的第一个和最后一个位置', () => {
    it('nums = [5,7,7,8,8,10], target = 8', () => {
        expect(searchRange([5,7,7,8,8,10], 8)).toEqual([3,4])
    })

    it('nums = [5,7,7,8,8,10], target = 6', () => {
        expect(searchRange([5,7,7,8,8,10], 6)).toEqual([-1,-1])
    })

    it('nums = [], target = 0', () => {
        expect(searchRange([], 0)).toEqual([-1,-1])
    })

    it('nums = [1], target = 1', () => {
        expect(searchRange([1], 1)).toEqual([0,0])
    })
})