import { serialize, deserialize } from '../index'
import { TreeNode } from '@utils/tree-node'
import { serialize as serialize2, deserialize as deserialize2 } from '../index.2'
import { serialize as serialize3, deserialize as deserialize3 } from '../index.3'

describe('297. 二叉树的序列化与反序列化', () => {
    it('serialize [1,2,3,null,null,4,5]', () => {
        const result = serialize(
            new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5))),
        )
        expect(result).toEqual(',1,2,3,,,4,5')
    })

    it('deserialize [,1,2,3,,,4,5]', () => {
        const str = ',1,2,3,,,4,5'
        expect(serialize(deserialize(str))).toEqual(str)
    })

    it('deserialize [,1,,2,,3,,4,,5,,6,,7,,8,,9,,10]', () => {
        const str = ',1,,2,,3,,4,,5,,6,,7,,8,,9,,10'
        expect(serialize(deserialize(str))).toEqual(str)
    })

    it('deserialize [,1,,2,,3,,4,,5,,6,,7,,8,,9,,10]', () => {
        const str = '1 _ 2 _ 3 _ 4 _ 5 _ 6 _ 7 _ 8 _ 9 _ 10 _ _'
        expect(serialize2(deserialize2(str))).toEqual(str)
    })

    it('deserialize []', () => {
        const str = ''
        expect(serialize(deserialize(str))).toEqual(str)
    })

    it('serialize [1,2,3,null,null,4,5]', () => {
        const result = serialize3(
            new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5))),
        )
        expect(result).toEqual('1,2,null,null,3,4,null,null,5,null,null')
    })
})
