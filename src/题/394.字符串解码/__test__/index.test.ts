import { decodeString } from '..'
import {decodeString as decodeString2} from '../index.2'

describe('394 字符串解码', () => {
    const inputArr = [
        '3[a]2[bc]',
        '3[a2[c]]',
        '2[abc]3[cd]ef',
        'abc3[cd]xyz',
        '2[2[y]pq4[2[jk]e1[f]]]ef',
        '3[z]2[2[y]pq4[2[jk]e1[f]]]ef',
    ]
    const outputArr = [
        'aaabcbc',
        'accaccacc',
        'abcabccdcdcdef',
        'abccdcdcdxyz',
        'yypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef',
        'zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef',
    ]

    it('should work', () => {
        inputArr.forEach((str, index) => {
            expect(decodeString(str)).toBe(outputArr[index])
        })
    })

    it('should work', () => {
        inputArr.forEach((str, index) => {
            expect(decodeString2(str)).toBe(outputArr[index])
        })
    })
})
