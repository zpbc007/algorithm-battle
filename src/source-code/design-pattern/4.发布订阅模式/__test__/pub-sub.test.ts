import { PubSub } from '../pub-sub'

describe('pub sub', () => {
    let event: PubSub
    beforeEach(() => {
        event = new PubSub()
    })

    it('should listen and trigger', () => {
        const eventName = 'event'
        const fn = jest.fn()
        event.listen(eventName, fn)
        event.trigger(eventName)

        expect(fn.mock.calls.length).toBe(1)
    })

    it('should pass args', () => {
        const eventName = 'event'
        const args = [1, 2, 3]
        const fn = jest.fn()
        event.listen(eventName, fn)
        event.trigger(eventName, ...args)

        expect(fn.mock.calls.length).toBe(1)
        expect(fn.mock.calls[0]).toEqual(args)
    })

    it('should trigger target event', () => {
        const event1 = 'event1'
        const event2 = 'event2'
        const arg1 = [1, 2, 3]
        const arg2 = ['a', 'b', 'c']
        const listener1 = jest.fn()
        const listener2 = jest.fn()

        // 监听
        event.listen(event1, listener1)
        event.listen(event2, listener2)

        // 触发
        event.trigger(event1, ...arg1)
        event.trigger(event2, ...arg2)

        // 各自被调用一次
        expect(listener1.mock.calls.length).toBe(1)
        expect(listener2.mock.calls.length).toBe(1)

        // 各自传递的参数
        expect(listener1.mock.calls[0]).toEqual(arg1)
        expect(listener2.mock.calls[0]).toEqual(arg2)
    })

    it('should remove target event listener', () => {
        const eventName = 'event'
        const listener1 = jest.fn()
        const listener2 = jest.fn()

        // 监听
        event.listen(eventName, listener1)
        event.listen(eventName, listener2)
        // 触发
        event.trigger(eventName)
        // 删除
        event.remove(eventName, listener1)
        // 再触发
        event.trigger(eventName)

        expect(listener1.mock.calls.length).toBe(1)
        expect(listener2.mock.calls.length).toBe(2)
    })

    it('should remove all event', () => {
        const eventName = 'event'
        const listener1 = jest.fn()
        const listener2 = jest.fn()

        // 监听
        event.listen(eventName, listener1)
        event.listen(eventName, listener2)
        // 触发
        event.trigger(eventName)
        // 删除
        event.remove(eventName)
        // 再触发
        event.trigger(eventName)

        expect(listener1.mock.calls.length).toBe(1)
        expect(listener2.mock.calls.length).toBe(1)
    })
})
