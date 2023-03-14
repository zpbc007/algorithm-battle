import { maxSlidingWindow } from '../index'

describe('239. 滑动窗口最大值', () => {
    it('input: nums = [1,3,-1,-3,5,3,6,7], k = 3, output: [3,3,5,5,6,7]', () => {
        expect(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)).toEqual([3, 3, 5, 5, 6, 7])
    })
})
