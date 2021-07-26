/**
 * https://leetcode.com/problems/spiral-matrix-ii/
 */
export function generateMatrix(n: number): number[][] {
  const matrix: number[][] = []
  for (let index = 0; index < n; index++) {
    matrix.push([])
  }

  function visitCell(
    i: number = 0,
    j: number = 0,
    direction: 'left' | 'right' | 'up' | 'down' = 'right',
    value = 1,
  ): void {
    matrix[i][j] = value++

    switch (direction) {
      case 'right':
        if (j + 1 === n || matrix[i][j + 1] !== undefined) {
          if (matrix[i + 1] === undefined || matrix[i + 1][j] !== undefined) {
            return
          } else {
            visitCell(i + 1, j, 'down', value)
          }
        } else {
          visitCell(i, j + 1, 'right', value)
        }
        break
      case 'down':
        if (i + 1 === n || matrix[i + 1][j] !== undefined) {
          if (matrix[i][j - 1] !== undefined) {
            return
          } else {
            visitCell(i, j - 1, 'left', value)
          }
        } else {
          visitCell(i + 1, j, 'down', value)
        }
        break
      case 'left':
        if (j - 1 === -1 || matrix[i][j - 1] !== undefined) {
          if (matrix[i - 1][j] !== undefined) {
            return
          } else {
            visitCell(i - 1, j, 'up', value)
          }
        } else {
          visitCell(i, j - 1, 'left', value)
        }
        break
      case 'up':
        if (i - 1 === -1 || matrix[i - 1][j] !== undefined) {
          if (matrix[i][j + 1] !== undefined) {
            return
          } else {
            visitCell(i, j + 1, 'right', value)
          }
        } else {
          visitCell(i - 1, j, 'up', value)
        }
        break
    }
  }

  visitCell()

  return matrix
}
