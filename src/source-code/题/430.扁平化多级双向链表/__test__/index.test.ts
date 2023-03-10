import { flatten, flatten2, getArrayFromNode, getNodeFromArray } from '..'

describe('430 扁平化多级双向链表', () => {
    const inputArr = [[1, 2, 3, 4, 5, 6, null, null, null, 7, 8, 9, 10, null, null, 11, 12]]

    const resultArr = [[1, 2, 3, 7, 8, 11, 12, 9, 10, 4, 5, 6]]
    it('递归', () => {
        inputArr.forEach((input, index) => {
            const result = resultArr[index]
            const head = getNodeFromArray(input)
            const flattened = flatten(head)
            expect(getArrayFromNode(flattened)).toEqual(result)
        })
    })

    it('迭代', () => {
        inputArr.forEach((input, index) => {
            const result = resultArr[index]
            const head = getNodeFromArray(input)
            const flattened = flatten2(head)
            expect(getArrayFromNode(flattened)).toEqual(result)
        })
    })
})
