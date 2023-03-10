import { plusOne, reducePlusOne } from '..'

describe('加一', () => {
    const inputList = [[1, 2, 3], [4, 3, 2, 1]]
    const result = [[1, 2, 4], [4, 3, 2, 2]]

    it('plusOne should work', () => {
        inputList.forEach((input, index) => {
            expect(plusOne(input)).toEqual(result[index])
        })
    })

    it('reducePlusOne should work', () => {
        inputList.forEach((input, index) => {
            expect(reducePlusOne(input)).toEqual(result[index])
        })
    })
})
