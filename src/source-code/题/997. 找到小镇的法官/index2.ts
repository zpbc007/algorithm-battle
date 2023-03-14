export function findJudge(n: number, trust: number[][]): number {
    // 编号从 1 开始
    const trustValue: number[] = new Array(n + 1).fill(0)

    for (const [a, b] of trust) {
        // 相信了别人
        trustValue[a]--
        // 被别人相信
        trustValue[b]++
    }

    return trustValue.findIndex((value, index) => index !== 0 && value === n - 1)
}
