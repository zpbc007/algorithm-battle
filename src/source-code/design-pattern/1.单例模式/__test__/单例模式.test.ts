import { CreateUser } from '../1.透明的单例模式'
import { ProxySingletonCreateUser } from '../2.代理实现的单例模式'
import { getSingle } from '../3.通用的惰性单例'

describe('单例模式', () => {
    it('透明的单例模式', () => {
        const a = new CreateUser('sven1')
        const b = new CreateUser('sven2')

        expect(a).toBe(b)
    })

    it('代理实现的单例模式', () => {
        const a = new ProxySingletonCreateUser('sven1')
        const b = new ProxySingletonCreateUser('sven2')

        expect(a).toBe(b)
    })

    it('通用惰性单例', () => {
        const Person = function(name: string, age: number) {
            this.name = name
            this.age = age

            return this
        }
        const SinglePerson = getSingle(Person)

        const a = new SinglePerson('zhang', 12)
        const b = new SinglePerson('li', 15)

        expect(a).toBe(b)
    })
})
