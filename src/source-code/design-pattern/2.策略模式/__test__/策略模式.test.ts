import { Bonus, PerformanceA, PerformanceS } from '../1.模拟类的策略模式'
import { calculateBonus } from '../2.js版本的策略模式'

describe('策略模式', () => {
    it('模拟类', () => {
        const bonus = new Bonus(1000, new PerformanceS())

        expect(bonus.getBonus()).toBe(4000)

        bonus.setStrategy(new PerformanceA())
        expect(bonus.getBonus()).toBe(3000)
    })

    it('js版', () => {
        expect(calculateBonus('S', 1000)).toBe(4000)
        expect(calculateBonus('A', 1000)).toBe(3000)
    })
})
