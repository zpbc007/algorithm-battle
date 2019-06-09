/**
 * 欧几里得求最大公约数
 */
export function gcd(a: number, b: number, recursive = true) {
    const func = recursive ? _gcd : __gcd
    if (a > b) {
        return func(a, b)
    }

    return func(b, a)
}

/**
 * 递归实现
 */
function _gcd(a: number, b: number) {
    if (b === 0) {
        return a
    }

    return _gcd(b, a % b)
}

/**
 * 非递归实现
 */
function __gcd(a: number, b: number) {
    while (b !== 0) {
        const temp = a
        a = b
        b = temp % b
    }

    return a
}
