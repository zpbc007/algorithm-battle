import { TreeNode } from '@utils/tree-node'

export function sumNumbers(root: TreeNode | null): number {
    if (!root) {
        return 0
    }

    const numberArr = sumNumbersWithArr(root)

    return numberArr.reduce((result, numberArr) => {
        return result + Number(numberArr.join(''))
    }, 0)
}

export function sumNumbers2(root: TreeNode | null): number {
    return dfs(root, 0)
}

function dfs(root: TreeNode | null, sum: number): number {
    // 空节点不进位
    if (!root) {
        return 0
    }

    // sum * 10 相当于之前的节点进位了
    const currentSum = sum * 10 + root.val
    // 叶子节点
    if (!root.left && !root.right) {
        return currentSum
    }

    return dfs(root.left, currentSum) + dfs(root.right, currentSum)
}

function sumNumbersWithArr(root: TreeNode, numberArr: number[][] = [[]]): number[][] {
    // 添加当前节点
    numberArr[numberArr.length - 1].push(root.val)

    // 没有子节点了
    if (!root.left && !root.right) {
        return numberArr
    }

    // 左右都存在
    if (root.left && root.right) {
        const currentNum = numberArr[numberArr.length - 1]
        const rightNum = [...currentNum]
        sumNumbersWithArr(root.left, numberArr)

        // 右侧构建新的数字
        numberArr.push(rightNum)
        sumNumbersWithArr(root.right, numberArr)

        return numberArr
    }

    // 只有一个子节点
    return sumNumbersWithArr(root.left! || root.right!, numberArr)
}
