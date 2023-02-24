class MyStack {
    private val: number[] = []

    isEmpty() {
        return this.val.length === 0
    }

    peek() {
        return this.isEmpty() ? 0 : this.val[this.val.length - 1]
    }

    pop() {
        return this.isEmpty() ? 0 : this.val.pop()!
    }

    push(val: number) {
        this.val.push(val)
    }

    size() {
        return this.val.length
    }
}

export function maxChunksToSorted(arr: number[]): number {
    return arr.reduce((stack, item) => {
        if (!stack.isEmpty() && item < stack.peek()) {
            const max = stack.pop()
            while(!stack.isEmpty() && item < stack.peek()) {
                stack.pop()
            }

            stack.push(max)
        } else {
            stack.push(item)
        }

        return stack
    }, new MyStack()).size()
}