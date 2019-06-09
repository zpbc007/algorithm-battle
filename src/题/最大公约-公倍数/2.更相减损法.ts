/**
 * 更相减损法 辗转相减法
 */
export function gcd(a: number, b: number, recursive = true) {
    return recursive ? gcd_1(a, b) : gcd_2(a, b)
}

/** 递归实现 */
function gcd_1(a: number, b: number) {
    // 计算差值
    const diff = a - b

    if (diff < 0) {
        return _gcd(a, Math.abs(diff))
    } else if (diff > 0) {
        return _gcd(b, diff)
    } else {
        // 二者相等 自己就是最大公约数
        return a
    }
}

/**
 * 小的数与差值进行比较
 * 如果相等则为最小公倍数
 */
function _gcd(smaller: number, diff: number) {
    if (diff === smaller) {
        return smaller
    } else {
        return gcd(diff, smaller)
    }
}

/** 非递归实现 */
export function gcd_2(a: number, b: number) {
    let [bigger, small, diff] = findSeq(a, b)

    while (diff && small !== diff) {
        ;[bigger, small, diff] = findSeq(small, diff)
    }

    return small
}

function findSeq(a: number, b: number) {
    if (a > b) {
        return [a, b, a - b]
    } else {
        return [b, a, b - a]
    }
}
