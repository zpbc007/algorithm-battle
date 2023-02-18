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

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */