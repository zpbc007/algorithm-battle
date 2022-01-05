import { findPeakElement } from '../../src/leetcode';

describe('162', () => {
    test('[2] should return index: 0', () => {
        expect(findPeakElement([2])).toBe(0);
    });

    test('[1, 2] should return index: 1', () => {
        expect(findPeakElement([1, 2])).toBe(1);
    });

    test('[4, 5, 3, 2, 1] should return index: 1', () => {
        expect(findPeakElement([4, 5, 3, 2, 1])).toBe(1);
    });
});
