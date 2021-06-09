import { solveNQueens } from '../index'

describe('51.N皇后', () => {
    it('n = 4', () => {
        const result = solveNQueens(4)
        const target = [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]

        expect(result.length === target.length)
        expect(result).toEqual(expect.arrayContaining(target)) 
    })
})