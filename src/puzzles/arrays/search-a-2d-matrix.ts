/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 */

export function searchMatrix(matrix: number[][], target: number): boolean {
  if (!matrix.length) {
    return false
  }

  const width = matrix[0].length

  function binarySearch(row: number[], start: number, end: number): boolean {
    if (start > end) {
      return false
    }

    if (start === end) {
      return row[start] === target
    }

    const mid = Math.floor((start + end) / 2)

    if (row[mid] === target) {
      return true
    }

    if (row[mid] > target) {
      return binarySearch(row, start, mid - 1)
    } else {
      return binarySearch(row, mid + 1, end)
    }
  }

  for (let index = 0; index < matrix.length; index++) {
    const lastCellInRow = matrix[index][width - 1]
    if (lastCellInRow === target) {
      return true
    } else if (lastCellInRow > target) {
      return binarySearch(matrix[index], 0, width)
    }
  }

	return false
}
