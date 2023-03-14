export function findJudge(n: number, trust: number[][]): number {
    if (n == 1) {
        return trust.length === 0 ? 1 : -1
    }

    const { trustMap, trustOtherSet } = trust.reduce<{
        // 一个人被相信的次数
        trustMap: Map<number, number>
        // 相信其他人的人
        trustOtherSet: number[]
    }>(
        (acc, [someone, trustSomebody]) => {
            if (!acc.trustMap.has(trustSomebody)) {
                acc.trustMap.set(trustSomebody, 0)
            }

            // 被人相信，数量 + 1
            acc.trustMap.set(trustSomebody, (acc.trustMap.get(trustSomebody) || 0) + 1)
            // 相信其他人，不能是法官
            acc.trustOtherSet.push(someone)

            return acc
        },
        {
            trustMap: new Map(),
            trustOtherSet: [],
        },
    )

    const maybeJudges = Array.from(trustMap.keys())
        // 被所有人相信
        .filter((key) => trustMap.get(key) === n - 1)
        // 不能相信其他人
        .filter((key) => !trustOtherSet.includes(key))

    if (maybeJudges.length !== 1) {
        return -1
    }

    return maybeJudges[0]
}
