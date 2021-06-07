/**
 * https://leetcode.com/problems/number-of-distinct-islands/
 */
export function numDistinctIslands(grid: number[][]): number {
  const rows = grid.length
  const columns = grid[0].length
  const islands = new Map<string, number[][]>()
  const visited: boolean[][] = []

  for (let index = 0; index < rows; index++) {
    visited.push(new Array(columns).fill(false))
  }

  function getId(i: number, j: number): string {
    return `${i}-${j}`
  }

  function visit(i: number, j: number, startI: number, startJ: number): void {
    if (
      i < 0 ||
      j < 0 ||
      i === rows ||
      j === columns ||
      grid[i][j] === 0 ||
      visited[i][j]
    ) {
      return
    }

    const islandId = getId(startI, startJ)
    visited[i][j] = true

    if (!islands.has(islandId)) {
      islands.set(islandId, [])
    }

    islands.get(islandId).push([i - startI, j - startJ])

    visit(i - 1, j, startI, startJ)
    visit(i, j + 1, startI, startJ)
    visit(i + 1, j, startI, startJ)
    visit(i, j - 1, startI, startJ)
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (grid[i][j] !== 0 && !visited[i][j]) {
        visit(i, j, i, j)

        const currentIslandId = getId(i, j)
        const currentIslandPoints = islands.get(currentIslandId)

        for (const islandPoints of islands.values()) {
          if (islandPoints === currentIslandPoints) {
            continue
          }
          if (currentIslandPoints.length === islandPoints.length) {
            let i
            for (i = 0; i < currentIslandPoints.length; i++) {
              if (
                currentIslandPoints[i][0] !== islandPoints[i][0] ||
                currentIslandPoints[i][1] !== islandPoints[i][1]
              ) {
                break
              }
            }

            if (i === currentIslandPoints.length) {
              islands.delete(currentIslandId)
            }
          }
        }
      }
    }
  }

  return islands.size
}
