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
