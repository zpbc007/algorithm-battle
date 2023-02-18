import {addToArrayForm} from '../../src/leetcode'

describe('989 数组形式的整数加法', () => {
    test('[1,2,0,0] 34 should return [1,2,3,4]', () => {
        const result = addToArrayForm([1,2,0,0], 34)
        expect(result).toEqual([1,2,3,4])
    })

    test('[9,9,9,9,9,9,9,9,9,9] 1 should return [1,0,0,0,0,0,0,0,0,0,0]', () => {
        const result = addToArrayForm([9,9,9,9,9,9,9,9,9,9], 1)
        expect(result).toEqual([1,0,0,0,0,0,0,0,0,0,0])
    })
})