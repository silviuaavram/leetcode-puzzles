/**
 * https://leetcode.com/problems/rotting-oranges/
 */
export function orangesRotting(grid: number[][]): number {
  const minutes: number[][] = []
  const rows = grid.length
  const columns = grid[0].length

  for (let index = 0; index < rows; index++) {
    minutes.push(new Array(columns).fill(0))
  }

  function performRot(i: number, j: number, minute = 1) {
    if (
      i < 0 ||
      j < 0 ||
      i === rows ||
      j === columns ||
      grid[i][j] !== 1 ||
      (minutes[i][j] !== 0 && minutes[i][j] < minute)
    ) {
      return
    }

    minutes[i][j] = minute

    performRot(i - 1, j, minute + 1)
    performRot(i + 1, j, minute + 1)
    performRot(i, j - 1, minute + 1)
    performRot(i, j + 1, minute + 1)
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === 2) {
        performRot(i - 1, j)
        performRot(i + 1, j)
        performRot(i, j - 1)
        performRot(i, j + 1)
      }
    }
  }

  let result = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === 1) {
        if (minutes[i][j] > 0) {
          result = Math.max(result, minutes[i][j])
        } else {
          return -1
        }
      }
    }
  }

  return result
}
