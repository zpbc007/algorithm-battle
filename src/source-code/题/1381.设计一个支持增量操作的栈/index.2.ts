/** 对 increment 方法进行优化 */
export class CustomStack2 {
    // 存放 push 时对应的值
    private dataArr!: number[]

    // 存放每次 increment 的值
    private incArr!: number[]

    // 栈顶指针
    private top = -1

    constructor(private maxSize: number) {
        this.dataArr = new Array(maxSize)
        this.incArr = new Array(maxSize)
    }

    push(x: number) {
        if (this.top + 1 < this.maxSize) {
            this.top++
            this.dataArr[this.top] = x
        }
    }

    pop() {
        if (this.top === -1) {
            return -1
        }

        const result = this.dataArr[this.top] + (this.incArr[this.top] || 0)
        if (this.top > 0) {
            this.incArr[this.top - 1] =
                (this.incArr[this.top] || 0) + (this.incArr[this.top - 1] || 0)
        }
        this.incArr[this.top] = 0
        this.top--

        return result
    }

    increment(k: number, val: number) {
        const target = Math.min(k - 1, this.top)

        if (target >= 0) {
            this.incArr[target] = (this.incArr[target] || 0) + val
        }
    }
}
