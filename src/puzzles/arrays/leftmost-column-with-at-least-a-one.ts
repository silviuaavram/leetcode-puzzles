/**
 * https://leetcode.com/problems/leftmost-column-with-at-least-a-one/
 */

export class BinaryMatrix {
  constructor(mat: number[][]) {
    this.mat = mat
  }

  mat: number[][]
  get(row: number, col: number): number {
    return this.mat[row][col]
  }

  dimensions(): number[] {
    return [this.mat.length, this.mat[0].length]
  }
}

export function leftMostColumnWithOne(binaryMatrix: BinaryMatrix) {
  const [rows, columns] = binaryMatrix.dimensions()
  let minColumnIndex = columns

  function searchForOne(start: number, end: number, row: number): boolean {
    if (start > end) {
      return false
    }

    if (start === end && binaryMatrix.get(row, start) === 1) {
      minColumnIndex = start
    }

    const mid = Math.floor((start + end) / 2)
    const value = binaryMatrix.get(row, mid)

    if (value === 1) {
      minColumnIndex = mid
      searchForOne(start, mid - 1, row)
    } else {
      searchForOne(mid + 1, end, row)
    }
  }

  for (let index = 0; index < rows; index++) {
    if (minColumnIndex === 0) {
      return 0
    }

    searchForOne(0, minColumnIndex - 1, index)
  }

  return minColumnIndex === columns ? -1 : minColumnIndex
}
