# 232.用栈实现队列

## 思路

队列：先入先出
栈：先入后出
为了能快速的从栈中读取栈底的值，可以使用两个栈：
- 一个栈用于插入数据
- 一个栈用于读取数据
当读取数据栈为空时，从插入数据栈中把所有数据再导入到读取数据栈，这样原始数据经过两次 `先入后出` 就变成了 `先入先出`

## 代码

```ts
// push to top, peek/pop from top, size, 和 is empty 操作是合法的。
class MyStack<T> {
    private valueContainer: T[] = []

    push(val: T) {
        this.valueContainer.push(val)
    }

    pop(): T | undefined {
        return this.valueContainer.pop()
    }

    peek(): T | undefined {
        return this.valueContainer[this.valueContainer.length - 1]
    }

    size(): number {
        return this.valueContainer.length
    }

    isEmpty(): boolean {
        return this.valueContainer.length === 0
    }
}

export class MyQueue {
    // 插入数据
    private insertStack = new MyStack<number>()
    // 读取数据
    private readStack = new MyStack<number>()

    constructor() {}

    push(x: number): void {
        this.insertStack.push(x)
    }

    pop(): number {
        if (!this.readStack.isEmpty()) {
            return this.readStack.pop()!
        }

        if (!this.insertStack.isEmpty()) {
            this.insert2Read()

            return this.readStack.pop()!
        }

        return -1
    }

    peek(): number {
        if (!this.readStack.isEmpty()) {
            return this.readStack.peek()!
        }

        if (!this.insertStack.isEmpty()) {
            this.insert2Read()

            return this.readStack.peek()!
        }

        return -1
    }

    empty(): boolean {
        return this.readStack.isEmpty() && this.insertStack.isEmpty()
    }

    private insert2Read() {
        while(!this.insertStack.isEmpty()) {
            this.readStack.push(this.insertStack.pop()!)
        }
    }
}
```

## 复杂度分析
### 时间复杂度
- push、empty: O(1)
- pop、peek: O(1) （每个元素只会在两个栈中各出现一次）
### 空间复杂度
O(N)

