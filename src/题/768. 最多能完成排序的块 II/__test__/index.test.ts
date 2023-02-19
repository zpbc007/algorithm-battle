import { maxChunksToSorted } from '../index'
import { maxChunksToSorted as maxChunksToSorted2 } from '../index.2'

describe('768. 最多能完成排序的块 II', () => {
    it('maxChunksToSorted arr = [5,4,3,2,1], result = 1', () => {
        expect(maxChunksToSorted([5,4,3,2,1])).toBe(1)
    })

    it('maxChunksToSorted2 arr = [5,4,3,2,1], result = 1', () => {
        expect(maxChunksToSorted2([5,4,3,2,1])).toBe(1)
    })

    it('maxChunksToSorted arr = [4,2,2,1,1], result = 1', () => {
        expect(maxChunksToSorted([4,2,2,1,1])).toBe(1)
    })

    it('maxChunksToSorted2 arr = [4,2,2,1,1], result = 1', () => {
        expect(maxChunksToSorted2([4,2,2,1,1])).toBe(1)
    })
})