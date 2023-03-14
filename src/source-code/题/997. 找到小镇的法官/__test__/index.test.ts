import { findJudge } from '../index'
import { findJudge as findJudge2 } from '../index2'

describe('997. 找到小镇的法官', () => {
    it('input: 2 [[1,2]], output: 2', () => {
        expect(findJudge(2, [[1, 2]])).toBe(2)
        expect(findJudge2(2, [[1, 2]])).toBe(2)
    })
})
