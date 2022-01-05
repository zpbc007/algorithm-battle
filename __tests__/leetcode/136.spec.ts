import { singleNumber } from '../../src/leetcode';

describe('136', () => {
    test('single arr', () => {
        expect(singleNumber([1])).toEqual(1);
    });

    test('normal arr', () => {
        expect(singleNumber([1, 2, 1])).toEqual(2);
    });
});
