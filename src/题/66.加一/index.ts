/**
 * @param {number[]} digits
 * @return {number[]}
 */
export function plusOne(digits: number[]) {
    let temp = 1
    const result = []
    for (let i = digits.length - 1; i >= 0; i--) {
        let current = digits[i] + temp
        temp = 0
        if (current >= 10) {
            current = current - 10
            temp = 1
        }
        result.unshift(current)
    }
    if (temp) {
        result.unshift(1)
    }

    return result
}
