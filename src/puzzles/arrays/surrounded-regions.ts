/**
 * https://leetcode.com/problems/surrounded-regions/
 */

/**
 Do not return anything, modify board in-place instead.
 */
export function solve(board: string[][]): void {
  const rows = board.length
  const columns = board[0].length

  function markRegion(i: number, j: number): void {
    if (i < 0 || i >= rows || j < 0 || j >= columns) {
      return
    }

    if (board[i][j] !== 'O') {
      return
    }

    board[i][j] = '2'

    markRegion(i - 1, j)
    markRegion(i + 1, j)
    markRegion(i, j - 1)
    markRegion(i, j + 1)
  }

  for (let index = 0; index < columns; index++) {
    markRegion(0, index)
    markRegion(rows - 1, index)
  }

  for (let index = 1; index < rows - 1; index++) {
    markRegion(index, 0)
    markRegion(index, columns - 1)
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      }

      if (board[i][j] === '2') {
        board[i][j] = 'O'
      }
    }
  }
}
