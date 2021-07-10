/**
 * https://leetcode.com/problems/redundant-connection/
 */
export function findRedundantConnection(edges: number[][]): number[] {
  const visited = new Set<number>()
  const graph = new Map<number, number[]>()
  let maxIndex = -1

  for (let index = 0; index < edges.length; index++) {
    const [visitor, visitee] = edges[index]

    if (!graph.has(visitor)) {
      graph.set(visitor, [])
    }
    if (!graph.has(visitee)) {
      graph.set(visitee, [])
    }

    graph.get(visitee).push(visitor)
    graph.get(visitor).push(visitee)
  }

  /**
   * Returns true if there is a cycle (node is visited).
   */
  function visitNode(node: number, prevs: number[] = []): void {
    if (visited.has(node)) {
      const route = [...prevs.slice(prevs.indexOf(node)), node]

      for (let index = 0; index < route.length - 1; index++) {
        const node1 = route[index]
        const node2 = route[index + 1]

        maxIndex = Math.max(
          maxIndex,
          edges.findIndex(
            edge =>
              (edge[0] === node1 && edge[1] === node2) ||
              (edge[0] === node2 && edge[1] === node1),
          ),
        )
      }

      return
    }

    visited.add(node)

    const neighbours = graph.get(node)

    for (const neighbour of neighbours) {
      if (neighbour !== prevs[prevs.length - 1]) {
        visitNode(neighbour, [...prevs, node])
      }
    }
  }

  visitNode(1)

  return edges[maxIndex]
}
