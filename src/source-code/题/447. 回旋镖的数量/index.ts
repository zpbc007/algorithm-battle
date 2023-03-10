export function numberOfBoomerangs(points: number[][]): number {
    const distanceMap = new Map<number, Record<number, number[]>>()
    const computeDistance = createDistanceCalculator()

    // 计算每个点之间的距离
    for (let i = 0; i < points.length; i++) {
        const point1 = points[i]
        const point1DistanceMap = distanceMap.get(i) || {}
        for (let j = i + 1; j < points.length; j++) {
            const point2 = points[j]
            const point2DistanceMap = distanceMap.get(j) || {}

            // 计算距离
            const distance = computeDistance(point1, point2)
            // 记录 i-j
            if (!point1DistanceMap[distance]) {
                point1DistanceMap[distance] = []
            }
            point1DistanceMap[distance].push(j)

            // 记录 j-i
            if (!point2DistanceMap[distance]) {
                point2DistanceMap[distance] = []
            }
            point2DistanceMap[distance].push(i)

            distanceMap.set(j, point2DistanceMap)
        }

        distanceMap.set(i, point1DistanceMap)
    }

    // 找出所有可能
    return Array.from(distanceMap.keys()).reduce((count, pointIndex) => {
        const pointDistanceMap = distanceMap.get(pointIndex)!

        Object.keys(pointDistanceMap).forEach((distance) => {
            const nodes = pointDistanceMap[(distance as unknown) as number]
            // 两个及以上的节点才能满足条件 A(n, 2)
            if (nodes.length > 1) {
                count += nodes.length * (nodes.length - 1)
            }
        })

        return count
    }, 0)
}

function createDistanceCalculator() {
    const cache = new Map<string, number>()
    const stringifyNode = (point1: number[], point2: number[]) =>
        `${Math.abs(point1[0] - point2[0])}-${Math.abs(point1[1] - point2[1])}`
    const log = (point1: number[], point2: number[], distance: number) => {
        const cacheKey = stringifyNode(point1, point2)
        cache.set(cacheKey, distance)
    }
    const calcFromCache = (point1: number[], point2: number[]) => {
        const cacheKey = stringifyNode(point1, point2)

        return cache.get(cacheKey) || null
    }

    return (point1: number[], point2: number[]) => {
        // 从缓存取值
        const cachedDistance = calcFromCache(point1, point2)
        if (cachedDistance !== null) {
            return cachedDistance
        }

        // 不计算开方
        const distance = Math.pow(point1[0] - point2[0], 2) + Math.pow(point1[1] - point2[1], 2)
        log(point1, point2, distance)
        return distance
    }
}
