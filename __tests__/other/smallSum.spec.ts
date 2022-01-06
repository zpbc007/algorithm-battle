import { smallSum } from '../../src';

describe('small sum', () => {
    test('[2, 4, 5, 1, 7, 3] should be 23', () => {
        expect(smallSum([2, 4, 5, 1, 7, 3])).toBe(23);
    });

    test('[2, 3, 4, 1, 5] should be 17', () => {
        expect(smallSum([2, 3, 4, 1, 5])).toBe(17);
    });
});
