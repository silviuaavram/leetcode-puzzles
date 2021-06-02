/**
 * https://leetcode.com/problems/number-of-islands/
 */
export function numIslands(grid: string[][]): number {
  const visited: boolean[][] = []
  for (let index = 0; index < grid.length; index++) {
    visited.push(new Array(grid[0].length).fill(false))
  }
  let result = 0

  function visitNode(i: number, j: number, onAnIsland = false): void {
    if (
      i < 0 ||
      j < 0 ||
      i === grid.length ||
      j === grid[0].length ||
      visited[i][j]
    ) {
      return
    }

    visited[i][j] = true

    if (grid[i][j] === '0') {
      return
    }

    if (!onAnIsland) {
      result++
    }

    visitNode(i - 1, j, true)
    visitNode(i, j - 1, true)
    visitNode(i + 1, j, true)
    visitNode(i, j + 1, true)
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      visitNode(i, j)
    }
  }

  return result
}
