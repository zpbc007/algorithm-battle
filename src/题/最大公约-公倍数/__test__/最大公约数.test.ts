import { gcd } from '../1.欧几里得'
import { gcd as gcd_diff } from '../2.更相减损法'
import { steinGcd } from '../3.stein'

describe('最大公约数', () => {
    it('欧几里得 递归实现 互为倍数', () => {
        expect(gcd(20, 5, true)).toBe(5)
        expect(gcd(5, 20, true)).toBe(5)
    })

    it('欧几里得 递归实现', () => {
        expect(gcd(154, 84, true)).toBe(14)
        expect(gcd(7, 13, true)).toBe(1)
    })

    it('欧几里得 非递归实现 互为倍数', () => {
        expect(gcd(20, 5, false)).toBe(5)
        expect(gcd(5, 20, false)).toBe(5)
    })

    it('欧几里得 非递归实现', () => {
        expect(gcd(154, 84, false)).toBe(14)
        expect(gcd(7, 13, false)).toBe(1)
    })

    it('更相减损法 递归实现 互为倍数', () => {
        expect(gcd_diff(20, 5, true)).toBe(5)
        expect(gcd_diff(5, 20, true)).toBe(5)
    })

    it('更相减损法 递归实现', () => {
        expect(gcd_diff(154, 84, true)).toBe(14)
        expect(gcd_diff(7, 13, true)).toBe(1)
    })

    it('更相减损法 非递归实现 递归实现 互为倍数', () => {
        expect(gcd_diff(20, 5, false)).toBe(5)
        expect(gcd_diff(5, 20, false)).toBe(5)
    })

    it('更相减损法 非递归实现 递归实现', () => {
        expect(gcd_diff(154, 84, false)).toBe(14)
        expect(gcd_diff(7, 13, false)).toBe(1)
    })

    it('steinGcd 递归实现 互为倍数', () => {
        expect(steinGcd(20, 5, true)).toBe(5)
        expect(steinGcd(5, 20, true)).toBe(5)
    })

    it('steinGcd 递归实现', () => {
        expect(steinGcd(154, 84, true)).toBe(14)
        expect(steinGcd(7, 13, true)).toBe(1)
    })

    it('steinGcd 非递归实现 互为倍数', () => {
        expect(steinGcd(20, 5, false)).toBe(5)
        expect(steinGcd(5, 20, false)).toBe(5)
    })

    it('steinGcd 非递归实现', () => {
        expect(steinGcd(154, 84, false)).toBe(14)
        expect(steinGcd(7, 13, false)).toBe(1)
    })
})
