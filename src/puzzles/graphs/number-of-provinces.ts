/**
 * https://leetcode.com/problems/number-of-provinces/
 */
export function findCircleNum(isConnected: number[][]): number {
  const graph = new Map<number, number[]>()
  const visited = new Set<number>()
  let result = 0

  for (let i = 0; i < isConnected.length; i++) {
    graph.set(i, [])
    for (let j = 0; j < isConnected[0].length; j++) {
      if (isConnected[i][j] && i !== j) {
        graph.get(i).push(j)
      }
    }
  }

  function visitNode(node: number): void {
    if (visited.has(node)) {
      return
    }

    visited.add(node)
    const neighbours = graph.get(node)

    if (!neighbours.length) {
      return
    }

    for (const neighbour of neighbours) {
      visitNode(neighbour)
    }
  }

  for (let index = 0; index < isConnected.length; index++) {
    if (!visited.has(index)) {
      result++
      visitNode(index)
    }
  }

  return result
}
