/**
 * https://leetcode.com/problems/battleships-in-a-board/
 */
export function countBattleships(board: string[][]): number {
  let result = 0
  const visited: boolean[][] = []
  for (let index = 0; index < board.length; index++) {
    visited.push(new Array(board[0].length).fill(false))
  }

  function visitNode(i: number, j: number, hasBattleship = false): void {
    if (
      i < 0 ||
      j < 0 ||
      i === board.length ||
      j === board[0].length ||
      visited[i][j]
    ) {
      return
    }
    visited[i][j] = true

    if (board[i][j] === 'X') {
      if (!hasBattleship) {
        result++
      }

      visitNode(i + 1, j, true)
      visitNode(i, j + 1, true)
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      visitNode(i, j)
    }
  }

  return result
}
