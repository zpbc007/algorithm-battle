import { MyQueue } from '..'
import { MyQueue as MyQueue2 } from '../index.2'

describe('232. 用栈实现队列', () => {
    it('should work', () => {
        const queue = new MyQueue()
        queue.push(1)
        queue.push(2)

        expect(queue.peek()).toBe(1)
        expect(queue.pop()).toBe(1)
        expect(queue.empty()).toBe(false)
    })

    it('should work2', () => {
        const queue = new MyQueue()

        queue.push(1)
        expect(queue.pop()).toBe(1)

        queue.push(2)
        expect(queue.peek()).toBe(2)
    })

    it('should work', () => {
        const queue = new MyQueue2()
        queue.push(1)
        queue.push(2)

        expect(queue.peek()).toBe(1)
        expect(queue.pop()).toBe(1)
        expect(queue.empty()).toBe(false)
    })

    it('should work2', () => {
        const queue = new MyQueue2()

        queue.push(1)
        expect(queue.pop()).toBe(1)

        queue.push(2)
        expect(queue.peek()).toBe(2)
    })
})
