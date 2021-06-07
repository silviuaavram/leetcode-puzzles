/**
 * https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/
 */
export function countComponents(n: number, edges: number[][]): number {
  let result = 0
  const visited = new Set<number>()
  const graph = new Map<number, number[]>()

  for (let index = 0; index < n; index++) {
    graph.set(index, [])
  }

  for (const [node1, node2] of edges) {
    graph.get(node1).push(node2)
    graph.get(node2).push(node1)
  }

  function visitNode(node: number): void {
    const neighbours = graph.get(node)
    visited.add(node)

    for (const neighbour of neighbours) {
      if (visited.has(neighbour)) {
        continue
      }

      visitNode(neighbour)
    }
  }

  graph.forEach((neighbours, node) => {
    if (!visited.has(node)) {
      visitNode(node)

      result++
    }
  })

  return result
}
