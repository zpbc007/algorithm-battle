import { getMinAndMax } from "@utils/get-max-min";

export function countingSort(arr: number[]) {
    const { max, min } = getMinAndMax(arr)
    const len = max - min + 1 
    let countArr = new Array(len).fill(0)

    for (let value of arr) {
        countArr[value - min]++
    }

    let arrIndex = 0
    for (let i = 0; i < len; i++) {
        while (countArr[i] > 0) {
            arr[arrIndex++] = i + min
            countArr[i]--
        }
    }

    return arr
}