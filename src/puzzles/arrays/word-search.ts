/**
 * https://leetcode.com/problems/word-search/
 */
export function exist(board: string[][], word: string): boolean {
  const visited: boolean[][] = []
  const rows = board.length
  const columns = board[0].length

  for (let index = 0; index < rows; index++) {
    visited.push(new Array(columns).fill(false))
  }

  function visitNode(i: number, j: number, length = 0): boolean {
    if (length === word.length) {
      return true
    }

    if (i < 0 || j < 0 || i >= rows || j >= columns || visited[i][j]) {
      return false
    }

    let result = false

    visited[i][j] = true

    if (board[i][j] === word[length]) {
      const newLength = length + 1
      result =
        visitNode(i - 1, j, newLength) ||
        visitNode(i + 1, j, newLength) ||
        visitNode(i, j - 1, newLength) ||
        visitNode(i, j + 1, newLength)
    }

    visited[i][j] = false

    return result
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const result = visitNode(i, j)

      if (result) {
        return true
      }
    }
  }

  return false
}
