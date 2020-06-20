# 232.用栈实现队列

## 思路

队列是先入先出的，但栈是后入先出的，因此为了实现队列，需要用两个栈来实现，一个用于插入数据，一个用于读取数据。当读取数据的栈为空时，将插入数据栈的所有元素，依次出栈并插入读取数据的栈。

## 代码

```ts
// 定义一个栈
class MyStack {
    dataContainer: number[] = []
    top = -1

    push(x: number) {
        this.dataContainer.push(x)
        this.top++
    }

    pop() {
        if (this.top < 0) {
            return null
        }

        const data = this.dataContainer.pop()
        this.top--

        return data
    }

    peek() {
        if (this.top < 0) {
            return 0
        }

        return this.dataContainer[this.top]
    }

    isEmpty() {
        return this.top === -1
    }
}

export class MyQueue {
    // 用于插入数据
    pushStack = new MyStack()
    // 用于弹出数据
    popStack = new MyStack()

    push(x: number) {
        this.pushStack.push(x)
    }

    pop() {
        // 当读栈不为空时，弹出读栈里的数据
        if (!this.popStack.isEmpty()) {
            return this.popStack.pop()
        }

        // 读栈为空，将写栈里的数据放到读栈中
        if (!this.pushStack.isEmpty()) {
            this.pushToPop()
            return this.popStack.pop()
        } else {
            return null
        }
    }

    peek() {
        if (!this.popStack.isEmpty()) {
            return this.popStack.peek()
        }

        if (!this.pushStack.isEmpty()) {
            this.pushToPop()
            return this.popStack.peek()
        } else {
            return null
        }
    }

    empty() {
        return this.pushStack.isEmpty() && this.popStack.isEmpty()
    }

    pushToPop() {
        while (!this.pushStack.isEmpty()) {
            const item = this.pushStack.pop()
            this.popStack.push(item)
        }
    }
}
```