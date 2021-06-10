/**
 * https://leetcode.com/problems/graph-valid-tree/
 */
export function validTree(n: number, edges: number[][]): boolean {
  const nodes = new Map<number, number[]>()
  const visited = new Set<number>()

  for (let index = 0; index < edges.length; index++) {
    const [first, second] = edges[index]

    if (!nodes.has(first)) {
      nodes.set(first, [])
    }
    if (!nodes.has(second)) {
      nodes.set(second, [])
    }

    nodes.get(first).push(second)
    nodes.get(second).push(first)
  }

  function visitNode(node: number, prev?: number): boolean {
    if (visited.has(node)) {
      return false
    }
    const neighbours = nodes.get(node)
    visited.add(node)

    if (!neighbours) {
      return true
    }

    for (let index = 0; index < neighbours.length; index++) {
      if (prev === neighbours[index]) {
        continue
      }
      const visitedResult = visitNode(neighbours[index], node)

      if (!visitedResult) {
        return false
      }
    }

    return true
  }

  const validTree = visitNode(0)

  return validTree && visited.size === n
}
