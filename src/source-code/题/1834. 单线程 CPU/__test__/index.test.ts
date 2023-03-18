import { getOrder } from '../index'

describe('1834. 单线程 CPU', () => {
    it('tasks: [[1,2],[2,4],[3,2],[4,1]], output: [0,2,3,1]', () => {
        expect(
            getOrder([
                [1, 2],
                [2, 4],
                [3, 2],
                [4, 1],
            ]),
        ).toEqual([0, 2, 3, 1])
    })

    it('tasks: [[7,10],[7,12],[7,5],[7,4],[7,2]], output: [4,3,2,0,1]', () => {
        expect(
            getOrder([
                [7, 10],
                [7, 12],
                [7, 5],
                [7, 4],
                [7, 2],
            ]),
        ).toEqual([4, 3, 2, 0, 1])
    })
})
