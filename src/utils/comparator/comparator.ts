export type ICompareFunction<T> = (a: T, b: T) => number
export class Comparator<T> {
    // 默认比较函数
    static defaultCompareFunction<N>(a: N, b: N) {
        if (a === b) {
            return 0
        }

        return a < b ? -1 : 1
    }

    private compare: ICompareFunction<T>
    constructor(compareFunction?: ICompareFunction<T>) {
        this.compare = compareFunction || Comparator.defaultCompareFunction
    }

    equal(a: T, b: T) {
        return this.compare(a, b) === 0
    }

    lessThan(a: T, b: T) {
        return this.compare(a, b) < 0
    }

    greaterThan(a: T, b: T) {
        return this.compare(a, b) > 0
    }

    lessThanOrEqual(a: T, b: T) {
        return this.equal(a, b) || this.lessThan(a, b)
    }

    greaterThanOrEqual(a: T, b: T) {
        return this.equal(a, b) || this.greaterThan(a, b) 
    }
}
