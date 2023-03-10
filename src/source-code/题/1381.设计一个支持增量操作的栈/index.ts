export class CustomStack {
    private dataContainer!: number[]

    private top = -1

    constructor(private maxSize: number) {
        this.dataContainer = new Array(maxSize)
    }

    push(x: number) {
        if (this.top + 1 < this.maxSize) {
            this.top += 1
            this.dataContainer[this.top] = x
        }
    }

    pop() {
        if (this.top === -1) {
            return -1
        }

        this.top -= 1
        const result = this.dataContainer[this.top + 1]
        this.dataContainer[this.top + 1] = 0
        return result
    }

    /** 该方法时间复杂度为 O(k) */
    increment(k: number, val: number) {
        for (let i = 0; i < k && i <= this.top; i++) {
            this.dataContainer[i] = this.dataContainer[i] + val
        }
    }
}
