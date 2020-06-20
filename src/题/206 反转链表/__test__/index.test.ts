import { getArrayFromList, getListFromArray, reverseList } from '..'

describe('206 反转链表', () => {
    it('', () => {
        const head = getListFromArray([1, 2, 3, 4, 5])
        const result = reverseList(head)

        expect(getArrayFromList(result)).toEqual([5, 4, 3, 2, 1])
    })
})
