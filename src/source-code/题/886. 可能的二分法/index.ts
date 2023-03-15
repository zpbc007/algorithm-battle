enum Color {
    Initial,
    Red,
    Blue,
}

export function possibleBipartition(n: number, dislikes: number[][]): boolean {
    // 存储各个节点的颜色
    const color = new Array<Color>(n + 1).fill(Color.Initial)
    // 图存储节点关系，index 为人的编号 value 为他不喜欢的人
    const graph: number[][] = new Array(n + 1).fill(0).map(() => [])

    const dfs = (currentNode: number, currentColor: Color) => {
        color[currentNode] = currentColor
        const reverseColor = currentColor === Color.Blue ? Color.Red : Color.Blue

        for (const node of graph[currentNode]) {
            // 节点已经染色 & 与当前节点颜色一致
            if (color[node] !== Color.Initial && color[node] === currentColor) {
                return false
            }

            // 节点未染色 & 不能成功染色其他节点
            if (color[node] === Color.Initial && !dfs(node, reverseColor)) {
                return false
            }
        }

        return true
    }

    // 初始化图
    for (const [person1, person2] of dislikes) {
        graph[person1].push(person2)
        graph[person2].push(person1)
    }

    for (let i = 1; i <= n; i++) {
        // 当前节点未染色 & 不能成功染色其他节点
        if (color[i] === Color.Initial && !dfs(i, Color.Blue)) {
            return false
        }
    }

    return true
}
