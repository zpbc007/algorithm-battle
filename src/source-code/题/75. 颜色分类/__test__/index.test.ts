import { sortColors } from '..'

describe('颜色分类', () => {
    const inputList = [[1, 0], [2, 1], [2, 0, 2, 1, 1, 0]]
    const resultList = [[0, 1], [1, 2], [0, 0, 1, 1, 2, 2]]

    it('should work', () => {
        inputList.forEach((input, index) => {
            sortColors(input)
            expect(input).toEqual(resultList[index])
        })
    })
})
