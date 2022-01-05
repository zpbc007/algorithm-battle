import { solution278 } from '../../src/leetcode';

describe('278', () => {
    test('n = 5, target = 4, should return 4', () => {
        const method = solution278((version) => version >= 4);

        expect(method(5)).toBe(4);
    });

    test('n = 2, target = 2, should return 2', () => {
        const method = solution278((version) => version >= 2);

        expect(method(2)).toBe(2);
    });
});
