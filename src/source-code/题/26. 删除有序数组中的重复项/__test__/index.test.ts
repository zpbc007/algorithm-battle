import { removeDuplicates } from '../index'

describe('26. 删除有序数组中的重复项', () => {
    it('input: [1,1,2], output: 2 ', () => {
        const arr = [1, 1, 2]

        expect(removeDuplicates(arr)).toBe(2)

        expect(arr.slice(0, 2)).toEqual([1, 2])
    })
})
