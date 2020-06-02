/**
 * @param {number[]} digits
 * @return {number[]}
 */
export function plusOne(digits: number[]) {
    let carry = 1
    const result = []

    // 从后向前遍历
    for (let i = digits.length - 1; i >= 0; i--) {
        let current = digits[i] + carry

        // 大于10进位
        if (current >= 10) {
            current = current - 10
            carry = 1
        } else {
            carry = 0
        }

        // 插入新的数字
        result.unshift(current)
    }

    // 进位
    if (carry) {
        result.unshift(1)
    }

    return result
}

export const reducePlusOne = (digits: number[]) => {
    const { result: tempResult, carry: leftCarry } = digits.reduceRight<{
        result: number[]
        carry: number
    }>(
        ({ result, carry }, current) => {
            current = current + carry
            if (current >= 10) {
                current = current - 10
                carry = 1
            } else {
                carry = 0
            }

            return {
                result: [current, ...result],
                carry,
            }
        },
        {
            result: [],
            carry: 1,
        },
    )

    if (leftCarry) {
        return [leftCarry, ...tempResult]
    } else {
        return tempResult
    }
}
