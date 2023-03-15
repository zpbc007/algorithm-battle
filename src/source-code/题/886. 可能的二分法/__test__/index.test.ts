import { possibleBipartition } from '../index'

describe('886. 可能的二分法', () => {
    it('input: 4 [[1,2],[1,3],[2,4]], output: true', () => {
        expect(
            possibleBipartition(4, [
                [1, 2],
                [1, 3],
                [2, 4],
            ]),
        ).toBe(true)
    })
})
