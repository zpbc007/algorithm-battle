# 1381. 设计一个支持增量操作的栈

## 思路

1. 使用数组模拟

```ts
export class CustomStack {
    // 存放数据的数组
    private dataContainer!: number[]

    // 记录最后一个数据的下标
    private top = -1

    constructor(private maxSize: number) {
        this.dataContainer = new Array(maxSize)
    }

    push(x: number) {
        // 判断是否超长
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
        // 遍历为每个元素增加 val
        for (let i = 0; i < k && i <= this.top; i++) {
            this.dataContainer[i] = this.dataContainer[i] + val
        }
    }
}
```

以上代码中 increment 方法的复杂度为 O(k)，为了优化此方法，我们可以使用另一个数组存放每次的 increment 操作，在 pop 时再去进行计算。

2. 添加 incArr 记录每次的 increment 操作

```ts
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

    // 此方法复杂度为 O(1)
    increment(k: number, val: number) {
        const target = Math.min(k - 1, this.top)

        if (target >= 0) {
            this.incArr[target] = (this.incArr[target] || 0) + val
        }
    }
}
```