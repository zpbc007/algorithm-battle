# 394.字符串解码

## 思路

从头开始遍历: 

1. 非右括号直接入栈
2. 遇到右括号后开始出栈
    1. 在遇到第一个左括号前遇到的字符串直接记录下来
    2. 遇到第一个左括号后，开始记录数字，直到遇到第一个非数字的字符
    3. 将当前的字符串重复数字次，并放入栈中
3. 重复以上步骤直到遍历完成，将栈中的元素依次出栈就是我们想要的结果

## 代码

```ts
export function decodeString(s: string) {
    const stack = []

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
            if (!/[0-9]/.test(item)) {
                stack.push(item)
                break
            }
            numStr = `${item}${numStr}`
        } else {
            str = `${item}${str}`
        }
    }

    return str.repeat(Number(numStr))
}
```