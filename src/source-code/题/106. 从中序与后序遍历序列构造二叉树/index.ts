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

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    return build({
        inorder: {
            val: inorder,
            start: 0,
            end: inorder.length
        },
        postorder: {
            val: postorder,
            start: 0,
            end: postorder.length
        }
    })
}

function build({
    inorder: { start: inorderStart, end: inorderEnd, val: inorderList },
    postorder: { start: postorderStart, end: postorderEnd, val: postorderList },
}: {
    inorder: Order
    postorder: Order
}): TreeNode {
    if (inorderStart >= inorderEnd || postorderStart >= postorderEnd) {
        return null
    }

    // 后续遍历最后一个元素为根节点
    const root = postorderList[postorderEnd - 1]
    const inorderRootIndex = inorderList.indexOf(root)
    const leftLength = inorderRootIndex - inorderStart

    return {
        val: root,
        left: build({
            inorder: {
                val: inorderList,
                start: inorderStart,
                end: inorderRootIndex
            },
            postorder: {
                val: postorderList,
                start: postorderStart,
                end: postorderStart + leftLength
            }
        }),
        right: build({
            inorder: {
                val: inorderList,
                start: inorderRootIndex + 1,
                end: inorderEnd
            },
            postorder: {
                val: postorderList,
                start: postorderStart + leftLength,
                end: postorderEnd - 1
            }
        })
    }
}
