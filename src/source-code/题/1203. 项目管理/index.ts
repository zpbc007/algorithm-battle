export function sortItems(
    n: number,
    m: number,
    group: number[],
    beforeItems: number[][],
): number[] {
    // 把 groupId 为 -1 的项目，标记为不同的 group
    group.forEach((groupId, index) => {
        if (groupId === -1) {
            group[index] = m++
        }
    })

    // 初始化 group 和 item 的图
    const groupGraph: number[][] = []
    for (let i = 0; i < m; i++) {
        groupGraph[i] = []
    }

    const itemGraph: number[][] = []
    for (let i = 0; i < n; i++) {
        itemGraph[i] = []
    }

    // 建图 & 计算入度
    const groupsIndegree: number[] = new Array(m).fill(0)
    const itemsIndegree: number[] = new Array(n).fill(0)
    for (let i = 0; i < group.length; i++) {
        const currentGroup = group[i]

        for (const beforeItem of beforeItems[i]) {
            const beforeGroup = group[beforeItem]

            if (beforeGroup !== currentGroup) {
                groupGraph[beforeGroup].push(currentGroup)
                groupsIndegree[currentGroup]++
            }
        }
    }

    beforeItems.forEach((beforeItem, i) => {
        beforeItem.forEach((item) => {
            itemGraph[item].push(i)
            itemsIndegree[i]++
        })
    })

    const groupList = topologicalSort(groupGraph, groupsIndegree)
    if (!groupList) {
        return []
    }

    const itemList = topologicalSort(itemGraph, itemsIndegree)
    if (!itemList) {
        return []
    }

    // 建立 group 与 item 的关系
    const group2Item = new Map<number, number[]>()
    // 每个 group 的 item 列表都满足拓扑排序
    itemList.forEach((itemId) => {
        const groupId = group[itemId]
        if (!group2Item.has(groupId)) {
            group2Item.set(groupId, [])
        }
        group2Item.get(groupId)!.push(itemId)
    })

    // 按 group 的拓扑排序输出结果
    return groupList.reduce<number[]>((result, groupId) => {
        // 某个 group 可能没有任何 item，所以这里要有默认值
        return result.concat(group2Item.get(groupId) || [])
    }, [])
}

function topologicalSort(graph: number[][], indegree: number[]): null | number[] {
    const queue: number[] = []
    const result: number[] = []

    // 入度为 0 的节点放入队列
    for (let i = 0; i < indegree.length; i++) {
        if (indegree[i] === 0) {
            queue.push(i)
        }
    }

    while (queue.length) {
        const node = queue.shift()!
        result.push(node)

        for (let nextNode of graph[node]) {
            indegree[nextNode]--
            if (indegree[nextNode] === 0) {
                queue.push(nextNode)
            }
        }
    }

    if (result.length !== indegree.length) {
        return null
    }

    return result
}
