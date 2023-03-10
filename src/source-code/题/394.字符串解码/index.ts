export function decodeString(s: string) {
    const stack: string[] = []

    for (const item of s) {
        if (item === ']') { // 出栈
            stack.push(getStrAndNumBefore(stack))
        } else { // 入栈
            stack.push(item)
        }
    }

    return stack.reduceRight((result, str) => str + result, '')
}

function getStrAndNumBefore(stack: string[]) {
    let str = ''
    let numStr = ''
    let recordNum = false

    while (stack.length > 0) {
        const item = stack.pop()

        // 开始记录数字
        if (!recordNum && item === '[') {
            recordNum = true
            continue
        }

        if (recordNum) {
            // 遇到非数字
            if (!/[0-9]/.test(item!)) {
                stack.push(item!)
                break
            }
            numStr = `${item}${numStr}`
        } else {
            str = `${item}${str}`
        }
    }

    return str.repeat(Number(numStr))
}
