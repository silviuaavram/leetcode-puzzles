/**
 * https://leetcode.com/problems/pacific-atlantic-water-flow/
 */
export function pacificAtlantic(heights: number[][]): number[][] {
  const rows = heights.length
  const columns = heights[0].length
  const atlanticFlows: boolean[][] = []
  const pacificFlows: boolean[][] = []

  for (let i = 0; i < rows; i++) {
    atlanticFlows.push(new Array(columns).fill(false))
    pacificFlows.push(new Array(columns).fill(false))
  }

  function visitNode(
    i: number,
    j: number,
    flows: boolean[][],
    prevElevation = 0,
  ): void {
    if (i < 0 || j < 0 || i === rows || j === columns) {
      return
    }

    const elevation = heights[i][j]

    if (elevation < prevElevation) {
      return
    }

    if (!flows[i][j]) {
      flows[i][j] = true

      visitNode(i + 1, j, flows, elevation)
      visitNode(i - 1, j, flows, elevation)
      visitNode(i, j + 1, flows, elevation)
      visitNode(i, j - 1, flows, elevation)

      return
    }
  }

  for (let i = 0; i < rows; i++) {
    visitNode(i, 0, pacificFlows)
    visitNode(i, columns - 1, atlanticFlows)
  }

  for (let i = 0; i < columns; i++) {
    visitNode(0, i, pacificFlows)
    visitNode(rows - 1, i, atlanticFlows)
  }

  let result: number[][] = []

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (atlanticFlows[i][j] && pacificFlows[i][j]) {
        result.push([i, j])
      }
    }
  }

  return result
}
