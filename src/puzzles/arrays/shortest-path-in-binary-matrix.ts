/**
 * https://leetcode.com/problems/shortest-path-in-binary-matrix/
 */
export function shortestPathBinaryMatrix(grid: number[][]): number {
  const rows = grid.length
  const columns = grid[0].length
  const queue = [[0, 0]]
  const movementIndeces = [-1, 0, 1]

  if (grid[0][0] === 1) {
    return -1
  }

  grid[0][0] = 1

  while (queue.length) {
    const [i, j] = queue.shift()
    const distance = grid[i][j]

    if (i === rows - 1 && j === columns - 1) {
      return distance
    }

    for (const moveI of movementIndeces) {
      const nextI = i + moveI

      if (nextI < 0 || nextI === rows) {
        continue
      }

      for (const moveJ of movementIndeces) {
        if (moveI === 0 && moveJ === 0) {
          continue
        }

        const nextJ = j + moveJ

        if (nextJ < 0 || nextJ === columns) {
          continue
        }

        if (grid[nextI][nextJ] === 0) {
          grid[nextI][nextJ] = distance + 1
          queue.push([nextI, nextJ])
        }
      }
    }
  }

  return -1
}
