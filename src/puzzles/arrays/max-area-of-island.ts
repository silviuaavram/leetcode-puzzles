/**
 * https://leetcode.com/problems/max-area-of-island/
 */
export function maxAreaOfIsland(grid: number[][]): number {
  if (!grid.length) {
    return 0
  }

  const rows = grid.length
  const columns = grid[0].length
  const visited: boolean[][] = []
  let max = 0

  for (let index = 0; index < rows; index++) {
    visited.push([])
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (visited[i][j]) {
        continue
      }

      visited[i][j] = true

      if (grid[i][j] === 1) {
        let count = 0
        const stack: number[][] = [[i, j]]
        visited[i][j] = true

        while (stack.length) {
          const [ci, cj] = stack.pop()
          count++

          if (ci + 1 < rows && grid[ci + 1][cj] === 1 && !visited[ci + 1][cj]) {
            stack.push([ci + 1, cj])
            visited[ci + 1][cj] = true
          }

          if (
            cj + 1 < columns &&
            grid[ci][cj + 1] === 1 &&
            !visited[ci][cj + 1]
          ) {
            stack.push([ci, cj + 1])
            visited[ci][cj + 1] = true
          }
          if (ci - 1 >= 0 && grid[ci - 1][cj] === 1 && !visited[ci - 1][cj]) {
            stack.push([ci - 1, cj])
            visited[ci - 1][cj] = true
          }

          if (cj - 1 >= 0 && grid[ci][cj - 1] === 1 && !visited[ci][cj - 1]) {
            stack.push([ci, cj - 1])
            visited[ci][cj - 1] = true
          }
        }
        max = Math.max(count, max)
      }
    }
  }

  return max
}
