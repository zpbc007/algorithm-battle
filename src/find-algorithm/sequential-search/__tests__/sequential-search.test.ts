import { SequentialSearchST } from '..'

describe('sequential search', () => {
    const str = 'SEARCHEXAMPLE'
    const keyArr = ['L', 'P', 'M', 'X', 'H', 'C', 'R', 'A', 'E', 'S']
    const valArr = [11, 10, 9, 7, 5, 4, 3, 8, 12, 0]
    const st = new SequentialSearchST<number>()
    for (let i = 0; i < str.length; i++) {
        st.put(str[i], i)
    }

    it('get should work', () => {
        let index = 0
        for (const { key, val } of st) {
            expect(key).toBe(keyArr[index])
            expect(val).toBe(valArr[index])
            index++
        }
    })

    it('keys should work', () => {
        expect(st.keys()).toStrictEqual(keyArr)
    })

    it('size should work', () => {
        expect(st.size()).toBe(keyArr.length)
    })

    it('delete should work', () => {
        const delST = new SequentialSearchST<number>()
        for (let i = 0; i < str.length; i++) {
            delST.put(str[i], i)
        }

        delST.delete('L')
        const [_, ...rmFirst] = keyArr
        expect(delST.keys()).toStrictEqual(rmFirst)

        delST.delete('S')
        rmFirst.pop()
        expect(delST.keys()).toStrictEqual(rmFirst)

        delST.delete('H')
        expect(delST.keys()).toStrictEqual(rmFirst.filter((key) => key !== 'H'))
    })
})
