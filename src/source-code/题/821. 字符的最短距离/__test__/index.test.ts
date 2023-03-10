import { shortestToChar } from '../index'

describe("821. 字符的最短距离", () => {
    it('input: "loveleetcode" "e" , should output: [3,2,1,0,1,0,0,1,2,2,1,0]', () => {
        expect(shortestToChar("loveleetcode", "e")).toEqual([3,2,1,0,1,0,0,1,2,2,1,0])
    })
})