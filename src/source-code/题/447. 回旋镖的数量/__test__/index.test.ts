import { numberOfBoomerangs } from '../index'
import { numberOfBoomerangs as numberOfBoomerangs2 } from '../index2'

describe('447. 回旋镖的数量', () => {
    it('input [[0,0],[1,0],[2,0]], output 2', () => {
        expect(
            numberOfBoomerangs([
                [0, 0],
                [1, 0],
                [2, 0],
            ]),
        ).toBe(2)
        expect(
            numberOfBoomerangs2([
                [0, 0],
                [1, 0],
                [2, 0],
            ]),
        ).toBe(2)
    })
})
