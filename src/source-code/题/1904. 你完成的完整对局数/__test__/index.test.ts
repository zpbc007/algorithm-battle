import { numberOfRounds } from '../index'

describe('1904. 你完成的完整对局数', () => {
    it('input: startTime = "12:01", finishTime = "12:44", output: 1', () => {
        expect(numberOfRounds('12:01', '12:44')).toBe(1)
    })

    it('input: startTime = "20:00", finishTime = "06:00", output: 40', () => {
        expect(numberOfRounds('20:00', '06:00')).toBe(40)
    })

    it('input: startTime = "00:00", finishTime = "23:59", output: 95', () => {
        expect(numberOfRounds('00:00', '23:59')).toBe(95)
    })

    it('input: startTime = "00:47", finishTime = "00:57", output: 0', () => {
        expect(numberOfRounds('00:47', '00:57')).toBe(0)
    })

    it('input: startTime = "00:45", finishTime = "01:15", output: 2', () => {
        expect(numberOfRounds('00:45', '01:15')).toBe(2)
    })

    it('input: startTime = "09:31", finishTime = "10:14", output: 1', () => {
        expect(numberOfRounds('09:31', '10:14')).toBe(1)
    })

    it('input: startTime = "00:01", finishTime = "00:00", output: 95', () => {
        expect(numberOfRounds('00:01', '00:00')).toBe(95)
    })

    it('input: startTime = "18:51", finishTime = "04:54", output: 39', () => {
        expect(numberOfRounds('18:51', '04:54')).toBe(39)
    })

    it('input: startTime = "00:51", finishTime = "00:54", output: 39', () => {
        expect(numberOfRounds('18:51', '04:54')).toBe(39)
    })
})