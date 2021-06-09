/**
 * 
 * @param n 棋盘大小
 * @param row 当前行
 * @param board 当前已经放置的结果
 * @param result 最终结果
 * @returns 
 */
export function solveNQueens(
    n: number, 
    row: number = 0, 
    board: string[][] = new Array(n).fill('').map(() => new Array(n).fill('.')), 
    result: string[][] = []
): string[][] {
    // 最后一行
    if (n === row) {
        result.push(board.map(item => item.join('')))
        return result
    }

    // 遍历当前行的所有列
    for (let col = 0; col < n; col++) {
        if (!isValid(board, row, col)) {
            continue
        }

        // 做出选择
        board[row][col] = 'Q'
        // 同行不能冲突
        solveNQueens(n, row + 1, board, result)
        // 撤销
        board[row][col] = '.'
    }

    return result
};

// 当前位置是否可以放置
function isValid(board: string[][], row: number, col: number) {
    // 列不能冲突
    const colConflict = board.findIndex(item => item[col] === 'Q') !== -1      
    
    if (colConflict) {
        return false
    }

    // 左上不能冲突
    for (let checkRow = row - 1, checkCol = col -1; checkRow >=0 && checkCol >=0; checkCol--, checkRow--) {
        if (board[checkRow][checkCol] === 'Q') {
            return false
        }
    }


    // 右上不能冲突
    for (let checkRow = row - 1, checkCol = col + 1; checkRow >=0 && checkCol >=0; checkCol++, checkRow--) {
        if (board[checkRow][checkCol] === 'Q') {
            return false
        }
    }

    return true
}