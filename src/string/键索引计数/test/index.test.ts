import { ISortItem, keyIndexSort } from '../index'

describe('键索引计数', () => {
    it('should sort str arr', () => {
        const arr: ISortItem[] = [
            {
                groupNo: 2,
                nameStr: 'Anderson',
            },
            {
                groupNo: 3,
                nameStr: 'Brown',
            },
            {
                groupNo: 3,
                nameStr: 'Davis',
            },
            {
                groupNo: 4,
                nameStr: 'Garcia',
            },
            {
                groupNo: 1,
                nameStr: 'Harris',
            },
            {
                groupNo: 3,
                nameStr: 'Jackson',
            },
            {
                groupNo: 4,
                nameStr: 'Johnson',
            },
            {
                groupNo: 3,
                nameStr: 'Jones',
            },
            {
                groupNo: 1,
                nameStr: 'Martin',
            },
            {
                groupNo: 2,
                nameStr: 'Martinez',
            },
            {
                groupNo: 2,
                nameStr: 'Miller',
            },
            {
                groupNo: 1,
                nameStr: 'Moore',
            },
            {
                groupNo: 2,
                nameStr: 'Robinson',
            },
            {
                groupNo: 4,
                nameStr: 'Smith',
            },
            {
                groupNo: 3,
                nameStr: 'Taylor',
            },
            {
                groupNo: 4,
                nameStr: 'Thomas',
            },
            {
                groupNo: 4,
                nameStr: 'Thompson',
            },
            {
                groupNo: 2,
                nameStr: 'White',
            },
            {
                groupNo: 3,
                nameStr: 'Williams',
            },
            {
                groupNo: 4,
                nameStr: 'Wilson',
            },
        ]
        const targetArr = [
            'Harris',
            'Martin',
            'Moore',
            'Anderson',
            'Martinez',
            'Miller',
            'Robinson',
            'White',
            'Brown',
            'Davis',
            'Jackson',
            'Jones',
            'Taylor',
            'Williams',
            'Garcia',
            'Johnson',
            'Smith',
            'Thomas',
            'Thompson',
            'Wilson',
        ]
        const result = keyIndexSort(arr)

        expect(result).toEqual(targetArr)
    })
})
