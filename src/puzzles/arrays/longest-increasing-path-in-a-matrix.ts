/**
 * https://leetcode.com/problems/longest-increasing-path-in-a-matrix/
 */

function getEmptyMatrix(m: number, n: number): any[][] {
  const matrix = []

  for (let index = 0; index < m; index++) {
    matrix.push(new Array(n).fill(0))
  }

  return matrix
}

export function longestIncreasingPath(matrix: number[][]): number {
  const rows = matrix.length
  const columns = matrix[0].length
  const visited = getEmptyMatrix(rows, columns)
  let maxPath = 0

  function visit(m: number, n: number): void {
    if (visited[m][n]) {
      return
    }

    if (m < rows - 1 && matrix[m][n] < matrix[m + 1][n]) {
      visit(m + 1, n)
      visited[m][n] = Math.max(visited[m][n], 1 + visited[m + 1][n])
    }

    if (m > 0 && matrix[m][n] < matrix[m - 1][n]) {
      visit(m - 1, n)
      visited[m][n] = Math.max(visited[m][n], 1 + visited[m - 1][n])
    }

    if (n < columns - 1 && matrix[m][n] < matrix[m][n + 1]) {
      visit(m, n + 1)
      visited[m][n] = Math.max(visited[m][n], 1 + visited[m][n + 1])
    }

    if (n > 0 && matrix[m][n] < matrix[m][n - 1]) {
      visit(m, n - 1)
      visited[m][n] = Math.max(visited[m][n], 1 + visited[m][n - 1])
    }

    if (!visited[m][n]) {
      visited[m][n] = 1
    }

    return visited[m][n]
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (!visited[i][j]) {
        visit(i, j)
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      maxPath = Math.max(maxPath, visited[i][j])
    }
  }

  return maxPath
}
