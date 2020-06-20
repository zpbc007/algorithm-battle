import { RandomizedSet } from '..'

describe('380 常数时间插入、删除和随机获取元素', () => {
    it('test1', () => {
        // 初始化一个空的集合。
        const randomSet = new RandomizedSet()

        // 向集合中插入 1 。返回 true 表示 1 被成功地插入。
        expect(randomSet.insert(1)).toBe(true)

        // 返回 false ，表示集合中不存在 2 。
        expect(randomSet.remove(2)).toBe(false)

        // 向集合中插入 2 。返回 true 。集合现在包含 [1,2] 。
        expect(randomSet.insert(2)).toBe(true)

        // getRandom 应随机返回 1 或 2 。
        expect([1, 2].includes(randomSet.getRandom())).toBe(true)

        // 从集合中移除 1 ，返回 true 。集合现在包含 [2] 。
        expect(randomSet.remove(1)).toBe(true)

        // 2 已在集合中，所以返回 false 。
        expect(randomSet.insert(2)).toBe(false)

        // 由于 2 是集合中唯一的数字，getRandom 总是返回 2 。
        expect(randomSet.getRandom()).toBe(2)
    })

    it('test2', () => {
        // 初始化一个空的集合。
        const randomSet = new RandomizedSet()

        expect(randomSet.insert(0)).toBe(true)
        expect(randomSet.insert(1)).toBe(true)
        expect(randomSet.remove(0)).toBe(true)
        expect(randomSet.insert(2)).toBe(true)
        expect(randomSet.remove(1)).toBe(true)
        expect(randomSet.getRandom()).toBe(2)
    })
})
