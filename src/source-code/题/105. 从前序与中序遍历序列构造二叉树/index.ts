interface TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

interface Order {
    start: number
    end: number
    val: number[]
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    return build({
        preorder: {
            val: preorder,
            start: 0,
            end: preorder.length
        },
        inorder:{
            val:inorder,
            start: 0,
            end: inorder.length
        }
    })
}

function build({
    preorder: { start: preorderStart, end: preorderEnd, val: preorderList },
    inorder: { start: inorderStart, end: inorderEnd, val: inorderList },
}: {
    preorder: Order
    inorder: Order
}): TreeNode {
    if (preorderStart >= preorderEnd || inorderStart >= inorderEnd) {
        return null
    }
    // 前序遍历第一个元素为根节点
    const root = preorderList[preorderStart]
    // 中序遍历位置
    const inorderRootIndex = inorderList.indexOf(root)
    const leftLength = inorderRootIndex - inorderStart

    return {
        val: root,
        left: build({
            preorder: {
                val: preorderList,
                start: preorderStart + 1,
                end: preorderStart + leftLength + 1
            },
            inorder: {
                val: inorderList,
                start: inorderStart,
                end: inorderRootIndex
            }
        }),
        right: build({
            preorder: {
                val: preorderList,
                start: preorderStart + leftLength + 1,
                end: preorderEnd
            },
            inorder: {
                val: inorderList,
                start: inorderRootIndex + 1,
                end: inorderEnd
            }
        })
    }
}
