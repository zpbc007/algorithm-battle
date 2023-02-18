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
        if (!this.popStack.isEmpty()) {
            return this.popStack.pop()
        }

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
            this.popStack.push(item!)
        }
    }
}
