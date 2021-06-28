/**
 * https://leetcode.com/problems/01-matrix/
 */
export function updateMatrix(mat: number[][]): number[][] {
  const rows = mat.length
  const columns = mat[0].length
  const distances: number[][] = []
  for (let index = 0; index < rows; index++) {
    distances.push(new Array(columns).fill(undefined))
  }

  function visitCell(i: number, j: number, distance = 1) {
    if (i < 0 || j < 0 || i === rows || j === columns) {
      return
    }

    if (mat[i][j] === 0 && distances[i][j] === undefined) {
      distances[i][j] = 0

      visitCell(i - 1, j)
      visitCell(i + 1, j)
      visitCell(i, j - 1)
      visitCell(i, j + 1)
    } else if (distances[i][j] === undefined || distances[i][j] > distance) {
      distances[i][j] = distance

      visitCell(i - 1, j, distance + 1)
      visitCell(i + 1, j, distance + 1)
      visitCell(i, j - 1, distance + 1)
      visitCell(i, j + 1, distance + 1)
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (mat[i][j] === 0 && distances[i][j] === undefined) {
        visitCell(i, j)
      }
    }
  }

  return distances
}
