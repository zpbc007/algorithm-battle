interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
    return buildTree(nums, 0, nums.length);
}

function buildTree(nums: number[], start: number, end: number) {
    if (start >= end) {
        return null
    }

    const curMaxIndex = maxIndex(nums, start, end)
    const root: TreeNode = {
        val: nums[curMaxIndex],
        left: buildTree(nums, start, curMaxIndex),
        right: buildTree(nums, curMaxIndex+ 1, end)
    }

    return root
}

/** 找到 start 与 end 间最大数的 index */
function maxIndex(nums: number[], start: number, end: number) {
    let maxIndex = start
    let curIndex = start + 1

    while(curIndex < end) {
        if (nums[curIndex] > nums[maxIndex]) {
            maxIndex = curIndex
        }

        curIndex++
    }

    return maxIndex
}