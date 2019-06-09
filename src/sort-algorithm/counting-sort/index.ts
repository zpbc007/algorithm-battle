import { getMinAndMax } from 'src/utils/get-max-min'

/**
 * 计数排序 计数数组下标 表示对应的数据值 计数数组的值 表示该下标对应的值有几个
 * 1. 根据数据中的数据范围确定计数数组的长度: max - min + 1
 * 2. 用0填充计数数组
 * 3. 遍历原始数据，在自己的位置进行加一操作
 * 4. 遍历计数数组，进行还原
 */
export function countingSort(arr: number[]) {
    // 获取最大最小值
    const { min, max } = getMinAndMax(arr)
    // 数组长度
    const len = max - min + 1
    // 用0填充数组
    const countArr = Array(len).fill(0)
    // 遍历待排序数组，在自己的位置上标记
    for (const value of arr) {
        countArr[value - min]++
    }

    // 还原
    let arrIndex = 0
    for (let i = 0; i < countArr.length; i++) {
        while (countArr[i] > 0) {
            arr[arrIndex++] = i + min
            countArr[i]--
        }
    }

    return arr
}
