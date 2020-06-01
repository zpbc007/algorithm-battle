import { plusOne } from '..'

describe('加一', () => {
    it('', () => {
        const inputList = [[1, 2, 3], [4, 3, 2, 1]]
        const result = [[1, 2, 4], [4, 3, 2, 2]]

        inputList.forEach((input, index) => {
            expect(plusOne(input)).toEqual(result[index])
        })
    })
})
