/**
 * https://leetcode.com/problems/rotate-image/
 */

/**
 Do not return anything, modify matrix in-place instead.
 */
export function rotate(matrix: number[][]): void {
  let x = 1
  const size = matrix.length
  if (size < 2) {
    return
  }

  function switchElements(
    m1: number,
    n1: number,
    m2: number,
    n2: number,
  ): void {
    matrix[m1][n1] = matrix[m1][n1] + matrix[m2][n2]
    matrix[m2][n2] = matrix[m1][n1] - matrix[m2][n2]
    matrix[m1][n1] = matrix[m1][n1] - matrix[m2][n2]
  }

  for (let i = 0; i < Math.floor(size / 2); i++) {
    const end = size - i - 1
    for (let j = 0; j < size - i * 2 - 1; j++) {
      switchElements(i, i + j, i + j, end)
      switchElements(end, end - j, i, i + j)
      switchElements(end - j, i, i, i + j)
    }
  }
}
