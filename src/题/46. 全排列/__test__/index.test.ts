import {permute} from '../index'

describe('46.全排列', () => {
    it('nums = [1,2,3]', () => {
        const result = permute([1,2,3])
        const target = [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

        expect(result.length === target.length)
        expect(result).toEqual(expect.arrayContaining(target)) 
    })

    it('nums = [0,1]', () => {
        const result = permute([0,1])
        const target = [[0,1],[1,0]]

        expect(result.length === target.length)
        expect(result).toEqual(expect.arrayContaining(target)) 
    })

    it('nums = [1]', () => {
        const result = permute([1])
        const target = [[1]]

        expect(result.length === target.length)
        expect(result).toEqual(expect.arrayContaining(target)) 
    })
})
