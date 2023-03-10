import { findSubstring } from '../index'

describe('30. 串联所有单词的子串', () => {
    it('input: s = "barfoothefoobarman", words = ["foo","bar"], output: [0,9]', () => {
        expect(findSubstring('barfoothefoobarman', ['foo', 'bar'])).toEqual([0, 9])
    })

    it('input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","good"], output: [8]', () => {
        expect(findSubstring('wordgoodgoodgoodbestword', ["word","good","best","good"])).toEqual([8])
    })
})
