export function numberOfBoomerangs(points: number[][]): number {
    let result = 0
    for (let point1 of points) {
        const distanceMap = new Map<number, number>()

        // 同一个点也会被 set 进去，但 size === 1，不影响结果
        for (let point2 of points) {
            const distance = Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2)
            distanceMap.set(distance, (distanceMap.get(distance) || 0) + 1)
        }

        for (const [_, size] of distanceMap) {
            result += size * (size - 1)
        }
    }

    return result
}
