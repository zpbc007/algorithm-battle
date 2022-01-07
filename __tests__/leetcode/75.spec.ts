import { sortColors } from '../../src/leetcode';

describe('75 sortColors', () => {
    test('[2, 0, 2, 1, 1, 0] should return [0, 0, 1, 1, 2, 2]', () => {
        const source = [2, 0, 2, 1, 1, 0];
        sortColors(source);
        expect(source).toEqual([0, 0, 1, 1, 2, 2]);
    });

    test('[2, 0, 1] should return [0, 1, 2]', () => {
        const source = [2, 0, 1];
        sortColors(source);
        expect(source).toEqual([0, 1, 2]);
    });

    test('[0] should return [0]', () => {
        const source = [0];
        sortColors(source);
        expect(source).toEqual([0]);
    });
});
