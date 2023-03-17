import { judgeCircle } from '../index'

describe('657. 机器人能否返回原点', () => {
    it('input: "UD", output: true', () => {
        expect(judgeCircle('UD')).toBe(true)
    })
})
