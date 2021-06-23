/**
 * https://leetcode.com/problems/minimum-height-trees/
 */
export function findMinHeightTrees(n: number, edges: number[][]): number[] {
  const graph = new Map<number, number[]>()
  const callbacks: Function[] = []

  for (let index = 0; index < n; index++) {
    graph.set(index, [])
  }

  for (const edge of edges) {
    graph.get(edge[0]).push(edge[1])
    graph.get(edge[1]).push(edge[0])
  }

  function visitNode(node: number, inProgress: Set<number>): void {
    if (inProgress.has(node)) {
      return
    }

    const neighbours = graph.get(node)

    if (neighbours.length === 1) {
      const neighbour = neighbours[0]

      callbacks.push(() => {
        graph.get(neighbour).splice(graph.get(neighbour).indexOf(node), 1)
        graph.delete(node)
      })
    }

    inProgress.add(node)

    for (const neighbour of neighbours) {
      visitNode(neighbour, inProgress)
    }
  }

  while (graph.size > 2) {
    const inProgress = new Set<number>()

    for (const node of graph.keys()) {
      visitNode(node, inProgress)
    }

    for (const callback of callbacks) {
      callback()
    }

    callbacks.length = 0
  }

  return Array.from(graph.keys())
}
