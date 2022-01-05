import { selectSort } from '../src';

describe('sort', () => {
    let caseArr: number[][];
    let resultArr: number[][];

    beforeEach(() => {
        caseArr = [
            // 不需要排序
            [],
            // 已经排好序
            [1, 2, 3, 4],
            // 逆序
            [4, 3, 2, 1],
            // 乱序
            [2, 3, 1, 4],
        ];

        resultArr = caseArr.map((item) => [...item].sort());
    });

    test('select sort', () => {
        caseArr.forEach((arr, index) => {
            expect(selectSort(arr)).toEqual(resultArr[index]);
        });
    });
});
