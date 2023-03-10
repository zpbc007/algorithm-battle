# 380 常数时间插入、删除和随机获取元素

## 思路

看到随机获取元素，即可以通过下标进行随机访问，那一定是数组。虽然数组的插入也能满足 O(1)，但删除不可以。因此使用一个 map 保存每个元素的位置，使得删除时能够直接找到元素的对应位置，通过交换数组中最后一个元素与被删除位置的元素，达到不需要对其他元素进行移动的目的。

## 代码

```ts
export class RandomizedSet {
    dataContainer: number[] = []
    indexTable: { [key: number]: number } = {}

    insert(val: number) {
        if (this.indexTable.hasOwnProperty(val)) {
            return false
        }

        const len = this.dataContainer.push(val)
        this.indexTable[val] = len - 1

        return true
    }

    remove(val: number) {
        if (!this.indexTable.hasOwnProperty(val)) {
            return false
        }

        const targetIndex = this.indexTable[val]
        const lastIndex = this.dataContainer.length - 1
        const lastVal = this.dataContainer[lastIndex]

        if (targetIndex !== lastVal) {
            this.dataContainer[targetIndex] = lastVal
            this.indexTable[lastVal] = targetIndex
        }

        // 删除 map 里的索引
        delete this.indexTable[val]
        // 删除元素
        this.dataContainer.length = this.dataContainer.length - 1

        return true
    }

    getRandom() {
        const randomIndex = Math.floor(Math.random() * this.dataContainer.length)

        return this.dataContainer[randomIndex]
    }
}
```