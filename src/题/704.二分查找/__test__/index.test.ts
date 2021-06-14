import { search } from '../index'

describe('704 二分查找', () => {
    it('nums = [-1,0,3,5,9,12], target = 9', () => {
        expect(search([-1, 0, 3, 5, 9, 12], 9)).toBe(4)
    })

    it('nums = [-1,0,3,5,9,12], target = 2', () => {
        expect(search([-1, 0, 3, 5, 9, 12], 2)).toBe(-1)
    })
})
