export function decodeString(s: string): string {
    const stack: string[] = []

    for (let c of s) {
        if (c !== ']') {
            stack.push(c)
        } else {
            let tmpStr = ''
            while(true) {
                const stackChar = stack.pop()
                
                if (stackChar !== '[') {
                    tmpStr = stackChar + tmpStr
                } else {
                    let stackNumStr = ''

                    while(true) {
                        const stackNumChar = stack.pop()
                        const stackNum = Number(stackNumChar)

                        // 取出的是数字，添加到数字字符串中
                        if (!Number.isNaN(stackNum)) {
                            stackNumStr = stackNumChar + stackNumStr
                        } else { // 不是数字，说明数字到头了，把多取出来的再放回去
                            stack.push(stackNumChar!)
                            stack.push(tmpStr.repeat(Number(stackNumStr)))

                            break
                        }

                        // stack 已经空了，开始计算
                        if (stack.length === 0) {
                            stack.push(tmpStr.repeat(Number(stackNumStr)))

                            break
                        }
                    }

                    break
                }

            }
        }
    }

    return stack.join('')
};
