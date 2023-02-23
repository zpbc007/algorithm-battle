import { ITreeNode } from './type'

/** 前序遍历 */
export function frontDfs(root: ITreeNode | null, cb: (node: ITreeNode) => void) {
    if (!root) {
        return
    }

    cb(root)
    frontDfs(root.left, cb)
    frontDfs(root.right, cb)
}

export function frontBfs(root: ITreeNode | null, cb: (node: ITreeNode | null) => void) {
    if (!root) {
        return
    }

    cb(root)
    _frontBfs(root, cb)
}

function _frontBfs(root: ITreeNode | null, cb: (node: ITreeNode | null) => void) {
    if (!root || (!root.left && !root.right)) {
        return
    }

    cb(root.left)
    cb(root.right)

    _frontBfs(root.left, cb)
    _frontBfs(root.right, cb)
}
