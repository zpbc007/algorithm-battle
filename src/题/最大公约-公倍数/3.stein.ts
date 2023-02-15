export function steinGcd(a: number, b: number, recursive = true) {
    return recursive ? steinGcd_1(a, b) : steinGcd_2(a, b)
}

/** 递归实现 */
function steinGcd_1(a: number, b: number, c: number = 1): number {
    if (a === b) {
        return a * c
    }

    if (a === 0) {
        return b * c
    }

    if (b === 0) {
        return a * c
    }

    const evenA = !(a & 1)
    const evenB = !(b & 1)
    // 二者都为偶数
    if (evenA && evenB) {
        return steinGcd_1(a >> 1, b >> 1, c * 2)
        // A为偶数
    } else if (evenA) {
        return steinGcd_1(a >> 1, b, c)
        // B为偶数
    } else if (evenB) {
        return steinGcd_1(b >> 1, a, c)
        // 都是奇数
    } else {
        if (a > b) {
            return steinGcd_1(a - b, b, c)
        } else {
            return steinGcd_1(b - a, a, c)
        }
    }
}

/** 非递归实现 */
function steinGcd_2(a: number, b: number): number {
    let c = 1

    // a b 不相等且没有为0的
    while (a && b && a - b) {
        const evenA = !(a & 1)
        const evenB = !(b & 1)
        // 二者都为偶数
        if (evenA && evenB) {
            a = a >> 1
            b = b >> 1
            c = c * 2
            // A为偶数
        } else if (evenA) {
            a = a >> 1
            // B为偶数
        } else if (evenB) {
            b = b >> 1
            // 都是奇数
        } else {
            if (a > b) {
                a = a - b
            } else {
                const temp = a
                a = b - a
                b = temp
            }
        }
    }

    if (a === b) {
        return a * c
    }

    if (a === 0) {
        return b * c
    }

    if (b === 0) {
        return a * c
    }

    return 0
}
