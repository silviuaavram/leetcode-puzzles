/**
 * https://leetcode.com/problems/shortest-path-to-get-food/
 */
export function getFood(grid: string[][]): number {
  const START_LOCATION = '*'
  const FOOD_CELL = '#'
  const FREE_SPACE = 'O'
  const OBSTACLE = 'X'
  const rows = grid.length
  const columns = grid[0].length
  const visited: number[][] = []
  const nodes: number[][] = []
  let result = -1

  for (let i = 0; i < rows; i++) {
    visited.push(new Array(columns).fill(-1))
  }

  function isNodeVisitable(i: number, j: number): boolean {
    return !(
      i < 0 ||
      j < 0 ||
      i === rows ||
      j === columns ||
      grid[i][j] === OBSTACLE ||
      visited[i][j] !== -1
    )
  }

  function visitNode(i: number, j: number, cost: number): void {
    if (isNodeVisitable(i, j)) {
      visited[i][j] = cost
      nodes.push([i, j])
    }
  }

  function checkNeighbours(i: number, j: number): void {
    const cost = visited[i][j]

    if (grid[i][j] === FOOD_CELL) {
      result = result === -1 ? cost : Math.min(cost, result)
    }

    visitNode(i - 1, j, cost + 1)
    visitNode(i + 1, j, cost + 1)
    visitNode(i, j + 1, cost + 1)
    visitNode(i, j - 1, cost + 1)
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] === START_LOCATION) {
        visitNode(i, j, 0)

        while (nodes.length) {
          const [currentI, currentJ] = nodes.shift()

          checkNeighbours(currentI, currentJ)
        }

        return result
      }
    }
  }

  throw new Error('should not end here')
}
