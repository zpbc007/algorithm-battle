import { buildHeap } from "../build-heap";

describe('build heap' ,() => {
    it('should build a max heap', () => {
        const arr = [5, 2, 7, 3, 6, 1, 4]
        buildHeap(arr)

        expect(arr).toEqual([7, 6, 5, 3, 2, 1, 4])
    }) 
})