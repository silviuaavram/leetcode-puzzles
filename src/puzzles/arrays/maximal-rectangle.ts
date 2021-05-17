/**
 * https://leetcode.com/problems/maximal-rectangle/
 */
export function maximalRectangle(matrix: string[][]): number {
  if (!matrix.length) {
    return 0
  }

  const values: number[][] = []
  let max = 0

  for (let i = 0; i < matrix.length; i++) {
    values[i] = []
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '0') {
        values[i][j] = 0
      } else {
        values[i][j] = 1 + (j > 0 ? values[i][j - 1] : 0)
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let min = values[i][j]
      for (let k = i; k >= 0; k--) {
        min = Math.min(min, values[k][j])
        max = Math.max(max, min * (i - k + 1))
      }
    }    
  }

  return max
}
