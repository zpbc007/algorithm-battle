import { selectSort, bubleSort, insertSort } from '../src';

describe('sort', () => {
    let caseArr: number[][];
    let resultArr: number[][];
    const testSort = (sortFunc: (arr: number[]) => number[], log = false) => {
        caseArr.forEach((arr, index) => {
            if (log) {
                console.warn(
                    // @ts-ignore
                    `fun: ${sortFunc.name}, source: ${JSON.stringify(
                        arr
                    )}, result: ${JSON.stringify(sortFunc([...arr]))}`
                );
            }
            expect(sortFunc(arr)).toEqual(resultArr[index]);
        });
    };

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
        testSort(selectSort);
    });

    test('buble sort', () => {
        testSort(bubleSort);
    });

    test('insertSort', () => {
        testSort(insertSort, true);
    });
});
