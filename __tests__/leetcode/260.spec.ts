import { singleNumber260 } from '../../src/leetcode';

describe('260', () => {
    test('case 1', () => {
        expect(singleNumber260([1, 2, 1, 3, 2, 5]).sort()).toEqual([3, 5]);
    });
});
