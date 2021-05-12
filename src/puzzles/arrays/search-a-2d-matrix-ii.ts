/**
 * https://leetcode.com/problems/search-a-2d-matrix-ii/
 */
export function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length

  if (!m) {
    return false
  }

  const n = matrix[0].length
  function binarySearch(
    start: number,
    end: number,
    index: number,
    vertical: boolean,
  ): boolean {
    if (start > end) {
      return false
    }

    if (start === end) {
      return vertical
        ? matrix[start][index] === target
        : matrix[index][start] === target
    }

    const middle = Math.floor((start + end) / 2)

    if (
      (vertical && matrix[middle][index] === target) ||
      (!vertical && matrix[index][middle] === target)
    ) {
      return true
    }

    if (
      (vertical && matrix[middle][index] > target) ||
      (!vertical && matrix[index][middle] > target)
    ) {
      return binarySearch(start, middle - 1, index, vertical)
    } else {
      return binarySearch(middle + 1, end, index, vertical)
    }
  }

  for (let index = 0; index < m; index++) {
    if (matrix[index][0] > target) {
      break
    }

    if (binarySearch(0, n - 1, index, false)) {
      return true
    }
  }

  for (let index = 0; index < n; index++) {
    if (matrix[0][index] > target) {
      break
    }

    if (binarySearch(0, m - 1, index, true)) {
      return true
    }
  }

  return false
}
