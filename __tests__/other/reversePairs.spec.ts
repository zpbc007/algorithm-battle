import { reversePairs } from '../../src';

describe('reversePairs', () => {
    // test('[7, 5, 6, 4] should return 5', () => {
    //     expect(reversePairs([7, 5, 6, 4])).toBe(5);
    // });

    // test('[3, 5, 2, 1, 6, 7] should return 5', () => {
    //     expect(reversePairs([3, 5, 2, 1, 6, 7])).toBe(5);
    // });

    test('[1, 3, 2, 3, 1 ] should return 4', () => {
        expect(reversePairs([1, 3, 2, 3, 1])).toBe(4);
    });
});