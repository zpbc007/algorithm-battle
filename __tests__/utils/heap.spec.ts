import { Heap } from '../../src';

describe('swap', () => {
    test('min heap', () => {
        const heap = new Heap<number>();
        const source = [10, 9, 8, 5, 7, 1];

        source.forEach((item) => {
            heap.add(item);
        });

        expect(source.map(() => heap.shift())).toEqual(
            source.sort((a, b) => a - b)
        );
    });

    test('max heap', () => {
        const heap = new Heap<number>((a, b) => b - a);
        const source = [3, 9, 10, 5, 7, 1];

        source.forEach((item) => {
            heap.add(item);
        });

        expect(source.map(() => heap.shift())).toEqual(
            source.sort((a, b) => b - a)
        );
    });

    test('empty heap shift', () => {
        const heap = new Heap();

        expect(heap.shift()).toBe(null);
    });
});
