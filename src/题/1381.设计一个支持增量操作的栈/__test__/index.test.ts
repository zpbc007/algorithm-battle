import { CustomStack } from '..'
import { CustomStack2 } from '../index.2'
import { ICustomStack } from '../index.type'

describe('1381.设计一个支持增量操作的栈', () => {
    const test = (Stack: ICustomStack) => {
        const stack = new Stack(3)
        stack.push(1)
        stack.push(2)
        expect(stack.pop()).toBe(2)
        stack.push(2)
        stack.push(3)
        stack.push(4)
        stack.increment(5, 100)
        stack.increment(2, 100)
        expect(stack.pop()).toBe(103)
        expect(stack.pop()).toBe(202)
        expect(stack.pop()).toBe(201)
        expect(stack.pop()).toBe(-1)
    }

    const test2 = (Stack: ICustomStack) => {
        const stack = new Stack(30)
        stack.pop()
        stack.increment(3, 40)
        stack.push(30)
        stack.increment(4, 63)
        stack.increment(2, 79)
        stack.increment(5, 57)
        expect(stack.pop()).toBe(229)
    }

    it('increment 复杂度为O(k)', () => {
        test(CustomStack)
        test2(CustomStack)
    })

    it('increment 复杂度为O(1)', () => {
        test(CustomStack2)
        test2(CustomStack2)
    })
})
