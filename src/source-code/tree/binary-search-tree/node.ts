export class Node<T, V> {
    // 根据 key 来进行比较排序
    key: T
    // 此节点存储的值
    val: V
    // 左侧节点
    left: Node<T, V>
    // 右侧节点
    right: Node<T, V>
    // 当前节点子树节点数量（包括自己）
    count: number
    constructor({ key, val, count }: { key: T; val: V; count: number }) {
        this.key = key
        this.val = val
        this.count = count
    }
}
