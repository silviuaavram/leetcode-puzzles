/**
 * https://leetcode.com/problems/count-square-submatrices-with-all-ones/
 */
export function countSquares(matrix: number[][]): number {
  const rows = matrix.length
  const columns = matrix[0].length
  const minSize = Math.min(rows, columns)
  let result = 0

  function checkMatrix(m: number, n: number): number {
    let size
    if (matrix[m][n] === 0) {
      return 0
    }

    for (size = 1; size < minSize; size++) {
      if (m + size >= rows || n + size >= columns) {
        return size
      }

      for (let i = 0; i <= size; i++) {
        if (matrix[m + size][n + i] === 0) {
          return size
        }
      }

      for (let i = 0; i < size; i++) {
        if (matrix[m + i][n + size] === 0) {
          return size
        }
      }
    }

    return size
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      result += checkMatrix(i, j)
    }
  }

  return result
}
