import { swapByXOR, swap } from '../../src';

describe('swap', () => {
    let source: number[];
    let target: number[];

    beforeEach(() => {
        source = [1, 2, 3];
        target = [3, 2, 1];
    });

    test('swapByXOR should work', () => {
        expect(swapByXOR(source, 0, 2)).toEqual(target);
    });

    test('swap should work', () => {
        expect(swap(source, 0, 2)).toEqual(target);
    });
});
