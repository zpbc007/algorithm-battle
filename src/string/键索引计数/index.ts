export interface ISortItem {
    groupNo: number
    nameStr: string
}
export function keyIndexSort(sortArr: ISortItem[]) {
    // 记录每个组的组员个数
    // index 为组 no + 1 值为个数
    const count = []
    const result = []

    // 遍历一次记录每组个数
    sortArr.forEach(({ groupNo }) => {
        count[groupNo + 1] ? count[groupNo + 1]++ : (count[groupNo + 1] = 1)
    })

    // 将频率转换为索引
    for (let i = 0, len = count.length; i < len; i++) {
        if (!count[i + 1]) {
            count[i + 1] = 0
        }
        count[i + 1] += count[i] || 0
    }

    // 数据分类
    sortArr.forEach(({ nameStr, groupNo }) => {
        result[count[groupNo]++] = nameStr
    })

    return result
}
