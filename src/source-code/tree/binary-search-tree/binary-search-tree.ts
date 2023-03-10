import { Node } from './node'

type ICompare<T> = (a: T, b: T) => 0 | 1 | -1

export class BinarySearchTree<T = string, V = number> {
    private root: Node<T, V>
    constructor(private readonly compare: ICompare<T>) {}
    public size() {
        return this.nodeSize(this.root)
    }

    get(key: T) {
        return this.getNodeByKey(this.root, key)
    }

    put(key: T, val: V) {
        this.root = this.putNode(this.root, key, val)
    }

    putNode(node: Node<T, V>, key: T, val: V) {
        if (node == null) {
            return new Node({
                key,
                val,
                count: 1,
            })
        }
        const compareResult = this.compare(key, node.key)
        if (compareResult === 0) {
            node.val = val
        } else if (compareResult < 0) {
            node.left = this.putNode(node.left, key, val)
        } else {
            node.right = this.putNode(node.right, key, val)
        }
        node.count = node.right.count + node.left.count + 1

        return node
    }

    private nodeSize(node: Node<T, V>) {
        if (!node) {
            return 0
        }

        return node.count
    }

    private getNodeByKey(node: Node<T, V>, key: T) {
        if (!node) {
            return null
        }
        const { key: curKey } = node
        const compareResult = this.compare(key, curKey)

        if (compareResult === 0) {
            return node
        } else if (compareResult < 0) {
            return this.getNodeByKey(node.left, key)
        } else {
            return this.getNodeByKey(node.right, key)
        }
    }
}
