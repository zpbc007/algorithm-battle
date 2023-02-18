export function addToArrayForm(num: number[], k: number): number[] {
    const num2 = convertNum2Array(k)

    let long: number[]
    let short: number[]

    if (num.length > num2.length) {
        long = num
        short = num2
    } else {
        long = num2
        short = num
    }

    console.log('short: ', short)
    console.log('long: ', long)
    
    let {result, addOne } = short.reduceRight<{result: number[], addOne: boolean}>(({result, addOne}, item, index) => {
        const realIndex = short.length - index - 1
        const curItem = item + getArrayIndexNum(long, realIndex) + (addOne ? 1 : 0)
        const curAddOne = curItem >= 10 

        result.unshift(curAddOne ? curItem - 10 : curItem)

        return {
            result,
            addOne: curAddOne
        }
    }, {
        result: [],
        addOne: false
    })

    console.log('temp: ', result, addOne)

    if (short.length !== long.length) {
        let index = long.length - short.length - 1
        while(index >= 0) {
            const curVal = long[index] + (addOne ? 1 : 0)
            console.warn(`${index} curVal: ${curVal}`)
            addOne = curVal >= 10
            result.unshift(addOne ? curVal - 10 : curVal)
            index--
        }
    }

    if (addOne) {
        result.unshift(1)
    }

    return result
};

function convertNum2Array(num: number): number[] {
    return `${num}`.split('').map(val => Number(val))
}

function getArrayIndexNum(arr: number[], numIndex: number) {
    return arr[arr.length - numIndex - 1]
}