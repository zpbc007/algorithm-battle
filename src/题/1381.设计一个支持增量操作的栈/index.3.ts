export class CustomStack {
    // 存放数据
    private dataArr: number[] = []

    // 存放每次增加的值
    private incrementVal: number[] = []

    // 栈顶指针
    private topIndex = -1

    constructor(private maxSize: number) {}

    push(x: number): void {
        if (this.topIndex < this.maxSize - 1) {
            this.dataArr[++this.topIndex] = x
        }
    }

    pop(): number {
        if (this.topIndex === -1) {
            return -1
        }

        const result = this.dataArr[this.topIndex] + (this.incrementVal[this.topIndex] ? this.incrementVal[this.topIndex] : 0)
        this.dataArr[this.topIndex] = 0
        this.incrementVal[this.topIndex] = 0
        this.topIndex--

        return result
    }

    increment(k: number, val: number): void {
        const maxIndex = Math.min(k, this.topIndex + 1)

        for (let i = 0; i < maxIndex; i++) {
            this.incrementVal[i] = this.incrementVal[i] ? this.incrementVal[i] + val : val
        }
    }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */