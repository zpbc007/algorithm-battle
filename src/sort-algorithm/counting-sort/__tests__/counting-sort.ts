import { countingSort } from '../../counting-sort'

describe('counting sort', () => {
    it('should sort sequence arr', () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

        const result = countingSort(arr)

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })

    it('should sort sequence arr', () => {
        const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1]

        const result = countingSort(arr)

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })

    it('should sort desequence arr', () => {
        const arr = [10, 80, 30, 90, 40, 50, 70]

        const result = countingSort(arr)

        expect(result).toEqual([10, 30, 40, 50, 70, 80, 90])
    })
})
