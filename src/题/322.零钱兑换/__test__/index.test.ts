import { coinChange } from '../recurtion'

describe('322. 零钱兑换', () => {
    it('coins = [1, 2, 5], amount = 11', () => {
        expect(coinChange([1,2,5], 11)).toBe(3)
    })

    it('coins = [2], amount = 3', () => {
        expect(coinChange([2], 3)).toBe(-1)
    })

    it('coins = [1], amount = 0', () => {
        expect(coinChange([1], 0)).toBe(0)
    })

    it('coins = [1], amount = 1', () => {
        expect(coinChange([1], 1)).toBe(1)
    })

    it('coins = [1], amount = 2', () => {
        expect(coinChange([1], 2)).toBe(2)
    })

    it('coins = [1,2,5], amount = 20', () => {
        expect(coinChange([1,2,5], 20)).toBe(4)
    })
})