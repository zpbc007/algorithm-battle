import { getMinAndMax } from './get-max-min'

describe('get max', () => {
    it('should get minVal and maxVal in arr', () => {
        const arr = [1, 2, 3, 5, 6, 9, 0]
        const result = getMinAndMax(arr)

        expect(result).toEqual({
            max: 9,
            min: 0,
        })
    })

    it('should get null when arr is empty', () => {
        const arr = []
        const reuslt = getMinAndMax(arr)

        expect(reuslt).toEqual({
            max: null,
            min: null,
        })
    })
})
